<?php include THEME_PATH . '/header.php'; ?>
<?php include THEME_PATH . '/Topbar.php'; ?>
    <div class="am-cf am-container am-padding">
        <div class="pes-sidebar am-offcanvas am-padding-left  am-padding-right-lg" id="admin-offcanvas">
            <div class="am-offcanvas-bar admin-offcanvas-bar">
                <ul class="am-nav pes-ul-sidebar">
                    <li class="am-nav-header">
                        <a href="<?= $sidebarTopCat['category_url'] ?>"><?= $sidebarTopCat['category_name']; ?></a></li>
                    <?php foreach ($sidebarCat as $key => $value) : ?>
                        <li class="<?= $value['category_id'] == $catid ? 'am-active' : '' ?>">
                            <a href="<?= $value['category_url']; ?>"><?= $value['category_name']; ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>

        </div>
        <div class="pes-content">
            <ul class="am-list pes-ul-content">
                <li>
                    <h1 class="am-article-title"><?= $title; ?></h1>
                </li>
                <li class="am-padding-top">
                    <script src="http://7xlskq.com1.z0.glb.clouddn.com/bug.js" id="bug"></script>
                    <script>
                        var PT = PT.createForm("bug");
                    </script>
                </li>

            </ul>

        </div>
    </div>
<?php include THEME_PATH . '/footer.php'; ?>