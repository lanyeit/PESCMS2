<?php

/**
 * PESCMS for PHP 5.4+
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
     * 此是语法糖，将一些写法近似的方法整合一起，减少重复
     * @param type $name
     * @param type $arguments
     * @return type
     */
    public function __call($name, $arguments) {
        switch (strtolower($name)) {
            case 'findproject':
            case 'finduser':
            case 'findgroup':
            case 'finddepartment':
                return $this->findContent($arguments['0'], $arguments['1'], $arguments['2']);
            default :
                return '不存在此方法';
        }
    }

    /**
     * 查找某一表信息的语法糖
     * @param type $table 查询内容的表名称
     * @param type $field 用于快捷获取内容的组合字段名称
     * @param type $id 需要查找的ID
     * @return type 返回处理好的数组
     */
    public function findContent($table, $field, $id) {
        static $array = array();
        if (empty($array[$table])) {
            $list = \Model\Content::listContent($table);
            foreach ($list as $value) {
                $array[$table][$value[$field]] = $value;
            }
        }
        return $array[$table][$id];
    }

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
                return "<font color=\"red\">禁用</font>";
            case '1':
                return "<font color=\"green\">启用</font>";
            default:
                return '未知状态';
        }
    }

    /**
     * 是否搜索
     */
    public function isSearch($type) {
        switch ($type) {
            case '0':
                return "<font color=\"red\">禁止</font>";
            case '1':
                return "<font color=\"green\">允许</font>";
            default:
                return '未知状态';
        }
    }

    /**
     * 是否必填
     */
    public function isQequired($type) {
        switch ($type) {
            case '0':
                return "<font color=\"red\">不</font>";
            case '1':
                return "<font color=\"green\">是</font>";
            default:
                return '未知状态';
        }
    }

    /**
     * 任务优先级
     * @param type $priority
     */
    public function taskPriority($priority) {
        switch ($priority) {
            case'1':
                return '<span class="am-badge am-badge-danger am-radius">严重</span>';
            case '2':
                return '<span class="am-badge am-badge-warning am-radius">次要</span>';
            case '3':
                return '<span class="am-badge am-badge-secondary am-radius">主要</span>';
            case '4':
                return '<span class="am-badge am-radius">普通</span>';
        }
    }

    /**
     * 模型属性
     * @param type $attr 属性值
     */
    public function modelAttr($attr) {
        switch ($attr) {
            case '1':
                return "<font color=\"green\">前台</font>";
            case '2':
                return "<font color=\"#E7790E\">后台</font>";
            default:
                return '未知状态';
        }
    }

    /**
     * 字段类型
     * @param type $type
     */
    public function fieldType($type) {
        switch ($type) {
            case 'category':
                return '分类列表';

            case 'text':
                return '单行输入框';

            case 'select':
                return '单选下拉框';

            case 'checkbox':
                return '复选框';

            case 'radio':
                return '单选按钮';

            case 'textarea':
                return '多行文本框';

            case 'thumb':
                return '缩略图';

            case 'editor':
                return '编辑器';

            case 'img':
                return '图组';

            case 'file':
                return '上传文件';

            case 'date':
                return '日期组件';

            default:
                return '未知类型';
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

    /**
     * 根据父类ID查找数据
     * @param type $parent_id 分类父类ID
     * @param type $is_nav 是否为导航
     * @return array 返回二维数组
     */
    public function getCate($category_parent = '0', $category_nav = '') {
        return \Model\Category::getCat($category_parent, $category_nav);
    }

    /**
     * 单页标签
     */
    public function page($id) {
        return \Model\Content::findContent('page', $id, 'page_id');
    }

    /**
     * 幻灯片
     */
    public function slideShow($slideshow_type_id, $limit = '99') {
        return \Model\SlideShow::slideShowList($slideshow_type_id, $limit);
    }

    /**
     * 列出内容（动态条件）
     * @param type $table 内容表名
     * @param array $param 绑定参数
     * @param type $where 查找条件
     * @param type $order 排序
     * @param type $limit 限制输出
     * @return type
     */
    public function listContent($table, array $param = array(), $where = '', $order = '', $limit = '') {
        return \Model\Content::listContent($table, $param, $where, $order, $limit);
    }

    /**
     * 字符串截断
     * @param type $sourcestr 字符串
     * @param type $cutlength 截断的长度
     * @param type $suffix 截断后显示的内容
     * @return string 返回一个截断后的字符串
     */
    function strCut($sourcestr, $cutlength, $suffix = '...') {
        $str_length = strlen($sourcestr);
        if ($str_length <= $cutlength) {
            return $sourcestr;
        }
        $returnstr = '';
        $n = $i = $noc = 0;
        while ($n < $str_length) {
            $t = ord($sourcestr[$n]);
            if ($t == 9 || $t == 10 || (32 <= $t && $t <= 126)) {
                $i = 1;
                $n++;
                $noc++;
            } elseif (194 <= $t && $t <= 223) {
                $i = 2;
                $n += 2;
                $noc += 2;
            } elseif (224 <= $t && $t <= 239) {
                $i = 3;
                $n += 3;
                $noc += 2;
            } elseif (240 <= $t && $t <= 247) {
                $i = 4;
                $n += 4;
                $noc += 2;
            } elseif (248 <= $t && $t <= 251) {
                $i = 5;
                $n += 5;
                $noc += 2;
            } elseif ($t == 252 || $t == 253) {
                $i = 6;
                $n += 6;
                $noc += 2;
            } else {
                $n++;
            }
            if ($noc >= $cutlength) {
                break;
            }
        }
        if ($noc > $cutlength) {
            $n -= $i;
        }
        $returnstr = substr($sourcestr, 0, $n);


        if (substr($sourcestr, $n, 6)) {
            $returnstr = $returnstr . $suffix; //超过长度时在尾处加上省略号
        }
        return $returnstr;
    }

    /**
     * 列出导航栏的提示信息列表
     * @param type $type 提示消息类型
     * @param type $num 条目
     * @return type
     */
    public function noticeType($type, $num) {
        switch ($type) {
            case '1':
                return "<li><a class=\"notice-link\" href=\"{$this->url('Team-Task-my', array('type' => '0'))}\">{$num}个新的任务</a></li>";
            case '2':
                return "<li><a class=\"notice-link\" href=\"{$this->url('Team-Task-check', array('type' => '0'))}\">{$num}个新的指派审核任务</a></li>";
            case '3':
                return "<li><a class=\"notice-link\" href=\"{$this->url('Team-Task-check', array('type' => '2'))}\">{$num}个新的待审核任务</a></li>";
            case '4':
                return "<li><a class=\"notice-link\" href=\"{$this->url('Team-Task-my', array('type' => '3'))}\">{$num}个新的待修改任务</a></li>";
            case '5':
                return "<li><a class=\"notice-link\" href=\"{$this->url('Team-Task-check', array('user_type' => '1'))}\">{$num}个新的部门审核指派任务</a></li>";
            case '6':
                return "<li><a class=\"notice-link\" href=\"{$this->url('Team-Task-my', array('type' => '4'))}\">{$num}个新的完成任务</a></li>";
        }
    }

    /**
     * 任务状态
     * @param type $status 状态ID
     * @return string 返回处理好的状态标签
     */
    public function taskStatus($status) {
        switch ($status) {
            case '0':
                return '<span class="am-badge  am-radius">未进行</span>';
            case '1':
                return '<span class="am-badge am-badge-primary am-radius">进行中</span>';
            case '2':
                return '<span class="am-badge am-badge-secondary am-radius">审核</span>';
            case '3':
                return '<span class="am-badge am-badge-danger am-radius">调整</span>';
            case '4':
                return '<span class="am-badge am-badge-success am-radius">完成</span>';
        }
    }

    /**
     * 用户动态
     * @param type $type 动态类型
     * @return string 返回处理好的状态标签
     */
    public function dynamicType($type) {
        switch ($type) {
            case '1':
                return '发布了《%s》任务';
            case '2':
                return '执行了《%s》任务';
            case '3':
                return '提交了《%s》任务';
            case '4':
                return '完成了《%s》任务';
        }
    }

    /**
     * 计算现在时间和提交时间的差值
     */
    public function timing($recordTime) {
        $nowTime = time();
        $difference = $nowTime - $recordTime;
//        return $difference;
        if ($difference < '60') {
            return "{$difference}秒前";
        } elseif ($difference >= '60' && $difference < '3600') {
            return round($difference / 60, 0) . "分钟前";
        } elseif ($difference >= '3600' && $difference < '86400') {
            return round($difference / 3600, 0) . "小时前";
        } elseif ($difference >= '86400' && $difference < '604800') {
            return round($difference / 86400, 0) . "天前";
        } elseif ($difference >= '604800' && $difference < '2419200') {
            return round($difference / 604800, 0) . "周前";
        } elseif ($difference >= '2419200') {
            return date('Y-m-d', $recordTime);
        }
    }

    /**
     * 返回上一页
     */
    public function backUrl() {
        if (empty($_SERVER['HTTP_REFERER'])) {
            return 'javascript:window.history.back(-1)';
        } else {
            return $_SERVER['HTTP_REFERER'];
        }
    }

    /**
     * 输出EY值
     * 请不要更改本公式，下面具体说明本公式的作用：
     * 目前本方法仅仅为列出进度数值。当公司使用本软件较长时间后
     * 查看一下公司整体人员的EY值，将可以快速列出全体员工的效率快慢关系。
     * 若大家不更改本公式，以后再把本数据上传回PESCMS TEAM
     * 我们能够依据这些数据，制作一个水平数据报表，非常方便大家快速了解
     * 一个员工目前工作是否及格。
     */
    public function ey() {
        static $ey = array();
        if (empty($ey)) {
            $userInfo = \Model\User::findUser($_SESSION['team']['user_id']);
            for ($i = 1; $i <= 100; $i++) {
                $nextEy = $i * $i;
                $preEy = ($i - 1) * ($i - 1);
                if ($userInfo['user_ey'] < $nextEy) {
                    $ey['currentEyLv'] = $i;
                    $ey['currentEy'] = $userInfo['user_ey'];
                    $ey['nextEy'] = $nextEy;
                    $ey['percentage'] = round((($userInfo['user_ey'] - $preEy) / ($nextEy - $preEy)) * 100);
                    $ey['process'] = ($userInfo['user_ey'] - $preEy) . "/" . ($nextEy - $preEy);
                    return $ey;
                }
            }
        }
        return $ey;
    }

    /**
     * 获取对应的字段，然后进行内容值匹配
     * @param type $fieldId 字段ID
     * @param type $value 进行匹配的值
     */
    public function getFieldOptionToMatch($fieldId, $value) {
        $fieldContent = \Model\Content::findContent('field', $fieldId, 'field_id');
        $option = json_decode($fieldContent['field_option'], true);
        $search = array_search($value, $option);
        if (empty($search)) {
            return '未知值';
        } else {
            return $search;
        }
    }

    /**
     * 合并js代码和样式
     * @param array $file
     */
    public function mergerScript(array $file) {
        $cache = new \Expand\FileCache();
        $cache->config['FILE_CACHE_TIME'] = '86400';
        $updateScript = $cache->loadCache('updateScript');
        if ($updateScript === false || DEBUG === true) {
            $returnStr = "";
            foreach (array('js' => 'javascript', 'css' => 'stylesheet') as $suffix => $item) {
                if (!empty($file[$item]['file'])) {
                    $str = "";
                    foreach ($file[$item]['file'] as $value) {
                        if (is_file(PES_PATH . $value)) {
                            $str .= file_get_contents(PES_PATH . $value);
                        }
                    }

                    $file[$item]['name'] = md5($file[$item]['name']);

                    switch ($item) {
                        case 'javascript':
                            $mergerFile = "/Theme/assets/js/{$file[$item]['name']}.{$suffix}";

                            $f = fopen(PES_PATH . $mergerFile, 'w');
                            fwrite($f, $str);
                            fclose($f);
                            $returnStr .= '<script src="' . DOCUMENT_ROOT . $mergerFile . '?v.' . $file[$item]['version'] . '"></script>';
                            break;
                        case 'stylesheet':
                            $mergerFile = "/Theme/assets/css/{$file[$item]['name']}.{$suffix}";

                            $f = fopen(PES_PATH . $mergerFile, 'w');
                            fwrite($f, $str);
                            fclose($f);
                            $returnStr .= '<link rel="stylesheet" href="' . DOCUMENT_ROOT . $mergerFile . '?v.' . $file[$item]['version'] . '"/>';
                            break;
                    }
                }
            }
            $cache->creatCache('updateScript', $returnStr);
        }else{
            $returnStr = $updateScript;
        }
        return $returnStr;
    }

}
