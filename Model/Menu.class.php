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
        $result = self::db('menu m')->join("(SELECT `menu_id` AS top_id, `menu_name` AS top_name, `menu_pid` AS top_pid, `menu_listsort` AS top_listsort FROM `pes_menu` where menu_pid = 0) AS parent ON parent.top_id = m.menu_pid")->where('top_pid = 0')->order('parent.top_listsort desc, m.menu_listsort desc, top_id asc, menu_id asc')->select();
        foreach ($result as $key => $value) {
            $menu[$value['top_name']]['menu_id'] = $value['top_id'];
            $menu[$value['top_name']]['menu_name'] = $value['top_name'];
            $menu[$value['top_name']]['menu_listsort'] = $value['top_listsort'];
            $menu[$value['top_name']]['menu_child'][] = $value;
        }
        return $menu;
    }
    
    /**
     * 根据菜单获取标题
     */
    public static function getTitleWithMenu(){
        $result = self::db('menu')->field('menu_name')->where('menu_url = :menu_url')->find(array('menu_url' => 'Admin-'.MODULE."-".ACTION));
        return $result['menu_name'];
    }

}
