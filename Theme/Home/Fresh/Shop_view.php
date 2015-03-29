<section id="sp-main-body">
    <!--面包屑-->
    <?php include 'bread.php'; ?>
    <!--面包屑结束-->

    <!--内容详情区-->
    <div id="container">
        <div class="sp-component">
            <div class="sp-list">
                <div class="product-view">
                    <div class="images">
                        <span class="onsale">Sale!</span>
                        <img src="<?= $label->thumb($shop_thumb) ?>" />
                    </div>
                    <div class="summary entry-summary">
                        <h1 itemprop="name" class="product_title entry-title"><?= $shop_title; ?></h1>
                        <div class="offers">
                            <p class="price"><del><span class="amount">￥<?= $shop_original_price; ?></span></del> <ins><span class="amount">￥<?= $shop_price; ?></span></ins></p>
                        </div>
                        <div class="description">
                            <p><?= $shop_description; ?></p>
                        </div>
                        <div class="buy">
                            <div class="quantity">
                                <input type="number" step="1" min="1" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" readonly="readonly">
                            </div>
                            <a href="http://vps.pescms.com" class="single_add_to_cart_button button alt">购买</a>  
                        </div>

                    </div>
                    <div class="woocommerce-tabs">
                        <ul class="tabs">
                            <li class="description_tab active">Description</li>
                        </ul>
                        <div class="panel">
                            <ul class="list-pricing">
                                <li>
                                    <strong>CPU: </strong><?= $shop_cpu; ?>
                                </li>
                                <li>
                                    <strong>内存: </strong><?= $shop_ram; ?>
                                </li>
                                <li>
                                    <strong>硬盘: </strong><?= $shop_hard_disk; ?>
                                </li>
                                <li>
                                    <strong>带宽: </strong><?= $shop_bandwidth; ?>
                                </li>
                                <li>
                                    <strong>IP: </strong><?= $shop_ip_num; ?>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--右侧栏-->
        <?php include 'sidebar.php'; ?>
        <!--右侧栏结束-->
    </div>
    <div class="c"></div>
    <!--内容详情区结束-->
</section>