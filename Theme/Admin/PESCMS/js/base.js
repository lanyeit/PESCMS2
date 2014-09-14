/**
 * 基础方法实现
 */

$(function() {
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
    $(window).resize(function() {
        $("#iframe_default").height($(window).height() - 59);
    });

    /**
     * 捕捉一级导航菜单的变化
     */
    $(".nav-level1>.nav-item").on("click", function() {
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
    $(".nav-level2>.nav-item").on("click", function() {
        $(".nav-level2>.nav-item").removeClass("activeTab");
        $(this).addClass("activeTab");
        $("#iframe_default").attr("src", $(this).children("a").attr("href"))
        return false;
    });
})
