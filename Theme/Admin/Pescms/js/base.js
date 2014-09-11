/**
 * 基础方法实现
 */

$(function() {
    var menuLink = $(".nav-level1>.nav-item").eq(0).addClass("activeTab").children(".nav-level2").show().children(".nav-level2>.nav-item").eq(0).addClass("activeTab").children(".nav-level2>.nav-item a").eq(0).attr("href");
    $("#iframe_default").attr("src", menuLink);
    
    $(".nav-level1>.nav-item").on("click", function(e) {
        $(".nav-level1>.nav-item").removeClass("activeTab");
        $(this).addClass("activeTab")
        $(".nav-level2").hide();
        $(".nav-level2>.nav-item").removeClass("activeTab");
        $(this).children(".nav-level2").show().children(".nav-level2>.nav-item").eq(0).addClass("activeTab");
        return false;
    });

    $(".nav-level2>.nav-item").on("click", function() {
        $(".nav-level2>.nav-item").removeClass("activeTab");
        $(this).addClass("activeTab");
        $("#iframe_default").attr("src", $(this).children("a").attr("href"))
        return false;
    });
})
