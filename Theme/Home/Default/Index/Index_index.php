<div class="am-g pes-banner am-padding am-nbfc">
    <div class="am-u-lg-centered am-text-center am-animation-scale-down">
        <h1 class="am-text-xxl">开源让我们不断地进步!</h1>
        <p>马上获取全新的PESCMS产品</p>
    </div>
</div>
<div class="am-container am-padding">

    <?php foreach ($project as $key => $value) : ?>
        <?php if ($key % 2 == 0): ?>
            <div class="am-g am-g-fixed">
        <?php endif; ?>
            <div class="col-md-6 am-u-md-6 am-text-center" data-scrollspy="{animation: 'slide-top', delay: 500}">
                <a href="<?= $value['project_url']; ?>"><img class="am-img-responsive img am-inline" src="<?= $value['project_icon']; ?>" alt="<?= $value['project_title']; ?>" style="width: 165px;height: 165px;  "></a>
                <h2><?= $value['project_title']; ?></h2>
                <p><?= $value['project_description']; ?></p>
            </div>
        <?php if ($key % 2 != 0 || $value == end($project)): ?>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>

</div>