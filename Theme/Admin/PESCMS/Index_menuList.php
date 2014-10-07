
<header>
    <h2 class="main-title"><?php echo $GLOBALS['_LANG']['MENU_LIST'][$title]; ?></h2>
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
                <th><?php echo $GLOBALS['_LANG']['COMMON']['CURRENT_NAME']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['MENU']['LINK_PRARM']; ?></th>
                <th><?php echo $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php foreach ($menu as $topkey => $topValu) : ?>
                <tr>
                    <td><input type="text" class="input-leng1" name="id[<?php echo $topValu['menu_id']; ?>]" value="<?php echo $topValu['menu_listsort']; ?>" /></td>
                    <td><?php echo $topValu['menu_id']; ?></td>
                    <td><?php echo $GLOBALS['_LANG']['MENU_LIST'][$topValu['menu_name']]; ?></td>
                    <td></td>
                    <td>
                        <a href="<?php echo $label->url('Admin-Index-menuAction', array('id' => $topValu['menu_id'])); ?>" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                        <a href="<?php echo $label->url('Admin-Menu-action', array('id' => $topValu['menu_id'])); ?>" onclick="return del(this)" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                    </td>
                </tr>
                <?php if (!empty($topValu['menu_child'])): ?>
                    <?php foreach ($topValu['menu_child'] as $key => $value) : ?>
                        <tr>
                            <td><input type="text" class="input-leng1" name="id[<?php echo $value['menu_id']; ?>]" value="<?php echo $value['menu_listsort']; ?>" /></td>
                            <td><?php echo $value['menu_id']; ?></td>
                            <td><?php echo $GLOBALS['_LANG']['MENU_LIST'][$value['menu_name']]; ?></td>
                            <td><?php echo $value['menu_url']; ?></td>
                            <td>
                                <a href="<?php echo $label->url('Admin-Index-menuAction', array('id' => $value['menu_id'])); ?>" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                                <a href="<?php echo $label->url('Admin-Menu-action', array('id' => $value['menu_id'])); ?>" onclick="return del(this)" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            <?php endforeach; ?>
        </table>
    </div>

    <div class="btn_wrap">
        <div class="btn_wrap_pd">
            <button type="submit" class="blue-button"><?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?></button>
        </div>
    </div>
</form>