<div class="content-view">
    <div class="page-view">
        <div class="formWrap">
            <div id="respond">
                <h3 id="reply-title">联系我们/反馈信息</h3>

                <form method="POST" action="" id="comment-form">

                    <div class="comment-input-wrap">
                        <input type="text"  name="title" class="requiredField" aria-required="true" placeholder="主题">
                    </div>

                    <div class="comment-input-wrap">
                        <input type="text"  name="name" class="requiredField email" placeholder="姓名">
                    </div>

                    <div class="comment-input-wrap">
                        <input type="text"  name="mail" aria-required="true" placeholder="邮箱地址">
                    </div>

                    <div class="comment-textarea-wrap">
                        <textarea name="content" placeholder="详细内容"  aria-required="true" class="requiredField"></textarea>
                    </div>

                    <div class="clear"></div><div class="comment-input-math"><input type="text" name="verify" class="requiredField math" placeholder="验证码"><p class="mathtext"><img class="verify-img" src="<?= $label->url('page-verify', array('s' => uniqid())); ?>"/></p></div><div class="clear"></div>

                    <p><input name="submit" type="submit" id="submitbutton" value="Submit" class="button globalgrey"></p>

                </form>
            </div>
        </div>
    </div>
</div>
<div class="clear"></div>
<script>
    $(function () {
        $("#submitbutton").on("click", function () {
            var require = false;
            $("#respond input").each(function (index) {
                if ($(this).val() == '' && require == false) {
                    $("#respond input").eq(index).focus();
                    require = true;
                }
            })
            if (require == true) {
                return false;
            }
        })

    })

</script>