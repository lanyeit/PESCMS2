<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $title; ?></a></h2>
</header>
<form action="<?= $url; ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="id" value="<?= $id ?>" />
    <dl class="form-row">

        <?php foreach ($field as $key => $value) : ?>
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
<script>
    $(function () {
        $("#form-submit").on("click", function () {
            for (var key in checkEditor) {
                if (UM.getEditor(checkEditor[key]).hasContents() == false) {
                    UM.getEditor(checkEditor[key]).focus(true)
                    dialog({
                        title: lang['COMMON']['NEWS_TIPS'],
                        content: checkEditorName[key] + lang['COMMON']['REQUIRED']
                    }).showModal()
                    return false;
                }
            }
        })
    })
    function removeUploadFile(id){
    var d = dialog({
        content: lang['COMMON']['SURE_DELETE'],
        okValue: lang['COMMON']['OK'],
        ok: function () {
            $("#"+id).remove();
            return true;
        },
        cancelValue: lang['COMMON']['CANCEL'],
        cancel: function () {
        }
    });
    d.showModal();
    return false;
    }
</script>
<link href="/Expand/Form/theme/umeditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
<script type="text/javascript" charset="utf-8" src="/Expand/Form/theme/umeditor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/Expand/Form/theme/umeditor/umeditor.min.js"></script>
<script type="text/javascript" src="/Expand/Form/theme/umeditor/lang/zh-cn/zh-cn.js"></script>