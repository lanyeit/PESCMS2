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

class Login extends \App\Admin\Common {

    public function index() {
        $login = $this->checkLogin();
        if ($login) {
            $this->jump($this->url('Admin-Index-index'));
        }
        $this->display();
    }

}
