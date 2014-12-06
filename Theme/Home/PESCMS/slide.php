<div class="slide">
    <div class="banner">
        <ul>
            <?php $slide = $label->slideShow('1', '5'); ?>
            <?php foreach( $slide as $key => $value) : ?>
                
            <li style="background-image: url(<?= $value['slideshow_pic']; ?>); background-size: 100%; width: 25%;">
                <div class="inner">
                    <h1><?= $value['slideshow_name']; ?></h1>
                    <p><?= $value['slideshow_description']; ?></p>
                    <a class="btn" href="<?= $value['slideshow_link']; ?>">查看</a>
                </div>
            </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <style>
        .banner {
            position: relative;
            width: 100%;
            overflow: auto;

            font-size: 18px;
            line-height: 24px;
            text-align: center;

            color: rgba(255,255,255,.6);
            text-shadow: 0 0 1px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.3);

            background: #5b4d3d;
            box-shadow: 0 1px 2px rgba(0,0,0,.25);
        }
        .banner ul {
            list-style: none;
            width: 300%;
        }
        .banner ul li {
            display: block;
            float: left;
            width: 33%;
            min-height: 300px;

            -o-background-size: 100% 100%;
            -ms-background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;

            box-shadow: inset 0 -3px 6px rgba(0,0,0,.1);
        }

        .banner .inner {
            padding: 65px 0 0px;
        }

        .banner h1, .banner h2 {
            font-size: 40px;
            line-height: 52px;

            color: #fff;
        }

        .banner .btn {
            display: inline-block;
            margin: 25px 0 0;
            padding: 9px 22px 7px;
            clear: both;

            color: #fff;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;

            border: 2px solid rgba(255,255,255,.4);
            border-radius: 5px;
        }
        .banner .btn:hover {
            background: rgba(255,255,255,.05);
        }
        .banner .btn:active {
            -webkit-filter: drop-shadow(0 -1px 2px rgba(0,0,0,.5));
            -moz-filter: drop-shadow(0 -1px 2px rgba(0,0,0,.5));
            -ms-filter: drop-shadow(0 -1px 2px rgba(0,0,0,.5));
            -o-filter: drop-shadow(0 -1px 2px rgba(0,0,0,.5));
            filter: drop-shadow(0 -1px 2px rgba(0,0,0,.5));
        }

        .banner .btn, .banner .dot {
            -webkit-filter: drop-shadow(0 1px 2px rgba(0,0,0,.3));
            -moz-filter: drop-shadow(0 1px 2px rgba(0,0,0,.3));
            -ms-filter: drop-shadow(0 1px 2px rgba(0,0,0,.3));
            -o-filter: drop-shadow(0 1px 2px rgba(0,0,0,.3));
            filter: drop-shadow(0 1px 2px rgba(0,0,0,.3));
        }

        .banner .dots {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 20px;
        }
        .banner .dots li {
            display: inline-block;
            width: 10px;
            height: 10px;
            margin: 0 4px;

            text-indent: -999em;

            border: 2px solid #fff;
            border-radius: 6px;

            cursor: pointer;
            opacity: .4;

            -webkit-transition: background .5s, opacity .5s;
            -moz-transition: background .5s, opacity .5s;
            transition: background .5s, opacity .5s;
        }
        .banner .dots li.active {
            background: #fff;
            opacity: 1;
        }

        .banner .arrows {
            position: absolute;
            bottom: 20px;
            right: 20px;
            color: #fff;
        }
        .banner .arrow {
            display: inline;
            padding-left: 10px;
            cursor: pointer;
        }
    </style>
    <script>
        $(function() {
            var unslider = $('.banner').unslider({
                speed: 500, //  The speed to animate each slide (in milliseconds)
                delay: 3000, //  The delay between slide animations (in milliseconds)
                complete: function() {
                }, //  A function that gets called after every slide animation
                keys: true, //  Enable keyboard (left, right) arrow shortcuts
                dots: true, //  Display dot navigation
                fluid: false
            });
        });
    </script>
</div>