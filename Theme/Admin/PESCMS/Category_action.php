<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?php echo $title; ?></a></h2>
</header>
<form action="<?php echo $url; ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="category_id" value="<?= $category_id ?>" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['CLASS_CATEGORY']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <select class="input-leng3" name="category_parent" id="category-parent">
            <option value="0"><?php echo $GLOBALS['_LANG']['CATEGORY']['TOP_CATEGORYS']; ?></option>
            <?= $tree ?>
        </select>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['MODEL_TYPE']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <select class="input-leng3" name="model_id" id="model-id">
            <option value="0"><?php echo $GLOBALS['_LANG']['COMMON']['PLEASE_SELECT']; ?></option>
            <?php foreach ($model as $key => $value) : ?>
                <option value="<?= $value['model_id']; ?>" <?= $value['model_id'] == $model_id ? 'selected="selected"' : '' ?> ><?php echo $GLOBALS['_LANG']['MENU_LIST'][$value['lang_key']]; ?></option>
            <?php endforeach; ?>
            <option value="-1" <?= $model_id == -1 ? 'selected="selected"' : '' ?> ><?php echo $GLOBALS['_LANG']['CATEGORY']['EXTERNAL_LINK']; ?></option>
        </select>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_NAME']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="CATEGORY-CATEGORY_NAME_TIPS" id="category-name" name="category_name" type="text" placeholder="<?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_NAME']; ?>" value="<?= $category_name ?>" required  />
        </dt>

        <dt class="form-title" id="menu-url-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_ALIASES']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="CATEGORY-CATEGORY_ALIASES_TIPS" id="category-aliases" name="category_aliases" type="text" placeholder="<?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_ALIASES']; ?>" value="<?= $category_aliases ?>" required onkeyup="value = value.replace(/[^A-Za-z0-9]/g, '')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^A-Za-z0-9]/g,''))" />
        </dt>

        <dt class="form-title category-url" style="display: none">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['EXTERNAL_LINK']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips category-url" data="CATEGORY-EXTERNAL_LINK_TIPS" id="category-url" name="category_url" type="text" placeholder="<?php echo $GLOBALS['_LANG']['CATEGORY']['EXTERNAL_LINK']; ?>" value="<?= $category_url ?>" style="display: none" disabled="disabled"  />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_KEYWORD']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="CATEGORY-CATEGORY_KEYWORD_TIPS" id="category-keyword" name="category_keyword" type="text" placeholder="<?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_KEYWORD']; ?>" value="<?= $category_keyword ?>" />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_DESCRIPTION']; ?></label>
        </dt>
        <dt class="form-text">
        <textarea name="category_description" class="form-textarea form-input-tips" data="CATEGORY-CATEGORY_DESCRIPTION_TIPS" id="category-description"><?= $category_description ?></textarea>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['COMMON']['THUMB']; ?></label>
        </dt>
        <dt class="form-text">
        <div id="uploader">
            <input type="hidden" name="category_thumb" id="category-thumb" value="<?= $category_thumb ?>" />
            <div id="fileList" class="uploader-list">
                <?php if ($category_thumb): ?>
                    <div class="file-item thumbnail">
                        <img src="<?= $category_thumb ?>" width="200" height="200" />
                    </div>
                <?php endif; ?>
            </div>
            <div id="filePicker" data="category-thumb" size="400-400"><?= $GLOBALS['_LANG']['COMMON']['SELECT_PIC']; ?></div>
        </div>
        <script src="/Theme/Admin/PESCMS/js/upload-img.js"></script>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_NAV']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="category_nav" value="1" required <?= $category_nav == '1' ? 'checked="checked"' : '' ?> />
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['DISPLAY']; ?>
            </span>
        </label>
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="category_nav" value="0" required <?= $category_nav == '0' ? 'checked="checked"' : '' ?> />
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['HIDDEN']; ?>
            </span>
        </label>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['CATEGORY']['CATEGORY_HTML']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="category_html" value="1" required <?= $category_html == '1' ? 'checked="checked"' : '' ?> />
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['YES']; ?>
            </span>
        </label>
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="category_html" value="0" required <?= $category_html == '0' ? 'checked="checked"' : '' ?> />
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['NO']; ?>
            </span>
        </label>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" id="category-listsort" name="category_listsort" type="text" placeholder="<?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?>" value="<?= $category_listsort ?>"  />
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?php echo $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
            $(function () {

                checkModel($("#model-id").val())

                $("#model-id").on("change", function () {
                    checkModel($(this).val());
                })

                if ($("#menu-pid").val() != '-1' && $("#menu-pid").val() != '0') {
                    $("#menu-url, #menu-url-title").show().attr("required");
                } else {
                    $("#menu-url, #menu-url-title").hide().removeAttr("required");
                }

                $("#menu-pid").on("change", function () {
                    if ($("#menu-pid").val() != '-1' && $("#menu-pid").val() != '0') {
                        $("#menu-url, #menu-url-title").show().attr("required");
                    } else {
                        $("#menu-url, #menu-url-title").hide().removeAttr("required");
                    }
                })

                $("#form-submit").on("click", function () {
                    if ($("#model-id").val() == '0') {
                        $("#model-id").focus();
                        return false;
                    }
                })
            })
            /**
             * 页面加载时判断模型是否为外链
             * @param {type} modelID
             * @returns {undefined}
             */
            function checkModel(modelID) {
                if (modelID == '-1') {
                    $(".category-url").show();
                    $("#category-url").attr({"required": "required"}).removeAttr("disabled")
                } else {
                    $(".category-url").hide()
                    $("#category-url").attr({"disabled": "disabled"}).removeAttr("required")
                }
            }
</script>