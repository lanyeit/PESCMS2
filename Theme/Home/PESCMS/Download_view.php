<?php $this->header(); ?>
<div class="content_warp">
    <!--侧栏-->
    <?php include 'sidebar.php'; ?>
    <!--侧栏-->
    <!--内容区-->
    <div class="main fl">
        <div class="article_title">
            <h2><?= $download_title; ?></h2>
            <span class="createtime mr5">发表时间:
                <?= date('Y-m-d', $download_createtime); ?>    
            </span>
            <span>来源: 
                <?php if (empty($download_source)): ?>
                    <a href="<?= $siteurl; ?>"><?= $sitetitle; ?></a>
                <?php else: ?>
                    <a href="<?= $download_source_link; ?>" target="_blank"><?= $download_source; ?></a>
                <?php endif; ?>
            </span>
        </div>
        <?php if (!empty($file)): ?>
            <div class="mt20 mb20">
                <p class="blue f16">程序下载地址:
                    <?php // $file_list = $label->saveFile('Download', $id); ?>
                    <?php // foreach ($file_list as $key => $value) : ?>
                        <a href="<?= $value; ?>" class="download_link">下载地址<?= $key + 1; ?></a>
                    <?php // endforeach; ?>
                </p>
            </div>
        <?php endif; ?>
        <?= $download_content; ?>
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