<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="renderer" content="webkit">
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <title><?php echo $title; ?></title>
    </head>
    <body style="background: #fff;">
        <div class="footer"></div>
        <div class="admin-content">
            <div class="am-g">
                <div class="am-u-sm-12">
                    <h2 class="am-text-center am-text-xxl am-margin-top-lg"><?= $title; ?></h2>
                    <?php if (DEBUG == false): ?>
                        <p class="am-text-center">
                            <?php echo $errorMes; ?>
                            <?php echo $errorFile ?>
                        </p>
                        <pre class="page-404" style="width: 300px">
         ._                __.
        / \"-.          ,-",'/ 
       (   \ ,"--.__.--".,' /  
       =---Y(_i.-'  |-.i_)---=
      f ,  "..'/\\v/|/|/\  , l
      l//  ,'|/   V / /||  \\j
       "--; / db     db|/---"
          | \ YY   , YY//
          '.\>_   (_),"' __
        .-"    "-.-." I,"  `.
        \.-""-. ( , ) ( \   |
        (     l  `"'  -'-._j 
 __,---_ '._." .  .    \
(__.--_-'.  ,  :  '  \  '-.
    ,' .'  /   |   \  \  \ "-
     "--.._____t____.--'-""'
            /  /  `. ".
           / ":     \' '.
         .'  (       \   : 
         |    l      j    "-.
         l_;_;I      l____;_I    
                        </pre>
                    <?php else: ?>
                        
                        <div style="width: 700px;margin: 0 auto;">
                        <pre class="am-pre-scrollable">
                            <?php if (!empty($errorSql)): ?>
                                <?= $errorSql; ?>
                                <?= $errorSqlString; ?>
                            <?php endif; ?>
                            <span class="am-block"><?= $errorMes; ?></span>
                            <span class="am-block"><?= $errorFile ?></span>
                        </pre>
                            <?php if (!empty($sql)): ?>
                            <textarea cols="68"><?= $sql ?></textarea>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </body>
    <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/amazeui.min.css"/>
    <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/timelog.css"/>
    <link rel="stylesheet" href="<?= DOCUMENT_ROOT ?>/Theme/assets/css/admin.css"/>
</html>