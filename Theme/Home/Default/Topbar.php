<header class="am-topbar am-margin-bottom-0">
    <div class="am-container">
        <h1 class="am-topbar-brand">
            <a href="/" class="am-text-ir">PESCMS</a>
        </h1>

        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
                data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span
                class="am-icon-bars"></span></button>

        <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
            <ul class="am-nav am-nav-pills am-topbar-nav">
                <li class="<?= MODULE == 'Index' && ACTION == 'index' ? 'am-active' : '' ?>"><a href="/">首页</a></li>
                <?php foreach ($headerMenu as $key => $value) : ?>
                    <li class="<?= $value['category_id'] == $catid || $value['category_id'] == $sidebarTopCat['category_id'] ? 'am-active' : '' ?>">
                        <a href="<?= $value['category_url']; ?>"><?= $value['category_name']; ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</header>