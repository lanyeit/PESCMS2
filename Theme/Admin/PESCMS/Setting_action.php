<header>
    <?php include 'Setting_nav.php'; ?>
</header>
<form action="<?= $label->url('Admin-Setting-action'); ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="PUT" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['SETTING']['SITE_STATUS']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="sitestatus" value="1" required <?= $sitestatus == '1' ? 'checked="checked"' : '' ?> required/>
            <span>
                <?php echo $GLOBALS['_LANG']['SETTING']['OPEN']; ?>
            </span>
        </label>
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="sitestatus" value="0" required <?= $sitestatus == '0' ? 'checked="checked"' : '' ?> required/>
            <span>
                <?php echo $GLOBALS['_LANG']['SETTING']['CLOSE']; ?>
            </span>
        </label>
        </dt>

        <dt class="form-title close">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['CLOSE_REASON']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text close">
        <textarea name="closeReason" class="form-textarea" required><?= $closeReason ?></textarea>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['SITE_TITLE']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" name="sitetitle" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['SITE_TITLE']; ?>" value="<?= $sitetitle ?>"  required />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['SITE_URL']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" name="siteurl" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['SITE_URL']; ?>" value="<?= $siteurl ?>" required  />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['SITE_LOGO']; ?></label>
        </dt>
        <dt class="form-text">
        <div id="uploader">
            <input type="hidden" name="logo" id="logo" value="<?= $logo ?>" />
            <div id="fileList" class="uploader-list">
                <?php if ($logo): ?>
                    <div class="file-item thumbnail">
                        <img src="<?= $logo ?>" width="200" height="200" />
                    </div>
                <?php endif; ?>
            </div>
            <div id="filePicker" data="logo" size="400-400"><?= $GLOBALS['_LANG']['COMMON']['SELECT_PIC']; ?></div>
        </div>
        <script src="/Theme/Admin/PESCMS/js/upload-img.js"></script>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['SITE_KEYWORD']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" name="seo_keyword" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['SITE_KEYWORD']; ?>" value="<?= $seo_keyword ?>"  />

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['SITE_DESCRIPTION']; ?></label>
        </dt>
        <dt class="form-text">
        <textarea name="seo_description" class="form-textarea"><?= $seo_description ?></textarea>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['SITE_FOOTER_CODE']; ?></label>
        </dt>
        <dt class="form-text">
        <textarea name="footerCode" class="form-textarea"><?= $footerCode ?></textarea>
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?php echo $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
    $(function () {
        if ($("input[name=sitestatus]").eq(0).attr("checked") == "checked") {
            $(".close").hide();
        }
        $("input[name=sitestatus]").on("change", function () {
            if ($(this).val() == '0') {
                $("textarea[name=closeReason]").attr("required", "required")
                $(".close").show();
            } else {
                $("textarea[name=closeReason]").removeAttr("required");
                $(".close").hide();
            }
        })
    })
</script>