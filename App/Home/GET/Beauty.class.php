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
            case 'verify':
                $this->verify();
                break;
            default :
                $this->lose();
        }
    }

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
    public function verify(){
        $verif = new \Expand\Verify();
        $verif->createVerify();
    }

}
