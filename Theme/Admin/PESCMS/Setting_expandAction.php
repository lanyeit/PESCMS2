<header>
    <?php include 'Setting_nav.php'; ?>
</header>
<form action="" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="PUT" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SETTING']['EXPAND_LIST']; ?></label>
        </dt>
        <?php foreach ($list as $key => $value): ?>
            <dt class="form-text empty_expand">
            <?= $GLOBALS['_LANG']['SETTING']['KEY']; ?>: <input class="form-text-input input-leng3" name="key[]" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['KEY']; ?>" value="<?= $key ?>"  required />
            <?= $GLOBALS['_LANG']['SETTING']['CONTENT_VALUE']; ?>: <input class="form-text-input input-leng3" name="value[]" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['CONTENT_VALUE']; ?>" value="<?= $value ?>"  required />
            <a href="javascript:;" class="white-button addexpand"><?= $GLOBALS['_LANG']['SETTING']['APPEND']; ?></a>
            <a href="javascript:;" class="red-button delete"><?= $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
            </dt>
        <?php endforeach; ?>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?= $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
    $(function () {
        $(".form-row").on('click', ".addexpand", function () {
            var cloneObj = $(this).parent().clone();
            $(this).parent().after(cloneObj);
            cloneObj.find("input").val("");
        })
        $(".form-row").on('click', ".delete", function () {
            $(this).parent().remove();
        })
    })
</script>