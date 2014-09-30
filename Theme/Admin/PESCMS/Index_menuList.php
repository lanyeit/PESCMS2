
<header>
    <h2 class="main-title"><?php echo $GLOBALS['_LANG']['MENU'][$title]; ?></h2>
    <div class="main-add">
        <a href="javascript:;" class="blue-button" ><?php echo $GLOBALS['_LANG']['ADD']; ?></a>
    </div>
</header>

<div class="list-table">
    <table width="100%">
        <tr>
            <th><?php echo $GLOBALS['_LANG']['SORT']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['ID']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['CURRENT_NAME']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['LINK_PRARM']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['OPTION']; ?></th>
        </tr>
        <?php foreach ($menu as $topkey => $topValu) : ?>
            <tr>
                <td><input type="text" class="input-leng1" value="<?php echo $topValu['menu_listsort']; ?>" /></td>
                <td><?php echo $topValu['menu_id']; ?></td>
                <td><?php echo $GLOBALS['_LANG']['MENU'][$topValu['menu_name']]; ?></td>
                <td></td>
                <td>
                    <a href="" class="blue-button"><?php echo $GLOBALS['_LANG']['EDIT']; ?></a>
                    <a href="" class="blue-button"><?php echo $GLOBALS['_LANG']['DELETE']; ?></a>
                </td>
            </tr>
            <?php if (!empty($topValu['menu_child'])): ?>
                <?php foreach ($topValu['menu_child'] as $key => $value) : ?>
                    <tr>
                        <td><input type="text" class="input-leng1" value="<?php echo $value['menu_listsort']; ?>" /></td>
                        <td><?php echo $value['menu_id']; ?></td>
                        <td><?php echo $GLOBALS['_LANG']['MENU'][$value['menu_name']]; ?></td>
                        <td><?php echo $value['menu_url']; ?></td>
                        <td>
                            <a href="" class="blue-button"><?php echo $GLOBALS['_LANG']['EDIT']; ?></a>
                            <a href="<?php echo $label->url('Admin-Menu-action', array('id' => $value['menu_id'])); ?>" onclick="return del(this)" class="blue-button"><?php echo $GLOBALS['_LANG']['DELETE']; ?></a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php endif; ?>
        <?php endforeach; ?>
    </table>
</div>

<div class="btn_wrap">
    <div class="btn_wrap_pd">
        <button type="submit" class="blue-button"><?php echo $GLOBALS['_LANG']['SORT']; ?></button>
    </div>
</div>
