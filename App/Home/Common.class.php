<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Home;

class Common extends \Core\Controller\Controller {

    private $theme;
    protected $categorys;

    public function __construct() {
        $this->theme = \Model\Option::findOption('theme');
        $this->checkTheme();
        $siteSetting = \Model\Option::getOptionRange('setting');
        foreach ($siteSetting as $key => $value) {
            $site[$value['option_name']] = $value['value'];
        }
        $site['theme'] = $site['siteurl'] . "/Theme/Home/{$this->theme['value']}/";
        $this->assign($site);
        $this->systemParam();
        $this->findCatid();
        $this->getCategoryList();
        $this->checkSiteStatus($site['siteStatus'], $site['closeReason']);
//        $this->cookieLogin();
    }

    /**
     * 检查主题是否存在
     */
    private function checkTheme() {
        if (!is_dir(PES_PATH . "/Theme/Home/{$this->theme['value']}")) {
            exit($this->theme['value'] . $GLOBALS['_LANG']['COMMON']['THEME_NOT_EXIST']);
        }
    }

    /**
     * 获取系统扩展变量
     */
    private function systemParam() {
        $system = \Model\Option::findOption('system');
        $this->assign('system', json_decode($system['value'], true));
    }

    /**
     * 查找当前的分类ID
     */
    private function findCatid() {
        $id = (int) $_GET['id'];
        if (MODULE != 'Page' && ACTION == 'view') {
            $model = strtolower(MODULE);
            $content = \Model\Content::findContent($model, $id, "{$model}_id");
            $id = $content["{$model}_catid"];
        }

        $this->assign('catid', $id);
        $this->assign('cat', \Model\Category::findCategory($id));
    }

    /**
     * 获取分类列表
     */
    private function getCategoryList() {
        $list = \Model\Category::listCategory();
        foreach ($list as $key => $value) {
            $this->categorys[$value['category_id']] = $value;
        }
        $this->assign('categorys', $this->categorys);
    }

    /**
     * 检查网站的状态
     * @param type $siteStatus 网站状态
     * @param type $closeReason 关闭远离
     */
    private function checkSiteStatus($siteStatus, $closeReason) {
        if ($siteStatus == '0') {
            exit($closeReason);
        }
    }

}
