
<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $title; ?></a></h2>
    <div class="main-add">
        <a href="<?= $label->url('Admin-' . MODULE . '-action'); ?>" class="blue-button" ><?= $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<form action="<?= $label->url('Admin-' . MODULE . '-listsort'); ?>" method="POST">
    <input type="hidden" name="method" value="PUT" />
    <div class="list-table">
        <table width="100%">
            <tr>
                <th><?= $GLOBALS['_LANG']['CONTENT']['TITLE']; ?></th>
                <th>联系人</th>
                <th>邮箱地址</th>
                <th width="50%">详细内容</th>
                <th width="10%"><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php foreach ($list as $key => $value) : ?>
                <tr>
                    <td>[<font color="#E7790E"><?= $value["{$fieldPrefix}from"]; ?></font>]<?= $value["{$fieldPrefix}title"]; ?></td>
                    <td><?= $value["{$fieldPrefix}name"]; ?></td>
                    <td><?= $value["{$fieldPrefix}mail"]; ?></td>
                    <td><?= html_entity_decode($value["{$fieldPrefix}content"]); ?></td>
                    <td>
                        <a href="<?= $label->url('Admin-' . MODULE . '-action', array('id' => $value["{$fieldPrefix}id"])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>
    <div class="pagebar">
        <?= $page ?>
    </div>
    <div class="btn_wrap">
        <div class="btn_wrap_pd">
            <button type="submit" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></button>
        </div>
    </div>
</form>