<?php
require('components/db.php');
require('components/function.php');
$post_id = $_GET['id'];
$postQuery = "SELECT * FROM posts WHERE id=$post_id";
$runPQ = mysqli_query($db, $postQuery);
$post = mysqli_fetch_assoc($runPQ)


?>
<!DOCTYPE html>
<html lang="en-GB">

<head>
    <meta charset="UTF-8" />


    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title><?= $post['title'] ?>&#8211; TheUniques</title>





    <script src="https://kit.fontawesome.com/d01dc6f594.js" crossorigin="anonymous"></script>

    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta name="keywords" content="the uniques,the uniques batch,the uniques batch sviet, sviet,sviet college, website development,website development near me,web development near me,Best web development training in tricity,,Best web development training,Best web development courses in tricity,Best web development courses,web development courses,web development courses online,web development courses free,web development front end, html css javascript,graphics design for beginners,graphics design full course,graphic design near me,graphic design training,graphics design traning in tricity,Best graphics design course,Best graphics design course in tricity">

    <link rel="canonical" href="https://theuniques.in/post.php" />
    <link rel="shortlink" href="https://theuniques.in/post.php" />
    <link rel="alternate" href="https://theuniques.in/post.php" />
    <link rel='stylesheet' href='css/all.css' type='text/css' media='all' />
    <link rel="alternate" type="application/json" href="https://theuniques.in/post.php" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://theuniques.in/post.php" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://theuniques.in/post.php" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-241925497-1"></script>
    <link rel='stylesheet' id='startit-qode-blog-css' href='./css/blog.css' type='text/css' media='all' />
    <style type="text/css">
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
    </style>

    </style>
    <style id='woocommerce-inline-inline-css' type='text/css'>
        .woocommerce form .form-row .required {
            visibility: visible;
        }
    </style>


    <link rel="shortcut icon" href="metafab1.ico" type="image/x-icon">

    <script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
        //<![CDATA[
        var dataLayer_content = {
            "pagePostType": "post",
            "pagePostType2": "single-post",
            "pageCategory": ["innovation", "optimization", "sustainable"],
            "pageAttributes": ["potential", "project", "social"],
            "pagePostAuthor": "admin"
        };
        dataLayer.push(dataLayer_content); //]]>
    </script>
    <script data-cfasync="false">
        //<![CDATA[
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '//www.googletagmanager.com/gtm.' + 'js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-M4XZBMN'); //]]>
    </script>

    <noscript>
        <style>
            .woocommerce-product-gallery {
                opacity: 1 !important;
            }
        </style>
    </noscript>
    <style type="text/css">
        .recentcomments a {
            display: inline !important;
            padding: 0 !important;
            margin: 0 !important;
        }
    </style>

    <script type="text/javascript">
        function setREVStartSize(e) {
            try {
                e.c = jQuery(e.c);
                var i = jQuery(window).width(),
                    t = 9999,
                    r = 0,
                    n = 0,
                    l = 0,
                    f = 0,
                    s = 0,
                    h = 0;
                if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
                        f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
                    }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
                    var u = (e.c.width(), jQuery(window).height());
                    if (void 0 != e.fullScreenOffsetContainer) {
                        var c = e.fullScreenOffsetContainer.split(",");
                        if (c) jQuery.each(c, function(e, i) {
                            u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                        }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
                    }
                    f = u
                } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
                e.c.closest(".rev_slider_wrapper").css({
                    height: f
                })
            } catch (d) {
                console.log("Failure at Presize of Slider:" + d)
            }
        };
    </script>
    <style type="text/css" id="wp-custom-css">
        .qodef-single-product-images .images.woocommerce-product-gallery--columns-4 .woocommerce-product-gallery__image:not(:first-child) {
            width: 33%;
        }
    </style>
    <style type="text/css" id="qode_startit-custom-css">
        .qodef-landing-custom .qodef-ptf-category-holder {
            display: none !important;
        }

        .qodef-landing-custom .qodef-portfolio-list-holder-outer.qodef-ptf-standard article .qodef-item-image-holder {
            border-radius: 3px 3px 0 0;
            backface-visibility: hidden;
        }

        .qodef-landing-custom .qodef-item-title {
            text-align: center !important;
            padding: 28px 0 37px 0 !important;
        }

        .qodef-landing-custom .qodef-item-icons-holder .qodef-like,
        .qodef-landing-custom .qodef-item-icons-holder .qodef-portfolio-lightbox {
            display: none !important;
        }

        .qodef-landing-custom .qodef-portfolio-item .qodef-portfolio-shader {
            display: none !important;
        }

        .qodef-landing-custom .qodef-portfolio-list-holder-outer.qodef-ptf-standard article .qodef-item-icons-holder {
            width: 100%;
            top: -25%;
            left: 0;
            bottom: 0;
            height: 100%;
            padding: 0;
            -webkit-transform: translateY(0) scale(0);
            -ms-transform: translateY(0) scale(0);
            transform: translateY(0) scale(0);
            background-color: rgba(0, 0, 0, 0.15);
            border-radius: 100%;
            padding: 50% 0;
            display: block;
            -webkit-transition: -webkit-transform .5s cubic-bezier(.4, 0, .2, 1), opacity .2s;
            transition: transform .5s cubic-bezier(.4, 0, .2, 1), opacity .2s;
        }

        .qodef-landing-custom .qodef-portfolio-list-holder-outer.qodef-ptf-standard article:hover .qodef-item-icons-holder {
            opacity: 1;
            -webkit-transform: translateY(0) scale(1.2);
            -ms-transform: translateY(0) scale(1.2);
            transform: translateY(0) scale(1.2);
            -webkit-transition: -webkit-transform .35s cubic-bezier(.4, 0, .2, 1), opacity .35s;
            transition: transform .35s cubic-bezier(.4, 0, .2, 1), opacity .35s;
        }

        .qodef-landing-custom .qodef-item-icons-holder .qodef-preview {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent !important;
            border: none !important;
            -ms-transform: translateY(0) rotate(0);
            -webkit-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
        }

        .qodef-landing-custom .qodef-portfolio-list-holder article .qodef-item-icons-holder a:hover {
            -ms-transform: translateY(0) rotate(0);
            -webkit-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
        }

        .qodef-landing-custom .qodef-item-icons-holder .qodef-preview:before {
            content: "\f002" !important;
            font-size: 22px;
            position: relative;
            top: 50%;
            -webkit-transform: translateY(-65%) translateX(-50%);
            -ms-transform: translateY(-75%) translateX(-50%);
            transform: translateY(-75%) translateX(-50%);
            width: 60px;
            height: 60px;
            display: block;
            background: #b2dd4c;
            border-radius: 100%;
            text-align: center;
            line-height: 60px;
            left: 50%;
        }

        .page-id-2689 .qodef-page-header .qodef-position-right,
        .page-id-2689 .qodef-sticky-holder,
        .page-id-2689 footer,
        .page-id-2689 #qodef-back-to-top {
            display: none !important;
        }

        .page-id-2689 #qodef-particles .qodef-p-content {
            width: auto;
        }

        .qodef-va-fix {
            vertical-align: middle;
        }

        @media only screen and (max-width: 1284px) {
            .page-id-3520.qodef-header-vertical footer .qodef-four-columns .qodef-column {
                width: 49.5%;
                min-height: initial !important;
            }
        }

        @media only screen and (max-width: 1024px) {

            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(1) .qodef-slider-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(3) .qodef-slider-content {
                padding-right: 80px;
            }

            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(1) .qodef-graphic-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(3) .qodef-graphic-content {
                padding-right: 0;
            }

            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(2) .qodef-graphic-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(4) .qodef-graphic-content {
                display: none;
            }

            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(2) .qodef-slider-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(4) .qodef-slider-content {
                padding-left: 80px;
            }
        }

        @media only screen and (max-width: 768px) {

            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(1) .qodef-slider-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(3) .qodef-slider-content {
                padding-left: 80px;
            }

            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(1) .qodef-graphic-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(3) .qodef-graphic-content {
                display: none;
            }

            .page-id-3520.qodef-header-vertical footer .qodef-four-columns .qodef-column {
                width: 100%;
                min-height: initial !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(1) .qodef-slider-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(2) .qodef-slider-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(3) .qodef-slider-content,
            .page-id-2476 #qodef-meetup-slider.carousel .carousel-inner .item:nth-child(4) .qodef-slider-content {
                padding-left: 20px;
            }
        }

        .landing-new-custom .qodef-portfolio-item .qodef-portfolio-shader {
            background-color: rgba(34, 34, 34, 0.8);
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            border-radius: 0;
            top: 0;
            left: 0;
            padding: 0;
            border-radius: 15px;
        }

        .landing-new-custom .qodef-portfolio-list-holder-outer .qodef-item-title {
            font-size: 22px;
            color: #fff;
            font-weight: 700;
        }

        .landing-new-custom .qodef-portfolio-list-holder-outer .qodef-item-text-holder .qodef-ptf-category-holder {
            display: none;
        }

        .landing-new-custom .qodef-portfolio-list-holder-outer article {
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 4px 4px 15px #c3c3c3;
            transform: translateZ(0px);
        }

        .landing-new-custom .qodef-portfolio-filter-holder .qodef-portfolio-filter-holder-inner ul li span {
            font-size: 16px;
            color: #686868;
        }

        .landing-new-custom .qodef-portfolio-filter-holder .qodef-portfolio-filter-holder-inner ul li span:hover {
            color: #b2dd4c;
        }

        .landing-new-custom .qodef-portfolio-filter-holder {
            margin-bottom: 86px;
        }

        .qodef-vertical-align-containers .qodef-position-center:before,
        .qodef-vertical-align-containers .qodef-position-left:before,
        .qodef-vertical-align-containers .qodef-position-right:before {
            margin-right: 0;
        }

        @-moz-document url-prefix() {
            .carousel-inner .qodef-slider-content .qodef-slide-buttons-holder .qodef-btn.qodef-btn-solid:hover {
                background-color: #000 !important;
            }

            .carousel-inner .qodef-slider-content .qodef-slide-buttons-holder .qodef-btn.qodef-btn-default:hover {
                background-color: #b2dd4c !important;
            }
        }

        .comment-respond .comment-form-cookies-consent {
            margin: 0 0 20px;
        }

        @media only screen and (max-width: 480px) {
            .qodef-btn.single_add_to_cart_button {
                padding: 0 22px;
            }
        }

        .qodef-mobile-showcase .qodef-mobile-wrapper .qodef-screens {
            transform-style: preserve-3d;
        }

        .qodef-mobile-showcase .qodef-mobile-wrapper.qodef-view-layers .qodef-screens .qodef-screen {
            opacity: 1 !important;
        }
    </style><noscript>
        <style>
            .wpb_animate_when_almost_visible {
                opacity: 1;
            }
        </style>
    </noscript>
</head>

<body class="post-template-default single single-post postid-934 single-format-standard select-core-2.0.3 woocommerce-no-js startit-ver-3.0.4 qodef-smooth-scroll qodef-smooth-page-transitions qodef-blog-installed qodef-top-bar-mobile-hide qodef-header-standard qodef-sticky-header-on-scroll-up qodef-default-mobile-header qodef-sticky-up-mobile-header qodef-dropdown-animate-height qodef-search-covers-header qodef-side-menu-slide-with-content qodef-width-470 wpb-js-composer js-comp-ver-6.0.5 vc_responsive">

    <body class="page-template page-template-blog-standard page-template-blog-standard-php page page-id-892 select-core-2.0.3 woocommerce-no-js startit-ver-3.0.4 qodef-smooth-scroll qodef-smooth-page-transitions qodef-blog-installed qodef-top-bar-mobile-hide qodef-header-standard qodef-sticky-header-on-scroll-up qodef-default-mobile-header qodef-sticky-up-mobile-header qodef-dropdown-animate-height qodef-light-header qodef-search-covers-header qodef-side-menu-slide-with-content qodef-width-470 wpb-js-composer js-comp-ver-6.0.5 vc_responsive">
        <?php include_once('components/sidemenu.php'); ?>
        <div class="qodef-wrapper">
            <div class="qodef-wrapper-inner">
                <header class="qodef-page-header">
                    <div class="qodef-menu-area" style="background-color:rgba(255, 255, 255, 0)">
                        <form role="search" class="qodef-search-cover">
                            <div class="qodef-form-holder-outer">
                                <div class="qodef-form-holder">
                                    <div class="qodef-form-holder-inner">
                                        <input type="text" placeholder="Search" name="search" class="qode_search_field no-livesearch" />
                                        <div class="qodef-search-close">
                                            <a href="">
                                                <i class="fa-solid fa-xmark"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="qodef-vertical-align-containers">
                            <div class="qodef-position-left">
                                <div class="qodef-position-left-inner">
                                    <div class="qodef-logo-wrapper">
                                        <a href="#" style="height: 90px;">
                                            <img class="qodef-normal-logo" src="logo.webp" alt="logo" />
                                            <img class="qodef-dark-logo" src="logo.webp" alt="dark logo" /> <img class="qodef-light-logo" src="logo.webp" alt="light logo" /> </a>
                                    </div>
                                </div>
                            </div>
                            <div class="qodef-position-right">
                                <div class="qodef-position-right-inner">
                                    <nav class="qodef-main-menu qodef-drop-down qodef-default-nav">
                                        <ul id="menu-main-menu" class="clearfix">
                                            <li id="nav-menu-item-634" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children  has_sub wide wide_background"><a href="about.php" class=""><span class="item_outer"><span class="item_inner"><span class="menu_icon_wrapper"><i class="menu_icon null fa"></i></span><span class="item_text">About us</span></span><span class="plus"></span></span></a>

                                            </li>

                                            <li id="nav-menu-item-629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"><a href="project.php" class=""><span class="item_outer"><span class="item_inner"><span class="menu_icon_wrapper"><i class="menu_icon null fa"></i></span><span class="item_text">Projects</span></span><span class="plus"></span></span></a>

                                            </li>
                                            <li id="nav-menu-item-630" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children qodef-active-item has_sub narrow"><a href="blog.php" class=" current "><span class="item_outer"><span class="item_inner"><span class="menu_icon_wrapper"><i class="menu_icon null fa"></i></span><span class="item_text">Blog</span></span><span class="plus"></span></span></a>

                                            </li>

                                            <li id="nav-menu-item-632" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub wide icons wide_background"><a href="contact.php" class=""><span class="item_outer"><span class="item_inner"><span class="menu_icon_wrapper"><i class="menu_icon null fa"></i></span><span class="item_text">Contact us</span></span><span class="plus"></span></span></a>
                                            </li>
                                        </ul>
                                    </nav>



                                    <a data-icon-close-same-position="yes" class="qodef-search-opener" href="javascript:void(0)">
                                        <i class="fa-solid fa-magnifying-glass"></i></a>
                                    <a class="qodef-side-menu-button-opener " href="javascript:void(0)">
                                        <i class="qodef-icon-font-awesome fa fa-bars " aria-hidden="true"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="qodef-sticky-header">
                        <form role="search" action="#" class="qodef-search-cover" method="get">
                            <div class="qodef-form-holder-outer">
                                <div class="qodef-form-holder">
                                    <div class="qodef-form-holder-inner">
                                        <input type="text" placeholder="Search" name="search" class="qode_search_field no-livesearch" autocomplete="off" />
                                        <div class="qodef-search-close">
                                            <a href="">
                                                <i class="qodef-icon-ion-icon ion-close "></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="qodef-sticky-holder">
                            <div class=" qodef-vertical-align-containers">
                                <div class="qodef-position-left">
                                    <div class="qodef-position-left-inner">
                                        <div class="qodef-logo-wrapper">
                                            <a href="#" style="height: 90px;">
                                                <img class="qodef-normal-logo" src="logo.webp" alt="logo" />
                                                <img class="qodef-dark-logo" src="logo.webp " alt="light logo" /><img class="qodef-light-logo" src="logo.webp" alt="light logo" /> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="qodef-position-right">
                                    <div class="qodef-position-right-inner">
                                        <nav class="qodef-main-menu qodef-drop-down qodef-sticky-nav">
                                            <ul id="menu-main-menu-1" class="clearfix">
                                                <li id="sticky-nav-menu-item-634" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children  has_sub wide wide_background"><a href="about.php" class=""><span class="item_outer"><span class="item_inner"><span class="menu_icon_wrapper"></span><span class="item_text">About us</span></span><span class="plus"></span></span></a>

                                                </li>

                                                <li id="sticky-nav-menu-item-629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"><a href="project.php" class=""><span class="item_outer"><span class="item_inner"><span class="menu_icon_wrapper"></span><span class="item_text">Projects</span></span><span class="plus"></span></span></a>

                                                </li>
                                                <li id="sticky-nav-menu-item-630" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children qodef-active-item has_sub narrow"><a href="blog.php" class=" current "><span class="item_outer"><span class="item_inner"><span class="menu_icon_wrapper"></span><span class="item_text">Blog</span></span><span class="plus"></span></span></a>

                                                </li>



                                                <li id="sticky-nav-menu-item-632" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub wide icons wide_background"><a href="blog.php" class=""><span class="item_outer"><span class="item_inner"><span class="menu_icon_wrapper"></span><span class="item_text">Contact us</span></span><span class="plus"></span></span></a>

                                                </li>
                                            </ul>
                                        </nav>

                                        <a data-icon-close-same-position="yes" class="qodef-search-opener" href="javascript:void(0)">
                                            <i class="fa-solid fa-magnifying-glass"></i> </a>
                                        <a class="qodef-side-menu-button-opener " href="javascript:void(0)">
                                            <i class="qodef-icon-font-awesome fa fa-bars " aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <header class="qodef-mobile-header">
                    <div class="qodef-mobile-header-inner">
                        <div class="qodef-mobile-header-holder">
                            <div class="qodef-grid">
                                <div class="qodef-vertical-align-containers">
                                    <div class="qodef-mobile-menu-opener">
                                        <a href="javascript:void(0)">
                                            <span class="qodef-mobile-opener-icon-holder">
                                                <i class="qodef-icon-font-awesome fa fa-bars "></i> </span>
                                        </a>
                                    </div>
                                    <div class="qodef-position-center">
                                        <div class="qodef-position-center-inner">
                                            <div class="qodef-mobile-logo-wrapper">





                                                <a href="#" style="height: 90px">
                                                    <img src="logo.webp" alt="mobile-logo" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="qodef-position-right">
                                        <div class="qodef-position-right-inner">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav class="qodef-mobile-nav">
                            <div class="qodef-grid">
                                <ul id="menu-main-menu-2" class="">
                                    <li id="mobile-menu-item-634" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children  has_sub"><a href="about.php" class=""><span>About us</span></a><span class="mobile_arrow"></span>

                                    </li>

                                    <li id="mobile-menu-item-629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub"><a href="project.php" class=""><span>Projects</span></a><span class="mobile_arrow"></span>

                                    </li>
                                    <li id="mobile-menu-item-630" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children qodef-active-item has_sub"><a href="blog.php" class=" current "><span>Blog</span></a><span class="mobile_arrow"></span>

                                    </li>

                                    <li id="mobile-menu-item-632" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub"><a href="contact.php" class=""><span>Contact us</span></a><span class="mobile_arrow"></span>

                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
                <a id='qodef-back-to-top' href='#'>
                    <span class="qodef-icon-stack">
                        <i class="qodef-icon-font-awesome fa fa-chevron-up "></i> </span>
                </a>
                <div class="qodef-content">
                    <div class="qodef-content-inner">
                        <div class="qodef-title qodef-breadcrumb-type qodef-content-left-alignment qodef-animation-no" style="height:100px;" data-height="100">
                            <div class="qodef-title-image"></div>
                            <div class="qodef-title-holder">
                                <div class="qodef-container clearfix">
                                    <div class="qodef-container-inner">
                                        <div class="qodef-title-subtitle-holder">
                                            <div class="qodef-title-subtitle-holder-inner">
                                                <div class="qodef-title-breadcrumbs-holder">
                                                    <h1><span><?= $post['title'] ?></span></h1>
                                                    <div class="qodef-breadcrumbs-holder">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="qodef-container">
                            <div class="qodef-container-inner">
                                <div class="qodef-two-columns-75-25 qodef-content-has-sidebar  clearfix">
                                    <div class="qodef-column1 qodef-content-left-from-sidebar">
                                        <div class="qodef-column-inner">
                                            <div class="qodef-blog-holder qodef-blog-single">
                                                <article id="post-934" class="post-934 post type-post status-publish format-standard has-post-thumbnail hentry category-innovation category-optimization category-sustainable tag-potential tag-project tag-social">
                                                    <div class="qodef-post-content">
                                                        <?php $post_images = getImagesByPost($db, $post['id']);   ?>
                                                        <div class="qodef-post-image">

                                                            <?php
                                                            $c = 1;
                                                            foreach ($post_images as $images) {

                                                            ?>



                                                                <img width="820" height="447" src="./images/<?= $images['image'] ?>" sizes="(max-width: 820px) 100vw, 820px" alt="...">


                                                            <?php
                                                                $c++;
                                                            }
                                                            ?>




                                                        </div>
                                                        <div class="qodef-post-text">
                                                            <div class="qodef-post-text-inner">
                                                                <div class="qodef-blog-standard-post-date">
                                                                    <span class="date"><?= date('j', strtotime($post['created_at'])) ?></span>
                                                                    <span class="month"><?= date('M', strtotime($post['created_at'])) ?></span>
                                                                </div>
                                                                <div class="qodef-blog-standard-info-holder">
                                                                    <h2 class="qodef-post-title">
                                                                        <?= $post['title'] ?></h2>
                                                                    <div class="qodef-post-info">
                                                                        <i class="fa fa-user" aria-hidden="true"></i>
                                                                        <div class="">by <a class="qodef-post-info-author-link" href="#"><?= $post['writter'] ?></a></div>
                                                                        <i class="fa-solid fa-tag"></i>
                                                                        <div class="">
                                                                            <a href="#" rel="category tag"><?= getCategory($db, $post['category_id']) ?></a>
                                                                        </div>
                                                                        <i class="fa-solid fa-comment"></i>
                                                                        <div class=""><a class="qodef-post-info-comments" href="#com" target="_self">Comments</a></div>
                                                                    </div>
                                                                </div>
                                                                <div class="vc_row wpb_row vc_row-fluid qodef-section qodef-content-aligment-left">
                                                                    <div class="clearfix qodef-full-section-inner">
                                                                        <div class="wpb_column vc_column_container vc_col-sm-12">
                                                                            <div class="vc_column-inner">
                                                                                <div class="wpb_wrapper">
                                                                                    <div class="wpb_text_column wpb_content_element ">
                                                                                        <div class="wpb_wrapper">
                                                                                            <p><?= $post['content'] ?> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="qodef-post-info-bottom">
                                                        <div class="qodef-single-tags-holder">
                                                            <h6 class="qodef-single-tags-title">Tags:</h6>
                                                            <div class="qodef-tags">
                                                                <a href="#" rel="tag"><?= getCategory($db, $post['category_id']) ?></a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </article>
                                                <div class="qodef-author-description">
                                                    <div class="qodef-author-description-inner">
                                                        <div class="qodef-author-description-image">
                                                            <img alt='' src='./admin/images/<?php echo $post['profile_image']; ?>' class='avatar avatar-128 photo' height='128' width='128' />
                                                        </div>
                                                        <div class="qodef-author-description-text-holder">
                                                            <h5 class="qodef-author-name">
                                                                <?= $post['writter'] ?></h5>
                                                            <div class="qodef-author-text">
                                                                <p> <?= $post['writter_quotes'] ?></p>
                                                            </div>
                                                            <div class="qodef-author-social-holder clearfix">

                                                                <div class="qodef-author-social-inner">
                                                                    <a href="" target="blank">
                                                                        <i class="fa-brands fa-linkedin"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="qodef-comment-holder clearfix" id="comments">
                                                    <div class="qodef-comment-number">
                                                        <?php
                                                        if (isset($_GET['id'])) {

                                                        ?>
                                                            <div class="qodef-comment-number-inner">

                                                                <h6 id="com"> Comments </h6>
                                                            </div>
                                                    </div>
                                                    <div class="qodef-comments">
                                                        <?php
                                                            $comments = getComments($db, $post_id);
                                                            if (count($comments) < 1) {
                                                                echo ' <div class="comment-content">
              <p>
              No Comments.
              </p>
            </div>';
                                                            } else {
                                                                foreach ($comments as $comment) {
                                                        ?>
                                                                <ul class="qodef-comment-list">
                                                                    <li>
                                                                        <div class="qodef-comment clearfix">
                                                                            <div class="qodef-comment-image"> <img alt='' src='https://secure.gravatar.com/avatar/279e22ae88264ca29a99c4a0f20fe65a?s=75&#038;d=mm&#038;r=g' class='avatar avatar-75 photo' height='75' width='75' /> </div>
                                                                            <div class="qodef-comment-text">
                                                                                <div class="qodef-comment-info">
                                                                                    <h5 class="qodef-comment-name">
                                                                                        <?= $comment['name'] ?> </h5>
                                                                                </div>
                                                                                <div class="qodef-comment-date-holder">
                                                                                    <span class="qodef-comment-date">Posted at <?= date('F jS, Y', strtotime($comment['created_at'])) ?></span>
                                                                                </div>
                                                                                <div class="qodef-text-holder" id="comment-44">
                                                                                    <p><?= $comment['comment'] ?></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            <?php
                                                                }

                                                            ?>
                                                    <?php
                                                            }
                                                        }
                                                    ?>

                                                    </div>
                                                </div>
                                                <div class="qodef-comment-form">
                                                    <div id="respond" class="comment-respond">
                                                        <h3 id="reply-title" class="comment-reply-title">Post a Comment <small><a rel="nofollow" id="cancel-comment-reply-link" href="/news-app-deliveres-fresh-ideas/#respond" style="display:none;">Cancel Reply</a></small></h3>
                                                        <form action="components/add_comment.php" method="post" id="commentform" class="comment-form">
                                                            <span class="qodef-input-title">Comment</span><textarea id="comment" placeholder="Write your comment here..." name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                                            <div class="qodef-three-columns clearfix">
                                                                <div class="qodef-three-columns-inner">
                                                                    <div class="qodef-column">
                                                                        <div class="qodef-column-inner"><span class="qodef-input-title">Name</span><input id="name" name="name" placeholder="Your full name" type="text" value="" aria-required='true' /></div>
                                                                    </div>
                                                                    <div class="qodef-column">
                                                                        <div class="qodef-column-inner"><span class="qodef-input-title">Email</span><input id="email" name="email" placeholder="E-mail address" type="text" value="" aria-required='true' /></div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <p class="form-submit"><input name="addcomment" type="submit" id="submit_comment" class="submit" value="Send message" /> <input type='hidden' name="post_id" value="<?= $post_id ?>" />

                                                            </p>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="qodef-column2">
                                        <div class="qodef-column-inner">
                                            <?php include_once('components/sidebar.php'); ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php include_once('components/footer.php'); ?>
            </div>
        </div>
        <div class="rbt-toolbar" data-theme="Startit" data-featured="" data-button-position="75%" data-button-horizontal="right" data-button-alt="no"></div>



        <script type='text/javascript'>
            /* <![CDATA[ */
            var woocommerce_params = {
                "ajax_url": "\/wp-admin\/admin-ajax.php",
                "wc_ajax_url": "\/?wc-ajax=%%endpoint%%"
            };
            /* ]]> */
        </script>

        <script type='text/javascript'>
            /* <![CDATA[ */
            var wc_cart_fragments_params = {
                "ajax_url": "\/wp-admin\/admin-ajax.php",
                "wc_ajax_url": "\/?wc-ajax=%%endpoint%%",
                "cart_hash_key": "wc_cart_hash_7e3a80ff8bf7cb3d59a96c5ad0ca1b06",
                "fragment_name": "wc_fragments_7e3a80ff8bf7cb3d59a96c5ad0ca1b06",
                "request_timeout": "5000"
            };
            /* ]]> */
        </script>
        <script type='text/javascript' src='js/med.js'></script>
        <script type='text/javascript' src='js/down.js'></script>
        <script type='text/javascript'>
            /* <![CDATA[ */
            var qodefGlobalVars = {
                "vars": {
                    "qodefAddForAdminBar": 0,
                    "qodefElementAppearAmount": -150,
                    "qodefFinishedMessage": "No more posts",
                    "qodefMessage": "Loading new posts...",
                    "qodefTopBarHeight": 0,
                    "qodefStickyHeaderHeight": 60,
                    "qodefStickyHeaderTransparencyHeight": 60,
                    "qodefLogoAreaHeight": 0,
                    "qodefMenuAreaHeight": 100,
                    "qodefStickyHeight": 60,
                    "qodefMobileHeaderHeight": 100
                }
            };
            var qodefPerPageVars = {
                "vars": {
                    "qodefStickyScrollAmount": 0,
                    "qodefHeaderTransparencyHeight": 0
                }
            };
            /* ]]> */
        </script>

    </body>

</html>