<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Home\GET;

class Update extends \App\Home\Common {

    /**
     * 输出更新信息
     */
    public function index() {
        $version = $this->checkContent('version', '请提交版本号');
        $program = $this->checkContent('program', '请选择程序');
        $list = $this->db('update')->where('update_prev_version = :update_prev_version AND update_program =:update_program')->find(array('update_prev_version' => $version, 'update_program' => $program));
        if (empty($list)) {
            exit(json_encode(array('status' => '10', 'mes' => '无法获取版本信息')));
        }
        $url = "http://api.pescms.com/";

        $update = array('status' => '200', 'mes' => '有新版发布!', 'info' => array('version' => $list['update_title'], 'content' => $list['update_content'], 'createtime' => $list['update_createtime'], 'file' => empty($list['update_file']) ? '' : $url . $list['update_file'], 'sql' => empty($list['update_sql']) ? '' : $url . $list['update_sql'], 'type' => $list['update_type']));
        echo json_encode($update);
    }

    /**
     * 检查提交的内容
     * @param type $name 名称
     * @param type $mes 提示消息
     * @return type
     */
    private function checkContent($name, $mes) {
        if (empty($_GET[$name])) {
            exit(json_encode(array('status' => '0', 'mes' => $mes)));
        } else {
            return $_GET[$name];
        }
    }

}
