<?php
/**
| PESCMS for PHP 5.4+
| @version 2.6
| For the full copyright and license information, please view
| the file LICENSE.md that was distributed with this source code.
|--------------------------------------------------------------------------
| 切片注册
|--------------------------------------------------------------------------
|
| 在这里可以注册任何切片
|
*/
use Slice as InitSlice;

\Slice\InitSlice::any('/', function () {
    echo 'ddd';
});