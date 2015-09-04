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
    public function action($jump = TRUE, $commit = TRUE) {
        $this->db()->transaction();
        $updateResult = \Model\Category::updateCategory();
        $this->db()->commit();
        $this->success('更新分类成功', $this->url(GROUP . '-Category-index'));
    }

}
