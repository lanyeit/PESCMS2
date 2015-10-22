<div class="am-cf am-container am-padding">
    <div class="pes-sidebar am-offcanvas am-padding-left  am-padding-right-lg" id="admin-offcanvas">
        <div class="am-offcanvas-bar admin-offcanvas-bar">
            <ul class="am-nav pes-ul-sidebar">
                <li class="am-nav-header"><a href="<?= $sidebarTopCat['category_url'] ?>"><?= $sidebarTopCat['category_name']; ?></a></li>
                <?php foreach ($sidebarCat as $key => $value) : ?>
                    <li class="<?= $value['category_id'] == $catid ? 'am-active' : '' ?>"><a href="<?= $value['category_url']; ?>"><?= $value['category_name']; ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>

    </div>
    <div class="pes-content">
        <ul class="am-list">
            <?php foreach($list as $key => $value): ?>
            <li>
                <a href="<?= $label->url('Article-list', array('id' => $catid, 'type' => $value["{$model}_type"])); ?>" class="am-fl am-text-danger">[<?= $label->getFieldOptionToMatch('150', $value["{$model}_type"]); ?>]</a><a href="<?= $value["{$model}_url"]; ?>"><?= $value["{$model}_title"]; ?></a>
            </li>
            <?php endforeach; ?>
        </ul>

    </div>
</div>