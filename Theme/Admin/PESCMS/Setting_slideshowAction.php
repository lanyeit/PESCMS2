<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $title; ?></a></h2>
</header>
<form action="<?= $url; ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="id" value="<?= $id ?>" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['SLIDESHOW']['SLIDESHOW_TYPE_TITLE']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" name="slideshow_type_name" type="text" placeholder="<?= $GLOBALS['_LANG']['SLIDESHOW']['SLIDESHOW_TYPE_TITLE']; ?>" value="<?= $slideshow_type_name ?>"  required />
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?= $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>