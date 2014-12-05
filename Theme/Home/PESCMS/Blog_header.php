<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Access-Control-Allow-Origin" content="*">
        <title><?php if($title) echo "{$title} - " ?>PES blog</title>
        <meta name="keywords" content="<?php echo empty($keyword) ? '' : $keyword; ?>" />
        <meta name="description" content="<?php echo empty($description) ? '' : $description; ?>" />
        <meta name="copyright" content="(c)2014 - <?php echo date('Y'); ?> pescms.com" />
        <meta name="author" content="pes" />
        <!--加载js骨架文件-->
        <script src="/Component/uetjs/uet.js"></script>
        <script>
            /* 加载样式文件 */
            loadStyle({
                blog: {
                    path: '/Theme/Home/pes/css/',
                    name: 'blog'
                },
                shCore: {
                    path: '/Component/syntax/styles/',
                    name: 'shCore'
                },
                shThemeDefault: {
                    path: '/Component/syntax/styles/',
                    name: 'shThemeDefault'
                }
            })
            /* 加载JS文件 */
            loadScript({
                jQuery: {
                    path: '/Theme/Home/pes/js/',
                    name: 'jquery'
                },
                syntax: {
                    path: '/Component/syntax/scripts/',
                    name: 'brush'
                },
                blog: {
                    path: '/Theme/Home/pes/js/',
                    name: 'blog'
                }
            });
        </script>
    </head>
    <body>
        <div id="header">
            <div id="header-inner">
                <div id="title"><a href="/">PES blog</a></div>
                <div id="subtitle">致力于改善代码质量</div>
            </div>
        </div>