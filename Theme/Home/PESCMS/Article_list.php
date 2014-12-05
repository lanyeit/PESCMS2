<?php $this->header(); ?>
<div class="content_warp">
    <!--侧栏-->
    <?php include 'sidebar.php'; ?>
    <!--侧栏-->
    <!--内容区-->
    <div class="main fl">
        <ul class="article_list">
            <?php foreach ($list as $key => $value) : ?>
                <a href="<?php echo $value['url']; ?>">
                    <li>
                        <font color="green">[<?php echo $Categorys[$value['catid']]['cate_name']; ?>]</font><?php echo $value['title']; ?>
                        <span class="fr"><?php echo $func->toDate($value['createtime'], 'Y-m-d'); ?></span>
                    </li>
                </a>
            <?php endforeach; ?>
        </ul>
        <div class="page">
            <?php echo $page; ?>
        </div>
    </div>
    <!--内容区-->
    <div class="cc"></div>
</div>
<?php $this->footer(); ?>