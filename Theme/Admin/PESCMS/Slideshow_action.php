<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $title; ?></a></h2>
</header>
<form action="<?= $url; ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="id" value="<?= $id ?>" />
    <input type="hidden" name="back_url" value="<?= $_SERVER['HTTP_REFERER']; ?>" />
    <input type="hidden" name="type_id" value="<?= $_GET['type_id'] ?>" />
    <dl class="form-row">

        <?php foreach ($field as $key => $value) : ?>
            <?php if ($value['field_name'] == 'type_id') continue; ?>
            <dt class="form-title">
            <label class="form-title-label">
                <?= $value['display_name'] ?>
                <?php if ($value['field_required'] == '1'): ?>
                    <span class="red-tips">*</span>
                <?php endif; ?>
            </label>
            </dt>
            <dt class="form-text">
            <?= $form->formList($value); ?>
            </dt>
        <?php endforeach; ?>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?= $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>