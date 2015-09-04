<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?= empty($title) ? '' : "{$title} - "; ?>PESCMS</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="renderer" content="webkit">
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <link rel="icon" type="image/png" href="/favicon.ico">
        <!--部分样式和脚本在页脚-->
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/jquery.min.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/ueditor/ueditor.config.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/ueditor/ueditor.all.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/ueditor/lang/zh-cn/zh-cn.js"></script>
    </head>
    <body>
        <header class="am-topbar am-margin-bottom-0">
            <div class="am-container">
                <h1 class="am-topbar-brand">
                    <a href="#">PESCMS</a>
                </h1>

                <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

                <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
                    <ul class="am-nav am-nav-pills am-topbar-nav">
                        <li class="am-active"><a href="#">首页</a></li>
                        <li><a href="#">项目</a></li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="pes-banner am-padding">
            <div class="am-u-sm-6 am-u-lg-centered am-text-center">
                <h1 class="am-text-xxl">开源让我们不断地进步!</h1>
                <p>马上获取全新的PESCMS产品</p>
            </div>
        </div>