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
        $list = \Model\Option::getOptionRange('setting');
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
        $list = \Model\Option::findOption('system');
        $this->assign('list', json_decode($list['value'], true));
        $this->layout();
    }

    /**
     * 上传格式设置
     */
    public function uploadFormAction() {
        $result = \Model\Option::getOptionRange('upload');
        foreach ($result as $key => $value) {
            $list[$value['option_name']] = implode(',', json_decode($value['value']));
        }
        $this->assign('list', $list);
        $this->layout();
    }

    /**
     * URL显示模式设置
     */
    public function urlModelAction() {
        $list = \Model\Option::findOption('urlModel');
        $this->assign(json_decode($list['value'], true));
        $this->layout();
    }

}
