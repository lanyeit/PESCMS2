<header>
    <h2 class="main-title"><?php echo $title; ?></h2>
</header>
<form action="<?php echo $url; ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="field_id" value="<?= $field_id ?>" />
    <input type="hidden" name="model_id" value="<?= $modelId ?>" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MODEL']['FIELD_TYPE']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <select class="input-leng3" name="field_type" id="field-type" <?= $method == 'PUT' ? 'disabled="disabled"' : '' ?>>
            <option value="-1"><?php echo $GLOBALS['_LANG']['COMMON']['PLEASE_SELECT']; ?></option>
            <?php foreach ($fieldTypeList as $key => $value) : ?>
                <option value="<?php echo $key; ?>" <?= $field_type == $key ? 'selected="selected"' : '' ?>><?php echo $value; ?></option>
            <?php endforeach; ?>
        </select>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['COMMON']['NAME']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <?php if ($method == 'POST'): ?>
            <input class="form-text-input input-leng3 form-input-tips" id="field-name" data="MODEL-FIELD_NAME_TIPS" name="field_name" type="text" placeholder="<?php echo $GLOBALS['_LANG']['COMMON']['NAME']; ?>"  required  />
        <?php else: ?>
            <input class="form-text-input input-leng3" type="text" value="<?= $field_name ?>" disabled="disabled"  />
        <?php endif; ?>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['COMMON']['DISPLAY_NAME']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="MODEL-FIELD_DISPLAY_NAME_TIPS" id="display-name" name="display_name" type="text" placeholder="<?php echo $GLOBALS['_LANG']['COMMON']['DISPLAY_NAME']; ?>" value="<?= $display_name ?>" required />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MODEL']['FIELD_OPTION']; ?></label>
        </dt>
        <dt class="form-text">
        <textarea name="field_option" class="form-textarea form-input-tips" data="MODEL-FIELD_OPTION_TIPS" id="field-option"><?php echo $label->fieldOption($field_option); ?></textarea>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MODEL']['FIELD_DEFAULT']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="MODEL-FIELD_DEFAULT_TIPS" id="field-default" name="field_default" type="text" placeholder="<?php echo $GLOBALS['_LANG']['MODEL']['FIELD_DEFAULT']; ?>" value="<?= $field_default ?>" />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MODEL']['FIELD_REQUIRE']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="field_required" value="1" required <?= $field_required == '1' ? 'checked="checked"' : '' ?> />
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['YES']; ?>
            </span>
        </label>
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="field_required" value="0" required <?= $field_required == '0' ? 'checked="checked"' : '' ?> />
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['NO']; ?>
            </span>
        </label>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MODEL']['FIELD_STATUS']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="field_status" value="1" required <?= $field_status == '1' ? 'checked="checked"' : '' ?>/>
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['ENABLE']; ?>
            </span>
        </label>
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="field_status" value="0" required <?= $field_status == '0' ? 'checked="checked"' : '' ?>/>
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['DISABLE']; ?>
            </span>
        </label>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" id="field-listsort" name="field_listsort" type="text" placeholder="<?php echo $GLOBALS['_LANG']['COMMON']['SORT']; ?>" value="<?= $field_listsort ?>"  />
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?php echo $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
    $(function () {

        $("#field-name").on("blur", function () {
            var currentDom = $(this);
            $.ajax({
                url: "<?= $label->url('Admin-Model-checkFieldName', array(), true) ?>",
                data: {'name': $(this).val(), 'model': $("input[name=model_id]").val()},
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

        $("#form-submit").on("click", function () {
            if ($("#field-type").val() == '-1') {
                $("#field-type").focus();
            }
        })
    })
</script>