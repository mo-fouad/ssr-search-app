(window["webpackJsonpssr-search-app"] = window["webpackJsonpssr-search-app"] || []).push([
    [0],
    {
        106: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(0),
                n = a.n(r),
                c = a(36),
                s = a.n(c),
                l = (a(44), a(12)),
                i = a(2),
                o = a(37),
                u = a.n(o);
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
                                    return n.a.createElement(
                                        n.a.Fragment,
                                        null,
                                        E()(a.replace(new RegExp(t, "gi"), "<span> ".concat(t, "</span>")))
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(r.PureComponent),
                g = (function(e) {
                    function t() {
                        var e, a;
                        Object(h.a)(this, t);
                        for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++) n[c] = arguments[c];
                        return (
                            ((a = Object(p.a)(this, (e = Object(d.a)(t)).call.apply(e, [this].concat(n)))).state = {
                                clear: !1,
                                searchKeyWord: ""
                            }),
                            (a.searchFor = function(e) {
                                var t = e.target.value,
                                    r = a.props.onSearchFor;
                                a.setState({ searchKeyWord: t }),
                                    r(t),
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
                                    return n.a.createElement(
                                        n.a.Fragment,
                                        null,
                                        n.a.createElement(
                                            "div",
                                            {
                                                className: "search-bar",
                                                onSubmit: function(e) {
                                                    return e.preventDefault();
                                                }
                                            },
                                            n.a.createElement(
                                                "form",
                                                { role: "search", "aria-label": "header-search" },
                                                n.a.createElement(
                                                    "label",
                                                    {
                                                        "aria-label": "Search-this-site",
                                                        className: "SEOHidden",
                                                        htmlFor: "searchInput"
                                                    },
                                                    "Search this site"
                                                ),
                                                n.a.createElement("input", {
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
                                                n.a.createElement("span", { className: "search-bar--loading" }),
                                            this.state.clear &&
                                                !this.props.isSearching &&
                                                n.a.createElement("span", {
                                                    role: "button",
                                                    "aria-pressed": "false",
                                                    "aria-label": "delete-search-key-word",
                                                    onClick: this.restForm,
                                                    className: "search-bar--clear"
                                                }),
                                            t &&
                                                a.length > 0 &&
                                                n.a.createElement(
                                                    n.a.Fragment,
                                                    null,
                                                    t.length > 0
                                                        ? n.a.createElement(
                                                              "div",
                                                              { className: "search-bar--result" },
                                                              n.a.createElement(
                                                                  "ul",
                                                                  { role: "list" },
                                                                  t.map(function(e) {
                                                                      return n.a.createElement(
                                                                          "li",
                                                                          {
                                                                              role: "listitem",
                                                                              key: e.id,
                                                                              "aria-label": e.title
                                                                          },
                                                                          n.a.createElement(v, {
                                                                              movieTitle: e.title,
                                                                              searchKeyWord: a
                                                                          })
                                                                      );
                                                                  })
                                                              )
                                                          )
                                                        : n.a.createElement(
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
                })(r.Component);
            var S = function(e) {
                var t = e.searchHistoryWord,
                    a = e.deleteSearchHistory,
                    r = e.deleteOneITem;
                return n.a.createElement(
                    "div",
                    { className: "search-history" },
                    n.a.createElement(
                        "div",
                        { className: "search-history--title" },
                        n.a.createElement("h3", null, "History will be added Here"),
                        n.a.createElement(
                            "span",
                            {
                                role: "button",
                                "aria-pressed": "false",
                                onClick: function() {
                                    a();
                                }
                            },
                            "clear search history"
                        )
                    ),
                    n.a.createElement(
                        "ul",
                        null,
                        t &&
                            t.length > 0 &&
                            t.map(function(e, t) {
                                return n.a.createElement(
                                    "li",
                                    { key: t },
                                    n.a.createElement("span", null, e.debouncedSearchTerm, " "),
                                    n.a.createElement("span", null, e.currentTime),
                                    n.a.createElement("span", {
                                        role: "button",
                                        "aria-pressed": "false",
                                        onClick: function() {
                                            return (function(e) {
                                                r(e);
                                            })(t);
                                        }
                                    })
                                );
                            })
                    )
                );
            };
            var y = function() {
                var e = Object(r.useState)(""),
                    t = Object(i.a)(e, 2),
                    a = t[0],
                    c = t[1],
                    s = Object(r.useState)([]),
                    o = Object(i.a)(s, 2),
                    h = o[0],
                    m = o[1],
                    p = Object(r.useState)(!1),
                    d = Object(i.a)(p, 2),
                    f = d[0],
                    b = d[1],
                    E = (function(e, t) {
                        var a = Object(r.useState)(e),
                            n = Object(i.a)(a, 2),
                            c = n[0],
                            s = n[1];
                        return (
                            Object(r.useEffect)(
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
                    v = Object(r.useState)([]),
                    y = Object(i.a)(v, 2),
                    O = y[0],
                    j = y[1];
                return (
                    Object(r.useEffect)(
                        function() {
                            if (E) {
                                var e = (function() {
                                    var e = new Date(),
                                        t = ("0" + e.getDate()).slice(-2),
                                        a = ("0" + (e.getMonth() + 1)).slice(-2),
                                        r = e.getFullYear(),
                                        n = e.toLocaleTimeString().split(" "),
                                        c = n[1],
                                        s = n[0].split(":");
                                    return ""
                                        .concat(r, "-")
                                        .concat(a, "-")
                                        .concat(t, ", ")
                                        .concat(s[0], ":")
                                        .concat(s[1], " ")
                                        .concat(c);
                                })();
                                j([].concat(Object(l.a)(O), [{ debouncedSearchTerm: E, currentTime: e }])),
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
                    n.a.createElement(
                        "div",
                        { className: "container" },
                        n.a.createElement("h1", { className: "SEOHidden" }, "Simple Search Application"),
                        n.a.createElement(
                            "header",
                            { role: "heading", "aria-level": "1" },
                            n.a.createElement(g, {
                                onSearchFor: function(e) {
                                    c(e);
                                },
                                isSearching: f,
                                searchResults: h
                            })
                        ),
                        n.a.createElement(
                            "section",
                            { "aria-level": "1" },
                            n.a.createElement(S, {
                                searchHistoryWord: O,
                                deleteSearchHistory: function() {
                                    j([]);
                                },
                                deleteOneITem: function(e) {
                                    var t = Object(l.a)(O);
                                    -1 !== e && (t.splice(e, 1), j(t));
                                }
                            })
                        )
                    )
                );
            };
            s.a.hydrate(n.a.createElement(y, null), document.getElementById("root"));
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
//# sourceMappingURL=main.c697182b.chunk.js.map
