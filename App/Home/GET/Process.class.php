<?php

namespace App\Home\GET;

class Process extends \App\Home\Common {

    public function __init() {
        parent::__init();
        $this->status();
        $this->project();
        $this->hero();
    }

    /**
     * 任务列表
     */
    public function index() {
        $param = array();
        $condition = "1=1";
        if (is_numeric($_GET['su'])) {
            $param['task_status'] = (int)$_GET['su'];
            $condition .= " AND t.task_status = :task_status";
        }

        if (!empty($_GET['p'])) {
            $param['task_project'] = (int)$_GET['p'];
            $condition .= " AND t.task_project = :task_project";
        }

        if (!empty($_GET['u'])) {
            $param['task_user_id'] = (int)$_GET['u'];
            $condition .= " AND t.task_user_id = :task_user_id";
        }

        if(!empty($_GET['k'])){
            $keyword = $this->g('k');
            $param['task_title'] = "%{$keyword}%";
            $param['task_id'] = $keyword;
            $condition .= " AND t.task_title like :task_title OR t.task_id = :task_id";
        }



        $page = new \Expand\Admin\Page();
        $total = $this->db('task AS t', 'process')->field('count(t.task_id) AS total')->join("`process`.{$this->prefix}user AS u ON u.user_id = t.task_user_id")->where($condition)->find($param)['total'];

        $count = $page->total($total);
        $page->handle();
        $list = $this->db('task AS t', 'process')->join("`process`.{$this->prefix}user AS u ON u.user_id = t.task_user_id")->where($condition)->order('t.task_status ASC, t.task_priority ASC, t.task_id DESC')->limit("{$page->firstRow}, {$page->listRows}")->select($param);
        $show = $page->show();

        $this->assign('page', $show);

        $this->assign('list', $list);
        $this->layout();
    }


    public function view(){
        $id = (int) $this->g('id');
        $content = $this->db('task AS t', 'process')->join("`process`.{$this->prefix}user AS u ON u.user_id = t.task_user_id")->where('t.task_id = :task_id')->find(array('task_id' => $id));
        if(empty($content)){
            $this->display('404');
        }
        $this->layout();
    }

    /**
     * 任务状态
     */
    private function status() {
        $statusList = $this->db('task AS t', 'process')->field('count(task_status) AS task_num, task_status')->group('task_status')->select();
        $total = 0;
        foreach ($statusList as $key => $value) {
            $array[$value['task_status']] = $value;
            $total += $value['task_num'];
        }

        $this->assign('statusTotal', $total);

        $this->assign('statusList', $array);

        $status = array('未进行', '进行中', '审核', '调整', '完成');
        $this->assign('status', $status);
        $this->assign('className', array('danger', 'primary', 'secondary', 'warning', 'success'));
    }

    /**
     * 项目列表
     */
    private function project() {
        $projectList = $this->db('project AS p', 'process')->field('p.*, count(t.task_project) AS task_num')->join("`process`.{$this->prefix}task AS t ON t.task_project = p.project_id")->order('p.project_listsort ASC, p.project_id DESC')->group('p.project_id')->select();
        $total = 0;
        foreach($projectList as $value){
            $array[$value['project_id']] = $value;
            $total += $value['task_num'];
        }
        $this->assign('projectTotal', $total);
        $this->assign('project', $array);
    }

    /**
     * 英雄榜
     */
    private function hero() {
        $hero = $this->db('user AS u', 'process')->field('u.*, count(t.task_user_id) AS task_num')->join("`process`.{$this->prefix}task AS t ON t.task_user_id = u.user_id")->order('task_num DESC')->group('t.task_user_id')->select();
        $total = 0;
        foreach($hero as $value){
            $array[$value['user_id']] = $value;
            $total += $value['task_num'];
        }
        $this->assign('heroTotal', $total);
        $this->assign('hero', $array);
    }


}
