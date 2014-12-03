<h2 class="main-title">
    <a href="<?= $label->url('Admin-Setting-action') ?>" <?= ACTION == 'action' ? 'class="current"' : '' ?>><?= $GLOBALS['_LANG']['SETTING']['SYSTEM_SETTING']; ?></a>
    <a href="<?= $label->url('Admin-Setting-expandAction') ?>" <?= ACTION == 'expandAction' ? 'class="current"' : '' ?>><?= $GLOBALS['_LANG']['SETTING']['EXPAND']; ?></a>
    <a href="<?= $label->url('Admin-Setting-uploadFormAction') ?>" <?= ACTION == 'uploadFormAction' ? 'class="current"' : '' ?>><?= $GLOBALS['_LANG']['SETTING']['UPLOADFORM']; ?></a>
    <a href="<?= $label->url('Admin-Setting-urlModelAction') ?>" <?= ACTION == 'urlModelAction' ? 'class="current"' : '' ?>><?= $GLOBALS['_LANG']['SETTING']['URLMODEL']; ?></a>
</h2>