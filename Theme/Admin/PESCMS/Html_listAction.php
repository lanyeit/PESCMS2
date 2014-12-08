<header>
    <?php include 'Html_nav.php'; ?>
</header>
<form action="" method="post" id="check-form-enter">
    <input type="hidden" name="method" value="PUT" />
    <dl class="form-row">
        <dt class="form-text">
        <input class="blue-button" type="submit" id="form-submit" value="<?= $GLOBALS['_LANG']['HTML']['CREATE_LIST']; ?>"  />
        </dt>
    </dl>
</form>