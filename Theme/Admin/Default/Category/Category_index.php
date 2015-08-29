<!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg"><?= $title; ?></strong> / <small>列表</small></div>
    </div>

    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-6">
            <div class="am-btn-toolbar">
                <div class="am-btn-group am-btn-group-xs">
                    <a href="<?= $label->url(GROUP.'-Category-action', array('back_url' => urlencode($_SERVER['REQUEST_URI']))); ?>" class="am-btn am-btn-default"><span class="am-icon-plus"></span> 新增</a>
                </div>
            </div>
        </div>
    </div>

    <div class="am-g">
        <div class="am-u-sm-12">
            <form class="am-form" action="<?= $label->url('Manage-Category-listsort'); ?>" method="POST">
                <input type="hidden" name="method" value="PUT" />
                <table class="am-table am-table-striped am-table-hover table-main">
                    <thead>
                        <tr>
                            <th class="table-sort">排序</th>
                            <th class="table-title">名称</th>
                            <th class="table-title">模型</th>
                            <th class="table-title">显示</th>
                            <th class="table-set">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?=$tree?>
                    </tbody>
                </table>
                <div class="am-margin">
                    <button type="submit" class="am-btn am-btn-primary am-btn-xs">排序</button>
                </div>
            </form>
        </div>

    </div>
</div>
<!-- content end -->