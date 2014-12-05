<?php $this->header(); ?>
<div class="content_warp">
    <!--侧栏-->
    <?php include 'sidebar.php'; ?>
    <!--侧栏-->
    <!--内容区-->
    <div class="main fl">
        <div class="article_title">
            <h2><?php echo $title; ?></h2>
            <span class="createtime mr5">发表时间:
                <?php echo $func->toDate($createtime, 'Y-m-d'); ?>
            </span>
            <span>来源: 
                <?php if (empty($source)): ?>
                    <a href="<?php echo $site['siteurl']; ?>"><?php echo $site['sitetitle']; ?></a>
                <?php else: ?>
                    <a href="<?php echo $source_link; ?>" target="_blank"><?php echo $source; ?></a>
                <?php endif; ?>
            </span>
        </div>
        <?php if (!empty($file)): ?>
            <div class="mt20 mb20">
                <p class="blue f16">程序下载地址:
                    <?php $file_list = $func->saveFile('Download', $id); ?>
                    <?php foreach ($file_list as $key => $value) : ?>
                        <a href="<?php echo $value; ?>" class="download_link">下载地址<?php echo $key + 1; ?></a>
                    <?php endforeach; ?>
                </p>
            </div>
        <?php endif; ?>
        <?php echo $content; ?>
        <!-- Duoshuo Comment BEGIN -->
        <div class="ds-thread"></div>
        <script type="text/javascript">
            var duoshuoQuery = {short_name: "pescms"};
            (function() {
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