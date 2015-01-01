<?php $this->header(); ?>
<?php include 'sidebar.php'; ?>

<div id="right">
    <?php include 'nav.php'; ?>

        <div id="content">
            <h1>您访问的页面已经MIA</h1>
            <p>Missing in Page</p>
            <p>本页面已经找不到了，留在这里也没用的。不如点击这里<a href="<?= $site['siteurl']; ?>">返回首页</a>吧!</p>
        </div>

<?php $this->footer(); ?>
