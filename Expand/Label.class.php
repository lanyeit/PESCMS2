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
     * @return type 返回URL
     */
    public function url($controller, array $param = array()) {
        return \Core\Func\CoreFunc::url($controller, $param);
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
     * 字段类型
     * @param type $type
     */
    public function fieldType($type) {
        switch ($type) {
            case 'category':
                return '分类';

            case 'text':
                return '单行文本框';

            case 'select':
                return '下拉菜单';

            case 'checkbox':
                return '复选框';

            case 'radio':
                return '单选框';

            case 'textarea':
                return '多行文本框';

            case 'thumb':
                return '略缩图';

            case 'editor':
                return '编辑器';

            case 'img':
                return '图组';

            case 'file':
                return '上传文件';

            case 'date':
                return '时间控件';

            default:
                return '未知字段类型';
        }
    }

}
