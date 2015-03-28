<div id="right">
    <?php include 'nav.php'; ?>

    <div id="content">
        <?php $foreword = $label->page('26'); ?>
        <h1><?= $foreword['page_title']; ?></h1>
        <?= html_entity_decode($foreword['page_content']); ?>


</div>