<?php

/**
 * PESCMS run in PHP 5.3+
 *
 * Copyright (c) 2014 PESMCMS (http://www.pesmcs.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Core\Func;

/**
 * PES系统函数
 * @author LuoBoss
 * @copyright ©2003-2103 PESCMS
 * @license http://www.pescms.com/license
 * @version 1.0
 */
class CoreFunc {

    /**
     * 获取系统配置信息
     * @param type $name
     * @return type
     */
    final public static function loadConfig($name = NULL) {
        $config = require CONFIG_PATH . 'Config/config.php';
        if (empty($name)) {
            return $config;
        } else {
            return $config[$name];
        }
    }

}