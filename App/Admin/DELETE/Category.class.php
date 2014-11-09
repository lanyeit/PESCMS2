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

class Category extends \App\Admin\Common {

    /**
     * 删除分类
     */
    public function action() {
        $this->db()->transaction();
        $deletResult = \Model\Category::deleteCategory();
        if ($deletResult['status'] == false) {
            $this->db()->rollBack();
            $this->error($deletResult['mes']);
        }

        $this->db()->commit();
        $this->success($GLOBALS['_LANG']['COMMON']['DELETE_SUCCESS']);
    }

}
