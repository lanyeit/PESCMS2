<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\POST;

class Upload extends \App\Admin\Common {

    private $uploadPath, $recordPath, $uploadFileType, $savePath, $saveName;

    public function __construct() {
        parent::__construct();

        if (empty($_FILES)) {
            $this->callBack($GLOBALS['_LANG']['UPLOAD']['EMPTY_UPLOAD'], '0');
        }

        /**
         * 获取配置文件的上传目录
         */
        $this->uploadPath = PES_PATH . $this->loadConfig('UPLOAD_PATH');

        /**
         * 分析上传目录
         */
        $this->uploadFileType = pathinfo($_FILES['file']['name']);

        /**
         * 存储路径
         */
        $this->savePath = $this->uploadPath . date('/Ymd/');

        /**
         * 移除完整的目录信息
         * 以便记录入库
         */
        $this->recordPath = str_replace(PES_PATH, "", $this->savePath);


        /**
         * 判断上传目录是否存在
         */
        if (is_dir($this->uploadPath) === false) {
            mkdir($this->uploadPath);
            fopen("{$this->uploadPath}/index.html", 'w');
        }

        /**
         * 创建以日期形式存储目录
         */
        if (is_dir($this->savePath) === false) {
            mkdir($this->savePath);
            fopen("{$this->savePath}/index.html", 'w');
        }
    }

    /**
     * 上传缩略图
     * 默认生成两种格式
     */
    public function img() {
        if (empty($_POST['imgSize'])) {
            $this->callBack($GLOBALS['_LANG']['UPLOAD']['EMPTY_IMG_SIZE'], '0');
        }

        $imgSize = explode(',', $_POST['imgSize']);

        /**
         * 检测上传类型
         */
        $fileType = array('jpg', 'jpeg', 'png', 'gif');
        if (!in_array(strtolower($this->uploadFileType['extension']), $fileType)) {
            $this->callBack($GLOBALS['_LANG']['UPLOAD']['IMG_TIPS'], '0');
        }

        if ($this->setSize($imgSize['0'], $imgSize['1'])) {

            $this->callBack($this->recordPath);
        } else {
            $this->callBack($GLOBALS['_LANG']['UPLOAD']['UPLOAD_FAIL'], '0');
        }
    }

    /**
     * 设置图片格式
     * @param type $width 图片宽度
     * @param type $height 图片高度
     */
    private function setSize($newWidth, $newHeight) {
        $filename = $_FILES["file"]["tmp_name"];

        $name = uniqid() . ".{$this->uploadFileType['extension']}";

        $this->saveName = $this->savePath . $name;

        $this->recordPath .= $name;

        $extension = strtolower($this->uploadFileType['extension']);

        switch ($extension) {
            case 'jpg':
            case'jpeg':
                header('Content-Type: image/jpeg');
                break;
            case 'gif':
                header('Content-Type: image/gif');
                break;
            case 'png':
                header("Content-Type: image/png");
                break;
            default :
                $data['status'] = 0;
                $data['info'] = "文件类型不正确";
                exit(json_encode($data));
        }

        /**
         * 获取原图的宽高
         */
        list($width, $height) = getimagesize($filename);

        $image_p = imagecreatetruecolor($newWidth, $newHeight);

        switch ($extension) {
            case 'jpg':
            case'jpeg':
                $image = imagecreatefromjpeg($filename);
                break;
            case 'gif':
                $image = imagecreatefromgif($filename);
                break;
            case 'png':
                $image = imagecreatefrompng($filename);
                break;
        }

        /**
         * 压缩图片
         */
        imagecopyresampled($image_p, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

        /**
         * 保存图片
         */
        switch ($extension) {
            case 'jpg':
            case'jpeg':
                return imagejpeg($image_p, $this->saveName);
            case 'gif':
                return imagegif($image_p, $this->saveName);
            case 'png':
                return imagepng($image_p, $this->saveName);
        }
    }

    /**
     * 回调状态
     * @param type $info 包含的信息
     * @param type $status 状态，默认为200
     */
    private function callBack($info, $status = '200') {
        $data['status'] = $status;
        $data['info'] = $info;
        exit(json_encode($data));
    }

}
