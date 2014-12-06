<header>
    <?php include 'Setting_nav.php'; ?>
</header>
<form action="" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="PUT" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['HIDE_INDEX']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <select required name="index" class="input-leng2">
            <option value="0" <?= $index == '0' ? 'selected="selected"' : '' ?>><?= $GLOBALS['_LANG']['COMMON']['DISPLAY']; ?></option>
            <option value="1" <?= $index == '1' ? 'selected="selected"' : '' ?>><?= $GLOBALS['_LANG']['COMMON']['HIDDEN']; ?></option>
        </select>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['URL_MODEL']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <select required name="urlModel" id="urlModel" class="input-leng2">
            <option value="1" <?= $urlModel == '1' ? 'selected="selected"' : '' ?>><?= $GLOBALS['_LANG']['SETTING']['TRADITION_MODE']; ?></option>
            <option value="2" <?= $urlModel == '2' ? 'selected="selected"' : '' ?>><?= $GLOBALS['_LANG']['SETTING']['BARS_MODE']; ?></option>
            <option value="3" <?= $urlModel == '3' ? 'selected="selected"' : '' ?>><?= $GLOBALS['_LANG']['SETTING']['PATH_MODE']; ?></option>
        </select>
        <p class="url-tips"></p>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['HIDE_HTML']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <select required name="suffix" class="input-leng2">
            <option value="0" <?= $suffix == '0' ? 'selected="selected"' : '' ?>><?= $GLOBALS['_LANG']['COMMON']['HIDDEN']; ?></option>
            <option value="1" <?= $suffix == '1' ? 'selected="selected"' : '' ?>><?= $GLOBALS['_LANG']['COMMON']['DISPLAY']; ?></option>
        </select>
        <p><?= $GLOBALS['_LANG']['SETTING']['URL_MODEL_HTML_TIPS']; ?></p>
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?= $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
    $(function () {
        urlModelTips($("#urlModel").val())
        $("#urlModel").on("change", function () {
            urlModelTips($(this).val())
        })
    })
    function urlModelTips(value) {
        switch (value) {
            case '2':
                $(".url-tips").html(lang['SETTING']['BARS_MODE_TIPS'])
                break;
            case '3':
                $(".url-tips").html(lang['SETTING']['PATH_MODE_TIPS'])
                break;
            case '1':
            default:
                $(".url-tips").html(lang['SETTING']['TRADITION_MODE_TIPS'])
                break;
        }
    }
</script>