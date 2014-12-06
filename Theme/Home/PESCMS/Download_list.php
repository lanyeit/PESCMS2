<?php $this->header(); ?>
<div class="content_warp">
    <!--侧栏-->
    <?php include 'sidebar.php'; ?>
    <!--侧栏-->
    <!--内容区-->
    <div class="main fl">
        <ul class="article_list">
            <?php foreach ($list as $key => $value) : ?>
                <a href="<?= $value['download_url']; ?>">
                    <li>
                        <font color="green">[<?= $categorys[$value['download_catid']]['category_name']; ?>]</font><?= $value['download_title']; ?>
                        <span class="fr"><?= date('Y-m-d', $value['download_createtime']); ?></span>
                    </li>
                </a>
            <?php endforeach; ?>
        </ul>
        <div class="page">
            <?= $page; ?>
        </div>
    </div>

    <!--内容区-->
    <div class="cc"></div>
</div>
<?php $this->footer(); ?>