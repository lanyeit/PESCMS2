<?php $this->header('Blog_header'); ?>
<div id="main">
    <div id="main-inner">
        <?php include 'Blog_nav.php'; ?>
        <div id="article-content">
            <?php foreach ($list as $key => $value) : ?>
                <div class="article-block">
                    <p class="title"><a href="<?= $label->url('page-view', array('id' => $value['blog_id'])); ?>"><?= $value['blog_title']; ?></a></p>
                    <p class="abstract">&lt;摘要&gt;: <?= $value['blog_description']; ?></p>
                    <p class="meta">发布于 <?= date($value['blog_createtime'], 'Y-m-d'); ?> | 分类 <a href="<?= $label->url('page-list', array('id' => $value['category_id'])) ?>"><?= $value['category_name']; ?></a>
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