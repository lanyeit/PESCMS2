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
        <link type="text/css" rel="stylesheet" href="<?= $theme; ?>css/font.css"/>
        <script src="<?= $theme; ?>js/jquery.js"></script>
        <script src="<?= $theme; ?>js/unslider.js"></script>
    </head>
    <body>
        <header id="sp-header">
            <div class="container">
                <div id="sp-logo">
                    <a href="<?= $siteurl; ?>">
                        <h1>
                            <img src="<?=$logo?>" class="sp-retina-logo" />
                        </h1>
                    </a>
                </div>

                <div id="sp-menu" >
                    <ul class="sp-megamenu-parent">
                        <li class="<?= empty($catid) ? 'active' : '' ?>">
                            <a href="<?= $siteurl; ?>">首页</a>
                        </li>
                        <?php foreach ($label->getCate('0', TRUE) as $key => $value) : ?>
                        <li class="<?=$catid == $value['category_id'] || $cat['category_parent'] == $value['category_id'] ? 'active' : ''?>">
                            <a href="<?= $value['category_url']; ?>"><?= $value['category_name']; ?></a>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </header>