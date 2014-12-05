<?php $this->header('Blog_header'); ?>
<div id="main">
    <div id="main-inner">
        <?php include 'Blog_nav.php'; ?>
        <div id="article-content">
            <?php foreach ($list as $key => $value) : ?>
                <div class="article-block">
                    <p class="title"><a href="<?php echo $value['url']; ?>"><?php echo $value['title']; ?></a></p>
                    <p class="abstract">&lt;摘要&gt;: <?php echo $value['description']; ?></p>
                    <p class="meta">发布于 <?php echo $func->toDate($value['createtime'], 'Y-m-d'); ?> | 分类 <a href="<?php echo $value['curl']; ?>"><?php echo $value['cate_name']; ?></a>
                    </p>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="page">
            <?php echo $page; ?>
        </div>
    </div>
</div>
<?php $this->footer('Blog_footer'); ?>