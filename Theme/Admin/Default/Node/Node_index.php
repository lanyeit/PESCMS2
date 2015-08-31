<!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf">
            <strong class="am-text-primary am-text-lg"><?= $title; ?></strong>
        </div>
    </div>

    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-6">
            <div class="am-btn-toolbar">
                <div class="am-btn-group am-btn-group-xs">
                    <a href="<?= $label->url(GROUP . '-' . MODULE . '-action'); ?>" class="am-btn am-btn-default"><span class="am-icon-plus"></span> 新增</a>
                </div>
            </div>
        </div>
        <div class="am-u-sm-12">
            <?php if (empty($node)): ?>
                <div class="am-alert am-alert-secondary am-margin-top am-margin-bottom am-text-center" data-am-alert>
                    <p>本页面没有数据 :-(</p>
                </div>
            <?php else: ?>
                <table class="am-table am-table-striped am-table-hover table-main">
                    <thead>
                        <tr>
                            <th style="width: 200px">控制器</th>
                            <th>方法</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($node as $topkey => $topValu) : ?>
                            <tr>
                                <td>
                                    <?= $topValu['top_title']; ?>
                                    <a href="<?= $label->url(GROUP . '-Node-action', array('id' => $topValu["node_id"])); ?>" class="am-badge am-badge-primary">编辑</a>
                                    <a href="<?= $label->url(GROUP . '-Node-action', array('id' => $topValu["node_id"], 'method' => 'DELETE')); ?>" onclick="return confirm('确定删除吗?')" class="am-badge am-badge-danger">删除</a>
                                </td>
                                <td>
                                    <?php if (!empty($topValu['node_child'])): ?>
                                        <?php foreach ($topValu['node_child'] as $key => $value) : ?>
                                            <span class="am-margin-right-lg">
                                                <?= $value['node_title']; ?>
                                                <a href="<?= $label->url(GROUP . '-Node-action', array('id' => $value["node_id"])); ?>" class="am-badge am-badge-primary">编辑</a>
                                                <a href="<?= $label->url(GROUP . '-Node-action', array('id' => $value["node_id"], 'method' => 'DELETE')); ?>" onclick="return confirm('确定删除吗?')" class="am-badge am-badge-danger">删除</a>
                                            </span>
                                        <?php endforeach; ?>
                                    <?php endif; ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php endif; ?>
        </div>

    </div>
</div>
<script>
    $(function () {
        var menu = eval('(<?= json_encode(explode(',', $user_group_menu)) ?>)');
        $('input[name="menu[]"]').each(function () {
            var length = menu.length;
            for (var i = 0; i < length; i++) {
                if (menu[i] == $(this).val()) {
                    $(this).attr("checked", "checked")
                }
            }
        })
    })
</script>
<!-- content end -->