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

class Login extends \App\Admin\Common {

    public function dologin() {
        $data['account'] = $this->isP('account', $GLOBALS['_LANG']['COMMON']['LOGIN']['ACCOUNT_LOST']);
        $data['password'] = $this->generatePwd($this->isP('password', $GLOBALS['_LANG']['LOGIN']['PASSWORD_LOST']), 'PRIVATE_KEY');
        $checkAccount = $this->db('user')->where('account = :account and password = :password')->find($data);
        if(empty($checkAccount)){
            $this->error($GLOBALS['_LANG']['LOGIN']['LOGIN_ERROR']);
        }
        $this->setLogin($checkAccount);
        $this->success($GLOBALS['_LANG']['LOGIN']['LOGIN_SUCCESS'], $this->url('Admin-Index-index'));
        
    }
    
    /**
     * 设置登录信息
     * @param type $content 帐号内容
     */
    private function setLogin($content){
        $_SESSION['admin'] = $content;
    }

}
