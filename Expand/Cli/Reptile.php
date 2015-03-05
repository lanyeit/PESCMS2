<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */
require 'Core.php';

class Reptile extends Core {

    /**
     * 计时器1，采集页面超过5次为空，则停止采集。
     */
    private $timer1 = 0;

    /**
     * 计时器2，采集URL相同数量超过5，则停止采集。
     */
    private $timer2 = 0;

    public function index() {
        $this->arrested();
    }

    /**
     * 抓取
     */
    private function arrested() {
        $i = 1;
        while ($this->timer1 == 0) {
            $url = "http://me2-sex.lofter.com/?page={$i}&mydomainr=true";
            $curl = curl_init(); // 启动一个CURL会话	
            curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
            curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环	
            curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容	
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
            $tmpInfo = curl_exec($curl); // 执行操作
            curl_close($curl); // 关闭CURL会话
            preg_match_all('/<div class="pic">\s+\s+.*<a(.*?)href="(.*?)"(.*?)>/', $tmpInfo, $matches);

            if (empty($matches['2'])) {
                $this->timer1++;
            }
            if ($this->timer1 >= 5) {
                echo '超过采集空白次数了';
                return true;
            }

            foreach ($matches as $value) {
                foreach ($value as $v1) {
                    if ($this->timer2 >= 5) {
                        return true;
                    }
                    if (filter_var($v1, FILTER_VALIDATE_URL)) {
                        $res = $this->db('get_url')->where('url_link = :url_link')->find(array('url_link' => $v1));
                        if (empty($res)) {
                            $data['url_link'] = $v1;
                            $data['url_status'] = '0';
                            $data['url_addtime'] = time();
                            $this->db('get_url')->insert($data);
                        } else {
                            $this->timer2++;
                        }
                    }
                }
            }
            $i++;
        }
    }

}

$obj = new Reptile();
$obj->index();
