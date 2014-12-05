<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?php echo $title; ?></a></h2>
</header>
<dl class="form-row">
    <ul class="design_page">
        <?php foreach ($list as $key => $value) : ?>
            <li data="<?= $value['readme']['title'] ?>" <?= $value['status'] == '1' ? '' : 'class="use"' ?>>
                <div class="img"><img src="<?= $value['thumb'] ?>" width="210" height="160" lt="default"></div>
                <div class="title" title="<?= $value['readme']['title'] ?>"><?= $value['readme']['title'] ?></div>
                <div class="descrip" title="<?= $value['readme']['description'] ?>"><?= $value['readme']['description'] ?></div>
                <div class="type">
                    <span class="version"><?= $GLOBALS['_LANG']['THEME']['VERSION']; ?><?= $value['readme']['version'] ?></span>
                    <span class="author"><?= $GLOBALS['_LANG']['THEME']['AUTHOR']; ?><?= $value['readme']['author'] ?></span>
                </div>
                <div class="type">
                    <span class="author">
                        <?= $GLOBALS['_LANG']['THEME']['THEME_URL']; ?><a href="<?= $value['readme']['url'] ?>" target="_blank"><?= $value['readme']['url'] ?></a>
                    </span>
                </div>
                <div class="type">
                    <span class="author"><?= $GLOBALS['_LANG']['THEME']['PROTOCOL_TYPE']; ?><?= $value['readme']['license'] ?></span>
                    <span class="author"><?= $GLOBALS['_LANG']['THEME']['COPYRIGHT_AGREEMENT']; ?><a href="<?= $value['license'] ?>" target="_blank"><?= $GLOBALS['_LANG']['THEME']['READ']; ?></a></span>
                </div>
                <div class="ft">
                    <span class="org"><?= $value['readme']['title'] ?></span>
                    <?php if ($value['status'] == '1'): ?>
                        <span class="fr">
                            <a class="enable_theme org" href="javascript:;"><?php echo $GLOBALS['_LANG']['COMMON']['ENABLE']; ?></a>
                        </span>
                    <?php endif; ?>
                </div>
            </li>
        <?php endforeach; ?>
    </ul>
</dl>
<script>
    $(function () {
        $(".use").on("click", function () {
            var theme = $(this).attr("data");
            $.ajax({
                url: '<?= $label->url('Admin-Theme-action', array(), true) ?>',
                data: {'theme': theme, 'method': 'PUT'},
                type: 'POST',
                dataType: 'json',
                success: function (data) {
                    var d = dialog({
                        id: 'tips',
                        content: data.info
                    });
                    d.show();
                    if (data.status == '200') {
                        setTimeout(function () {
                            location.reload();
                        }, 800)
                    }
                }
            })
        })
    })
</script>