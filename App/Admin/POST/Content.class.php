<?php

namespace App\Admin\POST;

/**
 * 公用内容插入
 */
class Content extends \App\Admin\Common {

    /**
     * 添加内容
     */
    public function action() {
        $this->db()->transaction();
        $addResult = \Model\Content::addContent();
        if ($addResult['status'] == false) {
            $this->db()->rollBack();
            $this->error($addResult['mes']);
        }
        $this->db()->commit();

        $this->success($GLOBALS['_LANG']['CONTENT']['ADD_CONTENT_SUCCESS'], $this->url('Admin-' . MODULE . '-index'));
    }

}
