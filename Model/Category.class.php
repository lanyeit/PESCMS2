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
 * 分类模型
 */
class Category extends \Core\Model\Model {

    private static $li = 1, $selected, $t;

    /**
     * 用于特殊的条件筛选查找
     * @var type 
     */
    public static $where = '', $tree = '';

    /**
     * 清空where条件记录
     * 避免脚本执行出错
     */
    private static function clearWhere() {
        self::$where = '';
    }

    /**
     * 获取获取分类
     * @param type $value 查找的值
     * @param type $type 查找的类型|默认为ID
     * @return boolean 提交参数为空时，返回二维数组。参数不为空则返回一维数组。没有结果则返回false;
     */
    public static function listCategory($value = "", $type = "category_id") {
        if (empty($value)) {
            $result = self::db('category AS c')->field('c.*, m.model_name, m.lang_key')->join(self::$prefix . 'model AS m ON m.model_id = c.model_id')->where(self::$where)->order('category_listsort asc, category_id asc')->select();
            self::clearWhere();
            return $result;
        } else {
            $data[$type] = $value;
            //拼合条件
            if (empty(self::$where)) {
                self::$where = "c.{$type} = :{$type}";
            } else {
                self::$where .= "and c.{$type} = :{$type}";
            }
            $result = self::db('category AS c')->field('c.*, m.model_name, m.lang_key')->join(self::$prefix . 'model AS m ON m.model_id = c.model_id')->where(self::$where)->find($data);
            self::clearWhere();
            if (empty($result)) {
                return false;
            }
            return $result;
        }
    }

    /**
     * 输出分类列表
     */
    public static function outPutListCate() {
        $list = self::listCategory();
        self::setListCate($list, $list);
        return self::$tree;
    }

    /**
     * 设置列表输出格式
     * @param $array 数组一
     * @param $array_2 数组二
     * @param $id 父类产品ID
     * @param $depth 用于判断递归深度
     * @return
     */
    private static function setListCate($array, $array_2, $id = '0', $depth = '0') {
        $count = count($array_2);
        if ($depth < 3) {
            for ($i = 0; $i < $count; $i++) {
                $nav = $array[$i]['category_nav'] == '1' ? "<font color='green'>{$GLOBALS['_LANG']['COMMON']['DISPLAY']}</font>" : '<font color="red">' . $GLOBALS['_LANG']['COMMON']['HIDDEN'] . '</font>';
                $modelName = $array[$i]['model_id'] == '-1' ? $GLOBALS['_LANG']['CATEGORY']['EXTERNAL_LINK'] : $GLOBALS['_LANG']['MENU_LIST'][$array[$i]['lang_key']];
                $html = $array[$i]['category_html'] == '1' ? "<font color='blue'>{$GLOBALS['_LANG']['COMMON']['YES']}</font>" : $GLOBALS['_LANG']['COMMON']['NO'];
                //记录第一层数据
                if ($id == 0 && $array[$i]['category_parent'] == 0) {
                    self::$tree .= '<tr><td><input class="input length_0" type="text" name="id[' . $array[$i]['category_id'] . ']" value="' . $array[$i]['category_listsort'] . '" /></td><td>' . $array[$i]['category_name'] . '</td><td>' . $modelName . '</td><td>' . $nav . '</td><td>' . $html . '</td><td>';
                    self::$tree .= self::catHtml($array[$i]['category_id']);
                    self::$tree .= '</td></tr>';
                }
                //第二层数据
                foreach ($array as $key => $value) {
                    $nav = $value['category_nav'] == '1' ? "<font color='green'>{$GLOBALS['_LANG']['COMMON']['DISPLAY']}</font>" : '<font color="red">' . $GLOBALS['_LANG']['COMMON']['HIDDEN'] . '</font>';
                    $modelName = $value['model_id'] == '-1' ? $GLOBALS['_LANG']['CATEGORY']['EXTERNAL_LINK'] : $GLOBALS['_LANG']['MENU_LIST'][$value['lang_key']];
                    $html = $value['category_html'] == '1' ? "<font color='blue'>{$GLOBALS['_LANG']['COMMON']['YES']}</font>" : $GLOBALS['_LANG']['COMMON']['NO'];
                    self::$li = 0;
                    if ($array[$i]['category_id'] == $value['category_parent'] && $array[$i]['category_parent'] == 0) {
                        self::$tree .= '<tr><td><input class="input length_0" type="text" name="id[' . $value['category_id'] . ']" value="' . $value['category_listsort'] . '" /></td><td>' . self::plus_none_icon(self::$li) . '<span class="plus_icon plus_end_icon"></span>' . $value['category_name'] . '</td><td>' . $modelName . '</td><td>' . $nav . '</td><td>' . $html . '</td><td>';
                        self::$tree .= self::catHtml($value['category_id']);
                        self::setListCate($array[$i], $array_2, $value['category_id'], 3);
                        self::$tree .= '</td></tr>';
                    }
                }
            }
            //三层及以上的数据进行单独的排序
        } elseif ($depth >= 3) {
            foreach ($array_2 as $depth_key => $depth_value) {
                $nav = $depth_value['category_nav'] == '1' ? "<font color='green'>{$GLOBALS['_LANG']['COMMON']['DISPLAY']}</font>" : '<font color="red">' . $GLOBALS['_LANG']['COMMON']['HIDDEN'] . '</font>';
                $modelName = $depth_value['model_id'] == '-1' ? $GLOBALS['_LANG']['CATEGORY']['EXTERNAL_LINK'] : $GLOBALS['_LANG']['MENU_LIST'][$depth_value['lang_key']];
                $html = $depth_value['category_html'] == '1' ? "<font color='blue'>{$GLOBALS['_LANG']['COMMON']['YES']}</font>" : $GLOBALS['_LANG']['COMMON']['NO'];
                if ($id == $depth_value['category_parent'] && $id > 0) {
                    self::$li++;
                    self::$tree .= '<tr><td><input class="input length_0" type="text" name="id[' . $depth_value['category_id'] . ']" value="' . $depth_value['category_listsort'] . '" /></td><td>' . self::plus_none_icon(self::$li) . '<span class="plus_icon plus_end_icon"></span>' . $depth_value['category_name'] . '</td><td>' . $modelName . '</td><td>' . $nav . '</td><td>' . $html . '</td><td>';
                    self::$tree .= self::catHtml($depth_value['category_id']);
                    self::setListCate($array[$i], $array_2, $depth_value['category_id'], 3);
                    self::$tree .= '</td></tr>';
                    self::$li--;
                }
            }
        }
    }

    /**
     * 创建分类的操作按钮
     * @param type $id 分类ID
     * @return type 返回设置好的字符串
     */
    private static function catHtml($id) {
        $func = new \Core\Func\CoreFunc();
        $edit = '<a href="' . $func->url('Admin-Category-action', array('id' => $id)) . '" class="blue-button" id="' . $id . '" >'.  $GLOBALS['_LANG']['COMMON']['EDIT'].'</a>';
        $add = ' <a href="' . $func->url('Admin-Category-action', array('id' => $id)) . '" class="blue-button" id="' . $id . '" >'.  $GLOBALS['_LANG']['CATEGORY']['ADD_CHILD'].'</a>';
        $delete = ' <a href="' . $func->url('Admin-Category-action', array('id' => $id)) . '" class="blue-button" id="' . $id . '" onclick="return del(this)" >'.  $GLOBALS['_LANG']['COMMON']['DELETE'].'</a>';
        return $edit . $add . $delete;
    }

    /**
     * 放置分类的排版空间
     * @param type $frequency 级别
     * @return string 返回设置好的字符串
     */
    private static function plus_none_icon($frequency) {
        $str = '';
        for ($i = 0; $i < $frequency; $i++) {
            $str .='<span class="plus_icon plus_none_icon"></span>';
        }
        return $str;
    }

    /**
     * 输出分类表单
     * @return type
     */
    public static function getSelectCate($value = array()) {
        self::$selected = $value;
        $list = self::listCategory();
        self::setInputOption($list, $list);
        return self::$tree;
    }

    /**
     * 用于option表单输出
     * @param $array 数组一
     * @param $array_2 数组二
     * @param $id 父类产品ID
     * @param $depth 用于判断递归深度
     */
    private static function setInputOption($array, $array_2, $id = '0', $depth = '0') {
        $count = count($array_2);
        if ($depth < 3) {
            for ($i = 0; $i < $count; $i++) {
                if ($id == 0 && $array[$i]['category_parent'] == 0) {
                    $selected = in_array($array[$i]['category_id'], self::$selected) ? 'selected="selected"' : '';
                    self::$tree .= '<option value="' . $array[$i]['category_id'] . '"' . $selected . '>' . $array[$i]['category_name'] . '</option>';
                }
                foreach ($array as $key => $value) {
                    self::$li = 1;
                    if ($array[$i]['category_id'] == $value['category_parent'] && $array[$i]['category_parent'] == 0) {
                        $selected = in_array($value['category_id'], self::$selected) ? 'selected="selected"' : '';
                        self::$tree .= '<option value="' . $value['category_id'] . '"' . $selected . '>' . self::nbsp(self::$li) . '└─' . $value['category_name'] . '</option>';
                        self::setInputOption($array[$i], $array_2, $value['category_id'], 3);
                    }
                }
            }
        } elseif ($depth >= 3) {
            foreach ($array_2 as $depth_key => $depth_value) {
                if ($id == $depth_value['category_parent'] && $id > 0) {
                    $selected = in_array($depth_value['category_id'], self::$selected) ? 'selected="selected"' : '';
                    self::$li++;
                    self::$tree .= '<option value="' . $depth_value['category_id'] . '"' . $selected . '>' . self::nbsp(self::$li) . '└─' . $depth_value['category_name'] . '</option>';
                    self::setInputOption($array[$i], $array_2, $depth_value['category_id'], 3);
                    self::$li--;
                }
            }
        }
    }

    /**
     * 列出所有子类的ID(含父类)
     * @param type $id 父类的ID
     */
    public static function listChildId($id) {
        self::$tree = $id;
        self::findChildId($id);
        return self::$tree;
    }

    /**
     * 查找符合的子分类
     */
    private static function findChildId($id) {
        $db = self::__db();
        $result = $db->where('category_parent = :category_parent')->select(array('category_parent' => $id));
        if (!empty($result)) {
            foreach ($result as $key => $value) {
                self::$tree .= ',' . $value['id'];
                self::findChildId($value['id']);
            }
        }
    }

}
