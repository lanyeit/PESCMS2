<!DOCTYPE html>
<html>
    <head>
        <title>后台模板</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link type="text/css" rel="stylesheet" href="/Theme/Admin/PESCMS/css/base.css"/>
        <script src="/Theme/Admin/PESCMS/js/jquery-2.1.1.min.js"></script>
        <script src="/Theme/Admin/PESCMS/js/base.js"></script>
    </head>
    <body>
        <div class="wrapper">
            <!--页眉开始-->
            <header class="global-header">
                <a href="" class="logo">
                    <h1>PESCMS</h1>
                </a>
                <ul class="header-nav">
                    <li id="go-home"><a href="/">网站首页</a></li>
                    <li><a href="http://git.oschina.net/fallBirds/PESCMS-Backgroun-Template" target="_blank">源码下载</a></li>
                    <li id="logout"><a href="/login.html">注销登录</a></li>
                </ul>
            </header>
            <!--页眉结束-->
            <div style="clear: both"></div>
            <!--主区开始-->
            <div class="main" id="top">
                <div class="nav-container">
                    <ul class="nav-level1" style="position: fixed;">
                        <?php foreach ($menu as $topkey => $topValu) : ?>
                            <li class="nav-item">
                                <a href="javascript:;">
                                    <span class="nav-icon nav-icon-home"></span>
                                    <span class="nav-label"><?php echo $GLOBALS['_LANG']['MENU'][$topValu['name']]; ?></span>
                                </a>
                                <?php if (!empty($topValu['child'])): ?>
                                    <ul class="nav-level2">
                                        <?php foreach ($topValu['child'] as $key => $value) : ?>
                                            <li class="nav-item">
                                                <a href="<?php echo $label->url($value['url']); ?>">
                                                    <span class="nav-icon"></span>
                                                    <span class="nav-label"><?php echo $GLOBALS['_LANG']['MENU'][$value['name']]; ?></span>
                                                </a>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            </li>
                        <?php endforeach; ?>

                    </ul>
                </div>
                <div class="group tabs">
                    <div class="tab-panel-container">
                        <iframe id="iframe_default" src="" style="width: 100%; height: 100%;" data-id="default" frameborder="0" scrolling="auto"></iframe>
                    </div>
                </div>
            </div>
            <!--主区结束-->
        </div>
        <!--页脚开始-->
        <!--<footer class="global-footer"></footer>-->
        <!--页脚结束-->
    </body>
</html>