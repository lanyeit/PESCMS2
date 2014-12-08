<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\GET;

class Html extends \App\Admin\Common {

    /**
     * 生成首页静态
     */
    public function index() {
        $this->layout();
    }
    
    /**
     * 生成列表页
     */
    public function listAction() {
        $this->layout();
    }
    
    /**
     * 生成内容页
     */
    public function contentAction() {
        $this->layout();
    }

}
