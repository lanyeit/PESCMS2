<?php $this->header(); ?>
<div class="content_warp">
    <!--侧栏-->
    <?php include 'sidebar.php'; ?>
    <!--侧栏-->
    <!--内容区-->
    <div class="main fl">
        <ul class="article_list">
            <?php foreach ($list as $key => $value) : ?>
                <a href="<?= $value['article_url']; ?>">
                    <li>
                        <font color="green">[<?= $categorys[$value['article_catid']]['category_name']; ?>]</font><?= $value['article_title']; ?>
                        <span class="fr"><?= date('Y-m-d', $value['article_createtime']); ?></span>
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