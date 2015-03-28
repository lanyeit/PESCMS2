
$(window).load(function () {
    var oParent = document.getElementById("content-box");
    if (oParent == null) {
        return true;
    }
    //获取父级[第一个参数]下的所有的子元素[按照第二个参数匹配]
    var aPin = getClassObject(oParent, "pin");
    //获取每一个块的宽度
    var iPinW = aPin[0].offsetWidth;
    // //计算每行放多少个pin(瀑布流块)页面的宽度/每一个瀑布流块的宽度
    var num = Math.floor(oParent.offsetWidth / iPinW);

    var compareArray = [];
    for (var i = 0; i < aPin.length; i++) {
//        $(".color").eq(i).height($(".pin img").eq(i).height())
        if (i < num) {
            //成行元素
            compareArray[i] = aPin[i].offsetHeight;
        } else {
            //获取成行元素中高度最低的值
            var minHeight = Math.min.apply('', compareArray);
            //alert(compareArray + ",min=" + minHeight);
            //获取成行元素中高度最低元素的索引
            var minHkey = getMinHeightKey(compareArray, minHeight);
            //为新增的瀑布流块设置定位
            aPin[i].style.position = "absolute";
            aPin[i].style.top = minHeight + "px";
            //设定新增加的瀑布流块的top和left
            aPin[i].style.left = aPin[minHkey].offsetLeft + "px";
            //将该索引位置的高度改变为新增后的高度[原来瀑布流块的高度+新增的瀑布流块的高度]
            compareArray[minHkey] += aPin[i].offsetHeight;
        }

    }
    //弥补高度
    $("#content-box").height(document.body.scrollHeight + "px");
})


function getClassObject(parent, className) {
    var obj = parent.getElementsByTagName("*");
    var result = [];
    for (var i = 0; i < obj.length; i++) {
        //变量如果匹配className,将匹配的对象放入数组
        if (obj[i].className == className) {
            result.push(obj[i]);
        }
    }
    return result;
}
function getMinHeightKey(arr, minH) {
    for (key in arr) {
        if (arr[key] == minH) {
            return key;
        }
    }
}

$(function () {
    $(".box").on("mouseover", function () {
        var height = $(this).find("img").height();
        $(".color").hide().stop().animate({opacity: '0.76'}, 500);
        $(this).find('.color').height(height).show().stop().animate({opacity: '0.96'}, 500);
    })
    $(".box").on("mouseleave", function () {
        $(".color").stop().animate({opacity: '0'}, 200);
    })

    $(".verify-img").on("click", function () {
        $(this).attr("src", "/page/verify?" + Math.round(Math.random() * 10000000))
    })

    $("img").lazyload({
        placeholder: "/Theme/Home/PESCMS/img/grey.gif",
        effect: "fadeIn"
    });

    $('.fancybox').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
})