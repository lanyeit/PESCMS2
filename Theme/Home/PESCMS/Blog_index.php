<?php $this->header('Blog_header'); ?>
<div id="main">
    <div id="main-inner">
        <?php include 'Blog_nav.php'; ?>
        <div id="article-content">
            <?php foreach ($list as $key => $value) : ?>
                <div class="article-block">
                    <p class="title"><a href="<?= $value['url']; ?>"><?= $value['title']; ?></a></p>
                    <p class="abstract">&lt;摘要&gt;: <?= $value['description']; ?></p>
                    <p class="meta">发布于 <?= $label->toDate($value['createtime'], 'Y-m-d'); ?> | 分类 <a href="<?= $value['curl']; ?>"><?= $value['cate_name']; ?></a>
                    </p>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="page">
            <?= $page; ?>
        </div>
    </div>
</div>
<?php $this->footer('Blog_footer'); ?>