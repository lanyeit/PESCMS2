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

class Authenticate extends \Core\Controller\Controller implements \Core\Slice\interfaceSlice  {

    public function before(){
        echo '验证权限前<br/>';
    }

    public function after(){
        echo '验证权限后<br/>';
    }
}