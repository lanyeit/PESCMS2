<?php include THEME_PATH . "/Content/Content_index_header.php"; ?>

    <div class="am-btn-toolbar">
        <div class="am-btn-group am-btn-group-xs">
            <a href="<?= $label->url(GROUP . '-' . MODULE . '-action', ['back_url' => base64_encode($_SERVER['REQUEST_URI'])]); ?>"
               class="am-btn am-btn-default"><span class="am-icon-plus"></span> 新增</a>
        </div>
    </div>

    <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed"/>
    <table class="am-table am-table-striped am-table-hover table-main">
        <tr>
            <th class="table-title">名称</th>
            <th class="table-set">操作</th>
        </tr>
        <?php if (!empty($node)): ?>
            <?php foreach ($node as $topkey => $topValue) : ?>
                <tr>
                    <td class="am-text-middle"><i
                            class="<?= $topValue['node_icon'] ?>"></i> <?= $topValue['node_title']; ?></td>
                    <td class="am-text-middle">
                        <div class="am-btn-toolbar">
                            <div class="am-btn-group am-btn-group-xs">
                                <a class="am-btn am-btn-secondary"
                                   href="<?= $label->url(GROUP . '-' . MODULE . '-action', array('id' => $topValue["node_id"], 'back_url' => base64_encode($_SERVER['REQUEST_URI']))) ?>"><span
                                        class="am-icon-pencil-square-o"></span> 编辑</a>
                                <a class="am-btn am-btn-danger"
                                   href="<?= $label->url(GROUP . '-' . MODULE . '-action', array('id' => $topValue["node_id"], 'method' => 'DELETE', 'back_url' => base64_encode($_SERVER['REQUEST_URI']))); ?>"
                                   onclick="return confirm('确定删除吗?')"><span class="am-icon-trash-o"></span> 删除</a>
                            </div>
                        </div>
                    </td>
                </tr>
                <?php if (!empty($topValue['node_child'])): ?>
                    <?php foreach ($topValue['node_child'] as $key => $value) : ?>
                        <tr>
                            <td class="am-text-middle">
                                <span class="plus_icon plus_end_icon"></span><i
                                    class="<?= $value['node_icon'] ?>"></i> <?= $value['node_title']; ?>
                            </td>
                            <td class="am-text-middle">
                                <div class="am-btn-toolbar">
                                    <div class="am-btn-group am-btn-group-xs">
                                        <a class="am-btn am-btn-secondary"
                                           href="<?= $label->url(GROUP . '-' . MODULE . '-action', array('id' => $value["node_id"], 'back_url' => base64_encode($_SERVER['REQUEST_URI']))) ?>"><span
                                                class="am-icon-pencil-square-o"></span> 编辑</a>
                                        <a class="am-btn am-btn-danger"
                                           href="<?= $label->url(GROUP . '-' . MODULE . '-action', array('id' => $value["node_id"], 'method' => 'DELETE', 'back_url' => base64_encode($_SERVER['REQUEST_URI']))); ?>"
                                           onclick="return confirm('确定删除吗?')"><span class="am-icon-trash-o"></span>
                                            删除</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            <?php endforeach; ?>
        <?php endif; ?>
    </table>
<?php include THEME_PATH . "/Content/Content_index_footer.php"; ?>