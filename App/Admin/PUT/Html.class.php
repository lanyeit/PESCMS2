<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\PUT;

class Html extends \App\Admin\Common {

    /**
     * 生成首页静态
     */
    public function index() {
        $this->createIndex();
        $this->success($GLOBALS['_LANG']['HTML']['CREATE_INDEX_SUCCESS'], $this->url('Admin-Html-index'));
    }

    /**
     * 生成列表页
     */
    public function listAction() {
        $num = empty($_GET['num']) ? '0' : $_GET['num'];
        $inc = empty($_GET['inc']) ? '0' : $_GET['inc'];
        \Model\Category::$where = "c.category_html = 1";
        $list = \Model\Category::listCategory();
        foreach ($list as $key => $value) {
            if ($key == $num) {
                /**
                 * 当前分类若不是顶层分类，需要保留自身别名的目录
                 */
                if ($value['category_parent'] > 0) {
                    \Model\Category::$categoryPath[] = $value['category_aliases'];
                }
                \Model\Category::findTopCategory($value['category_parent'], $value['category_id']);
                $path = $this->createPath(\Model\Category::$categoryPath);
                $model = \Model\Model::findModel($value['model_id']);

                if (!empty($_GET['c'])) {
                    if ($model['model_name'] == 'Page' || $value['model_id'] == '-1') {
                        header('Location:' . $this->url('Admin-Html-listAction', array('method' => 'PUT', 'num' => $num + 1, 'c' => 1)));
                        exit;
                    }
                    $table = strtolower($model['model_name']);
                    $view = \Model\Content::listCategoryContent($table, $value['category_id']);
                    foreach ($view as $door => $item) {
                        if ($door == $inc) {
                            $url = ucfirst($model['model_name']) . "-view";
                            $content = file_get_contents("http://{$_SERVER['SERVER_NAME']}" . $this->url($url, array('id' => $item["{$table}_id"])));
                            $fp = fopen("{$path}{$item["{$table}_id"]}.html", 'w');
                            fwrite($fp, $content);
                            \Model\Content::setContentHtmlUrl($table, $item["{$table}_id"], str_replace(PES_PATH, "/", $path) . "{$item["{$table}_id"]}.html");
                            $this->success("{$item["{$table}_title"]}生成内容页中", $this->url('Admin-Html-listAction', array('method' => 'PUT', 'num' => $num, 'c' => 1, 'inc' => $inc + 1)));
                        }
                    }
                    $this->success("{$item["{$table}_title"]}生成内容页中", $this->url('Admin-Html-listAction', array('method' => 'PUT', 'num' => $num + 1, 'c' => 1)));
                } else {
                    if ($model['model_name'] == 'Page') {
                        $url = 'Page-view';
                    } else {
                        $url = ucfirst($model['model_name']) . "-list";
                    }
                    $content = file_get_contents("http://{$_SERVER['SERVER_NAME']}" . $this->url($url, array('id' => $value['category_id'])));
                    $fp = fopen("{$path}index.html", 'w');
                    fwrite($fp, $content);
                    \Model\Category::setCategoryHtmlUrl($value['category_id'], str_replace(PES_PATH, "/", $path) . "index.html");
                    $this->success("{$value['category_name']}生成列表中", $this->url('Admin-Html-listAction', array('method' => 'PUT', 'num' => $num + 1)));
                }
            }
        }
        $this->createIndex();
        if (empty($_GET['c'])) {
            $this->success('列表页生成结束', $this->url('Admin-Html-listAction'));
        } else {
            $this->success('内容页生成结束', $this->url('Admin-Html-contentAction'));
        }
    }

    /**
     * 生成内容页
     */
    public function contentAction() {
        
    }

    /**
     * 创建首页
     * 因为列表页和内容页会涉及到首页，
     * 生成首页方法需要公用出来。
     */
    private function createIndex() {
        $content = file_get_contents("http://{$_SERVER['SERVER_NAME']}/index.php");
        $fp = fopen(PES_PATH . 'index.html', 'w');
        fwrite($fp, $content);
    }

    /**
     * 创建目录
     */
    private function createPath($path) {
        krsort($path);
        $str = PES_PATH;
        foreach ($path as $value) {
            $str .= $value . "/";
            if (!is_dir($str)) {
                mkdir($str);
            }
        }
        return $str;
    }

}
