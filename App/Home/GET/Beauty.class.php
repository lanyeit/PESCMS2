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

class Beauty extends \Core\Controller\Controller {

    public function __call($name, $arguments) {
        switch ($name) {
            case 'about':
                $this->page('41');
                break;
            case 'api':
                $this->page('42');
                break;
            case 'verify':
                $this->verify();
                break;
            default :
                $this->lose();
        }
    }

    /**
     * 列表
     */
    public function index() {
        $page = new \Expand\Home\Page();

        $condition = "";
        $param = array();

        if (!empty($_GET['s'])) {
            $condition .= " beauty_title LIKE :beauty_title ";
            $param = array('beauty_title' => '%' . $this->g('s') . '%');
        }

        $page->listRows = '30';
        $page->total(count($this->db('beauty')->where($condition)->select($param)));
        $page->handle();
        $list = $this->db('beauty')->where($condition)->order('beauty_id DESC')->limit("{$page->firstRow}, {$page->listRows}")->select($param);
        $this->assign('s', $this->g('s'));
        $this->assign('list', $list);
        $this->assign('page', $page->show());
        $this->layout('', 'Beauty_layout');
    }

    /**
     * 详细页
     */
    public function view() {
        $anchor = $this->isG('post', $GLOBALS['_LANG']['CONTENT']['SELECT_VIEW_ID']);
        $content = \Model\Content::findContent('beauty', $anchor, 'beauty_anchor');
        if (empty($content)) {
            $this->jump($this->url('page-404'));
        }

        $this->db('beauty')->where("beauty_id = {$content['beauty_id']}")->setInc('beauty_view');

        $this->assign($content);
        $this->assign('title', $content["beauty_title"]);
        $this->assign('keyword', $content["beauty_keyword"]);
        $this->assign('description', $content["beauty_description"]);
        $this->layout('', 'Beauty_layout');
    }

    /**
     * 单页
     */
    public function page($id) {
        /**
         * page_type 为 3 才是肉丝网的单页
         */
        $content = $this->db('page')->where('page_id = :page_id AND page_type = 3')->find(array('page_id' => $id));
        if (empty($content)) {
            $this->jump($this->url('page-404'));
        }
        $this->assign($content);
        $this->assign('title', $content["beauty_title"]);
        $this->assign('keyword', $content["beauty_keyword"]);
        $this->assign('description', $content["beauty_description"]);
        $this->layout('Beauty_page', 'Beauty_layout');
    }

    /**
     * 联系我们
     */
    public function contact() {
        $this->layout('Beauty_form', 'Beauty_layout');
    }

    /**
     * 404页面
     */
    public function lose() {
        $this->assign('title', '本页没有您所查找的美女');
        $this->layout('Beauty_404', 'Beauty_layout');
    }

    /**
     * 输出验证码
     */
    public function verify() {
        $verif = new \Expand\Verify();
        $verif->createVerify();
    }

    /**
     * 数据接口
     */
    public function data() {
        $page = new \Expand\Home\Page();

        $page->listRows = '30';
        $page->total(count($this->db('beauty')->select()));
        $page->handle();
        $res = $this->db()->fetchArray("SELECT * FROM {$this->prefix}beauty ORDER BY beauty_id DESC LIMIT {$page->firstRow}, {$page->listRows} ");

        /**
         * xml还是json
         */
        if (strtolower($_GET['type']) == 'xml') {
            header("Content-type: text/xml");
            echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";

            $xmlStr = "";
            echo "<data-list>";
            while ($row = $res->fetch()) {

                echo "<id-{$row['beauty_id']}>";
                echo "<title>{$row['beauty_title']}</title>";
                echo "<thumb>{$row['beauty_thumb']}</thumb>";
                echo "<time>{$row['beauty_createtime']}</time>";
                echo "</id-{$row['beauty_id']}>";
                echo "<imgs>";
                $imgs = explode(',', $row['beauty_imgs']);
                if (!empty($imgs)) {
                    foreach ($imgs as $key => $value) {
                        echo "<key-{$key}>{$value}</key-{$key}>";
                    }
                }
                echo "</imgs>";
                
                echo "<small_imgs>";
                $imgs = explode(',', $row['beauty_imgs']);
                if (!empty($imgs)) {
                    foreach ($imgs as $key => $value) {
                        $info = pathinfo($value);
                        echo "<key-{$key}>{$info['dirname']}/{$info['filename']}_small.{$info['extension']}</key-{$key}>";
                    }
                }
                echo "</small_imgs>";
            }
            echo "</data-list>";
            exit;
        } else {
            while ($row = $res->fetch()) {
                $list[$row['beauty_id']]['title'] = $row['beauty_title'];
                $list[$row['beauty_id']]['thumb'] = $row['beauty_thumb'];
                $list[$row['beauty_id']]['time'] = $row['beauty_createtime'];
                $imgs = explode(',', $row['beauty_imgs']);
                $list[$row['beauty_id']]['imgs'] = $imgs;
                foreach ($imgs as $key => $value) {
                    $info = pathinfo($value);
                    $list[$row['beauty_id']]['small_imgs'][] = "{$info['dirname']}/{$info['filename']}_small.{$info['extension']}";
                }
            }
            echo json_encode($list);
            exit;
        }
    }

}
