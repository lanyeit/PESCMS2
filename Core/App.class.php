<?php

/**
 * PESCMS run in PHP 5.3+
 *
 * Copyright (c) 2014 PESMCMS (http://www.pesmcs.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Core;

use Core\Abnormal\Abnormal as Abnormal,
    Core\Route\Route as Route;

/**
 * 初始化系统控制层
 * @author LuoBoss
 * @version 1.0
 */
class App {

    private $language = array();

    public function __construct() {

        //自动注册类
        spl_autoload_register(array($this, 'loader'));
        //自定义报错机制
        set_error_handler("Core\Abnormal\Error::getError");
        register_shutdown_function('Core\Abnormal\Error::getShutdown');

        if (empty($_COOKIE['language'])) {
            setcookie('language', \Core\Func\CoreFunc::loadConfig('LANGUAGE'), time() + 604800, '/');
        }

        $this->language = require PES_PATH."Language/{$_COOKIE['language']}/Core/lang.php";
        
        //实体化控制层
        $this->start();
    }

    /**
     * 执行指定模块
     */
    public function start() {
        $route = new Route();
        $route->index();

        try {
            $class = "\\" . ITEM . "\\" . GROUP . "\\" . MODULE;
            $obj = new $class();

            if (!method_exists($obj, ACTION)) {
                throw new Abnormal($this->language['404']);
            }
            $a = ACTION;
            $obj->$a();
            unset($a);
        } catch (Abnormal $e) {
            try {
                //让魔术方法可以调用
                if (!is_callable(array($obj, ACTION))) {
                    throw new Abnormal($this->language['404']);
                }
                $a = ACTION;
                $obj->$a();
                unset($a);
            } catch (Abnormal $e) {
                /* 无法侦测到 */
                try {
                    if (file_exists(THEME . '/' . GROUP . '/' . MODULE . '_' . ACTION . '.php')) {
                        include THEME . '/' . GROUP . '/' . MODULE . '_' . ACTION . '.php';
                    } else {
                        throw new Abnormal('404 Not found!');
                    }
                } catch (Abnormal $e) {
                    header('HTTP/1.1 404');
                    if (DEBUG == true) {
                        $title = "404 Page Not Found";
                        $errorMes = "<b>Debug route info:</b> Group:" . GROUP . ", Model:" . MODULE . ", Action:" . ACTION;
                        $errorFile = "<b>File loaded:</b> {$class}";
                    } else {
                        $title = $this->language['404'];
                $errorMes = $this->language['ERROR_MES'];
                $errorFile = $this->language['ERROR_FILE'];
                    }
                    require $this->promptPage();
                    exit;
                }
            }
        }
    }

    /**
     * 加载必须的类名
     * @param type $className 加载类名
     */
    private function loader($className) {
        $unixPath = str_replace("\\", "/", $className);
        if (file_exists(PES_PATH . $unixPath . '.class.php')) {
            require PES_PATH . $unixPath . '.class.php';
        } else {
            header('HTTP/1.1 404');
            if (DEBUG == true) {
                $title = $this->language['CLASS_LOST'];
                $errorMes = "<b>Debug info:</b> Class undefined.";
                $errorFile = "<b>File :</b>" . PES_PATH . $unixPath . '.class.php';
            } else {
                $title = $this->language['404'];
                $errorMes = $this->language['ERROR_MES'];
                $errorFile = $this->language['ERROR_FILE'];
            }
            require $this->promptPage();
            exit;
        }
    }

    /**
     * 获取提示页
     * @return type 返回模板
     */
    private function promptPage() {
        if (file_exists(THEME . '/' . GROUP . '/404.php')) {
            return THEME . '/' . GROUP . '/404.php';
        } else {
            return PES_CORE . 'Theme/error.php';
        }
    }

}
