<div class="footer">
    <div class="footer_content">
        <div class="footer_logo">
            <img src="<?= $theme; ?>img/footer_logo.png" alt="PESCMS">
        </div>
        <div class="footer_nav fl">
            <ul>
                <a href="<?= $siteurl; ?>" ><li>首页</li></a>
                <?php $nav = $label->getCate('0', TRUE); ?>
                <?php foreach ($nav as $key => $value) : ?>
                    <a href="<?= $value['category_url']; ?>"><li><?= $value['category_name']; ?></li></a>
                <?php endforeach; ?>
            </ul>
            <div class="cc"></div>
            <p class="copyright"><?= $system['copyright']; ?></p>
        </div>
        <div class="footer_contact fl">
            <h3>联系我们</h3>
            <a href=""><img src="<?= $theme; ?>img/qq.png" alt="qq"></a>
            <a href=""><img src="<?= $theme; ?>img/weixin.png" alt="weixin"></a>
            <a href=""><img src="<?= $theme; ?>img/weibo.png" alt="weibo"></a>
        </div>
    </div>
	<div style="display:none"><?= $footerCode;?></div>
</div>