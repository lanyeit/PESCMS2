<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin;

abstract class Common extends \Core\Controller\Controller {

    protected $admin;

    public function __construct() {
        if (empty($_SESSION['login']) && MODULE != 'Login' ) {
            $this->jump('/');
        }
        
        $login = $this->checkLogin();
        if (!$login && MODULE != 'Login' ) {
            $this->jump('/');
        }
    }

    /**
     * 验证是否已登录
     */
    protected function checkLogin() {
        if (empty($admin['uid'])) {
            return false;
        } else {
            return true;
        }
    }

}
