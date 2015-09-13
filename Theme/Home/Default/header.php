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
        <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/amazeui.min.css"/>
        <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/admin.css"/>
        <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/pescms.css"/>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/jquery.min.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/ueditor/ueditor.config.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/ueditor/ueditor.all.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/ueditor/lang/zh-cn/zh-cn.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/amazeui.min.js"></script>
    </head>
    <body>
        <header class="am-topbar am-margin-bottom-0">
            <div class="am-container">
                <h1 class="am-topbar-brand">
                    <a href="/" class="am-text-ir">PESCMS</a>
                </h1>

                <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

                <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
                    <ul class="am-nav am-nav-pills am-topbar-nav">
                        <li class="<?= MODULE == 'Index' && ACTION == 'index' ? 'am-active' : '' ?>"><a href="/">首页</a></li>
                        <?php foreach ($headerMenu as $key => $value) : ?>
                            <li class="<?= $value['category_id'] == $catid || $value['category_id'] == $sidebarTopCat['category_id'] ? 'am-active' : '' ?>" ><a href="<?= $value['category_url']; ?>"><?= $value['category_name']; ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </header>