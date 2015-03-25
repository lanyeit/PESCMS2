<section id="sp-main-body">
    <!--面包屑-->
    <div id="sp-title">
        <div class="sp-page-title">
            <div class="container">
                <h2><?= $title ?></h2>
                <ol class="breadcrumb">
                    <li><i class="fa fa-home"></i></li>
                    <li><a href="<?= $siteurl ?>" class="pathway">Home</a></li>
                    <li><a href="http://demo.jlvextension.com/joeby/#blog" class="pathway">Blog</a></li>
                    <li class="active">Standard Post Format</li>
                </ol>
            </div>
        </div>
    </div>
    <!--面包屑结束-->

    <!--内容详情区-->
    <div id="sp-component">
        <div class="sp-column">
            <article class="item item-page">
                <div class="entry-header">
                    <dl class="article-info">
                        <dd class="createdby">
                            <i class="fa fa-user"></i>
                            <span><?=$sitetitle?></span>	
                        </dd>
                        <dd class="published">
                            <i class="fa fa-calendar-o"></i>
                            <time><?=date('Y-m-d', $page_createtime);?></time>
                        </dd>
                    </dl>
                    <h2><?= $title ?></h2>
                </div>
                <div class="articleBody">
                    <?= htmlspecialchars_decode($page_content); ?>
                </div>
            </article>

        </div>
    </div>
    <div class="c"></div>
    <!--内容详情区结束-->
</section>