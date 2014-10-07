
<header>
    <h2 class="main-title"><?php echo $title; ?></h2>
    <div class="main-add">
        <a href="<?php echo $label->url('Admin-Index-menuAction'); ?>" class="blue-button" ><?php echo $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<form action="<?php echo $label->url('Admin-Menu-listsort'); ?>" method="POST">
    <input type="hidden" name="method" value="PUT" />
    <div class="list-table">
        <table width="100%">
            <tr>
                <th><?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['COMMON']['ID']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['COMMON']['NAME']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['MODEL']['DISPLAY_NAME']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['MODEL']['FIELD_TYPE']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['COMMON']['STATUS']; ?></th>
                <th width="250px"><?php echo $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php foreach ($list as $key => $value) : ?>
                <tr>
                    <td><input type="text" class="input-leng1" name="id[<?php echo $value['field_id']; ?>]" value="<?php echo $value['field_listsort']; ?>" /></td>
                    <td><?php echo $value['field_id']; ?></td>
                    <td><?php echo $value['field_name']; ?></td>
                    <td><?php echo $value['display_name']; ?></td>
                    <td></td>
                    <td><?php echo $label->status($value['status']); ?></td>
                    <td>
                        <a href="<?php echo $label->url('Admin-Model-fieldList', array('id' => $value['id'])); ?>" class="blue-button"><?php echo $GLOBALS['_LANG']['MODEL']['FIELD_MANAGE']; ?></a>
                        <a href="<?php echo $label->url('Admin-Model-action', array('id' => $value['id'])); ?>" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                        <a href="<?php echo $label->url('Admin-Model-action', array('id' => $value['id'])); ?>" onclick="return del(this)" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>
    <div class="btn_wrap">
        <div class="btn_wrap_pd">
            <button type="submit" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?></button>
        </div>
    </div>
</form>