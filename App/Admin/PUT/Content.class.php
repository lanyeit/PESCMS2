<?php

namespace App\Admin\PUT;

/**
 * 公用内容更新
 */
class Content extends \App\Admin\Common {

    /**
     * 更新内容
     */
    public function action() {
        $this->db()->transaction();
        $updateResult = \Model\Content::updateContent();
        $this->db()->commit();

        if (!empty($_POST['back_url'])) {
            $url = $_POST['back_url'];
        } else {
            $url = $this->url('Admin-' . MODULE . '-index');
        }

        $this->success('更新内容成功', $url);
    }

    /**
     * 内容排序
     */
    public function listsort() {
        foreach ($_POST['id'] as $key => $value) {
            \Model\ModelManage::updateSortFromModel(MODULE, $key, $value);
        }

        if (!empty($_SERVER['HTTP_REFERER'])) {
            $url = $_SERVER['HTTP_REFERER'];
        } else {
            $url = "";
        }
        $this->success('内容排序成功', $url);
    }

}
