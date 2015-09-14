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
        <ul class="am-list pes-ul-content">
            <li>
                <h1 class="am-article-title"><?= $title; ?></h1>
            </li>
            <li class="am-padding-top">
                <article class="am-article">
                    <?= htmlspecialchars_decode($content); ?>
                </article>
            </li>

        </ul>

    </div>
</div>