
<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $title; ?></a></h2>
    <div class="main-add">
        <a href="<?= $label->url('Admin-' . MODULE . '-action', array('type_id' => $_GET['type_id'])); ?>" class="blue-button" ><?= $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<form action="<?= $label->url('Admin-' . MODULE . '-listsort'); ?>" method="POST">
    <input type="hidden" name="method" value="PUT" />
    <div class="list-table">
        <table width="100%">
            <tr>
                <th><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></th>
                <th><?= $GLOBALS['_LANG']['SLIDESHOW']['PIC_NAME']; ?></th>
                <th><?= $GLOBALS['_LANG']['SLIDESHOW']['PREVIEW']; ?></th>
                <th><?= $GLOBALS['_LANG']['SLIDESHOW']['LINK']; ?></th>
                <th width="250px"><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php foreach ($list as $key => $value) : ?>
                <tr>
                    <td><input type="text" class="input-leng1" name="id[<?= $value["slideshow_id"]; ?>]" value="<?= $value["slideshow_listsort"]; ?>" /></td>
                    <td><?= $value["slideshow_name"]; ?></td>
                    <td><img src="<?= $value["slideshow_pic"]; ?>" width="250" /></td>
                    <td><a href="<?= $value["slideshow_link"]; ?>" target="_blank" ><?= $GLOBALS['_LANG']['SLIDESHOW']['VIEW']; ?></a></td>
                    <td>
                        <a href="<?= $label->url('Admin-' . MODULE . '-action', array('id' => $value["slideshow_id"], 'type_id' => $value['slideshow_type_id'])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                        <a href="<?= $label->url('Admin-' . MODULE . '-action', array('id' => $value["slideshow_id"])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
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