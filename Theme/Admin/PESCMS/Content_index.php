
<header>
    <h2 class="main-title"><?php echo $title; ?></h2>
    <div class="main-add">
        <a href="<?php echo $label->url('Admin-' . MODULE . '-action'); ?>" class="blue-button" ><?php echo $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<form action="<?php echo $label->url('Admin-' . MODULE . '-listsort'); ?>" method="POST">
    <input type="hidden" name="method" value="PUT" />
    <div class="list-table">
        <table width="100%">
            <tr>
                <th><?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['CONTENT']['TITLE']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['COMMON']['CREATETIME']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['COMMON']['STATUS']; ?></th>
                <th width="250px"><?php echo $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php foreach ($list as $key => $value) : ?>
                <tr>
                    <td><input type="text" class="input-leng1" name="id[<?php echo $value["{$fieldPrefix}id"]; ?>]" value="<?php echo $value["{$fieldPrefix}listsort"]; ?>" /></td>
                    <td><?php echo $value["{$fieldPrefix}title"]; ?></td>
                    <td><?php echo date('Y-m-d H:i', $value["{$fieldPrefix}createtime"]); ?></td>
                    <td><?php echo $label->status($value["{$fieldPrefix}status"]); ?></td>
                    <td>
                        <a href="<?php echo $label->url('Admin-' . MODULE . '-action', array('id' => $value["{$fieldPrefix}id"])); ?>" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                        <a href="<?php echo $label->url('Admin-' . MODULE . '-action', array('id' => $value["{$fieldPrefix}id"])); ?>" onclick="return del(this)" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
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
            <button type="submit" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?></button>
        </div>
    </div>
</form>