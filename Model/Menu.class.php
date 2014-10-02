<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Model;

/**
 * 菜单模型
 */
class Menu extends Model {

    /**
     * 生成后台菜单
     */
    public static function menu() {
        $result = self::db('menu AS m')->field("m.*, IF(parent.top_id IS NULL, m.menu_id, parent.top_id) AS top_id, IF(parent.top_listsort IS NULL, '0', parent.top_listsort) AS top_listsort, IF(parent.top_name IS NULL, m.menu_name, top_name) AS top_name")->join("(SELECT `menu_id` AS top_id, `menu_name` AS top_name, `menu_pid` AS top_pid, `menu_listsort` AS top_listsort FROM `pes_menu` where menu_pid = 0) AS parent ON parent.top_id = m.menu_pid")->order('top_listsort desc, m.menu_listsort desc, m.menu_id asc')->select();
        foreach ($result as $key => $value) {
            if ($value['menu_pid'] == 0) {
                $menu[$value['top_name']]['menu_id'] = $value['top_id'];
                $menu[$value['top_name']]['menu_name'] = $value['top_name'];
                $menu[$value['top_name']]['menu_listsort'] = $value['menu_listsort'];
            } else {
                $menu[$value['top_name']]['menu_child'][] = $value;
            }
        }
        return $menu;
    }

    /**
     * 根据菜单获取标题
     */
    public static function getTitleWithMenu() {
        $result = self::db('menu')->field('menu_name')->where('menu_url = :menu_url')->find(array('menu_url' => 'Admin-' . MODULE . "-" . ACTION));
        return $result['menu_name'];
    }

    /**
     * 顶级菜单
     */
    public static function topMenu() {
        return self::db('menu')->where('menu_pid = 0')->order('menu_listsort desc, menu_id asc')->select();
    }

    /**
     * 查找菜单
     * @param type $menuId 菜单ID
     */
    public static function findMenu($menuId) {
        return self::db('menu')->where('menu_id = :menu_id')->find(array('menu_id' => $menuId));
    }

    /**
     * 添加菜单
     */
    public static function addMenu() {
        $data = self::baseForm();
        if ($data['status'] == false) {
            return $data;
        }
        $addResult = self::db('menu')->insert($data['value']);

        if ($addResult == false) {
            return self::error($GLOBALS['_LANG']['ADD_MENU_FAIL']);
        }
        return self::success();
    }

    /**
     * 更新菜单
     */
    public static function updateMenu() {
        $data = self::baseForm();
        if ($data['status'] == false) {
            return $data;
        }
        $updateResult = self::db('menu')->where('menu_id = :menu_id')->update($data['value']);
        
        if ($updateResult == false) {
            return self::error($GLOBALS['_LANG']['UPDATE_MENU_FAIL']);
        }
        return self::success();
    }

    /**
     * 菜单基础表单
     */
    public static function baseForm() {

        if (!(self::isP('menu_id')) && self::p('method') == 'put') {
            return self::error($GLOBALS['_LANG']['LOST_MENU_ID']);
        } elseif (self::p('method') == 'put') {

            $data['noset']['menu_id'] = self::isP('menu_id');
            if (!self::findMenu($data['noset']['menu_id'])) {
                return self::error($GLOBALS['_LANG']['NOT_EXITS_MENU']);
            }
        }

        if ($_POST['menu_pid'] < '0') {
            return self::error($GLOBALS['_LANG']['SELECT_TOP_MENU']);
        } elseif ($_POST['menu_pid'] > '0') {

            if (!self::findMenu($_POST['menu_pid'])) {
                return self::error($GLOBALS['_LANG']['NOT_EXITS_MENU']);
            }

            if (!$data['menu_url'] = self::isP('menu_url')) {
                return self::error($GLOBALS['_LANG']['ENTER_MENU_URL']);
            }
        }
        $data['menu_pid'] = (int) $_POST['menu_pid'];

        if (!$data['menu_name'] = self::isP('menu_name')) {
            return self::error($GLOBALS['_LANG']['ENTER_MENU_NAME']);
        }

        $data['menu_listsort'] = (int) self::p('menu_listsort');
        return array('status' => true, 'value' => $data);
    }

}
