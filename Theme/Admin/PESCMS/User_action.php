<header>
    <h2 class="main-title"><?= $title; ?></h2>
</header>
<form action="<?= $url; ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="user_id" value="<?= $user_id ?>" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['USER']['USER_GROUP']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <select class="input-leng3" name="user_group_id" id="user-group-id">
            <option value="-1"><?= $GLOBALS['_LANG']['COMMON']['PLEASE_SELECT']; ?></option>
            <?php foreach ($groupList as $key => $value) : ?>
                <option value="<?= $value['user_group_id']; ?>" <?= $user_group_id == $value['user_group_id'] ? 'selected="selected"' : '' ?>><?= $value['user_group_name']; ?></option>
            <?php endforeach; ?>
        </select>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['USER']['USER_ACCOUNT']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" name="user_account" type="text" placeholder="<?= $GLOBALS['_LANG']['USER']['USER_ACCOUNT']; ?>" value="<?= $user_account ?>" required  />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['USER']['USER_PASSWORD']; ?><?=$method == 'POST' ? '<span class="red-tips">*</span>' : ''?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="USER-USER_PASSWORD_TIPS" id="user-password" name="user_password" type="text" placeholder="<?= $GLOBALS['_LANG']['USER']['USER_PASSWORD']; ?>" value="" <?=$method == 'POST' ? 'required' : ''?> />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['USER']['USER_CONFIRM_PASSWORD']; ?><?=$method == 'POST' ? '<span class="red-tips">*</span>' : ''?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="USER-USER_PASSWORD_TIPS" id="confirm-password" name="confirm_password" type="text" placeholder="<?= $GLOBALS['_LANG']['USER']['USER_CONFIRM_PASSWORD']; ?>" value="" <?=$method == 'POST' ? 'required' : ''?> />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['USER']['USER_EMAIL']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" name="user_mail" type="text" placeholder="<?= $GLOBALS['_LANG']['USER']['USER_EMAIL']; ?>" value="<?= $user_mail ?>" required  />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['USER']['USER_NAME']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3"  name="user_name" type="text" placeholder="<?= $GLOBALS['_LANG']['USER']['USER_NAME']; ?>" value="<?= $user_name ?>" required />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['COMMON']['STATUS']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="user_status" value="1" required <?= $user_status == '1' ? 'checked="checked"' : '' ?>/>
            <span>
                <?php echo $GLOBALS['_LANG']['COMMON']['ENABLE']; ?>
            </span>
        </label>
        <label class="form-radio-label">
            <input class="form-radio" type="radio" name="user_status" value="0" required <?= $user_status == '0' ? 'checked="checked"' : '' ?>/>
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

        $("#form-submit").on("click", function () {
            if ($("#user-group-id").val() == '-1') {
                $("#user-group-id").focus();
                return false;
            }
        })
    })
</script>