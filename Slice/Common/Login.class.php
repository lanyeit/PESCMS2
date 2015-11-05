<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Slice\Common;

class Login{
    public function before(){
        echo '登录前验证<br/>';
    }

    public function after(){
        echo '登录后验证<br/>';
    }
}