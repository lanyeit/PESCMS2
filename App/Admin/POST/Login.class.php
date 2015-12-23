<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\POST;

class Login extends \App\Admin\Common {

    public function index(){
        $data['user_account'] = $data['user_mail'] = $this->isP('account', '请提交账号信息');
        $data['user_password'] = \Core\Func\CoreFunc::generatePwd($this->isP('passwd', '请提交密码'));
        $login = $this->db('user')->where('(user_account = :user_account OR user_mail = :user_mail ) AND user_password = :user_password ')->find($data);

        if(empty($login)){
            $this->error('帐号或者密码错误');
        }
        $this->setLogin($login);
        $this->success('登录成功', $this->url(GROUP . '-Index-index'));
    }

    /**
     * 注册帐号
     */
    public function signup() {
    }

    /**
     * 设置登录信息
     * @param type $content 帐号内容
     */
    private function setLogin($content) {
        $_SESSION[GROUP] = $content;
    }

}
