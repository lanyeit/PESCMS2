<?php $this->header(); ?>
<?php include 'sidebar.php'; ?>

<div id="right">
    <?php include 'nav.php'; ?>

        <div id="content">
            <h1><?= $title; ?></h1>
            <?= $content; ?>


        </div>
<?php $this->footer(); ?>