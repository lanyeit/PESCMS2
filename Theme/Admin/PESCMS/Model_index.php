
<header>
    <h2 class="main-title"><?php echo $GLOBALS['_LANG']['MENU_LIST'][$title]; ?></h2>
    <div class="main-add">
        <a href="<?php echo $label->url('Admin-Model-action'); ?>" class="blue-button" ><?php echo $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<div class="list-table">
    <table width="100%">
        <tr>
            <th><?php echo $GLOBALS['_LANG']['COMMON']['ID']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['MODEL']['MODEL_NAME']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['COMMON']['NAME']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['COMMON']['STATUS']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['MODEL']['IS_SEARCH']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['MODEL']['MODEL_ATTR']; ?></th>
            <th width="250px"><?php echo $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
        </tr>
        <?php foreach ($list as $key => $value) : ?>
            <tr>
                <td><?php echo $value['model_id']; ?></td>
                <td><?php echo $value['model_name']; ?></td>
                <td><?php echo $GLOBALS['_LANG']['MENU_LIST'][$value['lang_key']]; ?></td>
                <td><?php echo $label->status($value['status']); ?></td>
                <td><?php echo $label->isSearch($value['is_search']); ?></td>
                <td><?php echo $label->modelAttr($value['model_attr']); ?></td>
                <td>
                    <a href="<?php echo $label->url('Admin-Model-fieldList', array('id' => $value['model_id'])); ?>" class="blue-button"><?php echo $GLOBALS['_LANG']['MODEL']['FIELD_MANAGE']; ?></a>
                    <a href="<?php echo $label->url('Admin-Model-action', array('id' => $value['model_id'])); ?>" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                    <a href="<?php echo $label->url('Admin-Model-action', array('id' => $value['model_id'])); ?>" onclick="return del(this)" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
</div>