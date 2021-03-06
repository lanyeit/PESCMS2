<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\GET;

class Node extends Content {

    public function index() {
        $this->assign('title', $this->model['model_title']);
        $this->assign('node', \Model\Node::nodeList());
        $this->layout();
    }


}
