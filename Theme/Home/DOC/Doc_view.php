<?php $this->header(); ?>
<?php include 'sidebar.php'; ?>

<div id="right">
    <?php include 'nav.php'; ?>

        <div id="content">
            <h1><?= $doc_title; ?></h1>
            <?= html_entity_decode($doc_content); ?>


        </div>
<?php $this->footer(); ?>