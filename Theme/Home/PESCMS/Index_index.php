<!--首页幻灯片-->
<?php include 'slide.php'; ?>
<!--首页幻灯片-->
<!--特色介绍-->
<div class="feature">
    <div class="feature_list">
        <div class="feature_explain">
            <?php $security = $label->page('13'); ?>
            <?php $easyToUse = $label->page('14'); ?>
            <?php $free = $label->page('15'); ?>
            <h3><?= $security['page_title']; ?></h3>
            <p><?= $label->strCut($security['page_description'], '200'); ?></p>
            <a href="<?= $security['page_url']; ?>" class="fr">阅读全文</a>
        </div>
        <div class="feature_explain">
            <h3><?= $easyToUse['page_title']; ?></h3>
            <p><?= $label->strCut($easyToUse['page_description'], '200'); ?></p>
            <a href="<?= $easyToUse['page_url']; ?>" class="fr">阅读全文</a>
        </div>
        <div class="feature_explain">
            <h3><?= $free['page_title']; ?></h3>
            <p><?= $label->strCut($free['page_description'], '200'); ?></p>
            <a href="<?= $free['page_url']; ?>" class="fr">阅读全文</a>
        </div>
    </div>
</div>
<!--特色介绍-->
<!--首页下载-->
<div class="index_download">
    <span class="fl download_explain">
        <h3>体验PESCMS之旅</h3>
        <p>点击下方的链接进行下载PESCMS，告诉世界您的想法。</p>
        <p>下载压缩包到本地，解压缩，双击解开的文件夹中的readme.html文件，阅读PESCMS的介绍，和安装过程。将程序配置到您的服务器上，仅需要数分钟。</p>
        <h4>注意事项</h4>
        <p class="mb15">PESCMS需要在PHP5.3或以上版本运行！<br />MYSQL需要在5.0或以上版本。<br />目前服务器环境需要支持URL规则重写。</p>
        <a href="<?= $Categorys['6']['category_url']; ?>" class="download_link">官网下载</a>
        <a href="<?= $Categorys['7']['category_url']; ?>" class="patch">升级补丁列表</a>
    </span>
    <span class="fr software_cover"><img src="/upload/img/2014-01-29/f.png"  /></span>
</div>
<div class="cc"></div>
<!--首页下载-->