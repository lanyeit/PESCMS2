<header>
    <h2 class="main-title"><?php echo $title; ?></h2>
</header>
<form action="action" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="<?= $method ?>" />
    <input type="hidden" name="menu_id" value="<?= $menu_id ?>" />
    <dl class="form-row">

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MENU_TYPE']; ?></label>
        </dt>
        <dt class="form-text">
        <select class="input-leng3" name="menu_pid" id="menu-pid">
            <option value="-1"><?php echo $GLOBALS['_LANG']['PLEASE_SELECT']; ?></option>
            <option value="0"><?php echo $GLOBALS['_LANG']['TOP_MENU']; ?></option>
            <?php foreach ($topMenu as $key => $value) : ?>
                <option value="<?php echo $value['menu_id']; ?>" <?= $menu_pid == $value['menu_id'] ? 'selected="selected"' : '' ?>><?php echo $GLOBALS['_LANG']['MENU'][$value['menu_name']]; ?></option>
            <?php endforeach; ?>
        </select>
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MENU_NAME']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" id="menu-name" name="menu_name" type="text" placeholder="<?php echo $GLOBALS['_LANG']['MENU_NAME']; ?>" value="<?= $menu_name ?>" required  />
        </dt>

        <dt class="form-title" id="menu-url-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['MENU_URL']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" id="menu-url" name="menu_url" type="text" placeholder="<?php echo $GLOBALS['_LANG']['MENU_URL']; ?>" value="<?= $menu_url ?>" required />
        </dt>

        <dt class="form-title">
        <label class="form-title-label"><?php echo $GLOBALS['_LANG']['SORT']; ?></label>
        </dt>
        <dt class="form-text">
        <input class="form-text-input input-leng3" id="menu-listsort" name="menu_listsort" type="text" placeholder="<?php echo $GLOBALS['_LANG']['SORT']; ?>" value="<?= $menu_listsort ?>"  />
        </dt>

        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?php echo $GLOBALS['_LANG']['SUBMIT']; ?>"  />
        </dt>
    </dl>
</form>
<script>
    $(function () {
        $("#menu-name").focus(function () {
            this.d = bubbleTips('MENU_NAME_TIPS');
            this.d.show(document.getElementById("menu-name"))
        }).blur(function () {
            this.d.close().remove();
        })

        $("#menu-url").focus(function () {
            this.d = bubbleTips('MENU_URL_TIPS');
            this.d.show(document.getElementById("menu-url"));
        }).blur(function () {
            this.d.close().remove();
        })

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
            }
        })
    })
</script>