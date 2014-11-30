<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\PUT;

class Setting extends \App\Admin\Common {

    public function action() {
        $data['sitestatus'] = is_numeric($_POST['sitestatus']) ? $_POST['sitestatus'] : $GLOBALS['_LANG']['SETTING']['SELECT_SITE_STATUS'];
        if ($data['sitestatus'] == '0') {
            $data['closeReason'] = $this->isP('closeReason', $GLOBALS['_LANG']['SETTING']['ENTER_CLOSE_REASON']);
        }
        $data['sitetitle'] = $this->isP('sitetitle', $GLOBALS['_LANG']['SETTING']['ENTER_SITE_TITLE']);
        $data['siteurl'] = $this->isP('siteurl', $GLOBALS['_LANG']['SETTING']['ENTER_SITE_URL']);
        $data['logo'] = $this->isP('logo', $GLOBALS['_LANG']['SETTING']['UPLOAD_SITE_LOGO']);
        $data['seo_keyword'] = $this->p('seo_keyword');
        $data['seo_description'] = $this->p('seo_description');
        //因为提交的会有JS代码，所以不进行转义
        $data['footerCode'] = $this->p('footerCode', FALSE);

        foreach ($data as $key => $value) {
            $this->db('option')->where("option_name = :option_name")->update(array('value' => $value, 'noset' => array('option_name' => $key)));
        }
        $this->success($GLOBALS['_LANG']['SETTING']['UPDATE_SITE_SETTING'], $this->url('Admin-Setting-action'));
    }

}
