<header>
    <?php include 'Setting_nav.php'; ?>
</header>
<form action="" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="PUT" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['SETTING']['EXPAND_LIST']; ?></label>
        </dt>
        <dt class="form-text empty_expand">
        <?php echo $GLOBALS['_LANG']['SETTING']['KEY']; ?>: <input class="form-text-input input-leng3" name="key[]" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['KEY']; ?>" value="<?= $sitetitle ?>"  required />
        <?php echo $GLOBALS['_LANG']['SETTING']['CONTENT_VALUE']; ?>: <input class="form-text-input input-leng3" name="value[]" type="text" placeholder="<?= $GLOBALS['_LANG']['SETTING']['CONTENT_VALUE']; ?>" value="<?= $sitetitle ?>"  required />
        <a href="javascript:;" class="white-button addexpand"><?php echo $GLOBALS['_LANG']['SETTING']['APPEND']; ?></a>
        <a href="javascript:;" class="red-button delete"><?php echo $GLOBALS['_LANG']['COMMON']['DELETE']; ?></a>
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?php echo $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
    $(function () {
        $(".form-row").on('click', ".addexpand", function () {
            $(this).parent().after($(".empty_expand").eq(0).clone());
            $(".empty_expand").each(function (index) {
                if (index > 0) {
                    $(".empty_expand").eq(index).removeClass().attr("class", "form-text empty_expand" + index);
                    $(".empty_expand input").val("");
                }

            })
        })
        $(".form-row").on('click', ".delete", function () {
            $(this).parent().remove();
        })
    })
</script>