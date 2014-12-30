<?php $this->header(); ?>
<?php include 'sidebar.php'; ?>

<div id="right">
    <?php include 'nav.php'; ?>

    <div id="content">
        <?php $foreword = $label::page('1'); ?>
        <h1><?php echo $foreword['title']; ?></h1>
        <?php echo $foreword['content']; ?>


    </div>

    <?php $this->footer(); ?>