<?php

namespace App\Admin\DELETE;

/**
 * 公用内容删除方法
 */
class Content extends \App\Admin\Common {

    /**
     * 魔术方法，执行删除
     * @param type $name
     * @param type $arguments
     */
    public function __call($name, $arguments) {
        $this->delete();
    }

    /**
     * 执行删除动作
     */
    public function delete() {
        $id = $this->isG('id', $GLOBALS['_LANG']['DELETE_ID']);
        $model = strtolower(MODULE);
        $result = $this->db($model)->where("{$model}_id = :id")->delete(array('id' => $id));
        if (empty($result)) {
            $this->error($GLOBALS['_LANG']['DELETE_ERROR']);
        } else {
            $this->success($GLOBALS['_LANG']['DELETE_SUCCESS']);
        }
    }

}
