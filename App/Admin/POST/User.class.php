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

class User extends \App\Admin\Common {

    public function action() {
        $this->db()->transaction();
        $addResult = \Model\User::add();
        if ($addResult['status'] == false) {
            $this->db()->rollBack();
            $this->error($addResult['mes']);
        }
        $this->db()->commit();

        $this->success($GLOBALS['_LANG']['USER']['ADD_USER_SUCCESS'], $this->url('Admin-User-index'));
    }

}
