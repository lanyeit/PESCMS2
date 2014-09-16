<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Model;

/**
 * 模型核心
 */
class Model {

    /**
     * 初始化数据库
     * @param str $name 表名
     * @return obj 返回数据库对象
     */
    protected function db($name = '') {
        static $db;

        if (empty($db)) {
            $db = \Core\Db\Db::__init();
        }

        $db->tableName($name);
        return $db;
    }

}
