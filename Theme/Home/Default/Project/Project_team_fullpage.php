<?php include THEME_PATH . '/header.php'; ?>
    <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/onepage-scroll.css"/>
    <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/jquery.onepage-scroll.min.js"></script>
    <div class="main">
        <section>

        </section>
        <section>

        </section>
    </div>
    <script>
        $(function(){
            $(".main").onepage_scroll({
                sectionContainer: "section",
                pagination: true,
                updateURL: true,
                keyboard: true,
                responsiveFallback: false,
            });
        })
    </script>
<?php include THEME_PATH . '/footer.php'; ?>