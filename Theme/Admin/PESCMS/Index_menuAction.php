<header>
    <h2 class="main-title"><a href="javascript:;" class="current"><?= $title; ?></a></h2>
</header>
<form action="<?= $url; ?>" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="menu_id" value="<?= $menu_id ?>" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['MENU']['MENU_TYPE']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <select class="input-leng3" name="menu_pid" id="menu-pid">
            <option value="-1"><?= $GLOBALS['_LANG']['COMMON']['PLEASE_SELECT']; ?></option>
            <option value="0"><?= $GLOBALS['_LANG']['MENU']['TOP_MENU']; ?></option>
            <?php foreach ($topMenu as $key => $value) : ?>
                <option value="<?= $value['menu_id']; ?>" <?= $menu_pid == $value['menu_id'] ? 'selected="selected"' : '' ?>><?= $GLOBALS['_LANG']['MENU_LIST'][$value['menu_name']]; ?></option>
            <?php endforeach; ?>
        </select>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['MENU']['MENU_NAME']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="MENU-MENU_NAME_TIPS" id="menu-name" name="menu_name" type="text" placeholder="<?= $GLOBALS['_LANG']['MENU']['MENU_NAME']; ?>" value="<?= $menu_name ?>" required  />
        </dt>

        <dt class="form-title" id="menu-url-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['MENU']['MENU_URL']; ?><span class="red-tips">*</span></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3 form-input-tips" data="MENU-MENU_URL_TIPS" id="menu-url" name="menu_url" type="text" placeholder="<?= $GLOBALS['_LANG']['MENU']['MENU_URL']; ?>" value="<?= $menu_url ?>" required />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?= $GLOBALS['_LANG']['COMMON']['SORT']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" id="menu-listsort" name="menu_listsort" type="text" placeholder="<?= $GLOBALS['_LANG']['COMMON']['SORT']; ?>" value="<?= $menu_listsort ?>"  />
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?= $GLOBALS['_LANG']['COMMON']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
    $(function () {

        if ($("#menu-pid").val() != '-1' && $("#menu-pid").val() != '0') {
            $("#menu-url, #menu-url-title").show().attr("required");
        } else {
            $("#menu-url, #menu-url-title").hide().removeAttr("required");
        }

        $("#menu-pid").on("change", function () {
            if ($("#menu-pid").val() != '-1' && $("#menu-pid").val() != '0') {
                $("#menu-url, #menu-url-title").show().attr("required");
            } else {
                $("#menu-url, #menu-url-title").hide().removeAttr("required");
            }
        })
        
        $("#form-submit").on("click", function(){
            if($("#menu-pid").val() == '-1'){
                $("#menu-pid").focus();
                return false;
            }
        })
    })
</script>