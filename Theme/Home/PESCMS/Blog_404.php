<?php $this->header('Blog_header'); ?>
<div id="main">
    <div id="main-inner">
        <?php include 'Blog_nav.php'; ?>
        <h1>404页面没找到</h1>
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
</div>
<?php $this->footer('Blog_footer'); ?>