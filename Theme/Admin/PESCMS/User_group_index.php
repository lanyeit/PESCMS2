
<header>
    <h2 class="main-title"><?php echo $title; ?></h2>
    <div class="main-add">
        <a href="<?= $label->url('Admin-User_group-action'); ?>" class="blue-button" ><?php echo $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>

<div class="list-table">
    <table width="100%">
        <tr>
            <th><?= $GLOBALS['_LANG']['USER']['GROUP_NAME']; ?></th>
            <th><?= $GLOBALS['_LANG']['COMMON']['CREATE_TIME']; ?></th>
            <th width="250px"><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
        </tr>
        <?php foreach ($list as $key => $value) : ?>
            <tr>
                <td><?= $value["user_group_name"]; ?></td>
                <td><?= date('Y-m-d H:i', $value["user_group_createtime"]); ?></td>
                <td>
                    <a href="<?= $label->url('Admin-User_group-action', array('id' => $value["user_group_id"])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                    <a href="<?= $label->url('Admin-User-groupNodeAction', array('id' => $value["user_group_id"])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['USER']['GROUP_NODE_LIST']; ?></a>
                    <a href="<?= $label->url('Admin-User_group-action', array('id' => $value["user_group_id"])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
</div>
<div class="pagebar">
    <?= $page ?>
</div>