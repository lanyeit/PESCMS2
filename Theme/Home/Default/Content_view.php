<div class="am-cf am-container am-padding">
    <div class="am-u-sm-3">
        <ul class="am-nav pes-sidebar">
            <li class="am-nav-header"><a href="<?= $sidebarTopCat['category_url'] ?>"><?= $sidebarTopCat['category_name']; ?></a></li>
            <?php foreach ($sidebarCat as $key => $value) : ?>
                <li class="<?= $value['category_id'] == $catid ? 'am-active' : '' ?>"><a href="<?= $value['category_url']; ?>"><?= $value['category_name']; ?></a></li>
            <?php endforeach; ?>
        </ul>
    </div>
    <div class="am-u-sm-9">
        <ul class="am-list pes-content">
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