<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $GLOBALS['_LANG']['MENU_LIST'][$title]; ?></a></h2>
</header>
<div class="home_info">
    <li><em><?= $GLOBALS['_LANG']['SYSTEM']['SYSTEM_VERSION']; ?></em> <span><?= $sysinfo['wind_version']; ?> <a
                href="http://www.pescms.com/Download-list-id-2"
                target="_blank"><?= $GLOBALS['_LANG']['VIEW_NEW_VERSION']; ?></a></span></li>
    <li><em><?= $GLOBALS['_LANG']['SYSTEM']['PHP_VERSION']; ?></em> <span><?= $sysinfo['php_version']; ?></span></li>
    <li><em><?= $GLOBALS['_LANG']['SYSTEM']['MYSQL_VERSION']; ?></em> <span><?= $sysinfo['mysql_version']; ?></span></li>
    <li><em><?= $GLOBALS['_LANG']['SYSTEM']['SERVER_INFO']; ?></em> <span><?= $sysinfo['server_software']; ?></span>
    </li>
    <li><em><?= $GLOBALS['_LANG']['SYSTEM']['MAX_UPLOAD']; ?></em> <span><?= $sysinfo['max_upload']; ?></span></li>
    <li><em><?= $GLOBALS['_LANG']['SYSTEM']['MAX_EXEC_TIME']; ?></em> <span><?= $sysinfo['max_excute_time']; ?></span>
    </li>
    <li><em><?= $GLOBALS['_LANG']['SYSTEM']['SYS_EMAIL']; ?></em> <span><?= $sysinfo['sys_mail']; ?></span></li>
</div>