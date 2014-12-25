
<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $title; ?></a></h2>
    <div class="main-add">
        <a href="<?= $label->url('Admin-Setting-slideshowAction'); ?>" class="blue-button" ><?= $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>

<div class="list-table">
    <table width="100%">
        <tr>
            <th><?= $GLOBALS['_LANG']['COMMON']['ID']; ?></th>
            <th><?= $GLOBALS['_LANG']['COMMON']['NAME']; ?></th>
            <th width="250px"><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
        </tr>
        <?php foreach ($list as $key => $value) : ?>
            <tr>
                <td><?= $value["slideshow_type_id"]; ?></td>
                <td><?= $value["slideshow_type_name"] ?></td>
                <td>
                    <a href="<?= $label->url('Admin-Setting-slideshowAction', array('id' => $value["slideshow_type_id"])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                    <a href="<?= $label->url('Admin-Slideshow-index', array('type_id' => $value["slideshow_type_id"])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['SETTING']['IMG_MANAGE']; ?></a>
                    <a href="<?= $label->url('Admin-slideshow_type-action', array('id' => $value["slideshow_type_id"])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
</div>
<div class="pagebar">
    <?= $page ?>
</div>