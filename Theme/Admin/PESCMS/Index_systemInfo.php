<header>
    <h2 class="main-title">系统信息</h2>
</header>
<div class="home_info">
    <li><em>软件版本</em> <span><?php echo $sysinfo['wind_version']; ?> <a
                href="http://www.pescms.com/Download-list-id-2"
                target="_blank">查看最新版本</a></span></li>
    <li><em>PHP版本</em> <span><?php echo $sysinfo['php_version']; ?></span></li>
    <li><em>MYSQL版本</em> <span><?php echo $sysinfo['mysql_version']; ?></span></li>
    <li><em>服务器端信息</em> <span><?php echo $sysinfo['server_software']; ?></span>
    </li>
    <li><em>最大上传限制</em> <span><?php echo $sysinfo['max_upload']; ?></span></li>
    <li><em>最大执行时间</em> <span><?php echo $sysinfo['max_excute_time']; ?></span>
    </li>
    <li><em>邮件支持模式</em> <span><?php echo $sysinfo['sys_mail']; ?></span></li>
</div>