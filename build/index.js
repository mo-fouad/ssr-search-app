module.exports = (function(e) {
    var n = {};
    function t(r) {
        if (n[r]) return n[r].exports;
        var a = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
    }
    return (
        (t.m = e),
        (t.c = n),
        (t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
        }),
        (t.r = function(e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (t.t = function(e, n) {
            if ((1 & n && (e = t(e)), 8 & n)) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (t.r(r),
                Object.defineProperty(r, "default", { enumerable: !0, value: e }),
                2 & n && "string" != typeof e)
            )
                for (var a in e)
                    t.d(
                        r,
                        a,
                        function(n) {
                            return e[n];
                        }.bind(null, a)
                    );
            return r;
        }),
        (t.n = function(e) {
            var n =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (t.p = "/"),
        t((t.s = 8))
    );
})([
    function(e, n) {
        e.exports = require("react");
    },
    function(e, n) {
        e.exports = require("express");
    },
    function(e, n) {
        e.exports = require("path");
    },
    function(e, n) {
        e.exports = require("fs");
    },
    function(e, n) {
        e.exports = require("escape-string-regexp");
    },
    function(e, n) {
        e.exports = require("react-dom/server");
    },
    function(e, n) {
        e.exports = require("axios");
    },
    function(e, n) {
        e.exports = require("react-html-parser");
    },
    function(e, n, t) {
        e.exports = t(9);
    },
    function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(1),
            a = t.n(r),
            o = t(12).default;
        a()()
            .use(function(e, n) {
                return o.handle(e, n);
            })
            .listen(process.env.PORT || 3e3, function() {
                console.log("React SSR App is running: http://localhost:".concat(process.env.PORT || 3e3));
            });
    },
    function(e, n, t) {
        (e.exports = t(11)(!1)).push([
            e.i,
            "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote,\nq {\n  quotes: none; }\n  blockquote:before, blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto; }\n  @media only screen and (min-width: 33.75em) {\n    .container {\n      width: 80%; } }\n  @media only screen and (min-width: 60em) {\n    .container {\n      width: 75%;\n      max-width: 60rem; } }\n\n.row {\n  position: relative;\n  width: 100%; }\n  .row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: Helvetica, sans-serif;\n  background: #fafafa; }\n\n.SEOHidden {\n  position: absolute;\n  top: -9999px;\n  left: -9999px; }\n\n.search-bar {\n  position: relative;\n  background: #fff;\n  padding: 10px;\n  border-bottom: 1px solid #eee; }\n  .search-bar--input {\n    width: 100%;\n    height: 70px;\n    font-size: 22px;\n    padding: 20px; }\n  .search-bar--clear {\n    position: absolute;\n    cursor: pointer;\n    border: none;\n    width: 30px;\n    height: 30px;\n    display: block;\n    top: 30px;\n    right: 30px;\n    padding: 5px; }\n    .search-bar--clear:after {\n      content: url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='20' width='20'><line x1='0' y1='0' x2='20' y2='20' stroke='black' stroke-width='2'/><line x1='20' y1='0' x2='0' y2='20' stroke='black' stroke-width='2'/></svg>\"); }\n  .search-bar--loading {\n    position: absolute;\n    width: 41px;\n    height: 43px;\n    top: 25px;\n    display: inline-block;\n    right: 25px; }\n    .search-bar--loading:after {\n      content: \" \";\n      display: block;\n      width: 36px;\n      height: 36px;\n      margin: 1px;\n      border-radius: 50%;\n      border: 2px solid #333;\n      border-color: #333 transparent #333 transparent;\n      -webkit-animation: lds-dual-ring 0.5s ease-in-out infinite;\n              animation: lds-dual-ring 0.5s ease-in-out infinite; }\n  .search-bar--result {\n    background: #ffffff;\n    padding: 0 10px;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 101%;\n    max-height: 250px;\n    overflow-y: scroll; }\n    .search-bar--result ul li {\n      margin: 10px 0 5px 0;\n      border-bottom: 1px solid #eee;\n      padding-bottom: 5px;\n      cursor: pointer;\n      color: #888; }\n      .search-bar--result ul li:last-child {\n        border-bottom: none; }\n      .search-bar--result ul li span {\n        font-weight: bold;\n        text-transform: uppercase;\n        color: #333333; }\n  .search-bar--nothing {\n    display: block;\n    padding: 10px 0;\n    font-size: 12px;\n    text-align: center;\n    width: 100%; }\n\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes lds-dual-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.search-history {\n  margin: 10px 0; }\n  .search-history--title {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px; }\n    .search-history--title span {\n      cursor: pointer;\n      font-size: 12px;\n      margin-left: auto;\n      text-decoration: underline; }\n  .search-history ul li {\n    display: flex;\n    margin: 5px 0;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 5px; }\n    .search-history ul li:last-child {\n      border-bottom: none; }\n    .search-history ul li span {\n      font-size: 12px; }\n      .search-history ul li span:nth-child(2) {\n        margin-left: auto; }\n      .search-history ul li span:last-child {\n        cursor: pointer;\n        width: 20px;\n        margin-left: 10px; }\n        .search-history ul li span:last-child:after {\n          content: url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='10' width='10'><line x1='0' y1='0' x2='10' y2='10' stroke='black' stroke-width='1'/><line x1='10' y1='0' x2='0' y2='10' stroke='black' stroke-width='1'/></svg>\"); }\n",
            ""
        ]);
    },
    function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            var n = [];
            return (
                (n.toString = function() {
                    return this.map(function(n) {
                        var t = (function(e, n) {
                            var t = e[1] || "",
                                r = e[3];
                            if (!r) return t;
                            if (n && "function" == typeof btoa) {
                                var a =
                                        ((i = r),
                                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                                            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                                            " */"),
                                    o = r.sources.map(function(e) {
                                        return "/*# sourceURL=" + r.sourceRoot + e + " */";
                                    });
                                return [t]
                                    .concat(o)
                                    .concat([a])
                                    .join("\n");
                            }
                            var i;
                            return [t].join("\n");
                        })(n, e);
                        return n[2] ? "@media " + n[2] + "{" + t + "}" : t;
                    }).join("");
                }),
                (n.i = function(e, t) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var r = {}, a = 0; a < this.length; a++) {
                        var o = this[a][0];
                        null != o && (r[o] = !0);
                    }
                    for (a = 0; a < e.length; a++) {
                        var i = e[a];
                        (null != i[0] && r[i[0]]) ||
                            (t && !i[2] ? (i[2] = t) : t && (i[2] = "(" + i[2] + ") and (" + t + ")"), n.push(i));
                    }
                }),
                n
            );
        };
    },
    function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(2),
            a = t.n(r),
            o = t(1),
            i = t.n(o),
            c = t(3),
            s = t.n(c),
            l = function() {
                return function(e, n, t) {
                    var r = a.a.join(__dirname, "/public");
                    s.a.readFile("".concat(r, "/app.html"), "utf8", function(r, a) {
                        r ? n.status(500).send("Error parsing app.html") : ((e.html = a), t());
                    });
                };
            },
            u = t(4),
            p = t.n(u),
            f = t(0),
            d = t.n(f),
            h = t(5),
            m = t.n(h);
        function b(e) {
            return (
                (function(e) {
                    if (Array.isArray(e)) {
                        for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                        return t;
                    }
                })(e) ||
                (function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                        return Array.from(e);
                })(e) ||
                (function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        function g(e, n) {
            return (
                (function(e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function(e, n) {
                    var t = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (
                            var i, c = e[Symbol.iterator]();
                            !(r = (i = c.next()).done) && (t.push(i.value), !n || t.length !== n);
                            r = !0
                        );
                    } catch (e) {
                        (a = !0), (o = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (a) throw o;
                        }
                    }
                    return t;
                })(e, n) ||
                (function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                })()
            );
        }
        var y = t(6),
            v = t.n(y);
        t(10);
        function x(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function w(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        function S(e, n, t) {
            return n && w(e.prototype, n), t && w(e, t), e;
        }
        function k(e) {
            return (k =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        function E(e) {
            return (E =
                "function" == typeof Symbol && "symbol" === k(Symbol.iterator)
                    ? function(e) {
                          return k(e);
                      }
                    : function(e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : k(e);
                      })(e);
        }
        function O(e, n) {
            return !n || ("object" !== E(n) && "function" != typeof n)
                ? (function(e) {
                      if (void 0 === e)
                          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e;
                  })(e)
                : n;
        }
        function j(e) {
            return (j = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function T(e, n) {
            return (T =
                Object.setPrototypeOf ||
                function(e, n) {
                    return (e.__proto__ = n), e;
                })(e, n);
        }
        function _(e, n) {
            if ("function" != typeof n && null !== n)
                throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
            })),
                n && T(e, n);
        }
        var q = t(7),
            F = t.n(q),
            N = (function(e) {
                function n() {
                    return x(this, n), O(this, j(n).apply(this, arguments));
                }
                return (
                    _(n, f["PureComponent"]),
                    S(n, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    n = e.searchKeyWord,
                                    t = e.movieTitle;
                                return d.a.createElement(
                                    d.a.Fragment,
                                    null,
                                    F()(t.replace(new RegExp(n, "gi"), "<span> ".concat(n, "</span>")))
                                );
                            }
                        }
                    ]),
                    n
                );
            })(),
            P = (function(e) {
                function n() {
                    var e, t;
                    x(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (
                        ((t = O(this, (e = j(n)).call.apply(e, [this].concat(a)))).state = {
                            clear: !1,
                            searchKeyWord: ""
                        }),
                        (t.searchFor = function(e) {
                            var n = e.target.value,
                                r = t.props.onSearchFor;
                            t.setState({ searchKeyWord: n }),
                                r(n),
                                n.length > 0 ? t.setState({ clear: !0 }) : t.setState({ clear: !1 });
                        }),
                        (t.restForm = function() {
                            t.setState({ searchKeyWord: "" });
                        }),
                        t
                    );
                }
                return (
                    _(n, f["Component"]),
                    S(n, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.searchResults,
                                    n = (e = void 0 === e ? {} : e).results,
                                    t = this.state.searchKeyWord;
                                return d.a.createElement(
                                    d.a.Fragment,
                                    null,
                                    d.a.createElement(
                                        "div",
                                        {
                                            className: "search-bar",
                                            onSubmit: function(e) {
                                                return e.preventDefault();
                                            }
                                        },
                                        d.a.createElement(
                                            "form",
                                            { role: "search", "aria-label": "header-search" },
                                            d.a.createElement(
                                                "label",
                                                {
                                                    "aria-label": "Search-this-site",
                                                    className: "SEOHidden",
                                                    htmlFor: "searchInput"
                                                },
                                                "Search this site"
                                            ),
                                            d.a.createElement("input", {
                                                className: "search-bar--input",
                                                id: "searchInput",
                                                type: "text",
                                                name: "search",
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
                                                role: "button",
                                                "aria-pressed": "false",
                                                "aria-label": "delete-search-key-word",
                                                onClick: this.restForm,
                                                className: "search-bar--clear"
                                            }),
                                        n &&
                                            t.length > 0 &&
                                            d.a.createElement(
                                                d.a.Fragment,
                                                null,
                                                n.length > 0
                                                    ? d.a.createElement(
                                                          "div",
                                                          { className: "search-bar--result" },
                                                          d.a.createElement(
                                                              "ul",
                                                              { role: "list" },
                                                              n.map(function(e) {
                                                                  return d.a.createElement(
                                                                      "li",
                                                                      {
                                                                          role: "listitem",
                                                                          key: e.id,
                                                                          "aria-label": e.title
                                                                      },
                                                                      d.a.createElement(N, {
                                                                          movieTitle: e.title,
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
                    n
                );
            })();
        var R = function(e) {
            var n = e.searchHistoryWord,
                t = e.deleteSearchHistory,
                r = e.deleteOneITem;
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
                            role: "button",
                            "aria-pressed": "false",
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
                    n &&
                        n.length > 0 &&
                        n.map(function(e, n) {
                            return d.a.createElement(
                                "li",
                                { key: n },
                                d.a.createElement("span", null, e.debouncedSearchTerm, " "),
                                d.a.createElement("span", null, e.currentTime),
                                d.a.createElement("span", {
                                    role: "button",
                                    "aria-pressed": "false",
                                    onClick: function() {
                                        return (function(e) {
                                            r(e);
                                        })(n);
                                    }
                                })
                            );
                        })
                )
            );
        };
        var H = function() {
                var e = g(Object(f.useState)(""), 2),
                    n = e[0],
                    t = e[1],
                    r = g(Object(f.useState)([]), 2),
                    a = r[0],
                    o = r[1],
                    i = g(Object(f.useState)(!1), 2),
                    c = i[0],
                    s = i[1],
                    l = (function(e, n) {
                        var t = g(Object(f.useState)(e), 2),
                            r = t[0],
                            a = t[1];
                        return (
                            Object(f.useEffect)(
                                function() {
                                    var t = setTimeout(function() {
                                        a(e);
                                    }, n);
                                    return function() {
                                        clearTimeout(t);
                                    };
                                },
                                [e]
                            ),
                            r
                        );
                    })(n, 500),
                    u = g(Object(f.useState)([]), 2),
                    p = u[0],
                    h = u[1];
                return (
                    Object(f.useEffect)(
                        function() {
                            if (l) {
                                var e =
                                    ((n = new Date()),
                                    (t = ("0" + n.getDate()).slice(-2)),
                                    (r = ("0" + (n.getMonth() + 1)).slice(-2)),
                                    (a = n.getFullYear()),
                                    (i = n.toLocaleTimeString().split(" ")),
                                    (c = i[1]),
                                    (u = i[0].split(":")),
                                    ""
                                        .concat(a, "-")
                                        .concat(r, "-")
                                        .concat(t, ", ")
                                        .concat(u[0], ":")
                                        .concat(u[1], " ")
                                        .concat(c));
                                h([].concat(b(p), [{ debouncedSearchTerm: l, currentTime: e }])),
                                    s(!0),
                                    (function(e) {
                                        if (e.length > 0) {
                                            return v.a
                                                .get(
                                                    "https://api.themoviedb.org/3/search/movie?api_key="
                                                        .concat(
                                                            "efc3ede5b4a823ca3562c605cbc4ddf7",
                                                            "&language=en-US&query="
                                                        )
                                                        .concat(e, "&page=1&include_adult=false")
                                                )
                                                .then(function(e) {
                                                    return e.data;
                                                });
                                        }
                                    })(l).then(function(e) {
                                        s(!1), o(e);
                                    });
                            } else o([]);
                            var n, t, r, a, i, c, u;
                        },
                        [l]
                    ),
                    d.a.createElement(
                        "div",
                        { className: "container" },
                        d.a.createElement("h1", { className: "SEOHidden" }, "Simple Search Application"),
                        d.a.createElement(
                            "header",
                            { role: "heading", "aria-level": "1" },
                            d.a.createElement(P, {
                                onSearchFor: function(e) {
                                    t(e);
                                },
                                isSearching: c,
                                searchResults: a
                            })
                        ),
                        d.a.createElement(
                            "section",
                            { "aria-level": "1" },
                            d.a.createElement(R, {
                                searchHistoryWord: p,
                                deleteSearchHistory: function() {
                                    h([]);
                                },
                                deleteOneITem: function(e) {
                                    var n = b(p);
                                    -1 !== e && (n.splice(e, 1), h(n));
                                }
                            })
                        )
                    )
                );
            },
            C = function() {
                return function(e, n) {
                    var t = e.html,
                        r = { HTML_CONTENT: m.a.renderToString(d.a.createElement(H, null)) };
                    Object.keys(r).forEach(function(e) {
                        var n = r[e];
                        t = t.replace(new RegExp("__" + p()(e) + "__", "g"), n);
                    }),
                        n.send(t);
                };
            },
            A = a.a.join(__dirname, "/public"),
            M = i()();
        M.use(i.a.static(A)), M.use(l()), M.use(C());
        n.default = M;
    }
]);
