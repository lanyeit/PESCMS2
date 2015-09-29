<form action="/" method="get">
    <div class="am-input-group am-margin-bottom">

        <input type="hidden" name="m" value="Process">
        <input type="hidden" name="a" value="index">
        <input type="hidden" name="su"
               value="<?= is_numeric($_GET['su']) ? (int)$_GET['su'] : ''; ?>">
        <input type="hidden" name="p" value="<?= (int)$_GET['p']; ?>">
        <input type="hidden" name="u" value="<?= (int)$_GET['u']; ?>">
        <input type="text" class="am-form-field" name="k" value="<?= htmlspecialchars($_GET['k']); ?>">
        <span class="am-input-group-btn">
            <button class="am-btn am-btn-default" type="submit"><span class="am-icon-search"></span></button>
        </span>
    </div>
</form>

<div class="am-panel am-panel-default">
    <div class="am-panel-hd">状态</div>
    <ul class="am-list am-list-static am-nav">
        <li class="am-padding-0 am-margin-top-0">
            <a href="<?= $label->url('Process-index', array('su' => '', 'p' => (int)$_GET['p'] ?: '0', 'u' => (int)$_GET['u'] ?: '0', 'k' => (int)$_GET['k'])); ?>"
               class=" am-link-muted">
                <span class="am-badge am-fr am-badge"><?= $statusTotal; ?></span>
                所有
            </a>
        </li>
        <?php foreach ($status as $key => $value) : ?>
            <li class="am-padding-0 am-margin-top-0 <?= $_GET['su'] == $key && is_numeric($_GET['su']) ? 'am-active' : ''; ?>">
                <a href="<?= $label->url('Process-index', array('su' => $key, 'p' => (int)$_GET['p'] ?: '0', 'u' => (int)$_GET['u'] ?: '0', 'k' => (int)$_GET['k'])); ?>"
                   class="am-link-muted am-padding-xs">
                    <span
                        class="am-badge am-fr am-badge-<?= $className[$key] ?>"><?= $statusList[$key]['task_num'] ?: 0; ?></span>
                    <?= $value; ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>

<div class="am-panel am-panel-default">
    <div class="am-panel-hd">项目进程</div>
    <ul class="am-list am-list-static am-nav">
        <li class="am-padding-0 am-margin-top-0">
            <a href="<?= $label->url('Process-index', array('su' => is_numeric($_GET['su']) ? (int)$_GET['su'] : '', 'p' => '', 'u' => (int)$_GET['u'] ?: '0', 'k' => (int)$_GET['k'])); ?>"
               class=" am-link-muted">
                <span class="am-badge am-fr am-badge"><?= $projectTotal; ?></span>
                所有
            </a>
        </li>
        <?php foreach ($project as $key => $value) : ?>
            <li class="am-padding-0 am-margin-top-0 <?= $_GET['p'] == $value['project_id'] ? 'am-active' : ''; ?>">
                <a href="<?= $label->url('Process-index', array('su' => is_numeric($_GET['su']) ? (int)$_GET['su'] : '', 'p' => (int)$value['project_id'], 'u' => (int)$_GET['u'] ?: '0', 'k' =>(int) $_GET['k'])); ?>"
                   class="am-link-muted">
                    <span class="am-badge am-badge am-fr"><?= $value['task_num']; ?></span>
                    <?= $value['project_title']; ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>

<div class="am-panel am-panel-default">
    <div class="am-panel-hd">英雄进程</div>
    <ul class="am-list am-list-static am-nav ">
        <li class="am-padding-0 am-margin-top-0">
            <a href="<?= $label->url('Process-index', array('su' => is_numeric($_GET['su']) ? (int)$_GET['su'] : '', 'p' => (int)$_GET['p'], 'u' => '', 'k' => (int)$_GET['k'])); ?>"
               class=" am-link-muted">
                <span class="am-badge am-fr am-badge-success"><?= $heroTotal; ?></span>
                所有
            </a>
        </li>
        <?php foreach ($hero as $key => $value) : ?>
            <li class="am-padding-0 am-margin-top-0 <?= $_GET['u'] == $value['user_id'] ? 'am-active' : ''; ?>">
                <a href="<?= $label->url('Process-index', array('su' => is_numeric($_GET['su']) ? (int)$_GET['su'] : '', 'p' => (int)$_GET['p'] ?: '0', 'u' => (int)$value['user_id'], 'k' => (int)$_GET['k'])); ?>"
                   class=" am-link-muted">
                    <span class="am-badge am-badge-success am-fr"><?= $value['task_num']; ?></span>
                    <?= $value['user_name']; ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>