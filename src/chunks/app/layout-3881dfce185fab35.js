(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2826: function (e, r, t) {
      Promise.resolve().then(t.t.bind(t, 5250, 23)),
        Promise.resolve().then(t.bind(t, 4840)),
        Promise.resolve().then(t.bind(t, 5532)),
        Promise.resolve().then(t.t.bind(t, 6789, 23));
    },
    4840: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          AppContext: function () {
            return l;
          },
          Providers: function () {
            return A;
          },
        });
      var n = t(7437),
        i = t(2265),
        s = t(4033),
        a = t(6435);
      function o() {
        let { resolvedTheme: e, setTheme: r } = (0, a.F)();
        return (
          (0, i.useEffect)(() => {
            let t = window.matchMedia("(prefers-color-scheme: dark)");
            function n() {
              e === (t.matches ? "dark" : "light") && r("system");
            }
            return (
              n(),
              t.addEventListener("change", n),
              () => {
                t.removeEventListener("change", n);
              }
            );
          }, [e, r]),
          null
        );
      }
      let l = (0, i.createContext)({});
      function A(e) {
        var r;
        let t,
          { children: A } = e,
          c =
            ((r = (0, s.usePathname)()),
            (t = (0, i.useRef)()),
            (0, i.useEffect)(() => {
              t.current = r;
            }, [r]),
            t.current);
        return (0, n.jsx)(l.Provider, {
          value: { previousPathname: c },
          children: (0, n.jsxs)(a.f, {
            attribute: "class",
            disableTransitionOnChange: !0,
            children: [(0, n.jsx)(o, {}), A],
          }),
        });
      }
    },
    8593: function (e, r, t) {
      "use strict";
      t.d(r, {
        W2: function () {
          return l;
        },
      });
      var n = t(7437),
        i = t(2265),
        s = t(7042);
      let a = (0, i.forwardRef)(function (e, r) {
          let { className: t, children: i, ...a } = e;
          return (0,
          n.jsx)("div", { ref: r, className: (0, s.Z)("sm:px-8", t), ...a, children: (0, n.jsx)("div", { className: "mx-auto w-full max-w-7xl lg:px-8", children: i }) });
        }),
        o = (0, i.forwardRef)(function (e, r) {
          let { className: t, children: i, ...a } = e;
          return (0,
          n.jsx)("div", { ref: r, className: (0, s.Z)("relative px-4 sm:px-8 lg:px-12", t), ...a, children: (0, n.jsx)("div", { className: "mx-auto max-w-2xl lg:max-w-5xl", children: i }) });
        }),
        l = (0, i.forwardRef)(function (e, r) {
          let { children: t, ...i } = e;
          return (0,
          n.jsx)(a, { ref: r, ...i, children: (0, n.jsx)(o, { children: t }) });
        });
    },
    5532: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          Header: function () {
            return B;
          },
        });
      var n = t(7437),
        i = t(2265),
        s = t(6691),
        a = t.n(s),
        o = t(1396),
        l = t.n(o),
        A = t(4033),
        c = t(6435),
        d = t(4875),
        h = t(5545),
        u = t(7042),
        x = t(8593),
        m = {
          src: "src/media/1680913841_kartinki-pibig-info-p-kartinki-geografiya-dlya-prezentatsii-arti-26.jpg",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABgT//xAAXEAADAQAAAAAAAAAAAAAAAAABAgMT/9oACAEBAAEFAs6of//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/Aa//xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAgEBPwEb/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAAxIyQf/aAAgBAQAGPwLKxbGA1HJ//8QAGBABAQADAAAAAAAAAAAAAAAAAREAQVH/2gAIAQEAAT8hHy1dCHM//9oADAMBAAIAAwAAABD7/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAEDAQE/EFmX/8QAFhEAAwAAAAAAAAAAAAAAAAAAABEx/9oACAECAQE/EFo//8QAGRABAAMBAQAAAAAAAAAAAAAAAREhQQBx/9oACAEBAAE/EJYNaNIS4l1vzv/Z",
          blurWidth: 8,
          blurHeight: 8,
        };
      function f(e) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          ...e,
          children: (0, n.jsx)("path", {
            d: "m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      function p(e) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 8 6",
          "aria-hidden": "true",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M1.75 1.75 4 4.25l2.25-2.5",
            fill: "none",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      function v(e) {
        return (0, n.jsxs)("svg", {
          viewBox: "0 0 24 24",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z",
            }),
            (0, n.jsx)("path", {
              d: "M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",
              fill: "none",
            }),
          ],
        });
      }
      function g(e) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      function j(e) {
        let { href: r, children: t } = e;
        return (0, n.jsx)("li", {
          children: (0, n.jsx)(d.J.Button, {
            as: l(),
            href: r,
            className: "block py-2",
            children: t,
          }),
        });
      }
      function k(e) {
        return (0, n.jsxs)(d.J, {
          ...e,
          children: [
            (0, n.jsxs)(d.J.Button, {
              className:
                "group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20",
              children: [
                "Menu",
                (0, n.jsx)(p, {
                  className:
                    "ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400",
                }),
              ],
            }),
            (0, n.jsxs)(h.u.Root, {
              children: [
                (0, n.jsx)(h.u.Child, {
                  as: i.Fragment,
                  enter: "duration-150 ease-out",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "duration-150 ease-in",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, n.jsx)(d.J.Overlay, {
                    className:
                      "fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80",
                  }),
                }),
                (0, n.jsx)(h.u.Child, {
                  as: i.Fragment,
                  enter: "duration-150 ease-out",
                  enterFrom: "opacity-0 scale-95",
                  enterTo: "opacity-100 scale-100",
                  leave: "duration-150 ease-in",
                  leaveFrom: "opacity-100 scale-100",
                  leaveTo: "opacity-0 scale-95",
                  children: (0, n.jsxs)(d.J.Panel, {
                    focus: !0,
                    className:
                      "fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-row-reverse items-center justify-between",
                        children: [
                          (0, n.jsx)(d.J.Button, {
                            "aria-label": "Close menu",
                            className: "-m-1 p-1",
                            children: (0, n.jsx)(f, {
                              className:
                                "h-6 w-6 text-zinc-500 dark:text-zinc-400",
                            }),
                          }),
                          (0, n.jsx)("h2", {
                            className:
                              "text-sm font-medium text-zinc-600 dark:text-zinc-400",
                            children: "Navigation",
                          }),
                        ],
                      }),
                      (0, n.jsx)("nav", {
                        className: "mt-6",
                        children: (0, n.jsxs)("ul", {
                          className:
                            "-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300",
                          children: [
                            (0, n.jsx)(j, {
                              href: "/about",
                              children: "About",
                            }),
                            (0, n.jsx)(j, {
                              href: "/articles",
                              children: "Articles",
                            }),
                            (0, n.jsx)(j, {
                              href: "/projects",
                              children: "Projects",
                            }),
                            (0, n.jsx)(j, {
                              href: "/speaking",
                              children: "Speaking",
                            }),
                            (0, n.jsx)(j, { href: "/uses", children: "Uses" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function w(e) {
        let { href: r, children: t } = e,
          i = (0, A.usePathname)() === r;
        return (0, n.jsx)("li", {
          children: (0, n.jsxs)(l(), {
            href: r,
            className: (0, u.Z)(
              "relative block px-3 py-2 transition",
              i
                ? "text-teal-500 dark:text-teal-400"
                : "hover:text-teal-500 dark:hover:text-teal-400"
            ),
            children: [
              t,
              i &&
                (0, n.jsx)("span", {
                  className:
                    "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0",
                }),
            ],
          }),
        });
      }
      function b(e) {
        return (0, n.jsx)("nav", {
          ...e,
          children: (0, n.jsxs)("ul", {
            className:
              "flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10",
            children: [
              (0, n.jsx)(w, { href: "/about", children: "About" }),
              (0, n.jsx)(w, { href: "/articles", children: "Articles" }),
              (0, n.jsx)(w, { href: "/projects", children: "Projects" }),
              (0, n.jsx)(w, { href: "/speaking", children: "Speaking" }),
              (0, n.jsx)(w, { href: "/uses", children: "Uses" }),
            ],
          }),
        });
      }
      function z() {
        let { resolvedTheme: e, setTheme: r } = (0, c.F)(),
          t = "dark" === e ? "light" : "dark",
          [s, a] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            a(!0);
          }, []),
          (0, n.jsxs)("button", {
            type: "button",
            "aria-label": s ? `Switch to ${t} theme` : "Toggle theme",
            className:
              "group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",
            onClick: () => r(t),
            children: [
              (0, n.jsx)(v, {
                className:
                  "h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600",
              }),
              (0, n.jsx)(g, {
                className:
                  "hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500",
              }),
            ],
          })
        );
      }
      function E(e, r, t) {
        return Math.min(Math.max(e, Math.min(r, t)), Math.max(r, t));
      }
      function N(e) {
        let { className: r, ...t } = e;
        return (0, n.jsx)("div", {
          className: (0, u.Z)(
            r,
            "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
          ),
          ...t,
        });
      }
      function y(e) {
        let { large: r = !1, className: t, ...i } = e;
        return (0, n.jsx)(l(), {
          href: "/",
          "aria-label": "Home",
          className: (0, u.Z)(t, "pointer-events-auto"),
          ...i,
          children: (0, n.jsx)(a(), {
            src: m,
            alt: "",
            sizes: r ? "4rem" : "2.25rem",
            className: (0, u.Z)(
              "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
              r ? "h-16 w-16" : "h-9 w-9"
            ),
            priority: !0,
          }),
        });
      }
      function B() {
        let e = "/" === (0, A.usePathname)(),
          r = (0, i.useRef)(null),
          t = (0, i.useRef)(null),
          s = (0, i.useRef)(!0);
        return (
          (0, i.useEffect)(() => {
            var n;
            let i =
              (null === (n = t.current) || void 0 === n
                ? void 0
                : n.offsetTop) ?? 0;
            function a(e, r) {
              document.documentElement.style.setProperty(e, r);
            }
            function o(e) {
              document.documentElement.style.removeProperty(e);
            }
            function l() {
              (function () {
                if (!r.current) return;
                let { top: e, height: t } = r.current.getBoundingClientRect(),
                  n = E(
                    window.scrollY,
                    0,
                    document.body.scrollHeight - window.innerHeight
                  );
                if (
                  (s.current && a("--header-position", "sticky"),
                  a("--content-offset", `${i}px`),
                  s.current || n < i)
                )
                  a("--header-height", `${i + t}px`),
                    a("--header-mb", `${-i}px`);
                else if (e + t < -64) {
                  let e = Math.max(t, n - 64);
                  a("--header-height", `${e}px`),
                    a("--header-mb", `${t - e}px`);
                } else
                  0 === e &&
                    (a("--header-height", `${n + t}px`),
                    a("--header-mb", `${-n}px`));
                0 === e && n > 0 && n >= i
                  ? (a("--header-inner-position", "fixed"),
                    o("--header-top"),
                    o("--avatar-top"))
                  : (o("--header-inner-position"),
                    a("--header-top", "0px"),
                    a("--avatar-top", "0px"));
              })(),
                (function () {
                  if (!e) return;
                  let r = 36 / 64,
                    t = 2 / 16,
                    n = i - window.scrollY,
                    s = (n * (1 - r)) / i + r;
                  s = E(s, 1, r);
                  let o = (n * (0 - t)) / i + t;
                  (o = E(o, 0, t)),
                    a(
                      "--avatar-image-transform",
                      `translate3d(${o}rem, 0, 0) scale(${s})`
                    );
                  let l = 1 / (r / s),
                    A = (-t + o) * l;
                  a(
                    "--avatar-border-transform",
                    `translate3d(${A}rem, 0, 0) scale(${l})`
                  ),
                    a("--avatar-border-opacity", s === r ? "1" : "0");
                })(),
                (s.current = !1);
            }
            return (
              l(),
              window.addEventListener("scroll", l, { passive: !0 }),
              window.addEventListener("resize", l),
              () => {
                window.removeEventListener("scroll", l),
                  window.removeEventListener("resize", l);
              }
            );
          }, [e]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("header", {
                className:
                  "pointer-events-none relative z-50 flex flex-none flex-col",
                style: {
                  height: "var(--header-height)",
                  marginBottom: "var(--header-mb)",
                },
                children: [
                  e &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          ref: t,
                          className:
                            "order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]",
                        }),
                        (0, n.jsx)(x.W2, {
                          className: "top-0 order-last -mb-3 pt-3",
                          style: { position: "var(--header-position)" },
                          children: (0, n.jsx)("div", {
                            className:
                              "top-[var(--avatar-top,theme(spacing.3))] w-full",
                            style: { position: "var(--header-inner-position)" },
                            children: (0, n.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, n.jsx)(N, {
                                  className:
                                    "absolute left-0 top-3 origin-left transition-opacity",
                                  style: {
                                    opacity: "var(--avatar-border-opacity, 0)",
                                    transform: "var(--avatar-border-transform)",
                                  },
                                }),
                                (0, n.jsx)(y, {
                                  large: !0,
                                  className: "block h-16 w-16 origin-left",
                                  style: {
                                    transform: "var(--avatar-image-transform)",
                                  },
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  (0, n.jsx)("div", {
                    ref: r,
                    className: "top-0 z-10 h-16 pt-6",
                    style: { position: "var(--header-position)" },
                    children: (0, n.jsx)(x.W2, {
                      className:
                        "top-[var(--header-top,theme(spacing.6))] w-full",
                      style: { position: "var(--header-inner-position)" },
                      children: (0, n.jsxs)("div", {
                        className: "relative flex gap-4",
                        children: [
                          (0, n.jsx)("div", {
                            className: "flex flex-1",
                            children:
                              !e &&
                              (0, n.jsx)(N, { children: (0, n.jsx)(y, {}) }),
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex flex-1 justify-end md:justify-center",
                            children: [
                              (0, n.jsx)(k, {
                                className: "pointer-events-auto md:hidden",
                              }),
                              (0, n.jsx)(b, {
                                className:
                                  "pointer-events-auto hidden md:block",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "flex justify-end md:flex-1",
                            children: (0, n.jsx)("div", {
                              className: "pointer-events-auto",
                              children: (0, n.jsx)(z, {}),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              e &&
                (0, n.jsx)("div", {
                  className: "flex-none",
                  style: { height: "var(--content-offset)" },
                }),
            ],
          })
        );
      }
    },
    6789: function () {},
  },
  function (e) {
    e.O(0, [250, 749, 2, 971, 938, 744], function () {
      return e((e.s = 2826));
    }),
      (_N_E = e.O());
  },
]);
