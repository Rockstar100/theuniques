!(function () {
  var e,
    t,
    n = {
      271: function (e) {
        function t(e) {
          var t = document.createElement("a");
          return (t.href = e), t.search.split("?")[1] || "";
        }
        e.exports = {
          getQueryParamsString: t,
          parseUrlParams: function (e) {
            var n = t(e);
            return "" === n
              ? {}
              : n.split("&").reduce(function (e, t) {
                  var n = t.split("=");
                  return (e[n[0]] = decodeURIComponent(n[1])), e;
                }, {});
          },
          loadScript: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function () {},
              n = document.createElement("script");
            (n.type = "text/javascript"),
              (n.onerror = function () {
                t(new Error("Script failed to load"));
              }),
              n.readyState
                ? (n.onreadystatechange = function () {
                    ("loaded" !== n.readyState &&
                      "complete" !== n.readyState) ||
                      ((n.onreadystatechange = null), t());
                  })
                : (n.onload = function () {
                    t();
                  }),
              (n.src = e),
              document.getElementsByTagName("head")[0].appendChild(n);
          },
        };
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = (r[e] = { id: e, loaded: !1, exports: {} });
    return n[e](i, i.exports, o), (i.loaded = !0), i.exports;
  }
  (o.m = n),
    (o.d = function (e, t) {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = function (e) {
      return Promise.all(
        Object.keys(o.f).reduce(function (t, n) {
          return o.f[n](e, t), t;
        }, [])
      );
    }),
    (o.u = function (e) {
      return "sentry-browser.min.js";
    }),
    (o.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (e = {}),
    (t = "asset_composer:"),
    (o.l = function (n, r, i, u) {
      if (e[n]) e[n].push(r);
      else {
        var c, a;
        if (void 0 !== i)
          for (
            var f = document.getElementsByTagName("script"), s = 0;
            s < f.length;
            s++
          ) {
            var l = f[s];
            if (
              l.getAttribute("src") == n ||
              l.getAttribute("data-webpack") == t + i
            ) {
              c = l;
              break;
            }
          }
        c ||
          ((a = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          c.setAttribute("data-webpack", t + i),
          (c.src = n)),
          (e[n] = [r]);
        var p = function (t, r) {
            (c.onerror = c.onload = null), clearTimeout(d);
            var o = e[n];
            if (
              (delete e[n],
              c.parentNode && c.parentNode.removeChild(c),
              o &&
                o.forEach(function (e) {
                  return e(r);
                }),
              t)
            )
              return t(r);
          },
          d = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = p.bind(null, c.onerror)),
          (c.onload = p.bind(null, c.onload)),
          a && document.head.appendChild(c);
      }
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.p = "https://static.zdassets.com/ekr/"),
    (function () {
      var e = { 11: 0 };
      o.f.j = function (t, n) {
        var r = o.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var i = new Promise(function (n, o) {
              r = e[t] = [n, o];
            });
            n.push((r[2] = i));
            var u = o.p + o.u(t),
              c = new Error();
            o.l(
              u,
              function (n) {
                if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    u = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + u + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = i),
                    (c.request = u),
                    r[1](c);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, n) {
          var r,
            i,
            u = n[0],
            c = n[1],
            a = n[2],
            f = 0;
          if (
            u.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in c) o.o(c, r) && (o.m[r] = c[r]);
            a && a(o);
          }
          for (t && t(n); f < u.length; f++)
            (i = u[f]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (self.zEWebpackACJsonp = self.zEWebpackACJsonp || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (function () {
      "use strict";
      var e = setTimeout;
      function t(e) {
        return Boolean(e && void 0 !== e.length);
      }
      function n() {}
      function r(e) {
        if (!(this instanceof r))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        (this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          s(e, this);
      }
      function i(e, t) {
        for (; 3 === e._state; ) e = e._value;
        0 !== e._state
          ? ((e._handled = !0),
            r._immediateFn(function () {
              var n = 1 === e._state ? t.onFulfilled : t.onRejected;
              if (null !== n) {
                var r;
                try {
                  r = n(e._value);
                } catch (e) {
                  return void c(t.promise, e);
                }
                u(t.promise, r);
              } else (1 === e._state ? u : c)(t.promise, e._value);
            }))
          : e._deferreds.push(t);
      }
      function u(e, t) {
        try {
          if (t === e)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = t.then;
            if (t instanceof r)
              return (e._state = 3), (e._value = t), void a(e);
            if ("function" == typeof n)
              return void s(
                ((o = n),
                (i = t),
                function () {
                  o.apply(i, arguments);
                }),
                e
              );
          }
          (e._state = 1), (e._value = t), a(e);
        } catch (t) {
          c(e, t);
        }
        var o, i;
      }
      function c(e, t) {
        (e._state = 2), (e._value = t), a(e);
      }
      function a(e) {
        2 === e._state &&
          0 === e._deferreds.length &&
          r._immediateFn(function () {
            e._handled || r._unhandledRejectionFn(e._value);
          });
        for (var t = 0, n = e._deferreds.length; t < n; t++)
          i(e, e._deferreds[t]);
        e._deferreds = null;
      }
      function f(e, t, n) {
        (this.onFulfilled = "function" == typeof e ? e : null),
          (this.onRejected = "function" == typeof t ? t : null),
          (this.promise = n);
      }
      function s(e, t) {
        var n = !1;
        try {
          e(
            function (e) {
              n || ((n = !0), u(t, e));
            },
            function (e) {
              n || ((n = !0), c(t, e));
            }
          );
        } catch (e) {
          if (n) return;
          (n = !0), c(t, e);
        }
      }
      (r.prototype.catch = function (e) {
        return this.then(null, e);
      }),
        (r.prototype.then = function (e, t) {
          var r = new this.constructor(n);
          return i(this, new f(e, t, r)), r;
        }),
        (r.prototype.finally = function (e) {
          var t = this.constructor;
          return this.then(
            function (n) {
              return t.resolve(e()).then(function () {
                return n;
              });
            },
            function (n) {
              return t.resolve(e()).then(function () {
                return t.reject(n);
              });
            }
          );
        }),
        (r.all = function (e) {
          return new r(function (n, r) {
            if (!t(e)) return r(new TypeError("Promise.all accepts an array"));
            var o = Array.prototype.slice.call(e);
            if (0 === o.length) return n([]);
            var i = o.length;
            function u(e, t) {
              try {
                if (t && ("object" == typeof t || "function" == typeof t)) {
                  var c = t.then;
                  if ("function" == typeof c)
                    return void c.call(
                      t,
                      function (t) {
                        u(e, t);
                      },
                      r
                    );
                }
                (o[e] = t), 0 == --i && n(o);
              } catch (e) {
                r(e);
              }
            }
            for (var c = 0; c < o.length; c++) u(c, o[c]);
          });
        }),
        (r.allSettled = function (e) {
          return new this(function (t, n) {
            if (!e || void 0 === e.length)
              return n(
                new TypeError(
                  typeof e +
                    " " +
                    e +
                    " is not iterable(cannot read property Symbol(Symbol.iterator))"
                )
              );
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var o = r.length;
            function i(e, n) {
              if (n && ("object" == typeof n || "function" == typeof n)) {
                var u = n.then;
                if ("function" == typeof u)
                  return void u.call(
                    n,
                    function (t) {
                      i(e, t);
                    },
                    function (n) {
                      (r[e] = { status: "rejected", reason: n }),
                        0 == --o && t(r);
                    }
                  );
              }
              (r[e] = { status: "fulfilled", value: n }), 0 == --o && t(r);
            }
            for (var u = 0; u < r.length; u++) i(u, r[u]);
          });
        }),
        (r.resolve = function (e) {
          return e && "object" == typeof e && e.constructor === r
            ? e
            : new r(function (t) {
                t(e);
              });
        }),
        (r.reject = function (e) {
          return new r(function (t, n) {
            n(e);
          });
        }),
        (r.race = function (e) {
          return new r(function (n, o) {
            if (!t(e)) return o(new TypeError("Promise.race accepts an array"));
            for (var i = 0, u = e.length; i < u; i++)
              r.resolve(e[i]).then(n, o);
          });
        }),
        (r._immediateFn =
          ("function" == typeof setImmediate &&
            function (e) {
              setImmediate(e);
            }) ||
          function (t) {
            e(t, 0);
          }),
        (r._unhandledRejectionFn = function (e) {
          "undefined" != typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", e);
        });
      var l = r;
      function p(e) {
        return new l(function (t, n) {
          var r = new XMLHttpRequest();
          r.open("GET", e, !0),
            (r.responseType = "json"),
            (r.onload = function () {
              if (200 === r.status) {
                var e = r.response,
                  o = "string" == typeof e ? JSON.parse(e) : e;
                t(o);
              } else {
                var i = new Error(r.statusText);
                (i.status = r.status), n(i);
              }
            }),
            (r.onerror = function () {
              n(Error("Network error"));
            }),
            r.send();
        });
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t, n) {
        return (
          t && d(e.prototype, t),
          n && d(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var v = y(function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          h(this, e),
            (this.message = t),
            (this.props = n),
            (this.error = Error(this.message)),
            (this.isUserError = r),
            (this.fingerprint = this.message);
        }),
        m = {},
        b = {},
        w = {};
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var E = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.name = t.name),
            (this.id = t.id),
            (this.features = t.features),
            (this.win = n),
            (this.doc = n.document);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "ready",
              value: function () {
                var e = this;
                return new l(function (t, n) {
                  e.createIframeElement().then(function (r) {
                    r.addEventListener("load", function () {
                      var o = r.contentWindow;
                      o && o.document
                        ? ((o.ACFetch = p), t(o.document))
                        : n(e.error());
                    }),
                      (r.src = "about:blank"),
                      e.doc.body.appendChild(r);
                  });
                });
              },
            },
            {
              key: "injectMetadata",
              value: function (e, t) {
                var n, r, o;
                e &&
                  ((e.zendesk =
                    ((n = {}),
                    (r = this.name),
                    (o = { id: this.id, features: this.features }),
                    r in n
                      ? Object.defineProperty(n, r, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[r] = o),
                    n)),
                  (e.zEQueue = t));
              },
            },
            {
              key: "injectAssets",
              value: function (e, t) {
                var n = this;
                if (e) {
                  var r = e.getElementsByTagName("head")[0];
                  t.scripts.forEach(function (t) {
                    r.appendChild(n.createScriptElement(e, t.src));
                  });
                }
              },
            },
            {
              key: "parentDocumentReady",
              value: function () {
                var e = this;
                return new l(function (t, n) {
                  "loading" !== e.doc.readyState && e.doc.body
                    ? t()
                    : e.doc.addEventListener("DOMContentLoaded", function () {
                        e.doc.body
                          ? t()
                          : n(new v("host page document.body not available"));
                      });
                });
              },
            },
            {
              key: "createIframeElement",
              value: function () {
                var e = this;
                return this.parentDocumentReady().then(function () {
                  var t = e.doc.createElement("iframe");
                  return (
                    (t.dataset.product = e.name),
                    (t.title = "No content"),
                    (t.role = "presentation"),
                    (t.tabIndex = -1),
                    (t.allow = "microphone *"),
                    t.setAttribute("aria-hidden", !0),
                    (t.style.cssText =
                      "width: 0; height: 0; border: 0; position: absolute; top: -9999px"),
                    t
                  );
                });
              },
            },
            {
              key: "createScriptElement",
              value: function (e, t) {
                if (!e) return null;
                var n = e.createElement("script");
                return (n.type = "text/javascript"), (n.src = t), n;
              },
            },
            {
              key: "error",
              value: function () {
                var e = {
                  product: this.name,
                  id: this.id,
                  features: this.features,
                };
                return new v(
                  "iframe document not available to load product",
                  e
                );
              },
            },
          ]),
          n && g(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function P(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var j = (function () {
          function e(t, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.product = t),
              (this.productIframe = new E(this.product, n));
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "getProductAssets",
                value: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  return e ? w[this.product.name].assets : this.product.assets;
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var n = this;
                  return this.productIframe
                    .ready()
                    .then(function (r) {
                      n.productIframe.injectMetadata(r, t),
                        n.productIframe.injectAssets(r, e);
                    })
                    .catch(function () {
                      return l.reject(n.loadProductError());
                    });
                },
              },
              {
                key: "loadProductError",
                value: function () {
                  var e = this.product,
                    t = e.name,
                    n = e.id,
                    r = e.features;
                  return new v("failed to load product", {
                    product: t,
                    id: n,
                    features: r,
                  });
                },
              },
            ]),
            n && P(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        _ = o(271);
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var O = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.zopimKey = t),
            (this.win = n),
            (this.doc = n.document);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "getProductAssets",
              value: function () {
                return {
                  zopimSrc: ""
                    .concat("https://v2.zopim.com/w", "?")
                    .concat(this.zopimKey),
                };
              },
            },
            {
              key: "load",
              value: function (e) {
                return new l(function (t, n) {
                  try {
                    (0, _.loadScript)(e.zopimSrc), t();
                  } catch (e) {
                    n(e);
                  }
                });
              },
            },
          ]),
          n && k(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function S(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var z = "__zE_ac_version",
        T = (function () {
          function e(t, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.version = this.getVersion(t)),
              (this.baseUrl = ""
                .concat("https://ekr.zdassets.com/", "compose/")
                .concat(n)),
              (this.snippetKey = n);
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "resolveComposeUrl",
                value: function () {
                  var e = this.baseUrl;
                  return (
                    this.version &&
                      ((e += "?".concat(this.getSerializedVersionQueryParam())),
                      this.displayWarning()),
                    decodeURI(e)
                  );
                },
              },
              {
                key: "displayWarning",
                value: function () {
                  console.warn(
                    "You are loading "
                      .concat(this.version.name, " version ")
                      .concat(this.version.string)
                  );
                },
              },
              {
                key: "getSerializedVersionQueryParam",
                value: function () {
                  return ""
                    .concat(z, "=")
                    .concat(this.version.name, "/")
                    .concat(this.version.string);
                },
              },
              {
                key: "getVersion",
                value: function (e) {
                  var t;
                  try {
                    t = e.localStorage.getItem("ZD-ac-version");
                  } catch (e) {}
                  var n = (0, _.parseUrlParams)(e.location.href)[z] || t;
                  if (n) {
                    var r = n.split("/");
                    if (this.validVersion(r[1]))
                      return { name: r[0], string: r[1] };
                  }
                  return null;
                },
              },
              {
                key: "validVersion",
                value: function (e) {
                  return e && /^\w+$/.test(e);
                },
              },
            ]) && S(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })();
      function R(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var x = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.snippet = t);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "getProducts",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                return new l(function (r, o) {
                  var i = t.snippet.getParentWindow();
                  if (n)
                    (i.zEACLoaded = !0),
                      i.$zopim ? r(b.products) : r(m.products);
                  else {
                    var u = new T(i, e),
                      c = function (e) {
                        var t = e.products;
                        (i.zEACLoaded = !0), r(t);
                      },
                      a = u.resolveComposeUrl();
                    p(a)
                      .then(c)
                      .catch(function (n) {
                        404 !== n.status && 400 !== n.status
                          ? p(a)
                              .then(function (e) {
                                return c(e);
                              })
                              .catch(function () {
                                return o(t.error(e));
                              })
                          : o(t.error(e));
                      });
                  }
                });
              },
            },
            {
              key: "loadProducts",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                return e.map(function (e) {
                  var r = e.getProductAssets(n);
                  return e.load(r, t.snippet.getZEQueue()).catch(function (e) {
                    return l.reject(e);
                  });
                });
              },
            },
            {
              key: "getProductLoaders",
              value: function (e) {
                var t = this.snippet.getParentWindow();
                return e.map(function (e) {
                  return "zopim_chat" === e.name ? new O(e.id, t) : new j(e, t);
                });
              },
            },
            {
              key: "error",
              value: function (e) {
                return new v("compose request failed", { key: e });
              },
            },
          ]),
          n && R(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var A = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.win = t),
            (this.doc = t.document);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "getKey",
              value: function () {
                return new l(function (e, t) {
                  return t(new v("Key is missing from snippet", {}, !0));
                });
              },
            },
            {
              key: "getZEQueue",
              value: function () {
                return null;
              },
            },
            {
              key: "getParentWindow",
              value: function () {
                return this.win;
              },
            },
          ]),
          n && C(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function I(e) {
        return (
          (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          I(e)
        );
      }
      function U(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function B(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function L(e, t) {
        return (
          (L =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          L(e, t)
        );
      }
      function F(e, t) {
        if (t && ("object" === I(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function Q(e) {
        return (
          (Q = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Q(e)
        );
      }
      var K = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && L(e, t);
        })(u, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = u),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Q(r);
              if (o) {
                var n = Q(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return F(this, e);
            });
        function u() {
          return U(this, u), i.apply(this, arguments);
        }
        return (
          (t = u),
          (n = [
            {
              key: "getKey",
              value: function () {
                var e = this;
                return new l(function (t, n) {
                  var r = e.doc.zendeskHost;
                  return r
                    ? e._isHostMapped(r)
                      ? p("https://".concat(r, "/embeddable/zendesk_host"))
                          .then(function (e) {
                            return t("web_widget/".concat(e.zendesk_host));
                          })
                          .catch(function (e) {
                            return n(new v(e.message));
                          })
                      : t("web_widget/".concat(r))
                    : n(Error("Zendesk host is not defined"));
                });
              },
            },
            {
              key: "getZEQueue",
              value: function () {
                return this.doc.zEQueue;
              },
            },
            {
              key: "getParentWindow",
              value: function () {
                return this.win.parent;
              },
            },
            {
              key: "_isHostMapped",
              value: function (e) {
                return (
                  -1 === e.indexOf(".zendesk.com") &&
                  -1 === e.indexOf(".zendesk-staging.com")
                );
              },
            },
          ]),
          n && B(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          u
        );
      })(A);
      function M(e) {
        return (
          (M =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          M(e)
        );
      }
      function N(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function W(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function D(e, t) {
        return (
          (D =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          D(e, t)
        );
      }
      function V(e, t) {
        if (t && ("object" === M(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function Z(e) {
        return (
          (Z = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Z(e)
        );
      }
      var H = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && D(e, t);
        })(c, e);
        var t,
          n,
          r,
          o,
          i,
          u =
            ((o = c),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Z(o);
              if (i) {
                var n = Z(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return V(this, e);
            });
        function c() {
          return N(this, c), u.apply(this, arguments);
        }
        return (
          (t = c),
          (n = [
            {
              key: "getKey",
              value: function () {
                var e = this;
                return new l(function (t, n) {
                  var r = e._getScript(e.win.zE);
                  if (r) {
                    var o = (0, _.parseUrlParams)(r.src);
                    if (o && o.key) return t(o.key);
                  }
                  return n(new v("Key is missing from snippet", {}, !0));
                });
              },
            },
            {
              key: "getZEQueue",
              value: function () {
                return this.win.zE._;
              },
            },
            {
              key: "_getScript",
              value: function (e) {
                return (
                  c.isSnippetPresent(this.win) || (e && e.s ? e.s : void 0)
                );
              },
            },
          ]),
          (r = [
            {
              key: "isSnippetPresent",
              value: function (e) {
                return e.document.getElementById("ze-snippet");
              },
            },
          ]),
          n && W(t.prototype, n),
          r && W(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          c
        );
      })(A);
      function $(e) {
        return (
          ($ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          $(e)
        );
      }
      function q(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function J(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function G(e, t) {
        return (
          (G =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          G(e, t)
        );
      }
      function X(e, t) {
        if (t && ("object" === $(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function Y(e) {
        return (
          (Y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Y(e)
        );
      }
      var ee = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && G(e, t);
          })(c, e);
          var t,
            n,
            r,
            o,
            i,
            u =
              ((o = c),
              (i = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = Y(o);
                if (i) {
                  var n = Y(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return X(this, e);
              });
          function c() {
            return q(this, c), u.apply(this, arguments);
          }
          return (
            (t = c),
            (n = [
              {
                key: "getKey",
                value: function () {
                  var e = this;
                  return new l(function (t, n) {
                    var r = (0, _.getQueryParamsString)(c.getScriptSrc(e.win));
                    return t("zopim_chat/".concat(r));
                  });
                },
              },
            ]),
            (r = [
              {
                key: "getScriptSrc",
                value: function (e) {
                  if (e.$zopim && e.$zopim.s) return e.$zopim.s.src;
                  for (
                    var t,
                      n = document.getElementsByTagName("script"),
                      r = /.*zopim.(com|net|org)\//,
                      o = 0,
                      i = n.length;
                    o < i;
                    o++
                  )
                    if (((t = n[o].src || ""), r.test(t))) return t;
                },
              },
              {
                key: "isSnippetPresent",
                value: function (e) {
                  return !!c.getScriptSrc(e);
                },
              },
            ]),
            n && J(t.prototype, n),
            r && J(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            c
          );
        })(A),
        te = null,
        ne = {
          autoSessionTracking: !1,
          enabled:
            !window.zESettings ||
            void 0 === window.zESettings.errorReporting ||
            Boolean(window.zESettings.errorReporting),
          dsn: void 0,
          environment: void 0,
          release: "asset-composer@v55",
          sampleRate: 1,
          defaultIntegrations: !1,
        },
        re = function () {
          return new l(function (e) {
            te
              ? e(te)
              : o
                  .e(996)
                  .then(o.bind(o, 705))
                  .then(function (t) {
                    var n = t.Integrations;
                    (ne.integrations = [
                      new n.InboundFilters(),
                      new n.FunctionToString(),
                      new n.UserAgent(),
                    ]),
                      t.init(ne),
                      e((te = t));
                  });
          });
        };
      function oe(e) {
        return e && e instanceof v
          ? re().then(function (t) {
              t.withScope(function (n) {
                e.fingerprint && n.setFingerprint(e.fingerprint),
                  n.setLevel("warning"),
                  t.captureException(e.error);
              }),
                window.console &&
                  e.isUserError &&
                  window.console.error(e.message);
            })
          : re().then(function (t) {
              t.captureException(e);
            });
      }
      !(function () {
        try {
          if ("function" != typeof window.zE) {
            var e = (function () {
              var e = [],
                t = function () {
                  e.push(arguments);
                };
              return (t._ = e), (t.t = Date.now()), t;
            })();
            (window.zE = e), (window.zEmbed = e);
          }
          if (window.zEACLoaded) return;
          var t = (function (e) {
              return H.isSnippetPresent(e)
                ? new H(e)
                : e.document.zendeskHost && e.document.zEQueue
                ? new K(e)
                : ee.isSnippetPresent(e)
                ? new ee(e)
                : new H(e);
            })(window),
            n = new x(t);
          t.getKey()
            .then(function (e) {
              return n.getProducts(e, !1);
            })
            .then(function (e) {
              if (e && e.length)
                return l.all(n.loadProducts(n.getProductLoaders(e), !1));
            })
            .catch(function (e) {
              return oe(e);
            });
        } catch (e) {
          oe(e);
        }
      })();
    })();
})();
!(function () {
  "use strict";
  var e = 0,
    r = {};
  function i(t) {
    if (!t) throw new Error("No options passed to Waypoint constructor");
    if (!t.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!t.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = i.Adapter.extend({}, i.defaults, t)),
      (this.element = this.options.element),
      (this.adapter = new i.Adapter(this.element)),
      (this.callback = t.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = i.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = i.Context.findOrCreateByElement(this.options.context)),
      i.offsetAliases[this.options.offset] &&
        (this.options.offset = i.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (r[this.key] = this),
      (e += 1);
  }
  (i.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (i.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (i.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete r[this.key];
    }),
    (i.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (i.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (i.prototype.next = function () {
      return this.group.next(this);
    }),
    (i.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (i.invokeAll = function (t) {
      var e = [];
      for (var i in r) e.push(r[i]);
      for (var o = 0, n = e.length; o < n; o++) e[o][t]();
    }),
    (i.destroyAll = function () {
      i.invokeAll("destroy");
    }),
    (i.disableAll = function () {
      i.invokeAll("disable");
    }),
    (i.enableAll = function () {
      for (var t in (i.Context.refreshAll(), r)) r[t].enabled = !0;
      return this;
    }),
    (i.refreshAll = function () {
      i.Context.refreshAll();
    }),
    (i.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (i.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (i.adapters = []),
    (i.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (i.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.VcWaypoint = i);
})(),
  (function () {
    "use strict";
    function e(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    var i = 0,
      o = {},
      y = window.VcWaypoint,
      t = window.onload;
    function n(t) {
      (this.element = t),
        (this.Adapter = y.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        y.windowContext ||
          ((y.windowContext = !0), (y.windowContext = new n(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    (n.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (n.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".vcwaypoints"), delete o[this.key]);
      }),
      (n.prototype.createThrottledResizeHandler = function () {
        var t = this;
        function e() {
          t.handleResize(), (t.didResize = !1);
        }
        this.adapter.on("resize.vcwaypoints", function () {
          t.didResize || ((t.didResize = !0), y.requestAnimationFrame(e));
        });
      }),
      (n.prototype.createThrottledScrollHandler = function () {
        var t = this;
        function e() {
          t.handleScroll(), (t.didScroll = !1);
        }
        this.adapter.on("scroll.vcwaypoints", function () {
          (t.didScroll && !y.isTouch) ||
            ((t.didScroll = !0), y.requestAnimationFrame(e));
        });
      }),
      (n.prototype.handleResize = function () {
        y.Context.refreshAll();
      }),
      (n.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll ? o.forward : o.backward;
          for (var r in this.waypoints[i]) {
            var s = this.waypoints[i][r];
            if (null !== s.triggerPoint) {
              var a = o.oldScroll < s.triggerPoint,
                l = o.newScroll >= s.triggerPoint;
              ((a && l) || (!a && !l)) &&
                (s.queueTrigger(n), (t[s.group.id] = s.group));
            }
          }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (n.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? y.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (n.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (n.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? y.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (n.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy();
      }),
      (n.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        for (var n in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var r = t[n];
          for (var s in this.waypoints[n]) {
            var a,
              l,
              h,
              p,
              c = this.waypoints[n][s],
              u = c.options.offset,
              d = c.triggerPoint,
              f = 0,
              w = null == d;
            c.element !== c.element.window &&
              (f = c.adapter.offset()[r.offsetProp]),
              "function" == typeof u
                ? (u = u.apply(c))
                : "string" == typeof u &&
                  ((u = parseFloat(u)),
                  -1 < c.options.offset.indexOf("%") &&
                    (u = Math.ceil((r.contextDimension * u) / 100))),
              (a = r.contextScroll - r.contextOffset),
              (c.triggerPoint = Math.floor(f + a - u)),
              (l = d < r.oldScroll),
              (h = c.triggerPoint >= r.oldScroll),
              (p = !l && !h),
              !w && l && h
                ? (c.queueTrigger(r.backward), (o[c.group.id] = c.group))
                : !w && p
                ? (c.queueTrigger(r.forward), (o[c.group.id] = c.group))
                : w &&
                  r.oldScroll >= c.triggerPoint &&
                  (c.queueTrigger(r.forward), (o[c.group.id] = c.group));
          }
        }
        return (
          y.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (n.findOrCreateByElement = function (t) {
        return n.findByElement(t) || new n(t);
      }),
      (n.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (n.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        t && t(), n.refreshAll();
      }),
      (y.requestAnimationFrame = function (t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (y.Context = n);
  })(),
  (function () {
    "use strict";
    function s(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function a(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    var e = { vertical: {}, horizontal: {} },
      i = window.VcWaypoint;
    function o(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (e[this.axis][this.name] = this);
    }
    (o.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (o.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (o.prototype.flushTriggers = function () {
        for (var t in this.triggerQueues) {
          var e = this.triggerQueues[t],
            i = "up" === t || "left" === t;
          e.sort(i ? a : s);
          for (var o = 0, n = e.length; o < n; o += 1) {
            var r = e[o];
            (r.options.continuous || o === e.length - 1) && r.trigger([t]);
          }
        }
        this.clearTriggerQueues();
      }),
      (o.prototype.next = function (t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1];
      }),
      (o.prototype.previous = function (t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e ? this.waypoints[e - 1] : null;
      }),
      (o.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (o.prototype.remove = function (t) {
        var e = i.Adapter.inArray(t, this.waypoints);
        -1 < e && this.waypoints.splice(e, 1);
      }),
      (o.prototype.first = function () {
        return this.waypoints[0];
      }),
      (o.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (o.findOrCreate = function (t) {
        return e[t.axis][t.name] || new o(t);
      }),
      (i.Group = o);
  })(),
  (function () {
    "use strict";
    var i = window.jQuery,
      t = window.VcWaypoint;
    function o(t) {
      this.$element = i(t);
    }
    i.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (t, e) {
        o.prototype[e] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[e].apply(this.$element, t);
        };
      }
    ),
      i.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
        o[e] = i[e];
      }),
      t.adapters.push({ name: "jquery", Adapter: o }),
      (t.Adapter = o);
  })(),
  (function () {
    "use strict";
    var n = window.VcWaypoint;
    function t(o) {
      return function () {
        var e = [],
          i = arguments[0];
        return (
          o.isFunction(arguments[0]) &&
            ((i = o.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var t = o.extend({}, i, { element: this });
            "string" == typeof t.context &&
              (t.context = o(this).closest(t.context)[0]),
              e.push(new n(t));
          }),
          e
        );
      };
    }
    window.jQuery && (window.jQuery.fn.vcwaypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.vcwaypoint = t(window.Zepto));
  })();
!(function (o) {
  "use strict";
  o(document).ready(function () {
    o(document).on("click", ".qodef-like", function () {
      var i,
        e = o(this),
        t = e.attr("id");
      if (e.hasClass("liked")) return !1;
      void 0 !== e.data("type") && (i = e.data("type"));
      var a = { action: "qode_startit_like", likes_id: t, type: i };
      return (
        o.post(qodefLike.ajaxurl, a, function (t) {
          e.html(t).addClass("liked").attr("title", "You already like this!"),
            "portfolio_list" !== i && e.children("span").css("opacity", 1);
        }),
        !1
      );
    });
  });
})(jQuery);

(document.documentElement.className += " js_active "),
  (document.documentElement.className +=
    "ontouchstart" in document.documentElement
      ? " vc_mobile "
      : " vc_desktop "),
  (function () {
    for (
      var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0;
      i < prefix.length;
      i++
    )
      prefix[i] + "transform" in document.documentElement.style &&
        (document.documentElement.className += " vc_transform ");
  })(),
  (function ($) {
    "function" != typeof window.vc_js &&
      (window.vc_js = function () {
        "use strict";
        vc_toggleBehaviour(),
          vc_tabsBehaviour(),
          vc_accordionBehaviour(),
          vc_teaserGrid(),
          vc_carouselBehaviour(),
          vc_slidersBehaviour(),
          vc_prettyPhoto(),
          vc_pinterest(),
          vc_progress_bar(),
          vc_plugin_flexslider(),
          vc_gridBehaviour(),
          vc_rowBehaviour(),
          vc_prepareHoverBox(),
          vc_googleMapsPointer(),
          vc_ttaActivation(),
          jQuery(document).trigger("vc_js"),
          window.setTimeout(vc_waypoints, 500);
      }),
      "function" != typeof window.vc_plugin_flexslider &&
        (window.vc_plugin_flexslider = function ($parent) {
          ($parent
            ? $parent.find(".wpb_flexslider")
            : jQuery(".wpb_flexslider")
          ).each(function () {
            var this_element = jQuery(this),
              sliderTimeout =
                1e3 * parseInt(this_element.attr("data-interval"), 10),
              sliderFx = this_element.attr("data-flex_fx"),
              slideshow = !0;
            0 === sliderTimeout && (slideshow = !1),
              this_element.is(":visible") &&
                this_element.flexslider({
                  animation: sliderFx,
                  slideshow: slideshow,
                  slideshowSpeed: sliderTimeout,
                  sliderSpeed: 800,
                  smoothHeight: !0,
                });
          });
        }),
      "function" != typeof window.vc_googleplus &&
        (window.vc_googleplus = function () {
          0 < jQuery(".wpb_googleplus").length &&
            (function () {
              var po = document.createElement("script");
              (po.type = "text/javascript"),
                (po.async = !0),
                (po.src = "https://apis.google.com/js/plusone.js");
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(po, s);
            })();
        }),
      "function" != typeof window.vc_pinterest &&
        (window.vc_pinterest = function () {
          0 < jQuery(".wpb_pinterest").length &&
            (function () {
              var po = document.createElement("script");
              (po.type = "text/javascript"),
                (po.async = !0),
                (po.src = "https://assets.pinterest.com/js/pinit.js");
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(po, s);
            })();
        }),
      "function" != typeof window.vc_progress_bar &&
        (window.vc_progress_bar = function () {
          void 0 !== jQuery.fn.vcwaypoint &&
            jQuery(".vc_progress_bar").each(function () {
              var $el = jQuery(this);
              $el.vcwaypoint(
                function () {
                  $el.find(".vc_single_bar").each(function (index) {
                    var bar = jQuery(this).find(".vc_bar"),
                      val = bar.data("percentage-value");
                    setTimeout(function () {
                      bar.css({ width: val + "%" });
                    }, 200 * index);
                  });
                },
                { offset: "85%" }
              );
            });
        }),
      "function" != typeof window.vc_waypoints &&
        (window.vc_waypoints = function () {
          void 0 !== jQuery.fn.vcwaypoint &&
            jQuery(
              ".wpb_animate_when_almost_visible:not(.wpb_start_animation)"
            ).each(function () {
              var $el = jQuery(this);
              $el.vcwaypoint(
                function () {
                  $el.addClass("wpb_start_animation animated");
                },
                { offset: "85%" }
              );
            });
        }),
      "function" != typeof window.vc_toggleBehaviour &&
        (window.vc_toggleBehaviour = function ($el) {
          function event(e) {
            e && e.preventDefault && e.preventDefault();
            var element = jQuery(this).closest(".vc_toggle"),
              content = element.find(".vc_toggle_content");
            element.hasClass("vc_toggle_active")
              ? content.slideUp({
                  duration: 300,
                  complete: function () {
                    element.removeClass("vc_toggle_active");
                  },
                })
              : content.slideDown({
                  duration: 300,
                  complete: function () {
                    element.addClass("vc_toggle_active");
                  },
                });
          }
          $el
            ? $el.hasClass("vc_toggle_title")
              ? $el.unbind("click").on("click", event)
              : $el.find(".vc_toggle_title").off("click").on("click", event)
            : jQuery(".vc_toggle_title").off("click").on("click", event);
        }),
      "function" != typeof window.vc_tabsBehaviour &&
        (window.vc_tabsBehaviour = function ($tab) {
          if (jQuery.ui) {
            var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
              ver =
                jQuery.ui && jQuery.ui.version
                  ? jQuery.ui.version.split(".")
                  : "1.10",
              old_version =
                1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
            $call.each(function (index) {
              var $tabs,
                interval = jQuery(this).attr("data-interval"),
                tabs_array = [];
              if (
                (($tabs = jQuery(this)
                  .find(".wpb_tour_tabs_wrapper")
                  .tabs({
                    show: function (event, ui) {
                      wpb_prepare_tab_content(event, ui);
                    },
                    activate: function (event, ui) {
                      wpb_prepare_tab_content(event, ui);
                    },
                  })),
                interval && 0 < interval)
              )
                try {
                  $tabs.tabs("rotate", 1e3 * interval);
                } catch (err) {
                  window.console &&
                    window.console.warn &&
                    console.warn("tabs behaviours error", err);
                }
              jQuery(this)
                .find(".wpb_tab")
                .each(function () {
                  tabs_array.push(this.id);
                }),
                jQuery(this)
                  .find(".wpb_tabs_nav li")
                  .on("click", function (e) {
                    return (
                      e && e.preventDefault && e.preventDefault(),
                      old_version
                        ? $tabs.tabs("select", jQuery("a", this).attr("href"))
                        : $tabs.tabs("option", "active", jQuery(this).index()),
                      !1
                    );
                  }),
                jQuery(this)
                  .find(".wpb_prev_slide a, .wpb_next_slide a")
                  .on("click", function (e) {
                    var index, length;
                    e && e.preventDefault && e.preventDefault(),
                      old_version
                        ? ((index = $tabs.tabs("option", "selected")),
                          jQuery(this).parent().hasClass("wpb_next_slide")
                            ? index++
                            : index--,
                          index < 0
                            ? (index = $tabs.tabs("length") - 1)
                            : index >= $tabs.tabs("length") && (index = 0),
                          $tabs.tabs("select", index))
                        : ((index = $tabs.tabs("option", "active")),
                          (length = $tabs.find(".wpb_tab").length),
                          (index = jQuery(this)
                            .parent()
                            .hasClass("wpb_next_slide")
                            ? length <= index + 1
                              ? 0
                              : index + 1
                            : index - 1 < 0
                            ? length - 1
                            : index - 1),
                          $tabs.tabs("option", "active", index));
                  });
            });
          }
        }),
      "function" != typeof window.vc_accordionBehaviour &&
        (window.vc_accordionBehaviour = function () {
          jQuery(".wpb_accordion").each(function (index) {
            var $tabs,
              active_tab,
              collapsible,
              $this = jQuery(this);
            $this.attr("data-interval"),
              (collapsible =
                !1 ===
                  (active_tab =
                    !isNaN(jQuery(this).data("active-tab")) &&
                    0 < parseInt($this.data("active-tab"), 10) &&
                    parseInt($this.data("active-tab"), 10) - 1) ||
                "yes" === $this.data("collapsible")),
              ($tabs = $this.find(".wpb_accordion_wrapper").accordion({
                header: "> div > h3",
                autoHeight: !1,
                heightStyle: "content",
                active: active_tab,
                collapsible: collapsible,
                navigation: !0,
                activate: vc_accordionActivate,
                change: function (event, ui) {
                  void 0 !== jQuery.fn.isotope &&
                    ui.newContent.find(".isotope").isotope("layout"),
                    vc_carouselBehaviour(ui.newPanel);
                },
              })),
              !0 === $this.data("vcDisableKeydown") &&
                ($tabs.data("uiAccordion")._keydown = function () {});
          });
        }),
      "function" != typeof window.vc_teaserGrid &&
        (window.vc_teaserGrid = function () {
          var layout_modes = { fitrows: "fitRows", masonry: "masonry" };
          jQuery(
            ".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)"
          ).each(function () {
            var $container = jQuery(this),
              $thumbs = $container.find(".wpb_thumbnails"),
              layout_mode = $thumbs.attr("data-layout-mode");
            $thumbs.isotope({
              itemSelector: ".isotope-item",
              layoutMode:
                void 0 === layout_modes[layout_mode]
                  ? "fitRows"
                  : layout_modes[layout_mode],
            }),
              $container
                .find(".categories_filter a")
                .data("isotope", $thumbs)
                .on("click", function (e) {
                  e && e.preventDefault && e.preventDefault();
                  var $thumbs = jQuery(this).data("isotope");
                  jQuery(this)
                    .parent()
                    .parent()
                    .find(".active")
                    .removeClass("active"),
                    jQuery(this).parent().addClass("active"),
                    $thumbs.isotope({
                      filter: jQuery(this).attr("data-filter"),
                    });
                }),
              jQuery(window).bind("load resize", function () {
                $thumbs.isotope("layout");
              });
          });
        }),
      "function" != typeof window.vc_carouselBehaviour &&
        (window.vc_carouselBehaviour = function ($parent) {
          ($parent
            ? $parent.find(".wpb_carousel")
            : jQuery(".wpb_carousel")
          ).each(function () {
            var $this = jQuery(this);
            if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
              $this.data("carousel_enabled", !0);
              getColumnsCount(jQuery(this));
              jQuery(this).hasClass("columns_count_1") && 900;
              var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
              carousel_li.css({
                "margin-right": carousel_li.css("margin-left"),
                "margin-left": 0,
              });
              var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
              fluid_ul.width(fluid_ul.width() + 300),
                jQuery(window).on("resize", function () {
                  screen_size != (screen_size = getSizeName()) &&
                    window.setTimeout(function () {
                      location.reload();
                    }, 20);
                });
            }
          });
        }),
      "function" != typeof window.vc_slidersBehaviour &&
        (window.vc_slidersBehaviour = function () {
          jQuery(".wpb_gallery_slides").each(function (index) {
            var $imagesGrid,
              this_element = jQuery(this);
            if (this_element.hasClass("wpb_slider_nivo")) {
              var sliderTimeout = 1e3 * this_element.attr("data-interval");
              0 === sliderTimeout && (sliderTimeout = 9999999999),
                this_element
                  .find(".nivoSlider")
                  .nivoSlider({
                    effect:
                      "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next",
                  });
            } else
              this_element.hasClass("wpb_image_grid") &&
                (jQuery.fn.imagesLoaded
                  ? ($imagesGrid = this_element
                      .find(".wpb_image_grid_ul")
                      .imagesLoaded(function () {
                        $imagesGrid.isotope({
                          itemSelector: ".isotope-item",
                          layoutMode: "fitRows",
                        });
                      }))
                  : this_element
                      .find(".wpb_image_grid_ul")
                      .isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows",
                      }));
          });
        }),
      "function" != typeof window.vc_prettyPhoto &&
        (window.vc_prettyPhoto = function () {
          try {
            jQuery &&
              jQuery.fn &&
              jQuery.fn.prettyPhoto &&
              jQuery(
                'a.prettyphoto, .gallery-icon a[href*=".jpg"]'
              ).prettyPhoto({
                animationSpeed: "normal",
                hook: "data-rel",
                padding: 15,
                opacity: 0.7,
                showTitle: !0,
                allowresize: !0,
                counter_separator_label: "/",
                hideflash: !1,
                deeplinking: !1,
                modal: !1,
                callback: function () {
                  -1 < location.href.indexOf("#!prettyPhoto") &&
                    (location.hash = "");
                },
                social_tools: "",
              });
          } catch (err) {
            window.console &&
              window.console.warn &&
              window.console.warn("vc_prettyPhoto initialize error", err);
          }
        }),
      "function" != typeof window.vc_google_fonts &&
        (window.vc_google_fonts = function () {
          return (
            window.console &&
              window.console.warn &&
              window.console.warn(
                "function vc_google_fonts is deprecated, no need to use it"
              ),
            !1
          );
        }),
      (window.vcParallaxSkroll = !1),
      "function" != typeof window.vc_rowBehaviour &&
        (window.vc_rowBehaviour = function () {
          var vcSkrollrOptions,
            callSkrollInit,
            $ = window.jQuery;
          function fullWidthRow() {
            var $elements = $('[data-vc-full-width="true"]');
            $.each($elements, function (key, item) {
              var $el = $(this);
              $el.addClass("vc_hidden");
              var $el_full = $el.next(".vc_row-full-width");
              if (
                ($el_full.length ||
                  ($el_full = $el.parent().next(".vc_row-full-width")),
                $el_full.length)
              ) {
                var padding,
                  paddingRight,
                  el_margin_left = parseInt($el.css("margin-left"), 10),
                  el_margin_right = parseInt($el.css("margin-right"), 10),
                  offset = 0 - $el_full.offset().left - el_margin_left,
                  width = $(window).width();
                if (
                  ("rtl" === $el.css("direction") &&
                    ((offset -= $el_full.width()),
                    (offset += width),
                    (offset += el_margin_left),
                    (offset += el_margin_right)),
                  $el.css({
                    position: "relative",
                    left: offset,
                    "box-sizing": "border-box",
                    width: width,
                  }),
                  !$el.data("vcStretchContent"))
                )
                  "rtl" === $el.css("direction")
                    ? ((padding = offset) < 0 && (padding = 0),
                      (paddingRight = offset) < 0 && (paddingRight = 0))
                    : ((padding = -1 * offset) < 0 && (padding = 0),
                      (paddingRight =
                        width -
                        padding -
                        $el_full.width() +
                        el_margin_left +
                        el_margin_right) < 0 && (paddingRight = 0)),
                    $el.css({
                      "padding-left": padding + "px",
                      "padding-right": paddingRight + "px",
                    });
                $el.attr("data-vc-full-width-init", "true"),
                  $el.removeClass("vc_hidden"),
                  $(document).trigger("vc-full-width-row-single", {
                    el: $el,
                    offset: offset,
                    marginLeft: el_margin_left,
                    marginRight: el_margin_right,
                    elFull: $el_full,
                    width: width,
                  });
              }
            }),
              $(document).trigger("vc-full-width-row", $elements);
          }
          function fullHeightRow() {
            var windowHeight,
              offsetTop,
              fullHeight,
              $element = $(".vc_row-o-full-height:first");
            $element.length &&
              ((windowHeight = $(window).height()),
              (offsetTop = $element.offset().top) < windowHeight &&
                ((fullHeight = 100 - offsetTop / (windowHeight / 100)),
                $element.css("min-height", fullHeight + "vh")));
            $(document).trigger("vc-full-height-row", $element);
          }
          $(window)
            .off("resize.vcRowBehaviour")
            .on("resize.vcRowBehaviour", fullWidthRow)
            .on("resize.vcRowBehaviour", fullHeightRow),
            fullWidthRow(),
            fullHeightRow(),
            (0 < window.navigator.userAgent.indexOf("MSIE ") ||
              navigator.userAgent.match(/Trident.*rv\:11\./)) &&
              $(".vc_row-o-full-height").each(function () {
                "flex" === $(this).css("display") &&
                  $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>');
              }),
            vc_initVideoBackgrounds(),
            (callSkrollInit = !1),
            window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
            $(".vc_parallax-inner").remove(),
            $("[data-5p-top-bottom]").removeAttr(
              "data-5p-top-bottom data-30p-top-bottom"
            ),
            $("[data-vc-parallax]").each(function () {
              var skrollrSize,
                skrollrStart,
                $parallaxElement,
                parallaxImage,
                youtubeId;
              (callSkrollInit = !0),
                "on" === $(this).data("vcParallaxOFade") &&
                  $(this)
                    .children()
                    .attr("data-5p-top-bottom", "opacity:0;")
                    .attr("data-30p-top-bottom", "opacity:1;"),
                (skrollrSize = 100 * $(this).data("vcParallax")),
                ($parallaxElement = $("<div />")
                  .addClass("vc_parallax-inner")
                  .appendTo($(this))).height(skrollrSize + "%"),
                (parallaxImage = $(this).data("vcParallaxImage")),
                (youtubeId = vcExtractYoutubeId(parallaxImage))
                  ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId)
                  : void 0 !== parallaxImage &&
                    $parallaxElement.css(
                      "background-image",
                      "url(" + parallaxImage + ")"
                    ),
                (skrollrStart = -(skrollrSize - 100)),
                $parallaxElement
                  .attr("data-bottom-top", "top: " + skrollrStart + "%;")
                  .attr("data-top-bottom", "top: 0%;");
            }),
            callSkrollInit &&
              window.skrollr &&
              ((vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function () {
                  return !1;
                },
              }),
              (window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions)),
              window.vcParallaxSkroll);
        }),
      "function" != typeof window.vc_gridBehaviour &&
        (window.vc_gridBehaviour = function () {
          jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid();
        }),
      "function" != typeof window.getColumnsCount &&
        (window.getColumnsCount = function (el) {
          for (var find = !1, i = 1; !1 === find; ) {
            if (el.hasClass("columns_count_" + i)) return (find = !0), i;
            i++;
          }
        });
    var screen_size = getSizeName();
    function getSizeName() {
      var screen_w = jQuery(window).width();
      return 1170 < screen_w
        ? "desktop_wide"
        : 960 < screen_w && screen_w < 1169
        ? "desktop"
        : 768 < screen_w && screen_w < 959
        ? "tablet"
        : 300 < screen_w && screen_w < 767
        ? "mobile"
        : screen_w < 300
        ? "mobile_portrait"
        : "";
    }
    "function" != typeof window.wpb_prepare_tab_content &&
      (window.wpb_prepare_tab_content = function (event, ui) {
        var $ui_panel,
          $google_maps,
          panel = ui.panel || ui.newPanel,
          $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
          $round_charts = panel.find(".vc_round-chart"),
          $line_charts = panel.find(".vc_line-chart"),
          $carousel = panel.find('[data-ride="vc_carousel"]');
        if (
          (vc_carouselBehaviour(),
          vc_plugin_flexslider(panel),
          ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
            ui.newPanel
              .find(".vc_masonry_media_grid, .vc_masonry_grid")
              .each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid &&
                  grid.gridBuilder &&
                  grid.gridBuilder.setMasonry &&
                  grid.gridBuilder.setMasonry();
              }),
          panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
            panel
              .find(".vc_masonry_media_grid, .vc_masonry_grid")
              .each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid &&
                  grid.gridBuilder &&
                  grid.gridBuilder.setMasonry &&
                  grid.gridBuilder.setMasonry();
              }),
          $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
          $round_charts.length &&
            jQuery.fn.vcRoundChart &&
            $round_charts.vcRoundChart({ reload: !1 }),
          $line_charts.length &&
            jQuery.fn.vcLineChart &&
            $line_charts.vcLineChart({ reload: !1 }),
          $carousel.length &&
            jQuery.fn.carousel &&
            $carousel.carousel("resizeAction"),
          ($ui_panel = panel.find(".isotope, .wpb_image_grid_ul")),
          ($google_maps = panel.find(".wpb_gmaps_widget")),
          0 < $ui_panel.length && $ui_panel.isotope("layout"),
          $google_maps.length && !$google_maps.is(".map_ready"))
        ) {
          var $frame = $google_maps.find("iframe");
          $frame.attr("src", $frame.attr("src")),
            $google_maps.addClass("map_ready");
        }
        panel.parents(".isotope").length &&
          panel.parents(".isotope").each(function () {
            jQuery(this).isotope("layout");
          });
      }),
      "function" != typeof window.vc_ttaActivation &&
        (window.vc_ttaActivation = function () {
          jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
            var $ = window.jQuery,
              ui = {};
            (ui.newPanel = $(this).data("vc.accordion").getTarget()),
              window.wpb_prepare_tab_content(e, ui);
          });
        }),
      "function" != typeof window.vc_accordionActivate &&
        (window.vc_accordionActivate = function (event, ui) {
          if (ui.newPanel.length && ui.newHeader.length) {
            var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
              $round_charts = ui.newPanel.find(".vc_round-chart"),
              $line_charts = ui.newPanel.find(".vc_line-chart"),
              $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
            void 0 !== jQuery.fn.isotope &&
              ui.newPanel
                .find(".isotope, .wpb_image_grid_ul")
                .isotope("layout"),
              ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid")
                .length &&
                ui.newPanel
                  .find(".vc_masonry_media_grid, .vc_masonry_grid")
                  .each(function () {
                    var grid = jQuery(this).data("vcGrid");
                    grid &&
                      grid.gridBuilder &&
                      grid.gridBuilder.setMasonry &&
                      grid.gridBuilder.setMasonry();
                  }),
              vc_carouselBehaviour(ui.newPanel),
              vc_plugin_flexslider(ui.newPanel),
              $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
              $round_charts.length &&
                jQuery.fn.vcRoundChart &&
                $round_charts.vcRoundChart({ reload: !1 }),
              $line_charts.length &&
                jQuery.fn.vcLineChart &&
                $line_charts.vcLineChart({ reload: !1 }),
              $carousel.length &&
                jQuery.fn.carousel &&
                $carousel.carousel("resizeAction"),
              ui.newPanel.parents(".isotope").length &&
                ui.newPanel.parents(".isotope").each(function () {
                  jQuery(this).isotope("layout");
                });
          }
        }),
      "function" != typeof window.initVideoBackgrounds &&
        (window.initVideoBackgrounds = function () {
          return (
            window.console &&
              window.console.warn &&
              window.console.warn(
                "this function is deprecated use vc_initVideoBackgrounds"
              ),
            vc_initVideoBackgrounds()
          );
        }),
      "function" != typeof window.vc_initVideoBackgrounds &&
        (window.vc_initVideoBackgrounds = function () {
          jQuery("[data-vc-video-bg]").each(function () {
            var youtubeUrl,
              youtubeId,
              $element = jQuery(this);
            $element.data("vcVideoBg")
              ? ((youtubeUrl = $element.data("vcVideoBg")),
                (youtubeId = vcExtractYoutubeId(youtubeUrl)) &&
                  ($element.find(".vc_video-bg").remove(),
                  insertYoutubeVideoAsBackground($element, youtubeId)),
                jQuery(window).on("grid:items:added", function (event, $grid) {
                  $element.has($grid).length &&
                    vcResizeVideoBackground($element);
                }))
              : $element.find(".vc_video-bg").remove();
          });
        }),
      "function" != typeof window.insertYoutubeVideoAsBackground &&
        (window.insertYoutubeVideoAsBackground = function (
          $element,
          youtubeId,
          counter
        ) {
          if ("undefined" == typeof YT || void 0 === YT.Player)
            return 100 < (counter = void 0 === counter ? 0 : counter)
              ? void console.warn("Too many attempts to load YouTube api")
              : void setTimeout(function () {
                  insertYoutubeVideoAsBackground(
                    $element,
                    youtubeId,
                    counter++
                  );
                }, 100);
          var $container = $element
            .prepend(
              '<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>'
            )
            .find(".inner");
          new YT.Player($container[0], {
            width: "100%",
            height: "100%",
            videoId: youtubeId,
            playerVars: {
              playlist: youtubeId,
              iv_load_policy: 3,
              enablejsapi: 1,
              disablekb: 1,
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              loop: 1,
              wmode: "transparent",
            },
            events: {
              onReady: function (event) {
                event.target.mute().setLoop(!0);
              },
            },
          }),
            vcResizeVideoBackground($element),
            jQuery(window).bind("resize", function () {
              vcResizeVideoBackground($element);
            });
        }),
      "function" != typeof window.vcResizeVideoBackground &&
        (window.vcResizeVideoBackground = function ($element) {
          var iframeW,
            iframeH,
            marginLeft,
            marginTop,
            containerW = $element.innerWidth(),
            containerH = $element.innerHeight();
          containerW / containerH < 16 / 9
            ? ((iframeW = containerH * (16 / 9)),
              (iframeH = containerH),
              (marginLeft = -Math.round((iframeW - containerW) / 2) + "px"),
              (marginTop = -Math.round((iframeH - containerH) / 2) + "px"))
            : ((iframeH = (iframeW = containerW) * (9 / 16)),
              (marginTop = -Math.round((iframeH - containerH) / 2) + "px"),
              (marginLeft = -Math.round((iframeW - containerW) / 2) + "px")),
            (iframeW += "px"),
            (iframeH += "px"),
            $element
              .find(".vc_video-bg iframe")
              .css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH,
              });
        }),
      "function" != typeof window.vcExtractYoutubeId &&
        (window.vcExtractYoutubeId = function (url) {
          if (void 0 === url) return !1;
          var id = url.match(
            /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
          );
          return null !== id && id[1];
        }),
      "function" != typeof window.vc_googleMapsPointer &&
        (window.vc_googleMapsPointer = function () {
          var $ = window.jQuery,
            $wpbGmapsWidget = $(".wpb_gmaps_widget");
          $wpbGmapsWidget.on("click", function () {
            $("iframe", this).css("pointer-events", "auto");
          }),
            $wpbGmapsWidget.on("mouseleave", function () {
              $("iframe", this).css("pointer-events", "none");
            }),
            $(".wpb_gmaps_widget iframe").css("pointer-events", "none");
        }),
      "function" != typeof window.vc_setHoverBoxPerspective &&
        (window.vc_setHoverBoxPerspective = function (hoverBox) {
          hoverBox.each(function () {
            var $this = jQuery(this),
              perspective = 4 * $this.width() + "px";
            $this.css("perspective", perspective);
          });
        }),
      "function" != typeof window.vc_setHoverBoxHeight &&
        (window.vc_setHoverBoxHeight = function (hoverBox) {
          hoverBox.each(function () {
            var $this = jQuery(this),
              hoverBoxInner = $this.find(".vc-hoverbox-inner");
            hoverBoxInner.css("min-height", 0);
            var frontHeight = $this
                .find(".vc-hoverbox-front-inner")
                .outerHeight(),
              backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
              hoverBoxHeight =
                backHeight < frontHeight ? frontHeight : backHeight;
            hoverBoxHeight < 250 && (hoverBoxHeight = 250),
              hoverBoxInner.css("min-height", hoverBoxHeight + "px");
          });
        }),
      "function" != typeof window.vc_prepareHoverBox &&
        (window.vc_prepareHoverBox = function () {
          var hoverBox = jQuery(".vc-hoverbox");
          vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox);
        }),
      jQuery(document).ready(window.vc_prepareHoverBox),
      jQuery(window).resize(window.vc_prepareHoverBox),
      jQuery(document).ready(function ($) {
        window.vc_js();
      });
  })(window.jQuery);
window.addComment = (function (u) {
  var p,
    v,
    f,
    y = u.document,
    I = {
      commentReplyClass: "comment-reply-link",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID",
    },
    e = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver,
    o = "querySelector" in y && "addEventListener" in u,
    n = !!y.documentElement.dataset;
  function t() {
    r(), e && new e(d).observe(y.body, { childList: !0, subTree: !0 });
  }
  function r(e) {
    if (o && ((p = h(I.cancelReplyId)), (v = h(I.commentFormId)), p)) {
      p.addEventListener("touchstart", i), p.addEventListener("click", i);
      for (
        var t,
          n = (function (e) {
            var t = I.commentReplyClass;
            (e && e.childNodes) || (e = y);
            t = y.getElementsByClassName
              ? e.getElementsByClassName(t)
              : e.querySelectorAll("." + t);
            return t;
          })(e),
          r = 0,
          d = n.length;
        r < d;
        r++
      )
        (t = n[r]).addEventListener("touchstart", a),
          t.addEventListener("click", a);
    }
  }
  function i(e) {
    var t = h(I.temporaryFormId);
    t &&
      f &&
      ((h(I.parentIdFieldId).value = "0"),
      t.parentNode.replaceChild(f, t),
      (this.style.display = "none"),
      e.preventDefault());
  }
  function a(e) {
    var t = this,
      n = l(t, "belowelement"),
      r = l(t, "commentid"),
      d = l(t, "respondelement"),
      t = l(t, "postid");
    n &&
      r &&
      d &&
      t &&
      !1 === u.addComment.moveForm(n, r, d, t) &&
      e.preventDefault();
  }
  function d(e) {
    for (var t = e.length; t--; ) if (e[t].addedNodes.length) return void r();
  }
  function l(e, t) {
    return n ? e.dataset[t] : e.getAttribute("data-" + t);
  }
  function h(e) {
    return y.getElementById(e);
  }
  return (
    o && "loading" !== y.readyState
      ? t()
      : o && u.addEventListener("DOMContentLoaded", t, !1),
    {
      init: r,
      moveForm: function (e, t, n, r) {
        var d = h(e);
        f = h(n);
        var o,
          i,
          a,
          l,
          m = h(I.parentIdFieldId),
          s = h(I.postIdFieldId);
        if (d && f && m) {
          (l = f),
            (e = I.temporaryFormId),
            (n = h(e)) ||
              (((n = y.createElement("div")).id = e),
              (n.style.display = "none"),
              l.parentNode.insertBefore(n, l)),
            r && s && (s.value = r),
            (m.value = t),
            (p.style.display = ""),
            d.parentNode.insertBefore(f, d.nextSibling),
            (p.onclick = function () {
              return !1;
            });
          try {
            for (var c = 0; c < v.elements.length; c++)
              if (
                ((o = v.elements[c]),
                (i = !1),
                "getComputedStyle" in u
                  ? (a = u.getComputedStyle(o))
                  : y.documentElement.currentStyle && (a = o.currentStyle),
                ((o.offsetWidth <= 0 && o.offsetHeight <= 0) ||
                  "hidden" === a.visibility) &&
                  (i = !0),
                "hidden" !== o.type && !o.disabled && !i)
              ) {
                o.focus();
                break;
              }
          } catch (e) {}
          return !1;
        }
      },
    }
  );
})(window);
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
        i.height(qodef.windowHeight).niceScroll({
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
              d.children().css({
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
              n.children().css({
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
                  o.stop().animate(
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
                n.find(".countdown-amount").css({
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
            e.find(".qodef-thumb").css({
              width:
                Math.round(window["slider_graphic_width_" + o][0] * f) + "px",
              height:
                Math.round(window["slider_graphic_height_" + o][0] * f) + "px",
            }),
            e.find(".qodef-slide-title").css({
              "font-size":
                Math.round(window["slider_title_" + o][0] * c) + "px",
              "line-height":
                Math.round(window["slider_title_" + o][1] * c) + "px",
              "letter-spacing":
                Math.round(window["slider_title_" + o][2] * c) + "px",
              "margin-bottom":
                Math.round(window["slider_title_" + o][3] * c) + "px",
            }),
            e.find(".qodef-slide-subtitle").css({
              "font-size":
                Math.round(window["slider_subtitle_" + o][0] * h) + "px",
              "line-height":
                Math.round(window["slider_subtitle_" + o][1] * h) + "px",
              "margin-bottom":
                Math.round(window["slider_subtitle_" + o][3] * h) + "px",
              "letter-spacing":
                Math.round(window["slider_subtitle_" + o][2] * q) + "px",
            }),
            e.find(".qodef-slide-text").css({
              "font-size": Math.round(window["slider_text_" + o][0] * p) + "px",
              "line-height":
                Math.round(window["slider_text_" + o][1] * p) + "px",
              "letter-spacing":
                Math.round(window["slider_text_" + o][2] * m) + "px",
            }),
            e.find(".qodef-btn:eq(0)").css({
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
            e.find(".qodef-btn:eq(1)").css({
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
                      e.stop().animate({
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

(function (a) {
  if (typeof define === "function" && define.amd && define.amd.jQuery) {
    define(["jquery"], a);
  } else {
    a(jQuery);
  }
})(function (f) {
  var p = "left",
    o = "right",
    e = "up",
    x = "down",
    c = "in",
    z = "out",
    m = "none",
    s = "auto",
    l = "swipe",
    t = "pinch",
    A = "tap",
    j = "doubletap",
    b = "longtap",
    y = "hold",
    D = "horizontal",
    u = "vertical",
    i = "all",
    r = 10,
    g = "start",
    k = "move",
    h = "end",
    q = "cancel",
    a = "ontouchstart" in window,
    v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
    d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
    B = "TouchSwipe";
  var n = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null,
    tap: null,
    doubleTap: null,
    longTap: null,
    hold: null,
    triggerOnTouchEnd: true,
    triggerOnTouchLeave: false,
    allowPageScroll: "auto",
    fallbackToMouseEvents: true,
    excludedElements: "label, button, input, select, textarea, a, .noSwipe",
  };
  f.fn.swipe = function (G) {
    var F = f(this),
      E = F.data(B);
    if (E && typeof G === "string") {
      if (E[G]) {
        return E[G].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        f.error("Method " + G + " does not exist on jQuery.swipe");
      }
    } else {
      if (!E && (typeof G === "object" || !G)) {
        return w.apply(this, arguments);
      }
    }
    return F;
  };
  f.fn.swipe.defaults = n;
  f.fn.swipe.phases = {
    PHASE_START: g,
    PHASE_MOVE: k,
    PHASE_END: h,
    PHASE_CANCEL: q,
  };
  f.fn.swipe.directions = { LEFT: p, RIGHT: o, UP: e, DOWN: x, IN: c, OUT: z };
  f.fn.swipe.pageScroll = { NONE: m, HORIZONTAL: D, VERTICAL: u, AUTO: s };
  f.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: i };
  function w(E) {
    if (
      E &&
      E.allowPageScroll === undefined &&
      (E.swipe !== undefined || E.swipeStatus !== undefined)
    ) {
      E.allowPageScroll = m;
    }
    if (E.click !== undefined && E.tap === undefined) {
      E.tap = E.click;
    }
    if (!E) {
      E = {};
    }
    E = f.extend({}, f.fn.swipe.defaults, E);
    return this.each(function () {
      var G = f(this);
      var F = G.data(B);
      if (!F) {
        F = new C(this, E);
        G.data(B, F);
      }
    });
  }
  function C(a4, av) {
    var az = a || d || !av.fallbackToMouseEvents,
      J = az
        ? d
          ? v
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      ay = az
        ? d
          ? v
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      U = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
      S = az ? null : "mouseleave",
      aD = d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel";
    var ag = 0,
      aP = null,
      ab = 0,
      a1 = 0,
      aZ = 0,
      G = 1,
      aq = 0,
      aJ = 0,
      M = null;
    var aR = f(a4);
    var Z = "start";
    var W = 0;
    var aQ = null;
    var T = 0,
      a2 = 0,
      a5 = 0,
      ad = 0,
      N = 0;
    var aW = null,
      af = null;
    try {
      aR.bind(J, aN);
      aR.bind(aD, a9);
    } catch (ak) {
      f.error("events not supported " + J + "," + aD + " on jQuery.swipe");
    }
    this.enable = function () {
      aR.bind(J, aN);
      aR.bind(aD, a9);
      return aR;
    };
    this.disable = function () {
      aK();
      return aR;
    };
    this.destroy = function () {
      aK();
      aR.data(B, null);
      return aR;
    };
    this.option = function (bc, bb) {
      if (av[bc] !== undefined) {
        if (bb === undefined) {
          return av[bc];
        } else {
          av[bc] = bb;
        }
      } else {
        f.error("Option " + bc + " does not exist on jQuery.swipe.options");
      }
      return null;
    };
    function aN(bd) {
      if (aB()) {
        return;
      }
      if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
        return;
      }
      var be = bd.originalEvent ? bd.originalEvent : bd;
      var bc,
        bb = a ? be.touches[0] : be;
      Z = g;
      if (a) {
        W = be.touches.length;
      } else {
        bd.preventDefault();
      }
      ag = 0;
      aP = null;
      aJ = null;
      ab = 0;
      a1 = 0;
      aZ = 0;
      G = 1;
      aq = 0;
      aQ = aj();
      M = aa();
      R();
      if (!a || W === av.fingers || av.fingers === i || aX()) {
        ai(0, bb);
        T = at();
        if (W == 2) {
          ai(1, be.touches[1]);
          a1 = aZ = au(aQ[0].start, aQ[1].start);
        }
        if (av.swipeStatus || av.pinchStatus) {
          bc = O(be, Z);
        }
      } else {
        bc = false;
      }
      if (bc === false) {
        Z = q;
        O(be, Z);
        return bc;
      } else {
        if (av.hold) {
          af = setTimeout(
            f.proxy(function () {
              aR.trigger("hold", [be.target]);
              if (av.hold) {
                bc = av.hold.call(aR, be, be.target);
              }
            }, this),
            av.longTapThreshold
          );
        }
        ao(true);
      }
      return null;
    }
    function a3(be) {
      var bh = be.originalEvent ? be.originalEvent : be;
      if (Z === h || Z === q || am()) {
        return;
      }
      var bd,
        bc = a ? bh.touches[0] : bh;
      var bf = aH(bc);
      a2 = at();
      if (a) {
        W = bh.touches.length;
      }
      if (av.hold) {
        clearTimeout(af);
      }
      Z = k;
      if (W == 2) {
        if (a1 == 0) {
          ai(1, bh.touches[1]);
          a1 = aZ = au(aQ[0].start, aQ[1].start);
        } else {
          aH(bh.touches[1]);
          aZ = au(aQ[0].end, aQ[1].end);
          aJ = ar(aQ[0].end, aQ[1].end);
        }
        G = a7(a1, aZ);
        aq = Math.abs(a1 - aZ);
      }
      if (W === av.fingers || av.fingers === i || !a || aX()) {
        aP = aL(bf.start, bf.end);
        al(be, aP);
        ag = aS(bf.start, bf.end);
        ab = aM();
        aI(aP, ag);
        if (av.swipeStatus || av.pinchStatus) {
          bd = O(bh, Z);
        }
        if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
          var bb = true;
          if (av.triggerOnTouchLeave) {
            var bg = aY(this);
            bb = E(bf.end, bg);
          }
          if (!av.triggerOnTouchEnd && bb) {
            Z = aC(k);
          } else {
            if (av.triggerOnTouchLeave && !bb) {
              Z = aC(h);
            }
          }
          if (Z == q || Z == h) {
            O(bh, Z);
          }
        }
      } else {
        Z = q;
        O(bh, Z);
      }
      if (bd === false) {
        Z = q;
        O(bh, Z);
      }
    }
    function L(bb) {
      var bc = bb.originalEvent;
      if (a) {
        if (bc.touches.length > 0) {
          F();
          return true;
        }
      }
      if (am()) {
        W = ad;
      }
      a2 = at();
      ab = aM();
      if (ba() || !an()) {
        Z = q;
        O(bc, Z);
      } else {
        if (
          av.triggerOnTouchEnd ||
          (av.triggerOnTouchEnd == false && Z === k)
        ) {
          bb.preventDefault();
          Z = h;
          O(bc, Z);
        } else {
          if (!av.triggerOnTouchEnd && a6()) {
            Z = h;
            aF(bc, Z, A);
          } else {
            if (Z === k) {
              Z = q;
              O(bc, Z);
            }
          }
        }
      }
      ao(false);
      return null;
    }
    function a9() {
      W = 0;
      a2 = 0;
      T = 0;
      a1 = 0;
      aZ = 0;
      G = 1;
      R();
      ao(false);
    }
    function K(bb) {
      var bc = bb.originalEvent;
      if (av.triggerOnTouchLeave) {
        Z = aC(h);
        O(bc, Z);
      }
    }
    function aK() {
      aR.unbind(J, aN);
      aR.unbind(aD, a9);
      aR.unbind(ay, a3);
      aR.unbind(U, L);
      if (S) {
        aR.unbind(S, K);
      }
      ao(false);
    }
    function aC(bf) {
      var be = bf;
      var bd = aA();
      var bc = an();
      var bb = ba();
      if (!bd || bb) {
        be = q;
      } else {
        if (
          bc &&
          bf == k &&
          (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)
        ) {
          be = h;
        } else {
          if (!bc && bf == h && av.triggerOnTouchLeave) {
            be = q;
          }
        }
      }
      return be;
    }
    function O(bd, bb) {
      var bc = undefined;
      if (I() || V()) {
        bc = aF(bd, bb, l);
      } else {
        if ((P() || aX()) && bc !== false) {
          bc = aF(bd, bb, t);
        }
      }
      if (aG() && bc !== false) {
        bc = aF(bd, bb, j);
      } else {
        if (ap() && bc !== false) {
          bc = aF(bd, bb, b);
        } else {
          if (ah() && bc !== false) {
            bc = aF(bd, bb, A);
          }
        }
      }
      if (bb === q) {
        a9(bd);
      }
      if (bb === h) {
        if (a) {
          if (bd.touches.length == 0) {
            a9(bd);
          }
        } else {
          a9(bd);
        }
      }
      return bc;
    }
    function aF(be, bb, bd) {
      var bc = undefined;
      if (bd == l) {
        aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ab || 0, W, aQ]);
        if (av.swipeStatus) {
          bc = av.swipeStatus.call(
            aR,
            be,
            bb,
            aP || null,
            ag || 0,
            ab || 0,
            W,
            aQ
          );
          if (bc === false) {
            return false;
          }
        }
        if (bb == h && aV()) {
          aR.trigger("swipe", [aP, ag, ab, W, aQ]);
          if (av.swipe) {
            bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
            if (bc === false) {
              return false;
            }
          }
          switch (aP) {
            case p:
              aR.trigger("swipeLeft", [aP, ag, ab, W, aQ]);
              if (av.swipeLeft) {
                bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ);
              }
              break;
            case o:
              aR.trigger("swipeRight", [aP, ag, ab, W, aQ]);
              if (av.swipeRight) {
                bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ);
              }
              break;
            case e:
              aR.trigger("swipeUp", [aP, ag, ab, W, aQ]);
              if (av.swipeUp) {
                bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ);
              }
              break;
            case x:
              aR.trigger("swipeDown", [aP, ag, ab, W, aQ]);
              if (av.swipeDown) {
                bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ);
              }
              break;
          }
        }
      }
      if (bd == t) {
        aR.trigger("pinchStatus", [bb, aJ || null, aq || 0, ab || 0, W, G, aQ]);
        if (av.pinchStatus) {
          bc = av.pinchStatus.call(
            aR,
            be,
            bb,
            aJ || null,
            aq || 0,
            ab || 0,
            W,
            G,
            aQ
          );
          if (bc === false) {
            return false;
          }
        }
        if (bb == h && a8()) {
          switch (aJ) {
            case c:
              aR.trigger("pinchIn", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
              if (av.pinchIn) {
                bc = av.pinchIn.call(
                  aR,
                  be,
                  aJ || null,
                  aq || 0,
                  ab || 0,
                  W,
                  G,
                  aQ
                );
              }
              break;
            case z:
              aR.trigger("pinchOut", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
              if (av.pinchOut) {
                bc = av.pinchOut.call(
                  aR,
                  be,
                  aJ || null,
                  aq || 0,
                  ab || 0,
                  W,
                  G,
                  aQ
                );
              }
              break;
          }
        }
      }
      if (bd == A) {
        if (bb === q || bb === h) {
          clearTimeout(aW);
          clearTimeout(af);
          if (Y() && !H()) {
            N = at();
            aW = setTimeout(
              f.proxy(function () {
                N = null;
                aR.trigger("tap", [be.target]);
                if (av.tap) {
                  bc = av.tap.call(aR, be, be.target);
                }
              }, this),
              av.doubleTapThreshold
            );
          } else {
            N = null;
            aR.trigger("tap", [be.target]);
            if (av.tap) {
              bc = av.tap.call(aR, be, be.target);
            }
          }
        }
      } else {
        if (bd == j) {
          if (bb === q || bb === h) {
            clearTimeout(aW);
            N = null;
            aR.trigger("doubletap", [be.target]);
            if (av.doubleTap) {
              bc = av.doubleTap.call(aR, be, be.target);
            }
          }
        } else {
          if (bd == b) {
            if (bb === q || bb === h) {
              clearTimeout(aW);
              N = null;
              aR.trigger("longtap", [be.target]);
              if (av.longTap) {
                bc = av.longTap.call(aR, be, be.target);
              }
            }
          }
        }
      }
      return bc;
    }
    function an() {
      var bb = true;
      if (av.threshold !== null) {
        bb = ag >= av.threshold;
      }
      return bb;
    }
    function ba() {
      var bb = false;
      if (av.cancelThreshold !== null && aP !== null) {
        bb = aT(aP) - ag >= av.cancelThreshold;
      }
      return bb;
    }
    function ae() {
      if (av.pinchThreshold !== null) {
        return aq >= av.pinchThreshold;
      }
      return true;
    }
    function aA() {
      var bb;
      if (av.maxTimeThreshold) {
        if (ab >= av.maxTimeThreshold) {
          bb = false;
        } else {
          bb = true;
        }
      } else {
        bb = true;
      }
      return bb;
    }
    function al(bb, bc) {
      if (av.allowPageScroll === m || aX()) {
        bb.preventDefault();
      } else {
        var bd = av.allowPageScroll === s;
        switch (bc) {
          case p:
            if ((av.swipeLeft && bd) || (!bd && av.allowPageScroll != D)) {
              bb.preventDefault();
            }
            break;
          case o:
            if ((av.swipeRight && bd) || (!bd && av.allowPageScroll != D)) {
              bb.preventDefault();
            }
            break;
          case e:
            if ((av.swipeUp && bd) || (!bd && av.allowPageScroll != u)) {
              bb.preventDefault();
            }
            break;
          case x:
            if ((av.swipeDown && bd) || (!bd && av.allowPageScroll != u)) {
              bb.preventDefault();
            }
            break;
        }
      }
    }
    function a8() {
      var bc = aO();
      var bb = X();
      var bd = ae();
      return bc && bb && bd;
    }
    function aX() {
      return !!(av.pinchStatus || av.pinchIn || av.pinchOut);
    }
    function P() {
      return !!(a8() && aX());
    }
    function aV() {
      var be = aA();
      var bg = an();
      var bd = aO();
      var bb = X();
      var bc = ba();
      var bf = !bc && bb && bd && bg && be;
      return bf;
    }
    function V() {
      return !!(
        av.swipe ||
        av.swipeStatus ||
        av.swipeLeft ||
        av.swipeRight ||
        av.swipeUp ||
        av.swipeDown
      );
    }
    function I() {
      return !!(aV() && V());
    }
    function aO() {
      return W === av.fingers || av.fingers === i || !a;
    }
    function X() {
      return aQ[0].end.x !== 0;
    }
    function a6() {
      return !!av.tap;
    }
    function Y() {
      return !!av.doubleTap;
    }
    function aU() {
      return !!av.longTap;
    }
    function Q() {
      if (N == null) {
        return false;
      }
      var bb = at();
      return Y() && bb - N <= av.doubleTapThreshold;
    }
    function H() {
      return Q();
    }
    function ax() {
      return (W === 1 || !a) && (isNaN(ag) || ag < av.threshold);
    }
    function a0() {
      return ab > av.longTapThreshold && ag < r;
    }
    function ah() {
      return !!(ax() && a6());
    }
    function aG() {
      return !!(Q() && Y());
    }
    function ap() {
      return !!(a0() && aU());
    }
    function F() {
      a5 = at();
      ad = event.touches.length + 1;
    }
    function R() {
      a5 = 0;
      ad = 0;
    }
    function am() {
      var bb = false;
      if (a5) {
        var bc = at() - a5;
        if (bc <= av.fingerReleaseThreshold) {
          bb = true;
        }
      }
      return bb;
    }
    function aB() {
      return !!(aR.data(B + "_intouch") === true);
    }
    function ao(bb) {
      if (bb === true) {
        aR.bind(ay, a3);
        aR.bind(U, L);
        if (S) {
          aR.bind(S, K);
        }
      } else {
        aR.unbind(ay, a3, false);
        aR.unbind(U, L, false);
        if (S) {
          aR.unbind(S, K, false);
        }
      }
      aR.data(B + "_intouch", bb === true);
    }
    function ai(bc, bb) {
      var bd = bb.identifier !== undefined ? bb.identifier : 0;
      aQ[bc].identifier = bd;
      aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
      aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
      return aQ[bc];
    }
    function aH(bb) {
      var bd = bb.identifier !== undefined ? bb.identifier : 0;
      var bc = ac(bd);
      bc.end.x = bb.pageX || bb.clientX;
      bc.end.y = bb.pageY || bb.clientY;
      return bc;
    }
    function ac(bc) {
      for (var bb = 0; bb < aQ.length; bb++) {
        if (aQ[bb].identifier == bc) {
          return aQ[bb];
        }
      }
    }
    function aj() {
      var bb = [];
      for (var bc = 0; bc <= 5; bc++) {
        bb.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 });
      }
      return bb;
    }
    function aI(bb, bc) {
      bc = Math.max(bc, aT(bb));
      M[bb].distance = bc;
    }
    function aT(bb) {
      if (M[bb]) {
        return M[bb].distance;
      }
      return undefined;
    }
    function aa() {
      var bb = {};
      bb[p] = aw(p);
      bb[o] = aw(o);
      bb[e] = aw(e);
      bb[x] = aw(x);
      return bb;
    }
    function aw(bb) {
      return { direction: bb, distance: 0 };
    }
    function aM() {
      return a2 - T;
    }
    function au(be, bd) {
      var bc = Math.abs(be.x - bd.x);
      var bb = Math.abs(be.y - bd.y);
      return Math.round(Math.sqrt(bc * bc + bb * bb));
    }
    function a7(bb, bc) {
      var bd = (bc / bb) * 1;
      return bd.toFixed(2);
    }
    function ar() {
      if (G < 1) {
        return z;
      } else {
        return c;
      }
    }
    function aS(bc, bb) {
      return Math.round(
        Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2))
      );
    }
    function aE(be, bc) {
      var bb = be.x - bc.x;
      var bg = bc.y - be.y;
      var bd = Math.atan2(bg, bb);
      var bf = Math.round((bd * 180) / Math.PI);
      if (bf < 0) {
        bf = 360 - Math.abs(bf);
      }
      return bf;
    }
    function aL(bc, bb) {
      var bd = aE(bc, bb);
      if (bd <= 45 && bd >= 0) {
        return p;
      } else {
        if (bd <= 360 && bd >= 315) {
          return p;
        } else {
          if (bd >= 135 && bd <= 225) {
            return o;
          } else {
            if (bd > 45 && bd < 135) {
              return x;
            } else {
              return e;
            }
          }
        }
      }
    }
    function at() {
      var bb = new Date();
      return bb.getTime();
    }
    function aY(bb) {
      bb = f(bb);
      var bd = bb.offset();
      var bc = {
        left: bd.left,
        right: bd.left + bb.outerWidth(),
        top: bd.top,
        bottom: bd.top + bb.outerHeight(),
      };
      return bc;
    }
    function E(bb, bc) {
      return (
        bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom
      );
    }
  }
});
+(function ($) {
  "use strict";
  function transitionEnd() {
    var el = document.createElement("bootstrap");
    var transEndEventNames = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend",
    };
    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }
    return false;
  }
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one("bsTransitionEnd", function () {
      called = true;
    });
    var callback = function () {
      if (!called) $($el).trigger($.support.transition.end);
    };
    setTimeout(callback, duration);
    return this;
  };
  $(function () {
    $.support.transition = transitionEnd();
    if (!$.support.transition) return;
    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this))
          return e.handleObj.handler.apply(this, arguments);
      },
    };
  });
})(jQuery);
+(function ($) {
  "use strict";
  var Carousel = function (element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find(".carousel-indicators");
    this.options = options;
    this.paused = null;
    this.sliding = null;
    this.interval = null;
    this.$active = null;
    this.$items = null;
    this.options.keyboard &&
      this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));
    this.options.pause == "hover" &&
      !("ontouchstart" in document.documentElement) &&
      this.$element
        .on("mouseenter.bs.carousel", $.proxy(this.pause, this))
        .on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
  };
  Carousel.VERSION = "3.3.5";
  Carousel.TRANSITION_DURATION = 600;
  Carousel.DEFAULTS = {
    interval: 5000,
    pause: "hover",
    wrap: true,
    keyboard: true,
  };
  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return;
    switch (e.which) {
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        return;
    }
    e.preventDefault();
  };
  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);
    this.interval && clearInterval(this.interval);
    this.options.interval &&
      !this.paused &&
      (this.interval = setInterval(
        $.proxy(this.next, this),
        this.options.interval
      ));
    return this;
  };
  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children(".item");
    return this.$items.index(item || this.$active);
  };
  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active);
    var willWrap =
      (direction == "prev" && activeIndex === 0) ||
      (direction == "next" && activeIndex == this.$items.length - 1);
    if (willWrap && !this.options.wrap) return active;
    var delta = direction == "prev" ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this.$items.length;
    return this.$items.eq(itemIndex);
  };
  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getItemIndex(
      (this.$active = this.$element.find(".item.active"))
    );
    if (pos > this.$items.length - 1 || pos < 0) return;
    if (this.sliding)
      return this.$element.one("slid.bs.carousel", function () {
        that.to(pos);
      });
    if (activeIndex == pos) return this.pause().cycle();
    return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
  };
  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);
    if (this.$element.find(".next, .prev").length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }
    this.interval = clearInterval(this.interval);
    return this;
  };
  Carousel.prototype.next = function () {
    if (this.sliding) return;
    return this.slide("next");
  };
  Carousel.prototype.prev = function () {
    if (this.sliding) return;
    return this.slide("prev");
  };
  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find(".item.active");
    var $next = next || this.getItemForDirection(type, $active);
    var isCycling = this.interval;
    var direction = type == "next" ? "left" : "right";
    var that = this;
    if ($next.hasClass("active")) return (this.sliding = false);
    var relatedTarget = $next[0];
    var slideEvent = $.Event("slide.bs.carousel", {
      relatedTarget: relatedTarget,
      direction: direction,
    });
    this.$element.trigger(slideEvent);
    if (slideEvent.isDefaultPrevented()) return;
    this.sliding = true;
    isCycling && this.pause();
    if (this.$indicators.length) {
      this.$indicators.find(".active").removeClass("active");
      var $nextIndicator = $(
        this.$indicators.children()[this.getItemIndex($next)]
      );
      $nextIndicator && $nextIndicator.addClass("active");
    }
    var slidEvent = $.Event("slid.bs.carousel", {
      relatedTarget: relatedTarget,
      direction: direction,
    });
    var $this = this.$element.hasClass("qodef-header-effect");
    if ($.support.transition && this.$element.hasClass("slide")) {
      var timer;
      timer = setTimeout(function () {
        qodef.modules.shortcodes.qodefCheckSliderForHeaderStyle($next, $this);
        $next.addClass(type);
        $next[0].offsetWidth;
        $active.addClass(direction);
        $next.addClass(direction);
        $active
          .one("bsTransitionEnd", function () {
            $next.removeClass([type, direction].join(" ")).addClass("active");
            $active.removeClass(["active", direction].join(" "));
            that.sliding = false;
            setTimeout(function () {
              that.$element.trigger(slidEvent);
            }, 0);
          })
          .emulateTransitionEnd(600);
        clearTimeout(timer);
      }, 300);
    } else {
      $active.removeClass("active");
      $next.addClass("active");
      this.sliding = false;
      this.$element.trigger(slidEvent);
    }
    isCycling && this.cycle();
    return this;
  };
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data("bs.carousel");
      var options = $.extend(
        {},
        Carousel.DEFAULTS,
        $this.data(),
        typeof option == "object" && option
      );
      var action = typeof option == "string" ? option : options.slide;
      if (!data)
        $this.data("bs.carousel", (data = new Carousel(this, options)));
      if (typeof option == "number") data.to(option);
      else if (action) data[action]();
      else if (options.interval) data.pause().cycle();
    });
  }
  var old = $.fn.carousel;
  $.fn.carousel = Plugin;
  $.fn.carousel.Constructor = Carousel;
  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  };
  var clickHandler = function (e) {
    var href;
    var $this = $(this);
    var $target = $(
      $this.attr("data-target") ||
        ((href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""))
    );
    if (!$target.hasClass("carousel")) return;
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr("data-slide-to");
    if (slideIndex) options.interval = false;
    Plugin.call($target, options);
    if (slideIndex) {
      $target.data("bs.carousel").to(slideIndex);
    }
    e.preventDefault();
  };
  $(document)
    .on("click.bs.carousel.data-api", "[data-slide]", clickHandler)
    .on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);
  $(window).on("load", function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    });
  });
})(jQuery);

function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
    : null;
}
function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}
function isInArray(e, a) {
  return a.indexOf(e) > -1;
}
var pJS = function (e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a),
    (i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance,
    }),
    (i.fn.retinaInit = function () {
      i.retina_detect && window.devicePixelRatio > 1
        ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0))
        : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
        (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
        (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
        (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
        (i.particles.size.anim.speed =
          i.tmp.obj.size_anim_speed * i.canvas.pxratio),
        (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
        (i.particles.line_linked.distance =
          i.tmp.obj.line_linked_distance * i.canvas.pxratio),
        (i.interactivity.modes.grab.distance =
          i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
        (i.interactivity.modes.bubble.distance =
          i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
        (i.particles.line_linked.width =
          i.tmp.obj.line_linked_width * i.canvas.pxratio),
        (i.interactivity.modes.bubble.size =
          i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
        (i.interactivity.modes.repulse.distance =
          i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
    }),
    (i.fn.canvasInit = function () {
      i.canvas.ctx = i.canvas.el.getContext("2d");
    }),
    (i.fn.canvasSize = function () {
      (i.canvas.el.width = i.canvas.w),
        (i.canvas.el.height = i.canvas.h),
        i &&
          i.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (i.canvas.w = i.canvas.el.offsetWidth),
              (i.canvas.h = i.canvas.el.offsetHeight),
              i.tmp.retina &&
                ((i.canvas.w *= i.canvas.pxratio),
                (i.canvas.h *= i.canvas.pxratio)),
              (i.canvas.el.width = i.canvas.w),
              (i.canvas.el.height = i.canvas.h),
              i.particles.move.enable ||
                (i.fn.particlesEmpty(),
                i.fn.particlesCreate(),
                i.fn.particlesDraw(),
                i.fn.vendors.densityAutoParticles()),
              i.fn.vendors.densityAutoParticles();
          });
    }),
    (i.fn.canvasPaint = function () {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.canvasClear = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.particle = function (e, a, t) {
      if (
        ((this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
        i.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = i.particles.size.anim.speed / 100),
          i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = t ? t.x : Math.random() * i.canvas.w),
        (this.y = t ? t.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
        (this.color = {}),
        "object" == typeof e.value)
      )
        if (e.value instanceof Array) {
          var s =
            e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(s);
        } else
          void 0 != e.value.r &&
            void 0 != e.value.g &&
            void 0 != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            void 0 != e.value.h &&
              void 0 != e.value.s &&
              void 0 != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (i.particles.opacity.random ? Math.random() : 1) *
        i.particles.opacity.value),
        i.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = i.particles.opacity.anim.speed / 100),
          i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var n = {};
      switch (i.particles.move.direction) {
        case "top":
          n = { x: 0, y: -1 };
          break;
        case "top-right":
          n = { x: 0.5, y: -0.5 };
          break;
        case "right":
          n = { x: 1, y: -0 };
          break;
        case "bottom-right":
          n = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          n = { x: 0, y: 1 };
          break;
        case "bottom-left":
          n = { x: -0.5, y: 1 };
          break;
        case "left":
          n = { x: -1, y: 0 };
          break;
        case "top-left":
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = n.x),
          (this.vy = n.y),
          i.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5),
          (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var r = i.particles.shape.type;
      if ("object" == typeof r) {
        if (r instanceof Array) {
          var c = r[Math.floor(Math.random() * r.length)];
          this.shape = c;
        }
      } else this.shape = r;
      if ("image" == this.shape) {
        var o = i.particles.shape;
        (this.img = {
          src: o.image.src,
          ratio: o.image.width / o.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == i.tmp.img_type &&
            void 0 != i.tmp.source_svg &&
            (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function () {
      function e() {
        i.canvas.ctx.drawImage(
          r,
          a.x - t,
          a.y - t,
          2 * t,
          (2 * t) / a.img.ratio
        );
      }
      var a = this;
      if (void 0 != a.radius_bubble) var t = a.radius_bubble;
      else var t = a.radius;
      if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
      else var s = a.opacity;
      if (a.color.rgb)
        var n =
          "rgba(" +
          a.color.rgb.r +
          "," +
          a.color.rgb.g +
          "," +
          a.color.rgb.b +
          "," +
          s +
          ")";
      else
        var n =
          "hsla(" +
          a.color.hsl.h +
          "," +
          a.color.hsl.s +
          "%," +
          a.color.hsl.l +
          "%," +
          s +
          ")";
      switch (
        ((i.canvas.ctx.fillStyle = n), i.canvas.ctx.beginPath(), a.shape)
      ) {
        case "circle":
          i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
          break;
        case "triangle":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - t,
            a.y + t / 1.66,
            2 * t,
            3,
            2
          );
          break;
        case "polygon":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - t / (i.particles.shape.polygon.nb_sides / 3.5),
            a.y - t / 0.76,
            (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4),
            a.y - t / 1.52,
            (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == i.tmp.img_type) var r = a.img.obj;
          else var r = i.tmp.img_obj;
          r && e();
      }
      i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 &&
          ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color),
          (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width),
          i.canvas.ctx.stroke()),
        i.canvas.ctx.fill();
    }),
    (i.fn.particlesCreate = function () {
      for (var e = 0; e < i.particles.number.value; e++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value)
        );
    }),
    (i.fn.particlesUpdate = function () {
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        if (i.particles.move.enable) {
          var t = i.particles.move.speed / 2;
          (a.x += a.vx * t), (a.y += a.vy * t);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (1 == a.opacity_status
              ? (a.opacity >= i.particles.opacity.value &&
                  (a.opacity_status = !1),
                (a.opacity += a.vo))
              : (a.opacity <= i.particles.opacity.anim.opacity_min &&
                  (a.opacity_status = !0),
                (a.opacity -= a.vo)),
            a.opacity < 0 && (a.opacity = 0)),
          i.particles.size.anim.enable &&
            (1 == a.size_status
              ? (a.radius >= i.particles.size.value && (a.size_status = !1),
                (a.radius += a.vs))
              : (a.radius <= i.particles.size.anim.size_min &&
                  (a.size_status = !0),
                (a.radius -= a.vs)),
            a.radius < 0 && (a.radius = 0)),
          "bounce" == i.particles.move.out_mode)
        )
          var s = {
            x_left: a.radius,
            x_right: i.canvas.w,
            y_top: a.radius,
            y_bottom: i.canvas.h,
          };
        else
          var s = {
            x_left: -a.radius,
            x_right: i.canvas.w + a.radius,
            y_top: -a.radius,
            y_bottom: i.canvas.h + a.radius,
          };
        switch (
          (a.x - a.radius > i.canvas.w
            ? ((a.x = s.x_left), (a.y = Math.random() * i.canvas.h))
            : a.x + a.radius < 0 &&
              ((a.x = s.x_right), (a.y = Math.random() * i.canvas.h)),
          a.y - a.radius > i.canvas.h
            ? ((a.y = s.y_top), (a.x = Math.random() * i.canvas.w))
            : a.y + a.radius < 0 &&
              ((a.y = s.y_bottom), (a.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case "bounce":
            a.x + a.radius > i.canvas.w
              ? (a.vx = -a.vx)
              : a.x - a.radius < 0 && (a.vx = -a.vx),
              a.y + a.radius > i.canvas.h
                ? (a.vy = -a.vy)
                : a.y - a.radius < 0 && (a.vy = -a.vy);
        }
        if (
          (isInArray("grab", i.interactivity.events.onhover.mode) &&
            i.fn.modes.grabParticle(a),
          (isInArray("bubble", i.interactivity.events.onhover.mode) ||
            isInArray("bubble", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.bubbleParticle(a),
          (isInArray("repulse", i.interactivity.events.onhover.mode) ||
            isInArray("repulse", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.repulseParticle(a),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (var n = e + 1; n < i.particles.array.length; n++) {
            var r = i.particles.array[n];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r),
              i.particles.move.attract.enable &&
                i.fn.interact.attractParticles(a, r),
              i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
          }
      }
    }),
    (i.fn.particlesDraw = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        a.draw();
      }
    }),
    (i.fn.particlesEmpty = function () {
      i.particles.array = [];
    }),
    (i.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        (i.tmp.source_svg = void 0),
        (i.tmp.img_obj = void 0),
        (i.tmp.count_svg = 0),
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start();
    }),
    (i.fn.interact.linkParticles = function (e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r =
          i.particles.line_linked.opacity -
          n /
            (1 / i.particles.line_linked.opacity) /
            i.particles.line_linked.distance;
        if (r > 0) {
          var c = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle =
            "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")"),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(a.x, a.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function (e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= r), (e.vy -= c), (a.vx += r), (a.vy += c);
      }
    }),
    (i.fn.interact.bounceParticles = function (e, a) {
      var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
      n >= s &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (a.vx = -a.vx), (a.vy = -a.vy));
    }),
    (i.fn.modes.pushParticles = function (e, a) {
      i.tmp.pushing = !0;
      for (var t = 0; e > t; t++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i.canvas.w,
            y: a ? a.pos_y : Math.random() * i.canvas.h,
          })
        ),
          t == e - 1 &&
            (i.particles.move.enable || i.fn.particlesDraw(),
            (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function (e) {
      i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function (e) {
      function a() {
        (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
      }
      function t(a, t, s, n, c) {
        if (a != t)
          if (i.tmp.bubble_duration_end) {
            if (void 0 != s) {
              var o = n - (p * (n - a)) / i.interactivity.modes.bubble.duration,
                l = a - o;
              (d = a + l),
                "size" == c && (e.radius_bubble = d),
                "opacity" == c && (e.opacity_bubble = d);
            }
          } else if (r <= i.interactivity.modes.bubble.distance) {
            if (void 0 != s) var v = s;
            else var v = n;
            if (v != a) {
              var d = n - (p * (n - a)) / i.interactivity.modes.bubble.duration;
              "size" == c && (e.radius_bubble = d),
                "opacity" == c && (e.opacity_bubble = d);
            }
          } else
            "size" == c && (e.radius_bubble = void 0),
              "opacity" == c && (e.opacity_bubble = void 0);
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
      ) {
        var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;
        if (r <= i.interactivity.modes.bubble.distance) {
          if (c >= 0 && "mousemove" == i.interactivity.status) {
            if (i.interactivity.modes.bubble.size != i.particles.size.value)
              if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                var o = e.radius + i.interactivity.modes.bubble.size * c;
                o >= 0 && (e.radius_bubble = o);
              } else {
                var l = e.radius - i.interactivity.modes.bubble.size,
                  o = e.radius - l * c;
                o > 0 ? (e.radius_bubble = o) : (e.radius_bubble = 0);
              }
            if (
              i.interactivity.modes.bubble.opacity != i.particles.opacity.value
            )
              if (
                i.interactivity.modes.bubble.opacity > i.particles.opacity.value
              ) {
                var v = i.interactivity.modes.bubble.opacity * c;
                v > e.opacity &&
                  v <= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = v);
              } else {
                var v =
                  e.opacity -
                  (i.particles.opacity.value -
                    i.interactivity.modes.bubble.opacity) *
                    c;
                v < e.opacity &&
                  v >= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = v);
              }
          }
        } else a();
        "mouseleave" == i.interactivity.status && a();
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("bubble", i.interactivity.events.onclick.mode)
      ) {
        if (i.tmp.bubble_clicking) {
          var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          p > i.interactivity.modes.bubble.duration &&
            (i.tmp.bubble_duration_end = !0),
            p > 2 * i.interactivity.modes.bubble.duration &&
              ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        i.tmp.bubble_clicking &&
          (t(
            i.interactivity.modes.bubble.size,
            i.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size"
          ),
          t(
            i.interactivity.modes.bubble.opacity,
            i.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity"
          ));
      }
    }),
    (i.fn.modes.repulseParticle = function (e) {
      function a() {
        var a = Math.atan2(d, p);
        if (
          ((e.vx = u * Math.cos(a)),
          (e.vy = u * Math.sin(a)),
          "bounce" == i.particles.move.out_mode)
        ) {
          var t = { x: e.x + e.vx, y: e.y + e.vy };
          t.x + e.radius > i.canvas.w
            ? (e.vx = -e.vx)
            : t.x - e.radius < 0 && (e.vx = -e.vx),
            t.y + e.radius > i.canvas.h
              ? (e.vy = -e.vy)
              : t.y - e.radius < 0 && (e.vy = -e.vy);
        }
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = { x: t / n, y: s / n },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp((1 / c) * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = { x: e.x + r.x * l, y: e.y + r.y * l };
        "bounce" == i.particles.move.out_mode
          ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x),
            v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y))
          : ((e.x = v.x), (e.y = v.y));
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("repulse", i.interactivity.events.onclick.mode)
      )
        if (
          (i.tmp.repulse_finish ||
            (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length &&
              (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking)
        ) {
          var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
            p = i.interactivity.mouse.click_pos_x - e.x,
            d = i.interactivity.mouse.click_pos_y - e.y,
            m = p * p + d * d,
            u = (-c / m) * 1;
          c >= m && a();
        } else
          0 == i.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
    }),
    (i.fn.modes.grabParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        "mousemove" == i.interactivity.status
      ) {
        var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);
        if (s <= i.interactivity.modes.grab.distance) {
          var n =
            i.interactivity.modes.grab.line_linked.opacity -
            s /
              (1 / i.interactivity.modes.grab.line_linked.opacity) /
              i.interactivity.modes.grab.distance;
          if (n > 0) {
            var r = i.particles.line_linked.color_rgb_line;
            (i.canvas.ctx.strokeStyle =
              "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")"),
              (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
              i.canvas.ctx.beginPath(),
              i.canvas.ctx.moveTo(e.x, e.y),
              i.canvas.ctx.lineTo(
                i.interactivity.mouse.pos_x,
                i.interactivity.mouse.pos_y
              ),
              i.canvas.ctx.stroke(),
              i.canvas.ctx.closePath();
          }
        }
      }
    }),
    (i.fn.vendors.eventsListeners = function () {
      "window" == i.interactivity.detect_on
        ? (i.interactivity.el = window)
        : (i.interactivity.el = i.canvas.el),
        (i.interactivity.events.onhover.enable ||
          i.interactivity.events.onclick.enable) &&
          (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window)
              var a = e.clientX,
                t = e.clientY;
            else
              var a = e.offsetX || e.clientX,
                t = e.offsetY || e.clientY;
            (i.interactivity.mouse.pos_x = a),
              (i.interactivity.mouse.pos_y = t),
              i.tmp.retina &&
                ((i.interactivity.mouse.pos_x *= i.canvas.pxratio),
                (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
              (i.interactivity.status = "mousemove");
          }),
          i.interactivity.el.addEventListener("mouseleave", function (e) {
            (i.interactivity.mouse.pos_x = null),
              (i.interactivity.mouse.pos_y = null),
              (i.interactivity.status = "mouseleave");
          })),
        i.interactivity.events.onclick.enable &&
          i.interactivity.el.addEventListener("click", function () {
            if (
              ((i.interactivity.mouse.click_pos_x =
                i.interactivity.mouse.pos_x),
              (i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y),
              (i.interactivity.mouse.click_time = new Date().getTime()),
              i.interactivity.events.onclick.enable)
            )
              switch (i.interactivity.events.onclick.mode) {
                case "push":
                  i.particles.move.enable
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : 1 == i.interactivity.modes.push.particles_nb
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : i.interactivity.modes.push.particles_nb > 1 &&
                      i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  i.fn.modes.removeParticles(
                    i.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  i.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (i.tmp.repulse_clicking = !0),
                    (i.tmp.repulse_count = 0),
                    (i.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
              }
          });
    }),
    (i.fn.vendors.densityAutoParticles = function () {
      if (i.particles.number.density.enable) {
        var e = (i.canvas.el.width * i.canvas.el.height) / 1e3;
        i.tmp.retina && (e /= 2 * i.canvas.pxratio);
        var a =
            (e * i.particles.number.value) /
            i.particles.number.density.value_area,
          t = i.particles.array.length - a;
        0 > t
          ? i.fn.modes.pushParticles(Math.abs(t))
          : i.fn.modes.removeParticles(t);
      }
    }),
    (i.fn.vendors.checkOverlap = function (e, a) {
      for (var t = 0; t < i.particles.array.length; t++) {
        var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
        c <= e.radius + s.radius &&
          ((e.x = a ? a.x : Math.random() * i.canvas.w),
          (e.y = a ? a.y : Math.random() * i.canvas.h),
          i.fn.vendors.checkOverlap(e));
      }
    }),
    (i.fn.vendors.createSvgImg = function (e) {
      var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
          if (e.color.rgb)
            var n =
              "rgba(" +
              e.color.rgb.r +
              "," +
              e.color.rgb.g +
              "," +
              e.color.rgb.b +
              "," +
              e.opacity +
              ")";
          else
            var n =
              "hsla(" +
              e.color.hsl.h +
              "," +
              e.color.hsl.s +
              "%," +
              e.color.hsl.l +
              "%," +
              e.opacity +
              ")";
          return n;
        }),
        n = new Blob([s], { type: "image/svg+xml;charset=utf-8" }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
      o.addEventListener("load", function () {
        (e.img.obj = o),
          (e.img.loaded = !0),
          r.revokeObjectURL(c),
          i.tmp.count_svg++;
      }),
        (o.src = c);
    }),
    (i.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), (pJSDom = null);
    }),
    (i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
      var r = s * n,
        c = s / n,
        o = (180 * (c - 2)) / c,
        l = Math.PI - (Math.PI * o) / 180;
      e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
      for (var v = 0; r > v; v++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (i.fn.vendors.exportImg = function () {
      window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (i.fn.vendors.loadImg = function (e) {
      if (((i.tmp.img_error = void 0), "" != i.particles.shape.image.src))
        if ("svg" == e) {
          var a = new XMLHttpRequest();
          a.open("GET", i.particles.shape.image.src),
            (a.onreadystatechange = function (e) {
              4 == a.readyState &&
                (200 == a.status
                  ? ((i.tmp.source_svg = e.currentTarget.response),
                    i.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (i.tmp.img_error = !0)));
            }),
            a.send();
        } else {
          var t = new Image();
          t.addEventListener("load", function () {
            (i.tmp.img_obj = t), i.fn.vendors.checkBeforeDraw();
          }),
            (t.src = i.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (i.tmp.img_error = !0);
    }),
    (i.fn.vendors.draw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type
          ? i.tmp.count_svg >= i.particles.number.value
            ? (i.fn.particlesDraw(),
              i.particles.move.enable
                ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error ||
              (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
          : void 0 != i.tmp.img_obj
          ? (i.fn.particlesDraw(),
            i.particles.move.enable
              ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
              : cancelRequestAnimFrame(i.fn.drawAnimFrame))
          : i.tmp.img_error ||
            (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
        : (i.fn.particlesDraw(),
          i.particles.move.enable
            ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
            : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }),
    (i.fn.vendors.checkBeforeDraw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg
          ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
            i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
        : (i.fn.vendors.init(), i.fn.vendors.draw());
    }),
    (i.fn.vendors.init = function () {
      i.fn.retinaInit(),
        i.fn.canvasInit(),
        i.fn.canvasSize(),
        i.fn.canvasPaint(),
        i.fn.particlesCreate(),
        i.fn.vendors.densityAutoParticles(),
        (i.particles.line_linked.color_rgb_line = hexToRgb(
          i.particles.line_linked.color
        ));
    }),
    (i.fn.vendors.start = function () {
      isInArray("image", i.particles.shape.type)
        ? ((i.tmp.img_type = i.particles.shape.image.src.substr(
            i.particles.shape.image.src.length - 3
          )),
          i.fn.vendors.loadImg(i.tmp.img_type))
        : i.fn.vendors.checkBeforeDraw();
    }),
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start();
};
(Object.deepExtend = function (e, a) {
  for (var t in a)
    a[t] && a[t].constructor && a[t].constructor === Object
      ? ((e[t] = e[t] || {}), arguments.callee(e[t], a[t]))
      : (e[t] = a[t]);
  return e;
}),
  (window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }
    );
  })()),
  (window.cancelRequestAnimFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout
    );
  })()),
  (window.pJSDom = []),
  (window.particlesJS = function (e, a) {
    "string" != typeof e && ((a = e), (e = "particles-js")),
      e || (e = "particles-js");
    var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
    if (s.length) for (; s.length > 0; ) t.removeChild(s[0]);
    var n = document.createElement("canvas");
    (n.className = i), (n.style.width = "100%"), (n.style.height = "100%");
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e, a));
  }),
  (window.particlesJS.load = function (e, a, t) {
    var i = new XMLHttpRequest();
    i.open("GET", a),
      (i.onreadystatechange = function (a) {
        if (4 == i.readyState)
          if (200 == i.status) {
            var s = JSON.parse(a.currentTarget.response);
            window.particlesJS(e, s), t && t();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + i.status),
              console.log("Error pJS - File config not found");
      }),
      i.send();
  });

!(function (a, b) {
  "use strict";
  (a.MixItUp = function () {
    var b = this;
    b._execAction("_constructor", 0),
      a.extend(b, {
        selectors: { target: ".mix", filter: ".filter", sort: ".sort" },
        animation: {
          enable: !0,
          effects: "fade scale",
          duration: 600,
          easing: "ease",
          perspectiveDistance: "3000",
          perspectiveOrigin: "50% 50%",
          queue: !0,
          queueLimit: 1,
          animateChangeLayout: !1,
          animateResizeContainer: !0,
          animateResizeTargets: !1,
          staggerSequence: !1,
          reverseOut: !1,
        },
        callbacks: {
          onMixLoad: !1,
          onMixStart: !1,
          onMixBusy: !1,
          onMixEnd: !1,
          onMixFail: !1,
          _user: !1,
        },
        controls: {
          enable: !0,
          live: !1,
          toggleFilterButtons: !1,
          toggleLogic: "or",
          activeClass: "active",
        },
        layout: {
          display: "inline-block",
          containerClass: "",
          containerClassFail: "fail",
        },
        load: { filter: "all", sort: !1 },
        _$body: null,
        _$container: null,
        _$targets: null,
        _$parent: null,
        _$sortButtons: null,
        _$filterButtons: null,
        _suckMode: !1,
        _mixing: !1,
        _sorting: !1,
        _clicking: !1,
        _loading: !0,
        _changingLayout: !1,
        _changingClass: !1,
        _changingDisplay: !1,
        _origOrder: [],
        _startOrder: [],
        _newOrder: [],
        _activeFilter: null,
        _toggleArray: [],
        _toggleString: "",
        _activeSort: "default:asc",
        _newSort: null,
        _startHeight: null,
        _newHeight: null,
        _incPadding: !0,
        _newDisplay: null,
        _newClass: null,
        _targetsBound: 0,
        _targetsDone: 0,
        _queue: [],
        _$show: a(),
        _$hide: a(),
      }),
      b._execAction("_constructor", 1);
  }),
    (a.MixItUp.prototype = {
      constructor: a.MixItUp,
      _instances: {},
      _handled: { _filter: {}, _sort: {} },
      _bound: { _filter: {}, _sort: {} },
      _actions: {},
      _filters: {},
      extend: function (b) {
        for (var c in b) a.MixItUp.prototype[c] = b[c];
      },
      addAction: function (b, c, d, e) {
        a.MixItUp.prototype._addHook("_actions", b, c, d, e);
      },
      addFilter: function (b, c, d, e) {
        a.MixItUp.prototype._addHook("_filters", b, c, d, e);
      },
      _addHook: function (b, c, d, e, f) {
        var g = a.MixItUp.prototype[b],
          h = {};
        (f = 1 === f || "post" === f ? "post" : "pre"),
          (h[c] = {}),
          (h[c][f] = {}),
          (h[c][f][d] = e),
          a.extend(!0, g, h);
      },
      _init: function (b, c) {
        var d = this;
        if (
          (d._execAction("_init", 0, arguments),
          c && a.extend(!0, d, c),
          (d._$body = a("body")),
          (d._domNode = b),
          (d._$container = a(b)),
          d._$container.addClass(d.layout.containerClass),
          (d._id = b.id),
          d._platformDetect(),
          (d._brake = d._getPrefixedCSS("transition", "none")),
          d._refresh(!0),
          (d._$parent = d._$targets.parent().length
            ? d._$targets.parent()
            : d._$container),
          d.load.sort &&
            ((d._newSort = d._parseSort(d.load.sort)),
            (d._newSortString = d.load.sort),
            (d._activeSort = d.load.sort),
            d._sort(),
            d._printSort()),
          (d._activeFilter =
            "all" === d.load.filter
              ? d.selectors.target
              : "none" === d.load.filter
              ? ""
              : d.load.filter),
          d.controls.enable && d._bindHandlers(),
          d.controls.toggleFilterButtons)
        ) {
          d._buildToggleArray();
          for (var e = 0; e < d._toggleArray.length; e++)
            d._updateControls(
              { filter: d._toggleArray[e], sort: d._activeSort },
              !0
            );
        } else
          d.controls.enable &&
            d._updateControls({ filter: d._activeFilter, sort: d._activeSort });
        d._filter(),
          (d._init = !0),
          d._$container.data("mixItUp", d),
          d._execAction("_init", 1, arguments),
          d._buildState(),
          d._$targets.css(d._brake),
          d._goMix(d.animation.enable);
      },
      _platformDetect: function () {
        var a = this,
          c = ["Webkit", "Moz", "O", "ms"],
          d = ["webkit", "moz"],
          e = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
          f = "undefined" != typeof InstallTrigger,
          g = function (a) {
            for (var b = 0; b < c.length; b++)
              if (c[b] + "Transition" in a.style)
                return { prefix: "-" + c[b].toLowerCase() + "-", vendor: c[b] };
            return "transition" in a.style ? "" : !1;
          },
          h = g(a._domNode);
        a._execAction("_platformDetect", 0),
          (a._chrome = e ? parseInt(e[1], 10) : !1),
          (a._ff = f
            ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1])
            : !1),
          (a._prefix = h.prefix),
          (a._vendor = h.vendor),
          (a._suckMode = window.atob && a._prefix ? !1 : !0),
          a._suckMode && (a.animation.enable = !1),
          a._ff && a._ff <= 4 && (a.animation.enable = !1);
        for (var i = 0; i < d.length && !window.requestAnimationFrame; i++)
          window.requestAnimationFrame = window[d[i] + "RequestAnimationFrame"];
        "function" != typeof Object.getPrototypeOf &&
          ("object" == typeof "test".__proto__
            ? (Object.getPrototypeOf = function (a) {
                return a.__proto__;
              })
            : (Object.getPrototypeOf = function (a) {
                return a.constructor.prototype;
              })),
          a._domNode.nextElementSibling === b &&
            Object.defineProperty(Element.prototype, "nextElementSibling", {
              get: function () {
                for (var a = this.nextSibling; a; ) {
                  if (1 === a.nodeType) return a;
                  a = a.nextSibling;
                }
                return null;
              },
            }),
          a._execAction("_platformDetect", 1);
      },
      _refresh: function (a, c) {
        var d = this;
        d._execAction("_refresh", 0, arguments),
          (d._$targets = d._$container.find(d.selectors.target));
        for (var e = 0; e < d._$targets.length; e++) {
          var f = d._$targets[e];
          if (f.dataset === b || c) {
            f.dataset = {};
            for (var g = 0; g < f.attributes.length; g++) {
              var h = f.attributes[g],
                i = h.name,
                j = h.value;
              if (i.indexOf("data-") > -1) {
                var k = d._helpers._camelCase(i.substring(5, i.length));
                f.dataset[k] = j;
              }
            }
          }
          f.mixParent === b && (f.mixParent = d._id);
        }
        if (
          (d._$targets.length && a) ||
          (!d._origOrder.length && d._$targets.length)
        ) {
          d._origOrder = [];
          for (var e = 0; e < d._$targets.length; e++) {
            var f = d._$targets[e];
            d._origOrder.push(f);
          }
        }
        d._execAction("_refresh", 1, arguments);
      },
      _bindHandlers: function () {
        var c = this,
          d = a.MixItUp.prototype._bound._filter,
          e = a.MixItUp.prototype._bound._sort;
        c._execAction("_bindHandlers", 0),
          c.controls.live
            ? c._$body
                .on("click.mixItUp." + c._id, c.selectors.sort, function () {
                  c._processClick(a(this), "sort");
                })
                .on("click.mixItUp." + c._id, c.selectors.filter, function () {
                  c._processClick(a(this), "filter");
                })
            : ((c._$sortButtons = a(c.selectors.sort)),
              (c._$filterButtons = a(c.selectors.filter)),
              c._$sortButtons.on("click.mixItUp." + c._id, function () {
                c._processClick(a(this), "sort");
              }),
              c._$filterButtons.on("click.mixItUp." + c._id, function () {
                c._processClick(a(this), "filter");
              })),
          (d[c.selectors.filter] =
            d[c.selectors.filter] === b ? 1 : d[c.selectors.filter] + 1),
          (e[c.selectors.sort] =
            e[c.selectors.sort] === b ? 1 : e[c.selectors.sort] + 1),
          c._execAction("_bindHandlers", 1);
      },
      _processClick: function (c, d) {
        var e = this,
          f = function (c, d, f) {
            var g = a.MixItUp.prototype;
            (g._handled["_" + d][e.selectors[d]] =
              g._handled["_" + d][e.selectors[d]] === b
                ? 1
                : g._handled["_" + d][e.selectors[d]] + 1),
              g._handled["_" + d][e.selectors[d]] ===
                g._bound["_" + d][e.selectors[d]] &&
                (c[(f ? "remove" : "add") + "Class"](e.controls.activeClass),
                delete g._handled["_" + d][e.selectors[d]]);
          };
        if (
          (e._execAction("_processClick", 0, arguments),
          !e._mixing ||
            (e.animation.queue && e._queue.length < e.animation.queueLimit))
        ) {
          if (((e._clicking = !0), "sort" === d)) {
            var g = c.attr("data-sort");
            (!c.hasClass(e.controls.activeClass) || g.indexOf("random") > -1) &&
              (a(e.selectors.sort).removeClass(e.controls.activeClass),
              f(c, d),
              e.sort(g));
          }
          if ("filter" === d) {
            var h,
              i = c.attr("data-filter"),
              j = "or" === e.controls.toggleLogic ? "," : "";
            e.controls.toggleFilterButtons
              ? (e._buildToggleArray(),
                c.hasClass(e.controls.activeClass)
                  ? (f(c, d, !0),
                    (h = e._toggleArray.indexOf(i)),
                    e._toggleArray.splice(h, 1))
                  : (f(c, d), e._toggleArray.push(i)),
                (e._toggleArray = a.grep(e._toggleArray, function (a) {
                  return a;
                })),
                (e._toggleString = e._toggleArray.join(j)),
                e.filter(e._toggleString))
              : c.hasClass(e.controls.activeClass) ||
                (a(e.selectors.filter).removeClass(e.controls.activeClass),
                f(c, d),
                e.filter(i));
          }
          e._execAction("_processClick", 1, arguments);
        } else
          "function" == typeof e.callbacks.onMixBusy &&
            e.callbacks.onMixBusy.call(e._domNode, e._state, e),
            e._execAction("_processClickBusy", 1, arguments);
      },
      _buildToggleArray: function () {
        var a = this,
          b = a._activeFilter.replace(/\s/g, "");
        if (
          (a._execAction("_buildToggleArray", 0, arguments),
          "or" === a.controls.toggleLogic)
        )
          a._toggleArray = b.split(",");
        else {
          (a._toggleArray = b.split(".")),
            !a._toggleArray[0] && a._toggleArray.shift();
          for (var c, d = 0; (c = a._toggleArray[d]); d++)
            a._toggleArray[d] = "." + c;
        }
        a._execAction("_buildToggleArray", 1, arguments);
      },
      _updateControls: function (c, d) {
        var e = this,
          f = { filter: c.filter, sort: c.sort },
          g = function (a, b) {
            try {
              d && "filter" === h && "none" !== f.filter && "" !== f.filter
                ? a.filter(b).addClass(e.controls.activeClass)
                : a
                    .removeClass(e.controls.activeClass)
                    .filter(b)
                    .addClass(e.controls.activeClass);
            } catch (c) {}
          },
          h = "filter",
          i = null;
        e._execAction("_updateControls", 0, arguments),
          c.filter === b && (f.filter = e._activeFilter),
          c.sort === b && (f.sort = e._activeSort),
          f.filter === e.selectors.target && (f.filter = "all");
        for (var j = 0; 2 > j; j++)
          (i = e.controls.live ? a(e.selectors[h]) : e["_$" + h + "Buttons"]),
            i && g(i, "[data-" + h + '="' + f[h] + '"]'),
            (h = "sort");
        e._execAction("_updateControls", 1, arguments);
      },
      _filter: function () {
        var b = this;
        b._execAction("_filter", 0);
        for (var c = 0; c < b._$targets.length; c++) {
          var d = a(b._$targets[c]);
          d.is(b._activeFilter)
            ? (b._$show = b._$show.add(d))
            : (b._$hide = b._$hide.add(d));
        }
        b._execAction("_filter", 1);
      },
      _sort: function () {
        var a = this,
          b = function (a) {
            for (var b = a.slice(), c = b.length, d = c; d--; ) {
              var e = parseInt(Math.random() * c),
                f = b[d];
              (b[d] = b[e]), (b[e] = f);
            }
            return b;
          };
        a._execAction("_sort", 0), (a._startOrder = []);
        for (var c = 0; c < a._$targets.length; c++) {
          var d = a._$targets[c];
          a._startOrder.push(d);
        }
        switch (a._newSort[0].sortBy) {
          case "default":
            a._newOrder = a._origOrder;
            break;
          case "random":
            a._newOrder = b(a._startOrder);
            break;
          case "custom":
            a._newOrder = a._newSort[0].order;
            break;
          default:
            a._newOrder = a._startOrder.concat().sort(function (b, c) {
              return a._compare(b, c);
            });
        }
        a._execAction("_sort", 1);
      },
      _compare: function (a, b, c) {
        c = c ? c : 0;
        var d = this,
          e = d._newSort[c].order,
          f = function (a) {
            return a.dataset[d._newSort[c].sortBy] || 0;
          },
          g = isNaN(1 * f(a)) ? f(a).toLowerCase() : 1 * f(a),
          h = isNaN(1 * f(b)) ? f(b).toLowerCase() : 1 * f(b);
        return h > g
          ? "asc" === e
            ? -1
            : 1
          : g > h
          ? "asc" === e
            ? 1
            : -1
          : g === h && d._newSort.length > c + 1
          ? d._compare(a, b, c + 1)
          : 0;
      },
      _printSort: function (a) {
        var b = this,
          c = a ? b._startOrder : b._newOrder,
          d = b._$parent[0].querySelectorAll(b.selectors.target),
          e = d.length ? d[d.length - 1].nextElementSibling : null,
          f = document.createDocumentFragment();
        b._execAction("_printSort", 0, arguments);
        for (var g = 0; g < d.length; g++) {
          var h = d[g],
            i = h.nextSibling;
          "absolute" !== h.style.position &&
            (i && "#text" === i.nodeName && b._$parent[0].removeChild(i),
            b._$parent[0].removeChild(h));
        }
        for (var g = 0; g < c.length; g++) {
          var j = c[g];
          if (
            "default" !== b._newSort[0].sortBy ||
            "desc" !== b._newSort[0].order ||
            a
          )
            f.appendChild(j), f.appendChild(document.createTextNode(" "));
          else {
            var k = f.firstChild;
            f.insertBefore(j, k),
              f.insertBefore(document.createTextNode(" "), j);
          }
        }
        e ? b._$parent[0].insertBefore(f, e) : b._$parent[0].appendChild(f),
          b._execAction("_printSort", 1, arguments);
      },
      _parseSort: function (a) {
        for (
          var b = this,
            c = "string" == typeof a ? a.split(" ") : [a],
            d = [],
            e = 0;
          e < c.length;
          e++
        ) {
          var f = "string" == typeof a ? c[e].split(":") : ["custom", c[e]],
            g = { sortBy: b._helpers._camelCase(f[0]), order: f[1] || "asc" };
          if ((d.push(g), "default" === g.sortBy || "random" === g.sortBy))
            break;
        }
        return b._execFilter("_parseSort", d, arguments);
      },
      _parseEffects: function () {
        var a = this,
          b = { opacity: "", transformIn: "", transformOut: "", filter: "" },
          c = function (b, c, d) {
            if (a.animation.effects.indexOf(b) > -1) {
              if (c) {
                var e = a.animation.effects.indexOf(b + "(");
                if (e > -1) {
                  var f = a.animation.effects.substring(e),
                    g = /\(([^)]+)\)/.exec(f),
                    h = g[1];
                  return { val: h };
                }
              }
              return !0;
            }
            return !1;
          },
          d = function (a, b) {
            return b
              ? "-" === a.charAt(0)
                ? a.substr(1, a.length)
                : "-" + a
              : a;
          },
          e = function (a, e) {
            for (
              var f = [
                  ["scale", ".01"],
                  ["translateX", "20px"],
                  ["translateY", "20px"],
                  ["translateZ", "20px"],
                  ["rotateX", "90deg"],
                  ["rotateY", "90deg"],
                  ["rotateZ", "180deg"],
                ],
                g = 0;
              g < f.length;
              g++
            ) {
              var h = f[g][0],
                i = f[g][1],
                j = e && "scale" !== h;
              b[a] += c(h) ? h + "(" + d(c(h, !0).val || i, j) + ") " : "";
            }
          };
        return (
          (b.opacity = c("fade") ? c("fade", !0).val || "0" : "1"),
          e("transformIn"),
          a.animation.reverseOut
            ? e("transformOut", !0)
            : (b.transformOut = b.transformIn),
          (b.transition = {}),
          (b.transition = a._getPrefixedCSS(
            "transition",
            "all " +
              a.animation.duration +
              "ms " +
              a.animation.easing +
              ", opacity " +
              a.animation.duration +
              "ms linear"
          )),
          (a.animation.stagger = c("stagger") ? !0 : !1),
          (a.animation.staggerDuration = parseInt(
            c("stagger") && c("stagger", !0).val ? c("stagger", !0).val : 100
          )),
          a._execFilter("_parseEffects", b)
        );
      },
      _buildState: function (a) {
        var b = this,
          c = {};
        return (
          b._execAction("_buildState", 0),
          (c = {
            activeFilter: "" === b._activeFilter ? "none" : b._activeFilter,
            activeSort:
              a && b._newSortString ? b._newSortString : b._activeSort,
            fail: !b._$show.length && "" !== b._activeFilter,
            $targets: b._$targets,
            $show: b._$show,
            $hide: b._$hide,
            totalTargets: b._$targets.length,
            totalShow: b._$show.length,
            totalHide: b._$hide.length,
            display: a && b._newDisplay ? b._newDisplay : b.layout.display,
          }),
          a
            ? b._execFilter("_buildState", c)
            : ((b._state = c), void b._execAction("_buildState", 1))
        );
      },
      _goMix: function (a) {
        var b = this,
          c = function () {
            b._chrome && 31 === b._chrome && f(b._$parent[0]),
              b._setInter(),
              d();
          },
          d = function () {
            var a = window.pageYOffset,
              c = window.pageXOffset;
            document.documentElement.scrollHeight;
            b._getInterMixData(),
              b._setFinal(),
              b._getFinalMixData(),
              window.pageYOffset !== a && window.scrollTo(c, a),
              b._prepTargets(),
              window.requestAnimationFrame
                ? requestAnimationFrame(e)
                : setTimeout(function () {
                    e();
                  }, 20);
          },
          e = function () {
            b._animateTargets(), 0 === b._targetsBound && b._cleanUp();
          },
          f = function (a) {
            var b = a.parentElement,
              c = document.createElement("div"),
              d = document.createDocumentFragment();
            b.insertBefore(c, a), d.appendChild(a), b.replaceChild(a, c);
          },
          g = b._buildState(!0);
        b._execAction("_goMix", 0, arguments),
          !b.animation.duration && (a = !1),
          (b._mixing = !0),
          b._$container.removeClass(b.layout.containerClassFail),
          "function" == typeof b.callbacks.onMixStart &&
            b.callbacks.onMixStart.call(b._domNode, b._state, g, b),
          b._$container.trigger("mixStart", [b._state, g, b]),
          b._getOrigMixData(),
          a && !b._suckMode
            ? window.requestAnimationFrame
              ? requestAnimationFrame(c)
              : c()
            : b._cleanUp(),
          b._execAction("_goMix", 1, arguments);
      },
      _getTargetData: function (a, b) {
        var c,
          d = this;
        (a.dataset[b + "PosX"] = a.offsetLeft),
          (a.dataset[b + "PosY"] = a.offsetTop),
          d.animation.animateResizeTargets &&
            ((c = d._suckMode
              ? { marginBottom: "", marginRight: "" }
              : window.getComputedStyle(a)),
            (a.dataset[b + "MarginBottom"] = parseInt(c.marginBottom)),
            (a.dataset[b + "MarginRight"] = parseInt(c.marginRight)),
            (a.dataset[b + "Width"] = a.offsetWidth),
            (a.dataset[b + "Height"] = a.offsetHeight));
      },
      _getOrigMixData: function () {
        var a = this,
          b = a._suckMode
            ? { boxSizing: "" }
            : window.getComputedStyle(a._$parent[0]),
          c = b.boxSizing || b[a._vendor + "BoxSizing"];
        (a._incPadding = "border-box" === c),
          a._execAction("_getOrigMixData", 0),
          !a._suckMode && (a.effects = a._parseEffects()),
          (a._$toHide = a._$hide.filter(":visible")),
          (a._$toShow = a._$show.filter(":hidden")),
          (a._$pre = a._$targets.filter(":visible")),
          (a._startHeight = a._incPadding
            ? a._$parent.outerHeight()
            : a._$parent.height());
        for (var d = 0; d < a._$pre.length; d++) {
          var e = a._$pre[d];
          a._getTargetData(e, "orig");
        }
        a._execAction("_getOrigMixData", 1);
      },
      _setInter: function () {
        var a = this;
        a._execAction("_setInter", 0),
          a._changingLayout && a.animation.animateChangeLayout
            ? (a._$toShow.css("display", a._newDisplay),
              a._changingClass &&
                a._$container
                  .removeClass(a.layout.containerClass)
                  .addClass(a._newClass))
            : a._$toShow.css("display", a.layout.display),
          a._execAction("_setInter", 1);
      },
      _getInterMixData: function () {
        var a = this;
        a._execAction("_getInterMixData", 0);
        for (var b = 0; b < a._$toShow.length; b++) {
          var c = a._$toShow[b];
          a._getTargetData(c, "inter");
        }
        for (var b = 0; b < a._$pre.length; b++) {
          var c = a._$pre[b];
          a._getTargetData(c, "inter");
        }
        a._execAction("_getInterMixData", 1);
      },
      _setFinal: function () {
        var a = this;
        a._execAction("_setFinal", 0),
          a._sorting && a._printSort(),
          a._$toHide.removeStyle("display"),
          a._changingLayout &&
            a.animation.animateChangeLayout &&
            a._$pre.css("display", a._newDisplay),
          a._execAction("_setFinal", 1);
      },
      _getFinalMixData: function () {
        var a = this;
        a._execAction("_getFinalMixData", 0);
        for (var b = 0; b < a._$toShow.length; b++) {
          var c = a._$toShow[b];
          a._getTargetData(c, "final");
        }
        for (var b = 0; b < a._$pre.length; b++) {
          var c = a._$pre[b];
          a._getTargetData(c, "final");
        }
        (a._newHeight = a._incPadding
          ? a._$parent.outerHeight()
          : a._$parent.height()),
          a._sorting && a._printSort(!0),
          a._$toShow.removeStyle("display"),
          a._$pre.css("display", a.layout.display),
          a._changingClass &&
            a.animation.animateChangeLayout &&
            a._$container
              .removeClass(a._newClass)
              .addClass(a.layout.containerClass),
          a._execAction("_getFinalMixData", 1);
      },
      _prepTargets: function () {
        var b = this,
          c = {
            _in: b._getPrefixedCSS("transform", b.effects.transformIn),
            _out: b._getPrefixedCSS("transform", b.effects.transformOut),
          };
        b._execAction("_prepTargets", 0),
          b.animation.animateResizeContainer &&
            b._$parent.css("height", b._startHeight + "px");
        for (var d = 0; d < b._$toShow.length; d++) {
          var e = b._$toShow[d],
            f = a(e);
          (e.style.opacity = b.effects.opacity),
            (e.style.display =
              b._changingLayout && b.animation.animateChangeLayout
                ? b._newDisplay
                : b.layout.display),
            f.css(c._in),
            b.animation.animateResizeTargets &&
              ((e.style.width = e.dataset.finalWidth + "px"),
              (e.style.height = e.dataset.finalHeight + "px"),
              (e.style.marginRight =
                -(e.dataset.finalWidth - e.dataset.interWidth) +
                1 * e.dataset.finalMarginRight +
                "px"),
              (e.style.marginBottom =
                -(e.dataset.finalHeight - e.dataset.interHeight) +
                1 * e.dataset.finalMarginBottom +
                "px"));
        }
        for (var d = 0; d < b._$pre.length; d++) {
          var e = b._$pre[d],
            f = a(e),
            g = {
              x: e.dataset.origPosX - e.dataset.interPosX,
              y: e.dataset.origPosY - e.dataset.interPosY,
            },
            c = b._getPrefixedCSS(
              "transform",
              "translate(" + g.x + "px," + g.y + "px)"
            );
          f.css(c),
            b.animation.animateResizeTargets &&
              ((e.style.width = e.dataset.origWidth + "px"),
              (e.style.height = e.dataset.origHeight + "px"),
              e.dataset.origWidth - e.dataset.finalWidth &&
                (e.style.marginRight =
                  -(e.dataset.origWidth - e.dataset.interWidth) +
                  1 * e.dataset.origMarginRight +
                  "px"),
              e.dataset.origHeight - e.dataset.finalHeight &&
                (e.style.marginBottom =
                  -(e.dataset.origHeight - e.dataset.interHeight) +
                  1 * e.dataset.origMarginBottom +
                  "px"));
        }
        b._execAction("_prepTargets", 1);
      },
      _animateTargets: function () {
        var b = this;
        b._execAction("_animateTargets", 0),
          (b._targetsDone = 0),
          (b._targetsBound = 0),
          b._$parent
            .css(
              b._getPrefixedCSS(
                "perspective",
                b.animation.perspectiveDistance + "px"
              )
            )
            .css(
              b._getPrefixedCSS(
                "perspective-origin",
                b.animation.perspectiveOrigin
              )
            ),
          b.animation.animateResizeContainer &&
            b._$parent
              .css(
                b._getPrefixedCSS(
                  "transition",
                  "height " + b.animation.duration + "ms ease"
                )
              )
              .css("height", b._newHeight + "px");
        for (var c = 0; c < b._$toShow.length; c++) {
          var d = b._$toShow[c],
            e = a(d),
            f = {
              x: d.dataset.finalPosX - d.dataset.interPosX,
              y: d.dataset.finalPosY - d.dataset.interPosY,
            },
            g = b._getDelay(c),
            h = {};
          d.style.opacity = "";
          for (var i = 0; 2 > i; i++) {
            var j = 0 === i ? (j = b._prefix) : "";
            b._ff &&
              b._ff <= 20 &&
              ((h[j + "transition-property"] = "all"),
              (h[j + "transition-timing-function"] = b.animation.easing + "ms"),
              (h[j + "transition-duration"] = b.animation.duration + "ms")),
              (h[j + "transition-delay"] = g + "ms"),
              (h[j + "transform"] = "translate(" + f.x + "px," + f.y + "px)");
          }
          (b.effects.transform || b.effects.opacity) && b._bindTargetDone(e),
            b._ff && b._ff <= 20
              ? e.css(h)
              : e.css(b.effects.transition).css(h);
        }
        for (var c = 0; c < b._$pre.length; c++) {
          var d = b._$pre[c],
            e = a(d),
            f = {
              x: d.dataset.finalPosX - d.dataset.interPosX,
              y: d.dataset.finalPosY - d.dataset.interPosY,
            },
            g = b._getDelay(c);
          (d.dataset.finalPosX !== d.dataset.origPosX ||
            d.dataset.finalPosY !== d.dataset.origPosY) &&
            b._bindTargetDone(e),
            e.css(
              b._getPrefixedCSS(
                "transition",
                "all " +
                  b.animation.duration +
                  "ms " +
                  b.animation.easing +
                  " " +
                  g +
                  "ms"
              )
            ),
            e.css(
              b._getPrefixedCSS(
                "transform",
                "translate(" + f.x + "px," + f.y + "px)"
              )
            ),
            b.animation.animateResizeTargets &&
              (d.dataset.origWidth - d.dataset.finalWidth &&
                1 * d.dataset.finalWidth &&
                ((d.style.width = d.dataset.finalWidth + "px"),
                (d.style.marginRight =
                  -(d.dataset.finalWidth - d.dataset.interWidth) +
                  1 * d.dataset.finalMarginRight +
                  "px")),
              d.dataset.origHeight - d.dataset.finalHeight &&
                1 * d.dataset.finalHeight &&
                ((d.style.height = d.dataset.finalHeight + "px"),
                (d.style.marginBottom =
                  -(d.dataset.finalHeight - d.dataset.interHeight) +
                  1 * d.dataset.finalMarginBottom +
                  "px")));
        }
        b._changingClass &&
          b._$container
            .removeClass(b.layout.containerClass)
            .addClass(b._newClass);
        for (var c = 0; c < b._$toHide.length; c++) {
          for (
            var d = b._$toHide[c], e = a(d), g = b._getDelay(c), k = {}, i = 0;
            2 > i;
            i++
          ) {
            var j = 0 === i ? (j = b._prefix) : "";
            (k[j + "transition-delay"] = g + "ms"),
              (k[j + "transform"] = b.effects.transformOut),
              (k.opacity = b.effects.opacity);
          }
          e.css(b.effects.transition).css(k),
            (b.effects.transform || b.effects.opacity) && b._bindTargetDone(e);
        }
        b._execAction("_animateTargets", 1);
      },
      _bindTargetDone: function (b) {
        var c = this,
          d = b[0];
        c._execAction("_bindTargetDone", 0, arguments),
          d.dataset.bound ||
            ((d.dataset.bound = !0),
            c._targetsBound++,
            b.on(
              "webkitTransitionEnd.mixItUp transitionend.mixItUp",
              function (e) {
                (e.originalEvent.propertyName.indexOf("transform") > -1 ||
                  e.originalEvent.propertyName.indexOf("opacity") > -1) &&
                  a(e.originalEvent.target).is(c.selectors.target) &&
                  (b.off(".mixItUp"), delete d.dataset.bound, c._targetDone());
              }
            )),
          c._execAction("_bindTargetDone", 1, arguments);
      },
      _targetDone: function () {
        var a = this;
        a._execAction("_targetDone", 0),
          a._targetsDone++,
          a._targetsDone === a._targetsBound && a._cleanUp(),
          a._execAction("_targetDone", 1);
      },
      _cleanUp: function () {
        var b = this,
          c = b.animation.animateResizeTargets
            ? "transform opacity width height margin-bottom margin-right"
            : "transform opacity",
          d = function () {
            b._$targets.removeStyle("transition", b._prefix);
          };
        b._execAction("_cleanUp", 0),
          b._changingLayout
            ? b._$show.css("display", b._newDisplay)
            : b._$show.css("display", b.layout.display),
          b._$targets.css(b._brake),
          b._$targets
            .removeStyle(c, b._prefix)
            .removeAttr(
              "data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"
            ),
          b._$hide.removeStyle("display"),
          b._$parent.removeStyle(
            "height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",
            b._prefix
          ),
          b._sorting &&
            (b._printSort(),
            (b._activeSort = b._newSortString),
            (b._sorting = !1)),
          b._changingLayout &&
            (b._changingDisplay &&
              ((b.layout.display = b._newDisplay), (b._changingDisplay = !1)),
            b._changingClass &&
              (b._$parent
                .removeClass(b.layout.containerClass)
                .addClass(b._newClass),
              (b.layout.containerClass = b._newClass),
              (b._changingClass = !1)),
            (b._changingLayout = !1)),
          b._refresh(),
          b._buildState(),
          b._state.fail && b._$container.addClass(b.layout.containerClassFail),
          (b._$show = a()),
          (b._$hide = a()),
          window.requestAnimationFrame && requestAnimationFrame(d),
          (b._mixing = !1),
          "function" == typeof b.callbacks._user &&
            b.callbacks._user.call(b._domNode, b._state, b),
          "function" == typeof b.callbacks.onMixEnd &&
            b.callbacks.onMixEnd.call(b._domNode, b._state, b),
          b._$container.trigger("mixEnd", [b._state, b]),
          b._state.fail &&
            ("function" == typeof b.callbacks.onMixFail &&
              b.callbacks.onMixFail.call(b._domNode, b._state, b),
            b._$container.trigger("mixFail", [b._state, b])),
          b._loading &&
            ("function" == typeof b.callbacks.onMixLoad &&
              b.callbacks.onMixLoad.call(b._domNode, b._state, b),
            b._$container.trigger("mixLoad", [b._state, b])),
          b._queue.length &&
            (b._execAction("_queue", 0),
            b.multiMix(b._queue[0][0], b._queue[0][1], b._queue[0][2]),
            b._queue.splice(0, 1)),
          b._execAction("_cleanUp", 1),
          (b._loading = !1);
      },
      _getPrefixedCSS: function (a, b, c) {
        var d = this,
          e = {},
          f = "",
          g = -1;
        for (g = 0; 2 > g; g++)
          (f = 0 === g ? d._prefix : ""),
            c ? (e[f + a] = f + b) : (e[f + a] = b);
        return d._execFilter("_getPrefixedCSS", e, arguments);
      },
      _getDelay: function (a) {
        var b = this,
          c =
            "function" == typeof b.animation.staggerSequence
              ? b.animation.staggerSequence.call(b._domNode, a, b._state)
              : a,
          d = b.animation.stagger ? c * b.animation.staggerDuration : 0;
        return b._execFilter("_getDelay", d, arguments);
      },
      _parseMultiMixArgs: function (a) {
        for (
          var b = this,
            c = { command: null, animate: b.animation.enable, callback: null },
            d = 0;
          d < a.length;
          d++
        ) {
          var e = a[d];
          null !== e &&
            ("object" == typeof e || "string" == typeof e
              ? (c.command = e)
              : "boolean" == typeof e
              ? (c.animate = e)
              : "function" == typeof e && (c.callback = e));
        }
        return b._execFilter("_parseMultiMixArgs", c, arguments);
      },
      _parseInsertArgs: function (b) {
        for (
          var c = this,
            d = {
              index: 0,
              $object: a(),
              multiMix: { filter: c._state.activeFilter },
              callback: null,
            },
            e = 0;
          e < b.length;
          e++
        ) {
          var f = b[e];
          "number" == typeof f
            ? (d.index = f)
            : "object" == typeof f && f instanceof a
            ? (d.$object = f)
            : "object" == typeof f && c._helpers._isElement(f)
            ? (d.$object = a(f))
            : "object" == typeof f && null !== f
            ? (d.multiMix = f)
            : "boolean" != typeof f || f
            ? "function" == typeof f && (d.callback = f)
            : (d.multiMix = !1);
        }
        return c._execFilter("_parseInsertArgs", d, arguments);
      },
      _execAction: function (a, b, c) {
        var d = this,
          e = b ? "post" : "pre";
        if (!d._actions.isEmptyObject && d._actions.hasOwnProperty(a))
          for (var f in d._actions[a][e]) d._actions[a][e][f].call(d, c);
      },
      _execFilter: function (a, b, c) {
        var d = this;
        if (d._filters.isEmptyObject || !d._filters.hasOwnProperty(a)) return b;
        for (var e in d._filters[a]) return d._filters[a][e].call(d, c);
      },
      _helpers: {
        _camelCase: function (a) {
          return a.replace(/-([a-z])/g, function (a) {
            return a[1].toUpperCase();
          });
        },
        _isElement: function (a) {
          return window.HTMLElement
            ? a instanceof HTMLElement
            : null !== a && 1 === a.nodeType && "string" === a.nodeName;
        },
      },
      isMixing: function () {
        var a = this;
        return a._execFilter("isMixing", a._mixing);
      },
      filter: function () {
        var a = this,
          b = a._parseMultiMixArgs(arguments);
        a._clicking && (a._toggleString = ""),
          a.multiMix({ filter: b.command }, b.animate, b.callback);
      },
      sort: function () {
        var a = this,
          b = a._parseMultiMixArgs(arguments);
        a.multiMix({ sort: b.command }, b.animate, b.callback);
      },
      changeLayout: function () {
        var a = this,
          b = a._parseMultiMixArgs(arguments);
        a.multiMix({ changeLayout: b.command }, b.animate, b.callback);
      },
      multiMix: function () {
        var a = this,
          c = a._parseMultiMixArgs(arguments);
        if ((a._execAction("multiMix", 0, arguments), a._mixing))
          a.animation.queue && a._queue.length < a.animation.queueLimit
            ? (a._queue.push(arguments),
              a.controls.enable && !a._clicking && a._updateControls(c.command),
              a._execAction("multiMixQueue", 1, arguments))
            : ("function" == typeof a.callbacks.onMixBusy &&
                a.callbacks.onMixBusy.call(a._domNode, a._state, a),
              a._$container.trigger("mixBusy", [a._state, a]),
              a._execAction("multiMixBusy", 1, arguments));
        else {
          a.controls.enable &&
            !a._clicking &&
            (a.controls.toggleFilterButtons && a._buildToggleArray(),
            a._updateControls(c.command, a.controls.toggleFilterButtons)),
            a._queue.length < 2 && (a._clicking = !1),
            delete a.callbacks._user,
            c.callback && (a.callbacks._user = c.callback);
          var d = c.command.sort,
            e = c.command.filter,
            f = c.command.changeLayout;
          a._refresh(),
            d &&
              ((a._newSort = a._parseSort(d)),
              (a._newSortString = d),
              (a._sorting = !0),
              a._sort()),
            e !== b &&
              ((e = "all" === e ? a.selectors.target : e),
              (a._activeFilter = e)),
            a._filter(),
            f &&
              ((a._newDisplay =
                "string" == typeof f ? f : f.display || a.layout.display),
              (a._newClass = f.containerClass || ""),
              (a._newDisplay !== a.layout.display ||
                a._newClass !== a.layout.containerClass) &&
                ((a._changingLayout = !0),
                (a._changingClass = a._newClass !== a.layout.containerClass),
                (a._changingDisplay = a._newDisplay !== a.layout.display))),
            a._$targets.css(a._brake),
            a._goMix(
              c.animate ^ a.animation.enable ? c.animate : a.animation.enable
            ),
            a._execAction("multiMix", 1, arguments);
        }
      },
      insert: function () {
        var a = this,
          b = a._parseInsertArgs(arguments),
          c = "function" == typeof b.callback ? b.callback : null,
          d = document.createDocumentFragment(),
          e = (function () {
            return (
              a._refresh(),
              a._$targets.length
                ? b.index < a._$targets.length || !a._$targets.length
                  ? a._$targets[b.index]
                  : a._$targets[a._$targets.length - 1].nextElementSibling
                : a._$parent[0].children[0]
            );
          })();
        if ((a._execAction("insert", 0, arguments), b.$object)) {
          for (var f = 0; f < b.$object.length; f++) {
            var g = b.$object[f];
            d.appendChild(g), d.appendChild(document.createTextNode(" "));
          }
          a._$parent[0].insertBefore(d, e);
        }
        a._execAction("insert", 1, arguments),
          "object" == typeof b.multiMix && a.multiMix(b.multiMix, c);
      },
      prepend: function () {
        var a = this,
          b = a._parseInsertArgs(arguments);
        a.insert(0, b.$object, b.multiMix, b.callback);
      },
      append: function () {
        var a = this,
          b = a._parseInsertArgs(arguments);
        a.insert(a._state.totalTargets, b.$object, b.multiMix, b.callback);
      },
      getOption: function (a) {
        var c = this,
          d = function (a, c) {
            for (
              var d = c.split("."),
                e = d.pop(),
                f = d.length,
                g = 1,
                h = d[0] || c;
              (a = a[h]) && f > g;

            )
              (h = d[g]), g++;
            return a !== b ? (a[e] !== b ? a[e] : a) : void 0;
          };
        return a ? c._execFilter("getOption", d(c, a), arguments) : c;
      },
      setOptions: function (b) {
        var c = this;
        c._execAction("setOptions", 0, arguments),
          "object" == typeof b && a.extend(!0, c, b),
          c._execAction("setOptions", 1, arguments);
      },
      getState: function () {
        var a = this;
        return a._execFilter("getState", a._state, a);
      },
      forceRefresh: function () {
        var a = this;
        a._refresh(!1, !0);
      },
      destroy: function (b) {
        var c = this,
          d = a.MixItUp.prototype._bound._filter,
          e = a.MixItUp.prototype._bound._sort;
        c._execAction("destroy", 0, arguments),
          c._$body
            .add(a(c.selectors.sort))
            .add(a(c.selectors.filter))
            .off(".mixItUp");
        for (var f = 0; f < c._$targets.length; f++) {
          var g = c._$targets[f];
          b && (g.style.display = ""), delete g.mixParent;
        }
        c._execAction("destroy", 1, arguments),
          d[c.selectors.filter] && d[c.selectors.filter] > 1
            ? d[c.selectors.filter]--
            : 1 === d[c.selectors.filter] && delete d[c.selectors.filter],
          e[c.selectors.sort] && e[c.selectors.sort] > 1
            ? e[c.selectors.sort]--
            : 1 === e[c.selectors.sort] && delete e[c.selectors.sort],
          delete a.MixItUp.prototype._instances[c._id];
      },
    }),
    (a.fn.mixItUp = function () {
      var c,
        d = arguments,
        e = [],
        f = function (b, c) {
          var d = new a.MixItUp(),
            e = function () {
              return ("00000" + ((16777216 * Math.random()) << 0).toString(16))
                .substr(-6)
                .toUpperCase();
            };
          d._execAction("_instantiate", 0, arguments),
            (b.id = b.id ? b.id : "MixItUp" + e()),
            d._instances[b.id] || ((d._instances[b.id] = d), d._init(b, c)),
            d._execAction("_instantiate", 1, arguments);
        };
      return (
        (c = this.each(function () {
          if (d && "string" == typeof d[0]) {
            var c = a.MixItUp.prototype._instances[this.id];
            if ("isLoaded" === d[0]) e.push(c ? !0 : !1);
            else {
              var g = c[d[0]](d[1], d[2], d[3]);
              g !== b && e.push(g);
            }
          } else f(this, d[0]);
        })),
        e.length ? (e.length > 1 ? e : e[0]) : c
      );
    }),
    (a.fn.removeStyle = function (c, d) {
      return (
        (d = d ? d : ""),
        this.each(function () {
          for (var e = this, f = c.split(" "), g = 0; g < f.length; g++)
            for (var h = 0; 4 > h; h++) {
              switch (h) {
                case 0:
                  var i = f[g];
                  break;
                case 1:
                  var i = a.MixItUp.prototype._helpers._camelCase(i);
                  break;
                case 2:
                  var i = d + f[g];
                  break;
                case 3:
                  var i = a.MixItUp.prototype._helpers._camelCase(d + f[g]);
              }
              if (
                (e.style[i] !== b &&
                  "unknown" != typeof e.style[i] &&
                  e.style[i].length > 0 &&
                  (e.style[i] = ""),
                !d && 1 === h)
              )
                break;
            }
          e.attributes &&
            e.attributes.style &&
            e.attributes.style !== b &&
            "" === e.attributes.style.value &&
            e.attributes.removeNamedItem("style");
        })
      );
    });
})(jQuery);

(function (t, e) {
  "use strict";
  var i = (t.GreenSockGlobals = t.GreenSockGlobals || t);
  if (!i.TweenLite) {
    var s,
      n,
      r,
      a,
      o,
      l = function (t) {
        var e,
          s = t.split("."),
          n = i;
        for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {};
        return n;
      },
      h = l("com.greensock"),
      _ = 1e-10,
      u = function (t) {
        var e,
          i = [],
          s = t.length;
        for (e = 0; e !== s; i.push(t[e++]));
        return i;
      },
      m = function () {},
      f = (function () {
        var t = Object.prototype.toString,
          e = t.call([]);
        return function (i) {
          return (
            null != i &&
            (i instanceof Array ||
              ("object" == typeof i && !!i.push && t.call(i) === e))
          );
        };
      })(),
      p = {},
      c = function (s, n, r, a) {
        (this.sc = p[s] ? p[s].sc : []),
          (p[s] = this),
          (this.gsClass = null),
          (this.func = r);
        var o = [];
        (this.check = function (h) {
          for (var _, u, m, f, d = n.length, v = d; --d > -1; )
            (_ = p[n[d]] || new c(n[d], [])).gsClass
              ? ((o[d] = _.gsClass), v--)
              : h && _.sc.push(this);
          if (0 === v && r)
            for (
              u = ("com.greensock." + s).split("."),
                m = u.pop(),
                f = l(u.join("."))[m] = this.gsClass = r.apply(r, o),
                a &&
                  ((i[m] = f),
                  "function" == typeof define && define.amd
                    ? define(
                        (t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") +
                          s.split(".").pop(),
                        [],
                        function () {
                          return f;
                        }
                      )
                    : s === e &&
                      "undefined" != typeof module &&
                      module.exports &&
                      (module.exports = f)),
                d = 0;
              this.sc.length > d;
              d++
            )
              this.sc[d].check();
        }),
          this.check(!0);
      },
      d = (t._gsDefine = function (t, e, i, s) {
        return new c(t, e, i, s);
      }),
      v = (h._class = function (t, e, i) {
        return (
          (e = e || function () {}),
          d(
            t,
            [],
            function () {
              return e;
            },
            i
          ),
          e
        );
      });
    d.globals = i;
    var g = [0, 0, 1, 1],
      T = [],
      y = v(
        "easing.Ease",
        function (t, e, i, s) {
          (this._func = t),
            (this._type = i || 0),
            (this._power = s || 0),
            (this._params = e ? g.concat(e) : g);
        },
        !0
      ),
      w = (y.map = {}),
      P = (y.register = function (t, e, i, s) {
        for (
          var n,
            r,
            a,
            o,
            l = e.split(","),
            _ = l.length,
            u = (i || "easeIn,easeOut,easeInOut").split(",");
          --_ > -1;

        )
          for (
            r = l[_],
              n = s ? v("easing." + r, null, !0) : h.easing[r] || {},
              a = u.length;
            --a > -1;

          )
            (o = u[a]),
              (w[r + "." + o] =
                w[o + r] =
                n[o] =
                  t.getRatio ? t : t[o] || new t());
      });
    for (
      r = y.prototype,
        r._calcEnd = !1,
        r.getRatio = function (t) {
          if (this._func)
            return (this._params[0] = t), this._func.apply(null, this._params);
          var e = this._type,
            i = this._power,
            s = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
          return (
            1 === i
              ? (s *= s)
              : 2 === i
              ? (s *= s * s)
              : 3 === i
              ? (s *= s * s * s)
              : 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s : 2 === e ? s : 0.5 > t ? s / 2 : 1 - s / 2
          );
        },
        s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        n = s.length;
      --n > -1;

    )
      (r = s[n] + ",Power" + n),
        P(new y(null, null, 1, n), r, "easeOut", !0),
        P(new y(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")),
        P(new y(null, null, 3, n), r, "easeInOut");
    (w.linear = h.easing.Linear.easeIn), (w.swing = h.easing.Quad.easeInOut);
    var b = v("events.EventDispatcher", function (t) {
      (this._listeners = {}), (this._eventTarget = t || this);
    });
    (r = b.prototype),
      (r.addEventListener = function (t, e, i, s, n) {
        n = n || 0;
        var r,
          l,
          h = this._listeners[t],
          _ = 0;
        for (
          null == h && (this._listeners[t] = h = []), l = h.length;
          --l > -1;

        )
          (r = h[l]),
            r.c === e && r.s === i
              ? h.splice(l, 1)
              : 0 === _ && n > r.pr && (_ = l + 1);
        h.splice(_, 0, { c: e, s: i, up: s, pr: n }),
          this !== a || o || a.wake();
      }),
      (r.removeEventListener = function (t, e) {
        var i,
          s = this._listeners[t];
        if (s)
          for (i = s.length; --i > -1; )
            if (s[i].c === e) return s.splice(i, 1), void 0;
      }),
      (r.dispatchEvent = function (t) {
        var e,
          i,
          s,
          n = this._listeners[t];
        if (n)
          for (e = n.length, i = this._eventTarget; --e > -1; )
            (s = n[e]),
              s.up
                ? s.c.call(s.s || i, { type: t, target: i })
                : s.c.call(s.s || i);
      });
    var k = t.requestAnimationFrame,
      A = t.cancelAnimationFrame,
      S =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      x = S();
    for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k; )
      (k = t[s[n] + "RequestAnimationFrame"]),
        (A =
          t[s[n] + "CancelAnimationFrame"] ||
          t[s[n] + "CancelRequestAnimationFrame"]);
    v("Ticker", function (t, e) {
      var i,
        s,
        n,
        r,
        l,
        h = this,
        u = S(),
        f = e !== !1 && k,
        p = 500,
        c = 33,
        d = function (t) {
          var e,
            a,
            o = S() - x;
          o > p && (u += o - c),
            (x += o),
            (h.time = (x - u) / 1e3),
            (e = h.time - l),
            (!i || e > 0 || t === !0) &&
              (h.frame++, (l += e + (e >= r ? 0.004 : r - e)), (a = !0)),
            t !== !0 && (n = s(d)),
            a && h.dispatchEvent("tick");
        };
      b.call(h),
        (h.time = h.frame = 0),
        (h.tick = function () {
          d(!0);
        }),
        (h.lagSmoothing = function (t, e) {
          (p = t || 1 / _), (c = Math.min(e, p, 0));
        }),
        (h.sleep = function () {
          null != n &&
            (f && A ? A(n) : clearTimeout(n),
            (s = m),
            (n = null),
            h === a && (o = !1));
        }),
        (h.wake = function () {
          null !== n ? h.sleep() : h.frame > 10 && (x = S() - p + 5),
            (s =
              0 === i
                ? m
                : f && k
                ? k
                : function (t) {
                    return setTimeout(t, 0 | (1e3 * (l - h.time) + 1));
                  }),
            h === a && (o = !0),
            d(2);
        }),
        (h.fps = function (t) {
          return arguments.length
            ? ((i = t),
              (r = 1 / (i || 60)),
              (l = this.time + r),
              h.wake(),
              void 0)
            : i;
        }),
        (h.useRAF = function (t) {
          return arguments.length ? (h.sleep(), (f = t), h.fps(i), void 0) : f;
        }),
        h.fps(t),
        setTimeout(function () {
          f && (!n || 5 > h.frame) && h.useRAF(!1);
        }, 1500);
    }),
      (r = h.Ticker.prototype = new h.events.EventDispatcher()),
      (r.constructor = h.Ticker);
    var R = v("core.Animation", function (t, e) {
      if (
        ((this.vars = e = e || {}),
        (this._duration = this._totalDuration = t || 0),
        (this._delay = Number(e.delay) || 0),
        (this._timeScale = 1),
        (this._active = e.immediateRender === !0),
        (this.data = e.data),
        (this._reversed = e.reversed === !0),
        B)
      ) {
        o || a.wake();
        var i = this.vars.useFrames ? q : B;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    (a = R.ticker = new h.Ticker()),
      (r = R.prototype),
      (r._dirty = r._gc = r._initted = r._paused = !1),
      (r._totalTime = r._time = 0),
      (r._rawPrevTime = -1),
      (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
      (r._paused = !1);
    var C = function () {
      o && S() - x > 2e3 && a.wake(), setTimeout(C, 2e3);
    };
    C(),
      (r.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (r.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (r.resume = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!1);
      }),
      (r.seek = function (t, e) {
        return this.totalTime(Number(t), e !== !1);
      }),
      (r.restart = function (t, e) {
        return this.reversed(!1)
          .paused(!1)
          .totalTime(t ? -this._delay : 0, e !== !1, !0);
      }),
      (r.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (r.render = function () {}),
      (r.invalidate = function () {
        return (
          (this._time = this._totalTime = 0),
          (this._initted = this._gc = !1),
          (this._rawPrevTime = -1),
          (this._gc || !this.timeline) && this._enabled(!0),
          this
        );
      }),
      (r.isActive = function () {
        var t,
          e = this._timeline,
          i = this._startTime;
        return (
          !e ||
          (!this._gc &&
            !this._paused &&
            e.isActive() &&
            (t = e.rawTime()) >= i &&
            i + this.totalDuration() / this._timeScale > t)
        );
      }),
      (r._enabled = function (t, e) {
        return (
          o || a.wake(),
          (this._gc = !t),
          (this._active = this.isActive()),
          e !== !0 &&
            (t && !this.timeline
              ? this._timeline.add(this, this._startTime - this._delay)
              : !t && this.timeline && this._timeline._remove(this, !0)),
          !1
        );
      }),
      (r._kill = function () {
        return this._enabled(!1, !1);
      }),
      (r.kill = function (t, e) {
        return this._kill(t, e), this;
      }),
      (r._uncache = function (t) {
        for (var e = t ? this : this.timeline; e; )
          (e._dirty = !0), (e = e.timeline);
        return this;
      }),
      (r._swapSelfInParams = function (t) {
        for (var e = t.length, i = t.concat(); --e > -1; )
          "{self}" === t[e] && (i[e] = this);
        return i;
      }),
      (r.eventCallback = function (t, e, i, s) {
        if ("on" === (t || "").substr(0, 2)) {
          var n = this.vars;
          if (1 === arguments.length) return n[t];
          null == e
            ? delete n[t]
            : ((n[t] = e),
              (n[t + "Params"] =
                f(i) && -1 !== i.join("").indexOf("{self}")
                  ? this._swapSelfInParams(i)
                  : i),
              (n[t + "Scope"] = s)),
            "onUpdate" === t && (this._onUpdate = e);
        }
        return this;
      }),
      (r.delay = function (t) {
        return arguments.length
          ? (this._timeline.smoothChildTiming &&
              this.startTime(this._startTime + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (r.duration = function (t) {
        return arguments.length
          ? ((this._duration = this._totalDuration = t),
            this._uncache(!0),
            this._timeline.smoothChildTiming &&
              this._time > 0 &&
              this._time < this._duration &&
              0 !== t &&
              this.totalTime(this._totalTime * (t / this._duration), !0),
            this)
          : ((this._dirty = !1), this._duration);
      }),
      (r.totalDuration = function (t) {
        return (
          (this._dirty = !1),
          arguments.length ? this.duration(t) : this._totalDuration
        );
      }),
      (r.time = function (t, e) {
        return arguments.length
          ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e))
          : this._time;
      }),
      (r.totalTime = function (t, e, i) {
        if ((o || a.wake(), !arguments.length)) return this._totalTime;
        if (this._timeline) {
          if (
            (0 > t && !i && (t += this.totalDuration()),
            this._timeline.smoothChildTiming)
          ) {
            this._dirty && this.totalDuration();
            var s = this._totalDuration,
              n = this._timeline;
            if (
              (t > s && !i && (t = s),
              (this._startTime =
                (this._paused ? this._pauseTime : n._time) -
                (this._reversed ? s - t : t) / this._timeScale),
              n._dirty || this._uncache(!1),
              n._timeline)
            )
              for (; n._timeline; )
                n._timeline._time !==
                  (n._startTime + n._totalTime) / n._timeScale &&
                  n.totalTime(n._totalTime, !0),
                  (n = n._timeline);
          }
          this._gc && this._enabled(!0, !1),
            (this._totalTime !== t || 0 === this._duration) &&
              (this.render(t, e, !1), O.length && M());
        }
        return this;
      }),
      (r.progress = r.totalProgress =
        function (t, e) {
          return arguments.length
            ? this.totalTime(this.duration() * t, e)
            : this._time / this.duration();
        }),
      (r.startTime = function (t) {
        return arguments.length
          ? (t !== this._startTime &&
              ((this._startTime = t),
              this.timeline &&
                this.timeline._sortChildren &&
                this.timeline.add(this, t - this._delay)),
            this)
          : this._startTime;
      }),
      (r.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        if (
          ((t = t || _), this._timeline && this._timeline.smoothChildTiming)
        ) {
          var e = this._pauseTime,
            i = e || 0 === e ? e : this._timeline.totalTime();
          this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
        }
        return (this._timeScale = t), this._uncache(!1);
      }),
      (r.reversed = function (t) {
        return arguments.length
          ? (t != this._reversed &&
              ((this._reversed = t),
              this.totalTime(
                this._timeline && !this._timeline.smoothChildTiming
                  ? this.totalDuration() - this._totalTime
                  : this._totalTime,
                !0
              )),
            this)
          : this._reversed;
      }),
      (r.paused = function (t) {
        if (!arguments.length) return this._paused;
        if (t != this._paused && this._timeline) {
          o || t || a.wake();
          var e = this._timeline,
            i = e.rawTime(),
            s = i - this._pauseTime;
          !t &&
            e.smoothChildTiming &&
            ((this._startTime += s), this._uncache(!1)),
            (this._pauseTime = t ? i : null),
            (this._paused = t),
            (this._active = this.isActive()),
            !t &&
              0 !== s &&
              this._initted &&
              this.duration() &&
              this.render(
                e.smoothChildTiming
                  ? this._totalTime
                  : (i - this._startTime) / this._timeScale,
                !0,
                !0
              );
        }
        return this._gc && !t && this._enabled(!0, !1), this;
      });
    var D = v("core.SimpleTimeline", function (t) {
      R.call(this, 0, t),
        (this.autoRemoveChildren = this.smoothChildTiming = !0);
    });
    (r = D.prototype = new R()),
      (r.constructor = D),
      (r.kill()._gc = !1),
      (r._first = r._last = null),
      (r._sortChildren = !1),
      (r.add = r.insert =
        function (t, e) {
          var i, s;
          if (
            ((t._startTime = Number(e || 0) + t._delay),
            t._paused &&
              this !== t._timeline &&
              (t._pauseTime =
                t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            (t.timeline = t._timeline = this),
            t._gc && t._enabled(!0, !0),
            (i = this._last),
            this._sortChildren)
          )
            for (s = t._startTime; i && i._startTime > s; ) i = i._prev;
          return (
            i
              ? ((t._next = i._next), (i._next = t))
              : ((t._next = this._first), (this._first = t)),
            t._next ? (t._next._prev = t) : (this._last = t),
            (t._prev = i),
            this._timeline && this._uncache(!0),
            this
          );
        }),
      (r._remove = function (t, e) {
        return (
          t.timeline === this &&
            (e || t._enabled(!1, !0),
            t._prev
              ? (t._prev._next = t._next)
              : this._first === t && (this._first = t._next),
            t._next
              ? (t._next._prev = t._prev)
              : this._last === t && (this._last = t._prev),
            (t._next = t._prev = t.timeline = null),
            this._timeline && this._uncache(!0)),
          this
        );
      }),
      (r.render = function (t, e, i) {
        var s,
          n = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; n; )
          (s = n._next),
            (n._active || (t >= n._startTime && !n._paused)) &&
              (n._reversed
                ? n.render(
                    (n._dirty ? n.totalDuration() : n._totalDuration) -
                      (t - n._startTime) * n._timeScale,
                    e,
                    i
                  )
                : n.render((t - n._startTime) * n._timeScale, e, i)),
            (n = s);
      }),
      (r.rawTime = function () {
        return o || a.wake(), this._totalTime;
      });
    var I = v(
        "TweenLite",
        function (e, i, s) {
          if (
            (R.call(this, i, s), (this.render = I.prototype.render), null == e)
          )
            throw "Cannot tween a null target.";
          this.target = e = "string" != typeof e ? e : I.selector(e) || e;
          var n,
            r,
            a,
            o =
              e.jquery ||
              (e.length &&
                e !== t &&
                e[0] &&
                (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
            l = this.vars.overwrite;
          if (
            ((this._overwrite = l =
              null == l
                ? Q[I.defaultOverwrite]
                : "number" == typeof l
                ? l >> 0
                : Q[l]),
            (o || e instanceof Array || (e.push && f(e))) &&
              "number" != typeof e[0])
          )
            for (
              this._targets = a = u(e),
                this._propLookup = [],
                this._siblings = [],
                n = 0;
              a.length > n;
              n++
            )
              (r = a[n]),
                r
                  ? "string" != typeof r
                    ? r.length &&
                      r !== t &&
                      r[0] &&
                      (r[0] === t ||
                        (r[0].nodeType && r[0].style && !r.nodeType))
                      ? (a.splice(n--, 1), (this._targets = a = a.concat(u(r))))
                      : ((this._siblings[n] = $(r, this, !1)),
                        1 === l &&
                          this._siblings[n].length > 1 &&
                          K(r, this, null, 1, this._siblings[n]))
                    : ((r = a[n--] = I.selector(r)),
                      "string" == typeof r && a.splice(n + 1, 1))
                  : a.splice(n--, 1);
          else
            (this._propLookup = {}),
              (this._siblings = $(e, this, !1)),
              1 === l &&
                this._siblings.length > 1 &&
                K(e, this, null, 1, this._siblings);
          (this.vars.immediateRender ||
            (0 === i &&
              0 === this._delay &&
              this.vars.immediateRender !== !1)) &&
            ((this._time = -_), this.render(-this._delay));
        },
        !0
      ),
      E = function (e) {
        return (
          e.length &&
          e !== t &&
          e[0] &&
          (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
        );
      },
      z = function (t, e) {
        var i,
          s = {};
        for (i in t)
          G[i] ||
            (i in e &&
              "transform" !== i &&
              "x" !== i &&
              "y" !== i &&
              "width" !== i &&
              "height" !== i &&
              "className" !== i &&
              "border" !== i) ||
            !(!U[i] || (U[i] && U[i]._autoCSS)) ||
            ((s[i] = t[i]), delete t[i]);
        t.css = s;
      };
    (r = I.prototype = new R()),
      (r.constructor = I),
      (r.kill()._gc = !1),
      (r.ratio = 0),
      (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
      (r._notifyPluginsOfEnabled = r._lazy = !1),
      (I.version = "1.13.2"),
      (I.defaultEase = r._ease = new y(null, null, 1, 1)),
      (I.defaultOverwrite = "auto"),
      (I.ticker = a),
      (I.autoSleep = !0),
      (I.lagSmoothing = function (t, e) {
        a.lagSmoothing(t, e);
      }),
      (I.selector =
        t.$ ||
        t.jQuery ||
        function (e) {
          var i = t.$ || t.jQuery;
          return i
            ? ((I.selector = i), i(e))
            : "undefined" == typeof document
            ? e
            : document.querySelectorAll
            ? document.querySelectorAll(e)
            : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
        });
    var O = [],
      L = {},
      N = (I._internals = { isArray: f, isSelector: E, lazyTweens: O }),
      U = (I._plugins = {}),
      F = (N.tweenLookup = {}),
      j = 0,
      G = (N.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
      }),
      Q = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0,
      },
      q = (R._rootFramesTimeline = new D()),
      B = (R._rootTimeline = new D()),
      M = (N.lazyRender = function () {
        var t = O.length;
        for (L = {}; --t > -1; )
          (s = O[t]),
            s &&
              s._lazy !== !1 &&
              (s.render(s._lazy[0], s._lazy[1], !0), (s._lazy = !1));
        O.length = 0;
      });
    (B._startTime = a.time),
      (q._startTime = a.frame),
      (B._active = q._active = !0),
      setTimeout(M, 1),
      (R._updateRoot = I.render =
        function () {
          var t, e, i;
          if (
            (O.length && M(),
            B.render((a.time - B._startTime) * B._timeScale, !1, !1),
            q.render((a.frame - q._startTime) * q._timeScale, !1, !1),
            O.length && M(),
            !(a.frame % 120))
          ) {
            for (i in F) {
              for (e = F[i].tweens, t = e.length; --t > -1; )
                e[t]._gc && e.splice(t, 1);
              0 === e.length && delete F[i];
            }
            if (
              ((i = B._first),
              (!i || i._paused) &&
                I.autoSleep &&
                !q._first &&
                1 === a._listeners.tick.length)
            ) {
              for (; i && i._paused; ) i = i._next;
              i || a.sleep();
            }
          }
        }),
      a.addEventListener("tick", R._updateRoot);
    var $ = function (t, e, i) {
        var s,
          n,
          r = t._gsTweenID;
        if (
          (F[r || (t._gsTweenID = r = "t" + j++)] ||
            (F[r] = { target: t, tweens: [] }),
          e && ((s = F[r].tweens), (s[(n = s.length)] = e), i))
        )
          for (; --n > -1; ) s[n] === e && s.splice(n, 1);
        return F[r].tweens;
      },
      K = function (t, e, i, s, n) {
        var r, a, o, l;
        if (1 === s || s >= 4) {
          for (l = n.length, r = 0; l > r; r++)
            if ((o = n[r]) !== e) o._gc || (o._enabled(!1, !1) && (a = !0));
            else if (5 === s) break;
          return a;
        }
        var h,
          u = e._startTime + _,
          m = [],
          f = 0,
          p = 0 === e._duration;
        for (r = n.length; --r > -1; )
          (o = n[r]) === e ||
            o._gc ||
            o._paused ||
            (o._timeline !== e._timeline
              ? ((h = h || H(e, 0, p)), 0 === H(o, h, p) && (m[f++] = o))
              : u >= o._startTime &&
                o._startTime + o.totalDuration() / o._timeScale > u &&
                (((p || !o._initted) && 2e-10 >= u - o._startTime) ||
                  (m[f++] = o)));
        for (r = f; --r > -1; )
          (o = m[r]),
            2 === s && o._kill(i, t) && (a = !0),
            (2 !== s || (!o._firstPT && o._initted)) &&
              o._enabled(!1, !1) &&
              (a = !0);
        return a;
      },
      H = function (t, e, i) {
        for (
          var s = t._timeline, n = s._timeScale, r = t._startTime;
          s._timeline;

        ) {
          if (((r += s._startTime), (n *= s._timeScale), s._paused))
            return -100;
          s = s._timeline;
        }
        return (
          (r /= n),
          r > e
            ? r - e
            : (i && r === e) || (!t._initted && 2 * _ > r - e)
            ? _
            : (r += t.totalDuration() / t._timeScale / n) > e + _
            ? 0
            : r - e - _
        );
      };
    (r._init = function () {
      var t,
        e,
        i,
        s,
        n,
        r = this.vars,
        a = this._overwrittenProps,
        o = this._duration,
        l = !!r.immediateRender,
        h = r.ease;
      if (r.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
          (n = {});
        for (s in r.startAt) n[s] = r.startAt[s];
        if (
          ((n.overwrite = !1),
          (n.immediateRender = !0),
          (n.lazy = l && r.lazy !== !1),
          (n.startAt = n.delay = null),
          (this._startAt = I.to(this.target, 0, n)),
          l)
        )
          if (this._time > 0) this._startAt = null;
          else if (0 !== o) return;
      } else if (r.runBackwards && 0 !== o)
        if (this._startAt)
          this._startAt.render(-1, !0),
            this._startAt.kill(),
            (this._startAt = null);
        else {
          0 !== this._time && (l = !1), (i = {});
          for (s in r) (G[s] && "autoCSS" !== s) || (i[s] = r[s]);
          if (
            ((i.overwrite = 0),
            (i.data = "isFromStart"),
            (i.lazy = l && r.lazy !== !1),
            (i.immediateRender = l),
            (this._startAt = I.to(this.target, 0, i)),
            l)
          ) {
            if (0 === this._time) return;
          } else
            this._startAt._init(),
              this._startAt._enabled(!1),
              this.vars.immediateRender && (this._startAt = null);
        }
      if (
        ((this._ease = h =
          h
            ? h instanceof y
              ? h
              : "function" == typeof h
              ? new y(h, r.easeParams)
              : w[h] || I.defaultEase
            : I.defaultEase),
        r.easeParams instanceof Array &&
          h.config &&
          (this._ease = h.config.apply(h, r.easeParams)),
        (this._easeType = this._ease._type),
        (this._easePower = this._ease._power),
        (this._firstPT = null),
        this._targets)
      )
        for (t = this._targets.length; --t > -1; )
          this._initProps(
            this._targets[t],
            (this._propLookup[t] = {}),
            this._siblings[t],
            a ? a[t] : null
          ) && (e = !0);
      else
        e = this._initProps(this.target, this._propLookup, this._siblings, a);
      if (
        (e && I._onPluginEvent("_onInitAllProps", this),
        a &&
          (this._firstPT ||
            ("function" != typeof this.target && this._enabled(!1, !1))),
        r.runBackwards)
      )
        for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
      (this._onUpdate = r.onUpdate), (this._initted = !0);
    }),
      (r._initProps = function (e, i, s, n) {
        var r, a, o, l, h, _;
        if (null == e) return !1;
        L[e._gsTweenID] && M(),
          this.vars.css ||
            (e.style &&
              e !== t &&
              e.nodeType &&
              U.css &&
              this.vars.autoCSS !== !1 &&
              z(this.vars, e));
        for (r in this.vars) {
          if (((_ = this.vars[r]), G[r]))
            _ &&
              (_ instanceof Array || (_.push && f(_))) &&
              -1 !== _.join("").indexOf("{self}") &&
              (this.vars[r] = _ = this._swapSelfInParams(_, this));
          else if (
            U[r] &&
            (l = new U[r]())._onInitTween(e, this.vars[r], this)
          ) {
            for (
              this._firstPT = h =
                {
                  _next: this._firstPT,
                  t: l,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: !0,
                  n: r,
                  pg: !0,
                  pr: l._priority,
                },
                a = l._overwriteProps.length;
              --a > -1;

            )
              i[l._overwriteProps[a]] = this._firstPT;
            (l._priority || l._onInitAllProps) && (o = !0),
              (l._onDisable || l._onEnable) &&
                (this._notifyPluginsOfEnabled = !0);
          } else
            (this._firstPT =
              i[r] =
              h =
                {
                  _next: this._firstPT,
                  t: e,
                  p: r,
                  f: "function" == typeof e[r],
                  n: r,
                  pg: !1,
                  pr: 0,
                }),
              (h.s = h.f
                ? e[
                    r.indexOf("set") ||
                    "function" != typeof e["get" + r.substr(3)]
                      ? r
                      : "get" + r.substr(3)
                  ]()
                : parseFloat(e[r])),
              (h.c =
                "string" == typeof _ && "=" === _.charAt(1)
                  ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2))
                  : Number(_) - h.s || 0);
          h && h._next && (h._next._prev = h);
        }
        return n && this._kill(n, e)
          ? this._initProps(e, i, s, n)
          : this._overwrite > 1 &&
            this._firstPT &&
            s.length > 1 &&
            K(e, this, i, this._overwrite, s)
          ? (this._kill(i, e), this._initProps(e, i, s, n))
          : (this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration)) &&
              (L[e._gsTweenID] = !0),
            o);
      }),
      (r.render = function (t, e, i) {
        var s,
          n,
          r,
          a,
          o = this._time,
          l = this._duration,
          h = this._rawPrevTime;
        if (t >= l)
          (this._totalTime = this._time = l),
            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || ((s = !0), (n = "onComplete")),
            0 === l &&
              (this._initted || !this.vars.lazy || i) &&
              (this._startTime === this._timeline._duration && (t = 0),
              (0 === t || 0 > h || h === _) &&
                h !== t &&
                ((i = !0), h > _ && (n = "onReverseComplete")),
              (this._rawPrevTime = a = !e || t || h === t ? t : _));
        else if (1e-7 > t)
          (this._totalTime = this._time = 0),
            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
            (0 !== o || (0 === l && h > 0 && h !== _)) &&
              ((n = "onReverseComplete"), (s = this._reversed)),
            0 > t &&
              ((this._active = !1),
              0 === l &&
                (this._initted || !this.vars.lazy || i) &&
                (h >= 0 && (i = !0),
                (this._rawPrevTime = a = !e || t || h === t ? t : _))),
            this._initted || (i = !0);
        else if (((this._totalTime = this._time = t), this._easeType)) {
          var u = t / l,
            m = this._easeType,
            f = this._easePower;
          (1 === m || (3 === m && u >= 0.5)) && (u = 1 - u),
            3 === m && (u *= 2),
            1 === f
              ? (u *= u)
              : 2 === f
              ? (u *= u * u)
              : 3 === f
              ? (u *= u * u * u)
              : 4 === f && (u *= u * u * u * u),
            (this.ratio =
              1 === m ? 1 - u : 2 === m ? u : 0.5 > t / l ? u / 2 : 1 - u / 2);
        } else this.ratio = this._ease.getRatio(t / l);
        if (this._time !== o || i) {
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !i &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = this._totalTime = o),
                (this._rawPrevTime = h),
                O.push(this),
                (this._lazy = [t, e]),
                void 0
              );
            this._time && !s
              ? (this.ratio = this._ease.getRatio(this._time / l))
              : s &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== o &&
                  t >= 0 &&
                  (this._active = !0)),
              0 === o &&
                (this._startAt &&
                  (t >= 0
                    ? this._startAt.render(t, e, i)
                    : n || (n = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._time || 0 === l) &&
                  (e ||
                    this.vars.onStart.apply(
                      this.vars.onStartScope || this,
                      this.vars.onStartParams || T
                    ))),
              r = this._firstPT;
            r;

          )
            r.f
              ? r.t[r.p](r.c * this.ratio + r.s)
              : (r.t[r.p] = r.c * this.ratio + r.s),
              (r = r._next);
          this._onUpdate &&
            (0 > t &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(t, e, i),
            e ||
              ((this._time !== o || s) &&
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || T
                ))),
            n &&
              (!this._gc || i) &&
              (0 > t &&
                this._startAt &&
                !this._onUpdate &&
                this._startTime &&
                this._startAt.render(t, e, i),
              s &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !e &&
                this.vars[n] &&
                this.vars[n].apply(
                  this.vars[n + "Scope"] || this,
                  this.vars[n + "Params"] || T
                ),
              0 === l &&
                this._rawPrevTime === _ &&
                a !== _ &&
                (this._rawPrevTime = 0));
        }
      }),
      (r._kill = function (t, e) {
        if (
          ("all" === t && (t = null),
          null == t && (null == e || e === this.target))
        )
          return (this._lazy = !1), this._enabled(!1, !1);
        e =
          "string" != typeof e
            ? e || this._targets || this.target
            : I.selector(e) || e;
        var i, s, n, r, a, o, l, h;
        if ((f(e) || E(e)) && "number" != typeof e[0])
          for (i = e.length; --i > -1; ) this._kill(t, e[i]) && (o = !0);
        else {
          if (this._targets) {
            for (i = this._targets.length; --i > -1; )
              if (e === this._targets[i]) {
                (a = this._propLookup[i] || {}),
                  (this._overwrittenProps = this._overwrittenProps || []),
                  (s = this._overwrittenProps[i] =
                    t ? this._overwrittenProps[i] || {} : "all");
                break;
              }
          } else {
            if (e !== this.target) return !1;
            (a = this._propLookup),
              (s = this._overwrittenProps =
                t ? this._overwrittenProps || {} : "all");
          }
          if (a) {
            (l = t || a),
              (h =
                t !== s &&
                "all" !== s &&
                t !== a &&
                ("object" != typeof t || !t._tempKill));
            for (n in l)
              (r = a[n]) &&
                (r.pg && r.t._kill(l) && (o = !0),
                (r.pg && 0 !== r.t._overwriteProps.length) ||
                  (r._prev
                    ? (r._prev._next = r._next)
                    : r === this._firstPT && (this._firstPT = r._next),
                  r._next && (r._next._prev = r._prev),
                  (r._next = r._prev = null)),
                delete a[n]),
                h && (s[n] = 1);
            !this._firstPT && this._initted && this._enabled(!1, !1);
          }
        }
        return o;
      }),
      (r.invalidate = function () {
        return (
          this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this),
          (this._firstPT =
            this._overwrittenProps =
            this._startAt =
            this._onUpdate =
              null),
          (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
          (this._propLookup = this._targets ? {} : []),
          R.prototype.invalidate.call(this),
          this.vars.immediateRender &&
            ((this._time = -_), this.render(-this._delay)),
          this
        );
      }),
      (r._enabled = function (t, e) {
        if ((o || a.wake(), t && this._gc)) {
          var i,
            s = this._targets;
          if (s)
            for (i = s.length; --i > -1; )
              this._siblings[i] = $(s[i], this, !0);
          else this._siblings = $(this.target, this, !0);
        }
        return (
          R.prototype._enabled.call(this, t, e),
          this._notifyPluginsOfEnabled && this._firstPT
            ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            : !1
        );
      }),
      (I.to = function (t, e, i) {
        return new I(t, e, i);
      }),
      (I.from = function (t, e, i) {
        return (
          (i.runBackwards = !0),
          (i.immediateRender = 0 != i.immediateRender),
          new I(t, e, i)
        );
      }),
      (I.fromTo = function (t, e, i, s) {
        return (
          (s.startAt = i),
          (s.immediateRender =
            0 != s.immediateRender && 0 != i.immediateRender),
          new I(t, e, s)
        );
      }),
      (I.delayedCall = function (t, e, i, s, n) {
        return new I(e, 0, {
          delay: t,
          onComplete: e,
          onCompleteParams: i,
          onCompleteScope: s,
          onReverseComplete: e,
          onReverseCompleteParams: i,
          onReverseCompleteScope: s,
          immediateRender: !1,
          useFrames: n,
          overwrite: 0,
        });
      }),
      (I.set = function (t, e) {
        return new I(t, 0, e);
      }),
      (I.getTweensOf = function (t, e) {
        if (null == t) return [];
        t = "string" != typeof t ? t : I.selector(t) || t;
        var i, s, n, r;
        if ((f(t) || E(t)) && "number" != typeof t[0]) {
          for (i = t.length, s = []; --i > -1; )
            s = s.concat(I.getTweensOf(t[i], e));
          for (i = s.length; --i > -1; )
            for (r = s[i], n = i; --n > -1; ) r === s[n] && s.splice(i, 1);
        } else
          for (s = $(t).concat(), i = s.length; --i > -1; )
            (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
        return s;
      }),
      (I.killTweensOf = I.killDelayedCallsTo =
        function (t, e, i) {
          "object" == typeof e && ((i = e), (e = !1));
          for (var s = I.getTweensOf(t, e), n = s.length; --n > -1; )
            s[n]._kill(i, t);
        });
    var J = v(
      "plugins.TweenPlugin",
      function (t, e) {
        (this._overwriteProps = (t || "").split(",")),
          (this._propName = this._overwriteProps[0]),
          (this._priority = e || 0),
          (this._super = J.prototype);
      },
      !0
    );
    if (
      ((r = J.prototype),
      (J.version = "1.10.1"),
      (J.API = 2),
      (r._firstPT = null),
      (r._addTween = function (t, e, i, s, n, r) {
        var a, o;
        return null != s &&
          (a =
            "number" == typeof s || "=" !== s.charAt(1)
              ? Number(s) - i
              : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)))
          ? ((this._firstPT = o =
              {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: n || e,
                r: r,
              }),
            o._next && (o._next._prev = o),
            o)
          : void 0;
      }),
      (r.setRatio = function (t) {
        for (var e, i = this._firstPT, s = 1e-6; i; )
          (e = i.c * t + i.s),
            i.r ? (e = Math.round(e)) : s > e && e > -s && (e = 0),
            i.f ? i.t[i.p](e) : (i.t[i.p] = e),
            (i = i._next);
      }),
      (r._kill = function (t) {
        var e,
          i = this._overwriteProps,
          s = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = [];
        else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
        for (; s; )
          null != t[s.n] &&
            (s._next && (s._next._prev = s._prev),
            s._prev
              ? ((s._prev._next = s._next), (s._prev = null))
              : this._firstPT === s && (this._firstPT = s._next)),
            (s = s._next);
        return !1;
      }),
      (r._roundProps = function (t, e) {
        for (var i = this._firstPT; i; )
          (t[this._propName] ||
            (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
            (i.r = e),
            (i = i._next);
      }),
      (I._onPluginEvent = function (t, e) {
        var i,
          s,
          n,
          r,
          a,
          o = e._firstPT;
        if ("_onInitAllProps" === t) {
          for (; o; ) {
            for (a = o._next, s = n; s && s.pr > o.pr; ) s = s._next;
            (o._prev = s ? s._prev : r) ? (o._prev._next = o) : (n = o),
              (o._next = s) ? (s._prev = o) : (r = o),
              (o = a);
          }
          o = e._firstPT = n;
        }
        for (; o; )
          o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
            (o = o._next);
        return i;
      }),
      (J.activate = function (t) {
        for (var e = t.length; --e > -1; )
          t[e].API === J.API && (U[new t[e]()._propName] = t[e]);
        return !0;
      }),
      (d.plugin = function (t) {
        if (!(t && t.propName && t.init && t.API))
          throw "illegal plugin definition.";
        var e,
          i = t.propName,
          s = t.priority || 0,
          n = t.overwriteProps,
          r = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_roundProps",
            initAll: "_onInitAllProps",
          },
          a = v(
            "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function () {
              J.call(this, i, s), (this._overwriteProps = n || []);
            },
            t.global === !0
          ),
          o = (a.prototype = new J(i));
        (o.constructor = a), (a.API = t.API);
        for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
        return (a.version = t.version), J.activate([a]), a;
      }),
      (s = t._gsQueue))
    ) {
      for (n = 0; s.length > n; n++) s[n]();
      for (r in p)
        p[r].func ||
          t.console.log(
            "GSAP encountered missing dependency: com.greensock." + r
          );
    }
    o = !1;
  }
})(
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window,
  "TweenLite"
);

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

(function( $ ){
    "use strict";

    var $window = $(window);
    var windowHeight = $window.height();

    $window.resize(function () {
        windowHeight = $window.height();
    });

    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it
        $this.each(function(){
            firstTop = $this.offset().top;
        });

        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            };
        }

        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        // function to be called whenever the window is scrolled or resized
        function update(){
            var pos = $window.scrollTop();

            $this.each(function(){
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }

        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
    (e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
    this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
    [this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
    g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
    baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
        !1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
    a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
    !0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
        this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
        this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
        c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
        f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
        f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
    (a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
    f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
    this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
        this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
        this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
        !0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
        c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
        this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
    checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
    addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
    a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
        a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
        !1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
    gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
        "function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
        function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
            a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
            !1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
        a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
        (c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
        a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
        b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
        [d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
        100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
        this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
    "px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
        f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
        a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
    f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
    responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */
(function($){var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:w,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,padZeroes:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false}},_getters:['getTimes'],_rtlClass:w+'-rtl',_sectionClass:w+'-section',_amountClass:w+'-amount',_periodClass:w+'-period',_rowClass:w+'-row',_holdingClass:w+'-holding',_showClass:w+'-show',_descrClass:w+'-descr',_timerElems:[],_init:function(){var c=this;this._super();this._serverSyncs=[];var d=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var e=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(e?(performance.now()+performance.timing.navigationStart):d()):a||d());if(b-g>=1000){c._updateElems();g=b}f(timerCallBack)}var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var g=0;if(!f||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){c._updateElems()},980)}else{g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d();f(timerCallBack)}},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},resync:function(){var d=this;$('.'+this._getMarker()).each(function(){var a=$.data(this,d.name);if(a.options.serverSync){var b=null;for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][0]==a.options.serverSync){b=d._serverSyncs[i];break}}if(b[2]==null){var c=($.isFunction(a.options.serverSync)?a.options.serverSync.apply(this,[]):null);b[2]=(c?new Date().getTime()-c.getTime():0)-b[1]}if(a._since){a._since.setMilliseconds(a._since.getMilliseconds()+b[2])}a._until.setMilliseconds(a._until.getMilliseconds()+b[2])}});for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][2]!=null){d._serverSyncs[i][1]+=d._serverSyncs[i][2];delete d._serverSyncs[i][2]}}},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){if(!this._hasElem(a)){this._timerElems.push(a)}},_hasElem:function(a){return($.inArray(a,this._timerElems)>-1)},_removeElem:function(b){this._timerElems=$.map(this._timerElems,function(a){return(a==b?null:a)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(a,b,c){if(c.layout){c.layout=c.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(b.options,c);var d=(b.options.timezone!=c.timezone);$.extend(b.options,c);this._adjustSettings(a,b,c.until!=null||c.since!=null||d);var e=new Date();if((b._since&&b._since<e)||(b._until&&b._until>e)){this._addElem(a[0])}this._updateCountdown(a,b)},_updateCountdown:function(a,b){a=a.jquery?a:$(a);b=b||this._getInst(a);if(!b){return}a.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var c=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(c)%b.options.tickInterval==0){b.options.onTick.apply(a[0],[c])}}var d=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(d&&!b._expiring){b._expiring=true;if(this._hasElem(a[0])||b.options.alwaysExpire){this._removeElem(a[0]);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a[0],[])}if(b.options.expiryText){var e=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a[0],b);b.options.layout=e}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeElem(a[0])}},_resetExtraLabels:function(a,b){for(var n in b){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=b[n]}}for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)&&typeof b[n]==='undefined'){a[n]=null}}},_adjustSettings:function(a,b,c){var d=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){d=this._serverSyncs[i][1];break}}if(d!=null){var e=(b.options.serverSync?d:0);var f=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a[0],[]):null);var f=new Date();var e=(g?f.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-f.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,f));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_preDestroy:function(a,b){this._removeElem(a[0]);a.empty()},pause:function(a){this._hold(a,'pause')},lap:function(a){this._hold(a,'lap')},resume:function(a){this._hold(a,null)},toggle:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'pause':'resume'](a)},toggleLap:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'lap':'resume'](a)},_hold:function(a,b){var c=$.data(a,this.name);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addElem(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.name,c);this._updateCountdown(a,c)}},getTimes:function(a){var b=$.data(a,this.name);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=this;var n=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var o=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var p=(k==null?l:(typeof k=='string'?o(k):(typeof k=='number'?n(k):k)));if(p)p.setMilliseconds(0);return p},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=(c.options.padZeroes?2:1);var o=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+d._sectionClass+'">'+'<span class="'+d._amountClass+'">'+d._minDigits(c,c._periods[a],n)+'</span>'+'<span class="'+d._periodClass+'">'+(b?b[a]:k[a])+'</span></span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+o(Y)+o(O)+o(W)+o(D)+o(H)+o(M)+o(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=this._getDaysInMonth(f.getFullYear(),f.getMonth());var j=this._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=this._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}})})(jQuery);
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

!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(d){var s,i=0,a=Array.prototype.slice;return d.cleanData=(s=d.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)try{(e=d._data(i,"events"))&&e.remove&&d(i).triggerHandler("remove")}catch(t){}s(t)}),d.widget=function(t,i,e){var n,s,o,r,a={},u=t.split(".")[0];return t=t.split(".")[1],e||(e=i,i=d.Widget),d.expr[":"][(n=u+"-"+t).toLowerCase()]=function(t){return!!d.data(t,n)},d[u]=d[u]||{},s=d[u][t],o=d[u][t]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},d.extend(o,s,{version:e.version,_proto:d.extend({},e),_childConstructors:[]}),(r=new i).options=d.widget.extend({},r.options),d.each(e,function(e,n){function s(){return i.prototype[e].apply(this,arguments)}function o(t){return i.prototype[e].apply(this,t)}d.isFunction(n)?a[e]=function(){var t,e=this._super,i=this._superApply;return this._super=s,this._superApply=o,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}:a[e]=n}),o.prototype=d.widget.extend(r,{widgetEventPrefix:s&&r.widgetEventPrefix||t},a,{constructor:o,namespace:u,widgetName:t,widgetFullName:n}),s?(d.each(s._childConstructors,function(t,e){var i=e.prototype;d.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete s._childConstructors):i._childConstructors.push(o),d.widget.bridge(t,o),o},d.widget.extend=function(t){for(var e,i,n=a.call(arguments,1),s=0,o=n.length;s<o;s++)for(e in n[s])i=n[s][e],n[s].hasOwnProperty(e)&&void 0!==i&&(d.isPlainObject(i)?t[e]=d.isPlainObject(t[e])?d.widget.extend({},t[e],i):d.widget.extend({},i):t[e]=i);return t},d.widget.bridge=function(o,e){var r=e.prototype.widgetFullName||o;d.fn[o]=function(i){var t="string"==typeof i,n=a.call(arguments,1),s=this;return t?this.each(function(){var t,e=d.data(this,r);return"instance"===i?(s=e,!1):e?d.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,n))!==e&&void 0!==t?(s=t&&t.jquery?s.pushStack(t.get()):t,!1):void 0:d.error("no such method '"+i+"' for "+o+" widget instance"):d.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):(n.length&&(i=d.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=d.data(this,r);t?(t.option(i||{}),t._init&&t._init()):d.data(this,r,new e(i,this))})),s}},d.Widget=function(){},d.Widget._childConstructors=[],d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=d(e||this.defaultElement||this)[0],this.element=d(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=d(),this.hoverable=d(),this.focusable=d(),e!==this&&(d.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=d(e.style?e.ownerDocument:e.document||e),this.window=d(this.document[0].defaultView||this.document[0].parentWindow)),this.options=d.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:d.noop,_getCreateEventData:d.noop,_create:d.noop,_init:d.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(d.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:d.noop,widget:function(){return this.element},option:function(t,e){var i,n,s,o=t;if(0===arguments.length)return d.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(n=o[t]=d.widget.extend({},this.options[t]),s=0;s<i.length-1;s++)n[i[s]]=n[i[s]]||{},n=n[i[s]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(s,o,t){var r,a=this;"boolean"!=typeof s&&(t=o,o=s,s=!1),t?(o=r=d(o),this.bindings=this.bindings.add(o)):(t=o,o=this.element,r=this.widget()),d.each(t,function(t,e){function i(){if(s||!0!==a.options.disabled&&!d(this).hasClass("ui-state-disabled"))return("string"==typeof e?a[e]:e).apply(a,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||d.guid++);var n=t.match(/^([\w:-]*)\s*(.*)$/),t=n[1]+a.eventNamespace,n=n[2];n?r.delegate(n,t,i):o.bind(t,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e),this.bindings=d(this.bindings.not(t).get()),this.focusable=d(this.focusable.not(t).get()),this.hoverable=d(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){d(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){d(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){d(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){d(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,o=this.options[t];if(i=i||{},(e=d.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],s=e.originalEvent)for(n in s)n in e||(e[n]=s[n]);return this.element.trigger(e,i),!(d.isFunction(o)&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},d.each({show:"fadeIn",hide:"fadeOut"},function(o,r){d.Widget.prototype["_"+o]=function(e,t,i){var n=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:o,s=!d.isEmptyObject(t="number"==typeof(t=t||{})?{duration:t}:t);t.complete=i,t.delay&&e.delay(t.delay),s&&d.effects&&d.effects.effect[n]?e[o](t):n!==o&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){d(this)[o](),i&&i.call(e[0]),t()})}}),d.widget});