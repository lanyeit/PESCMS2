<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title><?php echo empty($title) ? "" : "{$title} - "; ?><?php echo empty($cat['cate_name']) ? "" : "{$cat['cate_name']} - "; ?><?php echo $site['sitetitle']; ?></title>
        <meta name="keywords" content="<?php echo empty($keyword) ? $site['seo_keyword'] : $keyword; ?>" />
        <meta name="description" content="<?php echo empty($description) ? $site['seo_description'] : $description; ?>" />
        <meta name="copyright" content="(c)2014 - <?php echo date('Y'); ?> pescms.com" />
        <meta name="author" content="pes" />
		<meta name="baidu-site-verification" content="nEP3M8SUpq" />
        <link type="text/css" rel="stylesheet" href="<?php echo $site['css']; ?>/style.css"/>
        <script src="<?php echo $site['js']; ?>/jquery.js"></script>
        <script src="<?php echo $site['js']; ?>/unslider.js"></script>
    </head>
    <body>
        <div class="header">
            <div class="logo fl"><a href="<?php echo $site['siteurl']; ?>"><img src="<?php echo $site['logo']; ?>" alt="<?php echo $site['sitetitle']; ?>" /></a></div>
            <div class="nav fr">
                <ul>
                    <a href="<?php echo $site['siteurl']; ?>" ><li class="<?php if (empty($catid)): ?>nav_on<?php endif; ?>">首页</li></a>
                    <?php $nav = $label::getCate('0', TRUE); ?>
                    <?php foreach( $nav as $key => $value) : ?>
                        <a href="<?php echo $value['url']; ?>"><li class="<?php if ($catid == $value['id'] || $cat['parent_id'] == $value['id']): ?>nav_on<?php endif; ?>"><?php echo $value['cate_name']; ?></li></a>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>