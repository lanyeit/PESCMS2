<!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf">
            <a href="<?= $_GET['back_url'] ?>" class="am-margin-right-xs am-text-danger"><i class="am-icon-reply"></i>返回</a>
            <strong class="am-text-primary am-text-lg"><?= $title; ?></strong>
        </div>
    </div>
    <form class="am-form" action="<?= $url; ?>" method="post" data-am-validator>
        <input type="hidden" name="method" value="<?= $method ?>" />
        <input type="hidden" name="id" value="<?= $id ?>" />
        <input type="hidden" name="back_url" value="<?= $_GET['back_url'] ?>" />
        <div class="am-tabs am-margin">
            <ul class="am-tabs-nav am-nav am-nav-tabs">
                <li class="am-active"><a href="#tab1">基本信息</a></li>
            </ul>

            <div class="am-tabs-bd">
                <div class="am-tab-panel am-fade am-in am-active">

                    <?php foreach ($field as $key => $value) : ?>
                        <div class="am-g am-margin-top">
                            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                <?= $value['display_name'] ?>
                            </div>
                            <div class="am-u-sm-8 am-u-md-6">
                                <?= $form->formList($value); ?>
                            </div>
                            <div class="am-hide-sm-only am-u-md-4"><?= $value['field_required'] == '1' ? '*必填' : '' ?> <?= $value['field_explain']; ?></div>
                        </div>
                    <?php endforeach; ?>

                </div>

            </div>

        </div>

        <div class="am-margin">
            <button type="submit" class="am-btn am-btn-primary am-btn-xs">提交保存</button>
            <a href="<?= $label->url(GROUP . '-Model-fieldList', array('id' => $modelId)); ?>" class="am-btn am-btn-primary am-btn-xs">放弃保存</a>
        </div>
    </form>
</div>
<!-- content end -->
<link href="<?= DOCUMENT_ROOT ?>/Expand/Form/theme/umeditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
<script type="text/javascript" charset="utf-8" src="<?= DOCUMENT_ROOT ?>/Expand/Form/theme/umeditor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="<?= DOCUMENT_ROOT ?>/Expand/Form/theme/umeditor/umeditor.min.js"></script>
<script type="text/javascript" src="<?= DOCUMENT_ROOT ?>/Expand/Form/theme/umeditor/lang/zh-cn/zh-cn.js"></script>