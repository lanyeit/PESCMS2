<?php

/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace App\Admin\GET;

class Index extends \App\Admin\Common {

    public function index() {
        $this->meun();
        $this->display();
    }

    /**
     * 生成后台菜单
     */
    private function meun() {
        $result = $this->db('menu m')->join("(SELECT id AS top_id, `name` AS top_name, `pid` AS top_pid FROM `pes_menu` where pid = 0) AS parent ON parent.top_id = m.pid")->where('top_pid = 0')->order('top_id asc, id asc')->select();
        foreach ($result as $key => $value) {
            $meun[$value['top_name']][] = $value;
        }

        $this->assign('meun', $meun);
    }

    /**
     * 获取系统信息
     */
    public function systemInfo() {
        if (false != ($sendmail_path = ini_get('sendmail_path'))) {
            $sysMail = 'Unix Sendmail ( Path: ' . $sendmail_path . ')';
        } elseif (false != ($SMTP = ini_get('SMTP'))) {
            $sysMail = 'SMTP ( Server: ' . $SMTP . ')';
        } else {
            $sysMail = 'Disabled';
        }
        $db = $this->db('option');
        $version = $db->where('id = 13')->find();
        $mysqlVersion = $db->query("select version() as version");
        $sysinfo = array(
            'wind_version' => $version['value'],
            'php_version' => PHP_VERSION,
            'server_software' => $_SERVER['SERVER_SOFTWARE'],
            'mysql_version' => $mysqlVersion[0]['version'],
            'max_upload' => ini_get('file_uploads') ? ini_get('upload_max_filesize') : 'Disabled',
            'max_excute_time' => intval(ini_get('max_execution_time')) . ' seconds',
            'sys_mail' => $sysMail);

        $this->assign('sysinfo', $sysinfo);
        $this->layout();
    }

}
