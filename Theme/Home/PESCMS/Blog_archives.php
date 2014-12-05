<?php $this->header('Blog_header'); ?>
<div id="main">
    <div id="main-inner">
        <?php include 'Blog_nav.php'; ?>
        <div id="archives-index">
            <?php foreach ($list as $key => $value) : ?>
                <h1><a name="<?php echo $value['cate_name']; ?>"><?php echo $value['cate_name']; ?></a></h1>
                <?php foreach ($value['archives'] as $_key => $_value) : ?>
                <p><a href="<?php echo $_value['url']; ?>"><?php echo $_value['title']; ?></a><span class="createtime"><?php echo $func->toDate($_value['createtime'], 'Y-m-d');?></span></p>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<?php $this->footer('Blog_footer'); ?>