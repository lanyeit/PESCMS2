<?php include 'header.php'; ?>
<?php include 'Topbar.php'; ?>
<?php include $file; ?>
    <a class="am-icon-btn am-icon-th-list am-show-sm-only admin-menu"
       data-am-offcanvas="{target: '#admin-offcanvas'}"></a>
    <footer class="my-footer">
        <p>PESCMS<br>
            <small>© Copyright 2015-<?= date('Y') ?>. by the PESCMS</small>
        </p>
    </footer>
<?php include 'footer.php'; ?>