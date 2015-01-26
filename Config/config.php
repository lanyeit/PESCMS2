<?php

return array(
    //数据库配置
    'DB_TYPE' => 'mysql',
    'DB_HOST' => 'localhost',
    'DB_NAME' => 'pescms',
    'DB_USER' => 'root',
    'DB_PWD' => '123456',
    'DB_PORT' => '3306',
    'DB_PREFIX' => 'pes_',
    'PRIVATE_KEY' => '5fVyrPpTqapZKPhhrt6v', //程序密钥,请定期更换
    'USER_KEY' => 'USRhKMAJiNuub9DJ5jue', //用户帐号密钥
    'LANGUAGE' => 'zh', //默认语言
    'ERROR_MES' => 'ON', //是否开启错误信息 | 必须大写 ON | OFF
    'ERROR_RANK' => '16', //需要显示的错误等级
    'ERROR_PROMPT' => '/Core/Theme/error.php', //脚本运行错误提示页面
    'APP_GROUP_LIST' => 'Home,Admin', //项目分组设定
    'DEFAULT_GROUP' => 'Home', //默认分组
    'FILE_CACHE_PATH' => './Temp', //文件缓存路径
    'FILE_CACHE_TIME' => '1800', //缓存时间(秒)
    'LOG_PATH' => '/log', //日志目录 | 默认为根目录log
    'LOG_DELETE' => '7', //日志删除隔间时间
    #'ADMIN_MES_PROMPT' => '', //后台提示页
    #'HOME_MES_PROMPT' => '', //前台提示页
    'UPLOAD_PATH' => '/upload', //上传的目录
);
