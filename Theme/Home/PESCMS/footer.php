<div class="footer">
    <div class="footer_content">
        <div class="footer_logo">
            <img src="<?php echo $site['img']; ?>/footer_logo.png" alt="PESCMS">
        </div>
        <div class="footer_nav fl">
            <ul>
                <a href="<?php echo $site['siteurl']; ?>" ><li>首页</li></a>
                <?php $nav = $label::getCate('0', TRUE); ?>
                <?php foreach ($nav as $key => $value) : ?>
                    <a href="<?php echo $value['url']; ?>"><li><?php echo $value['cate_name']; ?></li></a>
                <?php endforeach; ?>
            </ul>
            <div class="cc"></div>
            <p class="copyright"><?php echo $system['copyright']; ?></p>
        </div>
        <div class="footer_contact fl">
            <h3>联系我们</h3>
            <a href=""><img src="<?php echo $site['img']; ?>/qq.png" alt="qq"></a>
            <a href=""><img src="<?php echo $site['img']; ?>/weixin.png" alt="weixin"></a>
            <a href=""><img src="<?php echo $site['img']; ?>/weibo.png" alt="weibo"></a>
        </div>
    </div>
	<div style="display:none"><?php echo $site['footerCode'];?></div>
</div>