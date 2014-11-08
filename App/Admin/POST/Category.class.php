<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\POST;

class Category extends \App\Admin\Common {

    /**
     * 添加菜单
     */
    public function action() {
        $addResult = \Model\Category::addCategory();
        if ($addResult['status'] == false) {
            $this->error($addResult['mes']);
        }
        $this->success($GLOBALS['_LANG']['CATEGORY']['ADD_CATEGORY_SUCCESS'], $this->url('Admin-Category-index'));
    }

}
