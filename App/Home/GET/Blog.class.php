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

class Blog extends \Core\Controller\Controller {

    
    /**
     * 当前时间
     * @var type 
     */
    private $createtime;
    
    /**
     * 构造函数
     */
    public function __construct() {
        $this->createtime = time();

    }
    
    /**
     * 方法跳转和执行list方法
     * @param type $name
     * @param type $arguments
     */
    public function __call($name, $arguments) {
        switch ($name) {
            case 'list':
                $this->_list();
                break;
            case 'sitemap':
                $this->display('sitemap');
                break;
            default :
                header('HTTP/1.1 404');
                $this->assign('title', 'Error 404(Not Found)!');
                $this->lose();
        }
    }

    /**
     * 文章列表
     */
    public function index() {
        $this->_list();
    }

    /**
     * 内容列表
     */
    public function _list() {
        $catid = empty($_GET['id']) ? '17' : (int) $_GET['id'];
        $categorys = \Model\Category::findCategory($catid);
        $db = $this->db('blog b');

        $page = new \Expand\Home\Page();
        $total = count($db->join('pes_category pc on pc.category_id = b.blog_catid')->where("b.blog_catid in ({$categorys['category_child']}) and b.blog_status = 1 and b.blog_createtime <= {$this->createtime}")->order('b.blog_listsort asc, b.blog_id desc')->select());
        $count = $page->total($total);
        $page->handle();
        $list = $db->field('b.*, pc.category_id, pc.category_name')->join('pes_category pc on pc.category_id = b.blog_catid')->where("b.blog_catid in ({$categorys['category_child']}) and b.blog_status = 1 and b.blog_createtime <= {$this->createtime}")->order('b.blog_listsort asc, b.blog_id desc')->limit("{$page->firstRow}, {$page->listRows}")->select();

        $show = $page->show();
        $this->assign('keyword', $categorys[$catid]['category_keyword']);
        $this->assign('description', $categorys[$catid]['category_description']);
        $this->assign('page', $show);
        $this->assign('list', $list);
        $this->display('Blog_index');
    }

    /**
     * 内容详细
     */
    public function view() {
        $id = $this->isg('id', '请选择您要查看的内容');
        $list = $this->db('blog AS b')->field('b.*, pc.category_id, pc.category_name')->join('pes_category pc on pc.category_id = b.blog_catid')->where("b.blog_id = :id and b.blog_status = 1 and b.blog_createtime <= {$this->createtime}")->find(array('id' => $id));
        if (empty($list)) {
            $this->jump($this->url('page-404'));
        }
        $this->assign($list);
        $this->display('Blog_view');
    }

    /**
     * 关于本博
     */
    public function about() {
        $content = $this->db('page')->where('page_id = 21')->find();
        if (empty($content)) {
            $this->jump($this->url('page-404'));
        }
        $this->assign($content);
        $this->assign('title', $content["page_title"]);
        $this->assign('keyword', $content["page_keyword"]);
        $this->assign('description', $content["page_description"]);
        $this->display('Blog_page');
    }

    /**
     * 日志归档
     */
    public function archives() {
        $categorys = \Model\Category::findCategory('17');
        $result = $this->db('blog AS b')->field('b.*, pc.category_id, pc.category_name')->join('pes_category pc on pc.category_id = b.blog_catid')->where("b.blog_catid in ({$categorys['category_child']}) and b.blog_status = 1 and b.blog_createtime <= {$this->createtime}")->order('b.blog_listsort asc, pc.category_id desc')->select();
        $inCate = explode(',', $categorys['category_child']);
        $this->assign('inCate', $inCate);
        foreach ($result as $key => $value) {
            foreach ($inCate as $_key => $_value) {
                if ($value['category_id'] == $_value) {
                    $list[$value['category_id']]['category_name'] = $value['category_name'];
                    $list[$value['category_id']]['archives'][] = $value;
                }
            }
        }

        $this->assign('title', "归档日志");
        $this->assign('list', $list);
        $this->display();
    }
    
    /**
     * 404页面
     */
    public function lose() {
        $this->assign('title', '404页面没找到');
        $this->display('Blog_404');
    }

}