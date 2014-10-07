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
 * 模型(Model)模型
 */
class Model extends \Core\Model\Model {

    /**
     * 模型列表
     */
    public static function modelList() {
        return self::db('model')->select();
    }

    /**
     * 查找模型
     * @param type $modelId 模型id
     */
    public static function findModel($modelId) {
        return self::db('model')->where('id = :id')->find(array('id' => $modelId));
    }

}
