
<header>
    <h2 class="main-title">后台菜单</h2>
    <div class="main-add">
        <a href="javascript:;" class="blue-button" >添加</a>
    </div>
</header>

<div class="list-table">
    <table width="100%">
        <tr>
            <th>排序</th>
            <th>ID</th>
            <th>名称</th>
            <th>链接参数</th>
            <th>操作</th>
        </tr>
        <?php foreach ($menu as $topkey => $topValu) : ?>
            <tr>
                <td><input type="text" class="input-leng1" value="<?php echo $topValu['listsort']; ?>" /></td>
                <td><?php echo $topValu['id']; ?></td>
                <td><?php echo $GLOBALS['_LANG']['MENU'][$topValu['name']]; ?></td>
                <td></td>
                <td>
                    <a href="" class="blue-button">编辑</a>
                    <a href="" class="blue-button">删除</a>
                </td>
            </tr>
            <?php if (!empty($topValu['child'])): ?>
                <?php foreach ($topValu['child'] as $key => $value) : ?>
                    <tr>
                        <td><input type="text" class="input-leng1" value="<?php echo $value['listsort']; ?>" /></td>
                        <td><?php echo $value['id']; ?></td>
                        <td><?php echo $GLOBALS['_LANG']['MENU'][$value['name']]; ?></td>
                        <td><?php echo $value['url']; ?></td>
                        <td>
                            <a href="" class="blue-button">编辑</a>
                            <a href="" class="blue-button">删除</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php endif; ?>
        <?php endforeach; ?>
    </table>
</div>

<div class="btn_wrap">
    <div class="btn_wrap_pd">
        <button type="submit" class="blue-button">排序</button>
    </div>
</div>
