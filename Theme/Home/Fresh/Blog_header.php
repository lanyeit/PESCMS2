<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Access-Control-Allow-Origin" content="*">
        <title><?php if($title) echo "{$title} - " ?>PES blog</title>
        <meta name="keywords" content="<?= empty($keyword) ? '' : $keyword; ?>" />
        <meta name="description" content="<?= empty($description) ? '' : $description; ?>" />
        <meta name="copyright" content="(c)2014 - <?= date('Y'); ?> pescms.com" />
        <meta name="author" content="PESCMS" />
        <link type="text/css" rel="stylesheet" href="/Theme/Origin/syntax/styles/shCore.css"/>
        <link type="text/css" rel="stylesheet" href="/Theme/Origin/syntax/styles/shThemeDefault.css"/>
        <link type="text/css" rel="stylesheet" href="/Theme/Home/PESCMS/css/blog.css"/>
        <script type="text/javascript" src="/Theme/Origin/syntax/scripts/brush.js"></script>
        <script class="javascript">
            SyntaxHighlighter.config.clipboardSwf = '/Theme/Origin/syntax/scripts/clipboard.swf';
            SyntaxHighlighter.all();
        </script>
    </head>
    <body>
        <div id="header">
            <div id="header-inner">
                <div id="title"><a href="/">PES blog</a></div>
                <div id="subtitle">致力于改善代码质量</div>
            </div>
        </div>