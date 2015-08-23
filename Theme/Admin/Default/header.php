<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>PESCMS Login</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="renderer" content="webkit">
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <link rel="icon" type="image/png" href="<?= DOCUMENT_ROOT ?>/Theme/assets/i/favicon.png">
        <link rel="apple-touch-icon-precomposed" href="<?= DOCUMENT_ROOT ?>/Theme/assets/i/app-icon72x72@2x.png">
        <meta name="apple-mobile-web-app-title" content="Amaze UI" />
        <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/amazeui.min.css"/>
        <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/admin.css">
        <link rel="stylesheet" type="text/css" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/webuploader.css" />
        <link rel="stylesheet" type="text/css" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/ui-dialog.css" />
        <!--[if lt IE 9]>
      <script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>
      <script src="http://cdn.staticfile.org/modernizr/2.8.3/modernizr.js"></script>
      <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/polyfill/rem.min.js"></script>
      <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/polyfill/respond.min.js"></script>
      <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/amazeui.legacy.js"></script>
      <![endif]-->

        <!--[if (gte IE 9)|!(IE)]><!-->
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/jquery.min.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/amazeui.min.js"></script>
        <!--<![endif]-->
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/app.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/manage.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/webuploader.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/dialog-min.js"></script>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/dialog-plus-min.js"></script>
    </head>
    <body <?= MODULE == 'Index' && ACTION == 'index' ? 'class="am-with-fixed-header am-nbfc"' : '' ?>>
        <!--[if lte IE 9]>
        <p class="browsehappy">你正在使用<strong>过时</strong>的浏览器，Amaze UI 暂不支持。 请 <a href="http://browsehappy.com/" target="_blank">升级浏览器</a>
          以获得更好的体验！</p>
        <![endif]-->