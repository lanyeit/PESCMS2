<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title><?= empty($title) ? '' : $title . ' - '; ?>肉丝网</title>
        <link type="text/css" rel="stylesheet" href="/Theme/Home/PESCMS/css/beauty.css"/>
        <link type="text/css" rel="stylesheet" href="/Theme/Home/PESCMS/css/jquery.fancybox.css"/>
        <script src="/Theme/Home/PESCMS/js/jquery.js"></script>
        <script src="/Theme/Home/PESCMS/js/jquery.lazyload.js"></script>
        <script src="/Theme/Home/PESCMS/js/beauty.js"></script>
        <script src="/Theme/Home/PESCMS/js/jquery.fancybox.pack.js"></script>
    </head>
    <body>
        <!--页眉开始-->
        <header class="global-header">
            <div class="topsearch">
                <form id="topsearch" method="get" action="">                            
                    <input class="searchinput" type="text" name="s" id="s2" value="<?= $s; ?>" placeholder="Search"/>
                </form>
            </div>
        </header>
        <div style="clear: both"></div>
        <!--页眉结束-->

        <!--内容区-->
        <div id="wrapper-main">
            <div class="container">
                <div class="main-header">
                    <div class="logo text">
                        <h3 class="nobot"><a href="/" title="肉丝网">肉丝网</a></h3>
                    </div>
                    <div id="main-nav">
                        <ul>
                            <li>
                                <a href="/" style="border-left-style: none;">首页</a>
                            </li>
                            <li>
                                <a href="<?= $label->url('page-about'); ?>">关于我们</a>
                            </li>
                            <li>
                                <a href="">归档图集</a>
                            </li>
                            <li>
                                <a href="<?= $label->url('page-contact'); ?>">联系我们</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="clear"></div>

                <?php include $file; ?>
            </div>
        </div>
        <!--内容区-->

        <!--页脚-->
        <div class="copyright-wrapper">
            <div class="container">
                <div class="sixteen columns">
                    <p>天王盖地虎 此处打一炮 图片均来自互联网 - Powered by PESCMS - Copyright <?= date('Y'); ?> </p>
                    <p>侵权违规投诉：<a href="<?= $label->url('page-contact'); ?>">点击我</a></p>
                </div>
            </div><!-- end .container -->
        </div>
        <div style="display:none">
            <script>
                var _hmt = _hmt || [];
                (function () {
                    var hm = document.createElement("script");
                    hm.src = "//hm.baidu.com/hm.js?c3f84930bf113f60dc9956791601893e";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
            </script>

        </div>
        <!--页脚-->
    </body>

</html>