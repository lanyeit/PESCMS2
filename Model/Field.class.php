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

    private static $model;

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
     * 查找对应模型表的字段
     */
    public static function findTableField($tableName, $fieldName) {
        $tableName = strtolower($tableName);
        $fieldList = self::db()->getAll("show columns from `" . self::$prefix . "{$tableName}`");
        if (!empty($fieldList)) {
            foreach ($fieldList as $value) {
                if ($value['Field'] == "{$tableName}_{$fieldName}") {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * 移除字段表的字段
     */
    public static function removeField($fieldId) {
        return self::db('field')->where('field_id = :field_id')->delete(array('field_id' => $fieldId));
    }

    /**
     * 执行移除表字段的动作
     * @param type $model 模型名称
     * @param type $fieldName 待移除的字段名称
     * @return type 返回执行结果
     */
    public static function alertTableField($model, $fieldName) {
        $model = strtolower($model);
        $prefix = self::$prefix;
        return self::db()->alter("ALTER TABLE `{$prefix}{$model}` DROP `{$model}_$fieldName`;");
    }

    /**
     * 插入字段
     */
    public static function addField() {
        $data = self::baseForm();

        $addResult = self::db('field')->insert($data);
        if ($addResult == false) {
            return self::error($GLOBALS['_LANG']['MODEL']['ADD_FIELD_FAIL']);
        }

        $fieldType = self::returnFieldType($data['field_type']);
        $alterTableResult = self::addTableField(self::$model['model_name'], $data['field_name'], $fieldType);

        if ($alterTableResult == FALSE) {
            self::removeField($addResult);
            return self::error($GLOBALS['_LANG']['MODEL']['ADD_FIELD_FAIL']);
        }
        return self::success($data);
    }

    /**
     * 执行插入字段
     */
    public static function addTableField($model, $fieldName, $fieldType) {
        $model = strtolower($model);
        return self::db()->alter("ALTER TABLE `" . self::$prefix . "{$model}` ADD `{$model}_{$fieldName}`  {$fieldType} NOT NULL ;");
    }

    /**
     * 返回创建字段的类型
     */
    private static function returnFieldType($type) {

        switch ($type) {
            case 'text':
            case 'checkbox':
            case 'thumb':
                return ' VARCHAR( 255 ) ';

            case 'textarea':
            case 'editor':
            case 'img':
            case 'file':
                return ' TEXT ';

            case 'category':
            case 'select':
            case 'radio':
            default:
                return ' INT(11) ';
        }
    }

    /**
     * 更新字段
     */
    public static function updateField() {
        $data = self::baseForm();
        $updateResult = self::db('field')->where('field_id = :field_id')->update($data);
        if ($updateResult == false) {
            return self::error($GLOBALS['_LANG']['MODEL']['UPDATE_FIELD_FAIL']);
        }
        return self::success($data);
    }

    /**
     * 基础表单
     */
    public static function baseForm() {

        if (!$data['model_id'] = self::isP('model_id')) {
            return self::error($GLOBALS['_LANG']['MODEL']['LOST_MODEL_ID']);
        }
        if (!self::$model = \Model\Model::findModel($data['model_id'])) {
            return self::error($GLOBALS['_LANG']['MODEL']['NOT_EXIST_MODEL']);
        }

        if (self::p('method') == 'PUT') {
            if (!$data['noset']['field_id'] = self::isP('field_id')) {
                return self::error($GLOBALS['_LANG']['MODEL']['LOST_FIELD_ID']);
            }
            if (!self::findField($data['noset']['field_id'])) {
                return self::error($GLOBALS['_LANG']['MODEL']['NOT_EXIST_FIELD']);
            }
        } else {
            if (!$data['field_type'] = self::isP('field_type')) {
                return self::error($GLOBALS['_LANG']['MODEL']['SELECT_FIELD_TYPE']);
            }
            if (!$data['field_name'] = self::isP('field_name')) {
                return self::error($GLOBALS['_LANG']['MODEL']['ENTER_FIELD_NAME']);
            }
        }

        if (!$data['display_name'] = self::isP('display_name')) {
            return self::error($GLOBALS['_LANG']['MODEL']['ENTER_DISPLAY_NAME']);
        }

        if (!$data['option'] = self::splitOption()) {
            self::error($GLOBALS['_LANG']['MODEL']['SPLIT_OPTION_ERROR']);
        }

        if (!($data['required'] = self::isP('required')) && !is_numeric($data['required'])) {
            return self::error($GLOBALS['_LANG']['MODEL']['SELECT_REQUIRED']);
        }

        if (!($data['status'] = self::isP('status')) && !is_numeric($data['status'])) {
            return self::error($GLOBALS['_LANG']['MODEL']['SELECT_FIELD_STATUS']);
        }

        $data['default'] = self::p('default');
        $data['field_listsort'] = self::p('field_listsort');
        return $data;
    }

    /**
     * 拆分选项框
     */
    private static function splitOption() {
        if (self::p('option')) {
            $splitNewline = explode("\n", self::p('option'));
        } else {
            return '';
        }
        foreach ($splitNewline as $value) {
            $splitOption[] = explode("|", $value);
            foreach ($splitOption as $key => $value) {
                $option[$value[0]] = $value[1];
            }
        }
        if (!is_array($option)) {
            return false;
        }
        return json_encode($option);
    }

    /**
     * 移除模型字段
     * @param type $modelId 模型 ID
     */
    public static function deleteModelField($modelId) {
        return self::db('field')->where('model_id = :model_id')->delete(array('model_id' => $modelId));
    }

}
