<div class="content-view">
    <div class="postwrap">
        <div class="info">
            <div class="time-box">
                <a class="date" href="javascript:;" title="发布时间"><?= date('Y-m-d', $beauty_createtime); ?></a>
                <a class="view" href="javascript:;" title="热度"><?= $beauty_view; ?></a>
            </div>
        </div>
        <?php foreach (explode(',', $beauty_imgs) as $key => $value) : ?>
            <div class="pics">
                <?php $info = pathinfo($value); ?>
                <a class="fancybox" href="<?= $value; ?>" data-fancybox-group="gallery" ><img data-original="<?= "{$info['dirname']}/{$info['filename']}_small.{$info['extension']}"; ?>" width="600"/></a>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<div class="clear"></div>