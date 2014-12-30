<div id="left">
    <div id="menu">
        <span><a href="<?php echo $site['siteurl']; ?>" class="logo_link"><img src="<?php echo $site['logo']; ?>" /></a></span>

        <div id="groups">
            <h3>目录</h3>
            <ul>
                <?php $column = $label::getCate(0, true); ?>
                <?php foreach ($column as $key => $value) : ?>
                    <li>
                        <a href="<?php if($value['model_id'] > 1){echo 'javascript:;';}else{echo $value['url'];} ?>" class="<?php if ($value['id'] == $catid && $value['model_id'] == 1){ echo 'menu_on';} ?>">
                            <?php echo $value['cate_name']; ?>
                            <?php if ($value['model_id'] > 1): ?><span class="<?php if ($value['id'] != $catid){ echo 'collapsed';} ?>"></span><?php endif; ?>
                        </a>
                        <?php if ($value['model_id'] > 1): ?>
                            <ul class="<?php if ($value['id'] != $catid){ echo 'collapsed';} ?>">
                                <?php $columnList = $label::exec("select * from pes_article where catid ={$value['id']} order by listsort asc, id asc "); ?>
                                <?php foreach ($columnList as $_key => $_value) : ?>
                                    <li>
                                        <a href="<?php echo $_value['url']; ?>" class="<?php if (($_value['id'] == $_GET['id']) && ($_value['catid'] == $catid)){ echo 'menu_on';} ?>">
                                            <?php echo $_value['title']; ?>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</div>
<div id="splitter"></div>