<?php

/**
 * Pes for PHP 5.3+
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
    public $rollPage = '10'; //分页数
    //public $url = '';//分页地址
    public $totalPages = ''; //总页数
    public $totalRow = ''; //总记录
    public $nowPage = '';

    /**
     * 构造函数
     */
    public function __construct() {
        $this->total('');
    }

    /**
     * 计算和统计内容
     * @param type $total
     */
    public function total($total) {
        $this->totalRow = $total;
        $this->totalPages = ceil($this->totalRow / $this->listRows);
    }

    /**
     * 处理分页
     */
    public function handle() {
        $page = (int) $_GET['page'];
        if ($page > $this->totalPages) {//用户页数大于翻页书时，则显示最后一页数据
            $page = $this->totalPages;
        }
        $this->nowPage = !empty($page) ? $page : 1;
        $this->firstRow = $this->listRows * ($this->nowPage - 1);
        //echo $this->nowPage;
    }

    /**
     * 显示分页
     * @return string 返回分页
     */
    public function show() {
        $nowCoolPage = ceil($this->nowPage / $this->rollPage);
        $upRow = $this->nowPage - 1;
        $downRow = $this->nowPage + 1;
        $link = $this->urlModel();

        $url .= '<a href="javascript:;">总计<b>' . $this->totalRow . '</b>个记录</a>';
        $url .=!empty($upRow) ? '<a href="' . $link . $this->urlLinkStr(array('page' => '1'), $this->linkStr, $this->suffix) . '">首页</a> <a href="' . $link . $this->urlLinkStr(array('page' => $upRow), $this->linkStr, $this->suffix) . '">上一页</a> ' : '';
        for ($i = 0; $i < $this->rollPage; $i++) {
            $numPage = ($nowCoolPage - 1) * $this->rollPage + $i + 1;
            if ($numPage <= $this->totalPages) {
                $url .=$numPage != $this->nowPage && $numPage ? '<a href="' . $link . $this->urlLinkStr(array('page' => $numPage), $this->linkStr, $this->suffix) . '">' . $numPage . '</a>' : '<a href="javascript:;" class="page_on">' . $numPage . '</a>';
            }
        }
        $url .=$downRow <= $this->totalPages ? '<a href="' . $link . $this->urlLinkStr(array('page' => $downRow), $this->linkStr, $this->suffix) . '" class="next">下一页</a>' : '';
        $url .= $this->totalPages > 1 && $this->nowPage < $this->totalPages ? '<a href="' . $link . $this->urlLinkStr(array('page' => $this->totalPages), $this->linkStr, $this->suffix) . '" class="last">尾页</a></url>' : '';
        return $url;
    }

}
