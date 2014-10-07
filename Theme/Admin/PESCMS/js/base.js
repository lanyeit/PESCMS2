/**
 * 基础方法实现
 */

/**
 * 设置cookie
 * @param {type} name cookie名称
 * @param {type} value cookie值
 * @param {type} seconds 设置cookie的生成时间
 */
function setCookie(name, value, seconds) {
    seconds = seconds || 0;   //seconds有值就直接赋值，没有为0，这个根php不一样。  
    var expires = "";
    if (seconds != 0) {      //设置cookie生存时间  
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expires + "; path=/";   //转码并赋值  
}

/**
 * 取得cookie信息
 * @param {type} name 获取的cookie名称
 * @returns {Boolean} 返回cookie 或者false
 */
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');    //把cookie分割成组  
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];                      //取得字符串  
        while (c.charAt(0) == ' ') {          //判断一下字符串有没有前导空格  
            c = c.substring(1, c.length);      //有的话，从第二位开始取  
        }
        if (c.indexOf(nameEQ) == 0) {       //如果含有我们要的name  
            return unescape(c.substring(nameEQ.length, c.length));    //解码并截取我们要值  
        }
    }
    return false;
}

/**
 * 设置语言
 * @param {type} lang 语言名称
 * @returns {undefined}
 */
function setLanguage(lang) {
    setCookie('language', lang, 3600 * 24 * 7);
    window.location.reload();
}

/**
 * 执行restfull删除动作
 * @param {type} _this 当前操作的内部对象
 */
function del(_this) {
    var d = dialog({
        title: lang['COMMON']['SURE_DELETE'],
        content: lang['COMMON']['DELETE_TIPS'],
        okValue: lang['COMMON']['OK'],
        ok: function () {
            this.title(lang['COMMON']['RUN']);
            $.ajax({
                url: _this.href,
                type: "DELETE",
                dataType: 'JSON',
                success: function (data) {
                    if (data.status == "0") {
                        d.close().remove();
                        var c = dialog({
                            title: lang['COMMON']['NEWS_TIPS'],
                            content: data.info
                        });
                        c.show();
                        setTimeout(function () {
                            c.close().remove();
                        }, 1500);
                    } else if (data.status == "200") {
                        d.close().remove();
                        _this.parentNode.parentNode.remove()
                        var c = dialog({
                            title: lang['COMMON']['NEWS_TIPS'],
                            content: data.info
                        });
                        c.show();
                        setTimeout(function () {
                            c.close().remove();
                        }, 1500);
                    }
                }
            })
            return false;
        },
        cancelValue: lang['COMMON']['CANCEL'],
        cancel: function () {
        }
    });
    d.showModal();
    return false;
}

/**
 * 气泡提示
 * @param {type} langkey 语言包对应的键值
 * @param {type} langValue 语言包对应的值
 * @returns {unresolved} 返回提示对象
 */
function bubbleTips(langKey, langValue) {
    return dialog({
        content: lang[langKey][langValue],
        autofocus: false
    });
}


$(function () {
    /**
     * 初始化侧栏链接和样式布局
     */
    var menuLink = $(".nav-level1>.nav-item").eq(0).addClass("activeTab").children(".nav-level2").show().children(".nav-level2>.nav-item").eq(0).addClass("activeTab").children(".nav-level2>.nav-item a").eq(0).attr("href");
    $("#iframe_default").attr("src", menuLink);

    /**
     * 初始化页面加载框架的高度
     */
    $("#iframe_default").height($(window).height() - 59);

    /**
     * 监听页面框架的高度变化
     * 促使页面加载框架高度跟随变化。
     */
    $(window).resize(function () {
        $("#iframe_default").height($(window).height() - 59);
    });

    /**
     * 捕捉一级导航菜单的变化
     */
    $(".nav-level1>.nav-item").on("click", function () {
        $(".nav-level1>.nav-item").removeClass("activeTab");
        $(this).addClass("activeTab")
        $(".nav-level2").hide();
        $(".nav-level2>.nav-item").removeClass("activeTab");
        var menuLink = $(this).children(".nav-level2").show().children(".nav-level2>.nav-item").eq(0).addClass("activeTab").children(".nav-level2>.nav-item a").eq(0).attr("href");
        $("#iframe_default").attr("src", menuLink);
        return false;
    });

    /**
     * 捕捉二级导航菜单的变化
     */
    $(".nav-level2>.nav-item").on("click", function () {
        $(".nav-level2>.nav-item").removeClass("activeTab");
        $(this).addClass("activeTab");
        $("#iframe_default").attr("src", $(this).children("a").attr("href"))
        return false;
    });

    /**
     * 检查表单内容是否有填写
     */
    $("#form-submit").on("click", function () {
        var existEmpty = false;
        var firstFocus;
        $("#check-form-enter input, #check-form-enter select, #check-form-enter radio, #check-form-enter checkbox").each(function () {
            if ($(this).attr("required") != undefined && $(this).val() == "") {
                if (firstFocus == undefined) {
                    firstFocus = $(this);
                }
                $(this).css("border", "1px solid #FF001F");
                existEmpty = true;
            }
        })
        if (existEmpty == true) {
            firstFocus.focus();
            return false;
        }
    })

    /**
     * 移除必填项空内容的提示
     */
    $("#check-form-enter input, #check-form-enter select, #check-form-enter radio, #check-form-enter checkbox").blur(function () {
        if ($(this).attr("required") != undefined && $(this).val() != "") {
            $(this).removeAttr("style")
        }
    })

    /**
     * 输入框气泡提示
     */
    $(".form-input-tips").focus(function () {
        langData = $(this).attr("data").split("-");
        this.d = bubbleTips(langData[0], langData[1]);
        this.d.show(document.getElementById($(this).attr("id")))
    }).blur(function () {
        this.d.close().remove();
    })
})

