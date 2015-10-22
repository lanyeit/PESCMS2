<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Expand\Home;

/**
 * 后台分页类
 */
class Page extends \Expand\PageCommon {

    public $firstRow = '0'; //起始行
    public $listRows = '10'; //显示行数
    public $rollPage = '5'; //分页数
    //public $url = '';//分页地址
    public $totalPages = ''; //总页数
    public $totalRow = ''; //总记录
    public $nowPage = '';

    public function __construct() {
        $this->total('');
    }

    public function total($total) {
        $this->totalRow = $total;
        $this->totalPages = ceil($this->totalRow / $this->listRows);
    }

    public function handle() {
        $page = empty($_GET['page']) ? '1' : (int) $_GET['page'];
        if ($page > $this->totalPages && $this->totalPages > 0) {//用户页数大于翻页书时，则显示最后一页数据
            $page = $this->totalPages;
        }
        $this->nowPage = $page;
        $this->firstRow = $this->listRows * ($this->nowPage - 1);
        //echo $this->nowPage;
    }

    public function show() {
        $nowCoolPage = ceil($this->nowPage / $this->rollPage);
        $upRow = $this->nowPage - 1;
        $downRow = $this->nowPage + 1;
        $link = $this->urlModel(GROUP);
        
        $url = "";

        $url .=!empty($this->totalPages) ? '<li><a>总计<b>' . $this->totalRow . '</b>个记录</a></li>' : '';

        $url .=!empty($upRow) ? '<li><a href="' . $link . $this->urlLinkStr(array('page' => '1'), $this->linkStr, $this->suffix) . '">首页</a></li><li><a href="' . $link . $this->urlLinkStr(array('page' => $upRow), $this->linkStr, $this->suffix) . '">上一页</a></li> ' : '';

        $interval = ceil($this->rollPage / 2);
        for ($i = $this->nowPage - $interval; $i < $this->nowPage; $i++) {
            if ($i > 0) {
                $url .= '<li><a href="' . $link . $this->urlLinkStr(array('page' => $i), $this->linkStr, $this->suffix) . '">' . $i . '</a></li>';
            }
        }

        $url .= '<li class="am-active"><a href="javascript:;">' . $this->nowPage . '</a></li>';

        for ($i = $this->nowPage + 1; $i < $this->nowPage + $interval + 1; $i++) {
            if ($i <= $this->totalPages) {
                $url .= '<li><a href="' . $link . $this->urlLinkStr(array('page' => $i), $this->linkStr, $this->suffix) . '">' . $i . '</a></li>';
            }
        }

        $url .=$downRow <= $this->totalPages ? '<li><a href="' . $link . $this->urlLinkStr(array('page' => $downRow), $this->linkStr, $this->suffix) . '" class="next">下一页</a></li>' : '';
        $url .= $this->totalPages > 1 && $this->nowPage < $this->totalPages ? '<li><a href="' . $link . $this->urlLinkStr(array('page' => $this->totalPages), $this->linkStr, $this->suffix) . '" class="last">最后一页</a></li>' : '';
        return $url;
    }

}
