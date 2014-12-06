<?php $this->header('Blog_header'); ?>
<div id="main">
    <div id="main-inner">
        <?php include 'Blog_nav.php'; ?>
        <div id="archives-index">
            <?php foreach ($list as $key => $value) : ?>
                <h1><a name="<?= $value['cate_name']; ?>"><?= $value['cate_name']; ?></a></h1>
                <?php foreach ($value['archives'] as $_key => $_value) : ?>
                <p><a href="<?= $_value['url']; ?>"><?= $_value['title']; ?></a><span class="createtime"><?= $label->toDate($_value['createtime'], 'Y-m-d');?></span></p>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<?php $this->footer('Blog_footer'); ?>