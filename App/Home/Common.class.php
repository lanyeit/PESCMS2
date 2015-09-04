<?php

namespace App\Home;

abstract class Common extends \Core\Controller\Controller {

    protected $login = false;

    public function __init() {
        parent::__init();
    }

}
