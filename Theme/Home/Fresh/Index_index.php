<section id="sp-main-body">
    <!--幻灯片-->
    <div class="page-content">
        <div class="slideshow">
            <?php include 'slide.php'; ?>
        </div>
    </div>
    <!--幻灯片结束-->

    <!--特色说明开始-->
    <div id="our_characteristic">
        <div class="sppb-container">
            <div class="sppb-section-title sppb-text-center">
                <h1 class="sppb-title-heading">我们的特色</h1>
                <p class="sppb-title-subheading"><?= $system['characteristic']; ?></p>
            </div>

            <div class="sppb-row">
                <div class="our_characteristic">
                    <div class="row">
                        <?php $listPage = array('fa-lock' => '13', 'fa-leaf' => '43', 'fa-usd' => '15', 'fa-star' => '14') ?>
                        <?php foreach ($listPage as $key => $value) : ?>
                            <?php $pageInfo = $label->page($value); ?>
                            <div class="col-md-3">
                                <div class="service-item">
                                    <i class="fa <?= $key ?>"></i>
                                    <h1><?= $pageInfo['page_title']; ?></h1>
                                    <p><?= $label->strCut($pageInfo['page_description'], '220'); ?></p>
                                    <a href="<?= $pageInfo['page_url']; ?>" class="read-more">阅读更多</a>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="c"></div>
    <!--特色说明结束-->

    <!--动态-->
    <div id="dynamic">
        <div class="sppb-container">
            <div class="sppb-section-title sppb-text-center">
                <h1 class="sppb-title-heading">最新动态</h1>
            </div>

            <div class="sppb-row">
                <div class="sppb-col-sm-6">
                    <?php $article = $label->listContent('article', array(), 'article_status = 1', 'article_createtime DESC', '5'); ?>
                    <?php foreach ($article as $key => $value) : ?>
                        <div class="sppb-panel sppb-panel-default <?= $key == '0' ? 'active' : '' ?>">
                            <div class="sppb-panel-heading <?= $key == '0' ? 'active' : '' ?>">
                                <span class="sppb-panel-title"><?= $value['article_title']; ?></span>
                            </div>
                            <div class="sppb-panel-collapse" style="<?= $key == '0' ? '' : 'overflow: hidden;height:0px' ?>">
                                <div class="sppb-panel-body">
                                    <p><?= $label->strCut($value['article_description'], '145'); ?></p>
                                    <p><a href="<?= $pageInfo['page_url']; ?>" class="read-more">阅读更多</a></p>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
    <!--动态结束-->
</section>
<script>
    $(function () {
        $(".sppb-panel").on("click", function () {
            $(this).siblings().find(".sppb-panel, .sppb-panel-heading").removeClass("active").find("a").attr("href", "javascript:;");
            $(this).siblings().find(".sppb-panel-collapse").stop().animate({height: '0px'});
            $(this).addClass("active");
            $(this).find(".sppb-panel-heading").addClass("active");
            $(this).find(".sppb-panel-collapse").stop().animate({height: '110px'});
        })
    })
</script>