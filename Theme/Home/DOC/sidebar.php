<div id="left">
    <div id="menu">
        <span><a href="<?= $site['siteurl']; ?>" class="logo_link"><img src="<?= $site['logo']; ?>" /></a></span>

        <div id="groups">
            <h3>目录</h3>
            <ul>
                <?php $column = $label->getCate(4, true); ?>
                <?php foreach ($column as $key => $value) : ?>
                    <li>
                        <a href="<?= $value['model_id'] > 1 ? 'javascript:;' : '/index.php' ?>" class="<?= $value['category_id'] == $catid && $value['model_id'] == 9 ? 'menu_on' : ''; ?>">
                            <?= $value['category_name']; ?>
                            <?php if ($value['model_id'] > 1): ?><span class="<?php if ($value['category_id'] != $catid){ echo 'collapsed';} ?>"></span><?php endif; ?>
                        </a>
                        <?php if ($value['model_id'] > 1): ?>
                            <ul class="<?= $value['category_id'] != $catid ? 'collapsed' : '';?>">
                                <?php $columnList = $label->listContent("doc", array('doc_catid' => $value['category_id']), ' doc_catid = :doc_catid ', 'doc_listsort asc, doc_id asc'); ?>
                                <?php foreach ($columnList as $_key => $_value) : ?>
                                    <li>
                                        <a href="<?= $_value['doc_url']; ?>" class="<?= ($_value['doc_id'] == $_GET['doc_id']) && ($_value['category_id'] == $catid)?  'menu_on' : ''; ?>">
                                            <?= $_value['doc_title']; ?>
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