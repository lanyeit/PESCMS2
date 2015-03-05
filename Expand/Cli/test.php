<?php

require 'Core.php';

class test extends Core {

    public function index() {
        $list = $this->db('beauty')->field('beauty_id,beauty_thumb, beauty_imgs')->select();
        foreach ($list as $value) {
            $arrayList = explode(',', $value['beauty_imgs']);
            if (!empty($arrayList)) {
                foreach ($arrayList as $k => $v) {
                    if ($k == '0') {
                        $aaa = $this->compression($v);
//                        $this->db('beauty')->where("beauty_id = '{$value['beauty_id']}'")->update(array('beauty_thumb' => $aaa));
                    }
//                    $this->compression($v, '600', 'small', '60');
                }
            }
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

$obj = new test();
$obj->index();
