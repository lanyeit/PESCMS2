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

class Category extends \App\Admin\Common {
    
    /**
     * 菜单列表
     */
    public function index() {
        $tree = \Model\Category::outPutListCate();
        $this->assign('tree', $tree);
        $this->assign('title', \Model\Menu::getTitleWithMenu());
        $this->layout();
    }
    
    /**
     * 
     */
    public function action(){
        
    }

}
