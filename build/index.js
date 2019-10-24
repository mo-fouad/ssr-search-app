module.exports = (function(n) {
    var e = {};
    function t(r) {
        if (e[r]) return e[r].exports;
        var o = (e[r] = { i: r, l: !1, exports: {} });
        return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
        (t.m = n),
        (t.c = e),
        (t.d = function(n, e, r) {
            t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
        }),
        (t.r = function(n) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (t.t = function(n, e) {
            if ((1 & e && (n = t(n)), 8 & e)) return n;
            if (4 & e && "object" == typeof n && n && n.__esModule) return n;
            var r = Object.create(null);
            if (
                (t.r(r),
                Object.defineProperty(r, "default", { enumerable: !0, value: n }),
                2 & e && "string" != typeof n)
            )
                for (var o in n)
                    t.d(
                        r,
                        o,
                        function(e) {
                            return n[e];
                        }.bind(null, o)
                    );
            return r;
        }),
        (t.n = function(n) {
            var e =
                n && n.__esModule
                    ? function() {
                          return n.default;
                      }
                    : function() {
                          return n;
                      };
            return t.d(e, "a", e), e;
        }),
        (t.o = function(n, e) {
            return Object.prototype.hasOwnProperty.call(n, e);
        }),
        (t.p = "/"),
        t((t.s = 8))
    );
})([
    function(n, e) {
        n.exports = require("react");
    },
    function(n, e) {
        n.exports = require("express");
    },
    function(n, e) {
        n.exports = require("path");
    },
    function(n, e) {
        n.exports = require("fs");
    },
    function(n, e) {
        n.exports = require("escape-string-regexp");
    },
    function(n, e) {
        n.exports = require("react-dom/server");
    },
    function(n, e) {
        n.exports = require("axios");
    },
    function(n, e) {
        n.exports = require("react-html-parser");
    },
    function(n, e, t) {
        n.exports = t(9);
    },
    function(n, e, t) {
        "use strict";
        t.r(e);
        var r = t(1),
            o = t.n(r),
            a = t(12).default;
        o()()
            .use(function(n, e) {
                return a.handle(n, e);
            })
            .listen(process.env.PORT || 3e3, function() {
                console.log("React SSR App is running: http://localhost:".concat(process.env.PORT || 3e3));
            });
    },
    function(n, e, t) {
        (n.exports = t(11)(!1)).push([
            n.i,
            "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote,\nq {\n  quotes: none; }\n  blockquote:before, blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto; }\n  @media only screen and (min-width: 33.75em) {\n    .container {\n      width: 80%; } }\n  @media only screen and (min-width: 60em) {\n    .container {\n      width: 75%;\n      max-width: 60rem; } }\n\n.row {\n  position: relative;\n  width: 100%; }\n  .row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: Helvetica, sans-serif;\n  background: #fafafa; }\n\n.SEOHidden {\n  position: absolute;\n  top: -9999px;\n  left: -9999px; }\n\n.search-bar {\n  position: relative;\n  background: #fff;\n  padding: 10px;\n  border-bottom: 1px solid #eee; }\n  .search-bar--input {\n    width: 100%;\n    height: 70px;\n    font-size: 22px;\n    padding: 20px; }\n  .search-bar--clear {\n    position: absolute;\n    cursor: pointer;\n    border: none;\n    width: 30px;\n    height: 30px;\n    display: block;\n    top: 30px;\n    right: 30px;\n    padding: 5px; }\n    .search-bar--clear:after {\n      content: url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='20' width='20'><line x1='0' y1='0' x2='20' y2='20' stroke='black' stroke-width='2'/><line x1='20' y1='0' x2='0' y2='20' stroke='black' stroke-width='2'/></svg>\"); }\n  .search-bar--loading {\n    position: absolute;\n    width: 41px;\n    height: 43px;\n    top: 25px;\n    display: inline-block;\n    right: 25px; }\n    .search-bar--loading:after {\n      content: \" \";\n      display: block;\n      width: 36px;\n      height: 36px;\n      margin: 1px;\n      border-radius: 50%;\n      border: 2px solid #333;\n      border-color: #333 transparent #333 transparent;\n      -webkit-animation: lds-dual-ring 0.5s ease-in-out infinite;\n              animation: lds-dual-ring 0.5s ease-in-out infinite; }\n  .search-bar--result {\n    background: #ffffff;\n    padding: 0 10px;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 101%;\n    max-height: 250px;\n    overflow-y: scroll; }\n    .search-bar--result ul li {\n      margin: 10px 0 5px 0;\n      border-bottom: 1px solid #eee;\n      padding-bottom: 5px;\n      cursor: pointer;\n      color: #888; }\n      .search-bar--result ul li:last-child {\n        border-bottom: none; }\n      .search-bar--result ul li span {\n        font-weight: bold;\n        text-transform: uppercase;\n        color: #333333; }\n  .search-bar--nothing {\n    display: block;\n    padding: 10px 0;\n    font-size: 12px;\n    text-align: center;\n    width: 100%; }\n\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes lds-dual-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.search-history {\n  margin: 10px 0; }\n  .search-history--title {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px; }\n    .search-history--title span {\n      cursor: pointer;\n      font-size: 12px;\n      margin-left: auto;\n      text-decoration: underline; }\n  .search-history ul li {\n    display: flex;\n    margin: 5px 0;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 5px; }\n    .search-history ul li:last-child {\n      border-bottom: none; }\n    .search-history ul li span {\n      font-size: 12px; }\n      .search-history ul li span:nth-child(2) {\n        margin-left: auto; }\n      .search-history ul li span:last-child {\n        cursor: pointer;\n        width: 20px;\n        margin-left: 10px; }\n        .search-history ul li span:last-child:after {\n          content: url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='10' width='10'><line x1='0' y1='0' x2='10' y2='10' stroke='black' stroke-width='1'/><line x1='10' y1='0' x2='0' y2='10' stroke='black' stroke-width='1'/></svg>\"); }\n",
            ""
        ]);
    },
    function(n, e, t) {
        "use strict";
        n.exports = function(n) {
            var e = [];
            return (
                (e.toString = function() {
                    return this.map(function(e) {
                        var t = (function(n, e) {
                            var t = n[1] || "",
                                r = n[3];
                            if (!r) return t;
                            if (e && "function" == typeof btoa) {
                                var o =
                                        ((i = r),
                                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                                            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                                            " */"),
                                    a = r.sources.map(function(n) {
                                        return "/*# sourceURL=" + r.sourceRoot + n + " */";
                                    });
                                return [t]
                                    .concat(a)
                                    .concat([o])
                                    .join("\n");
                            }
                            var i;
                            return [t].join("\n");
                        })(e, n);
                        return e[2] ? "@media " + e[2] + "{" + t + "}" : t;
                    }).join("");
                }),
                (e.i = function(n, t) {
                    "string" == typeof n && (n = [[null, n, ""]]);
                    for (var r = {}, o = 0; o < this.length; o++) {
                        var a = this[o][0];
                        null != a && (r[a] = !0);
                    }
                    for (o = 0; o < n.length; o++) {
                        var i = n[o];
                        (null != i[0] && r[i[0]]) ||
                            (t && !i[2] ? (i[2] = t) : t && (i[2] = "(" + i[2] + ") and (" + t + ")"), e.push(i));
                    }
                }),
                e
            );
        };
    },
    function(n, e, t) {
        "use strict";
        t.r(e);
        var r = t(2),
            o = t.n(r),
            a = t(1),
            i = t.n(a),
            c = t(3),
            s = t.n(c),
            l = function() {
                return function(n, e, t) {
                    var r = o.a.join(__dirname, "/public");
                    s.a.readFile("".concat(r, "/app.html"), "utf8", function(r, o) {
                        r ? e.status(500).send("Error parsing app.html") : ((n.html = o), t());
                    });
                };
            },
            u = t(4),
            p = t.n(u),
            f = t(0),
            d = t.n(f),
            h = t(5),
            m = t.n(h);
        function b(n) {
            return (
                (function(n) {
                    if (Array.isArray(n)) {
                        for (var e = 0, t = new Array(n.length); e < n.length; e++) t[e] = n[e];
                        return t;
                    }
                })(n) ||
                (function(n) {
                    if (Symbol.iterator in Object(n) || "[object Arguments]" === Object.prototype.toString.call(n))
                        return Array.from(n);
                })(n) ||
                (function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        function g(n, e) {
            return (
                (function(n) {
                    if (Array.isArray(n)) return n;
                })(n) ||
                (function(n, e) {
                    var t = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (
                            var i, c = n[Symbol.iterator]();
                            !(r = (i = c.next()).done) && (t.push(i.value), !e || t.length !== e);
                            r = !0
                        );
                    } catch (n) {
                        (o = !0), (a = n);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                    return t;
                })(n, e) ||
                (function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                })()
            );
        }
        var y = t(6),
            v = t.n(y);
        t(10);
        function x(n, e) {
            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function w(n, e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(n, r.key, r);
            }
        }
        function S(n, e, t) {
            return e && w(n.prototype, e), t && w(n, t), n;
        }
        function k(n) {
            return (k =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function(n) {
                          return typeof n;
                      }
                    : function(n) {
                          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype
                              ? "symbol"
                              : typeof n;
                      })(n);
        }
        function E(n) {
            return (E =
                "function" == typeof Symbol && "symbol" === k(Symbol.iterator)
                    ? function(n) {
                          return k(n);
                      }
                    : function(n) {
                          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype
                              ? "symbol"
                              : k(n);
                      })(n);
        }
        function O(n, e) {
            return !e || ("object" !== E(e) && "function" != typeof e)
                ? (function(n) {
                      if (void 0 === n)
                          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return n;
                  })(n)
                : e;
        }
        function j(n) {
            return (j = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(n) {
                      return n.__proto__ || Object.getPrototypeOf(n);
                  })(n);
        }
        function T(n, e) {
            return (T =
                Object.setPrototypeOf ||
                function(n, e) {
                    return (n.__proto__ = e), n;
                })(n, e);
        }
        function _(n, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            (n.prototype = Object.create(e && e.prototype, {
                constructor: { value: n, writable: !0, configurable: !0 }
            })),
                e && T(n, e);
        }
        var q = t(7),
            F = t.n(q),
            N = (function(n) {
                function e() {
                    return x(this, e), O(this, j(e).apply(this, arguments));
                }
                return (
                    _(e, f["PureComponent"]),
                    S(e, [
                        {
                            key: "render",
                            value: function() {
                                var n = this.props,
                                    e = n.searchKeyWord,
                                    t = n.movieTitle;
                                return d.a.createElement(
                                    d.a.Fragment,
                                    null,
                                    F()(t.replace(new RegExp(e, "gi"), "<span> ".concat(e, "</span>")))
                                );
                            }
                        }
                    ]),
                    e
                );
            })(),
            P = (function(n) {
                function e() {
                    var n, t;
                    x(this, e);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (
                        ((t = O(this, (n = j(e)).call.apply(n, [this].concat(o)))).state = {
                            clear: !1,
                            searchKeyWord: ""
                        }),
                        (t.searchFor = function(n) {
                            var e = n.target.value,
                                r = t.props.onSearchFor;
                            t.setState({ searchKeyWord: e }),
                                r(e),
                                e.length > 0 ? t.setState({ clear: !0 }) : t.setState({ clear: !1 });
                        }),
                        (t.restForm = function() {
                            t.setState({ searchKeyWord: "" });
                        }),
                        t
                    );
                }
                return (
                    _(e, f["Component"]),
                    S(e, [
                        {
                            key: "render",
                            value: function() {
                                var n = this.props.searchResults,
                                    e = (n = void 0 === n ? {} : n).results,
                                    t = this.state.searchKeyWord;
                                return d.a.createElement(
                                    d.a.Fragment,
                                    null,
                                    d.a.createElement(
                                        "div",
                                        { className: "search-bar" },
                                        d.a.createElement(
                                            "form",
                                            { role: "search", "aria-label": "header-search" },
                                            d.a.createElement("input", {
                                                className: "search-bar--input",
                                                id: "searchInput",
                                                type: "text",
                                                "aria-label": "Search",
                                                placeholder: "Search For Movies",
                                                spellCheck: "false",
                                                autoComplete: "off",
                                                value: this.state.searchKeyWord,
                                                onChange: this.searchFor
                                            })
                                        ),
                                        this.props.isSearching &&
                                            d.a.createElement("span", { className: "search-bar--loading" }),
                                        this.state.clear &&
                                            !this.props.isSearching &&
                                            d.a.createElement("span", {
                                                onClick: this.restForm,
                                                className: "search-bar--clear"
                                            }),
                                        e &&
                                            t.length > 0 &&
                                            d.a.createElement(
                                                d.a.Fragment,
                                                null,
                                                e.length > 0
                                                    ? d.a.createElement(
                                                          "div",
                                                          { className: "search-bar--result" },
                                                          d.a.createElement(
                                                              "ul",
                                                              null,
                                                              e.map(function(n) {
                                                                  return d.a.createElement(
                                                                      "li",
                                                                      { key: n.id },
                                                                      d.a.createElement(N, {
                                                                          movieTitle: n.title,
                                                                          searchKeyWord: t
                                                                      })
                                                                  );
                                                              })
                                                          )
                                                      )
                                                    : d.a.createElement(
                                                          "span",
                                                          { className: "search-bar--nothing" },
                                                          "Nothing found for this search :("
                                                      )
                                            )
                                    )
                                );
                            }
                        }
                    ]),
                    e
                );
            })();
        var R = function(n) {
            var e = n.serchHistroyWord,
                t = n.deleteSearchHistory,
                r = n.deleteOneITem;
            return d.a.createElement(
                "div",
                { className: "search-history" },
                d.a.createElement(
                    "div",
                    { className: "search-history--title" },
                    d.a.createElement("h3", null, "History will be added Here"),
                    d.a.createElement(
                        "span",
                        {
                            onClick: function() {
                                t();
                            }
                        },
                        "clear search history"
                    )
                ),
                d.a.createElement(
                    "ul",
                    null,
                    e &&
                        e.length > 0 &&
                        e.map(function(n, e) {
                            return d.a.createElement(
                                "li",
                                { key: e },
                                d.a.createElement("span", null, n.debouncedSearchTerm, " "),
                                d.a.createElement("span", null, n.currentTime),
                                d.a.createElement("span", {
                                    onClick: function() {
                                        return (function(n) {
                                            r(n);
                                        })(e);
                                    }
                                })
                            );
                        })
                )
            );
        };
        var C = function() {
                var n = g(Object(f.useState)(""), 2),
                    e = n[0],
                    t = n[1],
                    r = g(Object(f.useState)([]), 2),
                    o = r[0],
                    a = r[1],
                    i = g(Object(f.useState)(!1), 2),
                    c = i[0],
                    s = i[1],
                    l = (function(n, e) {
                        var t = g(Object(f.useState)(n), 2),
                            r = t[0],
                            o = t[1];
                        return (
                            Object(f.useEffect)(
                                function() {
                                    var t = setTimeout(function() {
                                        o(n);
                                    }, e);
                                    return function() {
                                        clearTimeout(t);
                                    };
                                },
                                [n]
                            ),
                            r
                        );
                    })(e, 500),
                    u = g(Object(f.useState)([]), 2),
                    p = u[0],
                    h = u[1];
                return (
                    Object(f.useEffect)(
                        function() {
                            if (l) {
                                var n =
                                    ((e = new Date()),
                                    (t = ("0" + e.getDate()).slice(-2)),
                                    (r = ("0" + (e.getMonth() + 1)).slice(-2)),
                                    (o = e.getFullYear()),
                                    (i = e.toLocaleTimeString().split(" ")),
                                    (c = i[1]),
                                    (u = i[0].split(":")),
                                    ""
                                        .concat(o, "-")
                                        .concat(r, "-")
                                        .concat(t, ", ")
                                        .concat(u[0], ":")
                                        .concat(u[1], " ")
                                        .concat(c));
                                h([].concat(b(p), [{ debouncedSearchTerm: l, currentTime: n }])),
                                    s(!0),
                                    (function(n) {
                                        if (n.length > 0) {
                                            return v.a
                                                .get(
                                                    "https://api.themoviedb.org/3/search/movie?api_key="
                                                        .concat(
                                                            "efc3ede5b4a823ca3562c605cbc4ddf7",
                                                            "&language=en-US&query="
                                                        )
                                                        .concat(n, "&page=1&include_adult=false")
                                                )
                                                .then(function(n) {
                                                    return n.data;
                                                });
                                        }
                                    })(l).then(function(n) {
                                        s(!1), a(n);
                                    });
                            } else a([]);
                            var e, t, r, o, i, c, u;
                        },
                        [l]
                    ),
                    d.a.createElement(
                        "div",
                        { className: "container" },
                        d.a.createElement("h1", { className: "SEOHidden" }, "Simple Search Application"),
                        d.a.createElement(
                            "header",
                            null,
                            d.a.createElement(P, {
                                onSearchFor: function(n) {
                                    t(n);
                                },
                                isSearching: c,
                                searchResults: o
                            })
                        ),
                        d.a.createElement(
                            "section",
                            null,
                            d.a.createElement(R, {
                                serchHistroyWord: p,
                                deleteSearchHistory: function() {
                                    h([]);
                                },
                                deleteOneITem: function(n) {
                                    var e = b(p);
                                    -1 !== n && (e.splice(n, 1), h(e));
                                }
                            })
                        )
                    )
                );
            },
            H = function() {
                return function(n, e) {
                    var t = n.html,
                        r = { HTML_CONTENT: m.a.renderToString(d.a.createElement(C, null)) };
                    Object.keys(r).forEach(function(n) {
                        var e = r[n];
                        t = t.replace(new RegExp("__" + p()(n) + "__", "g"), e);
                    }),
                        e.send(t);
                };
            },
            A = o.a.join(__dirname, "/public"),
            M = i()();
        M.use(i.a.static(A)), M.use(l()), M.use(H());
        e.default = M;
    }
]);
