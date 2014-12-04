
<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?php echo $GLOBALS['_LANG']['MENU_LIST'][$title]; ?></a></h2>
    <div class="main-add">
        <a href="<?php echo $label->url('Admin-Category-action'); ?>" class="blue-button" ><?php echo $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<div class="list-table">
    <table width="100%">
        <tr>
            <th><?php echo $GLOBALS['_LANG']['COMMON']['ID']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_NAME']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['MODEL']['MODEL_NAME']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_NAV']; ?></th>
            <th><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_HTML']; ?></th>
            <th width="250px"><?php echo $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
        </tr>
        <?php if ($tree): ?>
            <?= $tree ?>
        <?php else: ?>
        <?php endif; ?>
    </table>
</div>