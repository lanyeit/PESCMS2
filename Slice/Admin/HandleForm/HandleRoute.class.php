<?php
/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 * @core version 2.6
 * @version 1.0
 */


namespace Slice\Admin\HandleForm;

/**
 * 处理路由规则 添加/编辑 提交的表单内容
 * @package Slice\Ticket
 */
class HandleRoute extends \Core\Slice\Slice {

    /**
     * 更新哈希值
     */
    public function before() {
        $_POST['hash'] = (string)md5($_POST['controller'] . $_POST['param']);
    }

    /**
     * 更新路由规则
     */
    public function after() {
        $route = \Model\Content::listContent([
            'table' => 'route',
            'condition' => 'route_status = 1',
            'order' => 'route_listsort ASC, route_id DESC'
        ]);

        $routeFileName = md5(\Core\Func\CoreFunc::loadConfig('PRIVATE_KEY')) . '_route.php';

        $routePath = PES_PATH . "/Config/Route/{$routeFileName}";
        $routeUrl = PES_PATH . "/Config/RouteUrl/{$routeFileName}";

        if (empty($route)) {
            unlink($routePath);
            unlink($routeUrl);
        } else {
            $routeStr['route'] = $routeStr['url'] = "<?php\r\n return array(\r\n";
            foreach($route as $key => $value){
                $routeStr['route'] .= " '{$value['route_rule']}' => '{$value['route_controller']}',  \r\n";
                $routeStr['url'] .= " '{$value['route_hash']}' => '{$value['route_rule']}', \r\n";
            }
            $routeStr['route'] .= ");\r\n";
            $routeStr['url'] .=  ");\r\n";

            //写入自定义路由规则
            $routeFopen = fopen($routePath, 'w+');
            fwrite($routeFopen, $routeStr['route']);
            fclose($routeFopen);

            //写入\Core\Func\Core::url()方法使用的匹配路由规则
            $urlFopen = fopen($routeUrl, 'w+');
            fwrite($urlFopen, $routeStr['url']);
            fclose($urlFopen);

        }
    }


}