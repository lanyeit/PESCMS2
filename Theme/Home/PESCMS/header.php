<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title><?= empty($title) ? "" : "{$title} - "; ?><?= empty($cat['cate_name']) ? "" : "{$cat['cate_name']} - "; ?><?= $sitetitle; ?></title>
        <meta name="keywords" content="<?= empty($keyword) ? $seo_keyword : $keyword; ?>" />
        <meta name="description" content="<?= empty($description) ? $seo_description : $description; ?>" />
        <meta name="copyright" content="(c)2014 - <?= date('Y'); ?> pescms.com" />
        <meta name="author" content="PESCMS" />
        <meta name="baidu-site-verification" content="nEP3M8SUpq" />
        <link type="text/css" rel="stylesheet" href="<?= $theme; ?>css/style.css"/>
        <script src="<?= $theme; ?>js/jquery.js"></script>
        <script src="<?= $theme; ?>js/unslider.js"></script>
    </head>
    <body>
        <div class="header">
            <div class="logo fl"><a href="<?= $siteurl; ?>"><img src="<?= $logo; ?>" alt="<?= $sitetitle; ?>" /></a></div>
            <div class="nav fr">
                <ul>
                    <a href="<?= $siteurl; ?>" ><li class="<?php if (empty($catid)): ?>nav_on<?php endif; ?>">首页</li></a>
                    <?php $nav = $label->getCate('0', TRUE); ?>
                    <?php foreach ($nav as $key => $value) : ?>
                        <a href="<?= $value['category_url']; ?>"><li class="<?php if ($catid == $value['category_id'] || $cat['category_parent'] == $value['category_id']): ?>nav_on<?php endif; ?>"><?= $value['category_name']; ?></li></a>
                            <?php endforeach; ?>
                </ul>
            </div>
        </div>