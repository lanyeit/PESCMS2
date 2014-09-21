<header>
    <h2 class="main-title"><?php echo $GLOBALS['_LANG']['MENU'][$title]; ?></h2>
</header>
<div class="home_info">
    <li><em><?php echo $GLOBALS['_LANG']['SYSTEM_VERSION']; ?></em> <span><?php echo $sysinfo['wind_version']; ?> <a
                href="http://www.pescms.com/Download-list-id-2"
                target="_blank"><?php echo $GLOBALS['_LANG']['VIEW_NEW_VERSION']; ?></a></span></li>
    <li><em><?php echo $GLOBALS['_LANG']['PHP_VERSION']; ?></em> <span><?php echo $sysinfo['php_version']; ?></span></li>
    <li><em><?php echo $GLOBALS['_LANG']['MYSQL_VERSION']; ?></em> <span><?php echo $sysinfo['mysql_version']; ?></span></li>
    <li><em><?php echo $GLOBALS['_LANG']['SERVER_INFO']; ?></em> <span><?php echo $sysinfo['server_software']; ?></span>
    </li>
    <li><em><?php echo $GLOBALS['_LANG']['MAX_UPLOAD']; ?></em> <span><?php echo $sysinfo['max_upload']; ?></span></li>
    <li><em><?php echo $GLOBALS['_LANG']['MAX_EXEC_TIME']; ?></em> <span><?php echo $sysinfo['max_excute_time']; ?></span>
    </li>
    <li><em><?php echo $GLOBALS['_LANG']['SYS_EMAIL']; ?></em> <span><?php echo $sysinfo['sys_mail']; ?></span></li>
</div>