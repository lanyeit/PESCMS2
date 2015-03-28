<?php $this->header('Blog_header'); ?>
<div id="main">
    <div id="main-inner">
        <?php include 'Blog_nav.php'; ?>
        <div id="article-title">
            <?= $blog_title; ?>
        </div>
        <div id="article-meta">
            发布于 <?= date($blog_createtime, 'Y-m-d'); ?>  | 分类 <a href="<?= $label->url('page-list', array('id' => $category_id)) ?>"><?= $category_name; ?></a>
        </div>
        <div id="article-content">
            <?= htmlspecialchars_decode($blog_content); ?>
        </div>
        <!-- Duoshuo Comment BEGIN -->
        <div class="ds-thread"></div>
        <script type="text/javascript">
            var duoshuoQuery = {short_name: "pescms"};
            (function() {
                var ds = document.createElement('script');
                ds.type = 'text/javascript';
                ds.async = true;
                ds.src = 'https://static.duoshuo.com/embed.js';
                ds.charset = 'UTF-8';
                (document.getElementsByTagName('head')[0]
                        || document.getElementsByTagName('body')[0]).appendChild(ds);
            })();
        </script>
        <!-- Duoshuo Comment END -->
    </div>
</div>
<?php $this->footer('Blog_footer'); ?>