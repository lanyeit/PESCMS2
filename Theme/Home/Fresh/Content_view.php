<section id="sp-main-body">
    <!--面包屑-->
    <?php include 'bread.php'; ?>
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
                        <?php if ($pre): ?>
                            <li class="previous">
                                <a href="<?= $pre["{$model}_url"] ?>" rel="prev">
                                    <i class="fa fa-angle-left"></i>Prev		
                                </a>
                            </li>
                        <?php endif; ?>
                        <?php if ($next): ?>
                            <li class="next">
                                <a href="<?= $next["{$model}_url"] ?>" rel="next">
                                    Next<i class="fa fa-angle-right"></i>		
                                </a>
                            </li>
                        <?php endif; ?>
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