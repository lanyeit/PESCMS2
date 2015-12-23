<!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf">
            <a href="<?= base64_decode($_GET['back_url']) ?>" class="am-margin-right-xs am-text-danger"><i class="am-icon-reply"></i>返回</a>
            <strong class="am-text-primary am-text-lg"><?= $title; ?></strong> / <small>后台菜单</small>
        </div>
    </div>
    <form class="am-form" action="<?= $url; ?>" method="post" data-am-validator>
        <input type="hidden" name="method" value="<?= $method ?>" />
        <input type="hidden" name="category_id" value="<?= $category_id ?>" />
        <div class="am-tabs am-margin">
            <ul class="am-tabs-nav am-nav am-nav-tabs">
                <li class="am-active"><a href="#tab1">基本信息</a></li>
            </ul>

            <div class="am-tabs-bd">
                <div class="am-tab-panel am-fade am-in am-active">

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
                            所属分类
                        </div>
                        <div class="am-u-sm-8 am-u-md-4">
                            <select name="category_parent" required>
                                <option value="0">顶层分类</option>
                                <?= \Model\Category::getCategorys(array($category_parent)); ?>
                            </select>
                        </div>
                        <div class="am-hide-sm-only am-u-md-6">*必填</div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
                            模型类型
                        </div>
                        <div class="am-u-sm-8 am-u-md-4">
                            <select name="model_id" required>
                                <option value="">请选择</option>
                                <?php foreach ($model as $key => $value) : ?>
                                    <option value="<?= $value['model_id']; ?>" <?= $value['model_id'] == $model_id ? 'selected="selected"' : '' ?> ><?= $value['model_title']; ?></option>
                                <?php endforeach; ?>
                                <option value="-1" <?= $model_id == -1 ? 'selected="selected"' : '' ?> >外链模型</option>
                            </select>
                        </div>
                        <div class="am-hide-sm-only am-u-md-6">*必填 选择的模型决定该分类的作用</div>
                    </div>

                    <div class="am-g am-margin-top link am-hide">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
                            外链地址
                        </div>
                        <div class="am-u-sm-8 am-u-md-4">
                            <input type="text" name="category_url" value="<?= $category_url ?>" placeholder="外链地址" required/>
                        </div>
                        <div class="am-hide-sm-only am-u-md-6">*选择外链模型时,请填写本地址</div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
                            分类名称
                        </div>
                        <div class="am-u-sm-8 am-u-md-4">
                            <input type="text" name="category_name" value="<?= $category_name ?>" placeholder="分类名称" required/>
                        </div>
                        <div class="am-hide-sm-only am-u-md-6">*必填</div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
                            分类别名
                        </div>
                        <div class="am-u-sm-8 am-u-md-4">
                            <input type="text" name="category_aliases" value="<?= $category_aliases ?>" placeholder="分类别名" required/>
                        </div>
                        <div class="am-hide-sm-only am-u-md-6">*必填</div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">缩略图</div>
                        <div class="am-u-sm-8 am-u-md-10">
                            <div id="uploader">
                                <input type="hidden" name="category_thumb" id="category-thumb" value="<?= $category_thumb ?>" />
                                <div id="fileList" class="uploader-list">
                                    <?php if ($category_thumb): ?>
                                        <div class="file-item thumbnail">
                                            <img src="<?= $category_thumb ?>" width="200" height="200" />
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <div id="filePicker" data="category-thumb">选择图片</div>
                            </div>
                            <script src="/Theme/assets/js/upload-img.js"></script>
                        </div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
                            分类关键词
                        </div>
                        <div class="am-u-sm-8 am-u-md-4">
                            <input type="text" name="category_keyword" value="<?= $category_keyword ?>" placeholder="分类关键词"/>
                        </div>
                        <div class="am-hide-sm-only am-u-md-6">*必填 用于SEO</div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
                            分类描述
                        </div>
                        <div class="am-u-sm-8 am-u-md-4">
                            <textarea name="category_description" rows="5"><?= $category_description ?></textarea>
                        </div>
                        <div class="am-hide-sm-only am-u-md-6">*必填 用于SEO</div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">导航菜单</div>
                        <div class="am-u-sm-8 am-u-md-10">
                            <div class="am-form-group am-margin-bottom-0">
                                <label class="am-radio-inline">
                                    <input type="radio"  value="1" name="category_nav" <?= $category_nav == '1' ? 'checked="checked"' : '' ?> required> 显示
                                </label>
                                <label class="am-radio-inline">
                                    <input type="radio" value="0" name="category_nav" <?= $category_nav == '0' ? 'checked="checked"' : '' ?>> 隐藏
                                </label>
                            </div>

                        </div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
                            排序值
                        </div>
                        <div class="am-u-sm-8 am-u-md-4">
                            <input type="text" name="category_listsort" value="<?= $category_listsort ?>" placeholder="排序值"/>
                        </div>
                        <div class="am-hide-sm-only am-u-md-6"></div>
                    </div>

                </div>

            </div>

        </div>

        <div class="am-margin">
            <button type="submit" class="am-btn am-btn-primary am-btn-xs">提交保存</button>
            <a href="<?= $label->url(GROUP . '-Category-index'); ?>" class="am-btn am-btn-primary am-btn-xs">放弃保存</a>
        </div>
    </form>
</div>
<div class="am-modal am-modal-no-btn" id="loading-dialog">
    <div class="am-modal-dialog am-hide">
    </div>
</div>
<script>
    $(function () {
        checkModel($("select[name=model_id]").val())
        $("select[name=model_id]").on("change", function () {
            checkModel($(this).val())
        })
    })
    /**
     * 页面加载时判断模型是否为外链
     * @param {type} modelID
     * @returns {undefined}
     */
    function checkModel(modelID) {
        if (modelID == '-1') {
            $(".link").removeClass('am-hide');
        } else {
            $(".link").addClass('am-hide')
        }
    }
</script>

<!-- content end -->