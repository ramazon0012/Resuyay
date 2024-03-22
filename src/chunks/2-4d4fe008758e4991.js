(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2],
  {
    6435: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return s;
        },
        f: function () {
          return c;
        },
      });
      var r = n(2265);
      let o = ["light", "dark"],
        l = "(prefers-color-scheme: dark)",
        u = "undefined" == typeof window,
        a = (0, r.createContext)(void 0),
        i = { setTheme: (e) => {}, themes: [] },
        s = () => {
          var e;
          return null !== (e = (0, r.useContext)(a)) && void 0 !== e ? e : i;
        },
        c = (e) =>
          (0, r.useContext)(a)
            ? r.createElement(r.Fragment, null, e.children)
            : r.createElement(f, e),
        d = ["light", "dark"],
        f = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: n = !0,
          enableColorScheme: u = !0,
          storageKey: i = "theme",
          themes: s = d,
          defaultTheme: c = n ? "system" : "light",
          attribute: f = "data-theme",
          value: g,
          children: b,
          nonce: E,
        }) => {
          let [y, S] = (0, r.useState)(() => m(i, c)),
            [P, w] = (0, r.useState)(() => m(i)),
            T = g ? Object.values(g) : s,
            C = (0, r.useCallback)((e) => {
              let r = e;
              if (!r) return;
              "system" === e && n && (r = h());
              let l = g ? g[r] : r,
                a = t ? v() : null,
                i = document.documentElement;
              if (
                ("class" === f
                  ? (i.classList.remove(...T), l && i.classList.add(l))
                  : l
                  ? i.setAttribute(f, l)
                  : i.removeAttribute(f),
                u)
              ) {
                let e = o.includes(c) ? c : null,
                  t = o.includes(r) ? r : e;
                i.style.colorScheme = t;
              }
              null == a || a();
            }, []),
            O = (0, r.useCallback)(
              (e) => {
                S(e);
                try {
                  localStorage.setItem(i, e);
                } catch (e) {}
              },
              [e]
            ),
            N = (0, r.useCallback)(
              (t) => {
                w(h(t)), "system" === y && n && !e && C("system");
              },
              [y, e]
            );
          (0, r.useEffect)(() => {
            let e = window.matchMedia(l);
            return e.addListener(N), N(e), () => e.removeListener(N);
          }, [N]),
            (0, r.useEffect)(() => {
              let e = (e) => {
                e.key === i && O(e.newValue || c);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [O]),
            (0, r.useEffect)(() => {
              C(null != e ? e : y);
            }, [e, y]);
          let F = (0, r.useMemo)(
            () => ({
              theme: y,
              setTheme: O,
              forcedTheme: e,
              resolvedTheme: "system" === y ? P : y,
              themes: n ? [...s, "system"] : s,
              systemTheme: n ? P : void 0,
            }),
            [y, O, e, P, n, s]
          );
          return r.createElement(
            a.Provider,
            { value: F },
            r.createElement(p, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: n,
              enableColorScheme: u,
              storageKey: i,
              themes: s,
              defaultTheme: c,
              attribute: f,
              value: g,
              children: b,
              attrs: T,
              nonce: E,
            }),
            b
          );
        },
        p = (0, r.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: n,
            enableSystem: u,
            enableColorScheme: a,
            defaultTheme: i,
            value: s,
            attrs: c,
            nonce: d,
          }) => {
            let f = "system" === i,
              p =
                "class" === n
                  ? `var d=document.documentElement,c=d.classList;c.remove(${c
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${n}',s='setAttribute';`,
              m = a
                ? o.includes(i) && i
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              v = (e, t = !1, r = !0) => {
                let l = s ? s[e] : e,
                  u = t ? e + "|| ''" : `'${l}'`,
                  i = "";
                return (
                  a &&
                    r &&
                    !t &&
                    o.includes(e) &&
                    (i += `d.style.colorScheme = '${e}';`),
                  "class" === n
                    ? (i += t || l ? `c.add(${u})` : "null")
                    : l && (i += `d[s](n,${u})`),
                  i
                );
              },
              h = e
                ? `!function(){${p}${v(e)}}()`
                : u
                ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v(
                    "dark"
                  )}}else{${v("light")}}}else if(e){${
                    s ? `var x=${JSON.stringify(s)};` : ""
                  }${v(s ? "x[e]" : "e", !0)}}${
                    f ? "" : "else{" + v(i, !1, !1) + "}"
                  }${m}}catch(e){}}()`
                : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${
                    s ? `var x=${JSON.stringify(s)};` : ""
                  }${v(s ? "x[e]" : "e", !0)}}else{${v(
                    i,
                    !1,
                    !1
                  )};}${m}}catch(t){}}();`;
            return r.createElement("script", {
              nonce: d,
              dangerouslySetInnerHTML: { __html: h },
            });
          },
          () => !0
        ),
        m = (e, t) => {
          let n;
          if (!u) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        v = () => {
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
        h = (e) => (
          e || (e = window.matchMedia(l)), e.matches ? "dark" : "light"
        );
    },
    7447: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          unstable_getImgProps: function () {
            return i;
          },
          default: function () {
            return s;
          },
        });
      let r = n(1024),
        o = n(8630),
        l = n(6184),
        u = n(1749),
        a = r._(n(536)),
        i = (e) => {
          (0, l.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, o.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return { props: t };
        },
        s = u.Image;
    },
    622: function (e, t, n) {
      "use strict";
      var r = n(2265),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        u = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = { key: !0, ref: !0, __self: !0, __source: !0 };
      function s(e, t, n) {
        var r,
          l = {},
          s = null,
          c = null;
        for (r in (void 0 !== n && (s = "" + n),
        void 0 !== t.key && (s = "" + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          u.call(t, r) && !i.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: l,
          _owner: a.current,
        };
      }
      (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
    },
    7437: function (e, t, n) {
      "use strict";
      e.exports = n(622);
    },
    6691: function (e, t, n) {
      e.exports = n(7447);
    },
    1396: function (e, t, n) {
      e.exports = n(5250);
    },
    4033: function (e, t, n) {
      e.exports = n(5313);
    },
    4875: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return ed;
        },
      });
      var r,
        o,
        l,
        u,
        a,
        i,
        s,
        c,
        d,
        f,
        p,
        m = n(2265),
        v = n(4887),
        h = n(4623),
        g = n(2600),
        b = n(5195),
        E = n(2057);
      function y(e) {
        return E.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
      function S(...e) {
        return (0, m.useMemo)(() => y(...e), [...e]);
      }
      var P = n(8957),
        w = n(6618);
      let T = (0, m.createContext)(!1);
      var C = n(1931);
      let O = m.Fragment,
        N = m.Fragment,
        F = (0, m.createContext)(null),
        x = (0, m.createContext)(null);
      Object.assign(
        (0, C.yV)(function (e, t) {
          let n,
            r,
            o = (0, m.useRef)(null),
            l = (0, w.T)(
              (0, w.h)((e) => {
                o.current = e;
              }),
              t
            ),
            u = S(o),
            a = (function (e) {
              let t = (0, m.useContext)(T),
                n = (0, m.useContext)(F),
                r = S(e),
                [o, l] = (0, m.useState)(() => {
                  if ((!t && null !== n) || E.O.isServer) return null;
                  let e =
                    null == r
                      ? void 0
                      : r.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === r) return null;
                  let o = r.createElement("div");
                  return (
                    o.setAttribute("id", "headlessui-portal-root"),
                    r.body.appendChild(o)
                  );
                });
              return (
                (0, m.useEffect)(() => {
                  null !== o &&
                    ((null != r && r.body.contains(o)) ||
                      null == r ||
                      r.body.appendChild(o));
                }, [o, r]),
                (0, m.useEffect)(() => {
                  t || (null !== n && l(n.current));
                }, [n, l, t]),
                o
              );
            })(o),
            [i] = (0, m.useState)(() => {
              var e;
              return E.O.isServer
                ? null
                : null != (e = null == u ? void 0 : u.createElement("div"))
                ? e
                : null;
            }),
            s = (0, m.useContext)(x),
            c = (0, P.H)();
          return (
            (0, g.e)(() => {
              !a ||
                !i ||
                a.contains(i) ||
                (i.setAttribute("data-headlessui-portal", ""),
                a.appendChild(i));
            }, [a, i]),
            (0, g.e)(() => {
              if (i && s) return s.register(i);
            }, [s, i]),
            (n = (0, h.z)(() => {
              var e;
              a &&
                i &&
                (i instanceof Node && a.contains(i) && a.removeChild(i),
                a.childNodes.length <= 0 &&
                  (null == (e = a.parentElement) || e.removeChild(a)));
            })),
            (r = (0, m.useRef)(!1)),
            (0, m.useEffect)(
              () => (
                (r.current = !1),
                () => {
                  (r.current = !0),
                    (0, b.Y)(() => {
                      r.current && n();
                    });
                }
              ),
              [n]
            ),
            c && a && i
              ? (0, v.createPortal)(
                  (0, C.sY)({
                    ourProps: { ref: l },
                    theirProps: e,
                    defaultTag: O,
                    name: "Portal",
                  }),
                  i
                )
              : null
          );
        }),
        {
          Group: (0, C.yV)(function (e, t) {
            let { target: n, ...r } = e,
              o = { ref: (0, w.T)(t) };
            return m.createElement(
              F.Provider,
              { value: n },
              (0, C.sY)({
                ourProps: o,
                theirProps: r,
                defaultTag: N,
                name: "Popover.Group",
              })
            );
          }),
        }
      );
      var M = n(1858);
      let I =
        null != (p = m.useId)
          ? p
          : function () {
              let e = (0, P.H)(),
                [t, n] = m.useState(e ? () => E.O.nextId() : null);
              return (
                (0, g.e)(() => {
                  null === t && n(E.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
      var L = n(597);
      let k = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var A =
          (((r = A || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          r),
        R =
          (((o = R || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        _ =
          (((l = _ || {})[(l.Previous = -1)] = "Previous"),
          (l[(l.Next = 1)] = "Next"),
          l);
      function $(e = document.body) {
        return null == e
          ? []
          : Array.from(e.querySelectorAll(k)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            );
      }
      var H =
        (((u = H || {})[(u.Strict = 0)] = "Strict"),
        (u[(u.Loose = 1)] = "Loose"),
        u);
      function j(e, t = 0) {
        var n;
        return (
          e !== (null == (n = y(e)) ? void 0 : n.body) &&
          (0, L.E)(t, {
            0: () => e.matches(k),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(k)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      var z =
        (((a = z || {})[(a.Keyboard = 0)] = "Keyboard"),
        (a[(a.Mouse = 1)] = "Mouse"),
        a);
      function D(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
      ) {
        var l, u, a;
        let i = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          s = Array.isArray(e)
            ? n
              ? (function (e, t = (e) => e) {
                  return e.slice().sort((e, n) => {
                    let r = t(e),
                      o = t(n);
                    if (null === r || null === o) return 0;
                    let l = r.compareDocumentPosition(o);
                    return l & Node.DOCUMENT_POSITION_FOLLOWING
                      ? -1
                      : l & Node.DOCUMENT_POSITION_PRECEDING
                      ? 1
                      : 0;
                  });
                })(e)
              : e
            : $(e);
        o.length > 0 && s.length > 1 && (s = s.filter((e) => !o.includes(e))),
          (r = null != r ? r : i.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, s.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, s.indexOf(r)) + 1;
            if (8 & t) return s.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          m = s.length,
          v;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (v = s[e]) || v.focus(f), (p += c);
        } while (v !== i.activeElement);
        return (
          6 & t &&
            null !=
              (a =
                null == (u = null == (l = v) ? void 0 : l.matches)
                  ? void 0
                  : u.call(l, "textarea,input")) &&
            a &&
            v.select(),
          2
        );
      }
      function B(e, t, n) {
        let r = (0, M.E)(t);
        (0, m.useEffect)(() => {
          function t(e) {
            r.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      function V(e, t, n) {
        let r = (0, M.E)(t);
        (0, m.useEffect)(() => {
          function t(e) {
            r.current(e);
          }
          return (
            window.addEventListener(e, t, n),
            () => window.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      function Y(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
      var U =
        (((i = U || {})[(i.None = 1)] = "None"),
        (i[(i.Focusable = 2)] = "Focusable"),
        (i[(i.Hidden = 4)] = "Hidden"),
        i);
      let Z = (0, C.yV)(function (e, t) {
        var n;
        let { features: r = 1, ...o } = e,
          l = {
            ref: t,
            "aria-hidden":
              (2 & r) == 2 || (null != (n = o["aria-hidden"]) ? n : void 0),
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
            },
          };
        return (0,
        C.sY)({ ourProps: l, theirProps: o, slot: {}, defaultTag: "div", name: "Hidden" });
      });
      var G =
        (((s = G || {})[(s.Forwards = 0)] = "Forwards"),
        (s[(s.Backwards = 1)] = "Backwards"),
        s);
      function K() {
        let e = (0, m.useRef)(0);
        return (
          V(
            "keydown",
            (t) => {
              "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
          ),
          e
        );
      }
      var q = n(5306);
      function W(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      var J =
          (((c = J || {}).Space = " "),
          (c.Enter = "Enter"),
          (c.Escape = "Escape"),
          (c.Backspace = "Backspace"),
          (c.Delete = "Delete"),
          (c.ArrowLeft = "ArrowLeft"),
          (c.ArrowUp = "ArrowUp"),
          (c.ArrowRight = "ArrowRight"),
          (c.ArrowDown = "ArrowDown"),
          (c.Home = "Home"),
          (c.End = "End"),
          (c.PageUp = "PageUp"),
          (c.PageDown = "PageDown"),
          (c.Tab = "Tab"),
          c),
        X =
          (((d = X || {})[(d.Open = 0)] = "Open"),
          (d[(d.Closed = 1)] = "Closed"),
          d),
        Q =
          (((f = Q || {})[(f.TogglePopover = 0)] = "TogglePopover"),
          (f[(f.ClosePopover = 1)] = "ClosePopover"),
          (f[(f.SetButton = 2)] = "SetButton"),
          (f[(f.SetButtonId = 3)] = "SetButtonId"),
          (f[(f.SetPanel = 4)] = "SetPanel"),
          (f[(f.SetPanelId = 5)] = "SetPanelId"),
          f);
      let ee = {
          0: (e) => {
            let t = {
              ...e,
              popoverState: (0, L.E)(e.popoverState, { 0: 1, 1: 0 }),
            };
            return 0 === t.popoverState && (t.__demoMode = !1), t;
          },
          1: (e) => (1 === e.popoverState ? e : { ...e, popoverState: 1 }),
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        et = (0, m.createContext)(null);
      function en(e) {
        let t = (0, m.useContext)(et);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, en), t);
        }
        return t;
      }
      et.displayName = "PopoverContext";
      let er = (0, m.createContext)(null);
      function eo(e) {
        let t = (0, m.useContext)(er);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, eo), t);
        }
        return t;
      }
      er.displayName = "PopoverAPIContext";
      let el = (0, m.createContext)(null);
      function eu() {
        return (0, m.useContext)(el);
      }
      el.displayName = "PopoverGroupContext";
      let ea = (0, m.createContext)(null);
      function ei(e, t) {
        return (0, L.E)(t.type, ee, e, t);
      }
      ea.displayName = "PopoverPanelContext";
      let es = C.AN.RenderStrategy | C.AN.Static,
        ec = C.AN.RenderStrategy | C.AN.Static,
        ed = Object.assign(
          (0, C.yV)(function (e, t) {
            var n, r, o;
            let l, u, a, i, s, c;
            let { __demoMode: d = !1, ...f } = e,
              p = (0, m.useRef)(null),
              v = (0, w.T)(
                t,
                (0, w.h)((e) => {
                  p.current = e;
                })
              ),
              g = (0, m.useRef)([]),
              b = (0, m.useReducer)(ei, {
                __demoMode: d,
                popoverState: d ? 0 : 1,
                buttons: g,
                button: null,
                buttonId: null,
                panel: null,
                panelId: null,
                beforePanelSentinel: (0, m.createRef)(),
                afterPanelSentinel: (0, m.createRef)(),
              }),
              [
                {
                  popoverState: E,
                  button: y,
                  buttonId: P,
                  panel: T,
                  panelId: O,
                  beforePanelSentinel: N,
                  afterPanelSentinel: F,
                },
                I,
              ] = b,
              k = S(null != (n = p.current) ? n : y),
              A = (0, m.useMemo)(() => {
                if (!y || !T) return !1;
                for (let e of document.querySelectorAll("body > *"))
                  if (
                    Number(null == e ? void 0 : e.contains(y)) ^
                    Number(null == e ? void 0 : e.contains(T))
                  )
                    return !0;
                let e = $(),
                  t = e.indexOf(y),
                  n = (t + e.length - 1) % e.length,
                  r = (t + 1) % e.length,
                  o = e[n],
                  l = e[r];
                return !T.contains(o) && !T.contains(l);
              }, [y, T]),
              R = (0, M.E)(P),
              _ = (0, M.E)(O),
              z = (0, m.useMemo)(
                () => ({
                  buttonId: R,
                  panelId: _,
                  close: () => I({ type: 1 }),
                }),
                [R, _, I]
              ),
              D = eu(),
              Y = null == D ? void 0 : D.registerPopover,
              G = (0, h.z)(() => {
                var e;
                return null !=
                  (e = null == D ? void 0 : D.isFocusWithinPopoverGroup())
                  ? e
                  : (null == k ? void 0 : k.activeElement) &&
                      ((null == y ? void 0 : y.contains(k.activeElement)) ||
                        (null == T ? void 0 : T.contains(k.activeElement)));
              });
            (0, m.useEffect)(() => (null == Y ? void 0 : Y(z)), [Y, z]);
            let [K, W] =
                ((l = (0, m.useContext)(x)),
                (u = (0, m.useRef)([])),
                (a = (0, h.z)(
                  (e) => (u.current.push(e), l && l.register(e), () => i(e))
                )),
                (i = (0, h.z)((e) => {
                  let t = u.current.indexOf(e);
                  -1 !== t && u.current.splice(t, 1), l && l.unregister(e);
                })),
                (s = (0, m.useMemo)(
                  () => ({ register: a, unregister: i, portals: u }),
                  [a, i, u]
                )),
                [
                  u,
                  (0, m.useMemo)(
                    () =>
                      function ({ children: e }) {
                        return m.createElement(x.Provider, { value: s }, e);
                      },
                    [s]
                  ),
                ]),
              J = (function ({
                defaultContainers: e = [],
                portals: t,
                mainTreeNodeRef: n,
              } = {}) {
                var r;
                let o = (0, m.useRef)(
                    null != (r = null == n ? void 0 : n.current) ? r : null
                  ),
                  l = S(o),
                  u = (0, h.z)(() => {
                    var n, r, u;
                    let a = [];
                    for (let t of e)
                      null !== t &&
                        (t instanceof HTMLElement
                          ? a.push(t)
                          : "current" in t &&
                            t.current instanceof HTMLElement &&
                            a.push(t.current));
                    if (null != t && t.current)
                      for (let e of t.current) a.push(e);
                    for (let e of null !=
                    (n =
                      null == l
                        ? void 0
                        : l.querySelectorAll("html > *, body > *"))
                      ? n
                      : [])
                      e !== document.body &&
                        e !== document.head &&
                        e instanceof HTMLElement &&
                        "headlessui-portal-root" !== e.id &&
                        (e.contains(o.current) ||
                          e.contains(
                            null ==
                              (u =
                                null == (r = o.current)
                                  ? void 0
                                  : r.getRootNode())
                              ? void 0
                              : u.host
                          ) ||
                          a.some((t) => e.contains(t)) ||
                          a.push(e));
                    return a;
                  });
                return {
                  resolveContainers: u,
                  contains: (0, h.z)((e) => u().some((t) => t.contains(e))),
                  mainTreeNodeRef: o,
                  MainTreeNode: (0, m.useMemo)(
                    () =>
                      function () {
                        return null != n
                          ? null
                          : m.createElement(Z, { features: U.Hidden, ref: o });
                      },
                    [o, n]
                  ),
                };
              })({
                mainTreeNodeRef: null == D ? void 0 : D.mainTreeNodeRef,
                portals: K,
                defaultContainers: [y, T],
              });
            (r = null == k ? void 0 : k.defaultView),
              (o = "focus"),
              (c = (0, M.E)((e) => {
                var t, n, r, o;
                e.target !== window &&
                  e.target instanceof HTMLElement &&
                  0 === E &&
                  (G() ||
                    (y &&
                      T &&
                      (J.contains(e.target) ||
                        (null !=
                          (n = null == (t = N.current) ? void 0 : t.contains) &&
                          n.call(t, e.target)) ||
                        (null !=
                          (o = null == (r = F.current) ? void 0 : r.contains) &&
                          o.call(r, e.target)) ||
                        I({ type: 1 }))));
              })),
              (0, m.useEffect)(() => {
                function e(e) {
                  c.current(e);
                }
                return (
                  (r = null != r ? r : window).addEventListener(o, e, !0),
                  () => r.removeEventListener(o, e, !0)
                );
              }, [r, o, !0]),
              (function (e, t, n = !0) {
                let r = (0, m.useRef)(!1);
                function o(n, o) {
                  if (!r.current || n.defaultPrevented) return;
                  let l = o(n);
                  if (
                    null !== l &&
                    l.getRootNode().contains(l) &&
                    l.isConnected
                  ) {
                    for (let t of (function e(t) {
                      return "function" == typeof t
                        ? e(t())
                        : Array.isArray(t) || t instanceof Set
                        ? t
                        : [t];
                    })(e)) {
                      if (null === t) continue;
                      let e = t instanceof HTMLElement ? t : t.current;
                      if (
                        (null != e && e.contains(l)) ||
                        (n.composed && n.composedPath().includes(e))
                      )
                        return;
                    }
                    return (
                      j(l, H.Loose) || -1 === l.tabIndex || n.preventDefault(),
                      t(n, l)
                    );
                  }
                }
                (0, m.useEffect)(() => {
                  requestAnimationFrame(() => {
                    r.current = n;
                  });
                }, [n]);
                let l = (0, m.useRef)(null);
                B(
                  "pointerdown",
                  (e) => {
                    var t, n;
                    r.current &&
                      (l.current =
                        (null ==
                        (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                          ? void 0
                          : n[0]) || e.target);
                  },
                  !0
                ),
                  B(
                    "mousedown",
                    (e) => {
                      var t, n;
                      r.current &&
                        (l.current =
                          (null ==
                          (n =
                            null == (t = e.composedPath) ? void 0 : t.call(e))
                            ? void 0
                            : n[0]) || e.target);
                    },
                    !0
                  ),
                  B(
                    "click",
                    (e) => {
                      /iPhone/gi.test(window.navigator.platform) ||
                        (/Mac/gi.test(window.navigator.platform) &&
                          window.navigator.maxTouchPoints > 0) ||
                        /Android/gi.test(window.navigator.userAgent) ||
                        (l.current &&
                          (o(e, () => l.current), (l.current = null)));
                    },
                    !0
                  ),
                  B(
                    "touchend",
                    (e) =>
                      o(e, () =>
                        e.target instanceof HTMLElement ? e.target : null
                      ),
                    !0
                  ),
                  V(
                    "blur",
                    (e) =>
                      o(e, () =>
                        window.document.activeElement instanceof
                        HTMLIFrameElement
                          ? window.document.activeElement
                          : null
                      ),
                    !0
                  );
              })(
                J.resolveContainers,
                (e, t) => {
                  I({ type: 1 }),
                    j(t, H.Loose) ||
                      (e.preventDefault(), null == y || y.focus());
                },
                0 === E
              );
            let X = (0, h.z)((e) => {
                I({ type: 1 });
                let t = e
                  ? e instanceof HTMLElement
                    ? e
                    : "current" in e && e.current instanceof HTMLElement
                    ? e.current
                    : y
                  : y;
                null == t || t.focus();
              }),
              Q = (0, m.useMemo)(() => ({ close: X, isPortalled: A }), [X, A]),
              ee = (0, m.useMemo)(() => ({ open: 0 === E, close: X }), [E, X]);
            return m.createElement(
              ea.Provider,
              { value: null },
              m.createElement(
                et.Provider,
                { value: b },
                m.createElement(
                  er.Provider,
                  { value: Q },
                  m.createElement(
                    q.up,
                    { value: (0, L.E)(E, { 0: q.ZM.Open, 1: q.ZM.Closed }) },
                    m.createElement(
                      W,
                      null,
                      (0, C.sY)({
                        ourProps: { ref: v },
                        theirProps: f,
                        slot: ee,
                        defaultTag: "div",
                        name: "Popover",
                      }),
                      m.createElement(J.MainTreeNode, null)
                    )
                  )
                )
              )
            );
          }),
          {
            Button: (0, C.yV)(function (e, t) {
              let n = I(),
                { id: r = `headlessui-popover-button-${n}`, ...o } = e,
                [l, u] = en("Popover.Button"),
                { isPortalled: a } = eo("Popover.Button"),
                i = (0, m.useRef)(null),
                s = `headlessui-focus-sentinel-${I()}`,
                c = eu(),
                d = null == c ? void 0 : c.closeOthers,
                f = null !== (0, m.useContext)(ea);
              (0, m.useEffect)(() => {
                if (!f)
                  return (
                    u({ type: 3, buttonId: r }),
                    () => {
                      u({ type: 3, buttonId: null });
                    }
                  );
              }, [f, r, u]);
              let [p] = (0, m.useState)(() => Symbol()),
                v = (0, w.T)(
                  i,
                  t,
                  f
                    ? null
                    : (e) => {
                        if (e) l.buttons.current.push(p);
                        else {
                          let e = l.buttons.current.indexOf(p);
                          -1 !== e && l.buttons.current.splice(e, 1);
                        }
                        l.buttons.current.length > 1 &&
                          console.warn(
                            "You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."
                          ),
                          e && u({ type: 2, button: e });
                      }
                ),
                b = (0, w.T)(i, t),
                E = S(i),
                y = (0, h.z)((e) => {
                  var t, n, r;
                  if (f) {
                    if (1 === l.popoverState) return;
                    switch (e.key) {
                      case J.Space:
                      case J.Enter:
                        e.preventDefault(),
                          null == (n = (t = e.target).click) || n.call(t),
                          u({ type: 1 }),
                          null == (r = l.button) || r.focus();
                    }
                  } else
                    switch (e.key) {
                      case J.Space:
                      case J.Enter:
                        e.preventDefault(),
                          e.stopPropagation(),
                          1 === l.popoverState && (null == d || d(l.buttonId)),
                          u({ type: 0 });
                        break;
                      case J.Escape:
                        if (0 !== l.popoverState)
                          return null == d ? void 0 : d(l.buttonId);
                        if (
                          !i.current ||
                          (null != E &&
                            E.activeElement &&
                            !i.current.contains(E.activeElement))
                        )
                          return;
                        e.preventDefault(), e.stopPropagation(), u({ type: 1 });
                    }
                }),
                P = (0, h.z)((e) => {
                  f || (e.key === J.Space && e.preventDefault());
                }),
                T = (0, h.z)((t) => {
                  var n, r;
                  W(t.currentTarget) ||
                    e.disabled ||
                    (f
                      ? (u({ type: 1 }), null == (n = l.button) || n.focus())
                      : (t.preventDefault(),
                        t.stopPropagation(),
                        1 === l.popoverState && (null == d || d(l.buttonId)),
                        u({ type: 0 }),
                        null == (r = l.button) || r.focus()));
                }),
                O = (0, h.z)((e) => {
                  e.preventDefault(), e.stopPropagation();
                }),
                N = 0 === l.popoverState,
                F = (0, m.useMemo)(() => ({ open: N }), [N]),
                x = (function (e, t) {
                  let [n, r] = (0, m.useState)(() => Y(e));
                  return (
                    (0, g.e)(() => {
                      r(Y(e));
                    }, [e.type, e.as]),
                    (0, g.e)(() => {
                      n ||
                        (t.current &&
                          t.current instanceof HTMLButtonElement &&
                          !t.current.hasAttribute("type") &&
                          r("button"));
                    }, [n, t]),
                    n
                  );
                })(e, i),
                M = f
                  ? { ref: b, type: x, onKeyDown: y, onClick: T }
                  : {
                      ref: v,
                      id: l.buttonId,
                      type: x,
                      "aria-expanded": 0 === l.popoverState,
                      "aria-controls": l.panel ? l.panelId : void 0,
                      onKeyDown: y,
                      onKeyUp: P,
                      onClick: T,
                      onMouseDown: O,
                    },
                k = K(),
                _ = (0, h.z)(() => {
                  let e = l.panel;
                  e &&
                    (0, L.E)(k.current, {
                      [G.Forwards]: () => D(e, A.First),
                      [G.Backwards]: () => D(e, A.Last),
                    }) === R.Error &&
                    D(
                      $().filter(
                        (e) => "true" !== e.dataset.headlessuiFocusGuard
                      ),
                      (0, L.E)(k.current, {
                        [G.Forwards]: A.Next,
                        [G.Backwards]: A.Previous,
                      }),
                      { relativeTo: l.button }
                    );
                });
              return m.createElement(
                m.Fragment,
                null,
                (0, C.sY)({
                  ourProps: M,
                  theirProps: o,
                  slot: F,
                  defaultTag: "button",
                  name: "Popover.Button",
                }),
                N &&
                  !f &&
                  a &&
                  m.createElement(Z, {
                    id: s,
                    features: U.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: _,
                  })
              );
            }),
            Overlay: (0, C.yV)(function (e, t) {
              let n = I(),
                { id: r = `headlessui-popover-overlay-${n}`, ...o } = e,
                [{ popoverState: l }, u] = en("Popover.Overlay"),
                a = (0, w.T)(t),
                i = (0, q.oJ)(),
                s = null !== i ? (i & q.ZM.Open) === q.ZM.Open : 0 === l,
                c = (0, h.z)((e) => {
                  if (W(e.currentTarget)) return e.preventDefault();
                  u({ type: 1 });
                }),
                d = (0, m.useMemo)(() => ({ open: 0 === l }), [l]);
              return (0,
              C.sY)({ ourProps: { ref: a, id: r, "aria-hidden": !0, onClick: c }, theirProps: o, slot: d, defaultTag: "div", features: es, visible: s, name: "Popover.Overlay" });
            }),
            Panel: (0, C.yV)(function (e, t) {
              let n = I(),
                {
                  id: r = `headlessui-popover-panel-${n}`,
                  focus: o = !1,
                  ...l
                } = e,
                [u, a] = en("Popover.Panel"),
                { close: i, isPortalled: s } = eo("Popover.Panel"),
                c = `headlessui-focus-sentinel-before-${I()}`,
                d = `headlessui-focus-sentinel-after-${I()}`,
                f = (0, m.useRef)(null),
                p = (0, w.T)(f, t, (e) => {
                  a({ type: 4, panel: e });
                }),
                v = S(f),
                b = (0, C.Y2)();
              (0, g.e)(
                () => (
                  a({ type: 5, panelId: r }),
                  () => {
                    a({ type: 5, panelId: null });
                  }
                ),
                [r, a]
              );
              let E = (0, q.oJ)(),
                y =
                  null !== E
                    ? (E & q.ZM.Open) === q.ZM.Open
                    : 0 === u.popoverState,
                P = (0, h.z)((e) => {
                  var t;
                  if (e.key === J.Escape) {
                    if (
                      0 !== u.popoverState ||
                      !f.current ||
                      (null != v &&
                        v.activeElement &&
                        !f.current.contains(v.activeElement))
                    )
                      return;
                    e.preventDefault(),
                      e.stopPropagation(),
                      a({ type: 1 }),
                      null == (t = u.button) || t.focus();
                  }
                });
              (0, m.useEffect)(() => {
                var t;
                e.static ||
                  (1 === u.popoverState &&
                    (null == (t = e.unmount) || t) &&
                    a({ type: 4, panel: null }));
              }, [u.popoverState, e.unmount, e.static, a]),
                (0, m.useEffect)(() => {
                  if (u.__demoMode || !o || 0 !== u.popoverState || !f.current)
                    return;
                  let e = null == v ? void 0 : v.activeElement;
                  f.current.contains(e) || D(f.current, A.First);
                }, [u.__demoMode, o, f, u.popoverState]);
              let T = (0, m.useMemo)(
                  () => ({ open: 0 === u.popoverState, close: i }),
                  [u, i]
                ),
                O = {
                  ref: p,
                  id: r,
                  onKeyDown: P,
                  onBlur:
                    o && 0 === u.popoverState
                      ? (e) => {
                          var t, n, r, o, l;
                          let i = e.relatedTarget;
                          i &&
                            f.current &&
                            ((null != (t = f.current) && t.contains(i)) ||
                              (a({ type: 1 }),
                              ((null !=
                                (r =
                                  null == (n = u.beforePanelSentinel.current)
                                    ? void 0
                                    : n.contains) &&
                                r.call(n, i)) ||
                                (null !=
                                  (l =
                                    null == (o = u.afterPanelSentinel.current)
                                      ? void 0
                                      : o.contains) &&
                                  l.call(o, i))) &&
                                i.focus({ preventScroll: !0 })));
                        }
                      : void 0,
                  tabIndex: -1,
                },
                N = K(),
                F = (0, h.z)(() => {
                  let e = f.current;
                  e &&
                    (0, L.E)(N.current, {
                      [G.Forwards]: () => {
                        var t;
                        D(e, A.First) === R.Error &&
                          (null == (t = u.afterPanelSentinel.current) ||
                            t.focus());
                      },
                      [G.Backwards]: () => {
                        var e;
                        null == (e = u.button) ||
                          e.focus({ preventScroll: !0 });
                      },
                    });
                }),
                x = (0, h.z)(() => {
                  let e = f.current;
                  e &&
                    (0, L.E)(N.current, {
                      [G.Forwards]: () => {
                        var e;
                        if (!u.button) return;
                        let t = $(),
                          n = t.indexOf(u.button),
                          r = t.slice(0, n + 1),
                          o = [...t.slice(n + 1), ...r];
                        for (let t of o.slice())
                          if (
                            "true" === t.dataset.headlessuiFocusGuard ||
                            (null != (e = u.panel) && e.contains(t))
                          ) {
                            let e = o.indexOf(t);
                            -1 !== e && o.splice(e, 1);
                          }
                        D(o, A.First, { sorted: !1 });
                      },
                      [G.Backwards]: () => {
                        var t;
                        D(e, A.Previous) === R.Error &&
                          (null == (t = u.button) || t.focus());
                      },
                    });
                });
              return m.createElement(
                ea.Provider,
                { value: r },
                y &&
                  s &&
                  m.createElement(Z, {
                    id: c,
                    ref: u.beforePanelSentinel,
                    features: U.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: F,
                  }),
                (0, C.sY)({
                  mergeRefs: b,
                  ourProps: O,
                  theirProps: l,
                  slot: T,
                  defaultTag: "div",
                  features: ec,
                  visible: y,
                  name: "Popover.Panel",
                }),
                y &&
                  s &&
                  m.createElement(Z, {
                    id: d,
                    ref: u.afterPanelSentinel,
                    features: U.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: x,
                  })
              );
            }),
            Group: (0, C.yV)(function (e, t) {
              let n;
              let r = (0, m.useRef)(null),
                o = (0, w.T)(r, t),
                [l, u] = (0, m.useState)([]),
                a = {
                  mainTreeNodeRef: (n = (0, m.useRef)(null)),
                  MainTreeNode: (0, m.useMemo)(
                    () =>
                      function () {
                        return m.createElement(Z, {
                          features: U.Hidden,
                          ref: n,
                        });
                      },
                    [n]
                  ),
                },
                i = (0, h.z)((e) => {
                  u((t) => {
                    let n = t.indexOf(e);
                    if (-1 !== n) {
                      let e = t.slice();
                      return e.splice(n, 1), e;
                    }
                    return t;
                  });
                }),
                s = (0, h.z)((e) => (u((t) => [...t, e]), () => i(e))),
                c = (0, h.z)(() => {
                  var e;
                  let t = y(r);
                  if (!t) return !1;
                  let n = t.activeElement;
                  return (
                    !!(null != (e = r.current) && e.contains(n)) ||
                    l.some((e) => {
                      var r, o;
                      return (
                        (null == (r = t.getElementById(e.buttonId.current))
                          ? void 0
                          : r.contains(n)) ||
                        (null == (o = t.getElementById(e.panelId.current))
                          ? void 0
                          : o.contains(n))
                      );
                    })
                  );
                }),
                d = (0, h.z)((e) => {
                  for (let t of l) t.buttonId.current !== e && t.close();
                }),
                f = (0, m.useMemo)(
                  () => ({
                    registerPopover: s,
                    unregisterPopover: i,
                    isFocusWithinPopoverGroup: c,
                    closeOthers: d,
                    mainTreeNodeRef: a.mainTreeNodeRef,
                  }),
                  [s, i, c, d, a.mainTreeNodeRef]
                ),
                p = (0, m.useMemo)(() => ({}), []);
              return m.createElement(
                el.Provider,
                { value: f },
                (0, C.sY)({
                  ourProps: { ref: o },
                  theirProps: e,
                  slot: p,
                  defaultTag: "div",
                  name: "Popover.Group",
                }),
                m.createElement(a.MainTreeNode, null)
              );
            }),
          }
        );
    },
    5545: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return k;
        },
      });
      var r,
        o = n(2265),
        l = n(5195);
      function u() {
        let e = [],
          t = {
            addEventListener: (e, n, r, o) => (
              e.addEventListener(n, r, o),
              t.add(() => e.removeEventListener(n, r, o))
            ),
            requestAnimationFrame(...e) {
              let n = requestAnimationFrame(...e);
              return t.add(() => cancelAnimationFrame(n));
            },
            nextFrame: (...e) =>
              t.requestAnimationFrame(() => t.requestAnimationFrame(...e)),
            setTimeout(...e) {
              let n = setTimeout(...e);
              return t.add(() => clearTimeout(n));
            },
            microTask(...e) {
              let n = { current: !0 };
              return (
                (0, l.Y)(() => {
                  n.current && e[0]();
                }),
                t.add(() => {
                  n.current = !1;
                })
              );
            },
            style(e, t, n) {
              let r = e.style.getPropertyValue(t);
              return (
                Object.assign(e.style, { [t]: n }),
                this.add(() => {
                  Object.assign(e.style, { [t]: r });
                })
              );
            },
            group(e) {
              let t = u();
              return e(t), this.add(() => t.dispose());
            },
            add: (t) => (
              e.push(t),
              () => {
                let n = e.indexOf(t);
                if (n >= 0) for (let t of e.splice(n, 1)) t();
              }
            ),
            dispose() {
              for (let t of e.splice(0)) t();
            },
          };
        return t;
      }
      function a() {
        let [e] = (0, o.useState)(u);
        return (0, o.useEffect)(() => () => e.dispose(), [e]), e;
      }
      var i = n(4623),
        s = n(2600);
      function c() {
        let e = (0, o.useRef)(!1);
        return (
          (0, s.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var d = n(1858),
        f = n(8957),
        p = n(6618),
        m = n(597);
      function v(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function h(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      var g = n(5306),
        b = n(3960),
        E = n(1931);
      function y(e = "") {
        return e.split(/\s+/).filter((e) => e.length > 1);
      }
      let S = (0, o.createContext)(null);
      S.displayName = "TransitionContext";
      var P = (((r = P || {}).Visible = "visible"), (r.Hidden = "hidden"), r);
      let w = (0, o.createContext)(null);
      function T(e) {
        return "children" in e
          ? T(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function C(e, t) {
        let n = (0, d.E)(e),
          r = (0, o.useRef)([]),
          l = c(),
          u = a(),
          s = (0, i.z)((e, t = E.l4.Hidden) => {
            let o = r.current.findIndex(({ el: t }) => t === e);
            -1 !== o &&
              ((0, m.E)(t, {
                [E.l4.Unmount]() {
                  r.current.splice(o, 1);
                },
                [E.l4.Hidden]() {
                  r.current[o].state = "hidden";
                },
              }),
              u.microTask(() => {
                var e;
                !T(r) && l.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = (0, i.z)((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => s(e, E.l4.Unmount)
            );
          }),
          p = (0, o.useRef)([]),
          v = (0, o.useRef)(Promise.resolve()),
          h = (0, o.useRef)({ enter: [], leave: [], idle: [] }),
          g = (0, i.z)((e, n, r) => {
            p.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    p.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(h.current[n].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              "enter" === n
                ? (v.current = v.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          b = (0, i.z)((e, t, n) => {
            Promise.all(h.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = p.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, o.useMemo)(
          () => ({
            children: r,
            register: f,
            unregister: s,
            onStart: g,
            onStop: b,
            wait: v,
            chains: h,
          }),
          [f, s, r, g, b, h, v]
        );
      }
      function O() {}
      w.displayName = "NestingContext";
      let N = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function F(e) {
        var t;
        let n = {};
        for (let r of N) n[r] = null != (t = e[r]) ? t : O;
        return n;
      }
      let x = E.AN.RenderStrategy,
        M = (0, E.yV)(function (e, t) {
          let { show: n, appear: r = !1, unmount: l = !0, ...u } = e,
            a = (0, o.useRef)(null),
            c = (0, p.T)(a, t);
          (0, f.H)();
          let d = (0, g.oJ)();
          if (
            (void 0 === n && null !== d && (n = (d & g.ZM.Open) === g.ZM.Open),
            ![!0, !1].includes(n))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [m, v] = (0, o.useState)(n ? "visible" : "hidden"),
            h = C(() => {
              v("hidden");
            }),
            [b, y] = (0, o.useState)(!0),
            P = (0, o.useRef)([n]);
          (0, s.e)(() => {
            !1 !== b &&
              P.current[P.current.length - 1] !== n &&
              (P.current.push(n), y(!1));
          }, [P, n]);
          let O = (0, o.useMemo)(
            () => ({ show: n, appear: r, initial: b }),
            [n, r, b]
          );
          (0, o.useEffect)(() => {
            if (n) v("visible");
            else if (T(h)) {
              let e = a.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                v("hidden");
            } else v("hidden");
          }, [n, h]);
          let N = { unmount: l },
            F = (0, i.z)(() => {
              var t;
              b && y(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            M = (0, i.z)(() => {
              var t;
              b && y(!1), null == (t = e.beforeLeave) || t.call(e);
            });
          return o.createElement(
            w.Provider,
            { value: h },
            o.createElement(
              S.Provider,
              { value: O },
              (0, E.sY)({
                ourProps: {
                  ...N,
                  as: o.Fragment,
                  children: o.createElement(I, {
                    ref: c,
                    ...N,
                    ...u,
                    beforeEnter: F,
                    beforeLeave: M,
                  }),
                },
                theirProps: {},
                defaultTag: o.Fragment,
                features: x,
                visible: "visible" === m,
                name: "Transition",
              })
            )
          );
        }),
        I = (0, E.yV)(function (e, t) {
          var n, r, l;
          let P;
          let {
              beforeEnter: O,
              afterEnter: N,
              beforeLeave: M,
              afterLeave: I,
              enter: L,
              enterFrom: k,
              enterTo: A,
              entered: R,
              leave: _,
              leaveFrom: $,
              leaveTo: H,
              ...j
            } = e,
            z = (0, o.useRef)(null),
            D = (0, p.T)(z, t),
            B = null == (n = j.unmount) || n ? E.l4.Unmount : E.l4.Hidden,
            {
              show: V,
              appear: Y,
              initial: U,
            } = (function () {
              let e = (0, o.useContext)(S);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [Z, G] = (0, o.useState)(V ? "visible" : "hidden"),
            K = (function () {
              let e = (0, o.useContext)(w);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: q, unregister: W } = K;
          (0, o.useEffect)(() => q(z), [q, z]),
            (0, o.useEffect)(() => {
              if (B === E.l4.Hidden && z.current) {
                if (V && "visible" !== Z) {
                  G("visible");
                  return;
                }
                return (0, m.E)(Z, { hidden: () => W(z), visible: () => q(z) });
              }
            }, [Z, z, q, W, V, B]);
          let J = (0, d.E)({
              base: y(j.className),
              enter: y(L),
              enterFrom: y(k),
              enterTo: y(A),
              entered: y(R),
              leave: y(_),
              leaveFrom: y($),
              leaveTo: y(H),
            }),
            X =
              ((l = {
                beforeEnter: O,
                afterEnter: N,
                beforeLeave: M,
                afterLeave: I,
              }),
              (P = (0, o.useRef)(F(l))),
              (0, o.useEffect)(() => {
                P.current = F(l);
              }, [l]),
              P),
            Q = (0, f.H)();
          (0, o.useEffect)(() => {
            if (Q && "visible" === Z && null === z.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [z, Z, Q]);
          let ee = Y && V && U,
            et = Q && (!U || Y) ? (V ? "enter" : "leave") : "idle",
            en = (function (e = 0) {
              let [t, n] = (0, o.useState)(e),
                r = c(),
                l = (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t | e);
                  },
                  [t, r]
                ),
                u = (0, o.useCallback)((e) => !!(t & e), [t]);
              return {
                flags: t,
                addFlag: l,
                hasFlag: u,
                removeFlag: (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t & ~e);
                  },
                  [n, r]
                ),
                toggleFlag: (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t ^ e);
                  },
                  [n]
                ),
              };
            })(0),
            er = (0, i.z)((e) =>
              (0, m.E)(e, {
                enter: () => {
                  en.addFlag(g.ZM.Opening), X.current.beforeEnter();
                },
                leave: () => {
                  en.addFlag(g.ZM.Closing), X.current.beforeLeave();
                },
                idle: () => {},
              })
            ),
            eo = (0, i.z)((e) =>
              (0, m.E)(e, {
                enter: () => {
                  en.removeFlag(g.ZM.Opening), X.current.afterEnter();
                },
                leave: () => {
                  en.removeFlag(g.ZM.Closing), X.current.afterLeave();
                },
                idle: () => {},
              })
            ),
            el = C(() => {
              G("hidden"), W(z);
            }, K),
            eu = (0, o.useRef)(!1);
          !(function ({
            immediate: e,
            container: t,
            direction: n,
            classes: r,
            onStart: o,
            onStop: l,
          }) {
            let i = c(),
              f = a(),
              p = (0, d.E)(n);
            (0, s.e)(() => {
              e && (p.current = "enter");
            }, [e]),
              (0, s.e)(() => {
                let e = u();
                f.add(e.dispose);
                let n = t.current;
                if (n && "idle" !== p.current && i.current) {
                  var a, s, c;
                  let t, i, d, f, g, b, E;
                  return (
                    e.dispose(),
                    o.current(p.current),
                    e.add(
                      ((a = r.current),
                      (s = "enter" === p.current),
                      (c = () => {
                        e.dispose(), l.current(p.current);
                      }),
                      (i = s ? "enter" : "leave"),
                      (d = u()),
                      (f =
                        void 0 !== c
                          ? ((t = { called: !1 }),
                            (...e) => {
                              if (!t.called) return (t.called = !0), c(...e);
                            })
                          : () => {}),
                      "enter" === i &&
                        (n.removeAttribute("hidden"), (n.style.display = "")),
                      (g = (0, m.E)(i, {
                        enter: () => a.enter,
                        leave: () => a.leave,
                      })),
                      (b = (0, m.E)(i, {
                        enter: () => a.enterTo,
                        leave: () => a.leaveTo,
                      })),
                      (E = (0, m.E)(i, {
                        enter: () => a.enterFrom,
                        leave: () => a.leaveFrom,
                      })),
                      h(
                        n,
                        ...a.base,
                        ...a.enter,
                        ...a.enterTo,
                        ...a.enterFrom,
                        ...a.leave,
                        ...a.leaveFrom,
                        ...a.leaveTo,
                        ...a.entered
                      ),
                      v(n, ...a.base, ...g, ...E),
                      d.nextFrame(() => {
                        h(n, ...a.base, ...g, ...E),
                          v(n, ...a.base, ...g, ...b),
                          (function (e, t) {
                            let n = u();
                            if (!e) return n.dispose;
                            let { transitionDuration: r, transitionDelay: o } =
                                getComputedStyle(e),
                              [l, a] = [r, o].map((e) => {
                                let [t = 0] = e
                                  .split(",")
                                  .filter(Boolean)
                                  .map((e) =>
                                    e.includes("ms")
                                      ? parseFloat(e)
                                      : 1e3 * parseFloat(e)
                                  )
                                  .sort((e, t) => t - e);
                                return t;
                              }),
                              i = l + a;
                            if (0 !== i) {
                              n.group((n) => {
                                n.setTimeout(() => {
                                  t(), n.dispose();
                                }, i),
                                  n.addEventListener(
                                    e,
                                    "transitionrun",
                                    (e) => {
                                      e.target === e.currentTarget &&
                                        n.dispose();
                                    }
                                  );
                              });
                              let r = n.addEventListener(
                                e,
                                "transitionend",
                                (e) => {
                                  e.target === e.currentTarget && (t(), r());
                                }
                              );
                            } else t();
                            n.add(() => t()), n.dispose;
                          })(
                            n,
                            () => (
                              h(n, ...a.base, ...g),
                              v(n, ...a.base, ...a.entered),
                              f()
                            )
                          );
                      }),
                      d.dispose)
                    ),
                    e.dispose
                  );
                }
              }, [n]);
          })({
            immediate: ee,
            container: z,
            classes: J,
            direction: et,
            onStart: (0, d.E)((e) => {
              (eu.current = !0), el.onStart(z, e, er);
            }),
            onStop: (0, d.E)((e) => {
              (eu.current = !1),
                el.onStop(z, e, eo),
                "leave" !== e || T(el) || (G("hidden"), W(z));
            }),
          });
          let ea = j;
          return (
            ee
              ? (ea = {
                  ...ea,
                  className: (0, b.A)(
                    j.className,
                    ...J.current.enter,
                    ...J.current.enterFrom
                  ),
                })
              : eu.current &&
                ((ea.className = (0, b.A)(
                  j.className,
                  null == (r = z.current) ? void 0 : r.className
                )),
                "" === ea.className && delete ea.className),
            o.createElement(
              w.Provider,
              { value: el },
              o.createElement(
                g.up,
                {
                  value:
                    (0, m.E)(Z, { visible: g.ZM.Open, hidden: g.ZM.Closed }) |
                    en.flags,
                },
                (0, E.sY)({
                  ourProps: { ref: D },
                  theirProps: ea,
                  defaultTag: "div",
                  features: x,
                  visible: "visible" === Z,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        L = (0, E.yV)(function (e, t) {
          let n = null !== (0, o.useContext)(S),
            r = null !== (0, g.oJ)();
          return o.createElement(
            o.Fragment,
            null,
            !n && r
              ? o.createElement(M, { ref: t, ...e })
              : o.createElement(I, { ref: t, ...e })
          );
        }),
        k = Object.assign(M, { Child: L, Root: M });
    },
    4623: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(1858);
      let l = function (e) {
        let t = (0, o.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    2600: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(2057);
      let l = (e, t) => {
        o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    1858: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(2600);
      function l(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    8957: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return u;
        },
      });
      var r,
        o = n(2265),
        l = n(2057);
      function u() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(o, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [u, a] = o.useState(l.O.isHandoffComplete);
        return (
          u && !1 === l.O.isHandoffComplete && a(!1),
          o.useEffect(() => {
            !0 !== u && a(!0);
          }, [u]),
          o.useEffect(() => l.O.handoff(), []),
          !t && u
        );
      }
    },
    6618: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return a;
        },
        h: function () {
          return u;
        },
      });
      var r = n(2265),
        o = n(4623);
      let l = Symbol();
      function u(e, t = !0) {
        return Object.assign(e, { [l]: t });
      }
      function a(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, o.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[l]))
          ? void 0
          : n;
      }
    },
    5306: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZM: function () {
          return u;
        },
        oJ: function () {
          return a;
        },
        up: function () {
          return i;
        },
      });
      var r,
        o = n(2265);
      let l = (0, o.createContext)(null);
      l.displayName = "OpenClosedContext";
      var u =
        (((r = u || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function a() {
        return (0, o.useContext)(l);
      }
      function i({ value: e, children: t }) {
        return o.createElement(l.Provider, { value: e }, t);
      }
    },
    3960: function (e, t, n) {
      "use strict";
      function r(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
    2057: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var r = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        l = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      class u {
        constructor() {
          l(this, "current", this.detect()),
            l(this, "handoffState", "pending"),
            l(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      }
      let a = new u();
    },
    597: function (e, t, n) {
      "use strict";
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o);
      }
      n.d(t, {
        E: function () {
          return r;
        },
      });
    },
    5195: function (e, t, n) {
      "use strict";
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      n.d(t, {
        Y: function () {
          return r;
        },
      });
    },
    1931: function (e, t, n) {
      "use strict";
      n.d(t, {
        AN: function () {
          return i;
        },
        Y2: function () {
          return f;
        },
        l4: function () {
          return s;
        },
        sY: function () {
          return c;
        },
        yV: function () {
          return v;
        },
      });
      var r,
        o,
        l = n(2265),
        u = n(3960),
        a = n(597),
        i =
          (((r = i || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        s =
          (((o = s || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function c({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: l = !0,
        name: u,
        mergeRefs: i,
      }) {
        i = null != i ? i : p;
        let s = m(t, e);
        if (l) return d(s, n, r, u, i);
        let c = null != o ? o : 0;
        if (2 & c) {
          let { static: e = !1, ...t } = s;
          if (e) return d(t, n, r, u, i);
        }
        if (1 & c) {
          let { unmount: e = !0, ...t } = s;
          return (0, a.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              d({ ...t, hidden: !0, style: { display: "none" } }, n, r, u, i),
          });
        }
        return d(s, n, r, u, i);
      }
      function d(e, t = {}, n, r, o) {
        let {
            as: a = n,
            children: i,
            refName: s = "ref",
            ...c
          } = g(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? { [s]: e.ref } : {},
          f = "function" == typeof i ? i(t) : i;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t));
        let p = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
          e && (p["data-headlessui-state"] = n.join(" "));
        }
        if (a === l.Fragment && Object.keys(h(c)).length > 0) {
          if (!(0, l.isValidElement)(f) || (Array.isArray(f) && f.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(c).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = f.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    (0, u.A)(
                      null == e ? void 0 : e.className(...t),
                      c.className
                    )
                : (0, u.A)(null == e ? void 0 : e.className, c.className);
          return (0, l.cloneElement)(
            f,
            Object.assign(
              {},
              m(f.props, h(g(c, ["ref"]))),
              p,
              d,
              { ref: o(f.ref, d.ref) },
              t ? { className: t } : {}
            )
          );
        }
        return (0, l.createElement)(
          a,
          Object.assign(
            {},
            g(c, ["ref"]),
            a !== l.Fragment && d,
            a !== l.Fragment && p
          ),
          f
        );
      }
      function f() {
        let e = (0, l.useRef)([]),
          t = (0, l.useCallback)((t) => {
            for (let n of e.current)
              null != n && ("function" == typeof n ? n(t) : (n.current = t));
          }, []);
        return (...n) => {
          if (!n.every((e) => null == e)) return (e.current = n), t;
        };
      }
      function p(...e) {
        return e.every((e) => null == e)
          ? void 0
          : (t) => {
              for (let n of e)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            };
      }
      function m(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function v(e) {
        var t;
        return Object.assign((0, l.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function h(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function g(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
    7042: function (e, t, n) {
      "use strict";
      t.Z = function () {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var l = t.length;
                  for (n = 0; n < l; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      };
    },
  },
]);
