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

class Index extends \App\Admin\Common {

    public function index() {
        $this->assign('menu', \Model\Menu::menu($_SESSION['team']['user_group_id']));
        $this->display();
    }

    /**
     * 
     */
    public function systemInfo() {
        $this->layout();
    }




    /**
     * 清空换成
     * @param type $dirName
     */
    public function clear($dirName = 'Temp') {
        if ($handle = opendir("$dirName")) {
            while (false !== ($item = readdir($handle))) {
                if ($item != "." && $item != "..") {
                    if (is_dir("$dirName/$item")) {
                        $this->clear("$dirName/$item");
                    } else {
                        if (!unlink("$dirName/$item")) {
                            $this->error("移除文件失败： $dirName/$item");
                        }
                    }
                }
            }
            closedir($handle);
            if ($dirName == 'Temp') {
                $this->success('清空缓存成功', $this->url(GROUP . '-Index-systemInfo'));
            }
            if (!rmdir($dirName)) {
                $this->error("移除目录失败： $dirName");
            }
        }
    }

    /**
     * 注销帐号
     */
    public function logout() {
        session_destroy();
        $this->success('已注销帐号', $this->url(GROUP . '-Login-index'));
    }

}
