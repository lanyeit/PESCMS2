<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\GET;

class Category extends \App\Admin\Common {

    /**
     * 分类列表
     */
    public function index() {
        $tree = \Model\Category::outPutListCate();
        $this->assign('tree', $tree);
        $this->assign('title', \Model\Menu::getTitleWithMenu());
        $this->layout();
    }

    /**
     * 添加/编辑分类
     */
    public function action() {
        $categoryId = $this->g('id');
        if (empty($categoryId)) {
            $this->assign('method', 'POST');

            if ($parent = $this->g('parent')) {
                $this->assign('category_parent', $parent);
                $this->assign('title', '添加子分类');
            } else {
                $this->assign('title', '添加分类');
            }
            $tree = \Model\Category::getSelectCate(array($parent));
        } else {
            $category = \Model\Category::listCategory($categoryId);
            if(empty($category)){
                $this->error('分类不存在');
            }
            
            $tree = \Model\Category::getSelectCate(array($category['category_parent']));
            $this->assign('method', 'PUT');
            $this->assign($category);
            $this->assign('title', '编辑分类');
        }
        
        $this->assign('model', \Model\Content::listContent([
            'table' => 'model',
            'condition' => 'model_attr = 1'
        ]));

        $this->assign('tree', $tree);
        $this->layout();
    }

}
