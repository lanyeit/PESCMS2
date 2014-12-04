
<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?php echo $title; ?></a></h2>
    <div class="main-add">
        <a href="<?= $label->url('Admin-User-action'); ?>" class="blue-button" ><?php echo $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<div class="list-table">
    <table width="100%">
        <tr>
            <th><?= $GLOBALS['_LANG']['COMMON']['ID']; ?></th>
            <th><?= $GLOBALS['_LANG']['USER']['USER_ACCOUNT']; ?></th>
            <th><?= $GLOBALS['_LANG']['USER']['USER_EMAIL']; ?></th>
            <th><?= $GLOBALS['_LANG']['USER']['USER_NAME']; ?></th>
            <th><?= $GLOBALS['_LANG']['USER']['USER_GROUP']; ?></th>
            <th><?= $GLOBALS['_LANG']['COMMON']['CREATE_TIME']; ?></th>
            <th><?= $GLOBALS['_LANG']['USER']['LAST_LOGIN']; ?></th>
            <th><?= $GLOBALS['_LANG']['COMMON']['STATUS']; ?></th>
            <th width="250px"><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
        </tr>
        <?php foreach ($list as $key => $value) : ?>
            <tr>
                <td><?= $value["user_id"]; ?></td>
                <td><?= $value["user_account"]; ?></td>
                <td><?= $value["user_mail"]; ?></td>
                <td><?= $value["user_name"]; ?></td>
                <td><?= $label->findGroup($value["user_group_id"]); ?></td>
                <td><?= empty($value["user_createtime"]) ? '' : date('Y-m-d H:i', $value["user_createtime"]); ?></td>
                <td><?= empty($value["user_last_login"]) ? '' : date('Y-m-d H:i', $value["user_last_login"]); ?></td>
                <td><?= $label->status($value["user_status"]); ?></td>
                <td>
                    <a href="<?= $label->url('Admin-User-action', array('id' => $value["user_id"])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                    <a href="<?= $label->url('Admin-User-action', array('id' => $value["user_id"])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
</div>
<div class="pagebar">
    <?= $page ?>
</div>