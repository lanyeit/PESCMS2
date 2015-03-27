<h2 class="main-title">
    <a href="<?= $label->url('Admin-Html-index') ?>" <?= ACTION == 'index' ? 'class="current"' : '' ?>><?= $GLOBALS['_LANG']['HTML']['CREATE_INDEX']; ?></a>
    <a href="<?= $label->url('Admin-Html-listAction') ?>" <?= ACTION == 'listAction' ? 'class="current"' : '' ?>><?= $GLOBALS['_LANG']['HTML']['CREATE_LIST']; ?></a>
    <a href="<?= $label->url('Admin-Html-contentAction') ?>" <?= ACTION == 'contentAction' ? 'class="current"' : '' ?>><?= $GLOBALS['_LANG']['HTML']['CREATE_CONTENT']; ?></a>
    <a href="<?= $label->url('Admin-Html-updateUrl') ?>" <?= ACTION == 'updateUrl' ? 'class="current"' : '' ?>><?= $GLOBALS['_LANG']['HTML']['UPDATE_URL']; ?></a>
</h2>