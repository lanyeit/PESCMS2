<?php $this->header(); ?>
<?php include 'sidebar.php'; ?>

<div id="right">
    <?php include 'nav.php'; ?>

    <div id="content">
        <h1><?php echo $title; ?></h1>
        <?php echo $content; ?>


    </div>
<?php $this->footer(); ?>