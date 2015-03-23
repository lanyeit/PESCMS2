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
                            <span>Super User</span>	
                        </dd>
                        <dd class="category-name">
                            <i class="fa fa-folder-open-o"></i>
                            <a href="">Type Post</a>
                        </dd>
                        <dd class="published">
                            <i class="fa fa-calendar-o"></i>
                            <time>26 February 2015</time>
                        </dd>
                        <dd class="hits">
                            <span class="fa fa-eye"></span>Hits: 133
                        </dd>
                    </dl>
                    <h2><?= $title ?></h2>
                </div>
                <div class="articleBody">
                    <?= htmlspecialchars_decode($page_content); ?>
                </div>
                <ul class="pager pagenav">
                    <li class="previous">
                        <a href="" rel="prev">
                            <i class="icon-chevron-left"></i>Prev		
                        </a>
                    </li>
                </ul>



            </article>
            
        </div>
    </div>
    <div class="c"></div>
    <!--内容详情区结束-->
</section>