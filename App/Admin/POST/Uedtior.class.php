<?php

namespace App\Admin\POST;

/**
 * 临时封装的百度编辑器上传功能
 */
class Uedtior extends \App\Admin\Common {

    public function index() {
        require PES_PATH . '/Theme/assets/ueditor/php/controller.php';
    }

}
