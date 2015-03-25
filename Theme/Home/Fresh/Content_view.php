<section id="sp-main-body">
    <!--面包屑-->
    <div id="sp-title">
        <div class="sp-page-title">
            <div class="container">
                <h2><?= ${"{$model}_title"} ?></h2>
                <ol class="breadcrumb">
                    <li><i class="fa fa-home"></i></li>
                    <li><a href="<?= ${"{$model}_url"} ?>" class="pathway">Home</a></li>
                    <li><a href="http://demo.jlvextension.com/joeby/#blog" class="pathway">Blog</a></li>
                    <li class="active">Standard Post Format</li>
                </ol>
            </div>
        </div>
    </div>
    <!--面包屑结束-->

    <!--内容详情区-->
    <div id="container">
        <div class="sp-component">
            <div class="sp-list">
                <article class="item item-page">
                    <div class="entry-header">
                        <dl class="article-info">
                            <dd class="createdby">
                                <i class="fa fa-user"></i>
                                <span><?= $sitetitle ?></span>	
                            </dd>
                            <?php if (!empty(${"{$model}_catid"})): ?>
                                <dd class="category-name">
                                    <i class="fa fa-folder-open-o"></i>
                                    <a href="<?= $categorys[${"{$model}_catid"}]['category_url'] ?>"><?= $categorys[${"{$model}_catid"}]['category_name'] ?></a>
                                </dd>
                            <?php endif; ?>
                            <dd class="published">
                                <i class="fa fa-calendar-o"></i>
                                <time><?= date('Y-m-d', ${"{$model}_createtime"}); ?></time>
                            </dd>
                        </dl>
                        <h2><?= ${"{$model}_title"} ?></h2>
                    </div>
                    <div class="articleBody">
                        <?= htmlspecialchars_decode(${"{$model}_content"}); ?>
                    </div>
                    <ul class="pager pagenav">
                        <li class="previous">
                            <a href="" rel="prev">
                                <i class="fa fa-angle-left"></i>Prev		
                            </a>
                        </li>
                        <li class="next">
                            <a href="/joeby/blogs/video-post-format.html" rel="next">
                                Next<i class="fa fa-angle-right"></i>		
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
        <!--右侧栏-->
        <?php include 'sidebar.php'; ?>
        <!--右侧栏结束-->
    </div>
    <div class="c"></div>
    <!--内容详情区结束-->
</section>