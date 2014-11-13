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
        if ($updateResult['status'] == false) {
            $this->db()->rollBack();
            $this->error($updateResult['mes']);
        }
        $this->db()->commit();

        $this->success($GLOBALS['_LANG']['CONTENT']['UPDATE_CONTENT_SUCCESS'], $this->url('Admin-' . MODULE . '-index'));
    }

    /**
     * 内容排序
     */
    public function listsort() {
        foreach ($_POST['id'] as $key => $value) {
            \Model\Model::updateSortFromModel(MODULE, $key, $value);
        }

        if (!empty($_SERVER['HTTP_REFERER'])) {
            $url = $_SERVER['HTTP_REFERER'];
        } else {
            $url = "";
        }
        $this->success($GLOBALS['_LANG']['COMMON']['SORT_SUCCESS'], $url);
    }

}
