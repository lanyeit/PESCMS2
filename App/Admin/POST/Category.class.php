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
     * 添加分类
     */
    public function action() {
        $this->db()->transaction();
        $addResult = \Model\Category::addCategory();
        $this->db()->commit();
        $this->success('添加分类成功', $this->url(GROUP . '-Category-index'));
    }

}
