<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\PUT;

/**
 * 模型管理
 */
class Model extends \App\Admin\Common {

    /**
     * 删除字段
     */
    public function fieldAction() {
        $result = \Model\Field::updateField();
        if ($result['status'] == false) {
            $this->error($result['mes']);
        }

        $this->success($GLOBALS['_LANG']['MODEL']['UPDATE_FIELD_SUCCESS'], $this->url('Admin-Model-fieldList', array('id' => $result['mes']['model_id'])));
    }

}
