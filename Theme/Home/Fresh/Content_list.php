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
                                        <span><?=$sitetitle?></span>	
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
                                    <dd class="hits">
                                        <span class="fa fa-eye"></span>
                                        Hits: 58
                                    </dd>						
                                </dl>
                                <h2><a href="<?= $value["{$model}_url"]; ?>"><?= $value["{$model}_title"]; ?></a></h2>
                            </div>
                            <?= $value["{$model}_description"]; ?>
                            <div class="c"></div>
                        </div>

                    <?php endforeach; ?>

                </div>
            </div>
            <!--列表结束-->
            <!--右侧栏-->
            <div class="sp-right">
                <div class="sp-module">
                    <div class="search">
                        <form action="#" method="post">
                            <input name="searchword" id="mod-search-searchword" maxlength="200" class="inputbox search-query" type="text" size="20" placeholder="Search ...">	
                            <input type="hidden" name="task" value="search">
                            <input type="hidden" name="option" value="com_search">
                            <input type="hidden" name="Itemid" value="126">
                        </form>
                    </div>
                </div>
                <div class="sp-module">
                    <div class="sp-box">
                        <h1>Recent Posts</h1>
                        <ul>
                            <li>
                                <a href="">This is a image post</a>
                            </li>
                            <li>
                                <a href="">This is a image post</a>
                            </li>
                            <li>
                                <a href="">链接A</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--右侧栏结束-->
        </div>
    </div>
    <div class="c"></div>
    <!--内容详情区结束-->
</section>