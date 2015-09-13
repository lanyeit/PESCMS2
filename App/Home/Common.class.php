<?php

namespace App\Home;

abstract class Common extends \Core\Controller\Controller {

    protected $login = false;

    /**
     * 当前分类ID
     */
    protected $catid = 0;

    /**
     * 所有分类
     */
    protected $categorys;

    public function __init() {
        parent::__init();
        $this->headerMenu();
        $this->getCurrentCatid();
        $this->getCategoryList();
        $this->sidebarCategory();
    }

    /**
     * 页眉菜单
     */
    public function headerMenu() {
        $list = \Model\Content::listContent('category', array(), 'category_nav = 1 AND category_parent = 0', 'category_listsort ASC, category_id ASC');
        $this->assign('headerMenu', $list);
    }

    /**
     * 查找当前的分类ID
     */
    private function getCurrentCatid() {
        $this->catid = (int)$_GET['id'];
        if (MODULE != 'Page' && ACTION == 'view') {
            $model = strtolower(MODULE);
            $checkModel = \Model\ModelManage::findModel($model, 'model_name');
            if (!empty($checkModel)) {
                $content = \Model\Content::findContent($model, $this->catid, "{$model}_id");
                $this->catid = $content["{$model}_catid"];
            }
        }

        $this->assign('catid', $this->catid);
    }

    /**
     * 输出所有分类的数组
     */
    private function getCategoryList() {
        $list = \Model\Category::listCategory();
        foreach ($list as $key => $value) {
            $this->categorys[$value['category_id']] = $value;
        }
        $this->assign('categorys', $this->categorys);
    }

    /**
     * 侧栏分类
     */
    private function sidebarCategory() {
        //私认为本做法便于阅读
        $categorys = $this->categorys;
        $catid = $this->catid;

        //得出父类分类
        if ($categorys[$catid]['category_parent'] == '0') {
            $sidebarTopCat = $categorys[$catid];
        } else {
            $sidebarTopCat = $categorys[$categorys[$catid]['category_parent']];
        }

        //组装子分类信息
        $splitChild = explode(',', $sidebarTopCat['category_child']);
        $sidebarCat = array();
        foreach ($splitChild as $key => $value) {
            if ($value != $sidebarTopCat['category_id']) {
                $sidebarCat[$value] = $categorys[$value];
            }
        }

        $this->assign('sidebarTopCat', $sidebarTopCat);
        $this->assign('sidebarCat', $sidebarCat);
    }

    /**
     * 404页面
     */
    public function notfound() {
        header('HTTP/1.1 404');
        $this->assign('title', 'Error 404(Not Found)!');
        $this->display('404');
        exit;
    }

}
