<?php
/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 * @core version 2.6
 * @version 1.0
 */


namespace Slice\Admin;

/**
 * 登录验证切片
 * Class Login
 */
class Login extends \Core\Slice\Slice{

    public function before() {
        if(empty($_SESSION[strtolower(GROUP)]['user_id'])){
            $this->jump($this->url('Admin-Login-index'));
        }
    }

    public function after() {
    }


}