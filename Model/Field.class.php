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
 * 字段模型
 */
class Field extends \Core\Model\Model {

    /**
     * 列出对应的模型的字段
     * @param type $modelId
     */
    public static function fieldList($modelId) {
        return self::db('field')->where('model_id = :model_id')->order('field_listsort asc, field_id asc')->select(array('model_id' => $modelId));
    }

    /**
     * 查找字段
     */
    public static function findField($fieldId) {
        return self::db('field')->where('field_id = :field_id')->find(array('field_id' => $fieldId));
    }

    /**
     * 查找对应模型的字段
     */
    public static function findTableField($tableName, $fieldName) {
        $fieldList = self::db()->getAll("show columns from pes_" . strtolower($tableName));
        foreach ($fieldList as $value) {
            if ($value['Field'] == $fieldName) {
                return true;
            }
        }
        return false;
    }

}
