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

class Index extends \App\Admin\Common {

    public function index() {
        $this->meun();
        $this->display();
    }

    /**
     * 生成后台菜单
     */
    private function meun() {
        $result = $this->db('menu m')->join("(SELECT id AS top_id, `name` AS top_name, `pid` AS top_pid FROM `pes_menu` where pid = 0) AS parent ON parent.top_id = m.pid")->where('top_pid = 0')->order('top_id asc, id asc')->select();
        foreach ($result as $key => $value) {
            $meun[$value['top_name']][] = $value;
        }
        
        $this->assign('meun', $meun);
    }

}
