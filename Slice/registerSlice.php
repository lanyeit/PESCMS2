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
|         参数可以为字符串或者数组
| 参数二：
|         切片的命名空间。相对于当前Slice目录。不需要填写空间名Slice,如：\Slice\Common\Auto，则填写\Common\Auto
|         注：切片是按照由上至下的顺序进行注册。
|         参数必须为数组
| 参数三:
|         不参与绑定的路由规则。和参数一一样。可以不填写
|         参数可以为字符串或者数组
| 示例代码：
|
| InitSlice::any(['Home', 'Home-Index'], ['\Common\Authenticate']); //路由Home, Home-index 绑定 \Common\Authenticate
|
| InitSlice::any('Admin-Setting-index', ['\Common\Authenticate']); //路由Admin-Setting-index 绑定\Common\Authenticate
|
| InitSlice::any('Admin', ['\Admin\Login'], ['Admin-Login']); //路由Admin 绑定\Admin\Login 但Admin-login不会被绑定
|
|--------------------------------------------------------------------------
|
*/
use \Core\Slice\InitSlice as InitSlice;
//注册后台登录验证
InitSlice::any('Admin', ['\Admin\Login'], ['Admin-Login']);
//注册后台菜单get请求的输出
InitSlice::get('Admin', ['\Admin\Menu'], ['Admin-Login']);
//注册自动更新用户组字段的信息
InitSlice::any(['Admin-User', 'Admin-User_group'], ['\Admin\UpdateField\UpdateUserGroupField']);
//注册自动更新用户组字段的信息
InitSlice::any(['Admin-Node'], ['\Admin\UpdateField\UpdateNodeParentField']);
//注册自动处理后台用户提交的用户密码表单
InitSlice::any(['Admin-User-action'], ['\Admin\HandleForm\HandleUser']);
//注册处理节点管理 添加/编辑 提交的表单内容
InitSlice::any(['Admin-Node-action'], ['\Admin\HandleForm\HandleNode']);
//注册理路由规则 添加/编辑 提交的表单内容
InitSlice::any(['Admin-Route-action'], ['\Admin\HandleForm\HandleRoute']);
