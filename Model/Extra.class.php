<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Model;

/**
 * 额外的模型
 * 主要存放一些冷门，定位不准确，傻傻的方法
 */
class Extra extends \Core\Model\Model {

    public static function insertSiteUrl(array $siteInfo, $crawlResult) {
        preg_match_all('/<a .*?href="(.*?)".*?>/is', $crawlResult, $matches);
        if (!empty($matches['1'])) {
            foreach ($matches['1'] as $u) {
                $param = array('site_id' => $siteInfo['crawl_site_id'], 'visited' => '0', 'add_time' => time());
                //链接非法，即可能为相对地址的
                if (filter_var($u, FILTER_VALIDATE_URL) === false) {
                    preg_match("/^(http|https):\/\/(www.{$siteInfo['site_name']}|{$siteInfo['site_name']})\.com/", $u, $m);
                    //因为可能存在误判。所以多加一层判断
                    if (!empty($m)) {
                        $param['site_url'] = $u;
                        $param['url_hash'] = md5($u);
                    } else {
                        //移除一些javascript之类的URL
                        if (strpos($u, 'javascript') === false) {
                            $param['site_url'] = $siteInfo['site_url'] . $u;
                            $param['url_hash'] = md5($siteInfo['site_url'] . $u);
                        } else {
                            unset($param);
                        }
                    }
                } else {
                    preg_match("/^(http|https):\/\/(www.{$siteInfo['site_name']}|{$siteInfo['site_name']})\.com/", $u, $m);
                    if (!empty($m)) {
                        $param['site_url'] = $u;
                        $param['url_hash'] = md5($u);
                    } else {
                        unset($param);
                        continue;
                    }
                }
                if (!empty($param['url_hash'])) {
                    $checkUrl = self::db('crawl_site_url')->where('site_id = :site_id AND url_hash = :url_hash')->select(array('site_id' => $siteInfo['crawl_site_id'], 'url_hash' => $param['url_hash']));
                    if (empty($checkUrl)) {
                        self::db('crawl_site_url')->insert($param);
                    }
                }
            }
        }
    }

}
