<?php

namespace App\Admin\PUT;

/**
 * 公用内容更新
 */
class Content extends \App\Admin\Common {

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
