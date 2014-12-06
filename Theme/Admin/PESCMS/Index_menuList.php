
<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $GLOBALS['_LANG']['MENU_LIST'][$title]; ?></a></h2>
    <div class="main-add">
        <a href="<?= $label->url('Admin-Index-menuAction'); ?>" class="blue-button" ><?= $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<form action="<?= $label->url('Admin-Menu-listsort'); ?>" method="POST">
    <input type="hidden" name="method" value="PUT" />
    <div class="list-table">
        <table width="100%">
            <tr>
                <th><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['ID']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['CURRENT_NAME']; ?></th>
                <th><?= $GLOBALS['_LANG']['MENU']['LINK_PRARM']; ?></th>
                <th><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php foreach ($menu as $topkey => $topValu) : ?>
                <tr>
                    <td><input type="text" class="input-leng1" name="id[<?= $topValu['menu_id']; ?>]" value="<?= $topValu['menu_listsort']; ?>" /></td>
                    <td><?= $topValu['menu_id']; ?></td>
                    <td><?= $GLOBALS['_LANG']['MENU_LIST'][$topValu['menu_name']]; ?></td>
                    <td></td>
                    <td>
                        <a href="<?= $label->url('Admin-Index-menuAction', array('id' => $topValu['menu_id'])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                        <a href="<?= $label->url('Admin-Menu-action', array('id' => $topValu['menu_id'])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                    </td>
                </tr>
                <?php if (!empty($topValu['menu_child'])): ?>
                    <?php foreach ($topValu['menu_child'] as $key => $value) : ?>
                        <tr>
                            <td><input type="text" class="input-leng1" name="id[<?= $value['menu_id']; ?>]" value="<?= $value['menu_listsort']; ?>" /></td>
                            <td><?= $value['menu_id']; ?></td>
                            <td><?= $GLOBALS['_LANG']['MENU_LIST'][$value['menu_name']]; ?></td>
                            <td><?= $value['menu_url']; ?></td>
                            <td>
                                <a href="<?= $label->url('Admin-Index-menuAction', array('id' => $value['menu_id'])); ?>" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['EDIT']; ?></a>
                                <a href="<?= $label->url('Admin-Menu-action', array('id' => $value['menu_id'])); ?>" onclick="return del(this)" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            <?php endforeach; ?>
        </table>
    </div>

    <div class="btn_wrap">
        <div class="btn_wrap_pd">
            <button type="submit" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></button>
        </div>
    </div>
</form>