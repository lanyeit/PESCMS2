<header>
    <h2 class="main-title"><?php echo $title; ?></h2>
</header>
<form action="<?php echo $url; ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="model_id" value="<?= $modelId ?>" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MODEL']['MODEL_NAME']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips capitalize" data="MODEL-MODEL_NAME_TIPS" id="model-name" name="model_name" type="text" placeholder="<?php echo $GLOBALS['_LANG']['MODEL']['MODEL_NAME']; ?>" value="<?= $model_name ?>" required onkeyup="value = value.replace(/[^A-Za-z0-9_]/g, '')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^A-Za-z0-9_]/g,''))" <?= $method == 'POST' ? '' : 'disabled="disabled"'?> />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['COMMON']['DISPLAY_NAME']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="MODEL-MODEL_DISPLAY_NAME_TIPS" id="display-name" name="display_name" type="text" placeholder="<?php echo $GLOBALS['_LANG']['COMMON']['DISPLAY_NAME']; ?>" value="<?= $display_name ?>" required />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MODEL']['IS_SEARCH']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="is_search" value="1" required <?= $is_search == '1' ? 'checked="checked"' : '' ?> />
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['YES']; ?>
            </span>
        </label>
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="is_search" value="0" required <?= $is_search == '0' ? 'checked="checked"' : '' ?> />
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['NO']; ?>
            </span>
        </label>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MODEL']['MODEL_STATUS']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="status" value="1" required <?= $status == '1' ? 'checked="checked"' : '' ?>/>
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['ENABLE']; ?>
            </span>
        </label>
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="status" value="0" required <?= $status == '0' ? 'checked="checked"' : '' ?>/>
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['DISABLE']; ?>
            </span>
        </label>
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?php echo $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
    $(function () {

        $("#model-name").on("blur", function () {
            var currentDom = $(this);
            if (currentDom.val() == "") {
                return false;
            }
            $.ajax({
                url: "<?= $label->url('Admin-Model-checkModelValue') ?>",
                data: {'name': $(this).val(), 'field': 'model_name'},
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                    if (data.status == '0') {
                        currentDom.css("border", "1px solid #FF001F").focus();
                    } else if (data.status == '200') {
                        currentDom.css("border", "1px solid #08A327");
                    } else {
                        alert(lang['COMMON']['UNKNOW_ERROR']);
                    }
                }
            })

        })
    })
</script>