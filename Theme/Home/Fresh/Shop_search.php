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
                    <ul class="products">
                        <?php foreach ($list as $key => $value) : ?>
                            <li> 
                                <a href="<?= $value['shop_url']; ?>">
                                    <span class="onsale">Sale!</span>
                                    <img width="550" height="550" src="<?= $label->thumb($value['shop_thumb']); ?>" class="attachment-shop_catalog wp-post-image"/>
                                    <h3><?= $value['shop_title']; ?></h3> 
                                    <span class="price">
                                        <del>
                                            <span class="amount">￥<?= $value['shop_original_price']; ?></span>
                                        </del> 
                                        <ins>
                                            <span class="amount">￥<?= $value['shop_price']; ?></span>
                                        </ins>

                                    </span> 
                                </a> 
                                <a href="http://vps.pescms.com" class="add_to_cart_button">购买</a> 
                            </li>
                        <?php endforeach; ?>
                    </ul>
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