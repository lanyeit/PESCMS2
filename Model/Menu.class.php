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
        $result = self::db('menu m')->join("(SELECT id AS top_id, `name` AS top_name, `pid` AS top_pid, `listsort` AS top_listsort FROM `pes_menu` where pid = 0) AS parent ON parent.top_id = m.pid")->where('top_pid = 0')->order('parent.top_listsort desc, m.listsort desc, top_id asc, id asc')->select();
        foreach ($result as $key => $value) {
            
            $menu[$value['top_name']]['id'] = $value['top_id'];
            $menu[$value['top_name']]['name'] = $value['top_name'];
            $menu[$value['top_name']]['listsort'] = $value['top_listsort'];
            $menu[$value['top_name']]['child'][] = $value;
        }
        
        return $menu;
    }
    
    /**
     * 根据菜单获取标题
     */
    public static function getTitleWithMenu(){
        $result = self::db('menu')->field('name')->where('url = :url')->find(array('url' => 'Admin-'.MODULE."-".ACTION));
        return $result['name'];
    }

}
