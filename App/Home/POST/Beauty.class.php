<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Home\POST;

class Beauty extends \Core\Controller\Controller {

    /**
     * 提交留言
     */
    public function contact() {
        $verify = md5(strtolower($this->isP('verify', $message)));
        if ($verify != $_SESSION['verify']) {
            $this->error("验证码不正确 :'(");
        }
        unset($_SESSION['verify']);
        $data['contact_title'] = $this->isP('title', '请填写主题内容');
        $data['contact_name'] = $this->isP('name', '请留下您的姓名');
        $data['contact_mail'] = $this->isP('mail', '请提交您的邮箱地址');
        $data['contact_content'] = $this->p('content');
        $data['contact_from'] = '肉丝网';

        if (!filter_var($data['contact_mail'], FILTER_VALIDATE_EMAIL)) {
            $this->error('请填写正确的邮箱格式，以便我们联系您 :)');
        }

        $result = $this->db('contact')->insert($data);
        if (empty($result)) {
            $this->error('提交内容失败');
        }
        $this->success('感谢您的反馈！您的建议是我们前进的动力 :)', '/');
    }

}
