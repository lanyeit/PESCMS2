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

class GetPicture extends Core {

    public function index() {
        if (!is_dir(PES_PATH . 'upload/beauty')) {
            mkdir(PES_PATH . 'upload/beauty');
        }
        $this->get();
    }

    /**
     * 抓去图片
     */
    private function get() {
        $list = $this->db('get_url')->where('url_status = 0')->order('url_id DESC')->find();

        $url = $list['url_link'];

        $array = explode('/', $url);
        $path = PES_PATH . 'upload/beauty/' . end($array);
        if (!is_dir($path)) {
            mkdir($path);
        }
        $curl = curl_init(); // 启动一个CURL会话	
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环	
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容	
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
        $tmpInfo = curl_exec($curl); // 执行操作
        curl_close($curl); // 关闭CURL会话 

        preg_match_all('/<title>(.*?)<\/title>/', $tmpInfo, $matches);
        $title = str_replace(array('全球时尚性感美女', '-'), "", $matches['1']);

        preg_match_all('/<div class="pic">\s+.*\s+.*<img(.*?)src="(.*?)"(.*?)>/', $tmpInfo, $matches);
        if (!empty($matches['2'])) {
            foreach ($matches['2'] as $value) {
                $suffix = explode('.', $value);
                $fileName = uniqid() . "." . end($suffix);

                ob_start();
                readfile($value);
                $img_data = ob_get_contents();
                ob_end_clean();

                $f = fopen("{$path}/{$fileName}", 'a');
                fwrite($f, $img_data);
                fclose($f);
                $filePath = "/" . str_replace(PES_PATH, "", "{$path}/{$fileName}");
                $fileList[] = $filePath;
                $this->compression($filePath, '600', 'small', '60');
            }

            $data['beauty_anchor'] = end($array);
            $data['beauty_status'] = '1';
            $data['beauty_createtime'] = time();
            $data['beauty_title'] = empty($title['0']) ? '无题尤物，扩张你的毛孔' : $title['0'];
            $data['beauty_thumb'] = $this->compression($fileList['0']);
            $data['beauty_imgs'] = implode(',', $fileList);
            $this->db('beauty')->insert($data);

            $this->db('get_url')->where('url_link = :url_link')->update(array('url_status' => '1', 'noset' => array('url_link' => $url)));
        }else{
            //当无法抓取的地址时，状态设置为2，避免卡进程
            $this->db('get_url')->where('url_link = :url_link')->update(array('url_status' => '2', 'noset' => array('url_link' => $url)));
        }
    }

    /**
     * 压缩图片
     * @param type $img 图片路径
     * @param type $setWidth 设置的宽度
     * @param type $type 图片名称类型
     * @param type $compression 图片质量
     * @return type 返回生成图片路径
     */
    private function compression($img, $setWidth = '240', $type = 'thumb', $compression = '0') {
        //获取图片的信息
        $extension = pathinfo($img);

        //加载图片
        $im = new Imagick(PES_PATH . $img);

        //获取宽度
        $width = $im->getImageWidth();
        //获取高度
        $height = $im->getImageHeight();
        //获取图片的宽高比例
        $proportion = $width / $height;

        //设置图片质量
        $im->setImageCompressionQuality($compression);
        //移除图片中的配置信息
        $im->stripImage();

        //设置缩略图的尺寸
        $im->thumbnailImage($setWidth, round($setWidth / $proportion, 0), false);
        //图片名称
        $saveName = "{$extension['dirname']}/{$extension['filename']}_{$type}.{$extension['extension']}";
        //生成图片
        $im->writeImage(PES_PATH . $saveName);

        //清空图片信息
        $im->clear();
        $im->destroy();

        return $saveName;
    }


}

$obj = new GetPicture();
$obj->index();
