<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Expand;

/**
 * 模版标签函数
 * 说明：建议本类中的所有方法尽量使用return形式。
 * 统一使用return，可以方便前台代码的调用。
 * 此外，也尽量勿在方法进行终止类操作。
 * 以免对程序的运行产生影响。
 */
class Label {

    /**
     * 生成URL链接
     * @param type $controller 链接的控制器
     * @param array $param 参数
     * @param type $filterHtmlSuffix 是否强制过滤HTML后缀 | 由于ajax GET请求中，若不过滤HTML，将会引起404的问题
     * @return type 返回URL
     */
    public function url($controller, array $param = array(), $filterHtmlSuffix = false) {
        $url = \Core\Func\CoreFunc::url($controller, $param);
        if ($filterHtmlSuffix == true) {
            if (substr($url, '-5') == '.html') {
                return substr($url, '0', '-5');
            }
        }

        return $url;
    }

    /**
     * 生成令牌
     */
    public function token() {
        list($usec, $sec) = explode(" ", microtime());
        $token = md5(substr($usec, 2) * rand(1, 100));
        $_SESSION['token'] = $token;
        return "<input type=\"hidden\" name=\"token\" value=\"{$token}\" />";
    }

    /**
     * 标准状态输出
     * 0 禁用
     * 1 启用
     */
    public function status($type) {
        switch ($type) {
            case '0':
                return "<font color=\"red\">{$GLOBALS['_LANG']['COMMON']['DISABLE']}</font>";
            case '1':
                return "<font color=\"green\">{$GLOBALS['_LANG']['COMMON']['ENABLE']}</font>";
            default:
                return $GLOBALS['_LANG']['COMMON']['UNKNOW'];
        }
    }

    /**
     * 是否搜索
     */
    public function isSearch($type) {
        switch ($type) {
            case '0':
                return "<font color=\"red\">{$GLOBALS['_LANG']['COMMON']['BAN']}</font>";
            case '1':
                return "<font color=\"green\">{$GLOBALS['_LANG']['COMMON']['ALLOW']}</font>";
            default:
                return $GLOBALS['_LANG']['COMMON']['UNKNOW'];
        }
    }

    /**
     * 是否必填
     */
    public function isQequired($type) {
        switch ($type) {
            case '0':
                return "<font color=\"red\">{$GLOBALS['_LANG']['COMMON']['NO']}</font>";
            case '1':
                return "<font color=\"green\">{$GLOBALS['_LANG']['COMMON']['YES']}</font>";
            default:
                return $GLOBALS['_LANG']['COMMON']['UNKNOW'];
        }
    }
    
    /**
     * 模型属性
     * @param type $attr 属性值
     */
    public function modelAttr($attr){
        switch ($attr) {
            case '1':
                return "<font color=\"green\">{$GLOBALS['_LANG']['MODEL']['RECEPTION']}</font>";
            case '2':
                return "<font color=\"#E7790E\">{$GLOBALS['_LANG']['MODEL']['BACKSTAGE']}</font>";
            default:
                return $GLOBALS['_LANG']['COMMON']['UNKNOW'];
        }
    }

        /**
     * 字段类型
     * @param type $type
     */
    public function fieldType($type) {
        switch ($type) {
            case 'category':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_CATEGORTS'];

            case 'text':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_TEXT'];

            case 'select':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_SELECT'];

            case 'checkbox':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_CHECKBOX'];

            case 'radio':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_RADIO'];

            case 'textarea':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_TEXTAREA'];

            case 'thumb':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_THUMB'];

            case 'editor':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_EDITOR'];

            case 'img':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_IMG'];

            case 'file':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_FILE'];

            case 'date':
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_DATE'];

            default:
                return $GLOBALS['_LANG']['FIELD_TYPE']['FIELD_UNKNOW'];
        }
    }

    /**
     * 返回字段选项值的内容
     * @param type $option
     */
    public function fieldOption($option) {
        if (empty($option) || $option == '{"":null}') {
            return NULL;
        }
        $array = json_decode($option, true);
        $str = "";
        foreach ($array as $key => $value) {
            $str .="{$key}|{$value}\n";
        }
        return trim($str);
    }

}
