(window["webpackJsonpssr-search-app"] = window["webpackJsonpssr-search-app"] || []).push([
    [0],
    {
        106: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = a(36),
                s = a.n(c),
                l = (a(44), a(12)),
                o = a(2),
                i = a(37),
                u = a.n(i);
            a(62);
            var h = a(6),
                m = a(7),
                p = a(9),
                d = a(8),
                f = a(10),
                b = a(38),
                E = a.n(b),
                v = (function(e) {
                    function t() {
                        return Object(h.a)(this, t), Object(p.a)(this, Object(d.a)(t).apply(this, arguments));
                    }
                    return (
                        Object(f.a)(t, e),
                        Object(m.a)(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.searchKeyWord,
                                        a = e.movieTitle;
                                    return r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        E()(a.replace(new RegExp(t, "gi"), "<span> ".concat(t, "</span>")))
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.PureComponent),
                g = (function(e) {
                    function t() {
                        var e, a;
                        Object(h.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (
                            ((a = Object(p.a)(this, (e = Object(d.a)(t)).call.apply(e, [this].concat(r)))).state = {
                                clear: !1,
                                searchKeyWord: ""
                            }),
                            (a.searchFor = function(e) {
                                var t = e.target.value,
                                    n = a.props.onSearchFor;
                                a.setState({ searchKeyWord: t }),
                                    n(t),
                                    t.length > 0 ? a.setState({ clear: !0 }) : a.setState({ clear: !1 });
                            }),
                            (a.restForm = function() {
                                a.setState({ searchKeyWord: "" });
                            }),
                            a
                        );
                    }
                    return (
                        Object(f.a)(t, e),
                        Object(m.a)(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.searchResults,
                                        t = (e = void 0 === e ? {} : e).results,
                                        a = this.state.searchKeyWord;
                                    return r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                            "div",
                                            { className: "search-bar" },
                                            r.a.createElement(
                                                "form",
                                                { role: "search", "aria-label": "header-search" },
                                                r.a.createElement("input", {
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
                                                r.a.createElement("span", { className: "search-bar--loading" }),
                                            this.state.clear &&
                                                !this.props.isSearching &&
                                                r.a.createElement("span", {
                                                    onClick: this.restForm,
                                                    className: "search-bar--clear"
                                                }),
                                            t &&
                                                a.length > 0 &&
                                                r.a.createElement(
                                                    r.a.Fragment,
                                                    null,
                                                    t.length > 0
                                                        ? r.a.createElement(
                                                              "div",
                                                              { className: "search-bar--result" },
                                                              r.a.createElement(
                                                                  "ul",
                                                                  null,
                                                                  t.map(function(e) {
                                                                      return r.a.createElement(
                                                                          "li",
                                                                          { key: e.id },
                                                                          r.a.createElement(v, {
                                                                              movieTitle: e.title,
                                                                              searchKeyWord: a
                                                                          })
                                                                      );
                                                                  })
                                                              )
                                                          )
                                                        : r.a.createElement(
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
                        t
                    );
                })(n.Component);
            var y = function(e) {
                var t = e.serchHistroyWord,
                    a = e.deleteSearchHistory,
                    n = e.deleteOneITem;
                return r.a.createElement(
                    "div",
                    { className: "search-history" },
                    r.a.createElement(
                        "div",
                        { className: "search-history--title" },
                        r.a.createElement("h3", null, "History will be added Here"),
                        r.a.createElement(
                            "span",
                            {
                                onClick: function() {
                                    a();
                                }
                            },
                            "clear search history"
                        )
                    ),
                    r.a.createElement(
                        "ul",
                        null,
                        t &&
                            t.length > 0 &&
                            t.map(function(e, t) {
                                return r.a.createElement(
                                    "li",
                                    { key: t },
                                    r.a.createElement("span", null, e.debouncedSearchTerm, " "),
                                    r.a.createElement("span", null, e.currentTime),
                                    r.a.createElement("span", {
                                        onClick: function() {
                                            return (function(e) {
                                                n(e);
                                            })(t);
                                        }
                                    })
                                );
                            })
                    )
                );
            };
            var O = function() {
                var e = Object(n.useState)(""),
                    t = Object(o.a)(e, 2),
                    a = t[0],
                    c = t[1],
                    s = Object(n.useState)([]),
                    i = Object(o.a)(s, 2),
                    h = i[0],
                    m = i[1],
                    p = Object(n.useState)(!1),
                    d = Object(o.a)(p, 2),
                    f = d[0],
                    b = d[1],
                    E = (function(e, t) {
                        var a = Object(n.useState)(e),
                            r = Object(o.a)(a, 2),
                            c = r[0],
                            s = r[1];
                        return (
                            Object(n.useEffect)(
                                function() {
                                    var a = setTimeout(function() {
                                        s(e);
                                    }, t);
                                    return function() {
                                        clearTimeout(a);
                                    };
                                },
                                [e]
                            ),
                            c
                        );
                    })(a, 500),
                    v = Object(n.useState)([]),
                    O = Object(o.a)(v, 2),
                    S = O[0],
                    j = O[1];
                return (
                    Object(n.useEffect)(
                        function() {
                            if (E) {
                                var e = (function() {
                                    var e = new Date(),
                                        t = ("0" + e.getDate()).slice(-2),
                                        a = ("0" + (e.getMonth() + 1)).slice(-2),
                                        n = e.getFullYear(),
                                        r = e.toLocaleTimeString().split(" "),
                                        c = r[1],
                                        s = r[0].split(":");
                                    return ""
                                        .concat(n, "-")
                                        .concat(a, "-")
                                        .concat(t, ", ")
                                        .concat(s[0], ":")
                                        .concat(s[1], " ")
                                        .concat(c);
                                })();
                                j([].concat(Object(l.a)(S), [{ debouncedSearchTerm: E, currentTime: e }])),
                                    b(!0),
                                    (function(e) {
                                        if (e.length > 0) {
                                            return u.a
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
                                    })(E).then(function(e) {
                                        b(!1), m(e);
                                    });
                            } else m([]);
                        },
                        [E]
                    ),
                    r.a.createElement(
                        "div",
                        { className: "container" },
                        r.a.createElement("h1", { className: "SEOHidden" }, "Simple Search Application"),
                        r.a.createElement(
                            "header",
                            null,
                            r.a.createElement(g, {
                                onSearchFor: function(e) {
                                    c(e);
                                },
                                isSearching: f,
                                searchResults: h
                            })
                        ),
                        r.a.createElement(
                            "section",
                            null,
                            r.a.createElement(y, {
                                serchHistroyWord: S,
                                deleteSearchHistory: function() {
                                    j([]);
                                },
                                deleteOneITem: function(e) {
                                    var t = Object(l.a)(S);
                                    -1 !== e && (t.splice(e, 1), j(t));
                                }
                            })
                        )
                    )
                );
            };
            s.a.hydrate(r.a.createElement(O, null), document.getElementById("root"));
        },
        39: function(e, t, a) {
            e.exports = a(106);
        },
        44: function(e, t, a) {},
        62: function(e, t, a) {},
        87: function(e, t) {}
    },
    [[39, 1, 2]]
]);
//# sourceMappingURL=main.4defa647.chunk.js.map
