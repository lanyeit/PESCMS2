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
            <div class="search">
                <h1 class="page-title">Search</h1>
                <div class="btn-toolbar">
                    <div class="btn-group">
                        <form action="/" >
                            <input type="hidden" name="m" value="<?= MODULE ?>" />
                            <input type="hidden" name="a" value="search" />
                            <input type="text" name="searchword" placeholder="Search Keyword:" id="search-searchword" size="30" maxlength="200" value="<?= $title ?>" class="inputbox">
                            <button onclick="this.form.submit()" class="btn hasTooltip" ><span class="fa fa-search"></span></button>
                        </form>
                    </div>
                    <input type="hidden" name="task" value="search">
                    <div class="clearfix"></div>
                </div>
            </div>
            <!--列表-->
            <div class="sp-component">
                <div class="sp-column">
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
        </div>
    </div>
    <div class="c"></div>
    <!--内容详情区结束-->
</section>