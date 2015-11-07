<?php
/*
| PESCMS for PHP 5.4+
| @version 2.6
| For the full copyright and license information, please view
| the file LICENSE.md that was distributed with this source code.
|--------------------------------------------------------------------------
| 切片注册
| 程序提供五个方法声明切片绑定的请求类型: any, get, post, put, delete
| 参数一：绑定控制器路由规则。为空则对全局控制器路由生效。
|         不为空，则依次填写 组-模型-方法。 填写组，则绑定组路由下所有方法。如此类推
| 参数二：
| 注：切片是按照由上至下的顺序进行注册。
|
| 示例代码：
|
| InitSlice::any(['Home', 'Home-Index'], ['\Common\Authenticate']); //路由Home, Home-index 绑定 \Common\Authenticate
|
|  InitSlice::any('Admin-Setting-index', ['\Common\Authenticate']); //路由Admin-Setting-index 绑定\Common\Authenticate
|
|--------------------------------------------------------------------------
|
*/
use \Core\Slice\InitSlice as InitSlice;

