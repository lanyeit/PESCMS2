<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\DELETE;

/**
 * 模型管理
 */
class Model extends \App\Admin\Common {

    /**
     * 删除字段
     */
    public function fieldAction() {
        $id = $this->isG('id', $GLOBALS['_LANG']['COMMON']['DELETE_ID']);

        $field = \Model\Field::findField($id);

        if (empty($field)) {
            $this->error($GLOBALS['_LANG']['MODEL']['NOT_EXIST_FIELD']);
        }

        if (empty(\Model\Field::removeField($id))) {
            $this->error($GLOBALS['_LANG']['COMMON']['DELETE_ERROR']);
        }
        
        $model = \Model\Model::findModel($field['model_id']);

        if (empty(\Model\Field::alertTableField($model['model_name'], $field['field_name']))) {
            /**
             * @todo 此处需要做一个日志功能
             */
            $this->error($GLOBALS['_LANG']['MODEL']['ALERT_TABLE_FIELD_ERROR']);
        }

        $this->success($GLOBALS['_LANG']['COMMON']['DELETE_SUCCESS']);
    }

}
