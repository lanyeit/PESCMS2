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

class Index extends \App\Admin\Common {

    /**
     * 添加新菜单
     */
    public function menuAction() {
        $result = \Model\Menu::addMenu();
        if ($result['status'] == false) {
            $this->error($result['mes']);
        }
        $this->success($GLOBALS['_LANG']['ADD_MENU_SUCCESS'], $this->url('Admin-Index-menuList'));
    }

}
