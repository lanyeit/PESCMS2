<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="generator" content="ApiGen 2.8.0" />

        <title><?= empty($title) ? "" : "{$title} - "; ?><?= empty($cat['cate_name']) ? "" : "{$cat['cate_name']} - "; ?><?= $sitetitle; ?></title>
        <link type="text/css" rel="stylesheet" href="<?= $siteurl; ?>/Theme/Origin/syntax/styles/shCore.css"/>
        <link type="text/css" rel="stylesheet" href="<?= $siteurl; ?>/Theme/Origin/syntax/styles/shThemeDefault.css"/>
        <link rel="stylesheet" type="text/css" media="all" href="<?= $siteurl; ?>/Theme/Home/Doc/css/style.css" />
        <script type="text/javascript" src="<?= $siteurl; ?>/Theme/Home/Doc/js/combined.js"></script>
        <script type="text/javascript" src="<?= $siteurl; ?>/Theme/Home/Doc/js/elementlist.js"></script>
        <script type="text/javascript" src="<?= $siteurl; ?>/Theme/Origin/syntax/scripts/brush.js"></script>
        <script class="javascript">
            SyntaxHighlighter.config.clipboardSwf = '<?= $siteurl; ?>/Theme/Origin/syntax/scripts/clipboard.swf';
            SyntaxHighlighter.all();
        </script>
    </head>

    <body>