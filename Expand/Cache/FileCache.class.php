<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Expand\Cache;

use Core\Func\CoreFunc as CoreFunc;

/**
 * Pes文件缓存
 */
class FileCache {

    private $tempPath;

    public function __construct() {
        $tempPath = CoreFunc::loadConfig('FILE_CACHE_PATH');
        if (!is_dir($tempPath)) {
            if (!mkdir($tempPath)) {
                exit('无法创建缓存目录');
            }
        }
        if (!is_dir($tempPath . '/' . GROUP)) {
            if (!mkdir($tempPath . '/' . GROUP)) {
                exit('无法创建缓存目录');
            }
        }
        $this->tempPath = $tempPath . '/' . GROUP . '/';
    }

    /**
     * 创建文件缓存
     * @param str $name 缓存名称
     * @param str $data 缓存数据
     */
    public function createCache($name, $data = '') {
        $filename = md5($name) . '.cache';
        $str = time() . "\n" . json_encode($data);
        if (!file_exists($this->tempPath . $filename)) {
            $fh = fopen($this->tempPath . $filename, "w");
            fputs($fh, $str);
            fclose($fh);
        }
        //存在，则判断缓存时间是否到
        $fh = file($this->tempPath . $filename);
        $timeout = time() - $fh[0];
        //缓存超时，重新生成
        if ($timeout > CoreFunc::loadConfig('FILE_CACHE_TIME')) {
            if (empty($data)) {
                $fp = fopen($this->tempPath . $filename, 'r+');
                if ($fp) {
                    $i = 0;
                    while (!feof($fp)) {
                        if ($i == 0) {
                            fseek($fp, 0, SEEK_CUR);
                            fwrite($fp, time()); //对旧缓存再延迟30分钟
                            break;
                        }
                        fgets($fp);
                        $i++;
                    }
                    fclose($fp);
                }
            } else {
                $str = time() . "\n" . json_encode($data);
                $fh = fopen($this->tempPath . $filename, "w");
                fputs($fh, $str);
                fclose($fh);
            }
        }
    }

    /**
     * 读取缓存
     * @param str $name 缓存名称
     * @return array 返回数组
     */
    public function loadCache($name) {
        $filename = md5($name) . '.cache';
        if (is_file($this->tempPath . $filename)) {
            //读取文件缓存
            $fh = file($this->tempPath . $filename);
            return json_decode($fh[1], true);
        }else{
            return false;
        }
    }

}