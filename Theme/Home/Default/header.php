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
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="icon" type="image/png" href="/favicon.ico">
    <!--部分样式和脚本在页脚-->
    <link rel="stylesheet" href="http://cdn.amazeui.org/amazeui/2.4.2/css/amazeui.min.css"/>
    <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/admin.css"/>
    <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/pescms.css"/>
    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    <?php if (!empty($_SESSION['user'])): ?>
        <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/ueditor/ueditor.config.min.js"></script>
        <script src="http://7xlskq.com1.z0.glb.clouddn.com/ueditor.all.min.js"></script>
        <script src="http://7xlskq.com1.z0.glb.clouddn.com/@/lang/zh-cn/zh-cn.js"></script>
    <?php endif; ?>
    <script src="http://cdn.amazeui.org/amazeui/2.4.2/js/amazeui.min.js"></script>
</head>
<body>