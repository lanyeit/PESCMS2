<?php
foreach($label->getCate(0) as $key => $value) {
    $navArray[] = $value['category_id'];
}
if(in_array($catid, $navArray)){
    $sidebarCatid = $catid;
}elseif(in_array($cat['category_parent'], $navArray)){
    $sidebarCatid = $cat['category_parent'];
}
?>
<div class="sidebar fl">
    <div class="sidebar_title">
        <h3><?= $categorys[$sidebarCatid]['category_name']; ?></h3>
    </div>
    <div class="sidebar_list mt10">
        <ul>
            <?php foreach ($label->getCate($sidebarCatid) as $key => $value) : ?>

                <a href="<?= $value['category_url']; ?>"><li class="<?php if ($catid == $value['category_id']): ?>sidebar_list_on<?php endif; ?>"><?= $value['category_name']; ?></li></a>
                <?php endforeach; ?>
        </ul>
    </div>

</div>