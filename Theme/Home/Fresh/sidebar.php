<?php
foreach ($label->getCate(0) as $key => $value) {
    $navArray[] = $value['category_id'];
}
if (in_array($catid, $navArray)) {
    $sidebarCatid = $catid;
} elseif (in_array($cat['category_parent'], $navArray)) {
    $sidebarCatid = $cat['category_parent'];
}
?>
<div class="sp-right">
    <div class="sp-module">
        <div class="search">
            <form action="/" method="get">
                <input type="hidden" name="m" value="<?= MODULE ?>" />
                <input type="hidden" name="a" value="search" />
                <input name="searchword" id="mod-search-searchword" maxlength="200" class="inputbox search-query" type="text" size="20" placeholder="Search ...">
            </form>
        </div>
    </div>
    <div class="sp-module">
        <div class="sp-box">
            <h1>分类</h1>
            <ul>
                <?php foreach ($label->getCate($sidebarCatid) as $key => $value) : ?>
                    <li style="text-align: center">
                        <a href="<?= $value['category_url']; ?>"><?= $value['category_name']; ?></a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</div>