<?php
require('components/db.php');
include('components/function.php');
$currentpage = 0;
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 1;
}
$post_per_page = 5;
$result = ($page - 1) * $post_per_page;

?>
<!DOCTYPE html>
<html lang="en-GB">

<head>
    <meta charset="UTF-8" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />

    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title>Blogs</title>

    <link rel="shortcut icon" href="metafab1.ico" type="image/x-icon">
    <script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
        //<![CDATA[
        var gtm4wp_datalayer_name = "dataLayer";
        var dataLayer = dataLayer || [];
        //]]>
    </script>
    <script src="https://kit.fontawesome.com/d01dc6f594.js" crossorigin="anonymous"></script>

    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta name="keywords" content="the uniques,the uniques batch,the uniques batch sviet, sviet,sviet college, website development,website development near me,web development near me,Best web development training in tricity,,Best web development training,Best web development courses in tricity,Best web development courses,web development courses,web development courses online,web development courses free,web development front end, html css javascript,graphics design for beginners,graphics design full course,graphic design near me,graphic design training,graphics design traning in tricity,Best graphics design course,Best graphics design course in tricity">

    <link rel="canonical" href="https://theuniques.in/blog.php" />
    <link rel="shortlink" href="https://theuniques.in/blog.php" />
    <link rel="alternate" href="https://theuniques.in/blog.php" />

    <script type="text/javascript">
        window._wpemojiSettings = {
            "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/",
            "ext": ".png",
            "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/",
            "svgExt": ".svg",
            "source": {
                "concatemoji": "https:\/\/startit.qodeinteractive.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.2.15"
            }
        };
        ! function(e, a, t) {
            var n, r, o, i = a.createElement("canvas"),
                p = i.getContext && i.getContext("2d");

            function s(e, t) {
                var a = String.fromCharCode;
                p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0);
                e = i.toDataURL();
                return p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, t), 0, 0), e === i.toDataURL()
            }

            function c(e) {
                var t = a.createElement("script");
                t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
            }
            for (o = Array("flag", "emoji"), t.supports = {
                    everything: !0,
                    everythingExceptFlag: !0
                }, r = 0; r < o.length; r++) t.supports[o[r]] = function(e) {
                if (!p || !p.fillText) return !1;
                switch (p.textBaseline = "top", p.font = "600 32px Arial", e) {
                    case "flag":
                        return s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) ? !1 : !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]);
                    case "emoji":
                        return !s([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340])
                }
                return !1
            }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
            t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() {
                t.DOMReady = !0
            }, t.supports.everything || (n = function() {
                t.readyCallback()
            }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() {
                "complete" === a.readyState && t.readyCallback()
            })), (n = t.source || {}).concatemoji ? c(n.concatemoji) : n.wpemoji && n.twemoji && (c(n.twemoji), c(n.wpemoji)))
        }(window, document, window._wpemojiSettings);
    </script>
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

        .truncate {
            width: 600px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .b {
            white-space: nowrap;
            width: 700px;
            overflow: hidden;
            text-overflow: ellipsis;

        }
    </style>
    <link rel='stylesheet' href='css/all.css' type='text/css' media='all' />
    <link rel="alternate" type="application/json" href="https://theuniques.in/blog.php" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://theuniques.in/blog.php" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://theuniques.in/blog.php" />

    <link rel='stylesheet' id='startit-qode-blog-css' href='./css/blog.css' type='text/css' media='all' />

    <link rel='stylesheet' id='startit-qode-google-fonts-css' href='https://fonts.googleapis.com/css?family=Raleway%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRaleway%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;subset=latin%2Clatin-ext&#038;ver=1.0.0' type='text/css' media='all' />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-241925497-1"></script>
    <script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
        //<![CDATA[
        var gtm4wp_datalayer_name = "dataLayer";
        var dataLayer = dataLayer || [];
        //]]>
    </script>

    <script type='text/javascript' src='./js/up.js'></script>

    <script src="https://kit.fontawesome.com/d01dc6f594.js" crossorigin="anonymous"></script>


    <script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
        //<![CDATA[
        var dataLayer_content = {
            "pagePostType": "page",
            "pagePostType2": "single-page",
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
            background: #C8021C;
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
            color: #C8021C;
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
                background-color: #C8021C !important;
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

<body class="page-template page-template-blog-standard page-template-blog-standard-php page page-id-892 select-core-2.0.3 woocommerce-no-js startit-ver-3.0.4 qodef-smooth-scroll qodef-smooth-page-transitions qodef-blog-installed qodef-top-bar-mobile-hide qodef-header-standard qodef-sticky-header-on-scroll-up qodef-default-mobile-header qodef-sticky-up-mobile-header qodef-dropdown-animate-height qodef-light-header qodef-search-covers-header qodef-side-menu-slide-with-content qodef-width-470 wpb-js-composer js-comp-ver-6.0.5 vc_responsive">
    <?php include_once('components/sidemenu.php'); ?>
    <div class="qodef-wrapper">
        <div class="qodef-wrapper-inner">
            <?php include_once('components/navbar.php'); ?>
            <a id='qodef-back-to-top' href='#'>
                <span class="qodef-icon-stack">
                    <i class="qodef-icon-font-awesome fa fa-chevron-up "></i> </span>
            </a>
            <div class="qodef-content" style="margin-top: -100px">
                <div class="qodef-content-inner">
                    <div class="qodef-title qodef-standard-type qodef-preload-background qodef-has-background qodef-has-parallax-background qodef-content-left-alignment qodef-animation-right-left qodef-title-image-not-responsive" style="height:350px;background-image:url(https://startit.qodeinteractive.com/wp-content/uploads/2015/10/blog-title.jpg);" data-height="350" data-background-width=&quot;1920&quot;>
                        <div class="qodef-title-image"><img src="images/blog-title.jpg" alt="&nbsp;" /> </div>
                        <div class="qodef-title-holder">
                            <div class="qodef-container clearfix">
                                <div class="qodef-container-inner">
                                    <div class="qodef-title-subtitle-holder">
                                        <div class="qodef-title-subtitle-holder-inner">
                                            <h1><span>Blogs</span></h1>
                                            <span class="qodef-subtitle"><span>Lorem ipsum dolor sit</span></span>
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
                                        <div class="qodef-blog-holder qodef-blog-type-standard">
                                            <?php
                                            if (isset($_GET['search'])) {
                                                $keyword = $_GET['search'];
                                                $postQuery = "SELECT * FROM posts WHERE title LIKE '%$keyword%' ORDER BY id DESC LIMIT $result,$post_per_page";
                                            } else {
                                                $postQuery = "SELECT * FROM posts ORDER BY id DESC LIMIT $result,$post_per_page";
                                            }

                                            $runPQ = mysqli_query($db, $postQuery);

                                            while ($post = mysqli_fetch_assoc($runPQ)) {
                                            ?>
                                                <article id="post-934" class="post-934 post type-post status-publish format-standard has-post-thumbnail hentry category-innovation category-optimization category-sustainable tag-potential tag-project tag-social">
                                                    <div class="qodef-post-content">
                                                        <div class="qodef-post-image">
                                                            <a href="post.php?id=<?= $post['id'] ?>" title="<?= $post['title'] ?>">
                                                                <img width="820" height="447" src="./images/<?= getPostThumb($db, $post['id']) ?>" class="attachment-full size-full wp-post-image" alt="image" sizes="(max-width: 820px) 100vw, 820px"> </a>
                                                        </div>
                                                        <div class="qodef-post-text">
                                                            <div class="qodef-post-text-inner">
                                                                <div class="qodef-blog-standard-post-date">
                                                                    <span class="date"><?= date('j', strtotime($post['created_at'])) ?></span>
                                                                    <span class="month"><?= date('M', strtotime($post['created_at'])) ?></span>
                                                                </div>
                                                                <div class="qodef-blog-standard-info-holder">
                                                                    <h2 class="qodef-post-title">
                                                                        <a href="post.php?id=<?= $post['id'] ?>"><?= $post['title'] ?></a>
                                                                    </h2>
                                                                    <div class="qodef-post-info">
                                                                        <i class="fa fa-user" aria-hidden="true"></i>
                                                                        <div class="">by <?= $post['writter'] ?></div>
                                                                        <i class="fa-solid fa-tag"></i>
                                                                        <div class="">
                                                                            <?= getCategory($db, $post['category_id']) ?></div>

                                                                    </div>
                                                                </div>
                                                                <div class="wpb_text_column wpb_content_element">
                                                                    <div class="wpb_wrapper">

                                                                        <p><?= $post['description'] ?></p>
                                                                    </div>
                                                                </div>

                                                                <a href="post.php?id=<?= $post['id'] ?>" class="qodef-btn qodef-btn-small qodef-btn-default"> <span class="qodef-btn-text">Read More</span> <span class="qodef-btn-text-icon"></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>

                                            <?php

                                            }
                                            ?>

                                            <?php
                                            if (isset($_GET['search'])) {
                                                $keyword = $_GET['search'];
                                                $q = "SELECT * FROM posts WHERE title LIKE '%$keyword%' ";
                                            } else {
                                                $q = "SELECT * FROM posts";
                                            }

                                            $r = mysqli_query($db, $q);
                                            $total_post = mysqli_num_rows($r);
                                            $total_pages = ceil($total_post / $post_per_page);

                                            ?>



                                            <div class="qodef-pagination">
                                                <ul> <?php

                                                        if ($page > 1) {
                                                            $switch = "";
                                                        ?>
                                                        <li class='qodef-pagination-prev '>
                                                            <a class="<?= $switch ?>" href="?<?php if (isset($_GET['search'])) {
                                                                                                    echo "search=$keyword&";
                                                                                                } ?>page=<?= $page - 1 ?>" tabindex="-1"><i class='fa fa-chevron-left '></i></a>
                                                        </li>
                                                    <?php
                                                        } else {
                                                            $switch = "disabled";
                                                        }
                                                        if ($page >= $total_pages) {
                                                            $nswitch = "";
                                                        } else {
                                                            $nswitch = "disabled";
                                                        }
                                                    ?>

                                                    <?php
                                                    $class = '';
                                                    for ($opage = 1; $opage <= $total_pages; $opage++) {
                                                        if ($page == $opage) {
                                                    ?>
                                                            <li class='active'><span><a href="javascript:void(0)"><?= $opage ?></a></span></li>
                                                        <?php
                                                        } else {
                                                        ?>
                                                            <li><a href="?page=<?= $opage ?>" class='inactive'><?= $opage ?></a></li>
                                                        <?php
                                                        }
                                                    }
                                                    if ($page < $total_pages) {
                                                        $nswitch = "";
                                                        ?>
                                                        <li class="qodef-pagination-next "><a class="<?= $nswitch ?>" href="?<?php if (isset($_GET['search'])) {
                                                                                                                                    echo "search=$keyword&";
                                                                                                                                } ?>page=<?= $page + 1 ?>"><i class="fa fa-chevron-right"></i></a></li>
                                                    <?php
                                                    } else {
                                                        $nswitch = "disabled";
                                                    }
                                                    ?>


                                                </ul>
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
    <div class="rbt-toolbar"  data-featured="" data-button-position="75%" data-button-horizontal="right" data-button-alt="no"></div>


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