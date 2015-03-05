<div class="content-list" id="content-box">
    <?php if (empty($list)): ?>
        <div class="container404">
            <p>没有找到符合'<?= $s ?>'的内容</p>
        </div>
    <?php else: ?>
        <?php foreach ($list as $key => $value) : ?>
            <div class="pin">
                <a href="<?= $label->url('Beauty-view', array('post' => $value['beauty_anchor'])); ?>">
                    <div class="box">
                        <div class="color" style="background-color:<?= '#' . sprintf('%02X', rand(0, 255)) . sprintf('%02X', rand(0, 255)) . sprintf('%02X', rand(0, 255)) ?>">
                            <div class="text">
                                <h4><?= $value['beauty_title']; ?></h4>
                                <div class="hoverMeta">
                                    <p><?= $value['beauty_view']; ?>热度</p>
                                    <p class="published"><?= date('Y-m-d', $value['beauty_createtime']); ?></p>
                                </div>
                            </div>
                        </div>
                        <img src="<?= $value['beauty_thumb']; ?>" width="240px" />
                    </div>
                </a>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>
<div class="clear"></div>
<?php if (!empty($list)): ?>
    <div id="page">
        <?= $page; ?>
    </div>
<?php endif; ?>