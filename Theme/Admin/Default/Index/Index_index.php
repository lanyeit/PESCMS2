<?php $this->header(); ?>
<header class="am-topbar admin-header am-header-fixed">
    <div class="am-topbar-brand">
        <strong>PESCMS</strong> <small></small>
    </div>
    <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
        <li>
            <a href="javascript:;">
                <span class="am-icon-street-view"></span> <?= $_SESSION['admin']['user_name']; ?>, 您好
            </a>
        </li>
        <li>
            <a href="javascript:;" class="sidebar-control">
                <span class="am-icon-expand"></span> 隐藏侧栏
            </a>
        </li>
    </ul>
    <script>
        $(function () {
            $('.sidebar-control').on('click', function () {
                if ($('.am-offcanvas-bar').hasClass("admin-offcanvas-bar") == true) {
                    $(this).html('<span class="am-icon-compress"></span> 显示侧栏')
                    $('.am-offcanvas-bar').removeClass("admin-offcanvas-bar")
                } else {
                    $(this).html('<span class="am-icon-expand"></span> 隐藏侧栏')
                    $('.am-offcanvas-bar').addClass("admin-offcanvas-bar")
                }
            });
        });
    </script>
</header>
<div class="am-cf admin-main">
    <!-- sidebar start -->
    <div class="admin-sidebar am-offcanvas" id="admin-offcanvas">
        <div class="am-scrollable-vertical am-offcanvas-bar admin-offcanvas-bar" style="overflow-y: auto;">
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