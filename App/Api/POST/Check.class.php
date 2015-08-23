<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Api\POST;

class Check extends \App\Api\Common {

    /**
     * 验证物理地址
     */
    public function mac() {
        $mac = $this->isP('mac', '请提交物理地址');
        $user = $this->isP('user', '请提用户名称');
        $verify = \Core\Func\CoreFunc::generatePwd($mac . $user, \Core\Func\CoreFunc::loadConfig('PRIVATE_KEY'));

        $checkResult = \Model\Content::findContent('mac', $verify, 'mac_verify');
        if (empty($checkResult)) {
            $this->db('mac')->insert(array('mac_address' => $mac, 'mac_createtime' => time(), 'mac_verify' => $verify));
            $this->error("首次运行本软件,请将下方编码发给管理员:<br/>{$mac}");
        } elseif ($checkResult['mac_status'] == '0') {
            $this->error("您的电脑还没有通过验证,请将下方编码发给管理员:<br/>{$mac}");
        } else {
            //验证成功,输出数据,减小请求
            $result = $this->db('api')->where('api_status = 1')->order("api_listsort asc, api_id desc")->select();
            $this->returnMsg('获取数据成功', $result, '200');
        }
    }
    
    /**
     * 执行登录
     */
    public function login() {
        $data['account'] = $this->isP('account', '请提交帐号');
        $data['password'] = \Core\Func\CoreFunc::generatePwd($data['account'] . $this->isP('password', '请提交密码'), 'PRIVATE_KEY');
        $checkAccount = $this->db('user')->where('user_account = :account AND user_password = :password AND user_status = 1')->find($data);
        if (empty($checkAccount)) {
            $this->error('帐号或者密码错误');
        }
        
        unset($checkAccount['user_password']);
        
        $sec = explode(' ', microtime());
        $mark = crypt(round(time() * $sec['0'], 0));
        
        $this->db('dologin')->insert(array('dologin_createtime' => time(), 'dologin_account' => $data['account'], 'dologin_mark' => $mark, 'dologin_session' => json_encode($checkAccount)));
        
        
        $this->returnMsg('登录成功', "http://login.pescms.com/?g=Admin&m=Login&a=doLogin&mark={$mark}", '200');
    }

}
