<div class="am-cf am-container am-margin-top">
    <div class="pes-sidebar am-offcanvas am-margin-right" id="admin-offcanvas">
        <div class="am-offcanvas-bar admin-offcanvas-bar">
            <?php include "Process_sidebar.php"; ?>
        </div>
    </div>

    <div class="pes-content">
        <ul class="am-list am-list-border">
            <?php if (empty($list)): ?>
                <li class="am-padding am-nbfc am-text-center am-text-sm">
                    该类型下暂无进程
                </li>
            <?php else: ?>
                <?php foreach ($list as $key => $value) : ?>
                    <li class="am-padding am-nbfc">
                        <div class="am-padding-left-sm">
                            <div class="am-text-truncate ">
                                #<?= $value['task_id']; ?> [<a
                                    href="<?= $label->url('Process-index', array('p' => $value['task_project'])); ?>"><?= $project[$value['task_project']]['project_title']; ?></a>]
                                <a class="am-link-muted"
                                   href="<?= $label->url('Process-view', array('id' => $value['task_id'])); ?>"
                                   style="">
                                    <?= $value['task_title']; ?>
                                </a>
                            </div>
                            <div class="am-text-xs am-padding-bottom-xs">
                                <a href="/tm/type/<?= $value['type_id']; ?>"
                                   class="am-badge am-badge-<?= $className[$value['task_status']] ?>"><?= $status[$value['task_status']]; ?></a>
                                <a class="am-link-muted"
                                   href="<?= $value['user_id']; ?>"><?= $hero[$value['task_create_id']]['user_name']; ?></a>
                                <time datetime="<?= date('Y-m-d H:i', $value['task_createtime']); ?>"
                                      title="<?= date('Y-m-d H:i', $value['task_createtime']); ?>">
                                    发表于 <?= $label->timing($value['task_createtime']); ?></time>
                                <time datetime="<?= date('Y-m-d H:i', $value['task_expecttime']); ?>"
                                      title="<?= date('Y-m-d H:i', $value['task_expecttime']); ?>"
                                      class="am-text-primary">
                                    期望 <?= date('Y-m-d ', $value['task_expecttime']); ?>前完成
                                </time>

                                指派给 <a class="am-link-muted"
                                       href="<?= $value['user_id']; ?>"><?= $value['user_name']; ?></a>
                                <?php if ($value['task_status'] > 0): ?>
                                    <time datetime="<?= date('Y-m-d H:i', $value['task_estimatetime']); ?>"
                                          title="<?= date('Y-m-d H:i', $value['task_estimatetime']); ?>"
                                          class="am-text-success">
                                        预计在 <?= date('Y-m-d ', $value['task_estimatetime']); ?>完成
                                    </time>
                                <?php endif; ?>
                            </div>
                            <?php if ($value['task_status'] > 0): ?>
                                <div
                                    class="am-progress am-margin-bottom-0 am-progress-xs am-active am-progress-striped am-text-xs">
                                    <?= $label->taskProgress($value); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </li>
                <?php endforeach; ?>
                <li>
                    <ul class="am-pagination am-pagination-right am-margin-right-sm am-text-xs">
                        <?= $page; ?>
                    </ul>
                </li>
            <?php endif; ?>
        </ul>
    </div>
</div>
