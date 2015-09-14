<div class="am-cf am-container am-margin-top">
    <div class="pes-sidebar am-offcanvas am-margin-right" id="admin-offcanvas">
        <div class="am-offcanvas-bar admin-offcanvas-bar">
            <?php include "Process_sidebar.php"; ?>
        </div>
    </div>

    <div class="pes-content">
        <ul class="am-list am-list-border">
            <li class="am-padding">
                <h1 class="am-article-title am-margin-top-0">#<?= $task_id; ?> [<a
                        href="<?= $label->url('Process-index', array('p' => $task_project)); ?>"><?= $project[$task_project]['project_title']; ?></a>] <?= $task_title; ?>
                </h1>

                <div class="am-text-xs">
                    <a href="<?= $label->url('Process-index', array('su' => $task_status)); ?>"
                       class="am-badge am-badge-<?= $className[$task_status] ?>"><?= $status[$task_status]; ?></a>

                    <a class="am-link-muted"
                       href="<?= $label->url('Process-index', array('u' => $hero[$task_create_id]['user_id'])); ?>"><?= $hero[$task_create_id]['user_name']; ?></a>

                    <time datetime="<?= date('Y-m-d H:i', $task_createtime); ?>"
                          title="<?= date('Y-m-d H:i', $task_createtime); ?>">
                        发表于 <?= $label->timing($task_createtime); ?></time>
                    <time datetime="<?= date('Y-m-d H:i', $task_expecttime); ?>"
                          title="<?= date('Y-m-d H:i', $task_expecttime); ?>"
                          class="am-text-primary">
                        期望 <?= date('Y-m-d ', $task_expecttime); ?>前完成
                    </time>

                    指派给 <a class="am-link-muted"
                           href="<?= $label->url('Process-index', array('u' => $user_id)); ?>"><?= $user_name; ?></a>
                    <?php if ($task_status > 0): ?>
                        <time datetime="<?= date('Y-m-d H:i', $task_estimatetime); ?>"
                              title="<?= date('Y-m-d H:i', $task_estimatetime); ?>"
                              class="am-text-success">
                            预计在 <?= date('Y-m-d ', $task_estimatetime); ?>完成
                        </time>
                    <?php endif; ?>
                </div>
            </li>

            <li class="am-padding am-nbfc">
                <article class="am-article">
                    <div class="am-article-bd tm-article">
                        <?= html_entity_decode($task_content); ?>
                    </div>
                </article>
            </li>
        </ul>


        <ul class="am-list am-list-border">
            <?php if (empty($diary)): ?>
                <li class="am-padding-xs am-padding-left-sm am-text-sm">暂无开发日志</li>
            <?php else: ?>
                <li class="am-padding-xs am-padding-left-sm am-text-sm"><?= count($diary); ?>条开发日志</li>
                <?php foreach ($diary as $key => $value) : ?>
                    <li class="am-padding-sm">

                        <div class="am-text-sm">
                            <div class="am-cf">
                                <div class="am-fl am-text-sm">
                                    <time datetime="<?= date('Y-m-d H:i', $value['diary_time']); ?>"
                                          title="<?= date('Y-m-d H:i', $value['diary_time']); ?>">
                                        发表于 <?= $label->timing($value['diary_time']); ?></time>
                                </div>
                            </div>

                        </div>
                        <div class="am-margin-top-xs">
                            <?= htmlspecialchars_decode($value['diary_content']); ?>
                        </div>

                    </li>
                <?php endforeach; ?>
            <?php endif; ?>
        </ul>
    </div>
</div>
