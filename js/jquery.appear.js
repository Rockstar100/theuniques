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

!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./core", "./widget"], t)
    : t(jQuery);
})(function (l) {
  return l.widget("ui.tabs", {
    version: "1.11.4",
    delay: 300,
    options: {
      active: null,
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null,
    },
    _isLocal:
      ((a = /#.*$/),
      function (t) {
        var e = (t = t.cloneNode(!1)).href.replace(a, ""),
          i = location.href.replace(a, "");
        try {
          e = decodeURIComponent(e);
        } catch (t) {}
        try {
          i = decodeURIComponent(i);
        } catch (t) {}
        return 1 < t.hash.length && e === i;
      }),
    _create: function () {
      var e = this,
        t = this.options;
      (this.running = !1),
        this.element
          .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
          .toggleClass("ui-tabs-collapsible", t.collapsible),
        this._processTabs(),
        (t.active = this._initialActive()),
        l.isArray(t.disabled) &&
          (t.disabled = l
            .unique(
              t.disabled.concat(
                l.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                  return e.tabs.index(t);
                })
              )
            )
            .sort()),
        !1 !== this.options.active && this.anchors.length
          ? (this.active = this._findActive(t.active))
          : (this.active = l()),
        this._refresh(),
        this.active.length && this.load(t.active);
    },
    _initialActive: function () {
      var i = this.options.active,
        t = this.options.collapsible,
        a = location.hash.substring(1);
      return (
        null === i &&
          (a &&
            this.tabs.each(function (t, e) {
              if (l(e).attr("aria-controls") === a) return (i = t), !1;
            }),
          (null !==
            (i =
              null === i
                ? this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                : i) &&
            -1 !== i) ||
            (i = !!this.tabs.length && 0)),
        !1 !== i &&
          -1 === (i = this.tabs.index(this.tabs.eq(i))) &&
          (i = !t && 0),
        (i = !t && !1 === i && this.anchors.length ? 0 : i)
      );
    },
    _getCreateEventData: function () {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : l(),
      };
    },
    _tabKeydown: function (t) {
      var e = l(this.document[0].activeElement).closest("li"),
        i = this.tabs.index(e),
        a = !0;
      if (!this._handlePageNav(t)) {
        switch (t.keyCode) {
          case l.ui.keyCode.RIGHT:
          case l.ui.keyCode.DOWN:
            i++;
            break;
          case l.ui.keyCode.UP:
          case l.ui.keyCode.LEFT:
            (a = !1), i--;
            break;
          case l.ui.keyCode.END:
            i = this.anchors.length - 1;
            break;
          case l.ui.keyCode.HOME:
            i = 0;
            break;
          case l.ui.keyCode.SPACE:
            return (
              t.preventDefault(),
              clearTimeout(this.activating),
              void this._activate(i)
            );
          case l.ui.keyCode.ENTER:
            return (
              t.preventDefault(),
              clearTimeout(this.activating),
              void this._activate(i !== this.options.active && i)
            );
          default:
            return;
        }
        t.preventDefault(),
          clearTimeout(this.activating),
          (i = this._focusNextTab(i, a)),
          t.ctrlKey ||
            t.metaKey ||
            (e.attr("aria-selected", "false"),
            this.tabs.eq(i).attr("aria-selected", "true"),
            (this.activating = this._delay(function () {
              this.option("active", i);
            }, this.delay)));
      }
    },
    _panelKeydown: function (t) {
      this._handlePageNav(t) ||
        (t.ctrlKey &&
          t.keyCode === l.ui.keyCode.UP &&
          (t.preventDefault(), this.active.focus()));
    },
    _handlePageNav: function (t) {
      return t.altKey && t.keyCode === l.ui.keyCode.PAGE_UP
        ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
        : t.altKey && t.keyCode === l.ui.keyCode.PAGE_DOWN
        ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
        : void 0;
    },
    _findNextTab: function (t, e) {
      var i = this.tabs.length - 1;
      for (
        ;
        -1 !==
        l.inArray((t = (t = i < t ? 0 : t) < 0 ? i : t), this.options.disabled);

      )
        t = e ? t + 1 : t - 1;
      return t;
    },
    _focusNextTab: function (t, e) {
      return (t = this._findNextTab(t, e)), this.tabs.eq(t).focus(), t;
    },
    _setOption: function (t, e) {
      "active" !== t
        ? "disabled" !== t
          ? (this._super(t, e),
            "collapsible" === t &&
              (this.element.toggleClass("ui-tabs-collapsible", e),
              e || !1 !== this.options.active || this._activate(0)),
            "event" === t && this._setupEvents(e),
            "heightStyle" === t && this._setupHeightStyle(e))
          : this._setupDisabled(e)
        : this._activate(e);
    },
    _sanitizeSelector: function (t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function () {
      var t = this.options,
        e = this.tablist.children(":has(a[href])");
      (t.disabled = l.map(e.filter(".ui-state-disabled"), function (t) {
        return e.index(t);
      })),
        this._processTabs(),
        !1 !== t.active && this.anchors.length
          ? this.active.length && !l.contains(this.tablist[0], this.active[0])
            ? this.tabs.length === t.disabled.length
              ? ((t.active = !1), (this.active = l()))
              : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
            : (t.active = this.tabs.index(this.active))
          : ((t.active = !1), (this.active = l())),
        this._refresh();
    },
    _refresh: function () {
      this._setupDisabled(this.options.disabled),
        this._setupEvents(this.options.event),
        this._setupHeightStyle(this.options.heightStyle),
        this.tabs
          .not(this.active)
          .attr({
            "aria-selected": "false",
            "aria-expanded": "false",
            tabIndex: -1,
          }),
        this.panels
          .not(this._getPanelForTab(this.active))
          .hide()
          .attr({ "aria-hidden": "true" }),
        this.active.length
          ? (this.active
              .addClass("ui-tabs-active ui-state-active")
              .attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0,
              }),
            this._getPanelForTab(this.active)
              .show()
              .attr({ "aria-hidden": "false" }))
          : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function () {
      var o = this,
        t = this.tabs,
        e = this.anchors,
        i = this.panels;
      (this.tablist = this._getList()
        .addClass(
          "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
        )
        .attr("role", "tablist")
        .delegate("> li", "mousedown" + this.eventNamespace, function (t) {
          l(this).is(".ui-state-disabled") && t.preventDefault();
        })
        .delegate(
          ".ui-tabs-anchor",
          "focus" + this.eventNamespace,
          function () {
            l(this).closest("li").is(".ui-state-disabled") && this.blur();
          }
        )),
        (this.tabs = this.tablist
          .find("> li:has(a[href])")
          .addClass("ui-state-default ui-corner-top")
          .attr({ role: "tab", tabIndex: -1 })),
        (this.anchors = this.tabs
          .map(function () {
            return l("a", this)[0];
          })
          .addClass("ui-tabs-anchor")
          .attr({ role: "presentation", tabIndex: -1 })),
        (this.panels = l()),
        this.anchors.each(function (t, e) {
          var i,
            a,
            s,
            n = l(e).uniqueId().attr("id"),
            r = l(e).closest("li"),
            h = r.attr("aria-controls");
          o._isLocal(e)
            ? ((s = (i = e.hash).substring(1)),
              (a = o.element.find(o._sanitizeSelector(i))))
            : ((s = r.attr("aria-controls") || l({}).uniqueId()[0].id),
              (a = o.element.find((i = "#" + s))).length ||
                (a = o._createPanel(s)).insertAfter(
                  o.panels[t - 1] || o.tablist
                ),
              a.attr("aria-live", "polite")),
            a.length && (o.panels = o.panels.add(a)),
            h && r.data("ui-tabs-aria-controls", h),
            r.attr({ "aria-controls": s, "aria-labelledby": n }),
            a.attr("aria-labelledby", n);
        }),
        this.panels
          .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
          .attr("role", "tabpanel"),
        t &&
          (this._off(t.not(this.tabs)),
          this._off(e.not(this.anchors)),
          this._off(i.not(this.panels)));
    },
    _getList: function () {
      return this.tablist || this.element.find("ol,ul").eq(0);
    },
    _createPanel: function (t) {
      return l("<div>")
        .attr("id", t)
        .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
        .data("ui-tabs-destroy", !0);
    },
    _setupDisabled: function (t) {
      l.isArray(t) &&
        (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1));
      for (var e, i = 0; (e = this.tabs[i]); i++)
        !0 === t || -1 !== l.inArray(i, t)
          ? l(e).addClass("ui-state-disabled").attr("aria-disabled", "true")
          : l(e).removeClass("ui-state-disabled").removeAttr("aria-disabled");
      this.options.disabled = t;
    },
    _setupEvents: function (t) {
      var i = {};
      t &&
        l.each(t.split(" "), function (t, e) {
          i[e] = "_eventHandler";
        }),
        this._off(this.anchors.add(this.tabs).add(this.panels)),
        this._on(!0, this.anchors, {
          click: function (t) {
            t.preventDefault();
          },
        }),
        this._on(this.anchors, i),
        this._on(this.tabs, { keydown: "_tabKeydown" }),
        this._on(this.panels, { keydown: "_panelKeydown" }),
        this._focusable(this.tabs),
        this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (t) {
      var i,
        e = this.element.parent();
      "fill" === t
        ? ((i = e.height()),
          (i -= this.element.outerHeight() - this.element.height()),
          this.element.siblings(":visible").each(function () {
            var t = l(this),
              e = t.css("position");
            "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
          }),
          this.element
            .children()
            .not(this.panels)
            .each(function () {
              i -= l(this).outerHeight(!0);
            }),
          this.panels
            .each(function () {
              l(this).height(
                Math.max(0, i - l(this).innerHeight() + l(this).height())
              );
            })
            .css("overflow", "auto"))
        : "auto" === t &&
          ((i = 0),
          this.panels
            .each(function () {
              i = Math.max(i, l(this).height("").height());
            })
            .height(i));
    },
    _eventHandler: function (t) {
      var e = this.options,
        i = this.active,
        a = l(t.currentTarget).closest("li"),
        s = a[0] === i[0],
        n = s && e.collapsible,
        r = n ? l() : this._getPanelForTab(a),
        h = i.length ? this._getPanelForTab(i) : l(),
        i = { oldTab: i, oldPanel: h, newTab: n ? l() : a, newPanel: r };
      t.preventDefault(),
        a.hasClass("ui-state-disabled") ||
          a.hasClass("ui-tabs-loading") ||
          this.running ||
          (s && !e.collapsible) ||
          !1 === this._trigger("beforeActivate", t, i) ||
          ((e.active = !n && this.tabs.index(a)),
          (this.active = s ? l() : a),
          this.xhr && this.xhr.abort(),
          h.length ||
            r.length ||
            l.error("jQuery UI Tabs: Mismatching fragment identifier."),
          r.length && this.load(this.tabs.index(a), t),
          this._toggle(t, i));
    },
    _toggle: function (t, e) {
      var i = this,
        a = e.newPanel,
        s = e.oldPanel;
      function n() {
        (i.running = !1), i._trigger("activate", t, e);
      }
      function r() {
        e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
          a.length && i.options.show
            ? i._show(a, i.options.show, n)
            : (a.show(), n());
      }
      (this.running = !0),
        s.length && this.options.hide
          ? this._hide(s, this.options.hide, function () {
              e.oldTab
                .closest("li")
                .removeClass("ui-tabs-active ui-state-active"),
                r();
            })
          : (e.oldTab
              .closest("li")
              .removeClass("ui-tabs-active ui-state-active"),
            s.hide(),
            r()),
        s.attr("aria-hidden", "true"),
        e.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
        a.length && s.length
          ? e.oldTab.attr("tabIndex", -1)
          : a.length &&
            this.tabs
              .filter(function () {
                return 0 === l(this).attr("tabIndex");
              })
              .attr("tabIndex", -1),
        a.attr("aria-hidden", "false"),
        e.newTab.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0,
        });
    },
    _activate: function (t) {
      var t = this._findActive(t);
      t[0] !== this.active[0] &&
        ((t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0]),
        this._eventHandler({
          target: t,
          currentTarget: t,
          preventDefault: l.noop,
        }));
    },
    _findActive: function (t) {
      return !1 === t ? l() : this.tabs.eq(t);
    },
    _getIndex: function (t) {
      return (t =
        "string" == typeof t
          ? this.anchors.index(this.anchors.filter("[href$='" + t + "']"))
          : t);
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(),
        this.element.removeClass(
          "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
        ),
        this.tablist
          .removeClass(
            "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
          )
          .removeAttr("role"),
        this.anchors
          .removeClass("ui-tabs-anchor")
          .removeAttr("role")
          .removeAttr("tabIndex")
          .removeUniqueId(),
        this.tablist.unbind(this.eventNamespace),
        this.tabs.add(this.panels).each(function () {
          l.data(this, "ui-tabs-destroy")
            ? l(this).remove()
            : l(this)
                .removeClass(
                  "ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel"
                )
                .removeAttr("tabIndex")
                .removeAttr("aria-live")
                .removeAttr("aria-busy")
                .removeAttr("aria-selected")
                .removeAttr("aria-labelledby")
                .removeAttr("aria-hidden")
                .removeAttr("aria-expanded")
                .removeAttr("role");
        }),
        this.tabs.each(function () {
          var t = l(this),
            e = t.data("ui-tabs-aria-controls");
          e
            ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls")
            : t.removeAttr("aria-controls");
        }),
        this.panels.show(),
        "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function (i) {
      var t = this.options.disabled;
      !1 !== t &&
        ((t =
          void 0 !== i &&
          ((i = this._getIndex(i)),
          l.isArray(t)
            ? l.map(t, function (t) {
                return t !== i ? t : null;
              })
            : l.map(this.tabs, function (t, e) {
                return e !== i ? e : null;
              }))),
        this._setupDisabled(t));
    },
    disable: function (t) {
      var e = this.options.disabled;
      if (!0 !== e) {
        if (void 0 === t) e = !0;
        else {
          if (((t = this._getIndex(t)), -1 !== l.inArray(t, e))) return;
          e = l.isArray(e) ? l.merge([t], e).sort() : [t];
        }
        this._setupDisabled(e);
      }
    },
    load: function (t, a) {
      t = this._getIndex(t);
      function s(t, e) {
        "abort" === e && n.panels.stop(!1, !0),
          i.removeClass("ui-tabs-loading"),
          r.removeAttr("aria-busy"),
          t === n.xhr && delete n.xhr;
      }
      var n = this,
        i = this.tabs.eq(t),
        t = i.find(".ui-tabs-anchor"),
        r = this._getPanelForTab(i),
        h = { tab: i, panel: r };
      this._isLocal(t[0]) ||
        ((this.xhr = l.ajax(this._ajaxSettings(t, a, h))),
        this.xhr &&
          "canceled" !== this.xhr.statusText &&
          (i.addClass("ui-tabs-loading"),
          r.attr("aria-busy", "true"),
          this.xhr
            .done(function (t, e, i) {
              setTimeout(function () {
                r.html(t), n._trigger("load", a, h), s(i, e);
              }, 1);
            })
            .fail(function (t, e) {
              setTimeout(function () {
                s(t, e);
              }, 1);
            })));
    },
    _ajaxSettings: function (t, i, a) {
      var s = this;
      return {
        url: t.attr("href"),
        beforeSend: function (t, e) {
          return s._trigger(
            "beforeLoad",
            i,
            l.extend({ jqXHR: t, ajaxSettings: e }, a)
          );
        },
      };
    },
    _getPanelForTab: function (t) {
      t = l(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + t));
    },
  });
  var a;
});
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
!(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (d) {
  var s,
    i = 0,
    a = Array.prototype.slice;
  return (
    (d.cleanData =
      ((s = d.cleanData),
      function (t) {
        for (var e, i, n = 0; null != (i = t[n]); n++)
          try {
            (e = d._data(i, "events")) &&
              e.remove &&
              d(i).triggerHandler("remove");
          } catch (t) {}
        s(t);
      })),
    (d.widget = function (t, i, e) {
      var n,
        s,
        o,
        r,
        a = {},
        u = t.split(".")[0];
      return (
        (t = t.split(".")[1]),
        e || ((e = i), (i = d.Widget)),
        (d.expr[":"][(n = u + "-" + t).toLowerCase()] = function (t) {
          return !!d.data(t, n);
        }),
        (d[u] = d[u] || {}),
        (s = d[u][t]),
        (o = d[u][t] =
          function (t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        d.extend(o, s, {
          version: e.version,
          _proto: d.extend({}, e),
          _childConstructors: [],
        }),
        ((r = new i()).options = d.widget.extend({}, r.options)),
        d.each(e, function (e, n) {
          function s() {
            return i.prototype[e].apply(this, arguments);
          }
          function o(t) {
            return i.prototype[e].apply(this, t);
          }
          d.isFunction(n)
            ? (a[e] = function () {
                var t,
                  e = this._super,
                  i = this._superApply;
                return (
                  (this._super = s),
                  (this._superApply = o),
                  (t = n.apply(this, arguments)),
                  (this._super = e),
                  (this._superApply = i),
                  t
                );
              })
            : (a[e] = n);
        }),
        (o.prototype = d.widget.extend(
          r,
          { widgetEventPrefix: (s && r.widgetEventPrefix) || t },
          a,
          { constructor: o, namespace: u, widgetName: t, widgetFullName: n }
        )),
        s
          ? (d.each(s._childConstructors, function (t, e) {
              var i = e.prototype;
              d.widget(i.namespace + "." + i.widgetName, o, e._proto);
            }),
            delete s._childConstructors)
          : i._childConstructors.push(o),
        d.widget.bridge(t, o),
        o
      );
    }),
    (d.widget.extend = function (t) {
      for (var e, i, n = a.call(arguments, 1), s = 0, o = n.length; s < o; s++)
        for (e in n[s])
          (i = n[s][e]),
            n[s].hasOwnProperty(e) &&
              void 0 !== i &&
              (d.isPlainObject(i)
                ? (t[e] = d.isPlainObject(t[e])
                    ? d.widget.extend({}, t[e], i)
                    : d.widget.extend({}, i))
                : (t[e] = i));
      return t;
    }),
    (d.widget.bridge = function (o, e) {
      var r = e.prototype.widgetFullName || o;
      d.fn[o] = function (i) {
        var t = "string" == typeof i,
          n = a.call(arguments, 1),
          s = this;
        return (
          t
            ? this.each(function () {
                var t,
                  e = d.data(this, r);
                return "instance" === i
                  ? ((s = e), !1)
                  : e
                  ? d.isFunction(e[i]) && "_" !== i.charAt(0)
                    ? (t = e[i].apply(e, n)) !== e && void 0 !== t
                      ? ((s = t && t.jquery ? s.pushStack(t.get()) : t), !1)
                      : void 0
                    : d.error(
                        "no such method '" +
                          i +
                          "' for " +
                          o +
                          " widget instance"
                      )
                  : d.error(
                      "cannot call methods on " +
                        o +
                        " prior to initialization; attempted to call method '" +
                        i +
                        "'"
                    );
              })
            : (n.length && (i = d.widget.extend.apply(null, [i].concat(n))),
              this.each(function () {
                var t = d.data(this, r);
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : d.data(this, r, new e(i, this));
              })),
          s
        );
      };
    }),
    (d.Widget = function () {}),
    (d.Widget._childConstructors = []),
    (d.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = d(e || this.defaultElement || this)[0]),
          (this.element = d(e)),
          (this.uuid = i++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = d()),
          (this.hoverable = d()),
          (this.focusable = d()),
          e !== this &&
            (d.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = d(e.style ? e.ownerDocument : e.document || e)),
            (this.window = d(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = d.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: d.noop,
      _getCreateEventData: d.noop,
      _create: d.noop,
      _init: d.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            .removeData(d.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: d.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          n,
          s,
          o = t;
        if (0 === arguments.length) return d.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((o = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (
              n = o[t] = d.widget.extend({}, this.options[t]), s = 0;
              s < i.length - 1;
              s++
            )
              (n[i[s]] = n[i[s]] || {}), (n = n[i[s]]);
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = e;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            o[t] = e;
          }
        return this._setOptions(o), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          (this.options[t] = e),
          "disabled" === t &&
            (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e),
            e &&
              (this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus"))),
          this
        );
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _on: function (s, o, t) {
        var r,
          a = this;
        "boolean" != typeof s && ((t = o), (o = s), (s = !1)),
          t
            ? ((o = r = d(o)), (this.bindings = this.bindings.add(o)))
            : ((t = o), (o = this.element), (r = this.widget())),
          d.each(t, function (t, e) {
            function i() {
              if (
                s ||
                (!0 !== a.options.disabled &&
                  !d(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof e ? a[e] : e).apply(a, arguments);
            }
            "string" != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || d.guid++);
            var n = t.match(/^([\w:-]*)\s*(.*)$/),
              t = n[1] + a.eventNamespace,
              n = n[2];
            n ? r.delegate(n, t, i) : o.bind(t, i);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.unbind(e).undelegate(e),
          (this.bindings = d(this.bindings.not(t).get())),
          (this.focusable = d(this.focusable.not(t).get())),
          (this.hoverable = d(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              d(t.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (t) {
              d(t.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              d(t.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (t) {
              d(t.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var n,
          s,
          o = this.options[t];
        if (
          ((i = i || {}),
          ((e = d.Event(e)).type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (s = e.originalEvent))
        )
          for (n in s) n in e || (e[n] = s[n]);
        return (
          this.element.trigger(e, i),
          !(
            (d.isFunction(o) &&
              !1 === o.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    d.each({ show: "fadeIn", hide: "fadeOut" }, function (o, r) {
      d.Widget.prototype["_" + o] = function (e, t, i) {
        var n = (t = "string" == typeof t ? { effect: t } : t)
            ? (!0 !== t && "number" != typeof t && t.effect) || r
            : o,
          s = !d.isEmptyObject(
            (t = "number" == typeof (t = t || {}) ? { duration: t } : t)
          );
        (t.complete = i),
          t.delay && e.delay(t.delay),
          s && d.effects && d.effects.effect[n]
            ? e[o](t)
            : n !== o && e[n]
            ? e[n](t.duration, t.easing, i)
            : e.queue(function (t) {
                d(this)[o](), i && i.call(e[0]), t();
              });
      };
    }),
    d.widget
  );
});
