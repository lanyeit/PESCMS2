<div id="sp-title">
    <div class="sp-page-title">
        <div class="container">
            <h2><?= $title ?></h2>
            <ol class="breadcrumb">
                <li><i class="fa fa-home"></i></li>
                <li><a href="<?= $siteurl ?>" class="pathway">首页</a></li>
                <li><a href="<?=$categorys[$_GET['id']]['category_url']?>" class="pathway"><?=$categorys[$_GET['id']]['category_name']?></a></li>
                <li class="active"><?=$title?></li>
            </ol>
        </div>
    </div>
</div>