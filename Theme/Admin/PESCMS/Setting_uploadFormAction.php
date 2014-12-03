<header>
    <?php include 'Setting_nav.php'; ?>
</header>
<form action="" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="PUT" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['SETTING']['UPLOAD_IMG_FORMAT']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" name="key[]" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['UPLOAD_IMG_FORMAT']; ?>" value="<?= $list['upload_img'] ?>"  required />
        </dt>
        
        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['SETTING']['UPLOAD_FILE_FORMAT']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" name="key[]" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['UPLOAD_FILE_FORMAT']; ?>" value="<?= $list['upload_file'] ?>"  required />
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?php echo $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>