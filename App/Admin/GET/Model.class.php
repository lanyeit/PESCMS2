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
        $this->layout();
    }

}
