<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>PESCMS Login</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="format-detection" content="telephone=no">
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
        <style>
            .header {
                text-align: center;
            }
            .header h1 {
                font-size: 200%;
                color: #333;
                margin-top: 30px;
            }
            .header p {
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="am-g">
                <h1>PESCMS Login</h1>
                <p>简单，快捷，安全，全平台的网站登录器</p>
            </div>
            <hr />
        </div>
        <div class="am-g">
            <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">

                <form class="am-form" action="<?= $label->url('Admin-Login-dologin'); ?>" method="post" data-am-validator>
                    <label for="account">帐号:</label>
                    <input type="text" name="account"  value="" required>
                    <br>
                    <label for="password">密码:</label>
                    <input type="password" name="password"  value="" required>
                    <br>
                    <br />
                    <div class="am-cf">
                        <input type="submit" name="" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl">
                        <?php if ($signup == '1'): ?>
                            <a href="<?= $label->url('Admin-Login-signup'); ?>" class=" am-fr am-btn am-btn-primary am-btn-sm am-fl">注 册</a>
                        <?php endif; ?>
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>