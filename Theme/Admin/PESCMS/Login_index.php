<!DOCTYPE html>
<html>
    <head>
        <title>PESCMS - 管理平台</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link type="text/css" rel="stylesheet" href="/Theme/Admin/PESCMS/css/base.css"/>
        <script src="/Theme/Admin/PESCMS/js/jquery-2.1.1.min.js"></script>
        <script src="/Theme/Admin/PESCMS/js/base.js"></script>
    </head>
    <body>
        <form action="<?php echo $label->url('Admin-Login-dologin'); ?>" method="post">
            <div class="login-wrapper">
                <div class="login-logo">
                    <h1>PESCMS</h1>
                </div>
                <div class="login-space">
                    <div class="login-account">
                        <input type="text" name="account" placeholder="Account">
                    </div>
                    <div class="login-pwd">
                        <input type="password" name="password" placeholder="Password">
                    </div>
                </div>
                <div class="login-footer">
                    <div class="login-button">
                        <input type="submit" class="submit login-button" value="Login" />
                    </div>
                </div>
            </div>
            <?php echo $label->token(); ?>
        </form>
    </body>
</html>