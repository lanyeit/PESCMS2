<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Slice;

/**
 * 初始化切片
 * Class InitSlice
 */
class InitSlice{
    function __construct() {
        require 'registerSlice.php';
    }


    public static function route(){

    }

    public static function any($a, $b){
//        var_dump($b);
        $b();
        echo '<pre>';
        print_r(func_get_args());
        exit;
    }

    public static function __callStatic($name, $arguments) {
        echo '<pre>';
        print_r($name);
        print_r($arguments);
        exit;

    }


}