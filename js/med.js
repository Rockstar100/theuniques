!(function (c, d) {
  "use strict";
  var e = !1,
    n = !1;
  if (d.querySelector) if (c.addEventListener) e = !0;
  if (((c.wp = c.wp || {}), !c.wp.receiveEmbedMessage))
    if (
      ((c.wp.receiveEmbedMessage = function (e) {
        var t = e.data;
        if (t)
          if (t.secret || t.message || t.value)
            if (!/[^a-zA-Z0-9]/.test(t.secret)) {
              for (
                var r,
                  a,
                  i,
                  s = d.querySelectorAll(
                    'iframe[data-secret="' + t.secret + '"]'
                  ),
                  n = d.querySelectorAll(
                    'blockquote[data-secret="' + t.secret + '"]'
                  ),
                  o = 0;
                o < n.length;
                o++
              )
                n[o].style.display = "none";
              for (o = 0; o < s.length; o++)
                if (((r = s[o]), e.source === r.contentWindow)) {
                  if ((r.removeAttribute("style"), "height" === t.message)) {
                    if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                    else if (~~i < 200) i = 200;
                    r.height = i;
                  }
                  if ("link" === t.message)
                    if (
                      ((a = d.createElement("a")),
                      (i = d.createElement("a")),
                      (a.href = r.getAttribute("src")),
                      (i.href = t.value),
                      i.host === a.host)
                    )
                      if (d.activeElement === r) c.top.location.href = t.value;
                }
            }
      }),
      e)
    )
      c.addEventListener("message", c.wp.receiveEmbedMessage, !1),
        d.addEventListener("DOMContentLoaded", t, !1),
        c.addEventListener("load", t, !1);
  function t() {
    if (!n) {
      n = !0;
      for (
        var e,
          t,
          r = -1 !== navigator.appVersion.indexOf("MSIE 10"),
          a = !!navigator.userAgent.match(/Trident.*rv:11\./),
          i = d.querySelectorAll("iframe.wp-embedded-content"),
          s = 0;
        s < i.length;
        s++
      ) {
        if (!(e = i[s]).getAttribute("data-secret"))
          (t = Math.random().toString(36).substr(2, 10)),
            (e.src += "#?secret=" + t),
            e.setAttribute("data-secret", t);
        if (r || a)
          (t = e.cloneNode(!0)).removeAttribute("security"),
            e.parentNode.replaceChild(t, e);
      }
    }
  }
})(window, document);
!(function (e) {
  "use strict";
  switch (
    ((window.qodef = {}),
    (qodef.modules = {}),
    (qodef.scroll = 0),
    (qodef.window = e(window)),
    (qodef.document = e(document)),
    (qodef.windowWidth = e(window).width()),
    (qodef.windowHeight = e(window).height()),
    (qodef.body = e("body")),
    (qodef.html = e("html, body")),
    (qodef.htmlEl = e("html")),
    (qodef.menuDropdownHeightSet = !1),
    (qodef.defaultHeaderStyle = ""),
    (qodef.minVideoWidth = 1500),
    (qodef.videoWidthOriginal = 1280),
    (qodef.videoHeightOriginal = 720),
    (qodef.videoRatio = 1280 / 720),
    !0)
  ) {
    case qodef.body.hasClass("qodef-grid-1300"):
      qodef.boxedLayoutWidth = 1350;
      break;
    case qodef.body.hasClass("qodef-grid-1200"):
      qodef.boxedLayoutWidth = 1250;
      break;
    case qodef.body.hasClass("qodef-grid-1000"):
      qodef.boxedLayoutWidth = 1050;
      break;
    case qodef.body.hasClass("qodef-grid-800"):
      qodef.boxedLayoutWidth = 850;
      break;
    default:
      qodef.boxedLayoutWidth = 1150;
  }
  e(document).ready(function () {
    (qodef.scroll = e(window).scrollTop()),
      qodef.body.hasClass("qodef-dark-header") &&
        (qodef.defaultHeaderStyle = "qodef-dark-header"),
      qodef.body.hasClass("qodef-light-header") &&
        (qodef.defaultHeaderStyle = "qodef-light-header");
  }),
    e(window).resize(function () {
      (qodef.windowWidth = e(window).width()),
        (qodef.windowHeight = e(window).height());
    }),
    e(window).scroll(function () {
      qodef.scroll = e(window).scrollTop();
    });
})(jQuery),
  (function (n) {
    "use strict";
    var e = {};
    function o() {
      fluidvids.init({
        selector: ["iframe"],
        players: ["www.youtube.com", "player.vimeo.com"],
      });
    }
    function t() {
      var e = n(".qodef-owl-slider");
      e.length &&
        e.each(function () {
          var e = n(this);
          e.waitForImages(function () {
            e.owlCarousel({
              singleItem: !0,
              transitionStyle: "fadeUp",
              navigation: !0,
              autoHeight: !0,
              pagination: !1,
              navigationText: [
                '<span class="qodef-prev-icon"><i class="fa fa-chevron-left"></i></span>',
                '<span class="qodef-next-icon"><i class="fa fa-chevron-right"></i></span>',
              ],
            });
          });
        });
    }
    function i() {
      n(".qodef-preload-background").each(function () {
        var e = n(this);
        if (
          "" !== e.css("background-image") &&
          "none" !== e.css("background-image")
        ) {
          var o = e.attr("style");
          if ((o = (o = o.match(/url\(["']?([^'")]+)['"]?\)/)) ? o[1] : "")) {
            var t = new Image();
            (t.src = o),
              n(t).load(function () {
                e.removeClass("qodef-preload-background");
              });
          }
        } else
          n(window).load(function () {
            e.removeClass("qodef-preload-background");
          });
      });
    }
    function a() {
      n("a[data-rel^='prettyPhoto']").prettyPhoto({
        hook: "data-rel",
        animation_speed: "normal",
        slideshow: !1,
        autoplay_slideshow: !1,
        opacity: 0.8,
        show_title: !0,
        allow_resize: !0,
        horizontal_padding: 0,
        default_width: 960,
        default_height: 540,
        counter_separator_label: "/",
        theme: "pp_default",
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        overlay_gallery: !1,
        keyboard_shortcuts: !0,
        deeplinking: !1,
        custom_markup: "",
        social_tools: !1,
        markup:
          '<div class="pp_pic_holder"> <div class="ppt">&nbsp;</div> <div class="pp_top"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> <div class="pp_content_container"> <div class="pp_left"> <div class="pp_right"> <div class="pp_content"> <div class="pp_loaderIcon"></div> <div class="pp_fade"> <a href="#" class="pp_expand" title="Expand the image">Expand</a> <div class="pp_hoverContainer"> <a class="pp_next" href="#"><span class="fa fa-chevron-right"></span></a> <a class="pp_previous" href="#"><span class="fa fa-chevron-left"></span></a> </div> <div id="pp_full_res"></div> <div class="pp_details"> <div class="pp_nav"> <a href="#" class="pp_arrow_previous">Previous</a> <p class="currentTextHolder">0/0</p> <a href="#" class="pp_arrow_next">Next</a> </div> <p class="pp_description"></p> {pp_social} <a class="pp_close" href="#">Close</a> </div> </div> </div> </div> </div> </div> <div class="pp_bottom"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> </div> <div class="pp_overlay"></div>',
      });
    }
    function d() {
      if (
        0 < n("[data-qodef_header_style]").length &&
        qodef.body.hasClass("qodef-header-style-on-scroll")
      ) {
        var e = n(".wpb_row.qodef-section"),
          o = function (e) {
            void 0 !== e.data("qodef_header_style")
              ? qodef.body
                  .removeClass("qodef-dark-header qodef-light-header")
                  .addClass(e.data("qodef_header_style"))
              : qodef.body
                  .removeClass("qodef-dark-header qodef-light-header")
                  .addClass("" + qodef.defaultHeaderStyle);
          };
        e.waypoint(
          function (e) {
            "down" === e && o(n(this.element));
          },
          { offset: 0 }
        ),
          e.waypoint(
            function (e) {
              "up" === e && o(n(this.element));
            },
            {
              offset: function () {
                return -n(this.element).outerHeight();
              },
            }
          );
      }
    }
    function s() {
      n(".qodef-parallax-section-holder").length &&
        n(".qodef-parallax-section-holder").each(function () {
          var e = n(this);
          e.hasClass("qodef-full-screen-height-parallax") &&
            (e.height(qodef.windowHeight),
            e.find(".qodef-parallax-content-outer").css("padding", 0));
          var o = 0.4 * e.data("qodef-parallax-speed");
          e.parallax("50%", o);
        });
    }
    (qodef.modules.common = e),
      (qodef.touchClasses = [
        ".qodef-process-item",
        ".qodef-team",
        ".qodef-underline-icon-box-holder",
        ".qodef-icon-shortcode",
        ".qodef-slider",
      ]),
      (e.qodefFluidVideo = o),
      (e.qodefPreloadBackgrounds = i),
      (e.qodefPrettyPhoto = a),
      (e.qodefCheckHeaderStyleOnScroll = d),
      (e.qodefInitParallax = s),
      (e.qodefEnableScroll = function () {
        window.removeEventListener &&
          window.removeEventListener("DOMMouseScroll", f, !1);
        (window.onmousewheel =
          document.onmousewheel =
          document.onkeydown =
            null),
          qodef.body.hasClass("qodef-smooth-scroll") &&
            (window.addEventListener("mousewheel", smoothScrollListener, !1),
            window.addEventListener(
              "DOMMouseScroll",
              smoothScrollListener,
              !1
            ));
      }),
      (e.qodefDisableScroll = function () {
        window.addEventListener &&
          window.addEventListener("DOMMouseScroll", f, !1);
        (window.onmousewheel = document.onmousewheel = f),
          (document.onkeydown = c),
          qodef.body.hasClass("qodef-smooth-scroll") &&
            (window.removeEventListener("mousewheel", smoothScrollListener, !1),
            window.removeEventListener(
              "DOMMouseScroll",
              smoothScrollListener,
              !1
            ));
      }),
      (e.qodefWheel = f),
      (e.qodefKeydown = c),
      (e.qodefPreventDefaultValue = h),
      (e.qodefOwlSlider = t),
      (e.qodefInitSelfHostedVideoPlayer = p),
      (e.qodefSelfHostedVideoSize = u),
      (e.qodefInitBackToTop = g),
      (e.qodefBackButtonShowHide = m),
      (e.qodefSetFooterColumnsHeight = v),
      (e.qodefSmoothTransition = b),
      n(document).ready(function () {
        o(),
          i(),
          a(),
          (function () {
            var o,
              i,
              e = n(".qodef-no-animations-on-touch"),
              t = !0,
              a = n(
                ".qodef-grow-in, .qodef-fade-in-down, .qodef-element-from-fade, .qodef-element-from-left, .qodef-element-from-right, .qodef-element-from-top, .qodef-element-from-bottom, .qodef-flip-in, .qodef-x-rotate, .qodef-z-rotate, .qodef-y-translate, .qodef-fade-in, .qodef-fade-in-left-x-rotate"
              ),
              d = [
                "qodef-grow-in",
                "qodef-fade-in-down",
                "qodef-element-from-fade",
                "qodef-element-from-left",
                "qodef-element-from-right",
                "qodef-element-from-top",
                "qodef-element-from-bottom",
                "qodef-flip-in",
                "qodef-x-rotate",
                "qodef-z-rotate",
                "qodef-y-translate",
                "qodef-fade-in",
                "qodef-fade-in-left-x-rotate",
              ];
            e.length && (t = !1);
            0 < a.length &&
              t &&
              a.each(function () {
                var e = n(this);
                o = e.attr("class").split(/\s+/);
                var t = 0;
                o.map(function (e, o) {
                  if (-1 !== d.indexOf(e)) return (t = o), !1;
                }),
                  (i = o[t]),
                  e.data("animation", i),
                  e.appear(
                    function () {
                      e.addClass(e.data("animation") + "-on");
                    },
                    {
                      accX: 0,
                      accY: qodefGlobalVars.vars.qodefElementAppearAmount,
                    }
                  );
              });
          })(),
          r().init(),
          n(".qodef-section .qodef-video-wrap .qodef-video").mediaelementplayer(
            {
              enableKeyboard: !1,
              iPadUseNativeControls: !1,
              pauseOtherPlayers: !1,
              iPhoneUseNativeControls: !1,
              AndroidUseNativeControls: !1,
            }
          ),
          navigator.userAgent.match(
            /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/
          ) &&
            (l(),
            n(".qodef-section .qodef-mobile-video-image").show(),
            n(".qodef-section .qodef-video-wrap").remove()),
          l(),
          n(".qodef-footer-uncover").length &&
            n(".qodef-content").css(
              "margin-bottom",
              n(".qodef-footer-inner").height()
            ),
          t(),
          p(),
          u(),
          g(),
          m(),
          b(),
          qodef.touchClasses.forEach(w);
      }),
      n(window).load(function () {
        d(), v(), s();
      }),
      n(window).resize(function () {
        l(), u(), v();
      });
    var r = (qodef.modules.common.qodefInitAnchor = function () {
      var d = function (e) {
          n(
            ".qodef-main-menu .qodef-active-item, .qodef-mobile-nav .qodef-active-item, .qodef-vertical-menu .qodef-active-item, .qodef-fullscreen-menu .qodef-active-item"
          ).removeClass("qodef-active-item"),
            e.parent().addClass("qodef-active-item"),
            n(
              ".qodef-main-menu a, .qodef-mobile-nav a, .qodef-vertical-menu a, .qodef-fullscreen-menu a"
            ).removeClass("current"),
            e.addClass("current");
        },
        e = function () {
          qodef.document.on(
            "click",
            ".qodef-main-menu a, .qodef-vertical-menu a, .qodef-fullscreen-menu a, .qodef-btn, .qodef-anchor, .qodef-mobile-nav a",
            function () {
              var e,
                o,
                t = n(this),
                i = t.prop("hash").split("#")[1];
              if ("" !== i && 0 < n('[data-qodef-anchor="' + i + '"]').length) {
                var a = n('[data-qodef-anchor="' + i + '"]').offset().top;
                return (
                  (e =
                    n('[data-qodef-anchor="' + i + '"]').offset().top -
                    ((o = a),
                    "qodef-sticky-header-on-scroll-down-up" ===
                      qodef.modules.header.behaviour &&
                      (o > qodef.modules.header.stickyAppearAmount
                        ? (qodef.modules.header.isStickyVisible = !0)
                        : (qodef.modules.header.isStickyVisible = !1)),
                    "qodef-sticky-header-on-scroll-up" ===
                      qodef.modules.header.behaviour &&
                      o > qodef.scroll &&
                      (qodef.modules.header.isStickyVisible = !1),
                    qodef.modules.header.isStickyVisible
                      ? qodefGlobalVars.vars.qodefStickyHeaderTransparencyHeight
                      : qodefPerPageVars.vars.qodefHeaderTransparencyHeight)),
                  d(t),
                  qodef.html
                    .stop()
                    .animate({ scrollTop: Math.round(e) }, 1e3, function () {
                      history.replaceState &&
                        history.replaceState(null, null, "#" + i);
                    }),
                  !1
                );
              }
            }
          );
        };
      return {
        init: function () {
          n("[data-qodef-anchor]").length &&
            (e(),
            n("[data-qodef-anchor]").waypoint(
              function (e) {
                "down" === e &&
                  d(
                    n(
                      "a[href='" +
                        window.location.href.split("#")[0] +
                        "#" +
                        n(this.element).data("qodef-anchor") +
                        "']"
                    )
                  );
              },
              { offset: "50%" }
            ),
            n("[data-qodef-anchor]").waypoint(
              function (e) {
                "up" === e &&
                  d(
                    n(
                      "a[href='" +
                        window.location.href.split("#")[0] +
                        "#" +
                        n(this.element).data("qodef-anchor") +
                        "']"
                    )
                  );
              },
              {
                offset: function () {
                  return -(n(this.element).outerHeight() - 150);
                },
              }
            ),
            n(window).load(function () {
              !(function () {
                var e = window.location.hash.split("#")[1];
                if (
                  "" !== e &&
                  0 < n('[data-qodef-anchor="' + e + '"]').length
                ) {
                  var o = window.location.href.split("#")[0] + "#" + e;
                  n("a[href='" + o + "']").length
                    ? n("a[href='" + o + "']").trigger("click")
                    : n("<a/>")
                        .attr({ href: o, class: "qodef-anchor" })
                        .appendTo("body")
                        .trigger("click");
                }
              })();
            }));
        },
      };
    });
    function l() {
      n(".qodef-section .qodef-video-wrap").each(function () {
        var e = n(this),
          o = e.closest(".qodef-section").outerWidth();
        e.width(o);
        var t = e.closest(".qodef-section").outerHeight();
        (qodef.minVideoWidth = qodef.videoRatio * (t + 20)), e.height(t);
        var i = o / qodef.videoWidthOriginal,
          a = t / qodef.videoHeightOriginal,
          d = a;
        a < i && (d = i),
          d * qodef.videoWidthOriginal < qodef.minVideoWidth &&
            (d = qodef.minVideoWidth / qodef.videoWidthOriginal),
          e
            .find("video, .mejs-overlay, .mejs-poster")
            .width(Math.ceil(d * qodef.videoWidthOriginal + 2)),
          e
            .find("video, .mejs-overlay, .mejs-poster")
            .height(Math.ceil(d * qodef.videoHeightOriginal + 2)),
          e.scrollLeft((e.find("video").width() - o) / 2),
          e
            .find(".mejs-overlay, .mejs-poster")
            .scrollTop((e.find("video").height() - t) / 2),
          e.scrollTop((e.find("video").height() - t) / 2);
      });
    }
    function f(e) {
      h(e);
    }
    function c(e) {
      for (var o = [37, 38, 39, 40], t = o.length; t--; )
        if (e.keyCode === o[t]) return void h(e);
    }
    function h(e) {
      (e = e || window.event).preventDefault && e.preventDefault(),
        (e.returnValue = !1);
    }
    function p() {
      n(".qodef-self-hosted-video").mediaelementplayer({ audioWidth: "100%" });
    }
    function u() {
      n(".qodef-self-hosted-video-holder .qodef-video-wrap").each(function () {
        var e = n(this),
          o = e.closest(".qodef-self-hosted-video-holder").outerWidth(),
          t = o / qodef.videoRatio;
        navigator.userAgent.match(
          /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/
        ) && (e.parent().width(o), e.parent().height(t)),
          e.width(o),
          e.height(t),
          e.find("video, .mejs-overlay, .mejs-poster").width(o),
          e.find("video, .mejs-overlay, .mejs-poster").height(t);
      });
    }
    function q(e) {
      var o = n("#qodef-back-to-top");
      o.removeClass("off on"),
        "on" === e ? o.addClass("on") : o.addClass("off");
    }
    function m() {
      qodef.window.scroll(function () {
        var e = n(this).scrollTop(),
          o = n(this).height();
        q((0 < e ? e + o / 2 : 1) < 1e3 ? "off" : "on");
      });
    }
    function g() {
      n("#qodef-back-to-top").on("click", function (e) {
        e.preventDefault(),
          qodef.html.animate(
            { scrollTop: 0 },
            qodef.window.scrollTop() / 3,
            "linear"
          );
      });
    }
    function v() {
      1024 < qodef.windowWidth &&
        n(".qodef-footer-top .qodef-column")
          .css("min-height", 0)
          .css("min-height", n(".qodef-footer-top > div").innerHeight());
    }
    function w(e) {
      0 < n(e).length && n(e).on("touchstart", function () {});
    }
    function b() {
      qodef.body.hasClass("qodef-smooth-page-transitions") &&
        (n(window).on("pageshow", function (e) {
          e.originalEvent.persisted && n(".qodef-wrapper-inner").fadeIn(0);
        }),
        n("a").on("click", function (e) {
          var o = n(this);
          1 === e.which &&
            void 0 === o.data("rel") &&
            void 0 === o.attr("rel") &&
            0 <= o.attr("href").indexOf(window.location.host) &&
            (void 0 === o.attr("target") || "_self" === o.attr("target")) &&
            o.attr("href").split("#")[0] !==
              window.location.href.split("#")[0] &&
            (e.preventDefault(),
            n(".qodef-wrapper-inner").fadeOut(1e3, function () {
              window.location = o.attr("href");
            }));
        }));
    }
  })(jQuery),
  (function (f) {
    "use strict";
    var e = {};
    function o() {
      var i,
        a = f(".qodef-wrapper"),
        d = f(".qodef-side-menu"),
        n = f("a.qodef-side-menu-button-opener"),
        s = !1,
        r = !1,
        l = !1;
      qodef.body.hasClass("qodef-side-menu-slide-from-right")
        ? ((i = "qodef-right-side-menu-opened"),
          a.prepend('<div class="qodef-cover"/>'),
          (s = !0))
        : qodef.body.hasClass("qodef-side-menu-slide-with-content")
        ? ((i = "qodef-side-menu-open"), (r = !0))
        : qodef.body.hasClass("qodef-side-area-uncovered-from-content") &&
          ((i = "qodef-right-side-menu-opened"), (l = !0)),
        f("a.qodef-side-menu-button-opener, a.qodef-close-side-menu").on(
          "click",
          function (e) {
            if ((e.preventDefault(), n.hasClass("opened"))) {
              if ((n.removeClass("opened"), qodef.body.removeClass(i), l))
                var o = setTimeout(function () {
                  d.css({ visibility: "hidden" }), clearTimeout(o);
                }, 400);
            } else {
              n.addClass("opened"),
                qodef.body.addClass(i),
                s &&
                  f(".qodef-wrapper .qodef-cover").on("click", function () {
                    qodef.body.removeClass("qodef-right-side-menu-opened"),
                      n.removeClass("opened");
                  }),
                l && d.css({ visibility: "visible" });
              var t = f(window).scrollTop();
              f(window).scroll(function () {
                if (
                  400 < Math.abs(qodef.scroll - t) &&
                  (qodef.body.removeClass(i), n.removeClass("opened"), l)
                )
                  var e = setTimeout(function () {
                    d.css({ visibility: "hidden" }), clearTimeout(e);
                  }, 400);
              });
            }
            r &&
              (e.stopPropagation(),
              a.on("click", function () {
                e.preventDefault(),
                  n.removeClass("opened"),
                  qodef.body.removeClass("qodef-side-menu-open");
              }));
          }
        );
    }
    function t() {
      var e = f(".qodef-side-menu");
      e.length &&
        e.niceScroll({
          scrollspeed: 60,
          mousescrollstep: 40,
          cursorwidth: 0,
          cursorborder: 0,
          cursorborderradius: 0,
          cursorcolor: "transparent",
          autohidemode: !1,
          horizrailenabled: !1,
        });
    }
    function i() {
      if (f("a.qodef-fullscreen-menu-opener").length) {
        var o,
          t = f("a.qodef-fullscreen-menu-opener"),
          i = f(".qodef-fullscreen-menu-holder-outer"),
          e = !1,
          a = !1,
          d = f(".qodef-fullscreen-above-menu-widget-holder"),
          n = f(".qodef-fullscreen-below-menu-widget-holder"),
          s = f(".qodef-fullscreen-menu-holder-outer nav > ul > li > a"),
          r = f(".qodef-fullscreen-menu > ul li.has_sub > a"),
          l = f(".qodef-fullscreen-menu ul li:not(.has_sub) a");
        i
          .height(qodef.windowHeight)
          .niceScroll({
            scrollspeed: 30,
            mousescrollstep: 20,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: !1,
            horizrailenabled: !1,
          }),
          f(window).resize(function () {
            i.height(qodef.windowHeight);
          }),
          qodef.body.hasClass("qodef-fade-push-text-right")
            ? ((o = "qodef-push-nav-right"), (e = !0))
            : qodef.body.hasClass("qodef-fade-push-text-top") &&
              ((o = "qodef-push-text-top"), (a = !0)),
          (e || a) &&
            (d.length &&
              d
                .children()
                .css({
                  "-webkit-animation-delay": "0ms",
                  "-moz-animation-delay": "0ms",
                  "animation-delay": "0ms",
                }),
            s.each(function (e) {
              f(this).css({
                "-webkit-animation-delay": 70 * (e + 1) + "ms",
                "-moz-animation-delay": 70 * (e + 1) + "ms",
                "animation-delay": 70 * (e + 1) + "ms",
              });
            }),
            n.length &&
              n
                .children()
                .css({
                  "-webkit-animation-delay": 70 * (s.length + 1) + "ms",
                  "-moz-animation-delay": 70 * (s.length + 1) + "ms",
                  "animation-delay": 70 * (s.length + 1) + "ms",
                })),
          t.on("click", function (e) {
            e.preventDefault(),
              t.hasClass("opened")
                ? (t.removeClass("opened"),
                  qodef.body.removeClass("qodef-fullscreen-menu-opened"),
                  qodef.body
                    .removeClass("qodef-fullscreen-fade-in")
                    .addClass("qodef-fullscreen-fade-out"),
                  qodef.body.addClass(o),
                  qodef.body.hasClass("page-template-full_screen-php") ||
                    qodef.modules.common.qodefEnableScroll(),
                  f("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(
                    200,
                    function () {
                      f("nav.popup_menu").getNiceScroll().resize();
                    }
                  ))
                : (t.addClass("opened"),
                  qodef.body.addClass("qodef-fullscreen-menu-opened"),
                  qodef.body
                    .removeClass("qodef-fullscreen-fade-out")
                    .addClass("qodef-fullscreen-fade-in"),
                  qodef.body.removeClass(o),
                  qodef.body.hasClass("page-template-full_screen-php") ||
                    qodef.modules.common.qodefDisableScroll(),
                  f(document).keyup(function (e) {
                    27 === e.keyCode &&
                      (t.removeClass("opened"),
                      qodef.body.removeClass("qodef-fullscreen-menu-opened"),
                      qodef.body
                        .removeClass("qodef-fullscreen-fade-in")
                        .addClass("qodef-fullscreen-fade-out"),
                      qodef.body.addClass(o),
                      qodef.body.hasClass("page-template-full_screen-php") ||
                        qodef.modules.common.qodefEnableScroll(),
                      f("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(
                        200,
                        function () {
                          f("nav.popup_menu").getNiceScroll().resize();
                        }
                      ));
                  }));
          }),
          r.on("tap click", function (e) {
            if ((e.preventDefault(), f(this).parent().hasClass("has_sub"))) {
              var o = f(this).parent().find("> ul.sub_menu");
              o.is(":visible")
                ? (o.slideUp(200, function () {
                    i.getNiceScroll().resize();
                  }),
                  f(this).parent().removeClass("open_sub"))
                : (f(this).parent().addClass("open_sub"),
                  o.slideDown(200, function () {
                    i.getNiceScroll().resize();
                  }));
            }
            return !1;
          }),
          l.on("click", function (e) {
            if (
              "http://#" === f(this).attr("href") ||
              "#" === f(this).attr("href")
            )
              return !1;
            1 === e.which &&
              (t.removeClass("opened"),
              qodef.body.removeClass("qodef-fullscreen-menu-opened"),
              qodef.body
                .removeClass("qodef-fullscreen-fade-in")
                .addClass("qodef-fullscreen-fade-out"),
              qodef.body.addClass(o),
              f("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(
                200,
                function () {
                  f("nav.popup_menu").getNiceScroll().resize();
                }
              ),
              qodef.modules.common.qodefEnableScroll());
          });
      }
    }
    function a() {
      var e = f(".qodef-mobile-header .qodef-mobile-menu-opener"),
        o = f(".qodef-mobile-header .qodef-mobile-nav"),
        t = f(
          '.qodef-mobile-nav .mobile_arrow, .qodef-mobile-nav h4, .qodef-mobile-nav a[href*="#"]'
        );
      e.length &&
        o.length &&
        e.on("tap click", function (e) {
          e.stopPropagation(),
            e.preventDefault(),
            o.is(":visible") ? o.slideUp(200) : o.slideDown(200);
        }),
        t.length &&
          t.each(function () {
            f(this).on("tap click", function (e) {
              var o = f(this).nextAll("ul").first();
              if (o.length) {
                e.preventDefault(), e.stopPropagation();
                var t = f(this).parent("li");
                o.is(":visible")
                  ? (o.slideUp(200), t.removeClass("qodef-opened"))
                  : (o.slideDown(200), t.addClass("qodef-opened"));
              }
            });
          }),
        f(".qodef-mobile-nav a, .qodef-mobile-logo-wrapper a").on(
          "click tap",
          function (e) {
            "http://#" !== f(this).attr("href") &&
              "#" !== f(this).attr("href") &&
              o.slideUp(200);
          }
        );
    }
    function d() {
      if (qodef.body.hasClass("qodef-sticky-up-mobile-header")) {
        var o,
          t = f(".qodef-mobile-header"),
          i = f("#wpadminbar"),
          e = t.length ? t.height() : 0,
          a = i.length ? i.height() : 0,
          d = f(document).scrollTop();
        (o = e + a),
          f(window).scroll(function () {
            var e = f(document).scrollTop();
            o < e
              ? t.addClass("qodef-animate-mobile-header")
              : t.removeClass("qodef-animate-mobile-header"),
              (d < e && o < e) || e < o
                ? (t.removeClass("mobile-header-appear"),
                  t.css("margin-bottom", 0),
                  i.length &&
                    t.find(".qodef-mobile-header-inner").css("top", 0))
                : (t.addClass("mobile-header-appear"),
                  t.css("margin-bottom", o)),
              (d = f(document).scrollTop());
          });
      }
    }
    function n() {
      f(".qodef-drop-down > ul > li.narrow").each(function (e) {
        var o,
          t = qodef.windowWidth - 16,
          i = f(this).offset().left,
          a = f(this).find(".second .inner ul").width(),
          d = 0;
        (d = qodef.body.hasClass("boxed")
          ? qodef.boxedLayoutWidth - (i - (t - qodef.boxedLayoutWidth) / 2)
          : t - i),
          0 < f(this).find("li.sub").length && (o = d - a),
          (d < a || o < a) &&
            (f(this).find(".second").addClass("right"),
            f(this).find(".second .inner ul").addClass("right"));
      });
    }
    function s() {
      var r = f(".qodef-drop-down > ul > li");
      r.each(function (e) {
        if (0 < f(r[e]).find(".second").length) {
          var o = f(r[e]).find(".second"),
            t = f(this).find(".inner > ul"),
            i = t.outerWidth();
          if (f(r[e]).hasClass("wide")) {
            var a =
              parseInt(t.css("padding-left").slice(0, -2)) +
              parseInt(t.css("padding-right").slice(0, -2));
            f(this).hasClass("left_position") ||
              f(this).hasClass("right_position") ||
              o.css("left", 0);
            var d = 0;
            if (
              (f(this)
                .find(".second > .inner > ul > li")
                .each(function () {
                  var e = f(this).height();
                  d < e && (d = e);
                }),
              f(this).find(".second > .inner > ul > li").css("height", ""),
              f(this).find(".second > .inner > ul > li").height(d),
              f(this).hasClass("wide_background"))
            ) {
              if (
                !f(this).hasClass("left_position") &&
                !f(this).hasClass("right_position")
              ) {
                n = f(this).find(".second").offset().left;
                o.css("left", -n), o.css("width", qodef.windowWidth);
              }
            } else if (
              !f(this).hasClass("left_position") &&
              !f(this).hasClass("right_position")
            ) {
              var n =
                (qodef.windowWidth -
                  2 * (qodef.windowWidth - t.offset().left)) /
                  2 +
                (i + a) / 2;
              o.css("left", -n);
            }
          }
          if (
            (qodef.menuDropdownHeightSet ||
              (f(r[e]).data("original_height", o.height() + "px"), o.height(0)),
            navigator.userAgent.match(/(iPod|iPhone|iPad)/))
          )
            f(r[e])
              .on("touchstart mouseenter", function () {
                o.css({
                  height: f(r[e]).data("original_height"),
                  overflow: "visible",
                  visibility: "visible",
                  opacity: "1",
                });
              })
              .on("mouseleave", function () {
                o.css({
                  height: "0px",
                  overflow: "hidden",
                  visibility: "hidden",
                  opacity: "0",
                });
              });
          else if (qodef.body.hasClass("qodef-dropdown-animate-height"))
            f(r[e])
              .mouseenter(function () {
                o.css({
                  visibility: "visible",
                  height: "0px",
                  opacity: "0",
                  "margin-top": "-30px",
                }),
                  o
                    .stop()
                    .animate(
                      {
                        height: f(r[e]).data("original_height"),
                        opacity: "1",
                        "margin-top": "0px",
                      },
                      250,
                      function () {
                        o.css("overflow", "visible");
                      }
                    );
              })
              .mouseleave(function () {
                o.stop().animate({ height: "0px" }, 0, function () {
                  o.css({
                    overflow: "hidden",
                    visibility: "hidden",
                    "margin-top": "0px",
                  });
                });
              });
          else {
            var s = {
              interval: 0,
              over: function () {
                setTimeout(function () {
                  o.addClass("qodef-drop-down-start"),
                    o.stop().css({ height: f(r[e]).data("original_height") });
                }, 150);
              },
              timeout: 150,
              out: function () {
                o.stop().css({ height: "0px" }),
                  o.removeClass("qodef-drop-down-start");
              },
            };
            f(r[e]).hoverIntent(s);
          }
        }
      }),
        f(".qodef-drop-down ul li.wide ul li a").on("click", function (e) {
          if (1 === e.which) {
            var o = f(this);
            setTimeout(function () {
              o.mouseleave();
            }, 500);
          }
        }),
        (qodef.menuDropdownHeightSet = !0);
    }
    function r() {
      var a,
        t,
        d,
        n,
        s,
        r,
        l = f("a.qodef-search-opener");
      if ((f("html").hasClass("touch") && !0, 0 < l.length))
        if (qodef.body.hasClass("qodef-fullscreen-search")) {
          var e = !1,
            o = !1;
          (a = f(".qodef-fullscreen-search-close")),
            qodef.body.hasClass("qodef-search-fade")
              ? (e = !0)
              : qodef.body.hasClass("qodef-search-from-circle") && (o = !0),
            (d = e),
            (n = o),
            (s = f(".qodef-fullscreen-search-holder")),
            (r = f(".qodef-fullscreen-search-overlay")),
            l.on("click", function (e) {
              e.preventDefault();
              var o = !1;
              if ("yes" === f(this).data("icon-close-same-position")) {
                var t = f(this).offset().top,
                  i = f(this).offset().left;
                o = !0;
              }
              d &&
                (s.hasClass("qodef-animate")
                  ? (qodef.body.removeClass("qodef-fullscreen-search-opened"),
                    qodef.body.addClass("qodef-search-fade-out"),
                    qodef.body.removeClass("qodef-search-fade-in"),
                    s.removeClass("qodef-animate"),
                    qodef.body.hasClass("page-template-full_screen-php") ||
                      qodef.modules.common.qodefEnableScroll())
                  : (qodef.body.addClass("qodef-fullscreen-search-opened"),
                    qodef.body.removeClass("qodef-search-fade-out"),
                    qodef.body.addClass("qodef-search-fade-in"),
                    s.addClass("qodef-animate"),
                    o && a.css({ top: t - qodef.scroll, left: i }),
                    qodef.body.hasClass("page-template-full_screen-php") ||
                      qodef.modules.common.qodefDisableScroll()),
                a.on("click", function (e) {
                  e.preventDefault(),
                    qodef.body.removeClass("qodef-fullscreen-search-opened"),
                    s.removeClass("qodef-animate"),
                    qodef.body.removeClass("qodef-search-fade-in"),
                    qodef.body.addClass("qodef-search-fade-out"),
                    qodef.body.hasClass("page-template-full_screen-php") ||
                      qodef.modules.common.qodefEnableScroll();
                }),
                f(document).keyup(function (e) {
                  27 === e.keyCode &&
                    (qodef.body.removeClass("qodef-fullscreen-search-opened"),
                    s.removeClass("qodef-animate"),
                    qodef.body.removeClass("qodef-search-fade-in"),
                    qodef.body.addClass("qodef-search-fade-out"),
                    qodef.body.hasClass("page-template-full_screen-php") ||
                      qodef.modules.common.qodefEnableScroll());
                })),
                n &&
                  (r.hasClass("qodef-animate")
                    ? (r.removeClass("qodef-animate"),
                      s.css({ opacity: 0, display: "none" }),
                      a.css({ opacity: 0, visibility: "hidden" }),
                      l.css({ opacity: 1 }))
                    : (r.addClass("qodef-animate"),
                      s.css({ display: "block" }),
                      setTimeout(function () {
                        s.css("opacity", "1"),
                          a.css({
                            opacity: 1,
                            visibility: "visible",
                            top: t - qodef.scroll,
                            left: i,
                          }),
                          o && a.css({ top: t - qodef.scroll, left: i }),
                          l.css({ opacity: 0 });
                      }, 200),
                      qodef.body.hasClass("page-template-full_screen-php") ||
                        qodef.modules.common.qodefDisableScroll()),
                  a.on("click", function (e) {
                    e.preventDefault(),
                      r.removeClass("qodef-animate"),
                      s.css({ opacity: 0, display: "none" }),
                      a.css({ opacity: 0, visibility: "hidden" }),
                      l.css({ opacity: 1 }),
                      qodef.body.hasClass("page-template-full_screen-php") ||
                        qodef.modules.common.qodefEnableScroll();
                  }),
                  f(document).keyup(function (e) {
                    27 === e.keyCode &&
                      (r.removeClass("qodef-animate"),
                      s.css({ opacity: 0, display: "none" }),
                      a.css({ opacity: 0, visibility: "hidden" }),
                      l.css({ opacity: 1 }),
                      qodef.body.hasClass("page-template-full_screen-php") ||
                        qodef.modules.common.qodefEnableScroll());
                  }));
            }),
            f(".qodef-fullscreen-search-holder .qodef-search-field").focus(
              function () {
                f(
                  ".qodef-fullscreen-search-holder .qodef-field-holder .qodef-line"
                ).css("width", "100%");
              }
            ),
            f(".qodef-fullscreen-search-holder .qodef-search-field").blur(
              function () {
                f(
                  ".qodef-fullscreen-search-holder .qodef-field-holder .qodef-line"
                ).css("width", "0");
              }
            );
        } else
          qodef.body.hasClass("qodef-search-slides-from-window-top")
            ? ((t = f(".qodef-search-slide-window-top")),
              (a = f(".qodef-search-close")),
              l.on("click", function (e) {
                if (
                  (e.preventDefault(),
                  f(".title").hasClass("has_parallax_background"))
                )
                  var o = parseInt(
                    f(".title.has_parallax_background")
                      .css("backgroundPosition")
                      .split(" ")[1]
                  );
                else var o = 0;
                0 === t.height()
                  ? (f(
                      '.qodef-search-slide-window-top input[type="text"]'
                    ).focus(),
                    qodef.body.addClass("qodef-search-open"),
                    f(".title.has_parallax_background").animate(
                      { "background-position-y": o + 50 + "px" },
                      150
                    ))
                  : (qodef.body.removeClass("qodef-search-open"),
                    f(".title.has_parallax_background").animate(
                      { "background-position-y": o - 50 + "px" },
                      150
                    )),
                  f(window).scroll(function () {
                    0 !== t.height() &&
                      50 < qodef.scroll &&
                      (qodef.body.removeClass("qodef-search-open"),
                      f(".title.has_parallax_background").css(
                        "backgroundPosition",
                        "center " + o + "px"
                      ));
                  }),
                  a.on("click", function (e) {
                    e.preventDefault(),
                      qodef.body.removeClass("qodef-search-open"),
                      f(".title.has_parallax_background").animate(
                        { "background-position-y": o + "px" },
                        150
                      );
                  });
              }))
            : qodef.body.hasClass("qodef-search-covers-header") &&
              l.on("click", function (e) {
                e.preventDefault();
                var o,
                  t,
                  i,
                  a = f(".qodef-search-cover .qodef-form-holder-outer");
                (i = f(this).closest(".qodef-grid").length
                  ? (t = f(this)
                      .closest(".qodef-grid")
                      .children()
                      .first()).parent()
                  : (t = f(this)
                      .closest(".qodef-menu-area")
                      .children()
                      .first())),
                  0 < f(this).closest(".qodef-sticky-header").length &&
                    ((t = f(this)
                      .closest(".qodef-sticky-header")
                      .children()
                      .first()),
                    (i = t)),
                  i.parent().hasClass("qodef-logo-area")
                    ? (o = qodefGlobalVars.vars.qodefLogoAreaHeight)
                    : i.parent().hasClass("qodef-top-bar")
                    ? (o = f(".qodef-menu-area").height())
                    : i.parent().hasClass("qodef-menu-area")
                    ? (o = f(".qodef-menu-area").height())
                    : i.parent().hasClass("qodef-sticky-header")
                    ? (o = qodefGlobalVars.vars.qodefStickyHeight)
                    : i.parent().hasClass("qodef-mobile-header") &&
                      (o = f(".qodef-mobile-header-inner").height()),
                  0 <
                    f(this).closest(".qodef-overlapping-bottom-container")
                      .length && (o = f(".qodef-ovelapping-menu").height()),
                  a.height(o),
                  t.stop(!0).fadeIn(600),
                  f('.qodef-search-cover input[type="text"]').focus(),
                  f(".qodef-search-close, .content, footer").on(
                    "click",
                    function (e) {
                      e.preventDefault(), t.stop(!0).fadeOut(450);
                    }
                  ),
                  t.blur(function () {
                    t.stop(!0).fadeOut(450);
                  });
              });
    }
    ((qodef.modules.header = e).isStickyVisible = !1),
      (e.stickyAppearAmount = 0),
      e.behaviour,
      (e.qodefSideArea = o),
      (e.qodefSideAreaScroll = t),
      (e.qodefFullscreenMenu = i),
      (e.qodefInitMobileNavigation = a),
      (e.qodefMobileHeaderBehavior = d),
      (e.qodefSetDropDownMenuPosition = n),
      (e.qodefDropDownMenu = s),
      (e.qodefSearch = r),
      (e.qodefVerticalMenuScroll = c),
      f(document).ready(function () {
        !(function () {
          var o,
            e = f(".qodef-page-header"),
            t = f(".qodef-sticky-header"),
            i = f(".qodef-fixed-wrapper"),
            a = f(".qodef-page-header").find(".qodef-fixed-wrapper").length
              ? f(".qodef-page-header").find(".qodef-fixed-wrapper").offset()
                  .top
              : null;
          switch (!0) {
            case qodef.body.hasClass("qodef-sticky-header-on-scroll-up"):
              qodef.modules.header.behaviour =
                "qodef-sticky-header-on-scroll-up";
              var d = f(document).scrollTop();
              o =
                qodefGlobalVars.vars.qodefTopBarHeight +
                qodefGlobalVars.vars.qodefLogoAreaHeight +
                qodefGlobalVars.vars.qodefMenuAreaHeight +
                qodefGlobalVars.vars.qodefStickyHeaderHeight;
              var n = function () {
                var e = f(document).scrollTop();
                (d < e && o < e) || e < o
                  ? ((qodef.modules.header.isStickyVisible = !1),
                    t
                      .removeClass("header-appear")
                      .find(".qodef-main-menu .second")
                      .removeClass("qodef-drop-down-start"))
                  : ((qodef.modules.header.isStickyVisible = !0),
                    t.addClass("header-appear")),
                  (d = f(document).scrollTop());
              };
              n(),
                f(window).scroll(function () {
                  n();
                });
              break;
            case qodef.body.hasClass("qodef-sticky-header-on-scroll-down-up"):
              (qodef.modules.header.behaviour =
                "qodef-sticky-header-on-scroll-down-up"),
                (o =
                  0 !== qodefPerPageVars.vars.qodefStickyScrollAmount
                    ? qodefPerPageVars.vars.qodefStickyScrollAmount
                    : qodefGlobalVars.vars.qodefTopBarHeight +
                      qodefGlobalVars.vars.qodefLogoAreaHeight +
                      qodefGlobalVars.vars.qodefMenuAreaHeight),
                (qodef.modules.header.stickyAppearAmount = o);
              var n = function () {
                qodef.scroll < o
                  ? ((qodef.modules.header.isStickyVisible = !1),
                    t
                      .removeClass("header-appear")
                      .find(".qodef-main-menu .second")
                      .removeClass("qodef-drop-down-start"))
                  : ((qodef.modules.header.isStickyVisible = !0),
                    t.addClass("header-appear"));
              };
              n(),
                f(window).scroll(function () {
                  n();
                });
              break;
            case qodef.body.hasClass("qodef-fixed-on-scroll"):
              qodef.modules.header.behaviour = "qodef-fixed-on-scroll";
              var s = function () {
                qodef.scroll < a
                  ? (i.removeClass("fixed"), e.css("margin-bottom", 0))
                  : (i.addClass("fixed"), e.css("margin-bottom", i.height()));
              };
              s(),
                f(window).scroll(function () {
                  s();
                });
          }
        })(),
          o(),
          t(),
          i(),
          a(),
          d(),
          n(),
          s(),
          r(),
          c(),
          l().init();
      }),
      f(window).load(function () {
        n();
      }),
      f(window).resize(function () {
        s();
      });
    var l = function () {
      var o = f(".qodef-vertical-menu-area");
      return {
        init: function () {
          o.length &&
            (function () {
              var i,
                a,
                e = o.find(".qodef-vertical-menu");
              void 0 !== e.data("navigation-type") && e.data("navigation-type");
              (i = e.find("ul li.menu-item-has-children")),
                (a = i.find(" > .second, > ul")),
                i.each(function () {
                  var o = f(this).find(" > .second, > ul"),
                    t = this;
                  if (Modernizr.touch) {
                    var e = f(this).find("> a");
                    e.on("click tap", function (e) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        o.hasClass("qodef-float-open")
                          ? (o.removeClass("qodef-float-open"),
                            f(t).removeClass("open"))
                          : (f(this).parents("li").hasClass("open") ||
                              (i.removeClass("open"),
                              a.removeClass("qodef-float-open")),
                            o.addClass("qodef-float-open"),
                            f(t).addClass("open"));
                    });
                  } else
                    f(this).hoverIntent({
                      over: function () {
                        o.addClass("qodef-float-open"), f(t).addClass("open");
                      },
                      out: function () {
                        o.removeClass("qodef-float-open"),
                          f(t).removeClass("open");
                      },
                      timeout: 300,
                    });
                });
            })();
        },
      };
    };
    function c() {
      function e(e) {
        var o,
          t = 0;
        e || (e = window.event),
          e.wheelDelta
            ? (t = e.wheelDelta / 120)
            : e.detail && (t = -e.detail / 3),
          t &&
            ((o = t) < 0
              ? Math.abs(d) <= n && ((d += 20 * o), f(i).css("margin-top", d))
              : d <= -20 && ((d += 20 * o), f(i).css("margin-top", d))),
          e.preventDefault && e.preventDefault(),
          (e.returnValue = !1);
      }
      if (f(".qodef-vertical-menu-area").length) {
        var o = qodef.windowHeight,
          t = f(".qodef-vertical-menu-area"),
          i = f(".qodef-vertical-menu-area .qodef-vertical-menu-area-inner"),
          a =
            i.outerHeight() +
            parseInt(t.css("padding-top")) +
            parseInt(t.css("padding-bottom")),
          d = 0,
          n = a - o;
        f(t).on(
          "hover",
          function () {
            qodef.modules.common.qodefDisableScroll(),
              window.addEventListener &&
                (window.addEventListener("mousewheel", e, !1),
                window.addEventListener("DOMMouseScroll", e, !1)),
              (window.onmousewheel = document.onmousewheel = e);
          },
          function () {
            qodef.modules.common.qodefEnableScroll(),
              window.removeEventListener("mousewheel", e, !1),
              window.removeEventListener("DOMMouseScroll", e, !1);
          }
        );
      }
    }
  })(jQuery),
  (function (d) {
    "use strict";
    var e = {};
    function o() {
      if (
        0 < d(".qodef-title.qodef-has-parallax-background").length &&
        0 === d(".touch").length
      ) {
        var e = d(".qodef-title.qodef-has-parallax-background"),
          o = d(".qodef-title.qodef-has-parallax-background.qodef-zoom-out"),
          t = parseInt(e.data("background-width").match(/\d+/)),
          i = (e.data("height") / 1e4) * 7,
          a = -qodef.scroll * i;
        e.css({
          "background-position":
            "center " + (a + qodefGlobalVars.vars.qodefAddForAdminBar) + "px",
        }),
          o.css({ "background-size": t - qodef.scroll + "px auto" }),
          d(window).scroll(function () {
            (a = -qodef.scroll * i),
              e.css({
                "background-position":
                  "center " +
                  (a + qodefGlobalVars.vars.qodefAddForAdminBar) +
                  "px",
              }),
              o.css({ "background-size": t - qodef.scroll + "px auto" });
          });
      }
    }
    ((qodef.modules.title = e).qodefParallaxTitle = o),
      d(document).ready(function () {
        o();
      }),
      d(window).load(function () {}),
      d(window).resize(function () {});
  })(jQuery),
  (function (z) {
    "use strict";
    var e = {};
    function o() {
      var e = z(".qodef-counter");
      e.length &&
        e.each(function () {
          var o = z(this);
          o.appear(
            function () {
              if (
                (o
                  .parents(".qodef-counter-holder")
                  .addClass("qodef-counter-holder-show"),
                o.hasClass("zero"))
              ) {
                var e = parseFloat(o.text());
                o.countTo({
                  from: 0,
                  to: e,
                  speed: 1500,
                  refreshInterval: 100,
                });
              } else o.absoluteCounter({ speed: 2e3, fadeInDelay: 1e3 });
            },
            { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }
          );
        });
    }
    function t() {
      var e = z(".qodef-progress-bar");
      e.length &&
        e.each(function () {
          var s = z(this);
          s.appear(function () {
            var e, o, t;
            if (
              ((e = s),
              (o = parseFloat(
                e.find(".qodef-progress-content").data("percentage")
              )),
              (t = e.find(".qodef-progress-number .qodef-percent")).length &&
                t.each(function () {
                  var e = z(this);
                  e
                    .parents(".qodef-progress-number-wrapper")
                    .css("opacity", "1"),
                    e.countTo({
                      from: 0,
                      to: o,
                      speed: 1500,
                      refreshInterval: 50,
                    });
                }),
              0 !== s.find(".qodef-floating.qodef-floating-inside"))
            ) {
              var i = s.find(".qodef-progress-content").height();
              (i += parseFloat(
                s.find(".qodef-progress-title-holder").css("padding-bottom")
              )),
                (i += parseFloat(
                  s.find(".qodef-progress-title-holder").css("margin-bottom")
                )),
                s
                  .find(".qodef-floating-inside")
                  .css("margin-bottom", -i + "px");
            }
            var a = s.find(".qodef-progress-content").data("percentage"),
              d = s.find(".qodef-progress-content"),
              n = s.find(".qodef-progress-number");
            d.css("width", "0%"),
              d.animate({ width: a + "%" }, 1500),
              n.css("left", "0%"),
              n.animate({ left: a + "%" }, 1500);
          });
        });
    }
    function i() {
      var e = z(".qodef-message");
      e.length &&
        e.each(function () {
          z(this)
            .find(".qodef-close")
            .on("click", function (e) {
              e.preventDefault(), z(this).parent().parent().fadeOut(500);
            });
        });
    }
    function a() {
      var e = z(".qodef-message.qodef-with-icon");
      e.length &&
        e.each(function () {
          var e = z(this),
            o = e.find(".qodef-message-text-holder").height(),
            t = e.find(".qodef-message-icon-holder").height();
          t < o
            ? e.find(".qodef-message-icon-holder").height(o)
            : e.find(".qodef-message-text-holder").height(t);
        });
    }
    function d() {
      var s,
        r,
        l,
        f,
        c,
        h,
        p,
        u,
        q,
        m,
        g,
        v,
        w,
        b,
        y,
        _,
        e = z(".qodef-countdown");
      e.length &&
        e.each(function () {
          var e,
            o,
            t,
            i,
            a,
            d = z(this).attr("id"),
            n = z("#" + d);
          (s = n.data("year")),
            (r = n.data("month")),
            (l = n.data("day")),
            (f = n.data("hour")),
            (c = n.data("minute")),
            (h = n.data("timezone")),
            (p = n.data("month-label")),
            (u = n.data("sin-month-label")),
            (q = n.data("day-label")),
            (m = n.data("sin-day-label")),
            (g = n.data("hour-label")),
            (v = n.data("sin-hour-label")),
            (w = n.data("minute-label")),
            (b = n.data("sin-minute-label")),
            (y = n.data("second-label")),
            (_ = n.data("sin-second-label")),
            (e = n.data("digit-size")),
            (o = n.data("label-size")),
            (t = n.data("digit-color")),
            (a = n.data("label-color")),
            (i = n.data("vertical-separator-color")),
            n.countdown({
              until: new Date(s, r - 1, l, f, c, 44),
              labels: ["Years", p, "Weeks", q, g, w, y],
              labels1: ["Years", u, "Weeks", m, v, b, _],
              format: "ODHMS",
              timezone: h,
              padZeroes: !0,
              onTick: function () {
                n
                  .find(".countdown-amount")
                  .css({
                    "font-size": e + "px",
                    "line-height": e + "px",
                    color: t,
                    "border-right-color": i,
                  }),
                  n
                    .find(".countdown-period")
                    .css({ "font-size": o + "px", color: a });
              },
            });
        });
    }
    ((qodef.modules.shortcodes = e).qodefInitCounter = o),
      (e.qodefInitProgressBars = t),
      (e.qodefInitCountdown = d),
      (e.qodefInitMessages = i),
      (e.qodefInitMessageHeight = a),
      (e.qodefInitTestimonials = s),
      (e.qodefInitFullWidthSlider = r),
      (e.qodefInitCarousels = l),
      (e.qodefInitPieChart = f),
      (e.qodefInitPieChartDoughnut = c),
      (e.qodefInitTabs = h),
      (e.qodefInitTabIcons = p),
      (e.qodefInitBlogListMasonry = q),
      (e.qodefCustomFontResize = m),
      (e.qodefInitImageGallery = b),
      (e.qodefInitAccordions = w),
      (e.qodefShowGoogleMap = g),
      (e.qodefInitPortfolio = C),
      (e.qodefInitPortfolioSlider = x),
      (e.qodefInitPortfolioLoadMore = k),
      (e.qodefCheckSliderForHeaderStyle = P),
      (e.qodefCheckSliderForNavigationStyle = T),
      (e.qodefInitPricingSlider = y),
      (e.qodefInitLiveSearch = _),
      z(document).ready(function () {
        var e;
        o(),
          t(),
          d(),
          n().init(),
          i(),
          a(),
          s(),
          r(),
          l(),
          f(),
          c(),
          h(),
          p(),
          u().init(),
          q(),
          m(),
          b(),
          w(),
          g(),
          C(),
          x(),
          k(),
          y(),
          (e = z(".no-touch  .qodef-mobile-showcase .qodef-mobile-wrapper"))
            .length &&
            e.each(function () {
              var e = z(this);
              e.appear(
                function () {
                  e.addClass("qodef-view-layers");
                },
                { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }
              );
            }),
          _(),
          M().init();
      }),
      z(window).resize(function () {
        q(), m();
      }),
      z(window).load(function () {
        var e, f, o, t, i, a, c;
        (e = z(".qodef-widget-sticky-sidebar")),
          (a = i = t = o = f = 0),
          (c = []),
          e.length &&
            e.each(function () {
              var e = z(this);
              (o = e.offset().top),
                (t = e.position().top),
                e.parents("aside.qodef-sidebar").length
                  ? (i = e.parents("aside.qodef-sidebar").height())
                  : e.parents(".wpb_widgetised_column").length &&
                    (i = e.parents(".wpb_widgetised_column").height()),
                e.parents("aside.qodef-sidebar").length
                  ? (a = e.parents("aside.qodef-sidebar").width())
                  : e.parents(".wpb_widgetised_column").length &&
                    (a = e.parents(".wpb_widgetised_column").width()),
                c.push({
                  object: e,
                  offset: o,
                  position: t,
                  height: i,
                  width: a,
                });
            }),
          z(window).scroll(function () {
            c.length &&
              z.each(c, function (e) {
                var o = c[e].object,
                  t = c[e].offset,
                  i = c[e].position,
                  a = c[e].height,
                  d = c[e].width;
                if (
                  (qodef.body.hasClass(
                    "qodef-sticky-header-on-scroll-down-up"
                  ) || qodef.body.hasClass("qodef-sticky-header-on-scroll-up")
                    ? ((f = z(".qodef-sticky-header").height()),
                      z(".qodef-sticky-header").hasClass("header-appear") ||
                        (f = 0))
                    : (f = z(".qodef-page-header").height()),
                  1024 < qodef.windowWidth)
                ) {
                  var n = -(i - f - 40),
                    s = a - i + 40,
                    r = 0;
                  o.parents("aside.qodef-sidebar").length
                    ? (r = o
                        .parents(".qodef-content-has-sidebar")
                        .children(".qodef-content-right-from-sidebar").length
                        ? o
                            .parents(".qodef-content-has-sidebar")
                            .children(".qodef-content-right-from-sidebar")
                            .outerHeight()
                        : o
                            .parents(".qodef-content-has-sidebar")
                            .children(".qodef-content-left-from-sidebar")
                            .outerHeight())
                    : o.parents(".wpb_widgetised_column").length &&
                      (r = o.parents(".vc_row").outerHeight());
                  var l =
                    t - f - i - qodefGlobalVars.vars.qodefTopBarHeight + r;
                  qodef.scroll >= t - f && a < r
                    ? (o.parents("aside.qodef-sidebar").length
                        ? o
                            .parents("aside.qodef-sidebar")
                            .hasClass("qodef-sticky-sidebar-appeared")
                          ? o
                              .parents(
                                "aside.qodef-sidebar.qodef-sticky-sidebar-appeared"
                              )
                              .css({ top: n + "px" })
                          : o
                              .parents("aside.qodef-sidebar")
                              .addClass("qodef-sticky-sidebar-appeared")
                              .css({
                                position: "fixed",
                                top: n + "px",
                                width: d,
                                "margin-top": "-10px",
                              })
                              .stop()
                              .animate({ "margin-top": "0" }, 200)
                        : o.parents(".wpb_widgetised_column").length &&
                          (o
                            .parents(".wpb_widgetised_column")
                            .hasClass("qodef-sticky-sidebar-appeared")
                            ? o
                                .parents(
                                  ".wpb_widgetised_column.qodef-sticky-sidebar-appeared"
                                )
                                .css({ top: n + "px" })
                            : o
                                .parents(".wpb_widgetised_column")
                                .addClass("qodef-sticky-sidebar-appeared")
                                .css({
                                  position: "fixed",
                                  top: n + "px",
                                  width: d,
                                  "margin-top": "-10px",
                                })
                                .stop()
                                .animate({ "margin-top": "0" }, 200)),
                      qodef.scroll + s >= l
                        ? o.parents("aside.qodef-sidebar").length
                          ? o
                              .parents(
                                "aside.qodef-sidebar.qodef-sticky-sidebar-appeared"
                              )
                              .css({
                                position: "absolute",
                                top: r - s + n - 40 - f + "px",
                              })
                          : o.parents(".wpb_widgetised_column").length &&
                            o
                              .parents(
                                ".wpb_widgetised_column.qodef-sticky-sidebar-appeared"
                              )
                              .css({
                                position: "absolute",
                                top: r - s + n - 40 - f + "px",
                              })
                        : o.parents("aside.qodef-sidebar").length
                        ? o
                            .parents(
                              "aside.qodef-sidebar.qodef-sticky-sidebar-appeared"
                            )
                            .css({ position: "fixed", top: n + "px" })
                        : o.parents(".wpb_widgetised_column").length &&
                          o
                            .parents(
                              ".wpb_widgetised_column.qodef-sticky-sidebar-appeared"
                            )
                            .css({ position: "fixed", top: n + "px" }))
                    : o.parents("aside.qodef-sidebar").length
                    ? o
                        .parents("aside.qodef-sidebar")
                        .removeClass("qodef-sticky-sidebar-appeared")
                        .css({ position: "relative", top: "0", width: "auto" })
                    : o.parents(".wpb_widgetised_column").length &&
                      o
                        .parents(".wpb_widgetised_column")
                        .removeClass("qodef-sticky-sidebar-appeared")
                        .css({ position: "relative", top: "0", width: "auto" });
                } else o.parents("aside.qodef-sidebar").length ? o.parents("aside.qodef-sidebar").removeClass("qodef-sticky-sidebar-appeared").css({ position: "relative", top: "0", width: "auto" }) : o.parents(".wpb_widgetised_column").length && o.parents(".wpb_widgetised_column").removeClass("qodef-sticky-sidebar-appeared").css({ position: "relative", top: "0", width: "auto" });
              });
          });
      });
    var n = (qodef.modules.shortcodes.qodefIcon = function () {
      var e = z(".qodef-icon-shortcode");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e;
              (e = z(this)).hasClass("qodef-icon-animation") &&
                e.appear(
                  function () {
                    e.parent(".qodef-icon-animation-holder").addClass(
                      "qodef-icon-animation-show"
                    );
                  },
                  {
                    accX: 0,
                    accY: qodefGlobalVars.vars.qodefElementAppearAmount,
                  }
                ),
                (function (e) {
                  if (void 0 !== e.data("hover-color")) {
                    var o = function (e) {
                        e.data.icon.css("color", e.data.color);
                      },
                      t = e.find(".qodef-icon-element"),
                      i = e.data("hover-color"),
                      a = t.css("color");
                    "" !== i &&
                      (e.on("mouseenter", { icon: t, color: i }, o),
                      e.on("mouseleave", { icon: t, color: a }, o));
                  }
                })(z(this)),
                (function (e) {
                  if (void 0 !== e.data("hover-background-color")) {
                    var o = function (e) {
                        e.data.icon.css("background-color", e.data.color);
                      },
                      t = e.data("hover-background-color"),
                      i = e.css("background-color");
                    "" !== t &&
                      (e.on("mouseenter", { icon: e, color: t }, o),
                      e.on("mouseleave", { icon: e, color: i }, o));
                  }
                })(z(this)),
                (function (e) {
                  if (void 0 !== e.data("hover-border-color")) {
                    var o = function (e) {
                        e.data.icon.css("border-color", e.data.color);
                      },
                      t = e.data("hover-border-color"),
                      i = e.css("border-color");
                    "" !== t &&
                      (e.on("mouseenter", { icon: e, color: t }, o),
                      e.on("mouseleave", { icon: e, color: i }, o));
                  }
                })(z(this));
            });
        },
      };
    });
    function s() {
      var e = z(".qodef-testimonials");
      e.length &&
        e.each(function () {
          var e = z(this),
            o = e.siblings(".owl-buttons").find(".owl-prev"),
            t = e.siblings(".owl-buttons").find(".owl-next");
          e.appear(
            function () {
              e.css("visibility", "visible");
            },
            { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }
          );
          var i = !1,
            a = 5e3,
            d = "cards_carousel";
          void 0 !== e.data("animation-speed") &&
            !1 !== e.data("animation-speed") &&
            (a = e.data("animation-speed")),
            void 0 !== e.data("layout") && (d = e.data("layout")),
            "standard_carousel" === d && (i = !0),
            e.owlCarousel({
              singleItem: !0,
              autoPlay: a,
              addClassActive: !0,
              navigation: !1,
              transitionStyle: "fade",
              autoHeight: !0,
              pagination: i,
              slideSpeed: 600,
            }),
            o.on("click", function () {
              e.trigger("owl.next");
            }),
            t.on("click", function () {
              e.trigger("owl.prev");
            });
        });
    }
    function r() {
      var e = z(".qodef-fullwidth-slider-slides");
      e.length &&
        e.each(function () {
          var e = z(this);
          e.appear(
            function () {
              e.css("visibility", "visible");
            },
            { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }
          );
          var o = 5e3;
          void 0 !== e.data("interval") &&
            !1 !== e.data("interval") &&
            (o = e.data("interval")),
            e.owlCarousel({
              singleItem: !0,
              autoPlay: o,
              addClassActive: !0,
              navigation: !1,
              transitionStyle: "fade",
              autoHeight: !0,
              pagination: !0,
              slideSpeed: 600,
            });
        });
    }
    function l() {
      var t,
        i,
        a,
        e = z(".qodef-carousel-holder");
      e.length &&
        e.each(function () {
          var e = z(this);
          (t = e.find(".qodef-carousel")),
            (i = t.data("items")),
            (a = "yes" === t.data("navigation"));
          var o = [
            [0, 1],
            [480, 2],
            [768, 3],
            [1024, i],
          ];
          t.owlCarousel({
            autoPlay: 3e3,
            items: i,
            itemsCustom: o,
            pagination: !1,
            navigation: a,
            slideSpeed: 600,
            navigationText: [
              '<span class="qodef-prev-icon"><i class="fa fa-chevron-left"></i></span>',
              '<span class="qodef-next-icon"><i class="fa fa-chevron-right"></i></span>',
            ],
          });
        });
    }
    function f() {
      var e = z(".qodef-pie-chart-holder, .qodef-pie-chart-with-icon-holder");
      e.length &&
        e.each(function () {
          var e = z(this),
            o = e.children(".qodef-percentage, .qodef-percentage-with-icon"),
            t = "#f4f4f4",
            i = "#b2dd4c",
            a = 145,
            d = o.data("bar-color");
          void 0 !== d && (i = d);
          var n = o.data("bar-inactive-color");
          void 0 !== n && (t = n);
          var s = o.data("size");
          void 0 !== s && (a = s),
            o.appear(
              function () {
                !(function (e) {
                  e.css("opacity", "1");
                  var o = e.find(".qodef-to-counter"),
                    t = parseFloat(o.text());
                  o.countTo({
                    from: 0,
                    to: t,
                    speed: 1500,
                    refreshInterval: 50,
                  });
                })(e),
                  o.css({
                    opacity: "1",
                    width: a + "px",
                    height: a + "px",
                    "line-height": a + "px",
                  }),
                  o.easyPieChart({
                    barColor: i,
                    trackColor: t,
                    scaleColor: !1,
                    lineCap: "round",
                    lineWidth: 7,
                    animate: 1500,
                    size: a,
                  });
              },
              { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }
            );
        });
    }
    function c() {
      z(".qodef-pie-chart-doughnut-holder, .qodef-pie-chart-pie-holder").each(
        function () {
          for (
            var e = z(this).find("canvas"),
              o = e.attr("id"),
              t = document.getElementById(o).getContext("2d"),
              i = [],
              a = z(t.canvas),
              d = 1;
            d <= 10;
            d++
          ) {
            var n,
              s = a.data("value-" + d),
              r = a.data("color-" + d);
            void 0 !== s &&
              void 0 !== r &&
              ((n = { value: s, color: r }), i.push(n));
          }
          e.hasClass("qodef-pie")
            ? new Chart(t).Pie(i, { segmentStrokeColor: "transparent" })
            : new Chart(t).Doughnut(i, { segmentStrokeColor: "transparent" });
        }
      );
    }
    function h() {
      var e = z(".qodef-tabs");
      e.length &&
        e.each(function () {
          var e = z(this);
          e.hasClass("qodef-horizontal")
            ? e.tabs()
            : e.hasClass("qodef-vertical") &&
              (e.tabs().addClass("ui-tabs-vertical ui-helper-clearfix"),
              e
                .find(".qodef-tabs-nav > ul >li")
                .removeClass("ui-corner-top")
                .addClass("ui-corner-left"));
        });
    }
    function p() {
      var e = z(".qodef-tab-container");
      e.length &&
        e.each(function () {
          var e = z(this),
            o = e.attr("id"),
            t = "";
          (void 0 === e.data("icon-html") && "false" === e.data("icon-html")) ||
            (t = e.data("icon-html"));
          var i = e
            .parents(".qodef-tabs")
            .find('.qodef-tabs-nav > li > a[href="#' + o + '"]');
          void 0 !== i && i.children(".qodef-icon-frame").append(t);
        });
    }
    var u = (qodef.modules.shortcodes.qodefButton = function () {
      var e = z(".qodef-btn");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              !(function (e) {
                if (void 0 !== e.data("hover-color")) {
                  var o = function (e) {
                      e.data.button.css("color", e.data.color);
                    },
                    t = e.css("color"),
                    i = e.data("hover-color");
                  e.on("mouseenter", { button: e, color: i }, o),
                    e.on("mouseleave", { button: e, color: t }, o);
                }
              })(z(this)),
                (function (e) {
                  if (void 0 !== e.data("hover-bg-color")) {
                    var o = function (e) {
                        e.data.button.css("background-color", e.data.color);
                      },
                      t = e.css("background-color"),
                      i = e.data("hover-bg-color");
                    e.on("mouseenter", { button: e, color: i }, o),
                      e.on("mouseleave", { button: e, color: t }, o);
                  }
                })(z(this)),
                (function (e) {
                  if (void 0 !== e.data("hover-border-color")) {
                    var o = function (e) {
                        e.data.button.css("border-color", e.data.color);
                      },
                      t = e.css("border-top-color"),
                      i = e.data("hover-border-color");
                    e.on("mouseenter", { button: e, color: i }, o),
                      e.on("mouseleave", { button: e, color: t }, o);
                  }
                })(z(this));
            });
        },
      };
    });
    function q() {
      var e = z(".qodef-blog-list-holder.qodef-masonry .qodef-blog-list");
      e.length &&
        e.each(function () {
          var e = z(this);
          e.animate({ opacity: 1 }),
            e.isotope({
              itemSelector: ".qodef-blog-list-masonry-item",
              masonry: {
                columnWidth: ".qodef-blog-list-masonry-grid-sizer",
                gutter: ".qodef-blog-list-masonry-grid-gutter",
              },
            });
        });
    }
    function m() {
      var e = z(".qodef-custom-font-holder");
      e.length &&
        e.each(function () {
          var e,
            o,
            t = z(this),
            i = 1,
            a = 1;
          qodef.windowWidth < 1200 && (i = 0.8),
            qodef.windowWidth < 1e3 && (i = 0.7),
            qodef.windowWidth < 768 && ((i = 0.6), (a = 0.7)),
            qodef.windowWidth < 600 && ((i = 0.5), (a = 0.6)),
            qodef.windowWidth < 480 && ((i = 0.4), (a = 0.5)),
            void 0 !== t.data("font-size") &&
              !1 !== t.data("font-size") &&
              (70 < (e = parseInt(t.data("font-size")))
                ? (e = Math.round(e * i))
                : 35 < e && (e = Math.round(e * a)),
              t.css("font-size", e + "px")),
            void 0 !== t.data("line-height") &&
              !1 !== t.data("line-height") &&
              (70 < (o = parseInt(t.data("line-height"))) &&
              qodef.windowWidth < 1200
                ? (o = "1.2em")
                : 35 < o && qodef.windowWidth < 768
                ? (o = "1.2em")
                : (o += "px"),
              t.css("line-height", o));
        });
    }
    function g() {
      z(".qodef-google-map").length &&
        z(".qodef-google-map").each(function () {
          var e,
            o,
            t,
            i,
            a,
            d,
            n,
            s,
            r,
            l,
            f = z(this);
          void 0 !== f.data("custom-map-style") &&
            (e = f.data("custom-map-style")),
            void 0 !== f.data("color-overlay") &&
              !1 !== f.data("color-overlay") &&
              (o = f.data("color-overlay")),
            void 0 !== f.data("saturation") &&
              !1 !== f.data("saturation") &&
              (t = f.data("saturation")),
            void 0 !== f.data("lightness") &&
              !1 !== f.data("lightness") &&
              (i = f.data("lightness")),
            void 0 !== f.data("zoom") &&
              !1 !== f.data("zoom") &&
              (a = f.data("zoom")),
            void 0 !== f.data("pin") &&
              !1 !== f.data("pin") &&
              (d = f.data("pin")),
            void 0 !== f.data("height") &&
              !1 !== f.data("height") &&
              (n = f.data("height")),
            void 0 !== f.data("unique-id") &&
              !1 !== f.data("unique-id") &&
              (s = f.data("unique-id")),
            void 0 !== f.data("scroll-wheel") && (r = f.data("scroll-wheel")),
            void 0 !== f.data("addresses") &&
              !1 !== f.data("addresses") &&
              (l = f.data("addresses")),
            (function (e, o, t, i, a, d, n, s, r, l, f, c) {
              if ("object" != typeof google) return;
              var h,
                p = [
                  {
                    stylers: [
                      { hue: o },
                      { saturation: t },
                      { lightness: i },
                      { gamma: 1 },
                    ],
                  },
                ];
              h = e ? "qodef-style" : google.maps.MapTypeId.ROADMAP;
              var u = new google.maps.StyledMapType(p, {
                name: "Qode Google Map",
              });
              f = new google.maps.Geocoder();
              var q = new google.maps.LatLng(-34.397, 150.644);
              isNaN(s) || (s += "px");
              var m,
                g = {
                  zoom: d,
                  scrollwheel: a,
                  center: q,
                  zoomControl: !0,
                  zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_CENTER,
                  },
                  scaleControl: !1,
                  scaleControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER,
                  },
                  streetViewControl: !1,
                  streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER,
                  },
                  panControl: !1,
                  panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER,
                  },
                  mapTypeControl: !1,
                  mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "qodef-style"],
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.LEFT_CENTER,
                  },
                  mapTypeId: h,
                };
              for (
                (l = new google.maps.Map(
                  document.getElementById(n),
                  g
                )).mapTypes.set("qodef-style", u),
                  m = 0;
                m < c.length;
                ++m
              )
                v(c[m], r, l, f);
              document.getElementById(n).style.height = s;
            })(
              e,
              o,
              t,
              i,
              r,
              a,
              "qodef-map-" + s,
              n,
              d,
              "map_" + s,
              "geocoder_" + s,
              l
            );
        });
    }
    function v(i, a, d, e) {
      if ("" !== i) {
        var o =
            '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' +
            i +
            "</p></div></div>",
          n = new google.maps.InfoWindow({ content: o });
        e.geocode({ address: i }, function (e, o) {
          if (o === google.maps.GeocoderStatus.OK) {
            d.setCenter(e[0].geometry.location);
            var t = new google.maps.Marker({
              map: d,
              position: e[0].geometry.location,
              icon: a,
              title: i.store_title,
            });
            google.maps.event.addListener(t, "click", function () {
              n.open(d, t);
            }),
              google.maps.event.addDomListener(window, "resize", function () {
                d.setCenter(e[0].geometry.location);
              });
          }
        });
      }
    }
    function w() {
      var e = z(".qodef-accordion-holder");
      e.length &&
        e.each(function () {
          var e = z(this);
          if (
            (e.hasClass("qodef-accordion") &&
              e.accordion({
                animate: "swing",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "content",
              }),
            e.hasClass("qodef-toggle"))
          ) {
            var o = z(this),
              t = o.find(".qodef-title-holder"),
              i = t.next();
            o.addClass(
              "accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"
            ),
              t.addClass(
                "ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom"
              ),
              i
                .addClass(
                  "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                )
                .hide(),
              t.each(function () {
                var e = z(this);
                e.on("hover", function () {
                  e.toggleClass("ui-state-hover");
                }),
                  e.on("click", function () {
                    e.toggleClass(
                      "ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"
                    ),
                      e
                        .next()
                        .toggleClass("ui-accordion-content-active")
                        .slideToggle(400);
                  });
              });
          }
        });
    }
    function b() {
      var e = z(".qodef-image-gallery");
      e.length &&
        e.each(function () {
          var e = z(this).children(".qodef-image-gallery-slider"),
            o = e.data("autoplay"),
            t = "slide" !== e.data("animation") && e.data("animation"),
            i = "yes" === e.data("navigation"),
            a = "yes" === e.data("pagination");
          e.owlCarousel({
            singleItem: !0,
            autoPlay: 1e3 * o,
            navigation: i,
            transitionStyle: t,
            autoHeight: !0,
            pagination: a,
            slideSpeed: 600,
            navigationText: [
              '<span class="qodef-prev-icon"><i class="fa fa-chevron-left"></i></span>',
              '<span class="qodef-next-icon"><i class="fa fa-chevron-right"></i></span>',
            ],
          });
        });
    }
    function y() {
      function x(e, o, t, i, a, d, n, s) {
        e.text(Math.round(o * t * 100) / 100),
          1 === o ? i.text(o + " " + s) : i.text(o + " " + s + "s"),
          a.width(Math.round((d / n) * 100) + "%");
      }
      z(".qodef-pricing-slider").each(function () {
        var e,
          i,
          o = z(this),
          t = o.find(".qodef-pricing-slider-bar-holder"),
          a = o.find(".qodef-pricing-slider-drag"),
          d = o.find(".qodef-pricing-slider-bar"),
          n = o.find(".qodef-pricing-slider-button-holder"),
          s = n.find(".active"),
          r = o.find(".qodef-price"),
          l = o.find(".qodef-pricing-slider-value"),
          f = o.data("unit-name") ? o.data("unit-name") : "unit",
          c = parseFloat(o.data("units-range"))
            ? parseFloat(o.data("units-range"))
            : 0,
          h = parseFloat(o.data("units-breakpoints"))
            ? parseFloat(o.data("units-breakpoints"))
            : 0,
          p = parseFloat(s.data("price-per-unit"))
            ? parseFloat(s.data("price-per-unit"))
            : 0,
          u = parseFloat(s.data("price-reduce-per-breakpoint"))
            ? parseFloat(s.data("price-reduce-per-breakpoint"))
            : 0,
          q = h,
          m = 0,
          g = t.offset().left,
          v = t.outerWidth() - a.outerWidth(),
          w = v / c,
          b = 0,
          y = 0,
          _ = 0;
        if (0 < h) {
          var C = c / h;
          for (e = 1; e < C; e++)
            d.append(
              '<span class="delimiter" style="left:' +
                Math.round((100 / C) * e) +
                '%;"></span>'
            );
        }
        x(r, _, p, l, d, y, v, f),
          n.find(".qodef-btn").on("click", function () {
            z(this).parent().hasClass("active") ||
              (s.removeClass("active"),
              z(this).parent().addClass("active"),
              (s = z(this).parent()),
              (p = parseFloat(s.data("price-per-unit"))
                ? parseFloat(s.data("price-per-unit"))
                : 0),
              (u = parseFloat(s.data("price-reduce-per-breakpoint"))
                ? parseFloat(s.data("price-reduce-per-breakpoint"))
                : 0),
              x(r, _, (p -= m * u), l, d, y, v, f));
          }),
          a.draggable({
            axis: "x",
            containment: t.parent(),
            scrollSensitivity: 10,
            start: function (e, o) {
              i = o.position.left;
            },
            drag: function (e, o) {
              var t = o.position.left > i ? "right" : "left";
              (i = o.position.left),
                (b = z(this).offset()),
                (y = b.left - g),
                (_ = Math.floor(y / w)),
                0 <= y &&
                  y <= v &&
                  ("right" === t
                    ? q < _ && ((q += h), m++, (p -= u))
                    : "left" === t && _ <= q - h && ((q -= h), m--, (p += u)),
                  x(r, _, p, l, d, y, v, f));
            },
          });
      });
    }
    function _() {
      z('.qodef-live-search-enabled input[type="text"]').each(function () {
        var i = z(this);
        i.focusin(function () {
          var e = i.offset().left,
            o = i.offset().top + i.outerHeight(),
            t = i.outerWidth();
          z(
            "<style> .dwls_search_results { width:" +
              t +
              "px; left: " +
              e +
              "px!important; top: " +
              o +
              "px!important }</style>"
          ).appendTo("head");
        });
      });
    }
    function C() {
      var e = z(
        ".qodef-portfolio-list-holder-outer.qodef-ptf-standard, .qodef-portfolio-list-holder-outer.qodef-ptf-gallery"
      );
      e.length &&
        e.each(function () {
          !(function (e) {
            var o = "";
            e.hasClass("qodef-ptf-has-filter") &&
              (o =
                "." +
                (o = e
                  .find(".qodef-portfolio-filter-holder-inner ul li")
                  .data("class")));
            var t = e.find(".qodef-portfolio-list-holder");
            t.mixItUp({
              callbacks: {
                onMixLoad: function () {
                  t.find("article").css("visibility", "visible");
                },
                onMixStart: function () {
                  t.find("article").css("visibility", "visible");
                },
                onMixBusy: function () {
                  t.find("article").css("visibility", "visible");
                },
              },
              selectors: { filter: o },
              animation: { effects: "fade", duration: 600 },
            });
          })(z(this)),
            qodef.modules.common.qodefInitParallax();
        });
    }
    function x() {
      var e = z(
        ".qodef-portfolio-list-holder-outer.qodef-portfolio-slider-holder"
      );
      e.length &&
        e.each(function () {
          var e = z(this),
            o = e.children(".qodef-portfolio-list-holder"),
            t = e.data("items"),
            i = [
              [0, 1],
              [480, 2],
              [768, 3],
              [1024, t],
            ];
          o.owlCarousel({
            autoPlay: 5e3,
            items: t,
            itemsCustom: i,
            pagination: !0,
            navigation: !0,
            slideSpeed: 600,
            transitionStyle: "fade",
            navigationText: [
              '<span class="qodef-prev-icon"><i class="fa fa-chevron-left"></i></span>',
              '<span class="qodef-next-icon"><i class="fa fa-chevron-right"></i></span>',
            ],
          });
        });
    }
    function k() {
      var e = z(".qodef-portfolio-list-holder-outer.qodef-ptf-load-more");
      e.length &&
        e.each(function () {
          var s,
            d,
            r = z(this),
            l = r.find(".qodef-portfolio-list-holder"),
            n = r.find(".qodef-ptf-list-load-more a");
          void 0 !== r.data("max-num-pages") &&
            !1 !== r.data("max-num-pages") &&
            (d = r.data("max-num-pages")),
            n.on("click", function (e) {
              var o = (function (e) {
                var o = {
                  type: "",
                  columns: "",
                  gridSize: "",
                  orderBy: "",
                  order: "",
                  number: "",
                  filter: "",
                  filterOrderBy: "",
                  category: "",
                  selectedProjectes: "",
                  showLoadMore: "",
                  titleTag: "",
                  nextPage: "",
                  maxNumPages: "",
                };
                void 0 !== e.data("type") &&
                  !1 !== e.data("type") &&
                  (o.type = e.data("type"));
                void 0 !== e.data("grid-size") &&
                  !1 !== e.data("grid-size") &&
                  (o.gridSize = e.data("grid-size"));
                void 0 !== e.data("columns") &&
                  !1 !== e.data("columns") &&
                  (o.columns = e.data("columns"));
                void 0 !== e.data("order-by") &&
                  !1 !== e.data("order-by") &&
                  (o.orderBy = e.data("order-by"));
                void 0 !== e.data("order") &&
                  !1 !== e.data("order") &&
                  (o.order = e.data("order"));
                void 0 !== e.data("number") &&
                  !1 !== e.data("number") &&
                  (o.number = e.data("number"));
                void 0 !== e.data("filter") &&
                  !1 !== e.data("filter") &&
                  (o.filter = e.data("filter"));
                void 0 !== e.data("filter-order-by") &&
                  !1 !== e.data("filter-order-by") &&
                  (o.filterOrderBy = e.data("filter-order-by"));
                void 0 !== e.data("category") &&
                  !1 !== e.data("category") &&
                  (o.category = e.data("category"));
                void 0 !== e.data("selected-projects") &&
                  !1 !== e.data("selected-projects") &&
                  (o.selectedProjectes = e.data("selected-projects"));
                void 0 !== e.data("show-load-more") &&
                  !1 !== e.data("show-load-more") &&
                  (o.showLoadMore = e.data("show-load-more"));
                void 0 !== e.data("title-tag") &&
                  !1 !== e.data("title-tag") &&
                  (o.titleTag = e.data("title-tag"));
                void 0 !== e.data("next-page") &&
                  !1 !== e.data("next-page") &&
                  (o.nextPage = e.data("next-page"));
                void 0 !== e.data("max-num-pages") &&
                  !1 !== e.data("max-num-pages") &&
                  (o.maxNumPages = e.data("max-num-pages"));
                return o;
              })(r);
              s = o.nextPage;
              var t,
                i = r.find('input[name*="qodef_ptf_load_more_nonce_"]');
              if (
                ((o.ptf_load_more_id = i
                  .attr("name")
                  .substring(i.attr("name").length - 4, i.attr("name").length)),
                (o.ptf_load_more_nonce = i.val()),
                e.preventDefault(),
                e.stopPropagation(),
                s <= d)
              ) {
                var a = {
                  action: "qode_core_portfolio_ajax_load_more",
                  type: (t = o).type,
                  columns: t.columns,
                  gridSize: t.gridSize,
                  orderBy: t.orderBy,
                  order: t.order,
                  number: t.number,
                  filter: t.filter,
                  filterOrderBy: t.filterOrderBy,
                  category: t.category,
                  selectedProjectes: t.selectedProjectes,
                  showLoadMore: t.showLoadMore,
                  titleTag: t.titleTag,
                  nextPage: t.nextPage,
                  ptf_load_more_id: t.ptf_load_more_id,
                  ptf_load_more_nonce: t.ptf_load_more_nonce,
                };
                z.ajax({
                  type: "POST",
                  data: a,
                  url: qodeCoreAjaxUrl,
                  success: function (e) {
                    s++, r.data("next-page", s);
                    var o,
                      t,
                      i,
                      a,
                      d = z.parseJSON(e),
                      n =
                        ((o = d.html),
                        (t = z.trim(o)),
                        (i = z(t)),
                        (a = z()),
                        i.each(function (e, o) {
                          1 === o.nodeType && (a = a.add(this));
                        }),
                        a);
                    r.waitForImages(function () {
                      setTimeout(function () {
                        l.mixItUp("append", n);
                      }, 400);
                    });
                  },
                });
              }
              s === d && n.hide();
            });
        });
    }
    if (z("#qodef-particles").length) {
      var S = {};
      (S.container = z("#qodef-particles")),
        (S.options = {}),
        (S.handle_resize = function () {
          S.container.is(".fullscreen") &&
            S.container.height(z(window).height());
        }),
        (S.load_options = function () {
          function e(e) {
            return S.container.attr(e) && S.container.attr(e).length;
          }
          function o(e) {
            return S.container.data(e);
          }
          S.options = {
            particles_number: e("data-particles-density")
              ? "high" == o("particles-density")
                ? 180
                : "medium" == o("particles-density")
                ? 120
                : 60
              : 60,
            particles_color: e("data-particles-color")
              ? o("particles-color")
              : "#e2e2e2",
            particles_opacity: e("data-particles-opacity")
              ? o("particles-opacity")
              : 1,
            particles_size: e("data-particles-size") ? o("particles-size") : 5,
            speed: e("data-speed") ? o("speed") : 5,
            show_lines: !!e("data-show-lines") && "yes" == o("show-lines"),
            line_length: e("data-line-length") ? o("line-length") : 100,
            hover: !!e("data-hover") && "yes" == o("hover"),
            click: !!e("data-click") && "yes" == o("click"),
          };
        }),
        (S.record_size = function () {
          S.size = { width: S.container.width(), height: S.container.height() };
        }),
        (S.init_particles = function () {
          particlesJS("qodef-p-particles-container", {
            particles: {
              number: {
                value: S.options.particles_number,
                density: { enable: !0, value_area: 800 },
              },
              color: { value: S.options.particles_color },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 },
              },
              opacity: {
                value: S.options.particles_opacity,
                random: !1,
                anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
              },
              size: {
                value: S.options.particles_size,
                random: !0,
                anim: { enable: !1, speed: 80, size_min: 2, sync: !1 },
              },
              line_linked: {
                enable: S.options.show_lines,
                distance: S.options.line_length,
                color: S.options.particles_color,
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: !0,
                speed: S.options.speed,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: { enable: !1, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: S.options.hover, mode: "grab" },
                onclick: { enable: S.options.click, mode: "push" },
                resize: !0,
              },
              modes: {
                grab: {
                  distance: 2 * S.options.line_length,
                  line_linked: { opacity: 0.7 },
                },
                bubble: {
                  distance: 800,
                  size: 80,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: { distance: 400, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: !0,
          });
        }),
        (S.init_content_pos = function () {
          var e = S.container.find(".qodef-p-content");
          e.attr("data-width") &&
            e.attr("data-width").length &&
            e.css("width", e.data("width") + "%"),
            S.container.is(".auto") &&
              (e.attr("data-margin-top") &&
                e.attr("data-margin-top").length &&
                e.css("margin-top", e.data("margin-top")),
              e.attr("data-margin-bottom") &&
                e.attr("data-margin-bottom").length &&
                e.css("margin-bottom", e.data("margin-bottom")));
        }),
        (S.init = function () {
          S.record_size(),
            S.load_options(),
            S.handle_resize(),
            S.init_content_pos(),
            S.init_particles(),
            z(window).resize(S.handle_resize);
        }),
        (e.qodefParticles = S),
        z(window).load(S.init),
        z(document).ready(S.init_content_pos);
    }
    var M = (qodef.modules.shortcodes.qodefSlider = function () {
      var d,
        n,
        s,
        r,
        l,
        f,
        c,
        h,
        p,
        u,
        q,
        m,
        e = z(".qodef-slider .carousel"),
        g = /url\(["']?([^'")]+)['"]?\)/,
        v = [1600, 1200, 900, 650, 500, 320],
        w = {
          zoom_center: "1.2, 0, 0, 1.2, 0, 0",
          zoom_top_left: "1.2, 0, 0, 1.2, -150, -150",
          zoom_top_right: "1.2, 0, 0, 1.2, 150, -150",
          zoom_bottom_left: "1.2, 0, 0, 1.2, -150, 150",
          zoom_bottom_right: "1.2, 0, 0, 1.2, 150, 150",
        },
        o = /\([0-9epx\.\, \t\-]+/gi,
        a = function (e) {
          return e
            .match(o)[0]
            .substr(1)
            .split(",")
            .map(function (e) {
              return parseFloat(e);
            });
        },
        b = ["transform", "-webkit-transform"];
      z.fn.transformAnimate = function (i) {
        var e = { transform: "matrix(1,0,0,1,0,0)" };
        z.extend(e, i), this.css("percentAnim", 0);
        var o,
          t,
          d =
            ((o = this),
            (t = null),
            b.some(function (e) {
              return null !== (t = o.css(e)) && "" !== t;
            }),
            a((t = t && "none" !== t ? t : "matrix(1,0,0,1,0,0)"))),
          n = a(e.transform);
        return (
          (e.step = function (a, e) {
            var o = z(this),
              t = d.map(function (e, o) {
                return (t = e), (i = n[o]), t + (a / 100) * (i - t);
                var t, i;
              });
            !(function (e, o) {
              for (
                var t = "matrix(" + o.join(",") + ")", i = b.length - 1;
                0 <= i;
                --i
              )
                e.css(b[i], t + " rotate(0.01deg)");
            })(o, t),
              i.step && i.step.apply(this, [t, e]);
          }),
          this.stop().animate({ percentAnim: 100 }, e)
        );
      };
      var t = function (e, o, t, i) {
          var a = o;
          i ||
            (qodef.windowWidth > t[0]
              ? (a = o)
              : qodef.windowWidth > t[1]
              ? (a = 0.75 * o)
              : qodef.windowWidth > t[2]
              ? (a = 0.6 * o)
              : qodef.windowWidth > t[3]
              ? (a = 0.55 * o)
              : qodef.windowWidth <= t[3] && (a = 0.45 * o)),
            e.css({ height: a + "px" }),
            e.find(".qodef-slider-preloader").css({ height: a + "px" }),
            e
              .find(".qodef-slider-preloader .qodef-ajax-loader")
              .css({ display: "block" }),
            e.find(".item").css({ height: a + "px" });
        },
        i = function (e) {
          var o =
            qodef.windowWidth < 1e3
              ? qodefGlobalVars.vars.qodefMobileHeaderHeight +
                z(".qodef-top-bar").height()
              : 0;
          e.css({ height: qodef.windowHeight - o + "px" }),
            e
              .find(".qodef-slider-preloader")
              .css({ height: qodef.windowHeight + "px" }),
            e
              .find(".qode-slider-preloader .qodef-ajax-loader")
              .css({ display: "block" }),
            e.find(".item").css({ height: qodef.windowHeight + "px" });
        },
        y = function (e, o, t, i, a, d) {
          function n(e, o, t, i, a) {
            (f = e), (c = o), (h = t), (p = i), (u = a);
          }
          qodef.windowWidth > e[0]
            ? n(o[0], t[0], i[0], a[0], d[0])
            : qodef.windowWidth > e[1]
            ? n(o[1], t[1], i[1], a[1], d[1])
            : qodef.windowWidth > e[2]
            ? n(o[2], t[2], i[2], a[2], d[2])
            : qodef.windowWidth > e[3]
            ? n(o[3], t[3], i[3], a[3], d[3])
            : qodef.windowWidth > e[4]
            ? n(o[4], t[4], i[4], a[4], d[4])
            : qodef.windowWidth > e[5]
            ? n(o[5], t[5], i[5], a[5], d[5])
            : n(o[6], t[6], i[6], a[6], d[6]),
            c,
            (q = h),
            (m = p),
            qodef.windowWidth <= e[0] && (c / 2, (q = h / 2), (m = p / 2));
        },
        _ = function (e, o, t) {
          t && (f = c = h = p = u = q = m = 1),
            e
              .find(".qodef-thumb")
              .css({
                width:
                  Math.round(window["slider_graphic_width_" + o][0] * f) + "px",
                height:
                  Math.round(window["slider_graphic_height_" + o][0] * f) +
                  "px",
              }),
            e
              .find(".qodef-slide-title")
              .css({
                "font-size":
                  Math.round(window["slider_title_" + o][0] * c) + "px",
                "line-height":
                  Math.round(window["slider_title_" + o][1] * c) + "px",
                "letter-spacing":
                  Math.round(window["slider_title_" + o][2] * c) + "px",
                "margin-bottom":
                  Math.round(window["slider_title_" + o][3] * c) + "px",
              }),
            e
              .find(".qodef-slide-subtitle")
              .css({
                "font-size":
                  Math.round(window["slider_subtitle_" + o][0] * h) + "px",
                "line-height":
                  Math.round(window["slider_subtitle_" + o][1] * h) + "px",
                "margin-bottom":
                  Math.round(window["slider_subtitle_" + o][3] * h) + "px",
                "letter-spacing":
                  Math.round(window["slider_subtitle_" + o][2] * q) + "px",
              }),
            e
              .find(".qodef-slide-text")
              .css({
                "font-size":
                  Math.round(window["slider_text_" + o][0] * p) + "px",
                "line-height":
                  Math.round(window["slider_text_" + o][1] * p) + "px",
                "letter-spacing":
                  Math.round(window["slider_text_" + o][2] * m) + "px",
              }),
            e
              .find(".qodef-btn:eq(0)")
              .css({
                "font-size":
                  Math.round(window["slider_button1_" + o][0] * u) + "px",
                "line-height":
                  Math.round(window["slider_button1_" + o][1] * u) + "px",
                "letter-spacing":
                  Math.round(window["slider_button1_" + o][2] * u) + "px",
                "padding-top":
                  Math.round(window["slider_button1_" + o][3] * u) + "px",
                "padding-bottom":
                  Math.round(window["slider_button1_" + o][3] * u) + "px",
                "padding-left":
                  Math.round(window["slider_button1_" + o][4] * u) + "px",
                "padding-right":
                  Math.round(window["slider_button1_" + o][4] * u) + "px",
              }),
            e
              .find(".qodef-btn:eq(1)")
              .css({
                "font-size":
                  Math.round(window["slider_button2_" + o][0] * u) + "px",
                "line-height":
                  Math.round(window["slider_button2_" + o][1] * u) + "px",
                "letter-spacing":
                  Math.round(window["slider_button2_" + o][2] * u) + "px",
                "padding-top":
                  Math.round(window["slider_button2_" + o][3] * u) + "px",
                "padding-bottom":
                  Math.round(window["slider_button2_" + o][3] * u) + "px",
                "padding-left":
                  Math.round(window["slider_button2_" + o][4] * u) + "px",
                "padding-right":
                  Math.round(window["slider_button2_" + o][4] * u) + "px",
              });
        },
        C = function (e) {
          if (
            (e.find(".item").each(function (e) {
              var o, t;
              (o = z(this)),
                (t = e),
                (window["slider_graphic_width_" + t] = []),
                (window["slider_graphic_height_" + t] = []),
                (window["slider_title_" + t] = []),
                (window["slider_subtitle_" + t] = []),
                (window["slider_text_" + t] = []),
                (window["slider_button1_" + t] = []),
                (window["slider_button2_" + t] = []),
                window["slider_graphic_width_" + t].push(
                  parseFloat(o.find(".qodef-thumb img").data("width"))
                ),
                window["slider_graphic_height_" + t].push(
                  parseFloat(o.find(".qodef-thumb img").data("height"))
                ),
                window["slider_title_" + t].push(
                  parseFloat(o.find(".qodef-slide-title").css("font-size"))
                ),
                window["slider_subtitle_" + t].push(
                  parseFloat(o.find(".qodef-slide-subtitle").css("font-size"))
                ),
                window["slider_text_" + t].push(
                  parseFloat(o.find(".qodef-slide-text").css("font-size"))
                ),
                window["slider_button1_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(0)").css("font-size"))
                ),
                window["slider_button2_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(1)").css("font-size"))
                ),
                window["slider_title_" + t].push(
                  parseFloat(o.find(".qodef-slide-title").css("line-height"))
                ),
                window["slider_subtitle_" + t].push(
                  parseFloat(o.find(".qodef-slide-subtitle").css("line-height"))
                ),
                window["slider_text_" + t].push(
                  parseFloat(o.find(".qodef-slide-text").css("line-height"))
                ),
                window["slider_button1_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(0)").css("line-height"))
                ),
                window["slider_button2_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(1)").css("line-height"))
                ),
                window["slider_title_" + t].push(
                  parseFloat(o.find(".qodef-slide-title").css("letter-spacing"))
                ),
                window["slider_subtitle_" + t].push(
                  parseFloat(
                    o.find(".qodef-slide-subtitle").css("letter-spacing")
                  )
                ),
                window["slider_text_" + t].push(
                  parseFloat(o.find(".qodef-slide-text").css("letter-spacing"))
                ),
                window["slider_button1_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(0)").css("letter-spacing"))
                ),
                window["slider_button2_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(1)").css("letter-spacing"))
                ),
                window["slider_title_" + t].push(
                  parseFloat(o.find(".qodef-slide-title").css("margin-bottom"))
                ),
                window["slider_subtitle_" + t].push(
                  parseFloat(
                    o.find(".qodef-slide-subtitle").css("margin-bottom")
                  )
                ),
                window["slider_button1_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(0)").css("padding-top"))
                ),
                window["slider_button2_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(1)").css("padding-top"))
                ),
                window["slider_button1_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(0)").css("padding-left"))
                ),
                window["slider_button2_" + t].push(
                  parseFloat(o.find(".qodef-btn:eq(1)").css("padding-left"))
                ),
                _(z(this), e, !1);
            }),
            e.hasClass("qodef-full-screen"))
          )
            i(e),
              z(window).resize(function () {
                y(v, d, n, s, r, l),
                  i(e),
                  e.find(".item").each(function (e) {
                    _(z(this), e, !1);
                  });
              });
          else if (e.hasClass("qodef-responsive-height")) {
            var o = e.data("height");
            t(e, o, v, !1),
              z(window).resize(function () {
                y(v, d, n, s, r, l),
                  t(e, o, v, !1),
                  e.find(".item").each(function (e) {
                    _(z(this), e, !1);
                  });
              });
          } else {
            o = e.data("height");
            e
              .find(".qodef-slider-preloader")
              .css({ height: e.height() + "px" }),
              e
                .find(".qodef-slider-preloader .qodef-ajax-loader")
                .css({ display: "block" }),
              qodef.windowWidth < 1e3 ? t(e, o, v, !1) : t(e, o, v, !0),
              z(window).resize(function () {
                y(v, d, n, s, r, l),
                  qodef.windowWidth < 1e3
                    ? (t(e, o, v, !1),
                      e.find(".item").each(function (e) {
                        _(z(this), e, !1);
                      }))
                    : (t(e, o, v, !0),
                      e.find(".item").each(function (e) {
                        _(z(this), e, !0);
                      }));
              });
          }
        },
        x = function (e, o, t) {
          1 === o
            ? (e.find(".left.carousel-control .prev").html(t),
              e.find(".right.carousel-control .next").html(o + 1))
            : o === t
            ? (e.find(".left.carousel-control .prev").html(o - 1),
              e.find(".right.carousel-control .next").html(1))
            : (e.find(".left.carousel-control .prev").html(o - 1),
              e.find(".right.carousel-control .next").html(o + 1));
        },
        k = function (a, e, o) {
          function t(e) {
            var o,
              t,
              i = a.find(".item").eq(e - 1);
            return (
              0 < i.find(".qodef-image").length
                ? ((t = /url\(["']?([^'")]+)['"]?\)/.exec(
                    i.find(".qodef-image").attr("style")
                  )),
                  ((o = new Image()).src = t[1]))
                : ((o = i.find("> .qodef-video").clone())
                    .find(".qodef-video-overlay")
                    .remove(),
                  o.find(".qodef-video-wrap").width(70).height(70),
                  o.find(".mejs-container").width(70).height(70),
                  o.find(".mejs-controls").remove(),
                  o.find("video").width(70).height(70)),
              o
            );
          }
          1 === parseInt(e)
            ? (a
                .find(".left.carousel-control .qodef-thumb-holder .img")
                .hide()
                .html(t(o))
                .fadeIn("slow"),
              a
                .find(".right.carousel-control .qodef-thumb-holder .img")
                .hide()
                .html(t(e + 1))
                .fadeIn("slow"))
            : parseInt(e) === parseInt(o)
            ? (a
                .find(".left.carousel-control .qodef-thumb-holder .img")
                .hide()
                .html(t(e - 1))
                .fadeIn("slow"),
              a
                .find(".right.carousel-control .qodef-thumb-holder .img")
                .hide()
                .html(t(1))
                .fadeIn("slow"))
            : (a
                .find(".left.carousel-control .qodef-thumb-holder .img")
                .hide()
                .html(t(e - 1))
                .fadeIn("slow"),
              a
                .find(".right.carousel-control .qodef-thumb-holder .img")
                .hide()
                .html(t(e + 1))
                .fadeIn("slow"));
        },
        S = function (e) {
          var d = 1500;
          e.find(".item .qodef-video .qodef-video-wrap").each(function () {
            var e = qodef.windowWidth,
              o = z(this).closest(".carousel").height();
            z(this).width(e), (d = (1920 / 1080) * (o + 20)), z(this).height(o);
            var t = e / 1920,
              i = (o - qodefGlobalVars.vars.qodefMenuAreaHeight) / 1080,
              a = i;
            i < t && (a = t),
              1920 * a < d && (a = d / 1920),
              z(this)
                .find("video, .mejs-overlay, .mejs-poster")
                .width(Math.ceil(1920 * a + 2)),
              z(this)
                .find("video, .mejs-overlay, .mejs-poster")
                .height(Math.ceil(1080 * a + 2)),
              z(this).scrollLeft((z(this).find("video").width() - e) / 2),
              z(this)
                .find(".mejs-overlay, .mejs-poster")
                .scrollTop((z(this).find("video").height() - o) / 2),
              z(this).scrollTop((z(this).find("video").height() - o) / 2);
          });
        },
        M = function (e, o, t) {
          var i;
          e.find(".carousel-inner .item:first-child").addClass("active"),
            P(z(".carousel .active"), e.hasClass("qodef-header-effect")),
            T(e, z(".carousel .active"), e.hasClass("qodef-navigation-effect")),
            e.hasClass("qodef-slider-numbers") && x(e, 1, o),
            e.hasClass("qodef-slider-thumbs") && k(e, 1, o),
            e.find(".item video").length &&
              (S(e),
              (i = e),
              z(".item .qodef-video-wrap .video").mediaelementplayer({
                enableKeyboard: !1,
                iPadUseNativeControls: !1,
                pauseOtherPlayers: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1,
              }),
              z(window).resize(function () {
                S(i);
              }),
              navigator.userAgent.match(
                /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/
              ) &&
                (z(".qodef-slider .qodef-mobile-video-image").show(),
                z(".qodef-slider .qodef-video-wrap").remove())),
            e.hasClass("qodef-auto-start")
              ? (e.carousel({ interval: t, pause: !1 }),
                e
                  .find(".slide_buttons_holder .qbutton")
                  .mouseenter(function () {
                    e.carousel("pause");
                  })
                  .mouseleave(function () {
                    e.carousel("cycle");
                  }))
              : e.carousel({ interval: 0, pause: !1 }),
            z(".carousel-inner .item:first-child").hasClass(
              "qodef-animate-image"
            ) &&
              1e3 < qodef.windowWidth &&
              e
                .find(
                  ".carousel-inner .item.qodef-animate-image:first-child .qodef-image"
                )
                .transformAnimate({
                  transform:
                    "matrix(" +
                    w[
                      z(".carousel-inner .item:first-child").data(
                        "qodef_animate_image"
                      )
                    ] +
                    ")",
                  duration: 3e4,
                });
        };
      return {
        init: function () {
          if (e.length) {
            if (
              (e.each(function () {
                var o = z(this),
                  e = o.data("slide_animation_timeout"),
                  t = o.find(".item").length;
                if (
                  (o.data("qodef_responsive_breakpoints") &&
                    "set2" === o.data("qodef_responsive_breakpoints") &&
                    (v = [1600, 1300, 1e3, 768, 567, 320]),
                  (d = o
                    .data("qodef_responsive_graphic_coefficients")
                    .split(",")),
                  (n = o
                    .data("qodef_responsive_title_coefficients")
                    .split(",")),
                  (s = o
                    .data("qodef_responsive_subtitle_coefficients")
                    .split(",")),
                  (r = o.data("qodef_responsive_text_coefficients").split(",")),
                  (l = o
                    .data("qodef_responsive_button_coefficients")
                    .split(",")),
                  y(v, d, n, s, r, l),
                  C(o),
                  qodef.htmlEl.hasClass("touch"))
                ) {
                  if (
                    0 <
                    o.find(".item:first-child .qodef-mobile-video-image").length
                  )
                    var i = g.exec(
                      o
                        .find(".item:first-child .qodef-mobile-video-image")
                        .attr("style")
                    );
                  else
                    i = g.exec(
                      o.find(".item:first-child .qodef-image").attr("style")
                    );
                  if (i)
                    ((a = new Image()).src = i[1]),
                      z(a).load(function () {
                        z(".qodef-slider-preloader").fadeOut(500), M(o, t, e);
                      });
                } else {
                  var a;
                  if (0 < o.find(".item:first-child video").length)
                    z(".qodef-slider-preloader").fadeOut(500), M(o, t, e);
                  else if (
                    (i = g.exec(
                      o.find(".item:first-child .qodef-image").attr("style")
                    ))
                  )
                    ((a = new Image()).src = i[1]),
                      z(a).load(function () {
                        z(".qodef-slider-preloader").fadeOut(500), M(o, t, e);
                      });
                }
                o.on("slide.bs.carousel", function () {
                  o.addClass("qodef-in-progress"),
                    o
                      .find(".active .qodef-slider-content-outer")
                      .fadeTo(250, 0);
                }),
                  o.on("slid.bs.carousel", function () {
                    if (
                      (o.removeClass("qodef-in-progress"),
                      o
                        .find(".active .qodef-slider-content-outer")
                        .fadeTo(0, 1),
                      o.hasClass("qodef-slider-numbers"))
                    ) {
                      var e = z(".item").index(z(".item.active")[0]) + 1;
                      x(o, e, t);
                    }
                    if (o.hasClass("qodef-slider-thumbs")) {
                      e = z(".item").index(z(".item.active")[0]) + 1;
                      k(o, e, t);
                    }
                    o.hasClass("qodef-navigation-effect") &&
                      T(o, z(".carousel .active"), !0),
                      z(".item.qodef-animate-image .qodef-image")
                        .stop()
                        .css({ transform: "", "-webkit-transform": "" }),
                      z(".item.active").hasClass("qodef-animate-image") &&
                        1e3 < qodef.windowWidth &&
                        z(
                          ".item.qodef-animate-image.active .qodef-image"
                        ).transformAnimate({
                          transform:
                            "matrix(" +
                            w[
                              z(".item.qodef-animate-image.active").data(
                                "qodef_animate_image"
                              )
                            ] +
                            ")",
                          duration: 3e4,
                        });
                  }),
                  o.swipe({
                    swipeLeft: function () {
                      o.carousel("next");
                    },
                    swipeRight: function () {
                      o.carousel("prev");
                    },
                    threshold: 20,
                    allowPageScroll: "vertical",
                  });
              }),
              z(".no-touch .carousel").length)
            )
              skrollr.init({ smoothScrolling: !1, forceHeight: !1 }).refresh();
            z(window).scroll(function () {
              z(".qodef-slider .carousel").height() < qodef.scroll
                ? z(".qodef-slider .carousel").addClass(
                    "qodef-disable-slider-header-style-changing"
                  )
                : (z(".qodef-slider .carousel").removeClass(
                    "qodef-disable-slider-header-style-changing"
                  ),
                  P(
                    z(".qodef-slider .carousel .active"),
                    z(".qodef-slider .carousel").hasClass("qodef-header-effect")
                  )),
                z(".qodef-slider .carousel").hasClass("qodef-full-screen") &&
                qodef.scroll > qodef.windowHeight &&
                1e3 < qodef.windowWidth
                  ? z(".qodef-slider .carousel")
                      .find(".carousel-inner, .carousel-indicators")
                      .hide()
                  : !z(".qodef-slider .carousel").hasClass(
                      "qodef-full-screen"
                    ) &&
                    qodef.scroll > z(".qodef-slider .carousel").height() &&
                    1e3 < qodef.windowWidth
                  ? z(".qodef-slider .carousel")
                      .find(".carousel-inner, .carousel-indicators")
                      .hide()
                  : z(".qodef-slider .carousel")
                      .find(".carousel-inner, .carousel-indicators")
                      .show();
            });
          }
        },
      };
    });
    function P(e, o) {
      if (
        0 <
        z(".qodef-slider .carousel").not(
          ".qodef-disable-slider-header-style-changing"
        ).length
      ) {
        var t = "";
        e.hasClass("light") && (t = "qodef-light-header"),
          e.hasClass("dark") && (t = "qodef-dark-header"),
          "" !== t
            ? o &&
              qodef.body
                .removeClass("qodef-dark-header qodef-light-header")
                .addClass(t)
            : o &&
              qodef.body
                .removeClass("qodef-dark-header qodef-light-header")
                .addClass(qodef.defaultHeaderStyle);
      }
    }
    function T(e, o, t) {
      var i = "";
      o.hasClass("light") && (i = "qodef-light-navigation"),
        o.hasClass("dark") && (i = "qodef-dark-navigation"),
        "" !== i
          ? t &&
            e
              .removeClass("qodef-light-navigation qodef-dark-navigation")
              .addClass(i)
          : e.removeClass("qodef-light-navigation qodef-dark-navigation");
    }
  })(jQuery),
  (function (r) {
    "use strict";
    r(document).ready(function () {
      var e;
      r(document).on(
        "click",
        ".qodef-quantity-minus, .qodef-quantity-plus",
        function (e) {
          e.stopPropagation();
          var o,
            t = r(this),
            i = t.siblings(".qodef-quantity-input"),
            a = parseFloat(i.attr("step")),
            d = parseFloat(i.attr("max")),
            n = !1,
            s = parseFloat(i.val());
          t.hasClass("qodef-quantity-minus") && (n = !0),
            n
              ? 1 <= (o = s - a)
                ? i.val(o)
                : i.val(1)
              : ((o = s + a),
                void 0 === d ? i.val(o) : d <= o ? i.val(d) : i.val(o)),
            i.trigger("change");
        }
      ),
        (function () {
          (r(".woocommerce-ordering .orderby").length ||
            r("#calc_shipping_country").length) &&
            (r(".woocommerce-ordering .orderby").select2({
              minimumResultsForSearch: 1 / 0,
            }),
            r("#calc_shipping_country").select2());
          0 < r("table.variations").length &&
            r("table.variations")
              .find("td.value")
              .each(function () {
                r(this)
                  .find("select")
                  .select2({ minimumResultsForSearch: -1 })
                  .on("select2-opening", function () {
                    r(this).trigger("focusin");
                  });
              });
        })(),
        (e = r(
          ".woocommerce.single-product .product .images .woocommerce-product-gallery__image"
        )).length &&
          e.each(function () {
            var e = r(this).children("a");
            e.attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"),
              r("a[data-rel]").each(function () {
                r(this).attr("rel", r(this).data("rel"));
              }),
              r("a[rel^='prettyPhoto']").prettyPhoto({
                animation_speed: "normal",
                slideshow: !1,
                autoplay_slideshow: !1,
                opacity: 0.8,
                show_title: !0,
                allow_resize: !0,
                horizontal_padding: 0,
                default_width: 650,
                default_height: 400,
                counter_separator_label: "/",
                theme: "pp_default",
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                overlay_gallery: !1,
                keyboard_shortcuts: !0,
                deeplinking: !1,
                social_tools: !1,
              });
          });
    });
  })(jQuery),
  (function (s) {
    "use strict";
    (qodef.modules.portfolio = {}),
      s(window).load(function () {
        e().init();
      });
    var e = function () {
      var e = s(
        ".qodef-follow-portfolio-info .small-images.qodef-portfolio-single-holder .qodef-portfolio-info-holder, .qodef-follow-portfolio-info .small-slider.qodef-portfolio-single-holder .qodef-portfolio-info-holder"
      );
      if (e.length)
        var o = e.parent(),
          t = o.offset().top,
          i = o.height(),
          a = s(".qodef-portfolio-media").height(),
          d = s(".header-appear, .qodef-fixed-wrapper"),
          n = d.length ? d.height() : 0;
      return {
        init: function () {
          e.length &&
            i < a &&
            qodef.scroll > t &&
            e.animate({
              marginTop:
                qodef.scroll -
                t +
                qodefGlobalVars.vars.qodefAddForAdminBar +
                n +
                20,
            }),
            s(window).scroll(function () {
              e.length &&
                i < a &&
                (qodef.scroll > t
                  ? qodef.scroll +
                      n +
                      qodefGlobalVars.vars.qodefAddForAdminBar +
                      i +
                      20 <
                    t + a
                    ? (s(".header-appear, .qodef-fixed-wrapper").length &&
                        (n = s(
                          ".header-appear, .qodef-fixed-wrapper"
                        ).height()),
                      e
                        .stop()
                        .animate({
                          marginTop:
                            qodef.scroll -
                            t +
                            qodefGlobalVars.vars.qodefAddForAdminBar +
                            n +
                            20,
                        }),
                      (n = 0))
                    : e.stop().animate({ marginTop: a - i })
                  : e.stop().animate({ marginTop: 0 }));
            });
        },
      };
    };
  })(jQuery);
  /* jquery.nicescroll 3.6.0 InuYaksa*2014 MIT http://nicescroll.areaaperta.com */(function(f){"function"===typeof define&&define.amd?define(["jquery"],f):f(jQuery)})(function(f){var y=!1,D=!1,N=0,O=2E3,x=0,H=["webkit","ms","moz","o"],s=window.requestAnimationFrame||!1,t=window.cancelAnimationFrame||!1;if(!s)for(var P in H){var E=H[P];s||(s=window[E+"RequestAnimationFrame"]);t||(t=window[E+"CancelAnimationFrame"]||window[E+"CancelRequestAnimationFrame"])}var v=window.MutationObserver||window.WebKitMutationObserver||!1,I={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",
    cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",
    enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:function(){var f=document.getElementsByTagName("script"),f=f[f.length-1].src.split("?")[0];return 0<f.split("/").length?f.split("/").slice(0,-1).join("/")+
    "/":""}(),preventmultitouchscrolling:!0},F=!1,Q=function(){if(F)return F;var f=document.createElement("DIV"),c=f.style,h=navigator.userAgent,m=navigator.platform,d={haspointerlock:"pointerLockElement"in document||"webkitPointerLockElement"in document||"mozPointerLockElement"in document};d.isopera="opera"in window;d.isopera12=d.isopera&&"getUserMedia"in navigator;d.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);d.isie="all"in document&&"attachEvent"in f&&!d.isopera;
    d.isieold=d.isie&&!("msInterpolationMode"in c);d.isie7=d.isie&&!d.isieold&&(!("documentMode"in document)||7==document.documentMode);d.isie8=d.isie&&"documentMode"in document&&8==document.documentMode;d.isie9=d.isie&&"performance"in window&&9<=document.documentMode;d.isie10=d.isie&&"performance"in window&&10==document.documentMode;d.isie11="msRequestFullscreen"in f&&11<=document.documentMode;d.isie9mobile=/iemobile.9/i.test(h);d.isie9mobile&&(d.isie9=!1);d.isie7mobile=!d.isie9mobile&&d.isie7&&/iemobile/i.test(h);
    d.ismozilla="MozAppearance"in c;d.iswebkit="WebkitAppearance"in c;d.ischrome="chrome"in window;d.ischrome22=d.ischrome&&d.haspointerlock;d.ischrome26=d.ischrome&&"transition"in c;d.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;d.hasmstouch=window.MSPointerEvent||!1;d.hasw3ctouch=window.PointerEvent||!1;d.ismac=/^mac$/i.test(m);d.isios=d.cantouch&&/iphone|ipad|ipod/i.test(m);d.isios4=d.isios&&!("seal"in Object);d.isios7=d.isios&&"webkitHidden"in document;d.isandroid=/android/i.test(h);
    d.haseventlistener="addEventListener"in f;d.trstyle=!1;d.hastransform=!1;d.hastranslate3d=!1;d.transitionstyle=!1;d.hastransition=!1;d.transitionend=!1;m=["transform","msTransform","webkitTransform","MozTransform","OTransform"];for(h=0;h<m.length;h++)if("undefined"!=typeof c[m[h]]){d.trstyle=m[h];break}d.hastransform=!!d.trstyle;d.hastransform&&(c[d.trstyle]="translate3d(1px,2px,3px)",d.hastranslate3d=/translate3d/.test(c[d.trstyle]));d.transitionstyle=!1;d.prefixstyle="";d.transitionend=!1;for(var m=
        "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "),n=" -webkit- -ms- -moz- -o- -o -khtml-".split(" "),p="transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "),h=0;h<m.length;h++)if(m[h]in c){d.transitionstyle=m[h];d.prefixstyle=n[h];d.transitionend=p[h];break}d.ischrome26&&(d.prefixstyle=n[1]);d.hastransition=d.transitionstyle;a:{h=["-webkit-grab","-moz-grab","grab"];if(d.ischrome&&
        !d.ischrome22||d.isie)h=[];for(m=0;m<h.length;m++)if(n=h[m],c.cursor=n,c.cursor==n){c=n;break a}c="url(//mail.google.com/mail/images/2/openhand.cur),n-resize"}d.cursorgrabvalue=c;d.hasmousecapture="setCapture"in f;d.hasMutationObserver=!1!==v;return F=d},R=function(k,c){function h(){var b=a.doc.css(e.trstyle);return b&&"matrix"==b.substr(0,6)?b.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1}function m(){var b=a.win;if("zIndex"in b)return b.zIndex();for(;0<b.length&&9!=b[0].nodeType;){var g=
    b.css("zIndex");if(!isNaN(g)&&0!=g)return parseInt(g);b=b.parent()}return!1}function d(b,g,q){g=b.css(g);b=parseFloat(g);return isNaN(b)?(b=w[g]||0,q=3==b?q?a.win.outerHeight()-a.win.innerHeight():a.win.outerWidth()-a.win.innerWidth():1,a.isie8&&b&&(b+=1),q?b:0):b}function n(b,g,q,c){a._bind(b,g,function(a){a=a?a:window.event;var c={original:a,target:a.target||a.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==a.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){a.preventDefault?a.preventDefault():
    a.returnValue=!1;return!1},stopImmediatePropagation:function(){a.stopImmediatePropagation?a.stopImmediatePropagation():a.cancelBubble=!0}};"mousewheel"==g?(c.deltaY=-.025*a.wheelDelta,a.wheelDeltaX&&(c.deltaX=-.025*a.wheelDeltaX)):c.deltaY=a.detail;return q.call(b,c)},c)}function p(b,g,c){var d,e;0==b.deltaMode?(d=-Math.floor(a.opt.mousescrollstep/54*b.deltaX),e=-Math.floor(a.opt.mousescrollstep/54*b.deltaY)):1==b.deltaMode&&(d=-Math.floor(b.deltaX*a.opt.mousescrollstep),e=-Math.floor(b.deltaY*a.opt.mousescrollstep));
    g&&a.opt.oneaxismousemode&&0==d&&e&&(d=e,e=0,c&&(0>d?a.getScrollLeft()>=a.page.maxw:0>=a.getScrollLeft())&&(e=d,d=0));d&&(a.scrollmom&&a.scrollmom.stop(),a.lastdeltax+=d,a.debounced("mousewheelx",function(){var b=a.lastdeltax;a.lastdeltax=0;a.rail.drag||a.doScrollLeftBy(b)},15));if(e){if(a.opt.nativeparentscrolling&&c&&!a.ispage&&!a.zoomactive)if(0>e){if(a.getScrollTop()>=a.page.maxh)return!0}else if(0>=a.getScrollTop())return!0;a.scrollmom&&a.scrollmom.stop();a.lastdeltay+=e;a.debounced("mousewheely",
        function(){var b=a.lastdeltay;a.lastdeltay=0;a.rail.drag||a.doScrollBy(b)},15)}b.stopImmediatePropagation();return b.preventDefault()}var a=this;this.version="3.6.0";this.name="nicescroll";this.me=c;this.opt={doc:f("body"),win:!1};f.extend(this.opt,I);this.opt.snapbackspeed=80;if(k)for(var G in a.opt)"undefined"!=typeof k[G]&&(a.opt[G]=k[G]);this.iddoc=(this.doc=a.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/^BODY|HTML/.test(a.opt.win?a.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=
    !1!==a.opt.win;this.win=a.opt.win||(this.ispage?f(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?f(window):this.win;this.body=f("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=a.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=
    this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.isrtlmode="auto"==this.opt.rtlmode?"rtl"==(this.win[0]==window?this.body:this.win).css("direction"):!0===this.opt.rtlmode;this.observerbody=this.observerremover=this.observer=this.scrollmom=this.scrollrunning=!1;do this.id="ascrail"+O++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=
    this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=this.rail=!1;this.visibility=!0;this.hidden=this.locked=this.railslocked=!1;this.cursoractive=!0;this.wheelprevented=!1;this.overflowx=a.opt.overflowx;this.overflowy=a.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=Q();var e=f.extend({},this.detected);this.ishwscroll=(this.canhwscroll=e.hastransform&&
a.opt.hwacceleration)&&a.haswrapper;this.hasreversehr=this.isrtlmode&&!e.iswebkit;this.istouchcapable=!1;!e.cantouch||e.isios||e.isandroid||!e.iswebkit&&!e.ismozilla||(this.istouchcapable=!0,e.cantouch=!1);a.opt.enablemouselockapi||(e.hasmousecapture=!1,e.haspointerlock=!1);this.debounced=function(b,g,c){var d=a.delaylist[b];a.delaylist[b]=g;d||setTimeout(function(){var g=a.delaylist[b];a.delaylist[b]=!1;g.call(a)},c)};var r=!1;this.synched=function(b,g){a.synclist[b]=g;(function(){r||(s(function(){r=
    !1;for(var b in a.synclist){var g=a.synclist[b];g&&g.call(a);a.synclist[b]=!1}}),r=!0)})();return b};this.unsynched=function(b){a.synclist[b]&&(a.synclist[b]=!1)};this.css=function(b,g){for(var c in g)a.saved.css.push([b,c,b.css(c)]),b.css(c,g[c])};this.scrollTop=function(b){return"undefined"==typeof b?a.getScrollTop():a.setScrollTop(b)};this.scrollLeft=function(b){return"undefined"==typeof b?a.getScrollLeft():a.setScrollLeft(b)};var A=function(a,g,c,d,e,f,h){this.st=a;this.ed=g;this.spd=c;this.p1=
    d||0;this.p2=e||1;this.p3=f||0;this.p4=h||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};A.prototype={B2:function(a){return 3*a*a*(1-a)},B3:function(a){return 3*a*(1-a)*(1-a)},B4:function(a){return(1-a)*(1-a)*(1-a)},getNow:function(){var a=1-((new Date).getTime()-this.ts)/this.spd,g=this.B2(a)+this.B3(a)+this.B4(a);return 0>a?this.ed:this.st+Math.round(this.df*g)},update:function(a,g){this.st=this.getNow();this.ed=a;this.spd=g;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};
    if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};e.hastranslate3d&&e.isios&&this.doc.css("-webkit-backface-visibility","hidden");this.getScrollTop=function(b){if(!b){if(b=h())return 16==b.length?-b[13]:-b[5];if(a.timerscroll&&a.timerscroll.bz)return a.timerscroll.bz.getNow()}return a.doc.translate.y};this.getScrollLeft=function(b){if(!b){if(b=h())return 16==b.length?-b[12]:-b[4];if(a.timerscroll&&a.timerscroll.bh)return a.timerscroll.bh.getNow()}return a.doc.translate.x};this.notifyScrollEvent=
        function(a){var g=document.createEvent("UIEvents");g.initUIEvent("scroll",!1,!0,window,1);g.niceevent=!0;a.dispatchEvent(g)};var K=this.isrtlmode?1:-1;e.hastranslate3d&&a.opt.enabletranslate3d?(this.setScrollTop=function(b,g){a.doc.translate.y=b;a.doc.translate.ty=-1*b+"px";a.doc.css(e.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");g||a.notifyScrollEvent(a.win[0])},this.setScrollLeft=function(b,g){a.doc.translate.x=b;a.doc.translate.tx=b*K+"px";a.doc.css(e.trstyle,"translate3d("+
    a.doc.translate.tx+","+a.doc.translate.ty+",0px)");g||a.notifyScrollEvent(a.win[0])}):(this.setScrollTop=function(b,g){a.doc.translate.y=b;a.doc.translate.ty=-1*b+"px";a.doc.css(e.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");g||a.notifyScrollEvent(a.win[0])},this.setScrollLeft=function(b,g){a.doc.translate.x=b;a.doc.translate.tx=b*K+"px";a.doc.css(e.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");g||a.notifyScrollEvent(a.win[0])})}else this.getScrollTop=
        function(){return a.docscroll.scrollTop()},this.setScrollTop=function(b){return a.docscroll.scrollTop(b)},this.getScrollLeft=function(){return a.detected.ismozilla&&a.isrtlmode?Math.abs(a.docscroll.scrollLeft()):a.docscroll.scrollLeft()},this.setScrollLeft=function(b){return a.docscroll.scrollLeft(a.detected.ismozilla&&a.isrtlmode?-b:b)};this.getTarget=function(a){return a?a.target?a.target:a.srcElement?a.srcElement:!1:!1};this.hasParent=function(a,g){if(!a)return!1;for(var c=a.target||a.srcElement||
        a||!1;c&&c.id!=g;)c=c.parentNode||!1;return!1!==c};var w={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}};this.getOffset=function(){if(a.isfixed){var b=a.win.offset(),g=a.getDocumentScrollOffset();b.top-=g.top;b.left-=g.left;return b}b=a.win.offset();if(!a.viewport)return b;g=a.viewport.offset();return{top:b.top-g.top,left:b.left-g.left}};this.updateScrollBar=
        function(b){if(a.ishwscroll)a.rail.css({height:a.win.innerHeight()-(a.opt.railpadding.top+a.opt.railpadding.bottom)}),a.railh&&a.railh.css({width:a.win.innerWidth()-(a.opt.railpadding.left+a.opt.railpadding.right)});else{var g=a.getOffset(),c=g.top,e=g.left-(a.opt.railpadding.left+a.opt.railpadding.right),c=c+d(a.win,"border-top-width",!0),e=e+(a.rail.align?a.win.outerWidth()-d(a.win,"border-right-width")-a.rail.width:d(a.win,"border-left-width")),f=a.opt.railoffset;f&&(f.top&&(c+=f.top),a.rail.align&&
        f.left&&(e+=f.left));a.railslocked||a.rail.css({top:c,left:e,height:(b?b.h:a.win.innerHeight())-(a.opt.railpadding.top+a.opt.railpadding.bottom)});a.zoom&&a.zoom.css({top:c+1,left:1==a.rail.align?e-20:e+a.rail.width+4});if(a.railh&&!a.railslocked){c=g.top;e=g.left;if(f=a.opt.railhoffset)f.top&&(c+=f.top),f.left&&(e+=f.left);b=a.railh.align?c+d(a.win,"border-top-width",!0)+a.win.innerHeight()-a.railh.height:c+d(a.win,"border-top-width",!0);e+=d(a.win,"border-left-width");a.railh.css({top:b-(a.opt.railpadding.top+
        a.opt.railpadding.bottom),left:e,width:a.railh.width})}}};this.doRailClick=function(b,g,c){var e;a.railslocked||(a.cancelEvent(b),g?(g=c?a.doScrollLeft:a.doScrollTop,e=c?(b.pageX-a.railh.offset().left-a.cursorwidth/2)*a.scrollratio.x:(b.pageY-a.rail.offset().top-a.cursorheight/2)*a.scrollratio.y,g(e)):(g=c?a.doScrollLeftBy:a.doScrollBy,e=c?a.scroll.x:a.scroll.y,b=c?b.pageX-a.railh.offset().left:b.pageY-a.rail.offset().top,c=c?a.view.w:a.view.h,g(e>=b?c:-c)))};a.hasanimationframe=s;a.hascancelanimationframe=
        t;a.hasanimationframe?a.hascancelanimationframe||(t=function(){a.cancelAnimationFrame=!0}):(s=function(a){return setTimeout(a,15-Math.floor(+new Date/1E3)%16)},t=clearInterval);this.init=function(){a.saved.css=[];if(e.isie7mobile||e.isoperamini)return!0;e.hasmstouch&&a.css(a.ispage?f("html"):a.win,{"-ms-touch-action":"none"});a.zindex="auto";a.zindex=a.ispage||"auto"!=a.opt.zindex?a.opt.zindex:m()||"auto";!a.ispage&&"auto"!=a.zindex&&a.zindex>x&&(x=a.zindex);a.isie&&0==a.zindex&&"auto"==a.opt.zindex&&
    (a.zindex="auto");if(!a.ispage||!e.cantouch&&!e.isieold&&!e.isie9mobile){var b=a.docscroll;a.ispage&&(b=a.haswrapper?a.win:a.doc);e.isie9mobile||a.css(b,{"overflow-y":"hidden"});a.ispage&&e.isie7&&("BODY"==a.doc[0].nodeName?a.css(f("html"),{"overflow-y":"hidden"}):"HTML"==a.doc[0].nodeName&&a.css(f("body"),{"overflow-y":"hidden"}));!e.isios||a.ispage||a.haswrapper||a.css(f("body"),{"-webkit-overflow-scrolling":"touch"});var g=f(document.createElement("div"));g.css({position:"relative",top:0,"float":"right",
        width:a.opt.cursorwidth,height:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius});g.hborder=parseFloat(g.outerHeight()-g.innerHeight());g.addClass("nicescroll-cursors");a.cursor=g;var c=f(document.createElement("div"));c.attr("id",a.id);c.addClass("nicescroll-rails nicescroll-rails-vr");var d,h,k=["left","right",
        "top","bottom"],J;for(J in k)h=k[J],(d=a.opt.railpadding[h])?c.css("padding-"+h,d+"px"):a.opt.railpadding[h]=0;c.append(g);c.width=Math.max(parseFloat(a.opt.cursorwidth),g.outerWidth());c.css({width:c.width+"px",zIndex:a.zindex,background:a.opt.background,cursor:"default"});c.visibility=!0;c.scrollable=!0;c.align="left"==a.opt.railalign?0:1;a.rail=c;g=a.rail.drag=!1;!a.opt.boxzoom||a.ispage||e.isieold||(g=document.createElement("div"),a.bind(g,"click",a.doZoom),a.bind(g,"mouseenter",function(){a.zoom.css("opacity",
        a.opt.cursoropacitymax)}),a.bind(g,"mouseleave",function(){a.zoom.css("opacity",a.opt.cursoropacitymin)}),a.zoom=f(g),a.zoom.css({cursor:"pointer","z-index":a.zindex,backgroundImage:"url("+a.opt.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),a.opt.dblclickzoom&&a.bind(a.win,"dblclick",a.doZoom),e.cantouch&&a.opt.gesturezoom&&(a.ongesturezoom=function(b){1.5<b.scale&&a.doZoomIn(b);.8>b.scale&&a.doZoomOut(b);return a.cancelEvent(b)},a.bind(a.win,"gestureend",a.ongesturezoom)));
        a.railh=!1;var l;a.opt.horizrailenabled&&(a.css(b,{"overflow-x":"hidden"}),g=f(document.createElement("div")),g.css({position:"absolute",top:0,height:a.opt.cursorwidth,width:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius}),e.isieold&&g.css({overflow:"hidden"}),g.wborder=parseFloat(g.outerWidth()-g.innerWidth()),
            g.addClass("nicescroll-cursors"),a.cursorh=g,l=f(document.createElement("div")),l.attr("id",a.id+"-hr"),l.addClass("nicescroll-rails nicescroll-rails-hr"),l.height=Math.max(parseFloat(a.opt.cursorwidth),g.outerHeight()),l.css({height:l.height+"px",zIndex:a.zindex,background:a.opt.background}),l.append(g),l.visibility=!0,l.scrollable=!0,l.align="top"==a.opt.railvalign?0:1,a.railh=l,a.railh.drag=!1);a.ispage?(c.css({position:"fixed",top:"0px",height:"100%"}),c.align?c.css({right:"0px"}):c.css({left:"0px"}),
            a.body.append(c),a.railh&&(l.css({position:"fixed",left:"0px",width:"100%"}),l.align?l.css({bottom:"0px"}):l.css({top:"0px"}),a.body.append(l))):(a.ishwscroll?("static"==a.win.css("position")&&a.css(a.win,{position:"relative"}),b="HTML"==a.win[0].nodeName?a.body:a.win,f(b).scrollTop(0).scrollLeft(0),a.zoom&&(a.zoom.css({position:"absolute",top:1,right:0,"margin-right":c.width+4}),b.append(a.zoom)),c.css({position:"absolute",top:0}),c.align?c.css({right:0}):c.css({left:0}),b.append(c),l&&(l.css({position:"absolute",
            left:0,bottom:0}),l.align?l.css({bottom:0}):l.css({top:0}),b.append(l))):(a.isfixed="fixed"==a.win.css("position"),b=a.isfixed?"fixed":"absolute",a.isfixed||(a.viewport=a.getViewport(a.win[0])),a.viewport&&(a.body=a.viewport,0==/fixed|absolute/.test(a.viewport.css("position"))&&a.css(a.viewport,{position:"relative"})),c.css({position:b}),a.zoom&&a.zoom.css({position:b}),a.updateScrollBar(),a.body.append(c),a.zoom&&a.body.append(a.zoom),a.railh&&(l.css({position:b}),a.body.append(l))),e.isios&&a.css(a.win,
            {"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),e.isie&&a.opt.disableoutline&&a.win.attr("hideFocus","true"),e.iswebkit&&a.opt.disableoutline&&a.win.css({outline:"none"}));!1===a.opt.autohidemode?(a.autohidedom=!1,a.rail.css({opacity:a.opt.cursoropacitymax}),a.railh&&a.railh.css({opacity:a.opt.cursoropacitymax})):!0===a.opt.autohidemode||"leave"===a.opt.autohidemode?(a.autohidedom=f().add(a.rail),e.isie8&&(a.autohidedom=a.autohidedom.add(a.cursor)),a.railh&&(a.autohidedom=
            a.autohidedom.add(a.railh)),a.railh&&e.isie8&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"scroll"==a.opt.autohidemode?(a.autohidedom=f().add(a.rail),a.railh&&(a.autohidedom=a.autohidedom.add(a.railh))):"cursor"==a.opt.autohidemode?(a.autohidedom=f().add(a.cursor),a.railh&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"hidden"==a.opt.autohidemode&&(a.autohidedom=!1,a.hide(),a.railslocked=!1);if(e.isie9mobile)a.scrollmom=new L(a),a.onmangotouch=function(){var b=a.getScrollTop(),c=a.getScrollLeft();
            if(b==a.scrollmom.lastscrolly&&c==a.scrollmom.lastscrollx)return!0;var g=b-a.mangotouch.sy,e=c-a.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(e,2)+Math.pow(g,2)))){var d=0>g?-1:1,f=0>e?-1:1,q=+new Date;a.mangotouch.lazy&&clearTimeout(a.mangotouch.lazy);80<q-a.mangotouch.tm||a.mangotouch.dry!=d||a.mangotouch.drx!=f?(a.scrollmom.stop(),a.scrollmom.reset(c,b),a.mangotouch.sy=b,a.mangotouch.ly=b,a.mangotouch.sx=c,a.mangotouch.lx=c,a.mangotouch.dry=d,a.mangotouch.drx=f,a.mangotouch.tm=q):(a.scrollmom.stop(),
                a.scrollmom.update(a.mangotouch.sx-e,a.mangotouch.sy-g),a.mangotouch.tm=q,g=Math.max(Math.abs(a.mangotouch.ly-b),Math.abs(a.mangotouch.lx-c)),a.mangotouch.ly=b,a.mangotouch.lx=c,2<g&&(a.mangotouch.lazy=setTimeout(function(){a.mangotouch.lazy=!1;a.mangotouch.dry=0;a.mangotouch.drx=0;a.mangotouch.tm=0;a.scrollmom.doMomentum(30)},100)))}},c=a.getScrollTop(),l=a.getScrollLeft(),a.mangotouch={sy:c,ly:c,dry:0,sx:l,lx:l,drx:0,lazy:!1,tm:0},a.bind(a.docscroll,"scroll",a.onmangotouch);else{if(e.cantouch||
            a.istouchcapable||a.opt.touchbehavior||e.hasmstouch){a.scrollmom=new L(a);a.ontouchstart=function(b){if(b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;a.hasmoving=!1;if(!a.railslocked){var c;if(e.hasmstouch)for(c=b.target?b.target:!1;c;){var g=f(c).getNiceScroll();if(0<g.length&&g[0].me==a.me)break;if(0<g.length)return!1;if("DIV"==c.nodeName&&c.id==a.id)break;c=c.parentNode?c.parentNode:!1}a.cancelScroll();if((c=a.getTarget(b))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return a.stopPropagation(b);
            !("clientX"in b)&&"changedTouches"in b&&(b.clientX=b.changedTouches[0].clientX,b.clientY=b.changedTouches[0].clientY);a.forcescreen&&(g=b,b={original:b.original?b.original:b},b.clientX=g.screenX,b.clientY=g.screenY);a.rail.drag={x:b.clientX,y:b.clientY,sx:a.scroll.x,sy:a.scroll.y,st:a.getScrollTop(),sl:a.getScrollLeft(),pt:2,dl:!1};if(a.ispage||!a.opt.directionlockdeadzone)a.rail.drag.dl="f";else{var g=f(window).width(),d=f(window).height(),q=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
                h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),d=Math.max(0,h-d),g=Math.max(0,q-g);a.rail.drag.ck=!a.rail.scrollable&&a.railh.scrollable?0<d?"v":!1:a.rail.scrollable&&!a.railh.scrollable?0<g?"h":!1:!1;a.rail.drag.ck||(a.rail.drag.dl="f")}a.opt.touchbehavior&&a.isiframe&&e.isie&&(g=a.win.position(),a.rail.drag.x+=g.left,a.rail.drag.y+=g.top);a.hasmoving=!1;a.lastmouseup=!1;a.scrollmom.reset(b.clientX,b.clientY);if(!e.cantouch&&!this.istouchcapable&&!b.pointerType){if(!c||
                !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!a.ispage&&e.hasmousecapture&&c.setCapture(),a.opt.touchbehavior?(c.onclick&&!c._onclick&&(c._onclick=c.onclick,c.onclick=function(b){if(a.hasmoving)return!1;c._onclick.call(this,b)}),a.cancelEvent(b)):a.stopPropagation(b);/SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type"))&&(pc={tg:c,click:!1},a.preventclick=pc)}}};a.ontouchend=function(b){if(!a.rail.drag)return!0;if(2==a.rail.drag.pt){if(b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;
            a.scrollmom.doMomentum();a.rail.drag=!1;if(a.hasmoving&&(a.lastmouseup=!0,a.hideCursor(),e.hasmousecapture&&document.releaseCapture(),!e.cantouch))return a.cancelEvent(b)}else if(1==a.rail.drag.pt)return a.onmouseup(b)};var n=a.opt.touchbehavior&&a.isiframe&&!e.hasmousecapture;a.ontouchmove=function(b,c){if(!a.rail.drag||b.targetTouches&&a.opt.preventmultitouchscrolling&&1<b.targetTouches.length||b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;if(2==a.rail.drag.pt){if(e.cantouch&&
            e.isios&&"undefined"==typeof b.original)return!0;a.hasmoving=!0;a.preventclick&&!a.preventclick.click&&(a.preventclick.click=a.preventclick.tg.onclick||!1,a.preventclick.tg.onclick=a.onpreventclick);b=f.extend({original:b},b);"changedTouches"in b&&(b.clientX=b.changedTouches[0].clientX,b.clientY=b.changedTouches[0].clientY);if(a.forcescreen){var g=b;b={original:b.original?b.original:b};b.clientX=g.screenX;b.clientY=g.screenY}var d,g=d=0;n&&!c&&(d=a.win.position(),g=-d.left,d=-d.top);var q=b.clientY+
            d;d=q-a.rail.drag.y;var h=b.clientX+g,u=h-a.rail.drag.x,k=a.rail.drag.st-d;a.ishwscroll&&a.opt.bouncescroll?0>k?k=Math.round(k/2):k>a.page.maxh&&(k=a.page.maxh+Math.round((k-a.page.maxh)/2)):(0>k&&(q=k=0),k>a.page.maxh&&(k=a.page.maxh,q=0));var l;a.railh&&a.railh.scrollable&&(l=a.isrtlmode?u-a.rail.drag.sl:a.rail.drag.sl-u,a.ishwscroll&&a.opt.bouncescroll?0>l?l=Math.round(l/2):l>a.page.maxw&&(l=a.page.maxw+Math.round((l-a.page.maxw)/2)):(0>l&&(h=l=0),l>a.page.maxw&&(l=a.page.maxw,h=0)));g=!1;if(a.rail.drag.dl)g=
            !0,"v"==a.rail.drag.dl?l=a.rail.drag.sl:"h"==a.rail.drag.dl&&(k=a.rail.drag.st);else{d=Math.abs(d);var u=Math.abs(u),z=a.opt.directionlockdeadzone;if("v"==a.rail.drag.ck){if(d>z&&u<=.3*d)return a.rail.drag=!1,!0;u>z&&(a.rail.drag.dl="f",f("body").scrollTop(f("body").scrollTop()))}else if("h"==a.rail.drag.ck){if(u>z&&d<=.3*u)return a.rail.drag=!1,!0;d>z&&(a.rail.drag.dl="f",f("body").scrollLeft(f("body").scrollLeft()))}}a.synched("touchmove",function(){a.rail.drag&&2==a.rail.drag.pt&&(a.prepareTransition&&
        a.prepareTransition(0),a.rail.scrollable&&a.setScrollTop(k),a.scrollmom.update(h,q),a.railh&&a.railh.scrollable?(a.setScrollLeft(l),a.showCursor(k,l)):a.showCursor(k),e.isie10&&document.selection.clear())});e.ischrome&&a.istouchcapable&&(g=!1);if(g)return a.cancelEvent(b)}else if(1==a.rail.drag.pt)return a.onmousemove(b)}}a.onmousedown=function(b,c){if(!a.rail.drag||1==a.rail.drag.pt){if(a.railslocked)return a.cancelEvent(b);a.cancelScroll();a.rail.drag={x:b.clientX,y:b.clientY,sx:a.scroll.x,sy:a.scroll.y,
            pt:1,hr:!!c};var g=a.getTarget(b);!a.ispage&&e.hasmousecapture&&g.setCapture();a.isiframe&&!e.hasmousecapture&&(a.saved.csspointerevents=a.doc.css("pointer-events"),a.css(a.doc,{"pointer-events":"none"}));a.hasmoving=!1;return a.cancelEvent(b)}};a.onmouseup=function(b){if(a.rail.drag){if(1!=a.rail.drag.pt)return!0;e.hasmousecapture&&document.releaseCapture();a.isiframe&&!e.hasmousecapture&&a.doc.css("pointer-events",a.saved.csspointerevents);a.rail.drag=!1;a.hasmoving&&a.triggerScrollEnd();return a.cancelEvent(b)}};
            a.onmousemove=function(b){if(a.rail.drag&&1==a.rail.drag.pt){if(e.ischrome&&0==b.which)return a.onmouseup(b);a.cursorfreezed=!0;a.hasmoving=!0;if(a.rail.drag.hr){a.scroll.x=a.rail.drag.sx+(b.clientX-a.rail.drag.x);0>a.scroll.x&&(a.scroll.x=0);var c=a.scrollvaluemaxw;a.scroll.x>c&&(a.scroll.x=c)}else a.scroll.y=a.rail.drag.sy+(b.clientY-a.rail.drag.y),0>a.scroll.y&&(a.scroll.y=0),c=a.scrollvaluemax,a.scroll.y>c&&(a.scroll.y=c);a.synched("mousemove",function(){a.rail.drag&&1==a.rail.drag.pt&&(a.showCursor(),
                a.rail.drag.hr?a.hasreversehr?a.doScrollLeft(a.scrollvaluemaxw-Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed):a.doScrollLeft(Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed):a.doScrollTop(Math.round(a.scroll.y*a.scrollratio.y),a.opt.cursordragspeed))});return a.cancelEvent(b)}};if(e.cantouch||a.opt.touchbehavior)a.onpreventclick=function(b){if(a.preventclick)return a.preventclick.tg.onclick=a.preventclick.click,a.preventclick=!1,a.cancelEvent(b)},a.bind(a.win,"mousedown",
                a.ontouchstart),a.onclick=e.isios?!1:function(b){return a.lastmouseup?(a.lastmouseup=!1,a.cancelEvent(b)):!0},a.opt.grabcursorenabled&&e.cursorgrabvalue&&(a.css(a.ispage?a.doc:a.win,{cursor:e.cursorgrabvalue}),a.css(a.rail,{cursor:e.cursorgrabvalue}));else{var p=function(b){if(a.selectiondrag){if(b){var c=a.win.outerHeight();b=b.pageY-a.selectiondrag.top;0<b&&b<c&&(b=0);b>=c&&(b-=c);a.selectiondrag.df=b}0!=a.selectiondrag.df&&(a.doScrollBy(2*-Math.floor(a.selectiondrag.df/6)),a.debounced("doselectionscroll",
                function(){p()},50))}};a.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=document.selection.type}:function(){return!1};a.onselectionstart=function(b){a.ispage||(a.selectiondrag=a.win.offset())};a.onselectionend=function(b){a.selectiondrag=!1};a.onselectiondrag=function(b){a.selectiondrag&&a.hasTextSelected()&&a.debounced("selectionscroll",function(){p(b)},250)}}e.hasw3ctouch?(a.css(a.rail,{"touch-action":"none"}),
                a.css(a.cursor,{"touch-action":"none"}),a.bind(a.win,"pointerdown",a.ontouchstart),a.bind(document,"pointerup",a.ontouchend),a.bind(document,"pointermove",a.ontouchmove)):e.hasmstouch?(a.css(a.rail,{"-ms-touch-action":"none"}),a.css(a.cursor,{"-ms-touch-action":"none"}),a.bind(a.win,"MSPointerDown",a.ontouchstart),a.bind(document,"MSPointerUp",a.ontouchend),a.bind(document,"MSPointerMove",a.ontouchmove),a.bind(a.cursor,"MSGestureHold",function(a){a.preventDefault()}),a.bind(a.cursor,"contextmenu",
                function(a){a.preventDefault()})):this.istouchcapable&&(a.bind(a.win,"touchstart",a.ontouchstart),a.bind(document,"touchend",a.ontouchend),a.bind(document,"touchcancel",a.ontouchend),a.bind(document,"touchmove",a.ontouchmove));if(a.opt.cursordragontouch||!e.cantouch&&!a.opt.touchbehavior)a.rail.css({cursor:"default"}),a.railh&&a.railh.css({cursor:"default"}),a.jqbind(a.rail,"mouseenter",function(){if(!a.ispage&&!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),
                a.jqbind(a.rail,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.rail,"click",function(b){a.doRailClick(b,!1,!1)}),a.bind(a.rail,"dblclick",function(b){a.doRailClick(b,!0,!1)}),a.bind(a.cursor,"click",function(b){a.cancelEvent(b)}),a.bind(a.cursor,"dblclick",function(b){a.cancelEvent(b)})),a.railh&&(a.jqbind(a.railh,"mouseenter",function(){if(!a.ispage&&!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.railh,
                "mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.railh,"click",function(b){a.doRailClick(b,!1,!0)}),a.bind(a.railh,"dblclick",function(b){a.doRailClick(b,!0,!0)}),a.bind(a.cursorh,"click",function(b){a.cancelEvent(b)}),a.bind(a.cursorh,"dblclick",function(b){a.cancelEvent(b)})));e.cantouch||a.opt.touchbehavior?(a.bind(e.hasmousecapture?a.win:document,"mouseup",a.ontouchend),a.bind(document,"mousemove",a.ontouchmove),a.onclick&&a.bind(document,"click",
                a.onclick),a.opt.cursordragontouch&&(a.bind(a.cursor,"mousedown",a.onmousedown),a.bind(a.cursor,"mouseup",a.onmouseup),a.cursorh&&a.bind(a.cursorh,"mousedown",function(b){a.onmousedown(b,!0)}),a.cursorh&&a.bind(a.cursorh,"mouseup",a.onmouseup))):(a.bind(e.hasmousecapture?a.win:document,"mouseup",a.onmouseup),a.bind(document,"mousemove",a.onmousemove),a.onclick&&a.bind(document,"click",a.onclick),a.bind(a.cursor,"mousedown",a.onmousedown),a.bind(a.cursor,"mouseup",a.onmouseup),a.railh&&(a.bind(a.cursorh,
                "mousedown",function(b){a.onmousedown(b,!0)}),a.bind(a.cursorh,"mouseup",a.onmouseup)),!a.ispage&&a.opt.enablescrollonselection&&(a.bind(a.win[0],"mousedown",a.onselectionstart),a.bind(document,"mouseup",a.onselectionend),a.bind(a.cursor,"mouseup",a.onselectionend),a.cursorh&&a.bind(a.cursorh,"mouseup",a.onselectionend),a.bind(document,"mousemove",a.onselectiondrag)),a.zoom&&(a.jqbind(a.zoom,"mouseenter",function(){a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.zoom,"mouseleave",
                function(){a.rail.active=!1;a.rail.drag||a.hideCursor()})));a.opt.enablemousewheel&&(a.isiframe||a.bind(e.isie&&a.ispage?document:a.win,"mousewheel",a.onmousewheel),a.bind(a.rail,"mousewheel",a.onmousewheel),a.railh&&a.bind(a.railh,"mousewheel",a.onmousewheelhr));a.ispage||e.cantouch||/HTML|^BODY/.test(a.win[0].nodeName)||(a.win.attr("tabindex")||a.win.attr({tabindex:N++}),a.jqbind(a.win,"focus",function(b){y=a.getTarget(b).id||!0;a.hasfocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,
                "blur",function(b){y=!1;a.hasfocus=!1}),a.jqbind(a.win,"mouseenter",function(b){D=a.getTarget(b).id||!0;a.hasmousefocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,"mouseleave",function(){D=!1;a.hasmousefocus=!1;a.rail.drag||a.hideCursor()}))}a.onkeypress=function(b){if(a.railslocked&&0==a.page.maxh)return!0;b=b?b:window.e;var c=a.getTarget(b);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp)||f(c).attr("contenteditable"))return!0;
            if(a.hasfocus||a.hasmousefocus&&!y||a.ispage&&!y&&!D){c=b.keyCode;if(a.railslocked&&27!=c)return a.cancelEvent(b);var g=b.ctrlKey||!1,d=b.shiftKey||!1,e=!1;switch(c){case 38:case 63233:a.doScrollBy(72);e=!0;break;case 40:case 63235:a.doScrollBy(-72);e=!0;break;case 37:case 63232:a.railh&&(g?a.doScrollLeft(0):a.doScrollLeftBy(72),e=!0);break;case 39:case 63234:a.railh&&(g?a.doScrollLeft(a.page.maxw):a.doScrollLeftBy(-72),e=!0);break;case 33:case 63276:a.doScrollBy(a.view.h);e=!0;break;case 34:case 63277:a.doScrollBy(-a.view.h);
                e=!0;break;case 36:case 63273:a.railh&&g?a.doScrollPos(0,0):a.doScrollTo(0);e=!0;break;case 35:case 63275:a.railh&&g?a.doScrollPos(a.page.maxw,a.page.maxh):a.doScrollTo(a.page.maxh);e=!0;break;case 32:a.opt.spacebarenabled&&(d?a.doScrollBy(a.view.h):a.doScrollBy(-a.view.h),e=!0);break;case 27:a.zoomactive&&(a.doZoom(),e=!0)}if(e)return a.cancelEvent(b)}};a.opt.enablekeyboard&&a.bind(document,e.isopera&&!e.isopera12?"keypress":"keydown",a.onkeypress);a.bind(document,"keydown",function(b){b.ctrlKey&&
        (a.wheelprevented=!0)});a.bind(document,"keyup",function(b){b.ctrlKey||(a.wheelprevented=!1)});a.bind(window,"blur",function(b){a.wheelprevented=!1});a.bind(window,"resize",a.lazyResize);a.bind(window,"orientationchange",a.lazyResize);a.bind(window,"load",a.lazyResize);if(e.ischrome&&!a.ispage&&!a.haswrapper){var r=a.win.attr("style"),c=parseFloat(a.win.css("width"))+1;a.win.css("width",c);a.synched("chromefix",function(){a.win.attr("style",r)})}a.onAttributeChange=function(b){a.lazyResize(a.isieold?
            250:30)};!1!==v&&(a.observerbody=new v(function(b){b.forEach(function(b){if("attributes"==b.type)return f("body").hasClass("modal-open")?a.hide():a.show()});if(document.body.scrollHeight!=a.page.maxh)return a.lazyResize(30)}),a.observerbody.observe(document.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]}));a.ispage||a.haswrapper||(!1!==v?(a.observer=new v(function(b){b.forEach(a.onAttributeChange)}),a.observer.observe(a.win[0],{childList:!0,characterData:!1,
            attributes:!0,subtree:!1}),a.observerremover=new v(function(b){b.forEach(function(b){if(0<b.removedNodes.length)for(var c in b.removedNodes)if(a&&b.removedNodes[c]==a.win[0])return a.remove()})}),a.observerremover.observe(a.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(a.bind(a.win,e.isie&&!e.isie9?"propertychange":"DOMAttrModified",a.onAttributeChange),e.isie9&&a.win[0].attachEvent("onpropertychange",a.onAttributeChange),a.bind(a.win,"DOMNodeRemoved",function(b){b.target==
        a.win[0]&&a.remove()})));!a.ispage&&a.opt.boxzoom&&a.bind(window,"resize",a.resizeZoom);a.istextarea&&a.bind(a.win,"mouseup",a.lazyResize);a.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var M=function(){a.iframexd=!1;var b;try{b="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(c){a.iframexd=!0,b=!1}if(a.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;a.forcescreen=!0;a.isiframe&&(a.iframe={doc:f(b),html:a.doc.contents().find("html")[0],
        body:a.doc.contents().find("body")[0]},a.getContentSize=function(){return{w:Math.max(a.iframe.html.scrollWidth,a.iframe.body.scrollWidth),h:Math.max(a.iframe.html.scrollHeight,a.iframe.body.scrollHeight)}},a.docscroll=f(a.iframe.body));if(!e.isios&&a.opt.iframeautoresize&&!a.isiframe){a.win.scrollTop(0);a.doc.height("");var g=Math.max(b.getElementsByTagName("html")[0].scrollHeight,b.body.scrollHeight);a.doc.height(g)}a.lazyResize(30);e.isie7&&a.css(f(a.iframe.html),{"overflow-y":"hidden"});a.css(f(a.iframe.body),
        {"overflow-y":"hidden"});e.isios&&a.haswrapper&&a.css(f(b.body),{"-webkit-transform":"translate3d(0,0,0)"});"contentWindow"in this?a.bind(this.contentWindow,"scroll",a.onscroll):a.bind(b,"scroll",a.onscroll);a.opt.enablemousewheel&&a.bind(b,"mousewheel",a.onmousewheel);a.opt.enablekeyboard&&a.bind(b,e.isopera?"keypress":"keydown",a.onkeypress);if(e.cantouch||a.opt.touchbehavior)a.bind(b,"mousedown",a.ontouchstart),a.bind(b,"mousemove",function(b){return a.ontouchmove(b,!0)}),a.opt.grabcursorenabled&&
    e.cursorgrabvalue&&a.css(f(b.body),{cursor:e.cursorgrabvalue});a.bind(b,"mouseup",a.ontouchend);a.zoom&&(a.opt.dblclickzoom&&a.bind(b,"dblclick",a.doZoom),a.ongesturezoom&&a.bind(b,"gestureend",a.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){M.call(a.doc[0],!1)},500);a.bind(this.doc,"load",M)}};this.showCursor=function(b,c){a.cursortimeout&&(clearTimeout(a.cursortimeout),a.cursortimeout=0);if(a.rail){a.autohidedom&&(a.autohidedom.stop().css({opacity:a.opt.cursoropacitymax}),
        a.cursoractive=!0);a.rail.drag&&1==a.rail.drag.pt||("undefined"!=typeof b&&!1!==b&&(a.scroll.y=Math.round(1*b/a.scrollratio.y)),"undefined"!=typeof c&&(a.scroll.x=Math.round(1*c/a.scrollratio.x)));a.cursor.css({height:a.cursorheight,top:a.scroll.y});if(a.cursorh){var d=a.hasreversehr?a.scrollvaluemaxw-a.scroll.x:a.scroll.x;!a.rail.align&&a.rail.visibility?a.cursorh.css({width:a.cursorwidth,left:d+a.rail.width}):a.cursorh.css({width:a.cursorwidth,left:d});a.cursoractive=!0}a.zoom&&a.zoom.stop().css({opacity:a.opt.cursoropacitymax})}};
    this.hideCursor=function(b){a.cursortimeout||!a.rail||!a.autohidedom||a.hasmousefocus&&"leave"==a.opt.autohidemode||(a.cursortimeout=setTimeout(function(){a.rail.active&&a.showonmouseevent||(a.autohidedom.stop().animate({opacity:a.opt.cursoropacitymin}),a.zoom&&a.zoom.stop().animate({opacity:a.opt.cursoropacitymin}),a.cursoractive=!1);a.cursortimeout=0},b||a.opt.hidecursordelay))};this.noticeCursor=function(b,c,d){a.showCursor(c,d);a.rail.active||a.hideCursor(b)};this.getContentSize=a.ispage?function(){return{w:Math.max(document.body.scrollWidth,
        document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:a.haswrapper?function(){return{w:a.doc.outerWidth()+parseInt(a.win.css("paddingLeft"))+parseInt(a.win.css("paddingRight")),h:a.doc.outerHeight()+parseInt(a.win.css("paddingTop"))+parseInt(a.win.css("paddingBottom"))}}:function(){return{w:a.docscroll[0].scrollWidth,h:a.docscroll[0].scrollHeight}};this.onResize=function(b,c){if(!a||!a.win)return!1;if(!a.haswrapper&&!a.ispage){if("none"==
        a.win.css("display"))return a.visibility&&a.hideRail().hideRailHr(),!1;a.hidden||a.visibility||a.showRail().showRailHr()}var d=a.page.maxh,e=a.page.maxw,f=a.view.h,h=a.view.w;a.view={w:a.ispage?a.win.width():parseInt(a.win[0].clientWidth),h:a.ispage?a.win.height():parseInt(a.win[0].clientHeight)};a.page=c?c:a.getContentSize();a.page.maxh=Math.max(0,a.page.h-a.view.h);a.page.maxw=Math.max(0,a.page.w-a.view.w);if(a.page.maxh==d&&a.page.maxw==e&&a.view.w==h&&a.view.h==f){if(a.ispage)return a;d=a.win.offset();
        if(a.lastposition&&(e=a.lastposition,e.top==d.top&&e.left==d.left))return a;a.lastposition=d}0==a.page.maxh?(a.hideRail(),a.scrollvaluemax=0,a.scroll.y=0,a.scrollratio.y=0,a.cursorheight=0,a.setScrollTop(0),a.rail.scrollable=!1):(a.page.maxh-=a.opt.railpadding.top+a.opt.railpadding.bottom,a.rail.scrollable=!0);0==a.page.maxw?(a.hideRailHr(),a.scrollvaluemaxw=0,a.scroll.x=0,a.scrollratio.x=0,a.cursorwidth=0,a.setScrollLeft(0),a.railh.scrollable=!1):(a.page.maxw-=a.opt.railpadding.left+a.opt.railpadding.right,
        a.railh.scrollable=!0);a.railslocked=a.locked||0==a.page.maxh&&0==a.page.maxw;if(a.railslocked)return a.ispage||a.updateScrollBar(a.view),!1;a.hidden||a.visibility?a.hidden||a.railh.visibility||a.showRailHr():a.showRail().showRailHr();a.istextarea&&a.win.css("resize")&&"none"!=a.win.css("resize")&&(a.view.h-=20);a.cursorheight=Math.min(a.view.h,Math.round(a.view.h/a.page.h*a.view.h));a.cursorheight=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorheight);a.cursorwidth=
        Math.min(a.view.w,Math.round(a.view.w/a.page.w*a.view.w));a.cursorwidth=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorwidth);a.scrollvaluemax=a.view.h-a.cursorheight-a.cursor.hborder-(a.opt.railpadding.top+a.opt.railpadding.bottom);a.railh&&(a.railh.width=0<a.page.maxh?a.view.w-a.rail.width:a.view.w,a.scrollvaluemaxw=a.railh.width-a.cursorwidth-a.cursorh.wborder-(a.opt.railpadding.left+a.opt.railpadding.right));a.ispage||a.updateScrollBar(a.view);a.scrollratio=
    {x:a.page.maxw/a.scrollvaluemaxw,y:a.page.maxh/a.scrollvaluemax};a.getScrollTop()>a.page.maxh?a.doScrollTop(a.page.maxh):(a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y)),a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)),a.cursoractive&&a.noticeCursor());a.scroll.y&&0==a.getScrollTop()&&a.doScrollTo(Math.floor(a.scroll.y*a.scrollratio.y));return a};this.resize=a.onResize;this.lazyResize=function(b){b=isNaN(b)?30:b;a.debounced("resize",a.resize,b);return a};this.jqbind=function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            c,d){a.events.push({e:b,n:c,f:d,q:!0});f(b).bind(c,d)};this.bind=function(b,c,d,f){var h="jquery"in b?b[0]:b;"mousewheel"==c?window.addEventListener||"onwheel"in document?a._bind(h,"wheel",d,f||!1):(b="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",n(h,b,d,f||!1),"DOMMouseScroll"==b&&n(h,"MozMousePixelScroll",d,f||!1)):h.addEventListener?(e.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&a._bind(h,"mousedown"==c?"touchstart":"mouseup"==c?"touchend":"touchmove",function(a){if(a.touches){if(2>
        a.touches.length){var b=a.touches.length?a.touches[0]:a;b.original=a;d.call(this,b)}}else a.changedTouches&&(b=a.changedTouches[0],b.original=a,d.call(this,b))},f||!1),a._bind(h,c,d,f||!1),e.cantouch&&"mouseup"==c&&a._bind(h,"touchcancel",d,f||!1)):a._bind(h,c,function(b){(b=b||window.event||!1)&&b.srcElement&&(b.target=b.srcElement);"pageY"in b||(b.pageX=b.clientX+document.documentElement.scrollLeft,b.pageY=b.clientY+document.documentElement.scrollTop);return!1===d.call(h,b)||!1===f?a.cancelEvent(b):
        !0})};e.haseventlistener?(this._bind=function(b,c,d,e){a.events.push({e:b,n:c,f:d,b:e,q:!1});b.addEventListener(c,d,e||!1)},this.cancelEvent=function(a){if(!a)return!1;a=a.original?a.original:a;a.preventDefault();a.stopPropagation();a.preventManipulation&&a.preventManipulation();return!1},this.stopPropagation=function(a){if(!a)return!1;a=a.original?a.original:a;a.stopPropagation();return!1},this._unbind=function(a,c,d,e){a.removeEventListener(c,d,e)}):(this._bind=function(b,c,d,e){a.events.push({e:b,
        n:c,f:d,b:e,q:!1});b.attachEvent?b.attachEvent("on"+c,d):b["on"+c]=d},this.cancelEvent=function(a){a=window.event||!1;if(!a)return!1;a.cancelBubble=!0;a.cancel=!0;return a.returnValue=!1},this.stopPropagation=function(a){a=window.event||!1;if(!a)return!1;a.cancelBubble=!0;return!1},this._unbind=function(a,c,d,e){a.detachEvent?a.detachEvent("on"+c,d):a["on"+c]=!1});this.unbindAll=function(){for(var b=0;b<a.events.length;b++){var c=a.events[b];c.q?c.e.unbind(c.n,c.f):a._unbind(c.e,c.n,c.f,c.b)}};this.showRail=
        function(){0==a.page.maxh||!a.ispage&&"none"==a.win.css("display")||(a.visibility=!0,a.rail.visibility=!0,a.rail.css("display","block"));return a};this.showRailHr=function(){if(!a.railh)return a;0==a.page.maxw||!a.ispage&&"none"==a.win.css("display")||(a.railh.visibility=!0,a.railh.css("display","block"));return a};this.hideRail=function(){a.visibility=!1;a.rail.visibility=!1;a.rail.css("display","none");return a};this.hideRailHr=function(){if(!a.railh)return a;a.railh.visibility=!1;a.railh.css("display",
        "none");return a};this.show=function(){a.hidden=!1;a.railslocked=!1;return a.showRail().showRailHr()};this.hide=function(){a.hidden=!0;a.railslocked=!0;return a.hideRail().hideRailHr()};this.toggle=function(){return a.hidden?a.show():a.hide()};this.remove=function(){a.stop();a.cursortimeout&&clearTimeout(a.cursortimeout);a.doZoomOut();a.unbindAll();e.isie9&&a.win[0].detachEvent("onpropertychange",a.onAttributeChange);!1!==a.observer&&a.observer.disconnect();!1!==a.observerremover&&a.observerremover.disconnect();
        !1!==a.observerbody&&a.observerbody.disconnect();a.events=null;a.cursor&&a.cursor.remove();a.cursorh&&a.cursorh.remove();a.rail&&a.rail.remove();a.railh&&a.railh.remove();a.zoom&&a.zoom.remove();for(var b=0;b<a.saved.css.length;b++){var c=a.saved.css[b];c[0].css(c[1],"undefined"==typeof c[2]?"":c[2])}a.saved=!1;a.me.data("__nicescroll","");var d=f.nicescroll;d.each(function(b){if(this&&this.id===a.id){delete d[b];for(var c=++b;c<d.length;c++,b++)d[b]=d[c];d.length--;d.length&&delete d[d.length]}});
        for(var h in a)a[h]=null,delete a[h];a=null};this.scrollstart=function(b){this.onscrollstart=b;return a};this.scrollend=function(b){this.onscrollend=b;return a};this.scrollcancel=function(b){this.onscrollcancel=b;return a};this.zoomin=function(b){this.onzoomin=b;return a};this.zoomout=function(b){this.onzoomout=b;return a};this.isScrollable=function(a){a=a.target?a.target:a;if("OPTION"==a.nodeName)return!0;for(;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var c=f(a),c=c.css("overflowY")||c.css("overflowX")||
        c.css("overflow")||"";if(/scroll|auto/.test(c))return a.clientHeight!=a.scrollHeight;a=a.parentNode?a.parentNode:!1}return!1};this.getViewport=function(a){for(a=a&&a.parentNode?a.parentNode:!1;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var c=f(a);if(/fixed|absolute/.test(c.css("position")))return c;var d=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(d)&&a.clientHeight!=a.scrollHeight||0<c.getNiceScroll().length)return c;a=a.parentNode?a.parentNode:!1}return!1};
    this.triggerScrollEnd=function(){if(a.onscrollend){var b=a.getScrollLeft(),c=a.getScrollTop();a.onscrollend.call(a,{type:"scrollend",current:{x:b,y:c},end:{x:b,y:c}})}};this.onmousewheel=function(b){if(!a.wheelprevented){if(a.railslocked)return a.debounced("checkunlock",a.resize,250),!0;if(a.rail.drag)return a.cancelEvent(b);"auto"==a.opt.oneaxismousemode&&0!=b.deltaX&&(a.opt.oneaxismousemode=!1);if(a.opt.oneaxismousemode&&0==b.deltaX&&!a.rail.scrollable)return a.railh&&a.railh.scrollable?a.onmousewheelhr(b):
        !0;var c=+new Date,d=!1;a.opt.preservenativescrolling&&a.checkarea+600<c&&(a.nativescrollingarea=a.isScrollable(b),d=!0);a.checkarea=c;if(a.nativescrollingarea)return!0;if(b=p(b,!1,d))a.checkarea=0;return b}};this.onmousewheelhr=function(b){if(!a.wheelprevented){if(a.railslocked||!a.railh.scrollable)return!0;if(a.rail.drag)return a.cancelEvent(b);var c=+new Date,d=!1;a.opt.preservenativescrolling&&a.checkarea+600<c&&(a.nativescrollingarea=a.isScrollable(b),d=!0);a.checkarea=c;return a.nativescrollingarea?
        !0:a.railslocked?a.cancelEvent(b):p(b,!0,d)}};this.stop=function(){a.cancelScroll();a.scrollmon&&a.scrollmon.stop();a.cursorfreezed=!1;a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.noticeCursor();return a};this.getTransitionSpeed=function(b){var c=Math.round(10*a.opt.scrollspeed);b=Math.min(c,Math.round(b/20*a.opt.scrollspeed));return 20<b?b:0};a.opt.smoothscroll?a.ishwscroll&&e.hastransition&&a.opt.usetransition&&a.opt.smoothscroll?(this.prepareTransition=function(b,c){var d=c?20<
    b?b:0:a.getTransitionSpeed(b),f=d?e.prefixstyle+"transform "+d+"ms ease-out":"";a.lasttransitionstyle&&a.lasttransitionstyle==f||(a.lasttransitionstyle=f,a.doc.css(e.transitionstyle,f));return d},this.doScrollLeft=function(b,c){var d=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=function(b,c){var d=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=function(b,c,d){var f=a.getScrollTop(),h=a.getScrollLeft();(0>(a.newscrolly-
    f)*(c-f)||0>(a.newscrollx-h)*(b-h))&&a.cancelScroll();0==a.opt.bouncescroll&&(0>c?c=0:c>a.page.maxh&&(c=a.page.maxh),0>b?b=0:b>a.page.maxw&&(b=a.page.maxw));if(a.scrollrunning&&b==a.newscrollx&&c==a.newscrolly)return!1;a.newscrolly=c;a.newscrollx=b;a.newscrollspeed=d||!1;if(a.timer)return!1;a.timer=setTimeout(function(){var d=a.getScrollTop(),f=a.getScrollLeft(),h,k;h=b-f;k=c-d;h=Math.round(Math.sqrt(Math.pow(h,2)+Math.pow(k,2)));h=a.newscrollspeed&&1<a.newscrollspeed?a.newscrollspeed:a.getTransitionSpeed(h);
        a.newscrollspeed&&1>=a.newscrollspeed&&(h*=a.newscrollspeed);a.prepareTransition(h,!0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);0<h&&(!a.scrollrunning&&a.onscrollstart&&a.onscrollstart.call(a,{type:"scrollstart",current:{x:f,y:d},request:{x:b,y:c},end:{x:a.newscrollx,y:a.newscrolly},speed:h}),e.transitionend?a.scrollendtrapped||(a.scrollendtrapped=!0,a.bind(a.doc,e.transitionend,a.onScrollTransitionEnd,!1)):(a.scrollendtrapped&&clearTimeout(a.scrollendtrapped),a.scrollendtrapped=
            setTimeout(a.onScrollTransitionEnd,h)),a.timerscroll={bz:new A(d,a.newscrolly,h,0,0,.58,1),bh:new A(f,a.newscrollx,h,0,0,.58,1)},a.cursorfreezed||(a.timerscroll.tm=setInterval(function(){a.showCursor(a.getScrollTop(),a.getScrollLeft())},60)));a.synched("doScroll-set",function(){a.timer=0;a.scrollendtrapped&&(a.scrollrunning=!0);a.setScrollTop(a.newscrolly);a.setScrollLeft(a.newscrollx);if(!a.scrollendtrapped)a.onScrollTransitionEnd()})},50)},this.cancelScroll=function(){if(!a.scrollendtrapped)return!0;
        var b=a.getScrollTop(),c=a.getScrollLeft();a.scrollrunning=!1;e.transitionend||clearTimeout(e.transitionend);a.scrollendtrapped=!1;a._unbind(a.doc[0],e.transitionend,a.onScrollTransitionEnd);a.prepareTransition(0);a.setScrollTop(b);a.railh&&a.setScrollLeft(c);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;a.cursorfreezed=!1;a.showCursor(b,c);return a},this.onScrollTransitionEnd=function(){a.scrollendtrapped&&a._unbind(a.doc[0],e.transitionend,a.onScrollTransitionEnd);
        a.scrollendtrapped=!1;a.prepareTransition(0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;var b=a.getScrollTop(),c=a.getScrollLeft();a.setScrollTop(b);a.railh&&a.setScrollLeft(c);a.noticeCursor(!1,b,c);a.cursorfreezed=!1;0>b?b=0:b>a.page.maxh&&(b=a.page.maxh);0>c?c=0:c>a.page.maxw&&(c=a.page.maxw);if(b!=a.newscrolly||c!=a.newscrollx)return a.doScrollPos(c,b,a.opt.snapbackspeed);a.onscrollend&&a.scrollrunning&&a.triggerScrollEnd();a.scrollrunning=!1}):(this.doScrollLeft=
        function(b,c){var d=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=function(b,c){var d=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=function(b,c,d){function e(){if(a.cancelAnimationFrame)return!0;a.scrollrunning=!0;if(n=1-n)return a.timer=s(e)||1;var b=0,c,d,g=d=a.getScrollTop();if(a.dst.ay){g=a.bzscroll?a.dst.py+a.bzscroll.getNow()*a.dst.ay:a.newscrolly;c=g-d;if(0>c&&g<a.newscrolly||0<c&&g>a.newscrolly)g=a.newscrolly;
        a.setScrollTop(g);g==a.newscrolly&&(b=1)}else b=1;d=c=a.getScrollLeft();if(a.dst.ax){d=a.bzscroll?a.dst.px+a.bzscroll.getNow()*a.dst.ax:a.newscrollx;c=d-c;if(0>c&&d<a.newscrollx||0<c&&d>a.newscrollx)d=a.newscrollx;a.setScrollLeft(d);d==a.newscrollx&&(b+=1)}else b+=1;2==b?(a.timer=0,a.cursorfreezed=!1,a.bzscroll=!1,a.scrollrunning=!1,0>g?g=0:g>a.page.maxh&&(g=a.page.maxh),0>d?d=0:d>a.page.maxw&&(d=a.page.maxw),d!=a.newscrollx||g!=a.newscrolly?a.doScrollPos(d,g):a.onscrollend&&a.triggerScrollEnd()):
        a.timer=s(e)||1}c="undefined"==typeof c||!1===c?a.getScrollTop(!0):c;if(a.timer&&a.newscrolly==c&&a.newscrollx==b)return!0;a.timer&&t(a.timer);a.timer=0;var f=a.getScrollTop(),h=a.getScrollLeft();(0>(a.newscrolly-f)*(c-f)||0>(a.newscrollx-h)*(b-h))&&a.cancelScroll();a.newscrolly=c;a.newscrollx=b;a.bouncescroll&&a.rail.visibility||(0>a.newscrolly?a.newscrolly=0:a.newscrolly>a.page.maxh&&(a.newscrolly=a.page.maxh));a.bouncescroll&&a.railh.visibility||(0>a.newscrollx?a.newscrollx=0:a.newscrollx>a.page.maxw&&
    (a.newscrollx=a.page.maxw));a.dst={};a.dst.x=b-h;a.dst.y=c-f;a.dst.px=h;a.dst.py=f;var k=Math.round(Math.sqrt(Math.pow(a.dst.x,2)+Math.pow(a.dst.y,2)));a.dst.ax=a.dst.x/k;a.dst.ay=a.dst.y/k;var l=0,m=k;0==a.dst.x?(l=f,m=c,a.dst.ay=1,a.dst.py=0):0==a.dst.y&&(l=h,m=b,a.dst.ax=1,a.dst.px=0);k=a.getTransitionSpeed(k);d&&1>=d&&(k*=d);a.bzscroll=0<k?a.bzscroll?a.bzscroll.update(m,k):new A(l,m,k,0,1,0,1):!1;if(!a.timer){(f==a.page.maxh&&c>=a.page.maxh||h==a.page.maxw&&b>=a.page.maxw)&&a.checkContentSize();
        var n=1;a.cancelAnimationFrame=!1;a.timer=1;a.onscrollstart&&!a.scrollrunning&&a.onscrollstart.call(a,{type:"scrollstart",current:{x:h,y:f},request:{x:b,y:c},end:{x:a.newscrollx,y:a.newscrolly},speed:k});e();(f==a.page.maxh&&c>=f||h==a.page.maxw&&b>=h)&&a.checkContentSize();a.noticeCursor()}},this.cancelScroll=function(){a.timer&&t(a.timer);a.timer=0;a.bzscroll=!1;a.scrollrunning=!1;return a}):(this.doScrollLeft=function(b,c){var d=a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             c){var d=a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=function(b,c,d){var e=b>a.page.maxw?a.page.maxw:b;0>e&&(e=0);var f=c>a.page.maxh?a.page.maxh:c;0>f&&(f=0);a.synched("scroll",function(){a.setScrollTop(f);a.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(b,c){var d=0,d=c?Math.floor((a.scroll.y-b)*a.scrollratio.y):(a.timer?a.newscrolly:a.getScrollTop(!0))-b;if(a.bouncescroll){var e=Math.round(a.view.h/2);d<-e?d=-e:d>a.page.maxh+e&&(d=a.page.maxh+e)}a.cursorfreezed=
        !1;e=a.getScrollTop(!0);if(0>d&&0>=e)return a.noticeCursor();if(d>a.page.maxh&&e>=a.page.maxh)return a.checkContentSize(),a.noticeCursor();a.doScrollTop(d)};this.doScrollLeftBy=function(b,c){var d=0,d=c?Math.floor((a.scroll.x-b)*a.scrollratio.x):(a.timer?a.newscrollx:a.getScrollLeft(!0))-b;if(a.bouncescroll){var e=Math.round(a.view.w/2);d<-e?d=-e:d>a.page.maxw+e&&(d=a.page.maxw+e)}a.cursorfreezed=!1;e=a.getScrollLeft(!0);if(0>d&&0>=e||d>a.page.maxw&&e>=a.page.maxw)return a.noticeCursor();a.doScrollLeft(d)};
    this.doScrollTo=function(b,c){c&&Math.round(b*a.scrollratio.y);a.cursorfreezed=!1;a.doScrollTop(b)};this.checkContentSize=function(){var b=a.getContentSize();b.h==a.page.h&&b.w==a.page.w||a.resize(!1,b)};a.onscroll=function(b){a.rail.drag||a.cursorfreezed||a.synched("scroll",function(){a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.railh&&(a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)));a.noticeCursor()})};a.bind(a.docscroll,"scroll",a.onscroll);this.doZoomIn=function(b){if(!a.zoomactive){a.zoomactive=
        !0;a.zoomrestore={style:{}};var c="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),d=a.win[0].style,h;for(h in c){var k=c[h];a.zoomrestore.style[k]="undefined"!=typeof d[k]?d[k]:""}a.zoomrestore.style.width=a.win.css("width");a.zoomrestore.style.height=a.win.css("height");a.zoomrestore.padding={w:a.win.outerWidth()-a.win.width(),h:a.win.outerHeight()-a.win.height()};e.isios4&&(a.zoomrestore.scrollTop=f(window).scrollTop(),f(window).scrollTop(0));
        a.win.css({position:e.isios4?"absolute":"fixed",top:0,left:0,"z-index":x+100,margin:"0px"});c=a.win.css("backgroundColor");(""==c||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c))&&a.win.css("backgroundColor","#fff");a.rail.css({"z-index":x+101});a.zoom.css({"z-index":x+102});a.zoom.css("backgroundPosition","0px -18px");a.resizeZoom();a.onzoomin&&a.onzoomin.call(a);return a.cancelEvent(b)}};this.doZoomOut=function(b){if(a.zoomactive)return a.zoomactive=!1,a.win.css("margin",""),a.win.css(a.zoomrestore.style),
    e.isios4&&f(window).scrollTop(a.zoomrestore.scrollTop),a.rail.css({"z-index":a.zindex}),a.zoom.css({"z-index":a.zindex}),a.zoomrestore=!1,a.zoom.css("backgroundPosition","0px 0px"),a.onResize(),a.onzoomout&&a.onzoomout.call(a),a.cancelEvent(b)};this.doZoom=function(b){return a.zoomactive?a.doZoomOut(b):a.doZoomIn(b)};this.resizeZoom=function(){if(a.zoomactive){var b=a.getScrollTop();a.win.css({width:f(window).width()-a.zoomrestore.padding.w+"px",height:f(window).height()-a.zoomrestore.padding.h+"px"});
        a.onResize();a.setScrollTop(Math.min(a.page.maxh,b))}};this.init();f.nicescroll.push(this)},L=function(f){var c=this;this.nc=f;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(f,k){c.stop();var d=c.time();c.steptime=0;c.lasttime=d;c.speedx=0;c.speedy=0;c.lastx=f;c.lasty=k;c.lastscrollx=-1;c.lastscrolly=
    -1};this.update=function(f,k){var d=c.time();c.steptime=d-c.lasttime;c.lasttime=d;var d=k-c.lasty,n=f-c.lastx,p=c.nc.getScrollTop(),a=c.nc.getScrollLeft(),p=p+d,a=a+n;c.snapx=0>a||a>c.nc.page.maxw;c.snapy=0>p||p>c.nc.page.maxh;c.speedx=n;c.speedy=d;c.lastx=f;c.lasty=k};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(f,k){var d=!1;0>k?(k=0,d=!0):k>c.nc.page.maxh&&(k=c.nc.page.maxh,d=!0);0>f?(f=0,d=
    !0):f>c.nc.page.maxw&&(f=c.nc.page.maxw,d=!0);d?c.nc.doScrollPos(f,k,c.nc.opt.snapbackspeed):c.nc.triggerScrollEnd()};this.doMomentum=function(f){var k=c.time(),d=f?k+f:c.lasttime;f=c.nc.getScrollLeft();var n=c.nc.getScrollTop(),p=c.nc.page.maxh,a=c.nc.page.maxw;c.speedx=0<a?Math.min(60,c.speedx):0;c.speedy=0<p?Math.min(60,c.speedy):0;d=d&&60>=k-d;if(0>n||n>p||0>f||f>a)d=!1;f=c.speedx&&d?c.speedx:!1;if(c.speedy&&d&&c.speedy||f){var s=Math.max(16,c.steptime);50<s&&(f=s/50,c.speedx*=f,c.speedy*=f,s=
    50);c.demulxy=0;c.lastscrollx=c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var e=c.lastscrollx,r=c.lastscrolly,t=function(){var d=600<c.time()-k?.04:.02;c.speedx&&(e=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=e,0>e||e>a)&&(d=.1);c.speedy&&(r=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=r,0>r||r>p)&&(d=.1);c.demulxy=Math.min(1,c.demulxy+d);c.nc.synched("domomentum2d",function(){c.speedx&&(c.nc.getScrollLeft()!=
c.chkx&&c.stop(),c.chkx=e,c.nc.setScrollLeft(e));c.speedy&&(c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=r,c.nc.setScrollTop(r));c.timer||(c.nc.hideCursor(),c.doSnapy(e,r))});1>c.demulxy?c.timer=setTimeout(t,s):(c.stop(),c.nc.hideCursor(),c.doSnapy(e,r))};t()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},w=f.fn.scrollTop;f.cssHooks.pageYOffset={get:function(k,c,h){return(c=f.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollTop():w.call(k)},set:function(k,c){var h=f.data(k,"__nicescroll")||
    !1;h&&h.ishwscroll?h.setScrollTop(parseInt(c)):w.call(k,c);return this}};f.fn.scrollTop=function(k){if("undefined"==typeof k){var c=this[0]?f.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollTop():w.call(this)}return this.each(function(){var c=f.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollTop(parseInt(k)):w.call(f(this),k)})};var B=f.fn.scrollLeft;f.cssHooks.pageXOffset={get:function(k,c,h){return(c=f.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollLeft():B.call(k)},
    set:function(k,c){var h=f.data(k,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollLeft(parseInt(c)):B.call(k,c);return this}};f.fn.scrollLeft=function(k){if("undefined"==typeof k){var c=this[0]?f.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollLeft():B.call(this)}return this.each(function(){var c=f.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollLeft(parseInt(k)):B.call(f(this),k)})};var C=function(k){var c=this;this.length=0;this.name="nicescrollarray";this.each=function(d){for(var f=
    0,h=0;f<c.length;f++)d.call(c[f],h++);return c};this.push=function(d){c[c.length]=d;c.length++};this.eq=function(d){return c[d]};if(k)for(var h=0;h<k.length;h++){var m=f.data(k[h],"__nicescroll")||!1;m&&(this[this.length]=m,this.length++)}return this};(function(f,c,h){for(var m=0;m<c.length;m++)h(f,c[m])})(C.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(f,c){f[c]=function(){var f=arguments;return this.each(function(){this[c].apply(this,f)})}});f.fn.getNiceScroll=
    function(k){return"undefined"==typeof k?new C(this):this[k]&&f.data(this[k],"__nicescroll")||!1};f.extend(f.expr[":"],{nicescroll:function(k){return f.data(k,"__nicescroll")?!0:!1}});f.fn.niceScroll=function(k,c){"undefined"!=typeof c||"object"!=typeof k||"jquery"in k||(c=k,k=!1);c=f.extend({},c);var h=new C;"undefined"==typeof c&&(c={});k&&(c.doc=f(k),c.win=f(this));var m=!("doc"in c);m||"win"in c||(c.win=f(this));this.each(function(){var d=f(this).data("__nicescroll")||!1;d||(c.doc=m?f(this):c.doc,
    d=new R(c,f(this)),f(this).data("__nicescroll",d));h.push(d)});return 1==h.length?h[0]:h};window.NiceScroll={getjQuery:function(){return f}};f.nicescroll||(f.nicescroll=new C,f.nicescroll.options=I)});
    !(function (t) {
      function e() {
        var t = location.href;
        return (
          (hashtag =
            -1 !== t.indexOf("#prettyPhoto") &&
            decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length))),
          hashtag && (hashtag = hashtag.replace(/<|>/g, "")),
          hashtag
        );
      }
      function i() {
        "undefined" != typeof theRel &&
          (location.hash = theRel + "/" + rel_index + "/");
      }
      function p() {
        -1 !== location.href.indexOf("#prettyPhoto") &&
          (location.hash = "prettyPhoto");
      }
      function o(t, e) {
        var i =
            "[\\?&]" +
            (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")) +
            "=([^&#]*)",
          p = new RegExp(i).exec(e);
        return null == p ? "" : p[1];
      }
      (t.prettyPhoto = { version: "3.1.6" }),
        (t.fn.prettyPhoto = function (a) {
          function s() {
            t(".pp_loaderIcon").hide(),
              (projectedTop =
                scroll_pos.scrollTop + (I / 2 - u.containerHeight / 2)),
              projectedTop < 0 && (projectedTop = 0),
              $ppt.fadeTo(settings.animation_speed, 1),
              $pp_pic_holder
                .find(".pp_content")
                .animate(
                  { height: u.contentHeight, width: u.contentWidth },
                  settings.animation_speed
                ),
              $pp_pic_holder.animate(
                {
                  top: projectedTop,
                  left:
                    j / 2 - u.containerWidth / 2 < 0
                      ? 0
                      : j / 2 - u.containerWidth / 2,
                  width: u.containerWidth,
                },
                settings.animation_speed,
                function () {
                  $pp_pic_holder
                    .find(".pp_hoverContainer,#fullResImage")
                    .height(u.height)
                    .width(u.width),
                    $pp_pic_holder
                      .find(".pp_fade")
                      .fadeIn(settings.animation_speed),
                    isSet && "image" == h(pp_images[set_position])
                      ? $pp_pic_holder.find(".pp_hoverContainer").show()
                      : $pp_pic_holder.find(".pp_hoverContainer").hide(),
                    settings.allow_expand &&
                      (u.resized
                        ? t("a.pp_expand,a.pp_contract").show()
                        : t("a.pp_expand").hide()),
                    !settings.autoplay_slideshow ||
                      P ||
                      v ||
                      t.prettyPhoto.startSlideshow(),
                    settings.changepicturecallback(),
                    (v = !0);
                }
              ),
              m(),
              a.ajaxcallback();
          }
          function n(e) {
            $pp_pic_holder
              .find("#pp_full_res object,#pp_full_res embed")
              .css("visibility", "hidden"),
              $pp_pic_holder
                .find(".pp_fade")
                .fadeOut(settings.animation_speed, function () {
                  t(".pp_loaderIcon").show(), e();
                });
          }
          function l(e) {
            e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide();
          }
          function r(t, e) {
            if (
              ((resized = !1),
              d(t, e),
              (imageWidth = t),
              (imageHeight = e),
              (k > j || b > I) && doresize && settings.allow_resize && !$)
            ) {
              for (resized = !0, fitting = !1; !fitting; )
                k > j
                  ? ((imageWidth = j - 200),
                    (imageHeight = (e / t) * imageWidth))
                  : b > I
                  ? ((imageHeight = I - 200),
                    (imageWidth = (t / e) * imageHeight))
                  : (fitting = !0),
                  (b = imageHeight),
                  (k = imageWidth);
              (k > j || b > I) && r(k, b), d(imageWidth, imageHeight);
            }
            return {
              width: Math.floor(imageWidth),
              height: Math.floor(imageHeight),
              containerHeight: Math.floor(b),
              containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
              contentHeight: Math.floor(y),
              contentWidth: Math.floor(w),
              resized: resized,
            };
          }
          function d(e, i) {
            (e = parseFloat(e)),
              (i = parseFloat(i)),
              ($pp_details = $pp_pic_holder.find(".pp_details")),
              $pp_details.width(e),
              (detailsHeight =
                parseFloat($pp_details.css("marginTop")) +
                parseFloat($pp_details.css("marginBottom"))),
              ($pp_details = $pp_details
                .clone()
                .addClass(settings.theme)
                .width(e)
                .appendTo(t("body"))
                .css({ position: "absolute", top: -1e4 })),
              (detailsHeight += $pp_details.height()),
              (detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight),
              $pp_details.remove(),
              ($pp_title = $pp_pic_holder.find(".ppt")),
              $pp_title.width(e),
              (titleHeight =
                parseFloat($pp_title.css("marginTop")) +
                parseFloat($pp_title.css("marginBottom"))),
              ($pp_title = $pp_title
                .clone()
                .appendTo(t("body"))
                .css({ position: "absolute", top: -1e4 })),
              (titleHeight += $pp_title.height()),
              $pp_title.remove(),
              (y = i + detailsHeight),
              (w = e),
              (b =
                y +
                titleHeight +
                $pp_pic_holder.find(".pp_top").height() +
                $pp_pic_holder.find(".pp_bottom").height()),
              (k = e);
          }
          function h(t) {
            return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i)
              ? "youtube"
              : t.match(/vimeo\.com/i)
              ? "vimeo"
              : t.match(/\b.mov\b/i)
              ? "quicktime"
              : t.match(/\b.swf\b/i)
              ? "flash"
              : t.match(/\biframe=true\b/i)
              ? "iframe"
              : t.match(/\bajax=true\b/i)
              ? "ajax"
              : t.match(/\bcustom=true\b/i)
              ? "custom"
              : "#" == t.substr(0, 1)
              ? "inline"
              : "image";
          }
          function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
              if (
                ((scroll_pos = _()),
                (contentHeight = $pp_pic_holder.height()),
                (contentwidth = $pp_pic_holder.width()),
                (projectedTop =
                  I / 2 + scroll_pos.scrollTop - contentHeight / 2),
                projectedTop < 0 && (projectedTop = 0),
                contentHeight > I)
              )
                return;
              $pp_pic_holder.css({
                top: projectedTop,
                left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2,
              });
            }
          }
          function _() {
            return self.pageYOffset
              ? { scrollTop: self.pageYOffset, scrollLeft: self.pageXOffset }
              : document.documentElement && document.documentElement.scrollTop
              ? {
                  scrollTop: document.documentElement.scrollTop,
                  scrollLeft: document.documentElement.scrollLeft,
                }
              : document.body
              ? {
                  scrollTop: document.body.scrollTop,
                  scrollLeft: document.body.scrollLeft,
                }
              : void 0;
          }
          function g() {
            (I = t(window).height()),
              (j = t(window).width()),
              "undefined" != typeof $pp_overlay &&
                $pp_overlay.height(t(document).height()).width(j);
          }
          function m() {
            isSet &&
            settings.overlay_gallery &&
            "image" == h(pp_images[set_position])
              ? ((itemWidth = 57),
                (navWidth =
                  "facebook" == settings.theme || "pp_default" == settings.theme
                    ? 50
                    : 30),
                (itemsPerPage = Math.floor(
                  (u.containerWidth - 100 - navWidth) / itemWidth
                )),
                (itemsPerPage =
                  itemsPerPage < pp_images.length
                    ? itemsPerPage
                    : pp_images.length),
                (totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1),
                0 == totalPage
                  ? ((navWidth = 0),
                    $pp_gallery
                      .find(".pp_arrow_next,.pp_arrow_previous")
                      .hide())
                  : $pp_gallery
                      .find(".pp_arrow_next,.pp_arrow_previous")
                      .show(),
                (galleryWidth = itemsPerPage * itemWidth),
                (fullGalleryWidth = pp_images.length * itemWidth),
                $pp_gallery
                  .css("margin-left", -(galleryWidth / 2 + navWidth / 2))
                  .find("div:first")
                  .width(galleryWidth + 5)
                  .find("ul")
                  .width(fullGalleryWidth)
                  .find("li.selected")
                  .removeClass("selected"),
                (goToPage =
                  Math.floor(set_position / itemsPerPage) < totalPage
                    ? Math.floor(set_position / itemsPerPage)
                    : totalPage),
                t.prettyPhoto.changeGalleryPage(goToPage),
                $pp_gallery_li
                  .filter(":eq(" + set_position + ")")
                  .addClass("selected"))
              : $pp_pic_holder
                  .find(".pp_content")
                  .unbind("mouseenter mouseleave");
          }
          function f(e) {
            if (
              (settings.social_tools &&
                (facebook_like_link = settings.social_tools.replace(
                  "{location_href}",
                  encodeURIComponent(location.href)
                )),
              (settings.markup = settings.markup.replace("{pp_social}", "")),
              t("body").append(settings.markup),
              ($pp_pic_holder = t(".pp_pic_holder")),
              ($ppt = t(".ppt")),
              ($pp_overlay = t("div.pp_overlay")),
              isSet && settings.overlay_gallery)
            ) {
              (currentGalleryPage = 0), (toInject = "");
              for (var i = 0; i < pp_images.length; i++)
                pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)
                  ? ((classname = ""), (img_src = pp_images[i]))
                  : ((classname = "default"), (img_src = "")),
                  (toInject +=
                    "<li class='" +
                    classname +
                    "'><a href='#'><img src='" +
                    img_src +
                    "' width='50' alt='' /></a></li>");
              (toInject = settings.gallery_markup.replace(
                /{gallery}/g,
                toInject
              )),
                $pp_pic_holder.find("#pp_full_res").after(toInject),
                ($pp_gallery = t(".pp_pic_holder .pp_gallery")),
                ($pp_gallery_li = $pp_gallery.find("li")),
                $pp_gallery.find(".pp_arrow_next").click(function () {
                  return (
                    t.prettyPhoto.changeGalleryPage("next"),
                    t.prettyPhoto.stopSlideshow(),
                    !1
                  );
                }),
                $pp_gallery.find(".pp_arrow_previous").click(function () {
                  return (
                    t.prettyPhoto.changeGalleryPage("previous"),
                    t.prettyPhoto.stopSlideshow(),
                    !1
                  );
                }),
                $pp_pic_holder.find(".pp_content").hover(
                  function () {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn();
                  },
                  function () {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut();
                  }
                ),
                (itemWidth = 57),
                $pp_gallery_li.each(function (e) {
                  t(this)
                    .find("a")
                    .click(function () {
                      return (
                        t.prettyPhoto.changePage(e),
                        t.prettyPhoto.stopSlideshow(),
                        !1
                      );
                    });
                });
            }
            settings.slideshow &&
              ($pp_pic_holder
                .find(".pp_nav")
                .prepend('<a href="#" class="pp_play">Play</a>'),
              $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
                return t.prettyPhoto.startSlideshow(), !1;
              })),
              $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme),
              $pp_overlay
                .css({
                  opacity: 0,
                  height: t(document).height(),
                  width: t(window).width(),
                })
                .bind("click", function () {
                  settings.modal || t.prettyPhoto.close();
                }),
              t("a.pp_close").bind("click", function () {
                return t.prettyPhoto.close(), !1;
              }),
              settings.allow_expand &&
                t("a.pp_expand").bind("click", function (e) {
                  return (
                    t(this).hasClass("pp_expand")
                      ? (t(this)
                          .removeClass("pp_expand")
                          .addClass("pp_contract"),
                        (doresize = !1))
                      : (t(this)
                          .removeClass("pp_contract")
                          .addClass("pp_expand"),
                        (doresize = !0)),
                    n(function () {
                      t.prettyPhoto.open();
                    }),
                    !1
                  );
                }),
              $pp_pic_holder
                .find(".pp_previous, .pp_nav .pp_arrow_previous")
                .bind("click", function () {
                  return (
                    t.prettyPhoto.changePage("previous"),
                    t.prettyPhoto.stopSlideshow(),
                    !1
                  );
                }),
              $pp_pic_holder
                .find(".pp_next, .pp_nav .pp_arrow_next")
                .bind("click", function () {
                  return (
                    t.prettyPhoto.changePage("next"),
                    t.prettyPhoto.stopSlideshow(),
                    !1
                  );
                }),
              c();
          }
          a = jQuery.extend(
            {
              hook: "rel",
              animation_speed: "fast",
              ajaxcallback: function () {},
              slideshow: 5e3,
              autoplay_slideshow: !1,
              opacity: 0.8,
              show_title: !0,
              allow_resize: !0,
              allow_expand: !0,
              default_width: 500,
              default_height: 344,
              counter_separator_label: "/",
              theme: "pp_default",
              horizontal_padding: 20,
              hideflash: !1,
              wmode: "opaque",
              autoplay: !0,
              modal: !1,
              deeplinking: !0,
              overlay_gallery: !0,
              overlay_gallery_max: 30,
              keyboard_shortcuts: !0,
              changepicturecallback: function () {},
              callback: function () {},
              ie6_fallback: !0,
              markup:
                '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
              gallery_markup:
                '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
              image_markup: '<img id="fullResImage" src="{path}" />',
              flash_markup:
                '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
              quicktime_markup:
                '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',
              iframe_markup:
                '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
              inline_markup: '<div class="pp_inline">{content}</div>',
              custom_markup: "",
              social_tools:
                '<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>',
            },
            a
          );
          var u,
            v,
            y,
            w,
            b,
            k,
            P,
            x = this,
            $ = !1,
            I = t(window).height(),
            j = t(window).width();
          return (
            (doresize = !0),
            (scroll_pos = _()),
            t(window)
              .unbind("resize.prettyphoto")
              .bind("resize.prettyphoto", function () {
                c(), g();
              }),
            a.keyboard_shortcuts &&
              t(document)
                .unbind("keydown.prettyphoto")
                .bind("keydown.prettyphoto", function (e) {
                  if (
                    "undefined" != typeof $pp_pic_holder &&
                    $pp_pic_holder.is(":visible")
                  )
                    switch (e.keyCode) {
                      case 37:
                        t.prettyPhoto.changePage("previous"),
                          e.preventDefault();
                        break;
                      case 39:
                        t.prettyPhoto.changePage("next"), e.preventDefault();
                        break;
                      case 27:
                        settings.modal || t.prettyPhoto.close(),
                          e.preventDefault();
                    }
                }),
            (t.prettyPhoto.initialize = function () {
              return (
                (settings = a),
                "pp_default" == settings.theme &&
                  (settings.horizontal_padding = 16),
                (theRel = t(this).attr(settings.hook)),
                (galleryRegExp = /\[(?:.*)\]/),
                (isSet = !!galleryRegExp.exec(theRel)),
                (pp_images = isSet
                  ? jQuery.map(x, function (e, i) {
                      if (-1 != t(e).attr(settings.hook).indexOf(theRel))
                        return t(e).attr("href");
                    })
                  : t.makeArray(t(this).attr("href"))),
                (pp_titles = isSet
                  ? jQuery.map(x, function (e, i) {
                      if (-1 != t(e).attr(settings.hook).indexOf(theRel))
                        return t(e).find("img").attr("alt")
                          ? t(e).find("img").attr("alt")
                          : "";
                    })
                  : t.makeArray(t(this).find("img").attr("alt"))),
                (pp_descriptions = isSet
                  ? jQuery.map(x, function (e, i) {
                      if (-1 != t(e).attr(settings.hook).indexOf(theRel))
                        return t(e).attr("title") ? t(e).attr("title") : "";
                    })
                  : t.makeArray(t(this).attr("title"))),
                pp_images.length > settings.overlay_gallery_max &&
                  (settings.overlay_gallery = !1),
                (set_position = jQuery.inArray(
                  t(this).attr("href"),
                  pp_images
                )),
                (rel_index = isSet
                  ? set_position
                  : t("a[" + settings.hook + "^='" + theRel + "']").index(
                      t(this)
                    )),
                f(),
                settings.allow_resize &&
                  t(window).bind("scroll.prettyphoto", function () {
                    c();
                  }),
                t.prettyPhoto.open(),
                !1
              );
            }),
            (t.prettyPhoto.open = function (e) {
              return (
                "undefined" == typeof settings &&
                  ((settings = a),
                  (pp_images = t.makeArray(arguments[0])),
                  (pp_titles = arguments[1]
                    ? t.makeArray(arguments[1])
                    : t.makeArray("")),
                  (pp_descriptions = arguments[2]
                    ? t.makeArray(arguments[2])
                    : t.makeArray("")),
                  (isSet = pp_images.length > 1),
                  (set_position = arguments[3] ? arguments[3] : 0),
                  f(e.target)),
                settings.hideflash &&
                  t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css(
                    "visibility",
                    "hidden"
                  ),
                l(t(pp_images).length),
                t(".pp_loaderIcon").show(),
                settings.deeplinking && i(),
                settings.social_tools &&
                  ((facebook_like_link = settings.social_tools.replace(
                    "{location_href}",
                    encodeURIComponent(location.href)
                  )),
                  $pp_pic_holder.find(".pp_social").html(facebook_like_link)),
                $ppt.is(":hidden") && $ppt.css("opacity", 0).show(),
                $pp_overlay
                  .show()
                  .fadeTo(settings.animation_speed, settings.opacity),
                $pp_pic_holder
                  .find(".currentTextHolder")
                  .text(
                    set_position +
                      1 +
                      settings.counter_separator_label +
                      t(pp_images).length
                  ),
                "undefined" != typeof pp_descriptions[set_position] &&
                "" != pp_descriptions[set_position]
                  ? $pp_pic_holder
                      .find(".pp_description")
                      .show()
                      .html(unescape(pp_descriptions[set_position]))
                  : $pp_pic_holder.find(".pp_description").hide(),
                (movie_width = parseFloat(o("width", pp_images[set_position]))
                  ? o("width", pp_images[set_position])
                  : settings.default_width.toString()),
                (movie_height = parseFloat(o("height", pp_images[set_position]))
                  ? o("height", pp_images[set_position])
                  : settings.default_height.toString()),
                ($ = !1),
                -1 != movie_height.indexOf("%") &&
                  ((movie_height = parseFloat(
                    (t(window).height() * parseFloat(movie_height)) / 100 - 150
                  )),
                  ($ = !0)),
                -1 != movie_width.indexOf("%") &&
                  ((movie_width = parseFloat(
                    (t(window).width() * parseFloat(movie_width)) / 100 - 150
                  )),
                  ($ = !0)),
                $pp_pic_holder.fadeIn(function () {
                  switch (
                    (settings.show_title &&
                    "" != pp_titles[set_position] &&
                    "undefined" != typeof pp_titles[set_position]
                      ? $ppt.html(unescape(pp_titles[set_position]))
                      : $ppt.html("&nbsp;"),
                    (imgPreloader = ""),
                    (skipInjection = !1),
                    h(pp_images[set_position]))
                  ) {
                    case "image":
                      (imgPreloader = new Image()),
                        (nextImage = new Image()),
                        isSet &&
                          set_position < t(pp_images).length - 1 &&
                          (nextImage.src = pp_images[set_position + 1]),
                        (prevImage = new Image()),
                        isSet &&
                          pp_images[set_position - 1] &&
                          (prevImage.src = pp_images[set_position - 1]),
                        ($pp_pic_holder.find("#pp_full_res")[0].innerHTML =
                          settings.image_markup.replace(
                            /{path}/g,
                            pp_images[set_position]
                          )),
                        (imgPreloader.onload = function () {
                          (u = r(imgPreloader.width, imgPreloader.height)), s();
                        }),
                        (imgPreloader.onerror = function () {
                          alert(
                            "Image cannot be loaded. Make sure the path is correct and image exist."
                          ),
                            t.prettyPhoto.close();
                        }),
                        (imgPreloader.src = pp_images[set_position]);
                      break;
                    case "youtube":
                      (u = r(movie_width, movie_height)),
                        (movie_id = o("v", pp_images[set_position])),
                        "" == movie_id &&
                          ((movie_id =
                            pp_images[set_position].split("youtu.be/")),
                          (movie_id = movie_id[1]),
                          movie_id.indexOf("?") > 0 &&
                            (movie_id = movie_id.substr(
                              0,
                              movie_id.indexOf("?")
                            )),
                          movie_id.indexOf("&") > 0 &&
                            (movie_id = movie_id.substr(
                              0,
                              movie_id.indexOf("&")
                            ))),
                        (movie = "//www.youtube.com/embed/" + movie_id),
                        o("rel", pp_images[set_position])
                          ? (movie +=
                              "?rel=" + o("rel", pp_images[set_position]))
                          : (movie += "?rel=1"),
                        settings.autoplay && (movie += "&autoplay=1"),
                        (toInject = settings.iframe_markup
                          .replace(/{width}/g, u.width)
                          .replace(/{height}/g, u.height)
                          .replace(/{wmode}/g, settings.wmode)
                          .replace(/{path}/g, movie));
                      break;
                    case "vimeo":
                      (u = r(movie_width, movie_height)),
                        (movie_id = pp_images[set_position]);
                      var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                        i = movie_id.match(e);
                      (movie =
                        "//player.vimeo.com/video/" +
                        i[3] +
                        "?title=0&amp;byline=0&amp;portrait=0"),
                        settings.autoplay && (movie += "&autoplay=1;"),
                        (vimeo_width =
                          u.width + "/embed/?moog_width=" + u.width),
                        (toInject = settings.iframe_markup
                          .replace(/{width}/g, vimeo_width)
                          .replace(/{height}/g, u.height)
                          .replace(/{path}/g, movie));
                      break;
                    case "quicktime":
                      ((u = r(movie_width, movie_height)).height += 15),
                        (u.contentHeight += 15),
                        (u.containerHeight += 15),
                        (toInject = settings.quicktime_markup
                          .replace(/{width}/g, u.width)
                          .replace(/{height}/g, u.height)
                          .replace(/{wmode}/g, settings.wmode)
                          .replace(/{path}/g, pp_images[set_position])
                          .replace(/{autoplay}/g, settings.autoplay));
                      break;
                    case "flash":
                      (u = r(movie_width, movie_height)),
                        (flash_vars = pp_images[set_position]),
                        (flash_vars = flash_vars.substring(
                          pp_images[set_position].indexOf("flashvars") + 10,
                          pp_images[set_position].length
                        )),
                        (filename = pp_images[set_position]),
                        (filename = filename.substring(
                          0,
                          filename.indexOf("?")
                        )),
                        (toInject = settings.flash_markup
                          .replace(/{width}/g, u.width)
                          .replace(/{height}/g, u.height)
                          .replace(/{wmode}/g, settings.wmode)
                          .replace(/{path}/g, filename + "?" + flash_vars));
                      break;
                    case "iframe":
                      (u = r(movie_width, movie_height)),
                        (frame_url = pp_images[set_position]),
                        (frame_url = frame_url.substr(
                          0,
                          frame_url.indexOf("iframe") - 1
                        )),
                        (toInject = settings.iframe_markup
                          .replace(/{width}/g, u.width)
                          .replace(/{height}/g, u.height)
                          .replace(/{path}/g, frame_url));
                      break;
                    case "ajax":
                      (doresize = !1),
                        (u = r(movie_width, movie_height)),
                        (doresize = !0),
                        (skipInjection = !0),
                        t.get(pp_images[set_position], function (t) {
                          (toInject = settings.inline_markup.replace(
                            /{content}/g,
                            t
                          )),
                            ($pp_pic_holder.find("#pp_full_res")[0].innerHTML =
                              toInject),
                            s();
                        });
                      break;
                    case "custom":
                      (u = r(movie_width, movie_height)),
                        (toInject = settings.custom_markup);
                      break;
                    case "inline":
                      (myClone = t(pp_images[set_position])
                        .clone()
                        .append('<br clear="all" />')
                        .css({ width: settings.default_width })
                        .wrapInner(
                          '<div id="pp_full_res"><div class="pp_inline"></div></div>'
                        )
                        .appendTo(t("body"))
                        .show()),
                        (doresize = !1),
                        (u = r(t(myClone).width(), t(myClone).height())),
                        (doresize = !0),
                        t(myClone).remove(),
                        (toInject = settings.inline_markup.replace(
                          /{content}/g,
                          t(pp_images[set_position]).html()
                        ));
                  }
                  imgPreloader ||
                    skipInjection ||
                    (($pp_pic_holder.find("#pp_full_res")[0].innerHTML =
                      toInject),
                    s());
                }),
                !1
              );
            }),
            (t.prettyPhoto.changePage = function (e) {
              (currentGalleryPage = 0),
                "previous" == e
                  ? --set_position < 0 &&
                    (set_position = t(pp_images).length - 1)
                  : "next" == e
                  ? ++set_position > t(pp_images).length - 1 &&
                    (set_position = 0)
                  : (set_position = e),
                (rel_index = set_position),
                doresize || (doresize = !0),
                settings.allow_expand &&
                  t(".pp_contract")
                    .removeClass("pp_contract")
                    .addClass("pp_expand"),
                n(function () {
                  t.prettyPhoto.open();
                });
            }),
            (t.prettyPhoto.changeGalleryPage = function (t) {
              "next" == t
                ? ++currentGalleryPage > totalPage && (currentGalleryPage = 0)
                : "previous" == t
                ? --currentGalleryPage < 0 && (currentGalleryPage = totalPage)
                : (currentGalleryPage = t),
                (slide_speed =
                  "next" == t || "previous" == t
                    ? settings.animation_speed
                    : 0),
                (slide_to = currentGalleryPage * (itemsPerPage * itemWidth)),
                $pp_gallery
                  .find("ul")
                  .animate({ left: -slide_to }, slide_speed);
            }),
            (t.prettyPhoto.startSlideshow = function () {
              void 0 === P
                ? ($pp_pic_holder
                    .find(".pp_play")
                    .unbind("click")
                    .removeClass("pp_play")
                    .addClass("pp_pause")
                    .click(function () {
                      return t.prettyPhoto.stopSlideshow(), !1;
                    }),
                  (P = setInterval(
                    t.prettyPhoto.startSlideshow,
                    settings.slideshow
                  )))
                : t.prettyPhoto.changePage("next");
            }),
            (t.prettyPhoto.stopSlideshow = function () {
              $pp_pic_holder
                .find(".pp_pause")
                .unbind("click")
                .removeClass("pp_pause")
                .addClass("pp_play")
                .click(function () {
                  return t.prettyPhoto.startSlideshow(), !1;
                }),
                clearInterval(P),
                (P = undefined);
            }),
            (t.prettyPhoto.close = function () {
              $pp_overlay.is(":animated") ||
                (t.prettyPhoto.stopSlideshow(),
                $pp_pic_holder
                  .stop()
                  .find("object,embed")
                  .css("visibility", "hidden"),
                t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(
                  settings.animation_speed,
                  function () {
                    t(this).remove();
                  }
                ),
                $pp_overlay.fadeOut(settings.animation_speed, function () {
                  settings.hideflash &&
                    t(
                      "object,embed,iframe[src*=youtube],iframe[src*=vimeo]"
                    ).css("visibility", "visible"),
                    t(this).remove(),
                    t(window).unbind("scroll.prettyphoto"),
                    p(),
                    settings.callback(),
                    (doresize = !0),
                    (v = !1),
                    delete settings;
                }));
            }),
            !pp_alreadyInitialized &&
              e() &&
              ((pp_alreadyInitialized = !0),
              (hashIndex = e()),
              (hashRel = hashIndex),
              (hashIndex = hashIndex.substring(
                hashIndex.indexOf("/") + 1,
                hashIndex.length - 1
              )),
              (hashRel = hashRel.substring(0, hashRel.indexOf("/"))),
              setTimeout(function () {
                t(
                  "a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")"
                ).trigger("click");
              }, 50)),
            this.unbind("click.prettyphoto").bind(
              "click.prettyphoto",
              t.prettyPhoto.initialize
            )
          );
        });
    })(jQuery);
    var pp_alreadyInitialized = !1;
    /*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});
(function ($) {
  "use strict";
  $.fn.countTo = function (options) {
    options = $.extend({}, $.fn.countTo.defaults, options || {});
    var loops = Math.ceil(options.speed / options.refreshInterval),
      increment = (options.to - options.from) / loops;
    return $(this).each(function () {
      var _this = this,
        loopCount = 0,
        value = options.from,
        interval = setInterval(updateTimer, options.refreshInterval);
      function updateTimer() {
        value += increment;
        loopCount++;
        $(_this).html(value.toFixed(options.decimals));
        if (typeof options.onUpdate === "function") {
          options.onUpdate.call(_this, value);
        }
        if (loopCount >= loops) {
          clearInterval(interval);
          value = options.to;
          if (typeof options.onComplete === "function") {
            options.onComplete.call(_this, value);
          }
        }
      }
    });
  };
  $.fn.countTo.defaults = {
    from: 0,
    to: 100,
    speed: 1000,
    refreshInterval: 100,
    decimals: 0,
    onUpdate: null,
    onComplete: null,
  };
})(jQuery);
"function" !== typeof Object.create &&
  (Object.create = function (f) {
    function g() {}
    g.prototype = f;
    return new g();
  });
(function (f, g, k) {
  var l = {
    init: function (a, b) {
      this.$elem = f(b);
      this.options = f.extend(
        {},
        f.fn.owlCarousel.options,
        this.$elem.data(),
        a
      );
      this.userOptions = a;
      this.loadContent();
    },
    loadContent: function () {
      function a(a) {
        var d,
          e = "";
        if ("function" === typeof b.options.jsonSuccess)
          b.options.jsonSuccess.apply(this, [a]);
        else {
          for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          b.$elem.html(e);
        }
        b.logIn();
      }
      var b = this,
        e;
      "function" === typeof b.options.beforeInit &&
        b.options.beforeInit.apply(this, [b.$elem]);
      "string" === typeof b.options.jsonPath
        ? ((e = b.options.jsonPath), f.getJSON(e, a))
        : b.logIn();
    },
    logIn: function () {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
      this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
      this.$elem.css({ opacity: 0 });
      this.orignalItems = this.options.items;
      this.checkBrowser();
      this.wrapperWidth = 0;
      this.checkVisible = null;
      this.setVars();
    },
    setVars: function () {
      if (0 === this.$elem.children().length) return !1;
      this.baseClass();
      this.eventTypes();
      this.$userItems = this.$elem.children();
      this.itemsAmount = this.$userItems.length;
      this.wrapItems();
      this.$owlItems = this.$elem.find(".owl-item");
      this.$owlWrapper = this.$elem.find(".owl-wrapper");
      this.playDirection = "next";
      this.prevItem = 0;
      this.prevArr = [0];
      this.currentItem = 0;
      this.customEvents();
      this.onStartup();
    },
    onStartup: function () {
      this.updateItems();
      this.calculateAll();
      this.buildControls();
      this.updateControls();
      this.response();
      this.moveEvents();
      this.stopOnHover();
      this.owlStatus();
      !1 !== this.options.transitionStyle &&
        this.transitionTypes(this.options.transitionStyle);
      !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
      this.play();
      this.$elem.find(".owl-wrapper").css("display", "block");
      this.$elem.is(":visible")
        ? this.$elem.css("opacity", 1)
        : this.watchVisibility();
      this.onstartup = !1;
      this.eachMoveUpdate();
      "function" === typeof this.options.afterInit &&
        this.options.afterInit.apply(this, [this.$elem]);
    },
    eachMoveUpdate: function () {
      !0 === this.options.lazyLoad && this.lazyLoad();
      !0 === this.options.autoHeight && this.autoHeight();
      this.onVisibleItems();
      "function" === typeof this.options.afterAction &&
        this.options.afterAction.apply(this, [this.$elem]);
    },
    updateVars: function () {
      "function" === typeof this.options.beforeUpdate &&
        this.options.beforeUpdate.apply(this, [this.$elem]);
      this.watchVisibility();
      this.updateItems();
      this.calculateAll();
      this.updatePosition();
      this.updateControls();
      this.eachMoveUpdate();
      "function" === typeof this.options.afterUpdate &&
        this.options.afterUpdate.apply(this, [this.$elem]);
    },
    reload: function () {
      var a = this;
      g.setTimeout(function () {
        a.updateVars();
      }, 0);
    },
    watchVisibility: function () {
      var a = this;
      if (!1 === a.$elem.is(":visible"))
        a.$elem.css({ opacity: 0 }),
          g.clearInterval(a.autoPlayInterval),
          g.clearInterval(a.checkVisible);
      else return !1;
      a.checkVisible = g.setInterval(function () {
        a.$elem.is(":visible") &&
          (a.reload(),
          a.$elem.animate({ opacity: 1 }, 200),
          g.clearInterval(a.checkVisible));
      }, 500);
    },
    wrapItems: function () {
      this.$userItems
        .wrapAll('<div class="owl-wrapper">')
        .wrap('<div class="owl-item"></div>');
      this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
      this.$elem.css("display", "block");
    },
    baseClass: function () {
      var a = this.$elem.hasClass(this.options.baseClass),
        b = this.$elem.hasClass(this.options.theme);
      a || this.$elem.addClass(this.options.baseClass);
      b || this.$elem.addClass(this.options.theme);
    },
    updateItems: function () {
      var a, b;
      if (!1 === this.options.responsive) return !1;
      if (!0 === this.options.singleItem)
        return (
          (this.options.items = this.orignalItems = 1),
          (this.options.itemsCustom = !1),
          (this.options.itemsDesktop = !1),
          (this.options.itemsDesktopSmall = !1),
          (this.options.itemsTablet = !1),
          (this.options.itemsTabletSmall = !1),
          (this.options.itemsMobile = !1)
        );
      a = f(this.options.responsiveBaseWidth).width();
      a > (this.options.itemsDesktop[0] || this.orignalItems) &&
        (this.options.items = this.orignalItems);
      if (!1 !== this.options.itemsCustom)
        for (
          this.options.itemsCustom.sort(function (a, b) {
            return a[0] - b[0];
          }),
            b = 0;
          b < this.options.itemsCustom.length;
          b += 1
        )
          this.options.itemsCustom[b][0] <= a &&
            (this.options.items = this.options.itemsCustom[b][1]);
      else
        a <= this.options.itemsDesktop[0] &&
          !1 !== this.options.itemsDesktop &&
          (this.options.items = this.options.itemsDesktop[1]),
          a <= this.options.itemsDesktopSmall[0] &&
            !1 !== this.options.itemsDesktopSmall &&
            (this.options.items = this.options.itemsDesktopSmall[1]),
          a <= this.options.itemsTablet[0] &&
            !1 !== this.options.itemsTablet &&
            (this.options.items = this.options.itemsTablet[1]),
          a <= this.options.itemsTabletSmall[0] &&
            !1 !== this.options.itemsTabletSmall &&
            (this.options.items = this.options.itemsTabletSmall[1]),
          a <= this.options.itemsMobile[0] &&
            !1 !== this.options.itemsMobile &&
            (this.options.items = this.options.itemsMobile[1]);
      this.options.items > this.itemsAmount &&
        !0 === this.options.itemsScaleUp &&
        (this.options.items = this.itemsAmount);
    },
    response: function () {
      var a = this,
        b,
        e;
      if (!0 !== a.options.responsive) return !1;
      e = f(g).width();
      a.resizer = function () {
        f(g).width() !== e &&
          (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval),
          g.clearTimeout(b),
          (b = g.setTimeout(function () {
            e = f(g).width();
            a.updateVars();
          }, a.options.responsiveRefreshRate)));
      };
      f(g).resize(a.resizer);
    },
    updatePosition: function () {
      this.jumpTo(this.currentItem);
      !1 !== this.options.autoPlay && this.checkAp();
    },
    appendItemsSizes: function () {
      var a = this,
        b = 0,
        e = a.itemsAmount - a.options.items;
      a.$owlItems.each(function (c) {
        var d = f(this);
        d.css({ width: a.itemWidth }).data("owl-item", Number(c));
        if (0 === c % a.options.items || c === e) c > e || (b += 1);
        d.data("owl-roundPages", b);
      });
    },
    appendWrapperSizes: function () {
      this.$owlWrapper.css({
        width: this.$owlItems.length * this.itemWidth * 2,
        left: 0,
      });
      this.appendItemsSizes();
    },
    calculateAll: function () {
      this.calculateWidth();
      this.appendWrapperSizes();
      this.loops();
      this.max();
    },
    calculateWidth: function () {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items);
    },
    max: function () {
      var a =
        -1 *
        (this.itemsAmount * this.itemWidth -
          this.options.items * this.itemWidth);
      this.options.items > this.itemsAmount
        ? (this.maximumPixels = a = this.maximumItem = 0)
        : ((this.maximumItem = this.itemsAmount - this.options.items),
          (this.maximumPixels = a));
      return a;
    },
    min: function () {
      return 0;
    },
    loops: function () {
      var a = 0,
        b = 0,
        e,
        c;
      this.positionsInArray = [0];
      this.pagesInArray = [];
      for (e = 0; e < this.itemsAmount; e += 1)
        (b += this.itemWidth),
          this.positionsInArray.push(-b),
          !0 === this.options.scrollPerPage &&
            ((c = f(this.$owlItems[e])),
            (c = c.data("owl-roundPages")),
            c !== a &&
              ((this.pagesInArray[a] = this.positionsInArray[e]), (a = c)));
    },
    buildControls: function () {
      if (!0 === this.options.navigation || !0 === this.options.pagination)
        this.owlControls = f('<div class="owl-controls"/>')
          .toggleClass("clickable", !this.browser.isTouch)
          .appendTo(this.$elem);
      !0 === this.options.pagination && this.buildPagination();
      !0 === this.options.navigation && this.buildButtons();
    },
    buildButtons: function () {
      var a = this,
        b = f('<div class="owl-buttons"/>');
      a.owlControls.append(b);
      a.buttonPrev = f("<div/>", {
        class: "owl-prev",
        html: a.options.navigationText[0] || "",
      });
      a.buttonNext = f("<div/>", {
        class: "owl-next",
        html: a.options.navigationText[1] || "",
      });
      b.append(a.buttonPrev).append(a.buttonNext);
      b.on(
        "touchstart.owlControls mousedown.owlControls",
        'div[class^="owl"]',
        function (a) {
          a.preventDefault();
        }
      );
      b.on(
        "touchend.owlControls mouseup.owlControls",
        'div[class^="owl"]',
        function (b) {
          b.preventDefault();
          f(this).hasClass("owl-next") ? a.next() : a.prev();
        }
      );
    },
    buildPagination: function () {
      var a = this;
      a.paginationWrapper = f('<div class="owl-pagination"/>');
      a.owlControls.append(a.paginationWrapper);
      a.paginationWrapper.on(
        "touchend.owlControls mouseup.owlControls",
        ".owl-page",
        function (b) {
          b.preventDefault();
          Number(f(this).data("owl-page")) !== a.currentItem &&
            a.goTo(Number(f(this).data("owl-page")), !0);
        }
      );
    },
    updatePagination: function () {
      var a, b, e, c, d, g;
      if (!1 === this.options.pagination) return !1;
      this.paginationWrapper.html("");
      a = 0;
      b = this.itemsAmount - (this.itemsAmount % this.options.items);
      for (c = 0; c < this.itemsAmount; c += 1)
        0 === c % this.options.items &&
          ((a += 1),
          b === c && (e = this.itemsAmount - this.options.items),
          (d = f("<div/>", { class: "owl-page" })),
          (g = f("<span></span>", {
            text: !0 === this.options.paginationNumbers ? a : "",
            class: !0 === this.options.paginationNumbers ? "owl-numbers" : "",
          })),
          d.append(g),
          d.data("owl-page", b === c ? e : c),
          d.data("owl-roundPages", a),
          this.paginationWrapper.append(d));
      this.checkPagination();
    },
    checkPagination: function () {
      var a = this;
      if (!1 === a.options.pagination) return !1;
      a.paginationWrapper.find(".owl-page").each(function () {
        f(this).data("owl-roundPages") ===
          f(a.$owlItems[a.currentItem]).data("owl-roundPages") &&
          (a.paginationWrapper.find(".owl-page").removeClass("active"),
          f(this).addClass("active"));
      });
    },
    checkNavigation: function () {
      if (!1 === this.options.navigation) return !1;
      !1 === this.options.rewindNav &&
        (0 === this.currentItem && 0 === this.maximumItem
          ? (this.buttonPrev.addClass("disabled"),
            this.buttonNext.addClass("disabled"))
          : 0 === this.currentItem && 0 !== this.maximumItem
          ? (this.buttonPrev.addClass("disabled"),
            this.buttonNext.removeClass("disabled"))
          : this.currentItem === this.maximumItem
          ? (this.buttonPrev.removeClass("disabled"),
            this.buttonNext.addClass("disabled"))
          : 0 !== this.currentItem &&
            this.currentItem !== this.maximumItem &&
            (this.buttonPrev.removeClass("disabled"),
            this.buttonNext.removeClass("disabled")));
    },
    updateControls: function () {
      this.updatePagination();
      this.checkNavigation();
      this.owlControls &&
        (this.options.items >= this.itemsAmount
          ? this.owlControls.hide()
          : this.owlControls.show());
    },
    destroyControls: function () {
      this.owlControls && this.owlControls.remove();
    },
    next: function (a) {
      if (this.isTransition) return !1;
      this.currentItem +=
        !0 === this.options.scrollPerPage ? this.options.items : 1;
      if (
        this.currentItem >
        this.maximumItem +
          (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)
      )
        if (!0 === this.options.rewindNav)
          (this.currentItem = 0), (a = "rewind");
        else return (this.currentItem = this.maximumItem), !1;
      this.goTo(this.currentItem, a);
    },
    prev: function (a) {
      if (this.isTransition) return !1;
      this.currentItem =
        !0 === this.options.scrollPerPage &&
        0 < this.currentItem &&
        this.currentItem < this.options.items
          ? 0
          : this.currentItem -
            (!0 === this.options.scrollPerPage ? this.options.items : 1);
      if (0 > this.currentItem)
        if (!0 === this.options.rewindNav)
          (this.currentItem = this.maximumItem), (a = "rewind");
        else return (this.currentItem = 0), !1;
      this.goTo(this.currentItem, a);
    },
    goTo: function (a, b, e) {
      var c = this;
      if (c.isTransition) return !1;
      "function" === typeof c.options.beforeMove &&
        c.options.beforeMove.apply(this, [c.$elem]);
      a >= c.maximumItem ? (a = c.maximumItem) : 0 >= a && (a = 0);
      c.currentItem = c.owl.currentItem = a;
      if (
        !1 !== c.options.transitionStyle &&
        "drag" !== e &&
        1 === c.options.items &&
        !0 === c.browser.support3d
      )
        return (
          c.swapSpeed(0),
          !0 === c.browser.support3d
            ? c.transition3d(c.positionsInArray[a])
            : c.css2slide(c.positionsInArray[a], 1),
          c.afterGo(),
          c.singleItemTransition(),
          !1
        );
      a = c.positionsInArray[a];
      !0 === c.browser.support3d
        ? ((c.isCss3Finish = !1),
          !0 === b
            ? (c.swapSpeed("paginationSpeed"),
              g.setTimeout(function () {
                c.isCss3Finish = !0;
              }, c.options.paginationSpeed))
            : "rewind" === b
            ? (c.swapSpeed(c.options.rewindSpeed),
              g.setTimeout(function () {
                c.isCss3Finish = !0;
              }, c.options.rewindSpeed))
            : (c.swapSpeed("slideSpeed"),
              g.setTimeout(function () {
                c.isCss3Finish = !0;
              }, c.options.slideSpeed)),
          c.transition3d(a))
        : !0 === b
        ? c.css2slide(a, c.options.paginationSpeed)
        : "rewind" === b
        ? c.css2slide(a, c.options.rewindSpeed)
        : c.css2slide(a, c.options.slideSpeed);
      c.afterGo();
    },
    jumpTo: function (a) {
      "function" === typeof this.options.beforeMove &&
        this.options.beforeMove.apply(this, [this.$elem]);
      a >= this.maximumItem || -1 === a
        ? (a = this.maximumItem)
        : 0 >= a && (a = 0);
      this.swapSpeed(0);
      !0 === this.browser.support3d
        ? this.transition3d(this.positionsInArray[a])
        : this.css2slide(this.positionsInArray[a], 1);
      this.currentItem = this.owl.currentItem = a;
      this.afterGo();
    },
    afterGo: function () {
      this.prevArr.push(this.currentItem);
      this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
      this.prevArr.shift(0);
      this.prevItem !== this.currentItem &&
        (this.checkPagination(),
        this.checkNavigation(),
        this.eachMoveUpdate(),
        !1 !== this.options.autoPlay && this.checkAp());
      "function" === typeof this.options.afterMove &&
        this.prevItem !== this.currentItem &&
        this.options.afterMove.apply(this, [this.$elem]);
    },
    stop: function () {
      this.apStatus = "stop";
      g.clearInterval(this.autoPlayInterval);
    },
    checkAp: function () {
      "stop" !== this.apStatus && this.play();
    },
    play: function () {
      var a = this;
      a.apStatus = "play";
      if (!1 === a.options.autoPlay) return !1;
      g.clearInterval(a.autoPlayInterval);
      a.autoPlayInterval = g.setInterval(function () {
        a.next(!0);
      }, a.options.autoPlay);
    },
    swapSpeed: function (a) {
      "slideSpeed" === a
        ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed))
        : "paginationSpeed" === a
        ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed))
        : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a));
    },
    addCssSpeed: function (a) {
      return {
        "-webkit-transition": "all " + a + "ms ease",
        "-moz-transition": "all " + a + "ms ease",
        "-o-transition": "all " + a + "ms ease",
        transition: "all " + a + "ms ease",
      };
    },
    removeTransition: function () {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: "",
      };
    },
    doTranslate: function (a) {
      return {
        "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
        transform: "translate3d(" + a + "px, 0px,0px)",
      };
    },
    transition3d: function (a) {
      this.$owlWrapper.css(this.doTranslate(a));
    },
    css2move: function (a) {
      this.$owlWrapper.css({ left: a });
    },
    css2slide: function (a, b) {
      var e = this;
      e.isCssFinish = !1;
      e.$owlWrapper.stop(!0, !0).animate(
        { left: a },
        {
          duration: b || e.options.slideSpeed,
          complete: function () {
            e.isCssFinish = !0;
          },
        }
      );
    },
    checkBrowser: function () {
      var a = k.createElement("div");
      a.style.cssText =
        "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
      this.browser = {
        support3d: null !== a && 1 === a.length,
        isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints,
      };
    },
    moveEvents: function () {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag)
        this.gestures(), this.disabledEvents();
    },
    eventTypes: function () {
      var a = ["s", "e", "x"];
      this.ev_types = {};
      !0 === this.options.mouseDrag && !0 === this.options.touchDrag
        ? (a = [
            "touchstart.owl mousedown.owl",
            "touchmove.owl mousemove.owl",
            "touchend.owl touchcancel.owl mouseup.owl",
          ])
        : !1 === this.options.mouseDrag && !0 === this.options.touchDrag
        ? (a = [
            "touchstart.owl",
            "touchmove.owl",
            "touchend.owl touchcancel.owl",
          ])
        : !0 === this.options.mouseDrag &&
          !1 === this.options.touchDrag &&
          (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
      this.ev_types.start = a[0];
      this.ev_types.move = a[1];
      this.ev_types.end = a[2];
    },
    disabledEvents: function () {
      this.$elem.on("dragstart.owl", function (a) {
        a.preventDefault();
      });
      this.$elem.on("mousedown.disableTextSelect", function (a) {
        return f(a.target).is("input, textarea, select, option");
      });
    },
    gestures: function () {
      function a(a) {
        if (void 0 !== a.touches)
          return { x: a.touches[0].pageX, y: a.touches[0].pageY };
        if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };
          if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY };
        }
      }
      function b(a) {
        "on" === a
          ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c))
          : "off" === a &&
            (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end));
      }
      function e(b) {
        b = b.originalEvent || b || g.event;
        d.newPosX = a(b).x - h.offsetX;
        d.newPosY = a(b).y - h.offsetY;
        d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging &&
          !0 !== h.dragging &&
          0 !== d.newRelativeX &&
          ((h.dragging = !0), d.options.startDragging.apply(d, [d.$elem]));
        (8 < d.newRelativeX || -8 > d.newRelativeX) &&
          !0 === d.browser.isTouch &&
          (void 0 !== b.preventDefault
            ? b.preventDefault()
            : (b.returnValue = !1),
          (h.sliding = !0));
        (10 < d.newPosY || -10 > d.newPosY) &&
          !1 === h.sliding &&
          f(k).off("touchmove.owl");
        d.newPosX = Math.max(
          Math.min(d.newPosX, d.newRelativeX / 5),
          d.maximumPixels + d.newRelativeX / 5
        );
        !0 === d.browser.support3d
          ? d.transition3d(d.newPosX)
          : d.css2move(d.newPosX);
      }
      function c(a) {
        a = a.originalEvent || a || g.event;
        var c;
        a.target = a.target || a.srcElement;
        h.dragging = !1;
        !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
        d.dragDirection =
          0 > d.newRelativeX
            ? (d.owl.dragDirection = "left")
            : (d.owl.dragDirection = "right");
        0 !== d.newRelativeX &&
          ((c = d.getNewPosition()),
          d.goTo(c, !1, "drag"),
          h.targetElement === a.target &&
            !0 !== d.browser.isTouch &&
            (f(a.target).on("click.disable", function (a) {
              a.stopImmediatePropagation();
              a.stopPropagation();
              a.preventDefault();
              f(a.target).off("click.disable");
            }),
            (a = f._data(a.target, "events").click),
            (c = a.pop()),
            a.splice(0, 0, c)));
        b("off");
      }
      var d = this,
        h = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null,
        };
      d.isCssFinish = !0;
      d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
        c = c.originalEvent || c || g.event;
        var e;
        if (3 === c.which) return !1;
        if (!(d.itemsAmount <= d.options.items)) {
          if (
            (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish) ||
            (!1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish)
          )
            return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
          !0 === d.browser.isTouch ||
            d.$owlWrapper.hasClass("grabbing") ||
            d.$owlWrapper.addClass("grabbing");
          d.newPosX = 0;
          d.newRelativeX = 0;
          f(this).css(d.removeTransition());
          e = f(this).position();
          h.relativePos = e.left;
          h.offsetX = a(c).x - e.left;
          h.offsetY = a(c).y - e.top;
          b("on");
          h.sliding = !1;
          h.targetElement = c.target || c.srcElement;
        }
      });
    },
    getNewPosition: function () {
      var a = this.closestItem();
      a > this.maximumItem
        ? (a = this.currentItem = this.maximumItem)
        : 0 <= this.newPosX && (this.currentItem = a = 0);
      return a;
    },
    closestItem: function () {
      var a = this,
        b =
          !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
        e = a.newPosX,
        c = null;
      f.each(b, function (d, g) {
        e - a.itemWidth / 20 > b[d + 1] &&
        e - a.itemWidth / 20 < g &&
        "left" === a.moveDirection()
          ? ((c = g),
            (a.currentItem =
              !0 === a.options.scrollPerPage
                ? f.inArray(c, a.positionsInArray)
                : d))
          : e + a.itemWidth / 20 < g &&
            e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) &&
            "right" === a.moveDirection() &&
            (!0 === a.options.scrollPerPage
              ? ((c = b[d + 1] || b[b.length - 1]),
                (a.currentItem = f.inArray(c, a.positionsInArray)))
              : ((c = b[d + 1]), (a.currentItem = d + 1)));
      });
      return a.currentItem;
    },
    moveDirection: function () {
      var a;
      0 > this.newRelativeX
        ? ((a = "right"), (this.playDirection = "next"))
        : ((a = "left"), (this.playDirection = "prev"));
      return a;
    },
    customEvents: function () {
      var a = this;
      a.$elem.on("owl.next", function () {
        a.next();
      });
      a.$elem.on("owl.prev", function () {
        a.prev();
      });
      a.$elem.on("owl.play", function (b, e) {
        a.options.autoPlay = e;
        a.play();
        a.hoverStatus = "play";
      });
      a.$elem.on("owl.stop", function () {
        a.stop();
        a.hoverStatus = "stop";
      });
      a.$elem.on("owl.goTo", function (b, e) {
        a.goTo(e);
      });
      a.$elem.on("owl.jumpTo", function (b, e) {
        a.jumpTo(e);
      });
    },
    stopOnHover: function () {
      var a = this;
      !0 === a.options.stopOnHover &&
        !0 !== a.browser.isTouch &&
        !1 !== a.options.autoPlay &&
        (a.$elem.on("mouseover", function () {
          a.stop();
        }),
        a.$elem.on("mouseout", function () {
          "stop" !== a.hoverStatus && a.play();
        }));
    },
    lazyLoad: function () {
      var a, b, e, c, d;
      if (!1 === this.options.lazyLoad) return !1;
      for (a = 0; a < this.itemsAmount; a += 1)
        (b = f(this.$owlItems[a])),
          "loaded" !== b.data("owl-loaded") &&
            ((e = b.data("owl-item")),
            (c = b.find(".lazyOwl")),
            "string" !== typeof c.data("src")
              ? b.data("owl-loaded", "loaded")
              : (void 0 === b.data("owl-loaded") &&
                  (c.hide(),
                  b.addClass("loading").data("owl-loaded", "checked")),
                (d =
                  !0 === this.options.lazyFollow
                    ? e >= this.currentItem
                    : !0) &&
                  e < this.currentItem + this.options.items &&
                  c.length &&
                  this.lazyPreload(b, c)));
    },
    lazyPreload: function (a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");
        b.removeAttr("data-src");
        "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
        "function" === typeof d.options.afterLazyLoad &&
          d.options.afterLazyLoad.apply(this, [d.$elem]);
      }
      function c() {
        f += 1;
        d.completeImg(b.get(0)) || !0 === k
          ? e()
          : 100 >= f
          ? g.setTimeout(c, 100)
          : e();
      }
      var d = this,
        f = 0,
        k;
      "DIV" === b.prop("tagName")
        ? (b.css("background-image", "url(" + b.data("src") + ")"), (k = !0))
        : (b[0].src = b.data("src"));
      c();
    },
    autoHeight: function () {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();
        e.wrapperOuter.css("height", a + "px");
        e.wrapperOuter.hasClass("autoHeight") ||
          g.setTimeout(function () {
            e.wrapperOuter.addClass("autoHeight");
          }, 0);
      }
      function b() {
        d += 1;
        e.completeImg(c.get(0))
          ? a()
          : 100 >= d
          ? g.setTimeout(b, 100)
          : e.wrapperOuter.css("height", "");
      }
      var e = this,
        c = f(e.$owlItems[e.currentItem]).find("img"),
        d;
      void 0 !== c.get(0) ? ((d = 0), b()) : a();
    },
    completeImg: function (a) {
      return !a.complete ||
        ("undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth)
        ? !1
        : !0;
    },
    onVisibleItems: function () {
      var a;
      !0 === this.options.addClassActive &&
        this.$owlItems.removeClass("active");
      this.visibleItems = [];
      for (
        a = this.currentItem;
        a < this.currentItem + this.options.items;
        a += 1
      )
        this.visibleItems.push(a),
          !0 === this.options.addClassActive &&
            f(this.$owlItems[a]).addClass("active");
      this.owl.visibleItems = this.visibleItems;
    },
    transitionTypes: function (a) {
      this.outClass = "owl-" + a + "-out";
      this.inClass = "owl-" + a + "-in";
    },
    singleItemTransition: function () {
      var a = this,
        b = a.outClass,
        e = a.inClass,
        c = a.$owlItems.eq(a.currentItem),
        d = a.$owlItems.eq(a.prevItem),
        f =
          Math.abs(a.positionsInArray[a.currentItem]) +
          a.positionsInArray[a.prevItem],
        g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
      a.isTransition = !0;
      a.$owlWrapper
        .addClass("owl-origin")
        .css({
          "-webkit-transform-origin": g + "px",
          "-moz-perspective-origin": g + "px",
          "perspective-origin": g + "px",
        });
      d.css({ position: "relative", left: f + "px" })
        .addClass(b)
        .on(
          "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
          function () {
            a.endPrev = !0;
            d.off(
              "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"
            );
            a.clearTransStyle(d, b);
          }
        );
      c.addClass(e).on(
        "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
        function () {
          a.endCurrent = !0;
          c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
          a.clearTransStyle(c, e);
        }
      );
    },
    clearTransStyle: function (a, b) {
      a.css({ position: "", left: "" }).removeClass(b);
      this.endPrev &&
        this.endCurrent &&
        (this.$owlWrapper.removeClass("owl-origin"),
        (this.isTransition = this.endCurrent = this.endPrev = !1));
    },
    owlStatus: function () {
      this.owl = {
        userOptions: this.userOptions,
        baseElement: this.$elem,
        userItems: this.$userItems,
        owlItems: this.$owlItems,
        currentItem: this.currentItem,
        prevItem: this.prevItem,
        visibleItems: this.visibleItems,
        isTouch: this.browser.isTouch,
        browser: this.browser,
        dragDirection: this.dragDirection,
      };
    },
    clearEvents: function () {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");
      f(g).off("resize", this.resizer);
    },
    unWrap: function () {
      0 !== this.$elem.children().length &&
        (this.$owlWrapper.unwrap(),
        this.$userItems.unwrap().unwrap(),
        this.owlControls && this.owlControls.remove());
      this.clearEvents();
      this.$elem
        .attr("style", this.$elem.data("owl-originalStyles") || "")
        .attr("class", this.$elem.data("owl-originalClasses"));
    },
    destroy: function () {
      this.stop();
      g.clearInterval(this.checkVisible);
      this.unWrap();
      this.$elem.removeData();
    },
    reinit: function (a) {
      a = f.extend({}, this.userOptions, a);
      this.unWrap();
      this.init(a, this.$elem);
    },
    addItem: function (a, b) {
      var e;
      if (!a) return !1;
      if (0 === this.$elem.children().length)
        return this.$elem.append(a), this.setVars(), !1;
      this.unWrap();
      e = void 0 === b || -1 === b ? -1 : b;
      e >= this.$userItems.length || -1 === e
        ? this.$userItems.eq(-1).after(a)
        : this.$userItems.eq(e).before(a);
      this.setVars();
    },
    removeItem: function (a) {
      if (0 === this.$elem.children().length) return !1;
      a = void 0 === a || -1 === a ? -1 : a;
      this.unWrap();
      this.$userItems.eq(a).remove();
      this.setVars();
    },
  };
  f.fn.owlCarousel = function (a) {
    return this.each(function () {
      if (!0 === f(this).data("owl-init")) return !1;
      f(this).data("owl-init", !0);
      var b = Object.create(l);
      b.init(a, this);
      f.data(this, "owlCarousel", b);
    });
  };
  f.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: !1,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: !1,
    itemsMobile: [479, 1],
    singleItem: !1,
    itemsScaleUp: !1,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1e3,
    autoPlay: !1,
    stopOnHover: !1,
    navigation: !1,
    navigationText: ["prev", "next"],
    rewindNav: !0,
    scrollPerPage: !1,
    pagination: !0,
    paginationNumbers: !1,
    responsive: !0,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: g,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: !1,
    lazyFollow: !0,
    lazyEffect: "fade",
    autoHeight: !1,
    jsonPath: !1,
    jsonSuccess: !1,
    dragBeforeAnimFinish: !0,
    mouseDrag: !0,
    touchDrag: !0,
    addClassActive: !1,
    transitionStyle: !1,
    beforeUpdate: !1,
    afterUpdate: !1,
    beforeInit: !1,
    afterInit: !1,
    beforeMove: !1,
    afterMove: !1,
    afterAction: !1,
    startDragging: !1,
    afterLazyLoad: !1,
  };
})(jQuery, window, document);

(function ($) {
  $.fn.appear = function (fn, options) {
    var settings = $.extend(
      { data: undefined, one: true, accX: 0, accY: 0 },
      options
    );
    return this.each(function () {
      var t = $(this);
      t.appeared = false;
      if (!fn) {
        t.trigger("appear", settings.data);
        return;
      }
      var w = $(window);
      var check = function () {
        if (!t.is(":visible")) {
          t.appeared = false;
          return;
        }
        var a = w.scrollLeft();
        var b = w.scrollTop();
        var o = t.offset();
        var x = o.left;
        var y = o.top;
        var ax = settings.accX;
        var ay = settings.accY;
        var th = t.height();
        var wh = w.height();
        var tw = t.width();
        var ww = w.width();
        if (
          y + th + ay >= b &&
          y <= b + wh + ay &&
          x + tw + ax >= a &&
          x <= a + ww + ax
        ) {
          if (!t.appeared) t.trigger("appear", settings.data);
        } else {
          t.appeared = false;
        }
      };
      var modifiedFn = function () {
        t.appeared = true;
        if (settings.one) {
          w.unbind("scroll", check);
          var i = $.inArray(check, $.fn.appear.checks);
          if (i >= 0) $.fn.appear.checks.splice(i, 1);
        }
        fn.apply(this, arguments);
      };
      if (settings.one) t.one("appear", settings.data, modifiedFn);
      else t.bind("appear", settings.data, modifiedFn);
      w.scroll(check);
      $.fn.appear.checks.push(check);
      check();
    });
  };
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function () {
      var length = $.fn.appear.checks.length;
      if (length > 0) while (length--) $.fn.appear.checks[length]();
    },
    run: function () {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    },
  });
  $.each(
    [
      "append",
      "prepend",
      "after",
      "before",
      "attr",
      "removeAttr",
      "addClass",
      "removeClass",
      "toggleClass",
      "remove",
      "css",
      "show",
      "hide",
    ],
    function (i, n) {
      var old = $.fn[n];
      if (old) {
        $.fn[n] = function () {
          var r = old.apply(this, arguments);
          $.fn.appear.run();
          return r;
        };
      }
    }
  );
})(jQuery);