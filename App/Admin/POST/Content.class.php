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
        if ($addResult === false) {
            $this->db()->rollBack();
            $this->error($addResult['mes']);
        }
        $this->db()->commit();

        if (!empty($_POST['back_url'])) {
            $url = $_POST['back_url'];
        } else {
            $url = $this->url('Admin-' . MODULE . '-index');
        }

        $this->success('添加内存成功', $url);
    }

}
