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

class Category extends Content {

    /**
     * 编辑分类
     */
    public function action() {
        $this->db()->transaction();
        $updateResult = \Model\Category::updateCategory();
        if ($updateResult['status'] == false) {
            $this->db()->rollBack();
            $this->error($updateResult['mes']);
        }
        $this->db()->commit();
        $this->success($GLOBALS['_LANG']['CATEGORY']['UPDATE_CATEGORY_SUCCESS'], $this->url('Admin-Category-index'));
    }

}
