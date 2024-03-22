(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [222],
  {
    6435: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return c;
        },
        f: function () {
          return d;
        },
      });
      var n = r(2265);
      let s = ["light", "dark"],
        a = "(prefers-color-scheme: dark)",
        i = "undefined" == typeof window,
        l = (0, n.createContext)(void 0),
        o = { setTheme: (e) => {}, themes: [] },
        c = () => {
          var e;
          return null !== (e = (0, n.useContext)(l)) && void 0 !== e ? e : o;
        },
        d = (e) =>
          (0, n.useContext)(l)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(m, e),
        u = ["light", "dark"],
        m = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: r = !0,
          enableColorScheme: i = !0,
          storageKey: o = "theme",
          themes: c = u,
          defaultTheme: d = r ? "system" : "light",
          attribute: m = "data-theme",
          value: v,
          children: p,
          nonce: y,
        }) => {
          let [b, A] = (0, n.useState)(() => f(o, d)),
            [w, k] = (0, n.useState)(() => f(o)),
            E = v ? Object.values(v) : c,
            j = (0, n.useCallback)((e) => {
              let n = e;
              if (!n) return;
              "system" === e && r && (n = g());
              let a = v ? v[n] : n,
                l = t ? x() : null,
                o = document.documentElement;
              if (
                ("class" === m
                  ? (o.classList.remove(...E), a && o.classList.add(a))
                  : a
                  ? o.setAttribute(m, a)
                  : o.removeAttribute(m),
                i)
              ) {
                let e = s.includes(d) ? d : null,
                  t = s.includes(n) ? n : e;
                o.style.colorScheme = t;
              }
              null == l || l();
            }, []),
            $ = (0, n.useCallback)(
              (e) => {
                A(e);
                try {
                  localStorage.setItem(o, e);
                } catch (e) {}
              },
              [e]
            ),
            C = (0, n.useCallback)(
              (t) => {
                k(g(t)), "system" === b && r && !e && j("system");
              },
              [b, e]
            );
          (0, n.useEffect)(() => {
            let e = window.matchMedia(a);
            return e.addListener(C), C(e), () => e.removeListener(C);
          }, [C]),
            (0, n.useEffect)(() => {
              let e = (e) => {
                e.key === o && $(e.newValue || d);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [$]),
            (0, n.useEffect)(() => {
              j(null != e ? e : b);
            }, [e, b]);
          let S = (0, n.useMemo)(
            () => ({
              theme: b,
              setTheme: $,
              forcedTheme: e,
              resolvedTheme: "system" === b ? w : b,
              themes: r ? [...c, "system"] : c,
              systemTheme: r ? w : void 0,
            }),
            [b, $, e, w, r, c]
          );
          return n.createElement(
            l.Provider,
            { value: S },
            n.createElement(h, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: r,
              enableColorScheme: i,
              storageKey: o,
              themes: c,
              defaultTheme: d,
              attribute: m,
              value: v,
              children: p,
              attrs: E,
              nonce: y,
            }),
            p
          );
        },
        h = (0, n.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: r,
            enableSystem: i,
            enableColorScheme: l,
            defaultTheme: o,
            value: c,
            attrs: d,
            nonce: u,
          }) => {
            let m = "system" === o,
              h =
                "class" === r
                  ? `var d=document.documentElement,c=d.classList;c.remove(${d
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${r}',s='setAttribute';`,
              f = l
                ? s.includes(o) && o
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              x = (e, t = !1, n = !0) => {
                let a = c ? c[e] : e,
                  i = t ? e + "|| ''" : `'${a}'`,
                  o = "";
                return (
                  l &&
                    n &&
                    !t &&
                    s.includes(e) &&
                    (o += `d.style.colorScheme = '${e}';`),
                  "class" === r
                    ? (o += t || a ? `c.add(${i})` : "null")
                    : a && (o += `d[s](n,${i})`),
                  o
                );
              },
              g = e
                ? `!function(){${h}${x(e)}}()`
                : i
                ? `!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${x(
                    "dark"
                  )}}else{${x("light")}}}else if(e){${
                    c ? `var x=${JSON.stringify(c)};` : ""
                  }${x(c ? "x[e]" : "e", !0)}}${
                    m ? "" : "else{" + x(o, !1, !1) + "}"
                  }${f}}catch(e){}}()`
                : `!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${
                    c ? `var x=${JSON.stringify(c)};` : ""
                  }${x(c ? "x[e]" : "e", !0)}}else{${x(
                    o,
                    !1,
                    !1
                  )};}${f}}catch(t){}}();`;
            return n.createElement("script", {
              nonce: u,
              dangerouslySetInnerHTML: { __html: g },
            });
          },
          () => !0
        ),
        f = (e, t) => {
          let r;
          if (!i) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        x = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        g = (e) => (
          e || (e = window.matchMedia(a)), e.matches ? "dark" : "light"
        );
    },
    8385: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 1749, 23)),
        Promise.resolve().then(r.t.bind(r, 5250, 23)),
        Promise.resolve().then(r.bind(r, 8730)),
        Promise.resolve().then(r.bind(r, 4105));
    },
    4840: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AppContext: function () {
            return o;
          },
          Providers: function () {
            return c;
          },
        });
      var n = r(7437),
        s = r(2265),
        a = r(4033),
        i = r(6435);
      function l() {
        let { resolvedTheme: e, setTheme: t } = (0, i.F)();
        return (
          (0, s.useEffect)(() => {
            let r = window.matchMedia("(prefers-color-scheme: dark)");
            function n() {
              e === (r.matches ? "dark" : "light") && t("system");
            }
            return (
              n(),
              r.addEventListener("change", n),
              () => {
                r.removeEventListener("change", n);
              }
            );
          }, [e, t]),
          null
        );
      }
      let o = (0, s.createContext)({});
      function c(e) {
        var t;
        let r,
          { children: c } = e,
          d =
            ((t = (0, a.usePathname)()),
            (r = (0, s.useRef)()),
            (0, s.useEffect)(() => {
              r.current = t;
            }, [t]),
            r.current);
        return (0, n.jsx)(o.Provider, {
          value: { previousPathname: d },
          children: (0, n.jsxs)(i.f, {
            attribute: "class",
            disableTransitionOnChange: !0,
            children: [(0, n.jsx)(l, {}), c],
          }),
        });
      }
    },
    4105: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ArticleLayout: function () {
            return u;
          },
        });
      var n = r(7437),
        s = r(2265),
        a = r(4033),
        i = r(4840),
        l = r(8593),
        o = r(7042);
      function c(e) {
        let { className: t, ...r } = e;
        return (0, n.jsx)("div", {
          className: (0, o.Z)(t, "prose dark:prose-invert"),
          ...r,
        });
      }
      function d(e) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 16 16",
          fill: "none",
          "aria-hidden": "true",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      function u(e) {
        var t;
        let { article: r, children: o } = e,
          u = (0, a.useRouter)(),
          { previousPathname: m } = (0, s.useContext)(i.AppContext);
        return (0, n.jsx)(l.W2, {
          className: "mt-16 lg:mt-32",
          children: (0, n.jsx)("div", {
            className: "xl:relative",
            children: (0, n.jsxs)("div", {
              className: "mx-auto max-w-2xl",
              children: [
                m &&
                  (0, n.jsx)("button", {
                    type: "button",
                    onClick: () => u.back(),
                    "aria-label": "Go back to articles",
                    className:
                      "group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20",
                    children: (0, n.jsx)(d, {
                      className:
                        "h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400",
                    }),
                  }),
                (0, n.jsxs)("article", {
                  children: [
                    (0, n.jsxs)("header", {
                      className: "flex flex-col",
                      children: [
                        (0, n.jsx)("h1", {
                          className:
                            "mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100",
                          children: r.title,
                        }),
                        (0, n.jsxs)("time", {
                          dateTime: r.date,
                          className:
                            "order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500",
                            }),
                            (0, n.jsx)("span", {
                              className: "ml-3",
                              children:
                                ((t = r.date),
                                new Date(`${t}T00:00:00Z`).toLocaleDateString(
                                  "en-US",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                    timeZone: "UTC",
                                  }
                                )),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(c, {
                      className: "mt-8",
                      "data-mdx-content": !0,
                      children: o,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    8593: function (e, t, r) {
      "use strict";
      r.d(t, {
        W2: function () {
          return o;
        },
      });
      var n = r(7437),
        s = r(2265),
        a = r(7042);
      let i = (0, s.forwardRef)(function (e, t) {
          let { className: r, children: s, ...i } = e;
          return (0,
          n.jsx)("div", { ref: t, className: (0, a.Z)("sm:px-8", r), ...i, children: (0, n.jsx)("div", { className: "mx-auto w-full max-w-7xl lg:px-8", children: s }) });
        }),
        l = (0, s.forwardRef)(function (e, t) {
          let { className: r, children: s, ...i } = e;
          return (0,
          n.jsx)("div", { ref: t, className: (0, a.Z)("relative px-4 sm:px-8 lg:px-12", r), ...i, children: (0, n.jsx)("div", { className: "mx-auto max-w-2xl lg:max-w-5xl", children: s }) });
        }),
        o = (0, s.forwardRef)(function (e, t) {
          let { children: r, ...s } = e;
          return (0,
          n.jsx)(i, { ref: t, ...s, children: (0, n.jsx)(l, { children: r }) });
        });
    },
    8730: function (e, t, r) {
      "use strict";
      r.r(t),
        (t.default = {
          src: "/_next/static/media/planetaria-design-system.d4cfce90.png",
          height: 872,
          width: 1310,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEUbIzIyO00+RlpCKoxNLJwpIGolMEEHFR8tJ2wpHlceGyRLNW87LnRdL6BwQFV2YkcVGhkoVVpVdmRIKzDIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nAXBiQGAIAwEwQUSLlF5pP9imcEiItydBjxbwvJ75zo/Ru+l1sIAZUoXF+sBDXDx3+AAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    622: function (e, t, r) {
      "use strict";
      var n = r(2265),
        s = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, t, r) {
        var n,
          a = {},
          c = null,
          d = null;
        for (n in (void 0 !== r && (c = "" + r),
        void 0 !== t.key && (c = "" + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          i.call(t, n) && !o.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: d,
          props: a,
          _owner: l.current,
        };
      }
      (t.Fragment = a), (t.jsx = c), (t.jsxs = c);
    },
    7437: function (e, t, r) {
      "use strict";
      e.exports = r(622);
    },
    4033: function (e, t, r) {
      e.exports = r(5313);
    },
    7042: function (e, t, r) {
      "use strict";
      t.Z = function () {
        for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                s = "";
              if ("string" == typeof t || "number" == typeof t) s += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var a = t.length;
                  for (r = 0; r < a; r++)
                    t[r] && (n = e(t[r])) && (s && (s += " "), (s += n));
                } else for (n in t) t[n] && (s && (s += " "), (s += n));
              }
              return s;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      };
    },
  },
  function (e) {
    e.O(0, [250, 749, 971, 938, 744], function () {
      return e((e.s = 8385));
    }),
      (_N_E = e.O());
  },
]);
