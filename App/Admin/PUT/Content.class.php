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
        $model = strtolower(MODULE);
        foreach ($_POST['id'] as $key => $value) {
            $this->db($model)->where("{$model}_id = :{$model}_id")->update(array("{$model}_listsort" => $value, 'noset' => array("{$model}_id" => $key)));
        }

        if (!empty($_SERVER['HTTP_REFERER'])) {
            $url = $_SERVER['HTTP_REFERER'];
        } else {
            $url = "";
        }
        $this->success($GLOBALS['_LANG']['SORT_SUCCESS'], $url);
    }

}
