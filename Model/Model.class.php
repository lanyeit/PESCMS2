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

    /**
     * 依据模型 + 字段：模型_id 进行删除内容动作
     * @param type $model 模型名称
     * @param type $id 待删除的ID
     * @return type 返回执行结果
     */
    public static function deleteFromModelId($model, $id) {
        $model = strtolower($model);
        return self::db($model)->where("{$model}_id = :{$model}_id")->delete(array("{$model}_id" => $id));
    }

    /**
     * 依据模型 + 字段:模型_id 进行排序动作
     * @param type $model 模型名称
     * @param type $id 待排序的ID
     * @param type $sortValue 排序的值
     */
    public static function updateSortFromModel($model, $id, $sortValue) {
        $model = strtolower($model);
        return self::db($model)->where("{$model}_id = :{$model}_id")->update(array("{$model}_listsort" => $sortValue, 'noset' => array("{$model}_id" => $id)));
    }

}
