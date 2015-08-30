<?php

/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\GET;

class Login extends \App\Admin\Common {

    public function __init() {
        parent::__init();
        $this->assign('sitetile', \Model\Option::findOption('sitetitle')['value']);
        $this->assign('signup', \Model\Option::findOption('signup')['value']);
    }

    public function index() {
        $login = $this->checkLogin();
        if ($login) {
            $this->jump($this->url(GROUP . '-Index-index'));
        }
        $this->display();
    }

    /**
     * 注册帐号
     */
    public function signup() {
        $this->display();
    }
    
    public function dologin(){
        $mark = $this->isG('mark', '非法请求');
        $check = \Model\Content::findContent('dologin', $mark, 'dologin_mark');
        if(empty($check)){
            $this->error('不存在的记录');
        }
        if($check['dologin_createtime'] <= time() - 30 && $check['dologin_status'] == '0'){
            $this->error('登录超时，请重新运行软件');
        }
        
        $this->db('dologin')->where('dologin_id = :dologin_id')->update(array('dologin_status' => '1', 'noset' => array('dologin_id' => $check['dologin_id'])));
        
        $_SESSION['admin'] = json_decode($check['dologin_session'], true); 
        
        $this->success('登录成功!', $this->url(GROUP . '-Index-index'));
        
    }

}
