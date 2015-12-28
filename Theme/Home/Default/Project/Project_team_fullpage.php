<?php include THEME_PATH . '/header.php'; ?>
    <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/onepage-scroll.css"/>
    <script src="<?= DOCUMENT_ROOT ?>/Theme/assets/js/jquery.onepage-scroll.min.js"></script>
    <header class="am-topbar am-topbar-fixed-top">
        <div class="am-g">
            <div class="am-u-sm-11 am-u-sm-centered">
                <h1 class="am-topbar-brand">
                    <img src="<?= $project_icon; ?>" height="45px"/>
                    <a href="javascript:;"><?= $title; ?></a>
                </h1>

                <div class="am-collapse am-topbar-collapse">
                    <ul class="am-nav am-nav-pills am-topbar-nav">
                        <li><a href="http://pan.baidu.com/s/1ntrgbzz" target="_blank">马上下载</a></li>
                        <li><a href="http://www.pescms.com/d/v/10/2.html" target="_blank">获取源码</a></li>
                        <li><a href="http://www.pescms.com/d/index/20.html" target="_blank">说明文档</a></li>
                        <li><a href="http://www.pescms.com">返回首页</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    <div class="main">
        <?php foreach (['00a2d4' => 'fff', '12b38c' => 'fff', 'eee' => '', '00b6ae' => 'fff'] as $key => $value): ?>
            <section style="background-color: #<?= $key ?>;color:#<?= $value ?>">
                <div class="am-g" style="padding-top: 200px;">
                    <div class="am-u-sm-6 am-u-sm-centered am-text-xxl am-text-center">
                        <h2>
                            <img src="http://www.pescms.com/<?= $project_icon; ?>" width="80"/><?= $title; ?>
                        </h2>

                        <p>PESCMS TEAM新版正在开发中，敬请期待!</p>
                        <a href="http://pan.baidu.com/s/1ntrgbzz" target="_blank" class="am-btn am-btn-success am-btn-xl">
                            <i class="am-icon-cloud-download"></i>
                            下载旧版
                        </a>
                    </div>
                </div>
            </section>
        <?php endforeach; ?>
    </div>

    <script>
        $(function () {
            $(".main").onepage_scroll({
                sectionContainer: "section",
                animationTime: 1000,
                pagination: true,
                updateURL: true,
                keyboard: true,
                responsiveFallback: false,
            });
        })
    </script>
<?php include THEME_PATH . '/footer.php'; ?>