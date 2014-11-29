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

class User extends \App\Admin\Common {

    public function index() {
        $page = new \Expand\Admin\Page;
        $total = count($this->db('user')->select());
        $count = $page->total($total);
        $page->handle();
        $list = $this->db('user')->order("user_id desc")->limit("{$page->firstRow}, {$page->listRows}")->select();
        $show = $page->show();
        $this->assign('page', $show);
        $this->assign('list', $list);
        $this->assign('title', $GLOBALS['_LANG']['MENU_LIST'][\Model\Menu::getTitleWithMenu()]);
        $this->layout();
    }

    /**
     * 添加/编辑会员
     */
    public function action() {
        $userId = $this->g('id');
        if (empty($userId)) {
            $this->assign('title', $GLOBALS['_LANG']['USER']['ADD']);
            $this->routeMethod('POST');
        } else {
            if (!$content = \Model\User::findUser($userId)) {
                $this->error($GLOBALS['_LANG']['MENU']['NOT_EXITS_MENU']);
            }
            $this->assign($content);
            $this->assign('title', $GLOBALS['_LANG']['USER']['EDIT']);
            $this->routeMethod('PUT');
        }
        $this->assign('groupList', \Model\User::userGroupList());
        $this->assign('user_id', $userId);
        $this->assign('url', $this->url('Admin-User-action'));
        $this->layout();
    }

}
