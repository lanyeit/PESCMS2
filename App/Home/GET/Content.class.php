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

    private $model;

    /**
     * 构造函数
     */
    public function __construct() {
        parent::__construct();
        $this->model = strtolower(MODULE);
        $existModel = \Model\Model::findModel($this->model, 'model_name');
        /**
         * 模型熟悉不为前台的
         * 则提示模型不存在
         */
        if ($existModel['model_attr'] != '1') {
            $this->error($GLOBALS['_LANG']['CONTENT']['NOT_EXIST_MODEL']);
        }
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


        $page = new \Expand\Home\Page();
        $total = count($this->db($this->model)->where("{$this->model}_catid in ({$data['catid']}) and {$this->model}_status = 1")->order("{$this->model}_listsort asc, {$this->model}_id desc")->select($data));


        $count = $page->total($total);
        $page->handle();
        $list = $this->db($this->model)->where("{$this->model}_catid in ({$data['catid']}) and {$this->model}_status = 1")->order("{$this->model}_listsort asc, {$this->model}_id desc")->limit("{$page->firstRow}, {$page->listRows}")->select($data);

        $show = $page->show();
        $this->assign('title', $this->categorys[$catid]['category_name']);
        $this->assign('keyword', $this->categorys[$catid]['category_keyword']);
        $this->assign('description', $this->categorys[$catid]['category_description']);
        $this->assign('page', $show);
        $this->assign('list', $list);
        $this->layout(is_file(THEME . '/' . GROUP . "/{$this->theme['value']}/" . MODULE . "_list.php") ? MODULE . "_list" : 'Content_list');
    }

    /**
     * 内容详细
     */
    public function view() {
        $id = $this->isG('id', $GLOBALS['_LANG']['CONTENT']['SELECT_VIEW_ID']);

        $list = $this->db($this->model)->where("{$this->model}_id = :id and {$this->model}_status = 1")->find(array("id" => $id));
        $this->determineSqlExecResult($list, $GLOBALS['_LANG']['CONTENT']['VIEW_CONTENT_NO_EXIST']);
        foreach ($list as $key => $value) {
            $this->assign($key, $value);
        }
        $this->assign('title', $list["{$this->model}_title"]);
        $this->assign('keyword', $list["{$this->model}_keyword"]);
        $this->assign('description', $list["{$this->model}_description"]);
        $this->layout(is_file(THEME . '/' . GROUP . "/{$this->theme['value']}/" . MODULE . "_view.php") ? MODULE . "_view" : 'Content_view');
    }

}
