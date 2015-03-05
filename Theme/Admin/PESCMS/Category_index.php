
<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $GLOBALS['_LANG']['MENU_LIST'][$title]; ?></a></h2>
    <div class="main-add">
        <a href="<?= $label->url('Admin-Category-action'); ?>" class="blue-button" ><?= $GLOBALS['_LANG']['COMMON']['ADD']; ?></a>
    </div>
</header>
<div class="list-table">
    <form action="<?= $label->url('Admin-' . MODULE . '-listsort'); ?>" method="POST">
        <input type="hidden" name="method" value="PUT" />
        <table width="100%">
            <tr>
                <th><?= $GLOBALS['_LANG']['COMMON']['ID']; ?></th>
                <th><?= $GLOBALS['_LANG']['CATEGORY']['CATEGORY_NAME']; ?></th>
                <th><?= $GLOBALS['_LANG']['MODEL']['MODEL_NAME']; ?></th>
                <th><?= $GLOBALS['_LANG']['CATEGORY']['CATEGORY_NAV']; ?></th>
                <th><?= $GLOBALS['_LANG']['CATEGORY']['CATEGORY_HTML']; ?></th>
                <th width="250px"><?= $GLOBALS['_LANG']['COMMON']['OPTION']; ?></th>
            </tr>
            <?php if ($tree): ?>
                <?= $tree ?>
            <?php else: ?>
            <?php endif; ?>
        </table>
        <div class="btn_wrap">
            <div class="btn_wrap_pd">
                <button type="submit" class="blue-button"><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></button>
            </div>
        </div>
    </form>
</div>