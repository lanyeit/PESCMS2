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

class Setting extends \App\Admin\Common {

    /**
     * 系统基础设置
     */
    public function action() {
        $list = \Model\Option::getSiteSetting();
        foreach ($list as $key => $value) {
            $setting[$value['option_name']] = $value['value'];
        }

        $this->assign($setting);
        $this->assign('title', $GLOBALS['_LANG']['MENU_LIST'][\Model\Menu::getTitleWithMenu()]);
        $this->layout();
    }

    /**
     * 扩展变量设置
     */
    public function expandAction() {
        $this->layout();
    }

    /**
     * 上传格式设置
     */
    public function uploadFormAction() {
        
    }

    /**
     * URL显示模式设置
     */
    public function urlModelAction() {
        
    }

}
