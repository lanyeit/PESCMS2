<?php $this->header('Blog_header'); ?>
<div id="main">
    <div id="main-inner">
        <?php include 'Blog_nav.php'; ?>
        <div id="archives-index">
            <?php foreach ($list as $key => $value) : ?>
                <h1><a name="<?= $value['category_name']; ?>"><?= $value['category_name']; ?></a></h1>
                <?php foreach ($value['archives'] as $_key => $_value) : ?>
                <p><a href="<?= $label->url('page-view', array('id' => $_value['blog_id'])); ?>"><?= $_value['blog_title']; ?></a><span class="createtime"><?= date('Y-m-d', $_value['blog_createtime']);?></span></p>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<?php $this->footer('Blog_footer'); ?>