<section id="sp-main-body">
    <!--面包屑-->
    <?php include 'bread.php'; ?>
    <!--面包屑结束-->

    <!--内容详情区-->
    <div id="container">
        <div class="row">
            <!--列表-->
            <div class="sp-component">
                <div class="sp-list">
                    <?php foreach ($list as $key => $value) : ?>
                        <div class="items-row">
                            <div class="entry-image">
                                <a href="<?= $value["{$model}_url"]; ?>"><img src="" alt="" width="100" height="100" /></a>
                            </div>
                            <div class="entry-header">
                                <dl class="article-info">
                                    <dd class="createdby">
                                        <i class="fa fa-user"></i>
                                        <span><?= $sitetitle ?></span>	
                                    </dd>			
                                    <dd class="category-name">
                                        <i class="fa fa-folder-open-o"></i>
                                        <a href="<?= $categorys[$value["{$model}_catid"]]['category_url']; ?>"><?= $categorys[$value["{$model}_catid"]]['category_name']; ?></a>	
                                    </dd>
                                    <dd class="published">
                                        <i class="fa fa-calendar-o"></i>
                                        <time>
                                            <?= date('Y-m-d', $value["{$model}_createtime"]); ?>
                                        </time>
                                    </dd>						
                                </dl>
                                <h2><a href="<?= $value["{$model}_url"]; ?>"><?= $value["{$model}_title"]; ?></a></h2>
                            </div>
                            <?= $value["{$model}_description"]; ?>
                            <div class="c"></div>
                        </div>

                    <?php endforeach; ?>

                </div>
                <div class="c"></div>
                <div class="page">
                    <?= $page; ?>
                </div>
            </div>
            <!--列表结束-->
            <!--右侧栏-->
            <?php include 'sidebar.php'; ?>
            <!--右侧栏结束-->
        </div>
    </div>
    <div class="c"></div>
    <!--内容详情区结束-->
</section>