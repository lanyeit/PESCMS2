
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
                <th><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></th>
                <th><?= $GLOBALS['_LANG']['CONTENT']['TITLE']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['CREATETIME']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['STATUS']; ?></th>
                <th width="250px"><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php foreach ($list as $key => $value) : ?>
                <tr>
                    <td><input type="text" class="input-leng1" name="id[<?= $value["{$fieldPrefix}id"]; ?>]" value="<?= $value["{$fieldPrefix}listsort"]; ?>" /></td>
                    <td><?= $value["{$fieldPrefix}title"]; ?></td>
                    <td><?= date('Y-m-d H:i', $value["{$fieldPrefix}createtime"]); ?></td>
                    <td><?= $label->status($value["{$fieldPrefix}status"]); ?></td>
                    <td>
                        <a href="<?= $label->url('Admin-' . MODULE . '-action', array('id' => $value["{$fieldPrefix}id"])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                        <a href="<?= $label->url('Admin-' . MODULE . '-action', array('id' => $value["{$fieldPrefix}id"])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>
    <div class="pagebar">
        <?=$page?>
    </div>
    <div class="btn_wrap">
        <div class="btn_wrap_pd">
            <button type="submit" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></button>
        </div>
    </div>
</form>