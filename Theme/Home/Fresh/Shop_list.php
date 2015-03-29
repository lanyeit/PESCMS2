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
            <!--右侧栏-->
            <?php include 'sidebar.php'; ?>
            <!--右侧栏结束-->
        </div>
    </div>
    <div class="c"></div>
    <!--内容详情区结束-->
</section>