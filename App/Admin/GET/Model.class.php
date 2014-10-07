<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\GET;

/**
 * 模型管理
 */
class Model extends \App\Admin\Common {

    /**
     * 模型列表
     */
    public function index() {
        $this->assign('list', \Model\Model::modelList());
        $this->assign('title', \Model\Menu::getTitleWithMenu());
        $this->layout();
    }

    /**
     * 模型字段管理
     */
    public function fieldList() {
        $modelId = $this->isG('id', $GLOBALS['_LANG']['MODEL']['SELECT_MODEL_ID']);
        $model = \Model\Model::findModel($modelId);
        $this->assign('title', $model['display_name'] . $GLOBALS['_LANG']['MODEL']['FIELD_MANAGE']);
        $this->assign('list', \Model\Field::fieldList($modelId));
        $this->assign('modelId', $modelId);
        $this->layout();
    }

    /**
     * 字段添加/编辑
     */
    public function fieldAction() {
        $fieldId = $this->g('id');
        $modelId = $this->isG('model', $GLOBALS['_LANG']['MODEL']['SELECT_MODEL_ID']);
        $model = \Model\Model::findModel($modelId);

        if (empty($fieldId)) {
            $this->assign('method', 'POST');
            $this->assign('title', $GLOBALS['_LANG']['MODEL']['FIELD_ADD'] . " - {$model['display_name']}");
        } else {
            $field = \Model\Field::findField($fieldId);
            if (empty($field)) {
                $this->error($GLOBALS['_LANG']['MODEL']['NOT_EXIST_FIELD']);
            }
            $this->assign($field);
            $this->assign('method', 'PUT');
            $this->assign('title', $GLOBALS['_LANG']['MODEL']['FIELD_EDIT'] . " - {$model['display_name']}");
        }

        $fieldTypeOption = \Model\Option::findOption('fieldType');
        $this->assign('fieldTypeList', json_decode($fieldTypeOption['value'], true));

        $this->assign('modelId', $modelId);
        $this->layout();
    }

    /**
     * 验证字段是否
     */
    public function checkFieldName() {
        $name = $this->isG('name', $GLOBALS['_LANG']['MODEL']['ENTER_FIELD_NAME']);
        $modelId = $this->isG('model', $GLOBALS['_LANG']['MODEL']['SELECT_MODEL_ID']);
        $model = \Model\Model::findModel($modelId);
        if (\Model\Field::findTableField($model['model_name'], $name)) {
            $this->error($GLOBALS['_LANG']['MODEL']['EXIST_FIELD']);
        } else {
            $this->success($GLOBALS['_LANG']['MODEL']['NOT_EXIST_FIELD']);
        }
    }

}
