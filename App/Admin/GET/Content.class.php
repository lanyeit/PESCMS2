<?php

namespace App\Admin\GET;

/**
 * 公用内容删除方法
 */
class Content extends \App\Admin\Common {

    private $model, $table, $fieldPrefix, $theme;

    public function __init() {
        parent::__init();

        $this->table = strtolower(MODULE);
        $this->fieldPrefix = $this->table . "_";
        $this->model = \Model\ModelManage::findModel($this->table, 'model_name');

        if (empty($this->model)) {
            $this->error('不存在的模型');
        }

        $this->assign('fieldPrefix', $this->fieldPrefix);

        $this->theme = \Model\Option::findOption('theme');
    }

    /**
     * 内容列表
     */
    public function index() {
        $condition = "";
        $param = array();
        $field = \Model\Field::fieldList($this->model['model_id'], array('field_status' => '1', 'field_list' => '1'));
        if (!empty($_GET['keyword'])) {
            $keyword = $this->g('keyword');
            foreach ($field as $key => $value) {
                if (empty($condition)) {
                    $condition .= " {$this->fieldPrefix}{$value['field_name']} LIKE :{$value['field_name']} ";
                } else {
                    $condition .= " OR {$this->fieldPrefix}{$value['field_name']} LIKE :{$value['field_name']} ";
                }
                $param[$value['field_name']] = "%{$keyword}%";
            }
        }

        $pageNameSpace = "\\Expand\\".GROUP."\\Page";
        $page = new $pageNameSpace();
        $total = count($this->db($this->table)->where($condition)->select($param));
        $count = $page->total($total);
        $page->handle();
        $list = $this->db($this->table)->where($condition)->order("{$this->fieldPrefix}listsort asc, {$this->fieldPrefix}id desc")->limit("{$page->firstRow}, {$page->listRows}")->select($param);
        $show = $page->show();
        $this->assign('page', $show);
        $this->assign('list', $list);
        $this->assign('title', $this->model['lang_key']);


        $this->assign('field', $field);

        $this->layout(is_file(THEME . '/' . GROUP . "/{$this->theme['value']}/" . MODULE . "_index.php") ? MODULE . "_index" : 'Content_index');
    }

    /**
     * 添加/编辑内容
     */
    public function action() {
        $field = \Model\Field::fieldList($this->model['model_id'], array('field_status' => '1'));

        $id = $this->g('id');
        if (empty($id)) {
            $this->assign('method', 'POST');
            $this->assign('title', "添加 - {$this->model['lang_key']}");
        } else {
            $content = \Model\Content::findContent($this->table, $id, "{$this->fieldPrefix}id");
            if (empty($content)) {
                $this->error('不存在的内容');
            }
            $this->assign($content);
            $this->assign('method', 'PUT');
            $this->assign('id', $id);
            $this->assign('title', "编辑 - {$this->model['lang_key']}");

            foreach ($field as $key => $value) {
                $field[$key] = $value;
                $field[$key]['value'] = $content["{$this->fieldPrefix}{$value['field_name']}"];
            }
        }

        $this->assign('field', $field);
        $this->assign('form', new \Expand\Form\Form());

        $this->layout(is_file(THEME . '/' . GROUP . "/{$this->theme['value']}/" . MODULE . "_action.php") ? MODULE . "_action" : 'Content_action');
    }

}
