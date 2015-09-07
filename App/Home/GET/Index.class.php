<?php

namespace App\Home\GET;

class Index extends \App\Home\Common {

    public function index() {
        $project = $this->db('project')->where('project_status = 1')->order('project_listsort ASC, project_id DESC')->limit('4')->select();
        $this->assign('project', $project);
        $this->layout();
    }

}
