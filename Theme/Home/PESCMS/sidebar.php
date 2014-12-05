<?php
foreach($label::getCate(0) as $key => $value) {
    $navArray[] = $value['id'];
}
if(in_array($catid, $navArray)){
    $sidebarCatid = $catid;
}elseif(in_array($cat['parent_id'], $navArray)){
    $sidebarCatid = $cat['parent_id'];
}
?>
<div class="sidebar fl">
    <div class="sidebar_title">
        <h3><?php echo $Categorys[$sidebarCatid]['cate_name']; ?></h3>
    </div>
    <div class="sidebar_list mt10">
        <ul>
            <?php foreach ($label::getCate($sidebarCatid) as $key => $value) : ?>

                <a href="<?php echo $value['url']; ?>"><li class="<?php if ($catid == $value['id']): ?>sidebar_list_on<?php endif; ?>"><?php echo $value['cate_name']; ?></li></a>
                <?php endforeach; ?>
        </ul>
    </div>

</div>