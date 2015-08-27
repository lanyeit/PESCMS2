<!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg"><?= $title; ?></strong> / <small>列表</small></div>
    </div>

    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-6">
            <div class="am-btn-toolbar">
                <div class="am-btn-group am-btn-group-xs">
                    <a href="<?= $label->url(GROUP . '-Index-menuAction'); ?>" class="am-btn am-btn-default"><span class="am-icon-plus"></span> 新增</a>
                </div>
            </div>
        </div>
        <div class="am-u-sm-12 am-u-md-3">
            <div class="am-input-group am-input-group-sm">
                <input type="text" class="am-form-field">
                <span class="am-input-group-btn">
                    <button class="am-btn am-btn-default" type="button">搜索</button>
                </span>
            </div>
        </div>
    </div>

    <div class="am-g">
        <div class="am-u-sm-12">
            <form class="am-form" action="<?= $label->url(GROUP . '-Menu-listsort'); ?>" method="POST">
                <input type="hidden" name="method" value="PUT" />
                <table class="am-table am-table-striped am-table-hover table-main">
                    <thead>
                        <tr>
                            <th class="table-sort">排序</th>
                            <th class="table-id">ID</th>
                            <th class="table-title">名称</th>
                            <th class="table-type">链接参数</th>
                            <th class="table-set">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($menu as $topkey => $topValu) : ?>
                            <tr>
                                <td>
                                    <input type="text" name="id[<?= $topValu['menu_id']; ?>]" value="<?= $topValu['menu_listsort']; ?>" >
                                </td>
                                <td><?= $topValu['menu_id']; ?></td>
                                <td><a href="#"><?= $topValu['menu_name']; ?></a></td>
                                <td></td>
                                <td>
                                    <div class="am-btn-toolbar">
                                        <div class="am-btn-group am-btn-group-xs">
                                            <a class="am-btn am-btn-secondary" href="<?= $label->url(GROUP . '-Index-menuAction', array('id' => $topValu['menu_id'])); ?>"><span class="am-icon-pencil-square-o"></span> 编辑</a>
                                            <a class="am-btn am-btn-danger" href="<?= $label->url(GROUP . '-Index-menuAction', array('id' => $topValu['menu_id'], 'method' => 'DELETE')); ?>" onclick="return confirm('确定删除吗?')"><span class="am-icon-trash-o"></span> 删除</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <?php if (!empty($topValu['menu_child'])): ?>
                                <?php foreach ($topValu['menu_child'] as $key => $value) : ?>
                                    <tr>
                                        <td>
                                            <input type="text" name="id[<?= $value['menu_id']; ?>]" value="<?= $value['menu_listsort']; ?>" >
                                        </td>
                                        <td><?= $value['menu_id']; ?></td>
                                        <td><a href="#" class="am-padding-left-lg"><?= $value['menu_name']; ?></a></td>
                                        <td><?= $value['menu_url']; ?></td>
                                        <td>
                                            <div class="am-btn-toolbar">
                                                <div class="am-btn-group am-btn-group-xs">
                                                    <a class="am-btn am-btn-secondary" href="<?= $label->url(GROUP . '-Index-menuAction', array('id' => $value['menu_id'])); ?>"><span class="am-icon-pencil-square-o"></span> 编辑</a>
                                                    <a class="am-btn am-btn-danger" href="<?= $label->url(GROUP . '-Index-menuAction', array('id' => $value['menu_id'], 'method' => 'DELETE')); ?>" onclick="return confirm('确定删除吗?')"><span class="am-icon-trash-o"></span> 删除</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        <?php endforeach; ?>

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