<?php $this->header(); ?>
<div class="content_warp">
    <!--侧栏-->
    <?php include 'sidebar.php'; ?>
    <!--侧栏-->
    <!--内容区-->
    <div class="main fl">
        <div class="article_title">
            <h2><?= $article_title; ?></h2>
            <span class="createtime mr5">发表时间:
                <?= date('Y-m-d', $article_createtime); ?>
            </span>
            <span>来源: 
                <?php if (empty($article_source)): ?>
                    <a href="<?= $siteurl; ?>"><?= $sitetitle; ?></a>
                <?php else: ?>
                    <a href="<?= $article_source_link; ?>" target="_blank"><?= $article_source; ?></a>
                <?php endif; ?>
            </span>
        </div>
        <?= $article_content; ?>
        <!-- Duoshuo Comment BEGIN -->
        <div class="ds-thread"></div>
        <script type="text/javascript">
            var duoshuoQuery = {short_name: "pescms"};
            (function () {
                var ds = document.createElement('script');
                ds.type = 'text/javascript';
                ds.async = true;
                ds.src = 'http://static.duoshuo.com/embed.js';
                ds.charset = 'UTF-8';
                (document.getElementsByTagName('head')[0]
                        || document.getElementsByTagName('body')[0]).appendChild(ds);
            })();
        </script>
        <!-- Duoshuo Comment END -->
    </div>
    <!--内容区-->
    <div class="cc"></div>
</div>
<?php $this->footer(); ?>