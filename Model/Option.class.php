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
 * 选项模型
 */
class Option extends \Core\Model\Model {

    /**
     * 查找选项
     * @param type $optionName 选项名称
     */
    public static function findOption($optionName) {
        return self::db('option')->where('option_name = :option_name')->find(array('option_name' => $optionName));
    }

    /**
     * 获取网站设置信息
     * @return type 返回数组
     */
    public static function getSiteSetting() {
        return self::db('option')->where('option_range = "setting"')->select();
    }

}
