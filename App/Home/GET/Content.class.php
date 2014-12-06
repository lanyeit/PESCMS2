<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Home\GET;

/**
 * PESCMS 内容调用模块
 * @version 2.0
 */
class Content extends \App\Home\Common {

    /**
     * 构造函数
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * 方法跳转和执行list方法
     * @param type $name
     * @param type $arguments
     */
    public function __call($name, $arguments) {
        switch ($name) {
            case 'list':
                $this->_list();
                break;
            case 'sitemap':
                $this->display('sitemap');
                break;
            default :
                header('HTTP/1.1 404');
                $this->assign('title', 'Error 404(Not Found)!');
                $this->display('404');
        }
    }

    /**
     * 内容列表
     */
    public function _list() {
        $catid = $this->isG('id', $GLOBALS['_LANG']['CONTENT']['SELECT_CAT_ID']);
        $data['catid'] = $this->categorys[$catid]['category_child'];
        $model = strtolower(MODULE);

        $page = new \Expand\Home\Page();
        $total = count($this->db($model)->where("{$model}_catid in ({$data['catid']}) and {$model}_status = 1")->order("{$model}_listsort asc, {$model}_id desc")->select($data));


        $count = $page->total($total);
        $page->handle();
        $list = $this->db($model)->where("{$model}_catid in ({$data['catid']}) and {$model}_status = 1")->order("{$model}_listsort asc, {$model}_id desc")->limit("{$page->firstRow}, {$page->listRows}")->select($data);

        $show = $page->show();
        $this->assign('title', $this->categorys[$catid]['category_name']);
        $this->assign('keyword', $this->categorys[$catid]['category_keyword']);
        $this->assign('description', $this->categorys[$catid]['category_description']);
        $this->assign('page', $show);
        $this->assign('list', $list);
        $this->display(MODULE . "_list");
    }

    /**
     * 内容详细
     */
    public function view() {
        $id = $this->isG('id', $GLOBALS['_LANG']['CONTENT']['SELECT_VIEW_ID']);

        $model = strtolower(MODULE);

        $list = $this->db($model)->where("{$model}_id = :id and {$model}_status = 1")->find(array("id" => $id));
        $this->determineSqlExecResult($list, $GLOBALS['_LANG']['CONTENT']['VIEW_CONTENT_NO_EXIST']);
        foreach ($list as $key => $value) {
            $this->assign($key, $value);
        }
        $this->assign('title', $list["{$model}_title"]);
        $this->assign('keyword', $list["{$model}_keyword"]);
        $this->assign('description', $list["{$model}_description"]);
        $this->display(MODULE . "_view");
    }

}
