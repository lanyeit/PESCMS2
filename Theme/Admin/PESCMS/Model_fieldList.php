
<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $title; ?></a></h2>
    <div class="main-add">
        <a href="<?= $label->url('Admin-Model-fieldAction', array('model' => $modelId)); ?>" class="blue-button" ><?= $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<form action="<?= $label->url('Admin-Field-listsort'); ?>" method="POST">
    <input type="hidden" name="method" value="PUT" />
    <div class="list-table">
        <table width="100%">
            <tr>
                <th><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['ID']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['NAME']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['DISPLAY_NAME']; ?></th>
                <th><?= $GLOBALS['_LANG']['MODEL']['FIELD_TYPE']; ?></th>
                <th><?= $GLOBALS['_LANG']['MODEL']['FIELD_REQUIRE']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['STATUS']; ?></th>
                <th width="250px"><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php foreach ($list as $key => $value) : ?>
                <tr>
                    <td><input type="text" class="input-leng1" name="id[<?= $value['field_id']; ?>]" value="<?= $value['field_listsort']; ?>" /></td>
                    <td><?= $value['field_id']; ?></td>
                    <td><?= $value['field_name']; ?></td>
                    <td><?= $value['display_name']; ?></td>
                    <td><?= $label->fieldType($value['field_type']); ?></td>
                    <td><?= $label->isQequired($value['field_required']); ?></td>
                    <td><?= $label->status($value['field_status']); ?></td>
                    <td>
                        <a href="<?= $label->url('Admin-Model-fieldAction', array('id' => $value['field_id'], 'model' => $modelId)); ?>" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                        <a href="<?= $label->url('Admin-Model-fieldAction', array('id' => $value['field_id'])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>
    <div class="btn_wrap">
        <div class="btn_wrap_pd">
            <button type="submit" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></button>
        </div>
    </div>
</form>