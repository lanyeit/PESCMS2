<?php $this->header(); ?>
<header class="am-topbar admin-header am-header-fixed">
    <div class="am-topbar-brand">
        <strong>PESCMS Login</strong> <small></small>
    </div>
</header>
<div class="am-cf admin-main">
    <!-- sidebar start -->
    <div class="admin-sidebar am-offcanvas" id="admin-offcanvas">
        <div class="am-scrollable-vertical admin-offcanvas-bar" style="overflow-y: auto;">
            <ul class="am-list admin-sidebar-list">
                <?php foreach ($menu as $topkey => $topValu) : ?>
                    <li class="admin-parent">
                        <a class="am-cf" data-am-collapse="{target: '#<?= $topValu['menu_id'] ?>'}"><span class="<?= $topValu['menu_icon'] ?>"></span> <?= $topValu['menu_name']; ?><span class="am-icon-angle-right am-fr am-margin-right"></span></a>
                        <?php if (!empty($topValu['menu_child'])): ?>
                            <ul class="am-list am-collapse admin-sidebar-sub" id="<?= $topValu['menu_id'] ?>">
                                <?php foreach ($topValu['menu_child'] as $key => $value) : ?>
                                    <li><a href="<?= $label->url($value['menu_url']); ?>" class="am-cf menu-link"><span class="<?= $value['menu_icon'] ?>"></span> <?= $value['menu_name']; ?></a></li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
                <li><a href="<?= $label->url(GROUP . '-Index-logout'); ?>"><span class="am-icon-sign-out"></span> 注销</a></li>
            </ul>

        </div>
    </div>
    <!-- sidebar end -->
    <!-- content start -->
    <div class="admin-content" style="padding-top:2px;">
        <iframe id="iframe_default" src="" style="width: 100%; height: 100%;" data-id="default" frameborder="0" scrolling="yes"></iframe>
    </div>
</div>
<a class="am-icon-btn am-icon-th-list am-show-sm-only admin-menu" data-am-offcanvas="{target: '#admin-offcanvas'}"></a>
<?php $this->footer(); ?>