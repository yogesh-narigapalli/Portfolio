function hexToRgb(e) {
  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(t, function (e, t, n, i) {
    return t + t + n + n + i + i;
  });
  var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return n
    ? { r: parseInt(n[1], 16), g: parseInt(n[2], 16), b: parseInt(n[3], 16) }
    : null;
}
function clamp(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function isInArray(e, t) {
  return t.indexOf(e) > -1;
}
function FixHeader() {
  $(window).scrollTop() > 100
    ? ($("#navigation").removeClass("navbar-dark"),
      $("#navigation").addClass("navbar-light border-bottom border-grey"))
    : ($("#navigation").removeClass(
        "navbar-light border-bottom border-success"
      ),
      $("#navigation").addClass("navbar-dark"));
}
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t, n) {
    var i,
      r = (t = t || ae).createElement("script");
    if (((r.text = e), n)) for (i in _e) n[i] && (r[i] = n[i]);
    t.head.appendChild(r).parentNode.removeChild(r);
  }
  function i(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? de[pe.call(e)] || "object"
      : typeof e;
  }
  function r(e) {
    var t = !!e && "length" in e && e.length,
      n = i(e);
    return (
      !ye(e) &&
      !be(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function a(e, t, n) {
    return ye(t)
      ? we.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? we.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? we.grep(e, function (e) {
          return fe.call(t, e) > -1 !== n;
        })
      : we.filter(t, e, n);
  }
  function s(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function l(e) {
    var t = {};
    return (
      we.each(e.match(Oe) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function c(e) {
    return e;
  }
  function u(e) {
    throw e;
  }
  function f(e, t, n, i) {
    var r;
    try {
      e && ye((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && ye((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function d() {
    ae.removeEventListener("DOMContentLoaded", d),
      e.removeEventListener("load", d),
      we.ready();
  }
  function p(e, t) {
    return t.toUpperCase();
  }
  function h(e) {
    return e.replace(Re, "ms-").replace(He, p);
  }
  function m() {
    this.expando = we.expando + m.uid++;
  }
  function v(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : We.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function g(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(Be, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = v(n);
        } catch (e) {}
        Fe.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function y(e, t, n, i) {
    var r,
      o,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return we.css(e, t, "");
          },
      l = s(),
      c = (n && n[3]) || (we.cssNumber[t] ? "" : "px"),
      u = (we.cssNumber[t] || ("px" !== c && +l)) && ze.exec(we.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; a--; )
        we.style(e, t, u + c),
          (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
          (u /= o);
      (u *= 2), we.style(e, t, u + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = r))),
      r
    );
  }
  function b(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      r = Qe[i];
    return (
      r ||
      ((t = n.body.appendChild(n.createElement(i))),
      (r = we.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === r && (r = "block"),
      (Qe[i] = r),
      r)
    );
  }
  function _(e, t) {
    for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
      (i = e[o]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((r[o] = qe.get(i, "display") || null),
              r[o] || (i.style.display = "")),
            "" === i.style.display && Ve(i) && (r[o] = b(i)))
          : "none" !== n && ((r[o] = "none"), qe.set(i, "display", n)));
    for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
    return e;
  }
  function w(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && o(e, t)) ? we.merge([e], n) : n
    );
  }
  function x(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"));
  }
  function E(e, t, n, r, o) {
    for (
      var a,
        s,
        l,
        c,
        u,
        f,
        d = t.createDocumentFragment(),
        p = [],
        h = 0,
        m = e.length;
      h < m;
      h++
    )
      if ((a = e[h]) || 0 === a)
        if ("object" === i(a)) we.merge(p, a.nodeType ? [a] : a);
        else if (Ze.test(a)) {
          for (
            s = s || d.appendChild(t.createElement("div")),
              l = (Ge.exec(a) || ["", ""])[1].toLowerCase(),
              c = Je[l] || Je._default,
              s.innerHTML = c[1] + we.htmlPrefilter(a) + c[2],
              f = c[0];
            f--;

          )
            s = s.lastChild;
          we.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
        } else p.push(t.createTextNode(a));
    for (d.textContent = "", h = 0; (a = p[h++]); )
      if (r && we.inArray(a, r) > -1) o && o.push(a);
      else if (
        ((u = we.contains(a.ownerDocument, a)),
        (s = w(d.appendChild(a), "script")),
        u && x(s),
        n)
      )
        for (f = 0; (a = s[f++]); ) Xe.test(a.type || "") && n.push(a);
    return d;
  }
  function T() {
    return !0;
  }
  function C() {
    return !1;
  }
  function A() {
    try {
      return ae.activeElement;
    } catch (e) {}
  }
  function S(e, t, n, i, r, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((i = i || n), (n = void 0));
      for (s in t) S(e, s, n, i, t[s], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = C;
    else if (!r) return e;
    return (
      1 === o &&
        ((a = r),
        ((r = function (e) {
          return we().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = we.guid++))),
      e.each(function () {
        we.event.add(this, t, r, i, n);
      })
    );
  }
  function D(e, t) {
    return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? we(e).children("tbody")[0] || e
      : e;
  }
  function k(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function I(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function N(e, t) {
    var n, i, r, o, a, s, l, c;
    if (1 === t.nodeType) {
      if (
        qe.hasData(e) &&
        ((o = qe.access(e)), (a = qe.set(t, o)), (c = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (r in c)
          for (n = 0, i = c[r].length; n < i; n++) we.event.add(t, r, c[r][n]);
      }
      Fe.hasData(e) &&
        ((s = Fe.access(e)), (l = we.extend({}, s)), Fe.set(t, l));
    }
  }
  function O(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ye.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function j(e, t, i, r) {
    t = ce.apply([], t);
    var o,
      a,
      s,
      l,
      c,
      u,
      f = 0,
      d = e.length,
      p = d - 1,
      h = t[0],
      m = ye(h);
    if (m || (d > 1 && "string" == typeof h && !ge.checkClone && at.test(h)))
      return e.each(function (n) {
        var o = e.eq(n);
        m && (t[0] = h.call(this, n, o.html())), j(o, t, i, r);
      });
    if (
      d &&
      ((o = E(t, e[0].ownerDocument, !1, e, r)),
      (a = o.firstChild),
      1 === o.childNodes.length && (o = a),
      a || r)
    ) {
      for (l = (s = we.map(w(o, "script"), k)).length; f < d; f++)
        (c = o),
          f !== p &&
            ((c = we.clone(c, !0, !0)), l && we.merge(s, w(c, "script"))),
          i.call(e[f], c, f);
      if (l)
        for (u = s[s.length - 1].ownerDocument, we.map(s, I), f = 0; f < l; f++)
          (c = s[f]),
            Xe.test(c.type || "") &&
              !qe.access(c, "globalEval") &&
              we.contains(u, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? we._evalUrl && we._evalUrl(c.src)
                : n(c.textContent.replace(st, ""), u, c));
    }
    return e;
  }
  function L(e, t, n) {
    for (var i, r = t ? we.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || we.cleanData(w(i)),
        i.parentNode &&
          (n && we.contains(i.ownerDocument, i) && x(w(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  function P(e, t, n) {
    var i,
      r,
      o,
      a,
      s = e.style;
    return (
      (n = n || ct(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          we.contains(e.ownerDocument, e) ||
          (a = we.style(e, t)),
        !ge.pixelBoxStyles() &&
          lt.test(a) &&
          ut.test(t) &&
          ((i = s.width),
          (r = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = r),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function R(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function H(e) {
    if (e in vt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = mt.length; n--; )
      if ((e = mt[n] + t) in vt) return e;
  }
  function M(e) {
    var t = we.cssProps[e];
    return t || (t = we.cssProps[e] = H(e) || e), t;
  }
  function q(e, t, n) {
    var i = ze.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function F(e, t, n, i, r, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += we.css(e, n + $e[a], !0, r)),
        i
          ? ("content" === n && (l -= we.css(e, "padding" + $e[a], !0, r)),
            "margin" !== n &&
              (l -= we.css(e, "border" + $e[a] + "Width", !0, r)))
          : ((l += we.css(e, "padding" + $e[a], !0, r)),
            "padding" !== n
              ? (l += we.css(e, "border" + $e[a] + "Width", !0, r))
              : (s += we.css(e, "border" + $e[a] + "Width", !0, r)));
    return (
      !i &&
        o >= 0 &&
        (l += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5
          )
        )),
      l
    );
  }
  function W(e, t, n) {
    var i = ct(e),
      r = P(e, t, i),
      o = "border-box" === we.css(e, "boxSizing", !1, i),
      a = o;
    if (lt.test(r)) {
      if (!n) return r;
      r = "auto";
    }
    return (
      (a = a && (ge.boxSizingReliable() || r === e.style[t])),
      ("auto" === r ||
        (!parseFloat(r) && "inline" === we.css(e, "display", !1, i))) &&
        ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (r = parseFloat(r) || 0) +
        F(e, t, n || (o ? "border" : "content"), a, i, r) +
        "px"
    );
  }
  function B(e, t, n, i, r) {
    return new B.prototype.init(e, t, n, i, r);
  }
  function U() {
    yt &&
      (!1 === ae.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(U)
        : e.setTimeout(U, we.fx.interval),
      we.fx.tick());
  }
  function z() {
    return (
      e.setTimeout(function () {
        gt = void 0;
      }),
      (gt = Date.now())
    );
  }
  function $(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = $e[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function V(e, t, n) {
    for (
      var i,
        r = (Y.tweeners[t] || []).concat(Y.tweeners["*"]),
        o = 0,
        a = r.length;
      o < a;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function K(e, t, n) {
    var i,
      r,
      o,
      a,
      s,
      l,
      c,
      u,
      f = "width" in t || "height" in t,
      d = this,
      p = {},
      h = e.style,
      m = e.nodeType && Ve(e),
      v = qe.get(e, "fxshow");
    n.queue ||
      (null == (a = we._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      d.always(function () {
        d.always(function () {
          a.unqueued--, we.queue(e, "fx").length || a.empty.fire();
        });
      }));
    for (i in t)
      if (((r = t[i]), bt.test(r))) {
        if (
          (delete t[i], (o = o || "toggle" === r), r === (m ? "hide" : "show"))
        ) {
          if ("show" !== r || !v || void 0 === v[i]) continue;
          m = !0;
        }
        p[i] = (v && v[i]) || we.style(e, i);
      }
    if ((l = !we.isEmptyObject(t)) || !we.isEmptyObject(p)) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (c = v && v.display) && (c = qe.get(e, "display")),
        "none" === (u = we.css(e, "display")) &&
          (c
            ? (u = c)
            : (_([e], !0),
              (c = e.style.display || c),
              (u = we.css(e, "display")),
              _([e]))),
        ("inline" === u || ("inline-block" === u && null != c)) &&
          "none" === we.css(e, "float") &&
          (l ||
            (d.done(function () {
              h.display = c;
            }),
            null == c && ((u = h.display), (c = "none" === u ? "" : u))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          d.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (l = !1);
      for (i in p)
        l ||
          (v
            ? "hidden" in v && (m = v.hidden)
            : (v = qe.access(e, "fxshow", { display: c })),
          o && (v.hidden = !m),
          m && _([e], !0),
          d.done(function () {
            m || _([e]), qe.remove(e, "fxshow");
            for (i in p) we.style(e, i, p[i]);
          })),
          (l = V(m ? v[i] : 0, i, d)),
          i in v || ((v[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
    }
  }
  function Q(e, t) {
    var n, i, r, o, a;
    for (n in e)
      if (
        ((i = h(n)),
        (r = t[i]),
        (o = e[n]),
        Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
        n !== i && ((e[i] = o), delete e[n]),
        (a = we.cssHooks[i]) && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[i];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
      } else t[i] = r;
  }
  function Y(e, t, n) {
    var i,
      r,
      o = 0,
      a = Y.prefilters.length,
      s = we.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = gt || z(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            o = 0,
            a = c.tweens.length;
          o < a;
          o++
        )
          c.tweens[o].run(i);
        return (
          s.notifyWith(e, [c, i, n]),
          i < 1 && a
            ? n
            : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        );
      },
      c = s.promise({
        elem: e,
        props: we.extend({}, t),
        opts: we.extend(
          !0,
          { specialEasing: {}, easing: we.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: gt || z(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = we.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
              : s.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (Q(u, c.opts.specialEasing); o < a; o++)
      if ((i = Y.prefilters[o].call(c, e, u, c.opts)))
        return (
          ye(i.stop) &&
            (we._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      we.map(u, V, c),
      ye(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      we.fx.timer(we.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  function G(e) {
    return (e.match(Oe) || []).join(" ");
  }
  function X(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function J(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(Oe) || [] : [];
  }
  function Z(e, t, n, r) {
    var o;
    if (Array.isArray(t))
      we.each(t, function (t, i) {
        n || Nt.test(e)
          ? r(e, i)
          : Z(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== i(t)) r(e, t);
    else for (o in t) Z(e + "[" + o + "]", t[o], n, r);
  }
  function ee(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(Oe) || [];
      if (ye(n))
        for (; (i = o[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function te(e, t, n, i) {
    function r(s) {
      var l;
      return (
        (o[s] = !0),
        we.each(e[s] || [], function (e, s) {
          var c = s(t, n, i);
          return "string" != typeof c || a || o[c]
            ? a
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), r(c), !1);
        }),
        l
      );
    }
    var o = {},
      a = e === Ut;
    return r(t.dataTypes[0]) || (!o["*"] && r("*"));
  }
  function ne(e, t) {
    var n,
      i,
      r = we.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && we.extend(!0, e, i), e;
  }
  function ie(e, t, n) {
    for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (r in s)
        if (s[r] && s[r].test(i)) {
          l.unshift(r);
          break;
        }
    if (l[0] in n) o = l[0];
    else {
      for (r in n) {
        if (!l[0] || e.converters[r + " " + l[0]]) {
          o = r;
          break;
        }
        a || (a = r);
      }
      o = o || a;
    }
    if (o) return o !== l[0] && l.unshift(o), n[o];
  }
  function re(e, t, n, i) {
    var r,
      o,
      a,
      s,
      l,
      c = {},
      u = e.dataTypes.slice();
    if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = u.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = o),
        (o = u.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (!(a = c[l + " " + o] || c["* " + o]))
            for (r in c)
              if (
                (s = r.split(" "))[1] === o &&
                (a = c[l + " " + s[0]] || c["* " + s[0]])
              ) {
                !0 === a
                  ? (a = c[r])
                  : !0 !== c[r] && ((o = s[0]), u.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + l + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  var oe = [],
    ae = e.document,
    se = Object.getPrototypeOf,
    le = oe.slice,
    ce = oe.concat,
    ue = oe.push,
    fe = oe.indexOf,
    de = {},
    pe = de.toString,
    he = de.hasOwnProperty,
    me = he.toString,
    ve = me.call(Object),
    ge = {},
    ye = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    be = function (e) {
      return null != e && e === e.window;
    },
    _e = { type: !0, src: !0, noModule: !0 },
    we = function (e, t) {
      return new we.fn.init(e, t);
    },
    xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (we.fn = we.prototype = {
    jquery: "3.3.1",
    constructor: we,
    length: 0,
    toArray: function () {
      return le.call(this);
    },
    get: function (e) {
      return null == e
        ? le.call(this)
        : e < 0
        ? this[e + this.length]
        : this[e];
    },
    pushStack: function (e) {
      var t = we.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return we.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        we.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(le.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: ue,
    sort: oe.sort,
    splice: oe.splice,
  }),
    (we.extend = we.fn.extend = function () {
      var e,
        t,
        n,
        i,
        r,
        o,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
          "object" == typeof a || ye(a) || (a = {}),
          s === l && ((a = this), s--);
        s < l;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (n = a[t]),
              a !== (i = e[t]) &&
                (c && i && (we.isPlainObject(i) || (r = Array.isArray(i)))
                  ? (r
                      ? ((r = !1), (o = n && Array.isArray(n) ? n : []))
                      : (o = n && we.isPlainObject(n) ? n : {}),
                    (a[t] = we.extend(c, o, i)))
                  : void 0 !== i && (a[t] = i));
      return a;
    }),
    we.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== pe.call(e) ||
          ((t = se(e)) &&
            ("function" !=
              typeof (n = he.call(t, "constructor") && t.constructor) ||
              me.call(n) !== ve))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        n(e);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (r(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(xe, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (r(Object(e))
              ? we.merge(n, "string" == typeof e ? [e] : e)
              : ue.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : fe.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
          !t(e[r], r) !== a && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          a = 0,
          s = [];
        if (r(e))
          for (i = e.length; a < i; a++)
            null != (o = t(e[a], a, n)) && s.push(o);
        else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
        return ce.apply([], s);
      },
      guid: 1,
      support: ge,
    }),
    "function" == typeof Symbol &&
      (we.fn[Symbol.iterator] = oe[Symbol.iterator]),
    we.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        de["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var Ee = (function (e) {
    function t(e, t, n, i) {
      var r,
        o,
        a,
        s,
        l,
        u,
        d,
        p = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : q) !== N && I(t), (t = t || N), j)
      ) {
        if (11 !== h && (l = me.exec(e)))
          if ((r = l[1])) {
            if (9 === h) {
              if (!(a = t.getElementById(r))) return n;
              if (a.id === r) return n.push(a), n;
            } else if (p && (a = p.getElementById(r)) && H(t, a) && a.id === r)
              return n.push(a), n;
          } else {
            if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
            if (
              (r = l[3]) &&
              _.getElementsByClassName &&
              t.getElementsByClassName
            )
              return G.apply(n, t.getElementsByClassName(r)), n;
          }
        if (_.qsa && !z[e + " "] && (!L || !L.test(e))) {
          if (1 !== h) (p = t), (d = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(be, _e))
                : t.setAttribute("id", (s = M)),
                o = (u = T(e)).length;
              o--;

            )
              u[o] = "#" + s + " " + f(u[o]);
            (d = u.join(",")), (p = (ve.test(e) && c(t.parentNode)) || t);
          }
          if (d)
            try {
              return G.apply(n, p.querySelectorAll(d)), n;
            } catch (e) {
            } finally {
              s === M && t.removeAttribute("id");
            }
        }
      }
      return A(e.replace(oe, "$1"), t, n, i);
    }
    function n() {
      function e(n, i) {
        return (
          t.push(n + " ") > w.cacheLength && delete e[t.shift()],
          (e[n + " "] = i)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[M] = !0), e;
    }
    function r(e) {
      var t = N.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = t;
    }
    function a(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && xe(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function l(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var r, o = e([], n.length, t), a = o.length; a--; )
              n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function c(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function u() {}
    function f(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function d(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        a = n && "parentNode" === o,
        s = W++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              f,
              d = [F, s];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[M] || (t[M] = {})),
                    (u = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[o]) && c[0] === F && c[1] === s)
                      return (d[2] = c[2]);
                    if (((u[o] = d), (d[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function p(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function h(e, n, i) {
      for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
      return i;
    }
    function m(e, t, n, i, r) {
      for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
        (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), c && t.push(s)));
      return a;
    }
    function v(e, t, n, r, o, a) {
      return (
        r && !r[M] && (r = v(r)),
        o && !o[M] && (o = v(o, a)),
        i(function (i, a, s, l) {
          var c,
            u,
            f,
            d = [],
            p = [],
            v = a.length,
            g = i || h(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!i && t) ? g : m(g, d, e, s, l),
            b = n ? (o || (i ? e : v || r) ? [] : a) : y;
          if ((n && n(y, b, s, l), r))
            for (c = m(b, p), r(c, [], s, l), u = c.length; u--; )
              (f = c[u]) && (b[p[u]] = !(y[p[u]] = f));
          if (i) {
            if (o || e) {
              if (o) {
                for (c = [], u = b.length; u--; )
                  (f = b[u]) && c.push((y[u] = f));
                o(null, (b = []), c, l);
              }
              for (u = b.length; u--; )
                (f = b[u]) &&
                  (c = o ? J(i, f) : d[u]) > -1 &&
                  (i[c] = !(a[c] = f));
            }
          } else (b = m(b === a ? b.splice(v, b.length) : b)), o ? o(null, a, b, l) : G.apply(a, b);
        })
      );
    }
    function g(e) {
      for (
        var t,
          n,
          i,
          r = e.length,
          o = w.relative[e[0].type],
          a = o || w.relative[" "],
          s = o ? 1 : 0,
          l = d(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          c = d(
            function (e) {
              return J(t, e) > -1;
            },
            a,
            !0
          ),
          u = [
            function (e, n, i) {
              var r =
                (!o && (i || n !== S)) ||
                ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
              return (t = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((n = w.relative[e[s].type])) u = [d(p(u), n)];
        else {
          if ((n = w.filter[e[s].type].apply(null, e[s].matches))[M]) {
            for (i = ++s; i < r && !w.relative[e[i].type]; i++);
            return v(
              s > 1 && p(u),
              s > 1 &&
                f(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(oe, "$1"),
              n,
              s < i && g(e.slice(s, i)),
              i < r && g((e = e.slice(i))),
              i < r && f(e)
            );
          }
          u.push(n);
        }
      return p(u);
    }
    function y(e, n) {
      var r = n.length > 0,
        o = e.length > 0,
        a = function (i, a, s, l, c) {
          var u,
            f,
            d,
            p = 0,
            h = "0",
            v = i && [],
            g = [],
            y = S,
            b = i || (o && w.find.TAG("*", c)),
            _ = (F += null == y ? 1 : Math.random() || 0.1),
            x = b.length;
          for (
            c && (S = a === N || a || c);
            h !== x && null != (u = b[h]);
            h++
          ) {
            if (o && u) {
              for (
                f = 0, a || u.ownerDocument === N || (I(u), (s = !j));
                (d = e[f++]);

              )
                if (d(u, a || N, s)) {
                  l.push(u);
                  break;
                }
              c && (F = _);
            }
            r && ((u = !d && u) && p--, i && v.push(u));
          }
          if (((p += h), r && h !== p)) {
            for (f = 0; (d = n[f++]); ) d(v, g, a, s);
            if (i) {
              if (p > 0) for (; h--; ) v[h] || g[h] || (g[h] = Q.call(l));
              g = m(g);
            }
            G.apply(l, g),
              c && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(l);
          }
          return c && ((F = _), (S = y)), v;
        };
      return r ? i(a) : a;
    }
    var b,
      _,
      w,
      x,
      E,
      T,
      C,
      A,
      S,
      D,
      k,
      I,
      N,
      O,
      j,
      L,
      P,
      R,
      H,
      M = "sizzle" + 1 * new Date(),
      q = e.document,
      F = 0,
      W = 0,
      B = n(),
      U = n(),
      z = n(),
      $ = function (e, t) {
        return e === t && (k = !0), 0;
      },
      V = {}.hasOwnProperty,
      K = [],
      Q = K.pop,
      Y = K.push,
      G = K.push,
      X = K.slice,
      J = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      Z =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]",
      te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ne =
        "\\[" +
        ee +
        "*(" +
        te +
        ")(?:" +
        ee +
        "*([*^$|!~]?=)" +
        ee +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        te +
        "))|)" +
        ee +
        "*\\]",
      ie =
        ":(" +
        te +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ne +
        ")*)|.*)\\)|)",
      re = new RegExp(ee + "+", "g"),
      oe = new RegExp(
        "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
        "g"
      ),
      ae = new RegExp("^" + ee + "*," + ee + "*"),
      se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
      ce = new RegExp(ie),
      ue = new RegExp("^" + te + "$"),
      fe = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te + "|[*])"),
        ATTR: new RegExp("^" + ne),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ee +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ee +
            "*(?:([+-]|)" +
            ee +
            "*(\\d+)|))" +
            ee +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + Z + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ee +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ee +
            "*((?:-\\d)?\\d*)" +
            ee +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      de = /^(?:input|select|textarea|button)$/i,
      pe = /^h\d$/i,
      he = /^[^{]+\{\s*\[native \w/,
      me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /[+~]/,
      ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
      ye = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      _e = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      we = function () {
        I();
      },
      xe = d(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((K = X.call(q.childNodes)), q.childNodes),
        K[q.childNodes.length].nodeType;
    } catch (e) {
      G = {
        apply: K.length
          ? function (e, t) {
              Y.apply(e, X.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    (_ = t.support = {}),
      (E = t.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
      (I = t.setDocument = function (e) {
        var t,
          n,
          i = e ? e.ownerDocument || e : q;
        return i !== N && 9 === i.nodeType && i.documentElement
          ? ((N = i),
            (O = N.documentElement),
            (j = !E(N)),
            q !== N &&
              (n = N.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", we, !1)
                : n.attachEvent && n.attachEvent("onunload", we)),
            (_.attributes = r(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (_.getElementsByTagName = r(function (e) {
              return (
                e.appendChild(N.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (_.getElementsByClassName = he.test(N.getElementsByClassName)),
            (_.getById = r(function (e) {
              return (
                (O.appendChild(e).id = M),
                !N.getElementsByName || !N.getElementsByName(M).length
              );
            })),
            _.getById
              ? ((w.filter.ID = function (e) {
                  var t = e.replace(ge, ye);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (w.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && j) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((w.filter.ID = function (e) {
                  var t = e.replace(ge, ye);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (w.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && j) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (w.find.TAG = _.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : _.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (w.find.CLASS =
              _.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && j)
                  return t.getElementsByClassName(e);
              }),
            (P = []),
            (L = []),
            (_.qsa = he.test(N.querySelectorAll)) &&
              (r(function (e) {
                (O.appendChild(e).innerHTML =
                  "<a id='" +
                  M +
                  "'></a><select id='" +
                  M +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    L.push("[*^$]=" + ee + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    L.push("\\[" + ee + "*(?:value|" + Z + ")"),
                  e.querySelectorAll("[id~=" + M + "-]").length || L.push("~="),
                  e.querySelectorAll(":checked").length || L.push(":checked"),
                  e.querySelectorAll("a#" + M + "+*").length ||
                    L.push(".#.+[+~]");
              }),
              r(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    L.push("name" + ee + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    L.push(":enabled", ":disabled"),
                  (O.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    L.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  L.push(",.*:");
              })),
            (_.matchesSelector = he.test(
              (R =
                O.matches ||
                O.webkitMatchesSelector ||
                O.mozMatchesSelector ||
                O.oMatchesSelector ||
                O.msMatchesSelector)
            )) &&
              r(function (e) {
                (_.disconnectedMatch = R.call(e, "*")),
                  R.call(e, "[s!='']:x"),
                  P.push("!=", ie);
              }),
            (L = L.length && new RegExp(L.join("|"))),
            (P = P.length && new RegExp(P.join("|"))),
            (t = he.test(O.compareDocumentPosition)),
            (H =
              t || he.test(O.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            ($ = t
              ? function (e, t) {
                  if (e === t) return (k = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!_.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === N || (e.ownerDocument === q && H(q, e))
                        ? -1
                        : t === N || (t.ownerDocument === q && H(q, t))
                        ? 1
                        : D
                        ? J(D, e) - J(D, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (k = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                  if (!r || !o)
                    return e === N
                      ? -1
                      : t === N
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : D
                      ? J(D, e) - J(D, t)
                      : 0;
                  if (r === o) return a(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) l.unshift(n);
                  for (; s[i] === l[i]; ) i++;
                  return i
                    ? a(s[i], l[i])
                    : s[i] === q
                    ? -1
                    : l[i] === q
                    ? 1
                    : 0;
                }),
            N)
          : N;
      }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== N && I(e),
          (n = n.replace(le, "='$1']")),
          _.matchesSelector &&
            j &&
            !z[n + " "] &&
            (!P || !P.test(n)) &&
            (!L || !L.test(n)))
        )
          try {
            var i = R.call(e, n);
            if (
              i ||
              _.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (e) {}
        return t(n, N, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== N && I(e), H(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== N && I(e);
        var n = w.attrHandle[t.toLowerCase()],
          i = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
        return void 0 !== i
          ? i
          : _.attributes || !j
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (t.escape = function (e) {
        return (e + "").replace(be, _e);
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          r = 0;
        if (
          ((k = !_.detectDuplicates),
          (D = !_.sortStable && e.slice(0)),
          e.sort($),
          k)
        ) {
          for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (D = null), e;
      }),
      (x = t.getText = function (e) {
        var t,
          n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += x(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += x(t);
        return n;
      }),
      ((w = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: fe,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(ge, ye)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ye)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || t.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && t.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return fe.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    ce.test(n) &&
                    (t = T(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(ge, ye).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = B[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                B(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, n, i) {
            return function (r) {
              var o = t.attr(r, e);
              return null == o
                ? "!=" === n
                : !n ||
                    ((o += ""),
                    "=" === n
                      ? o === i
                      : "!=" === n
                      ? o !== i
                      : "^=" === n
                      ? i && 0 === o.indexOf(i)
                      : "*=" === n
                      ? i && o.indexOf(i) > -1
                      : "$=" === n
                      ? i && o.slice(-i.length) === i
                      : "~=" === n
                      ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1
                      : "|=" === n &&
                        (o === i || o.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    f,
                    d,
                    p,
                    h,
                    m = o !== a ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    g = s && t.nodeName.toLowerCase(),
                    y = !l && !s,
                    b = !1;
                  if (v) {
                    if (o) {
                      for (; m; ) {
                        for (d = t; (d = d[m]); )
                          if (
                            s
                              ? d.nodeName.toLowerCase() === g
                              : 1 === d.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                      for (
                        b =
                          (p =
                            (c =
                              (u =
                                (f = (d = v)[M] || (d[M] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === F &&
                            c[1]) && c[2],
                          d = p && v.childNodes[p];
                        (d = (++p && d && d[m]) || (b = p = 0) || h.pop());

                      )
                        if (1 === d.nodeType && ++b && d === t) {
                          u[e] = [F, p, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = p =
                          (c =
                            (u =
                              (f = (d = t)[M] || (d[M] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === F && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (d = (++p && d && d[m]) || (b = p = 0) || h.pop()) &&
                        ((s
                          ? d.nodeName.toLowerCase() !== g
                          : 1 !== d.nodeType) ||
                          !++b ||
                          (y &&
                            ((u =
                              (f = d[M] || (d[M] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] = [F, b]),
                          d !== t));

                      );
                    return (b -= r) === i || (b % i == 0 && b / i >= 0);
                  }
                };
          },
          PSEUDO: function (e, n) {
            var r,
              o =
                w.pseudos[e] ||
                w.setFilters[e.toLowerCase()] ||
                t.error("unsupported pseudo: " + e);
            return o[M]
              ? o(n)
              : o.length > 1
              ? ((r = [e, e, "", n]),
                w.setFilters.hasOwnProperty(e.toLowerCase())
                  ? i(function (e, t) {
                      for (var i, r = o(e, n), a = r.length; a--; )
                        e[(i = J(e, r[a]))] = !(t[i] = r[a]);
                    })
                  : function (e) {
                      return o(e, 0, r);
                    })
              : o;
          },
        },
        pseudos: {
          not: i(function (e) {
            var t = [],
              n = [],
              r = C(e.replace(oe, "$1"));
            return r[M]
              ? i(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: i(function (e) {
            return function (n) {
              return t(e, n).length > 0;
            };
          }),
          contains: i(function (e) {
            return (
              (e = e.replace(ge, ye)),
              function (t) {
                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: i(function (e) {
            return (
              ue.test(e || "") || t.error("unsupported lang: " + e),
              (e = e.replace(ge, ye).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = j
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === O;
          },
          focus: function (e) {
            return (
              e === N.activeElement &&
              (!N.hasFocus || N.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: s(!1),
          disabled: s(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !w.pseudos.empty(e);
          },
          header: function (e) {
            return pe.test(e.nodeName);
          },
          input: function (e) {
            return de.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: l(function () {
            return [0];
          }),
          last: l(function (e, t) {
            return [t - 1];
          }),
          eq: l(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: l(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: l(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: l(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: l(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = w.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      w.pseudos[b] = (function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      })(b);
    for (b in { submit: !0, reset: !0 })
      w.pseudos[b] = (function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      })(b);
    return (
      (u.prototype = w.filters = w.pseudos),
      (w.setFilters = new u()),
      (T = t.tokenize = function (e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          c,
          u = U[e + " "];
        if (u) return n ? 0 : u.slice(0);
        for (s = e, l = [], c = w.preFilter; s; ) {
          (i && !(r = ae.exec(s))) ||
            (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
            (i = !1),
            (r = se.exec(s)) &&
              ((i = r.shift()),
              o.push({ value: i, type: r[0].replace(oe, " ") }),
              (s = s.slice(i.length)));
          for (a in w.filter)
            !(r = fe[a].exec(s)) ||
              (c[a] && !(r = c[a](r))) ||
              ((i = r.shift()),
              o.push({ value: i, type: a, matches: r }),
              (s = s.slice(i.length)));
          if (!i) break;
        }
        return n ? s.length : s ? t.error(e) : U(e, l).slice(0);
      }),
      (C = t.compile = function (e, t) {
        var n,
          i = [],
          r = [],
          o = z[e + " "];
        if (!o) {
          for (t || (t = T(e)), n = t.length; n--; )
            (o = g(t[n]))[M] ? i.push(o) : r.push(o);
          (o = z(e, y(r, i))).selector = e;
        }
        return o;
      }),
      (A = t.select = function (e, t, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u = "function" == typeof e && e,
          d = !i && T((e = u.selector || e));
        if (((n = n || []), 1 === d.length)) {
          if (
            (o = d[0] = d[0].slice(0)).length > 2 &&
            "ID" === (a = o[0]).type &&
            9 === t.nodeType &&
            j &&
            w.relative[o[1].type]
          ) {
            if (!(t = (w.find.ID(a.matches[0].replace(ge, ye), t) || [])[0]))
              return n;
            u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
          }
          for (
            r = fe.needsContext.test(e) ? 0 : o.length;
            r-- && ((a = o[r]), !w.relative[(s = a.type)]);

          )
            if (
              (l = w.find[s]) &&
              (i = l(
                a.matches[0].replace(ge, ye),
                (ve.test(o[0].type) && c(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(r, 1), !(e = i.length && f(o))))
                return G.apply(n, i), n;
              break;
            }
        }
        return (
          (u || C(e, d))(
            i,
            t,
            !j,
            n,
            !t || (ve.test(e) && c(t.parentNode)) || t
          ),
          n
        );
      }),
      (_.sortStable = M.split("").sort($).join("") === M),
      (_.detectDuplicates = !!k),
      I(),
      (_.sortDetached = r(function (e) {
        return 1 & e.compareDocumentPosition(N.createElement("fieldset"));
      })),
      r(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (_.attributes &&
        r(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      r(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(Z, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      t
    );
  })(e);
  (we.find = Ee),
    (we.expr = Ee.selectors),
    (we.expr[":"] = we.expr.pseudos),
    (we.uniqueSort = we.unique = Ee.uniqueSort),
    (we.text = Ee.getText),
    (we.isXMLDoc = Ee.isXML),
    (we.contains = Ee.contains),
    (we.escapeSelector = Ee.escape);
  var Te = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && we(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    Ce = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    Ae = we.expr.match.needsContext,
    Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (we.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? we.find.matchesSelector(i, e)
          ? [i]
          : []
        : we.find.matches(
            e,
            we.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    we.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            we(e).filter(function () {
              for (t = 0; t < i; t++) if (we.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) we.find(e, r[t], n);
        return i > 1 ? we.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(a(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(a(this, e || [], !0));
      },
      is: function (e) {
        return !!a(
          this,
          "string" == typeof e && Ae.test(e) ? we(e) : e || [],
          !1
        ).length;
      },
    });
  var De,
    ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((we.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || De), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : ke.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof we ? t[0] : t),
          we.merge(
            this,
            we.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)
          ),
          Se.test(i[1]) && we.isPlainObject(t))
        )
          for (i in t) ye(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = ae.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : ye(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(we)
      : we.makeArray(e, this);
  }).prototype = we.fn),
    (De = we(ae));
  var Ie = /^(?:parents|prev(?:Until|All))/,
    Ne = { children: !0, contents: !0, next: !0, prev: !0 };
  we.fn.extend({
    has: function (e) {
      var t = we(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (we.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        a = "string" != typeof e && we(e);
      if (!Ae.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && we.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? we.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? fe.call(we(e), this[0])
          : fe.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    we.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return Te(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return Te(e, "parentNode", n);
        },
        next: function (e) {
          return s(e, "nextSibling");
        },
        prev: function (e) {
          return s(e, "previousSibling");
        },
        nextAll: function (e) {
          return Te(e, "nextSibling");
        },
        prevAll: function (e) {
          return Te(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return Te(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return Te(e, "previousSibling", n);
        },
        siblings: function (e) {
          return Ce((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Ce(e.firstChild);
        },
        contents: function (e) {
          return o(e, "iframe")
            ? e.contentDocument
            : (o(e, "template") && (e = e.content || e),
              we.merge([], e.childNodes));
        },
      },
      function (e, t) {
        we.fn[e] = function (n, i) {
          var r = we.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = we.filter(i, r)),
            this.length > 1 &&
              (Ne[e] || we.uniqueSort(r), Ie.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var Oe = /[^\x20\t\r\n\f]+/g;
  (we.Callbacks = function (e) {
    e = "string" == typeof e ? l(e) : we.extend({}, e);
    var t,
      n,
      r,
      o,
      a = [],
      s = [],
      c = -1,
      u = function () {
        for (o = o || e.once, r = t = !0; s.length; c = -1)
          for (n = s.shift(); ++c < a.length; )
            !1 === a[c].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((c = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (a = n ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (n && !t && ((c = a.length - 1), s.push(n)),
              (function t(n) {
                we.each(n, function (n, r) {
                  ye(r)
                    ? (e.unique && f.has(r)) || a.push(r)
                    : r && r.length && "string" !== i(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            we.each(arguments, function (e, t) {
              for (var n; (n = we.inArray(t, a, n)) > -1; )
                a.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? we.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (o = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (o = s = []), n || t || (a = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return (
            o ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return f;
  }),
    we.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              we.Callbacks("memory"),
              we.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              we.Callbacks("once memory"),
              we.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              we.Callbacks("once memory"),
              we.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return we
                .Deferred(function (t) {
                  we.each(n, function (n, i) {
                    var r = ye(e[i[4]]) && e[i[4]];
                    o[i[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && ye(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, r) {
              function o(t, n, i, r) {
                return function () {
                  var s = this,
                    l = arguments,
                    f = function () {
                      var e, f;
                      if (!(t < a)) {
                        if ((e = i.apply(s, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (f =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          ye(f)
                            ? r
                              ? f.call(e, o(a, n, c, r), o(a, n, u, r))
                              : (a++,
                                f.call(
                                  e,
                                  o(a, n, c, r),
                                  o(a, n, u, r),
                                  o(a, n, c, n.notifyWith)
                                ))
                            : (i !== c && ((s = void 0), (l = [e])),
                              (r || n.resolveWith)(s, l));
                      }
                    },
                    d = r
                      ? f
                      : function () {
                          try {
                            f();
                          } catch (e) {
                            we.Deferred.exceptionHook &&
                              we.Deferred.exceptionHook(e, d.stackTrace),
                              t + 1 >= a &&
                                (i !== u && ((s = void 0), (l = [e])),
                                n.rejectWith(s, l));
                          }
                        };
                  t
                    ? d()
                    : (we.Deferred.getStackHook &&
                        (d.stackTrace = we.Deferred.getStackHook()),
                      e.setTimeout(d));
                };
              }
              var a = 0;
              return we
                .Deferred(function (e) {
                  n[0][3].add(o(0, e, ye(r) ? r : c, e.notifyWith)),
                    n[1][3].add(o(0, e, ye(t) ? t : c)),
                    n[2][3].add(o(0, e, ye(i) ? i : u));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? we.extend(e, r) : r;
            },
          },
          o = {};
        return (
          we.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (r[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    i = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = le.call(arguments),
          o = we.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (r[e] = arguments.length > 1 ? le.call(arguments) : n),
                --t || o.resolveWith(i, r);
            };
          };
        if (
          t <= 1 &&
          (f(e, o.done(a(n)).resolve, o.reject, !t),
          "pending" === o.state() || ye(r[n] && r[n].then))
        )
          return o.then();
        for (; n--; ) f(r[n], a(n), o.reject);
        return o.promise();
      },
    });
  var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (we.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      je.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (we.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Le = we.Deferred();
  (we.fn.ready = function (e) {
    return (
      Le.then(e).catch(function (e) {
        we.readyException(e);
      }),
      this
    );
  }),
    we.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --we.readyWait : we.isReady) ||
          ((we.isReady = !0),
          (!0 !== e && --we.readyWait > 0) || Le.resolveWith(ae, [we]));
      },
    }),
    (we.ready.then = Le.then),
    "complete" === ae.readyState ||
    ("loading" !== ae.readyState && !ae.documentElement.doScroll)
      ? e.setTimeout(we.ready)
      : (ae.addEventListener("DOMContentLoaded", d),
        e.addEventListener("load", d));
  var Pe = function (e, t, n, r, o, a, s) {
      var l = 0,
        c = e.length,
        u = null == n;
      if ("object" === i(n)) {
        o = !0;
        for (l in n) Pe(e, t, l, n[l], !0, a, s);
      } else if (
        void 0 !== r &&
        ((o = !0),
        ye(r) || (s = !0),
        u &&
          (s
            ? (t.call(e, r), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(we(e), n);
              }))),
        t)
      )
        for (; l < c; l++) t(e[l], n, s ? r : r.call(e[l], l, t(e[l], n)));
      return o ? e : u ? t.call(e) : c ? t(e[0], n) : a;
    },
    Re = /^-ms-/,
    He = /-([a-z])/g,
    Me = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (m.uid = 1),
    (m.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Me(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[h(t)] = n;
        else for (i in t) r[h(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][h(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(h)
              : (t = h(t)) in i
              ? [t]
              : t.match(Oe) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || we.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !we.isEmptyObject(t);
      },
    });
  var qe = new m(),
    Fe = new m(),
    We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Be = /[A-Z]/g;
  we.extend({
    hasData: function (e) {
      return Fe.hasData(e) || qe.hasData(e);
    },
    data: function (e, t, n) {
      return Fe.access(e, t, n);
    },
    removeData: function (e, t) {
      Fe.remove(e, t);
    },
    _data: function (e, t, n) {
      return qe.access(e, t, n);
    },
    _removeData: function (e, t) {
      qe.remove(e, t);
    },
  }),
    we.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = Fe.get(o)), 1 === o.nodeType && !qe.get(o, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (i = a[n].name).indexOf("data-") &&
                ((i = h(i.slice(5))), g(o, i, r[i]));
            qe.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              Fe.set(this, e);
            })
          : Pe(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = Fe.get(o, e))) return n;
                  if (void 0 !== (n = g(o, e))) return n;
                } else
                  this.each(function () {
                    Fe.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Fe.remove(this, e);
        });
      },
    }),
    we.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = qe.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = qe.access(e, t, we.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = we.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = we._queueHooks(e, t),
          a = function () {
            we.dequeue(e, t);
          };
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          qe.get(e, n) ||
          qe.access(e, n, {
            empty: we.Callbacks("once memory").add(function () {
              qe.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    we.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? we.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = we.queue(this, e, t);
                we._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && we.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          we.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = we.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = qe.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), r.promise(t);
      },
    });
  var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ze = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"),
    $e = ["Top", "Right", "Bottom", "Left"],
    Ve = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          we.contains(e.ownerDocument, e) &&
          "none" === we.css(e, "display"))
      );
    },
    Ke = function (e, t, n, i) {
      var r,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      r = n.apply(e, i || []);
      for (o in t) e.style[o] = a[o];
      return r;
    },
    Qe = {};
  we.fn.extend({
    show: function () {
      return _(this, !0);
    },
    hide: function () {
      return _(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Ve(this) ? we(this).show() : we(this).hide();
          });
    },
  });
  var Ye = /^(?:checkbox|radio)$/i,
    Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Xe = /^$|^module$|\/(?:java|ecma)script/i,
    Je = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Je.optgroup = Je.option),
    (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead),
    (Je.th = Je.td);
  var Ze = /<|&#?\w+;/;
  !(function () {
    var e = ae.createDocumentFragment().appendChild(ae.createElement("div")),
      t = ae.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (ge.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (ge.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var et = ae.documentElement,
    tt = /^key/,
    nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    it = /^([^.]*)(?:\.(.+)|)/;
  (we.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        c,
        u,
        f,
        d,
        p,
        h,
        m,
        v = qe.get(e);
      if (v)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && we.find.matchesSelector(et, r),
            n.guid || (n.guid = we.guid++),
            (l = v.events) || (l = v.events = {}),
            (a = v.handle) ||
              (a = v.handle = function (t) {
                return void 0 !== we && we.event.triggered !== t.type
                  ? we.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            c = (t = (t || "").match(Oe) || [""]).length;
          c--;

        )
          (p = m = (s = it.exec(t[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p &&
              ((f = we.event.special[p] || {}),
              (p = (r ? f.delegateType : f.bindType) || p),
              (f = we.event.special[p] || {}),
              (u = we.extend(
                {
                  type: p,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && we.expr.match.needsContext.test(r),
                  namespace: h.join("."),
                },
                o
              )),
              (d = l[p]) ||
                (((d = l[p] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, h, a)) ||
                  (e.addEventListener && e.addEventListener(p, a))),
              f.add &&
                (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
              (we.event.global[p] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        c,
        u,
        f,
        d,
        p,
        h,
        m,
        v = qe.hasData(e) && qe.get(e);
      if (v && (l = v.events)) {
        for (c = (t = (t || "").match(Oe) || [""]).length; c--; )
          if (
            ((s = it.exec(t[c]) || []),
            (p = m = s[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              f = we.event.special[p] || {},
                d = l[(p = (i ? f.delegateType : f.bindType) || p)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = d.length;
              o--;

            )
              (u = d[o]),
                (!r && m !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (s && !s.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (d.splice(o, 1),
                  u.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, u));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                we.removeEvent(e, p, v.handle),
              delete l[p]);
          } else for (p in l) we.event.remove(e, p + t[c], n, i, !0);
        we.isEmptyObject(l) && qe.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s = we.event.fix(e),
        l = new Array(arguments.length),
        c = (qe.get(this, "events") || {})[s.type] || [],
        u = we.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, s))
      ) {
        for (
          a = we.event.handlers.call(this, s, c), t = 0;
          (r = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (i = (
                  (we.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, l)) &&
                !1 === (s.result = i) &&
                (s.preventDefault(), s.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(r = (i = t[n]).selector + " ")] &&
                (a[r] = i.needsContext
                  ? we(r, this).index(c) > -1
                  : we.find(r, this, null, [c]).length),
                a[r] && o.push(i);
            o.length && s.push({ elem: c, handlers: o });
          }
      return (
        (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(we.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: ye(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[we.expando] ? e : new we.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== A() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === A() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && o(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return o(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (we.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (we.Event = function (e, t) {
      if (!(this instanceof we.Event)) return new we.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? T
              : C),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && we.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[we.expando] = !0);
    }),
    (we.Event.prototype = {
      constructor: we.Event,
      isDefaultPrevented: C,
      isPropagationStopped: C,
      isImmediatePropagationStopped: C,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = T),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = T),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = T),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    we.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && tt.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && nt.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      we.event.addProp
    ),
    we.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        we.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              r = e.relatedTarget,
              o = e.handleObj;
            return (
              (r && (r === i || we.contains(i, r))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    we.fn.extend({
      on: function (e, t, n, i) {
        return S(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return S(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            we(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = C),
          this.each(function () {
            we.event.remove(this, e, n, t);
          })
        );
      },
    });
  var rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    ot = /<script|<style|<link/i,
    at = /checked\s*(?:[^=]|=\s*.checked.)/i,
    st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  we.extend({
    htmlPrefilter: function (e) {
      return e.replace(rt, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s = e.cloneNode(!0),
        l = we.contains(e.ownerDocument, e);
      if (
        !(
          ge.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          we.isXMLDoc(e)
        )
      )
        for (a = w(s), i = 0, r = (o = w(e)).length; i < r; i++) O(o[i], a[i]);
      if (t)
        if (n)
          for (o = o || w(e), a = a || w(s), i = 0, r = o.length; i < r; i++)
            N(o[i], a[i]);
        else N(e, s);
      return (a = w(s, "script")).length > 0 && x(a, !l && w(e, "script")), s;
    },
    cleanData: function (e) {
      for (var t, n, i, r = we.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Me(n)) {
          if ((t = n[qe.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? we.event.remove(n, i) : we.removeEvent(n, i, t.handle);
            n[qe.expando] = void 0;
          }
          n[Fe.expando] && (n[Fe.expando] = void 0);
        }
    },
  }),
    we.fn.extend({
      detach: function (e) {
        return L(this, e, !0);
      },
      remove: function (e) {
        return L(this, e);
      },
      text: function (e) {
        return Pe(
          this,
          function (e) {
            return void 0 === e
              ? we.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return j(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            D(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return j(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = D(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return j(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return j(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (we.cleanData(w(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return we.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Pe(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ot.test(e) &&
              !Je[(Ge.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = we.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (we.cleanData(w(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return j(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            we.inArray(this, e) < 0 &&
              (we.cleanData(w(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    we.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        we.fn[e] = function (e) {
          for (var n, i = [], r = we(e), o = r.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              we(r[a])[t](n),
              ue.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var lt = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"),
    ct = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    ut = new RegExp($e.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          et.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (s = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (a = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (o = 36 === c.offsetWidth || "absolute"),
          et.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      o,
      a,
      s,
      l = ae.createElement("div"),
      c = ae.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (ge.clearCloneStyle = "content-box" === c.style.backgroundClip),
      we.extend(ge, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), s;
        },
        scrollboxSize: function () {
          return t(), o;
        },
      }));
  })();
  var ft = /^(none|table(?!-c[ea]).+)/,
    dt = /^--/,
    pt = { position: "absolute", visibility: "hidden", display: "block" },
    ht = { letterSpacing: "0", fontWeight: "400" },
    mt = ["Webkit", "Moz", "ms"],
    vt = ae.createElement("div").style;
  we.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = P(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          a,
          s = h(t),
          l = dt.test(t),
          c = e.style;
        if (
          (l || (t = M(s)),
          (a = we.cssHooks[t] || we.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
        "string" == (o = typeof n) &&
          (r = ze.exec(n)) &&
          r[1] &&
          ((n = y(e, t, r)), (o = "number")),
          null != n &&
            n === n &&
            ("number" === o &&
              (n += (r && r[3]) || (we.cssNumber[s] ? "" : "px")),
            ge.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        a,
        s = h(t);
      return (
        dt.test(t) || (t = M(s)),
        (a = we.cssHooks[t] || we.cssHooks[s]) &&
          "get" in a &&
          (r = a.get(e, !0, n)),
        void 0 === r && (r = P(e, t, i)),
        "normal" === r && t in ht && (r = ht[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    we.each(["height", "width"], function (e, t) {
      we.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !ft.test(we.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? W(e, t, i)
              : Ke(e, pt, function () {
                  return W(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = ct(e),
            a = "border-box" === we.css(e, "boxSizing", !1, o),
            s = i && F(e, t, i, a, o);
          return (
            a &&
              ge.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  F(e, t, "border", !1, o) -
                  0.5
              )),
            s &&
              (r = ze.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = we.css(e, t))),
            q(e, n, s)
          );
        },
      };
    }),
    (we.cssHooks.marginLeft = R(ge.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(P(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ke(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    we.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (we.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + $e[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        "margin" !== e && (we.cssHooks[e + t].set = q);
    }),
    we.fn.extend({
      css: function (e, t) {
        return Pe(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = ct(e), r = t.length; a < r; a++)
                o[t[a]] = we.css(e, t[a], !1, i);
              return o;
            }
            return void 0 !== n ? we.style(e, t, n) : we.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (we.Tween = B),
    (B.prototype = {
      constructor: B,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || we.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (we.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = B.propHooks[this.prop];
        return e && e.get ? e.get(this) : B.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = B.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = we.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : B.propHooks._default.set(this),
          this
        );
      },
    }),
    (B.prototype.init.prototype = B.prototype),
    (B.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = we.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          we.fx.step[e.prop]
            ? we.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[we.cssProps[e.prop]] &&
                !we.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : we.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (B.propHooks.scrollTop = B.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (we.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (we.fx = B.prototype.init),
    (we.fx.step = {});
  var gt,
    yt,
    bt = /^(?:toggle|show|hide)$/,
    _t = /queueHooks$/;
  (we.Animation = we.extend(Y, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return y(n.elem, e, ze.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      ye(e) ? ((t = e), (e = ["*"])) : (e = e.match(Oe));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (Y.tweeners[n] = Y.tweeners[n] || []),
          Y.tweeners[n].unshift(t);
    },
    prefilters: [K],
    prefilter: function (e, t) {
      t ? Y.prefilters.unshift(e) : Y.prefilters.push(e);
    },
  })),
    (we.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? we.extend({}, e)
          : {
              complete: n || (!n && t) || (ye(e) && e),
              duration: e,
              easing: (n && t) || (t && !ye(t) && t),
            };
      return (
        we.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in we.fx.speeds
              ? (i.duration = we.fx.speeds[i.duration])
              : (i.duration = we.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          ye(i.old) && i.old.call(this), i.queue && we.dequeue(this, i.queue);
        }),
        i
      );
    }),
    we.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Ve)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = we.isEmptyObject(e),
          o = we.speed(t, n, i),
          a = function () {
            var t = Y(this, we.extend({}, e), o);
            (r || qe.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = we.timers,
              a = qe.get(this);
            if (r) a[r] && a[r].stop && i(a[r]);
            else for (r in a) a[r] && a[r].stop && _t.test(r) && i(a[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || we.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = qe.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = we.timers,
              a = i ? i.length : 0;
            for (
              n.finish = !0,
                we.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    we.each(["toggle", "show", "hide"], function (e, t) {
      var n = we.fn[t];
      we.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate($(t, !0), e, i, r);
      };
    }),
    we.each(
      {
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        we.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (we.timers = []),
    (we.fx.tick = function () {
      var e,
        t = 0,
        n = we.timers;
      for (gt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || we.fx.stop(), (gt = void 0);
    }),
    (we.fx.timer = function (e) {
      we.timers.push(e), we.fx.start();
    }),
    (we.fx.interval = 13),
    (we.fx.start = function () {
      yt || ((yt = !0), U());
    }),
    (we.fx.stop = function () {
      yt = null;
    }),
    (we.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (we.fn.delay = function (t, n) {
      return (
        (t = we.fx ? we.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e = ae.createElement("input"),
        t = ae.createElement("select").appendChild(ae.createElement("option"));
      (e.type = "checkbox"),
        (ge.checkOn = "" !== e.value),
        (ge.optSelected = t.selected),
        ((e = ae.createElement("input")).value = "t"),
        (e.type = "radio"),
        (ge.radioValue = "t" === e.value);
    })();
  var wt,
    xt = we.expr.attrHandle;
  we.fn.extend({
    attr: function (e, t) {
      return Pe(this, we.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        we.removeAttr(this, e);
      });
    },
  }),
    we.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? we.prop(e, t, n)
            : ((1 === o && we.isXMLDoc(e)) ||
                (r =
                  we.attrHooks[t.toLowerCase()] ||
                  (we.expr.match.bool.test(t) ? wt : void 0)),
              void 0 !== n
                ? null === n
                  ? void we.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = we.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ge.radioValue && "radio" === t && o(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(Oe);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (wt = {
      set: function (e, t, n) {
        return !1 === t ? we.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    we.each(we.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = xt[t] || we.find.attr;
      xt[t] = function (e, t, i) {
        var r,
          o,
          a = t.toLowerCase();
        return (
          i ||
            ((o = xt[a]),
            (xt[a] = r),
            (r = null != n(e, t, i) ? a : null),
            (xt[a] = o)),
          r
        );
      };
    });
  var Et = /^(?:input|select|textarea|button)$/i,
    Tt = /^(?:a|area)$/i;
  we.fn.extend({
    prop: function (e, t) {
      return Pe(this, we.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[we.propFix[e] || e];
      });
    },
  }),
    we.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && we.isXMLDoc(e)) ||
              ((t = we.propFix[t] || t), (r = we.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = we.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Et.test(e.nodeName) || (Tt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ge.optSelected ||
      (we.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    we.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        we.propFix[this.toLowerCase()] = this;
      }
    ),
    we.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (ye(e))
          return this.each(function (t) {
            we(this).addClass(e.call(this, t, X(this)));
          });
        if ((t = J(e)).length)
          for (; (n = this[l++]); )
            if (((r = X(n)), (i = 1 === n.nodeType && " " + G(r) + " "))) {
              for (a = 0; (o = t[a++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (s = G(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (ye(e))
          return this.each(function (t) {
            we(this).removeClass(e.call(this, t, X(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = J(e)).length)
          for (; (n = this[l++]); )
            if (((r = X(n)), (i = 1 === n.nodeType && " " + G(r) + " "))) {
              for (a = 0; (o = t[a++]); )
                for (; i.indexOf(" " + o + " ") > -1; )
                  i = i.replace(" " + o + " ", " ");
              r !== (s = G(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ye(e)
          ? this.each(function (n) {
              we(this).toggleClass(e.call(this, n, X(this), t), t);
            })
          : this.each(function () {
              var t, r, o, a;
              if (i)
                for (r = 0, o = we(this), a = J(e); (t = a[r++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = X(this)) && qe.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : qe.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + G(X(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var Ct = /\r/g;
  we.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = ye(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, we(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = we.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                we.valHooks[this.type] ||
                we.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = we.valHooks[r.type] || we.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(Ct, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    we.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = we.find.attr(e, "value");
            return null != t ? t : G(we.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              l = s ? null : [],
              c = s ? a + 1 : r.length;
            for (i = a < 0 ? c : s ? a : 0; i < c; i++)
              if (
                ((n = r[i]).selected || i === a) &&
                !n.disabled &&
                (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))
              ) {
                if (((t = we(n).val()), s)) return t;
                l.push(t);
              }
            return l;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = we.makeArray(t), a = r.length;
              a--;

            )
              ((i = r[a]).selected =
                we.inArray(we.valHooks.option.get(i), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    we.each(["radio", "checkbox"], function () {
      (we.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = we.inArray(we(e).val(), t) > -1);
        },
      }),
        ge.checkOn ||
          (we.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (ge.focusin = "onfocusin" in e);
  var At = /^(?:focusinfocus|focusoutblur)$/,
    St = function (e) {
      e.stopPropagation();
    };
  we.extend(we.event, {
    trigger: function (t, n, i, r) {
      var o,
        a,
        s,
        l,
        c,
        u,
        f,
        d,
        p = [i || ae],
        h = he.call(t, "type") ? t.type : t,
        m = he.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = d = s = i = i || ae),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !At.test(h + we.event.triggered) &&
          (h.indexOf(".") > -1 && ((h = (m = h.split(".")).shift()), m.sort()),
          (c = h.indexOf(":") < 0 && "on" + h),
          (t = t[we.expando] ? t : new we.Event(h, "object" == typeof t && t)),
          (t.isTrigger = r ? 2 : 3),
          (t.namespace = m.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : we.makeArray(n, [t])),
          (f = we.event.special[h] || {}),
          r || !f.trigger || !1 !== f.trigger.apply(i, n)))
      ) {
        if (!r && !f.noBubble && !be(i)) {
          for (
            l = f.delegateType || h, At.test(l + h) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            p.push(a), (s = a);
          s === (i.ownerDocument || ae) &&
            p.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
          (d = a),
            (t.type = o > 1 ? l : f.bindType || h),
            (u = (qe.get(a, "events") || {})[t.type] && qe.get(a, "handle")) &&
              u.apply(a, n),
            (u = c && a[c]) &&
              u.apply &&
              Me(a) &&
              ((t.result = u.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          r ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(p.pop(), n)) ||
            !Me(i) ||
            (c &&
              ye(i[h]) &&
              !be(i) &&
              ((s = i[c]) && (i[c] = null),
              (we.event.triggered = h),
              t.isPropagationStopped() && d.addEventListener(h, St),
              i[h](),
              t.isPropagationStopped() && d.removeEventListener(h, St),
              (we.event.triggered = void 0),
              s && (i[c] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = we.extend(new we.Event(), n, { type: e, isSimulated: !0 });
      we.event.trigger(i, null, t);
    },
  }),
    we.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          we.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return we.event.trigger(e, t, n, !0);
      },
    }),
    ge.focusin ||
      we.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          we.event.simulate(t, e.target, we.event.fix(e));
        };
        we.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              r = qe.access(i, t);
            r || i.addEventListener(e, n, !0), qe.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              r = qe.access(i, t) - 1;
            r
              ? qe.access(i, t, r)
              : (i.removeEventListener(e, n, !0), qe.remove(i, t));
          },
        };
      });
  var Dt = e.location,
    kt = Date.now(),
    It = /\?/;
  we.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        we.error("Invalid XML: " + t),
      n
    );
  };
  var Nt = /\[\]$/,
    Ot = /\r?\n/g,
    jt = /^(?:submit|button|image|reset|file)$/i,
    Lt = /^(?:input|select|textarea|keygen)/i;
  (we.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = ye(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !we.isPlainObject(e)))
      we.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) Z(n, e[n], t, r);
    return i.join("&");
  }),
    we.fn.extend({
      serialize: function () {
        return we.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = we.prop(this, "elements");
          return e ? we.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !we(this).is(":disabled") &&
              Lt.test(this.nodeName) &&
              !jt.test(e) &&
              (this.checked || !Ye.test(e))
            );
          })
          .map(function (e, t) {
            var n = we(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? we.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ot, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ot, "\r\n") };
          })
          .get();
      },
    });
  var Pt = /%20/g,
    Rt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ft = /^(?:GET|HEAD)$/,
    Wt = /^\/\//,
    Bt = {},
    Ut = {},
    zt = "*/".concat("*"),
    $t = ae.createElement("a");
  ($t.href = Dt.href),
    we.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Dt.href,
        type: "GET",
        isLocal: qt.test(Dt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": we.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? ne(ne(e, we.ajaxSettings), t) : ne(we.ajaxSettings, e);
      },
      ajaxPrefilter: ee(Bt),
      ajaxTransport: ee(Ut),
      ajax: function (t, n) {
        function i(t, n, i, s) {
          var c,
            d,
            p,
            _,
            w,
            x = n;
          u ||
            ((u = !0),
            l && e.clearTimeout(l),
            (r = void 0),
            (a = s || ""),
            (E.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && t < 300) || 304 === t),
            i && (_ = ie(h, E, i)),
            (_ = re(h, _, E, c)),
            c
              ? (h.ifModified &&
                  ((w = E.getResponseHeader("Last-Modified")) &&
                    (we.lastModified[o] = w),
                  (w = E.getResponseHeader("etag")) && (we.etag[o] = w)),
                204 === t || "HEAD" === h.type
                  ? (x = "nocontent")
                  : 304 === t
                  ? (x = "notmodified")
                  : ((x = _.state), (d = _.data), (c = !(p = _.error))))
              : ((p = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
            (E.status = t),
            (E.statusText = (n || x) + ""),
            c ? g.resolveWith(m, [d, x, E]) : g.rejectWith(m, [E, x, p]),
            E.statusCode(b),
            (b = void 0),
            f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [E, h, c ? d : p]),
            y.fireWith(m, [E, x]),
            f &&
              (v.trigger("ajaxComplete", [E, h]),
              --we.active || we.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var r,
          o,
          a,
          s,
          l,
          c,
          u,
          f,
          d,
          p,
          h = we.ajaxSetup({}, n),
          m = h.context || h,
          v = h.context && (m.nodeType || m.jquery) ? we(m) : we.event,
          g = we.Deferred(),
          y = we.Callbacks("once memory"),
          b = h.statusCode || {},
          _ = {},
          w = {},
          x = "canceled",
          E = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!s)
                  for (s = {}; (t = Mt.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return u ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == u &&
                  ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                  (_[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == u && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) E.always(e[E.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || x;
              return r && r.abort(t), i(0, t), this;
            },
          };
        if (
          (g.promise(E),
          (h.url = ((t || h.url || Dt.href) + "").replace(
            Wt,
            Dt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""]),
          null == h.crossDomain)
        ) {
          c = ae.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                $t.protocol + "//" + $t.host != c.protocol + "//" + c.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = we.param(h.data, h.traditional)),
          te(Bt, h, n, E),
          u)
        )
          return E;
        (f = we.event && h.global) &&
          0 == we.active++ &&
          we.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Ft.test(h.type)),
          (o = h.url.replace(Rt, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (h.data = h.data.replace(Pt, "+"))
            : ((p = h.url.slice(o.length)),
              h.data &&
                (h.processData || "string" == typeof h.data) &&
                ((o += (It.test(o) ? "&" : "?") + h.data), delete h.data),
              !1 === h.cache &&
                ((o = o.replace(Ht, "$1")),
                (p = (It.test(o) ? "&" : "?") + "_=" + kt++ + p)),
              (h.url = o + p)),
          h.ifModified &&
            (we.lastModified[o] &&
              E.setRequestHeader("If-Modified-Since", we.lastModified[o]),
            we.etag[o] && E.setRequestHeader("If-None-Match", we.etag[o])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
            E.setRequestHeader("Content-Type", h.contentType),
          E.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
              : h.accepts["*"]
          );
        for (d in h.headers) E.setRequestHeader(d, h.headers[d]);
        if (h.beforeSend && (!1 === h.beforeSend.call(m, E, h) || u))
          return E.abort();
        if (
          ((x = "abort"),
          y.add(h.complete),
          E.done(h.success),
          E.fail(h.error),
          (r = te(Ut, h, n, E)))
        ) {
          if (((E.readyState = 1), f && v.trigger("ajaxSend", [E, h]), u))
            return E;
          h.async &&
            h.timeout > 0 &&
            (l = e.setTimeout(function () {
              E.abort("timeout");
            }, h.timeout));
          try {
            (u = !1), r.send(_, i);
          } catch (e) {
            if (u) throw e;
            i(-1, e);
          }
        } else i(-1, "No Transport");
        return E;
      },
      getJSON: function (e, t, n) {
        return we.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return we.get(e, void 0, t, "script");
      },
    }),
    we.each(["get", "post"], function (e, t) {
      we[t] = function (e, n, i, r) {
        return (
          ye(n) && ((r = r || i), (i = n), (n = void 0)),
          we.ajax(
            we.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              we.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (we._evalUrl = function (e) {
      return we.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    we.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (ye(e) && (e = e.call(this[0])),
            (t = we(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return ye(e)
          ? this.each(function (t) {
              we(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = we(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = ye(e);
        return this.each(function (n) {
          we(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              we(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (we.expr.pseudos.hidden = function (e) {
      return !we.expr.pseudos.visible(e);
    }),
    (we.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (we.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Kt = we.ajaxSettings.xhr();
  (ge.cors = !!Kt && "withCredentials" in Kt),
    (ge.ajax = Kt = !!Kt),
    we.ajaxTransport(function (t) {
      var n, i;
      if (ge.cors || (Kt && !t.crossDomain))
        return {
          send: function (r, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                r["X-Requested-With"] ||
                (r["X-Requested-With"] = "XMLHttpRequest");
            for (a in r) s.setRequestHeader(a, r[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Vt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (i = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = i)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    we.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    we.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return we.globalEval(e), e;
        },
      },
    }),
    we.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    we.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, r) {
            (t = we("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              ae.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Qt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  we.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Qt.pop() || we.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    we.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Yt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback = ye(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Yt, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return a || we.error(r + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            a = arguments;
          }),
          i.always(function () {
            void 0 === o ? we(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Qt.push(r)),
              a && ye(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (ge.createHTMLDocument = (function () {
      var e = ae.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (we.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, r, o;
      return (
        t ||
          (ge.createHTMLDocument
            ? (((i = (t = ae.implementation.createHTMLDocument(
                ""
              )).createElement("base")).href = ae.location.href),
              t.head.appendChild(i))
            : (t = ae)),
        (r = Se.exec(e)),
        (o = !n && []),
        r
          ? [t.createElement(r[1])]
          : ((r = E([e], t, o)),
            o && o.length && we(o).remove(),
            we.merge([], r.childNodes))
      );
    }),
    (we.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((i = G(e.slice(s))), (e = e.slice(0, s))),
        ye(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        a.length > 0 &&
          we
            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(i ? we("<div>").append(we.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    we.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        we.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (we.expr.pseudos.animated = function (e) {
      return we.grep(we.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (we.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          c = we.css(e, "position"),
          u = we(e),
          f = {};
        "static" === c && (e.style.position = "relative"),
          (s = u.offset()),
          (o = we.css(e, "top")),
          (l = we.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1
            ? ((a = (i = u.position()).top), (r = i.left))
            : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          ye(t) && (t = t.call(e, n, we.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + r),
          "using" in t ? t.using.call(e, f) : u.css(f);
      },
    }),
    we.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                we.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === we.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === we.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = we(e).offset()).top += we.css(e, "borderTopWidth", !0)),
              (r.left += we.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - we.css(i, "marginTop", !0),
            left: t.left - r.left - we.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === we.css(e, "position");

          )
            e = e.offsetParent;
          return e || et;
        });
      },
    }),
    we.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      e,
      t
    ) {
      var n = "pageYOffset" === t;
      we.fn[e] = function (i) {
        return Pe(
          this,
          function (e, i, r) {
            var o;
            if (
              (be(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
              void 0 === r)
            )
              return o ? o[t] : e[i];
            o
              ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
              : (e[i] = r);
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    we.each(["top", "left"], function (e, t) {
      we.cssHooks[t] = R(ge.pixelPosition, function (e, n) {
        if (n)
          return (n = P(e, t)), lt.test(n) ? we(e).position()[t] + "px" : n;
      });
    }),
    we.each({ Height: "height", Width: "width" }, function (e, t) {
      we.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (
        n,
        i
      ) {
        we.fn[i] = function (r, o) {
          var a = arguments.length && (n || "boolean" != typeof r),
            s = n || (!0 === r || !0 === o ? "margin" : "border");
          return Pe(
            this,
            function (t, n, r) {
              var o;
              return be(t)
                ? 0 === i.indexOf("outer")
                  ? t["inner" + e]
                  : t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement),
                  Math.max(
                    t.body["scroll" + e],
                    o["scroll" + e],
                    t.body["offset" + e],
                    o["offset" + e],
                    o["client" + e]
                  ))
                : void 0 === r
                ? we.css(t, n, s)
                : we.style(t, n, r, s);
            },
            t,
            a ? r : void 0,
            a
          );
        };
      });
    }),
    we.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        we.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    we.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    we.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (we.proxy = function (e, t) {
      var n, i, r;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ye(e)))
        return (
          (i = le.call(arguments, 2)),
          (r = function () {
            return e.apply(t || this, i.concat(le.call(arguments)));
          }),
          (r.guid = e.guid = e.guid || we.guid++),
          r
        );
    }),
    (we.holdReady = function (e) {
      e ? we.readyWait++ : we.ready(!0);
    }),
    (we.isArray = Array.isArray),
    (we.parseJSON = JSON.parse),
    (we.nodeName = o),
    (we.isFunction = ye),
    (we.isWindow = be),
    (we.camelCase = h),
    (we.type = i),
    (we.now = Date.now),
    (we.isNumeric = function (e) {
      var t = we.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return we;
      });
  var Gt = e.jQuery,
    Xt = e.$;
  return (
    (we.noConflict = function (t) {
      return (
        e.$ === we && (e.$ = Xt), t && e.jQuery === we && (e.jQuery = Gt), we
      );
    }),
    t || (e.jQuery = e.$ = we),
    we
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
  })(this, function () {
    "use strict";
    function e(e) {
      return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
      if (1 !== e.nodeType) return [];
      var n = getComputedStyle(e, null);
      return t ? n[t] : n;
    }
    function n(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function i(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body;
      }
      var r = t(e),
        o = r.overflow,
        a = r.overflowX;
      return /(auto|scroll)/.test(o + r.overflowY + a) ? e : i(n(e));
    }
    function r(e) {
      var n = e && e.offsetParent,
        i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i
        ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
          "static" === t(n, "position")
          ? r(n)
          : n
        : e
        ? e.ownerDocument.documentElement
        : document.documentElement;
    }
    function o(e) {
      var t = e.nodeName;
      return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
    }
    function a(e) {
      return null === e.parentNode ? e : a(e.parentNode);
    }
    function s(e, t) {
      if (!(e && e.nodeType && t && t.nodeType))
        return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        l = n ? t : e,
        c = document.createRange();
      c.setStart(i, 0), c.setEnd(l, 0);
      var u = c.commonAncestorContainer;
      if ((e !== u && t !== u) || i.contains(l)) return o(u) ? u : r(u);
      var f = a(e);
      return f.host ? s(f.host, t) : s(e, a(t).host);
    }
    function l(e) {
      var t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "top",
        n = "top" === t ? "scrollTop" : "scrollLeft",
        i = e.nodeName;
      if ("BODY" === i || "HTML" === i) {
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[n];
      }
      return e[n];
    }
    function c(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = l(t, "top"),
        r = l(t, "left"),
        o = n ? -1 : 1;
      return (
        (e.top += i * o),
        (e.bottom += i * o),
        (e.left += r * o),
        (e.right += r * o),
        e
      );
    }
    function u(e, t) {
      var n = "x" === t ? "Left" : "Top",
        i = "Left" == n ? "Right" : "Bottom";
      return (
        parseFloat(e["border" + n + "Width"], 10) +
        parseFloat(e["border" + i + "Width"], 10)
      );
    }
    function f(e, t, n, i) {
      return Y(
        t["offset" + e],
        t["scroll" + e],
        n["client" + e],
        n["offset" + e],
        n["scroll" + e],
        ie()
          ? n["offset" + e] +
              i["margin" + ("Height" === e ? "Top" : "Left")] +
              i["margin" + ("Height" === e ? "Bottom" : "Right")]
          : 0
      );
    }
    function d() {
      var e = document.body,
        t = document.documentElement,
        n = ie() && getComputedStyle(t);
      return { height: f("Height", e, t, n), width: f("Width", e, t, n) };
    }
    function p(e) {
      return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function h(e) {
      var n = {};
      if (ie())
        try {
          n = e.getBoundingClientRect();
          var i = l(e, "top"),
            r = l(e, "left");
          (n.top += i), (n.left += r), (n.bottom += i), (n.right += r);
        } catch (e) {}
      else n = e.getBoundingClientRect();
      var o = {
          left: n.left,
          top: n.top,
          width: n.right - n.left,
          height: n.bottom - n.top,
        },
        a = "HTML" === e.nodeName ? d() : {},
        s = a.width || e.clientWidth || o.right - o.left,
        c = a.height || e.clientHeight || o.bottom - o.top,
        f = e.offsetWidth - s,
        h = e.offsetHeight - c;
      if (f || h) {
        var m = t(e);
        (f -= u(m, "x")), (h -= u(m, "y")), (o.width -= f), (o.height -= h);
      }
      return p(o);
    }
    function m(e, n) {
      var r = ie(),
        o = "HTML" === n.nodeName,
        a = h(e),
        s = h(n),
        l = i(e),
        u = t(n),
        f = parseFloat(u.borderTopWidth, 10),
        d = parseFloat(u.borderLeftWidth, 10),
        m = p({
          top: a.top - s.top - f,
          left: a.left - s.left - d,
          width: a.width,
          height: a.height,
        });
      if (((m.marginTop = 0), (m.marginLeft = 0), !r && o)) {
        var v = parseFloat(u.marginTop, 10),
          g = parseFloat(u.marginLeft, 10);
        (m.top -= f - v),
          (m.bottom -= f - v),
          (m.left -= d - g),
          (m.right -= d - g),
          (m.marginTop = v),
          (m.marginLeft = g);
      }
      return (
        (r ? n.contains(l) : n === l && "BODY" !== l.nodeName) && (m = c(m, n)),
        m
      );
    }
    function v(e) {
      var t = e.ownerDocument.documentElement,
        n = m(e, t),
        i = Y(t.clientWidth, window.innerWidth || 0),
        r = Y(t.clientHeight, window.innerHeight || 0),
        o = l(t),
        a = l(t, "left");
      return p({
        top: o - n.top + n.marginTop,
        left: a - n.left + n.marginLeft,
        width: i,
        height: r,
      });
    }
    function g(e) {
      var i = e.nodeName;
      return (
        "BODY" !== i &&
        "HTML" !== i &&
        ("fixed" === t(e, "position") || g(n(e)))
      );
    }
    function y(e, t, r, o) {
      var a = { top: 0, left: 0 },
        l = s(e, t);
      if ("viewport" === o) a = v(l);
      else {
        var c;
        "scrollParent" === o
          ? ((c = i(n(t))),
            "BODY" === c.nodeName && (c = e.ownerDocument.documentElement))
          : (c = "window" === o ? e.ownerDocument.documentElement : o);
        var u = m(c, l);
        if ("HTML" !== c.nodeName || g(l)) a = u;
        else {
          var f = d(),
            p = f.height,
            h = f.width;
          (a.top += u.top - u.marginTop),
            (a.bottom = p + u.top),
            (a.left += u.left - u.marginLeft),
            (a.right = h + u.left);
        }
      }
      return (a.left += r), (a.top += r), (a.right -= r), (a.bottom -= r), a;
    }
    function b(e) {
      return e.width * e.height;
    }
    function _(e, t, n, i, r) {
      var o =
        5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf("auto")) return e;
      var a = y(n, i, o, r),
        s = {
          top: { width: a.width, height: t.top - a.top },
          right: { width: a.right - t.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - t.bottom },
          left: { width: t.left - a.left, height: a.height },
        },
        l = Object.keys(s)
          .map(function (e) {
            return se({ key: e }, s[e], { area: b(s[e]) });
          })
          .sort(function (e, t) {
            return t.area - e.area;
          }),
        c = l.filter(function (e) {
          var t = e.width,
            i = e.height;
          return t >= n.clientWidth && i >= n.clientHeight;
        }),
        u = 0 < c.length ? c[0].key : l[0].key,
        f = e.split("-")[1];
      return u + (f ? "-" + f : "");
    }
    function w(e, t, n) {
      return m(n, s(t, n));
    }
    function x(e) {
      var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
      return { width: e.offsetWidth + i, height: e.offsetHeight + n };
    }
    function E(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e];
      });
    }
    function T(e, t, n) {
      n = n.split("-")[0];
      var i = x(e),
        r = { width: i.width, height: i.height },
        o = -1 !== ["right", "left"].indexOf(n),
        a = o ? "top" : "left",
        s = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";
      return (
        (r[a] = t[a] + t[l] / 2 - i[l] / 2),
        (r[s] = n === s ? t[s] - i[c] : t[E(s)]),
        r
      );
    }
    function C(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function A(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (e) {
          return e[t] === n;
        });
      var i = C(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(i);
    }
    function S(t, n, i) {
      return (
        (void 0 === i ? t : t.slice(0, A(t, "name", i))).forEach(function (t) {
          t.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var i = t.function || t.fn;
          t.enabled &&
            e(i) &&
            ((n.offsets.popper = p(n.offsets.popper)),
            (n.offsets.reference = p(n.offsets.reference)),
            (n = i(n, t)));
        }),
        n
      );
    }
    function D() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = w(this.state, this.popper, this.reference)),
          (e.placement = _(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.offsets.popper = T(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = "absolute"),
          (e = S(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function k(e, t) {
      return e.some(function (e) {
        var n = e.name;
        return e.enabled && n === t;
      });
    }
    function I(e) {
      for (
        var t = [!1, "ms", "Webkit", "Moz", "O"],
          n = e.charAt(0).toUpperCase() + e.slice(1),
          i = 0;
        i < t.length - 1;
        i++
      ) {
        var r = t[i],
          o = r ? "" + r + n : e;
        if (void 0 !== document.body.style[o]) return o;
      }
      return null;
    }
    function N() {
      return (
        (this.state.isDestroyed = !0),
        k(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.left = ""),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style[I("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function O(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function j(e, t, n, r) {
      var o = "BODY" === e.nodeName,
        a = o ? e.ownerDocument.defaultView : e;
      a.addEventListener(t, n, { passive: !0 }),
        o || j(i(a.parentNode), t, n, r),
        r.push(a);
    }
    function L(e, t, n, r) {
      (n.updateBound = r),
        O(e).addEventListener("resize", n.updateBound, { passive: !0 });
      var o = i(e);
      return (
        j(o, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = o),
        (n.eventsEnabled = !0),
        n
      );
    }
    function P() {
      this.state.eventsEnabled ||
        (this.state = L(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function R(e, t) {
      return (
        O(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function H() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = R(this.reference, this.state)));
    }
    function M(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function q(e, t) {
      Object.keys(t).forEach(function (n) {
        var i = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
          M(t[n]) &&
          (i = "px"),
          (e.style[n] = t[n] + i);
      });
    }
    function F(e, t) {
      Object.keys(t).forEach(function (n) {
        !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
      });
    }
    function W(e, t, n) {
      var i = C(e, function (e) {
          return e.name === t;
        }),
        r =
          !!i &&
          e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order;
          });
      if (!r) {
        var o = "`" + t + "`";
        console.warn(
          "`" +
            n +
            "` modifier is required by " +
            o +
            " modifier in order to work, be sure to include it before " +
            o +
            "!"
        );
      }
      return r;
    }
    function B(e) {
      return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function U(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = ce.indexOf(e),
        i = ce.slice(n + 1).concat(ce.slice(0, n));
      return t ? i.reverse() : i;
    }
    function z(e, t, n, i) {
      var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        o = +r[1],
        a = r[2];
      if (!o) return e;
      if (0 === a.indexOf("%")) {
        var s;
        switch (a) {
          case "%p":
            s = n;
            break;
          case "%":
          case "%r":
          default:
            s = i;
        }
        return (p(s)[t] / 100) * o;
      }
      if ("vh" === a || "vw" === a) {
        return (
          (("vh" === a
            ? Y(document.documentElement.clientHeight, window.innerHeight || 0)
            : Y(document.documentElement.clientWidth, window.innerWidth || 0)) /
            100) *
          o
        );
      }
      return o;
    }
    function $(e, t, n, i) {
      var r = [0, 0],
        o = -1 !== ["right", "left"].indexOf(i),
        a = e.split(/(\+|\-)/).map(function (e) {
          return e.trim();
        }),
        s = a.indexOf(
          C(a, function (e) {
            return -1 !== e.search(/,|\s/);
          })
        );
      a[s] &&
        -1 === a[s].indexOf(",") &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      var l = /\s*,\s*|\s+/,
        c =
          -1 === s
            ? [a]
            : [
                a.slice(0, s).concat([a[s].split(l)[0]]),
                [a[s].split(l)[1]].concat(a.slice(s + 1)),
              ];
      return (
        (c = c.map(function (e, i) {
          var r = (1 === i ? !o : o) ? "height" : "width",
            a = !1;
          return e
            .reduce(function (e, t) {
              return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                ? ((e[e.length - 1] = t), (a = !0), e)
                : a
                ? ((e[e.length - 1] += t), (a = !1), e)
                : e.concat(t);
            }, [])
            .map(function (e) {
              return z(e, r, t, n);
            });
        })),
        c.forEach(function (e, t) {
          e.forEach(function (n, i) {
            M(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
          });
        }),
        r
      );
    }
    function V(e, t) {
      var n,
        i = t.offset,
        r = e.placement,
        o = e.offsets,
        a = o.popper,
        s = o.reference,
        l = r.split("-")[0];
      return (
        (n = M(+i) ? [+i, 0] : $(i, a, s, l)),
        "left" === l
          ? ((a.top += n[0]), (a.left -= n[1]))
          : "right" === l
          ? ((a.top += n[0]), (a.left += n[1]))
          : "top" === l
          ? ((a.left += n[0]), (a.top -= n[1]))
          : "bottom" === l && ((a.left += n[0]), (a.top += n[1])),
        (e.popper = a),
        e
      );
    }
    for (
      var K = Math.min,
        Q = Math.floor,
        Y = Math.max,
        G = "undefined" != typeof window && "undefined" != typeof document,
        X = ["Edge", "Trident", "Firefox"],
        J = 0,
        Z = 0;
      Z < X.length;
      Z += 1
    )
      if (G && 0 <= navigator.userAgent.indexOf(X[Z])) {
        J = 1;
        break;
      }
    var ee,
      te = G && window.Promise,
      ne = te
        ? function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                window.Promise.resolve().then(function () {
                  (t = !1), e();
                }));
            };
          }
        : function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                setTimeout(function () {
                  (t = !1), e();
                }, J));
            };
          },
      ie = function () {
        return (
          void 0 == ee && (ee = -1 !== navigator.appVersion.indexOf("MSIE 10")),
          ee
        );
      },
      re = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      oe = (function () {
        function e(e, t) {
          for (var n, i = 0; i < t.length; i++)
            (n = t[i]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      ae = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      },
      se =
        Object.assign ||
        function (e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        },
      le = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      ce = le.slice(3),
      ue = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise",
      },
      fe = (function () {
        function t(n, i) {
          var r = this,
            o =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          re(this, t),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update);
            }),
            (this.update = ne(this.update.bind(this))),
            (this.options = se({}, t.Defaults, o)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(se({}, t.Defaults.modifiers, o.modifiers)).forEach(
              function (e) {
                r.options.modifiers[e] = se(
                  {},
                  t.Defaults.modifiers[e] || {},
                  o.modifiers ? o.modifiers[e] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (e) {
                return se({ name: e }, r.options.modifiers[e]);
              })
              .sort(function (e, t) {
                return e.order - t.order;
              })),
            this.modifiers.forEach(function (t) {
              t.enabled &&
                e(t.onLoad) &&
                t.onLoad(r.reference, r.popper, r.options, t, r.state);
            }),
            this.update();
          var a = this.options.eventsEnabled;
          a && this.enableEventListeners(), (this.state.eventsEnabled = a);
        }
        return (
          oe(t, [
            {
              key: "update",
              value: function () {
                return D.call(this);
              },
            },
            {
              key: "destroy",
              value: function () {
                return N.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return P.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return H.call(this);
              },
            },
          ]),
          t
        );
      })();
    return (
      (fe.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (fe.placements = le),
      (fe.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = t.split("-")[1];
              if (i) {
                var r = e.offsets,
                  o = r.reference,
                  a = r.popper,
                  s = -1 !== ["bottom", "top"].indexOf(n),
                  l = s ? "left" : "top",
                  c = s ? "width" : "height",
                  u = {
                    start: ae({}, l, o[l]),
                    end: ae({}, l, o[l] + o[c] - a[c]),
                  };
                e.offsets.popper = se({}, a, u[i]);
              }
              return e;
            },
          },
          offset: { order: 200, enabled: !0, fn: V, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || r(e.instance.popper);
              e.instance.reference === n && (n = r(n));
              var i = y(e.instance.popper, e.instance.reference, t.padding, n);
              t.boundaries = i;
              var o = t.priority,
                a = e.offsets.popper,
                s = {
                  primary: function (e) {
                    var n = a[e];
                    return (
                      a[e] < i[e] &&
                        !t.escapeWithReference &&
                        (n = Y(a[e], i[e])),
                      ae({}, e, n)
                    );
                  },
                  secondary: function (e) {
                    var n = "right" === e ? "left" : "top",
                      r = a[n];
                    return (
                      a[e] > i[e] &&
                        !t.escapeWithReference &&
                        (r = K(
                          a[n],
                          i[e] - ("right" === e ? a.width : a.height)
                        )),
                      ae({}, n, r)
                    );
                  },
                };
              return (
                o.forEach(function (e) {
                  var t =
                    -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                  a = se({}, a, s[t](e));
                }),
                (e.offsets.popper = a),
                e
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                r = e.placement.split("-")[0],
                o = Q,
                a = -1 !== ["top", "bottom"].indexOf(r),
                s = a ? "right" : "bottom",
                l = a ? "left" : "top",
                c = a ? "width" : "height";
              return (
                n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
                n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, n) {
              var i;
              if (!W(e.instance.modifiers, "arrow", "keepTogether")) return e;
              var r = n.element;
              if ("string" == typeof r) {
                if (!(r = e.instance.popper.querySelector(r))) return e;
              } else if (!e.instance.popper.contains(r))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  e
                );
              var o = e.placement.split("-")[0],
                a = e.offsets,
                s = a.popper,
                l = a.reference,
                c = -1 !== ["left", "right"].indexOf(o),
                u = c ? "height" : "width",
                f = c ? "Top" : "Left",
                d = f.toLowerCase(),
                h = c ? "left" : "top",
                m = c ? "bottom" : "right",
                v = x(r)[u];
              l[m] - v < s[d] && (e.offsets.popper[d] -= s[d] - (l[m] - v)),
                l[d] + v > s[m] && (e.offsets.popper[d] += l[d] + v - s[m]),
                (e.offsets.popper = p(e.offsets.popper));
              var g = l[d] + l[u] / 2 - v / 2,
                y = t(e.instance.popper),
                b = parseFloat(y["margin" + f], 10),
                _ = parseFloat(y["border" + f + "Width"], 10),
                w = g - e.offsets.popper[d] - b - _;
              return (
                (w = Y(K(s[u] - v, w), 0)),
                (e.arrowElement = r),
                (e.offsets.arrow =
                  ((i = {}), ae(i, d, Math.round(w)), ae(i, h, ""), i)),
                e
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (k(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = y(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement
                ),
                i = e.placement.split("-")[0],
                r = E(i),
                o = e.placement.split("-")[1] || "",
                a = [];
              switch (t.behavior) {
                case ue.FLIP:
                  a = [i, r];
                  break;
                case ue.CLOCKWISE:
                  a = U(i);
                  break;
                case ue.COUNTERCLOCKWISE:
                  a = U(i, !0);
                  break;
                default:
                  a = t.behavior;
              }
              return (
                a.forEach(function (s, l) {
                  if (i !== s || a.length === l + 1) return e;
                  (i = e.placement.split("-")[0]), (r = E(i));
                  var c = e.offsets.popper,
                    u = e.offsets.reference,
                    f = Q,
                    d =
                      ("left" === i && f(c.right) > f(u.left)) ||
                      ("right" === i && f(c.left) < f(u.right)) ||
                      ("top" === i && f(c.bottom) > f(u.top)) ||
                      ("bottom" === i && f(c.top) < f(u.bottom)),
                    p = f(c.left) < f(n.left),
                    h = f(c.right) > f(n.right),
                    m = f(c.top) < f(n.top),
                    v = f(c.bottom) > f(n.bottom),
                    g =
                      ("left" === i && p) ||
                      ("right" === i && h) ||
                      ("top" === i && m) ||
                      ("bottom" === i && v),
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    b =
                      !!t.flipVariations &&
                      ((y && "start" === o && p) ||
                        (y && "end" === o && h) ||
                        (!y && "start" === o && m) ||
                        (!y && "end" === o && v));
                  (d || g || b) &&
                    ((e.flipped = !0),
                    (d || g) && (i = a[l + 1]),
                    b && (o = B(o)),
                    (e.placement = i + (o ? "-" + o : "")),
                    (e.offsets.popper = se(
                      {},
                      e.offsets.popper,
                      T(e.instance.popper, e.offsets.reference, e.placement)
                    )),
                    (e = S(e.instance.modifiers, e, "flip")));
                }),
                e
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = e.offsets,
                r = i.popper,
                o = i.reference,
                a = -1 !== ["left", "right"].indexOf(n),
                s = -1 === ["top", "left"].indexOf(n);
              return (
                (r[a ? "left" : "top"] =
                  o[n] - (s ? r[a ? "width" : "height"] : 0)),
                (e.placement = E(t)),
                (e.offsets.popper = p(r)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!W(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                n = C(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name;
                }).boundaries;
              if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
              ) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                o = e.offsets.popper,
                a = C(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name;
                }).gpuAcceleration;
              void 0 !== a &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var s,
                l,
                c = void 0 === a ? t.gpuAcceleration : a,
                u = r(e.instance.popper),
                f = h(u),
                d = { position: o.position },
                p = {
                  left: Q(o.left),
                  top: Q(o.top),
                  bottom: Q(o.bottom),
                  right: Q(o.right),
                },
                m = "bottom" === n ? "top" : "bottom",
                v = "right" === i ? "left" : "right",
                g = I("transform");
              if (
                ((l = "bottom" == m ? -f.height + p.bottom : p.top),
                (s = "right" == v ? -f.width + p.right : p.left),
                c && g)
              )
                (d[g] = "translate3d(" + s + "px, " + l + "px, 0)"),
                  (d[m] = 0),
                  (d[v] = 0),
                  (d.willChange = "transform");
              else {
                var y = "bottom" == m ? -1 : 1,
                  b = "right" == v ? -1 : 1;
                (d[m] = l * y), (d[v] = s * b), (d.willChange = m + ", " + v);
              }
              var _ = { "x-placement": e.placement };
              return (
                (e.attributes = se({}, _, e.attributes)),
                (e.styles = se({}, d, e.styles)),
                (e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              return (
                q(e.instance.popper, e.styles),
                F(e.instance.popper, e.attributes),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  q(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function (e, t, n, i, r) {
              var o = w(r, t, e),
                a = _(
                  n.placement,
                  o,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                );
              return (
                t.setAttribute("x-placement", a),
                q(t, { position: "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      fe
    );
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], t)
      : t((e.bootstrap = {}), e.jQuery, e.Popper);
  })(this, function (e, t, n) {
    "use strict";
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function o() {
      return (o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    (t = t && t.hasOwnProperty("default") ? t.default : t),
      (n = n && n.hasOwnProperty("default") ? n.default : n);
    var a,
      s,
      l,
      c,
      u,
      f,
      d,
      p,
      h,
      m,
      v,
      g,
      y,
      b,
      _,
      w,
      x,
      E,
      T,
      C,
      A,
      S,
      D,
      k,
      I,
      N,
      O = (function (e) {
        function t(t) {
          var n = this,
            r = !1;
          return (
            e(this).one(i.TRANSITION_END, function () {
              r = !0;
            }),
            setTimeout(function () {
              r || i.triggerTransitionEnd(n);
            }, t),
            this
          );
        }
        var n = !1,
          i = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
              do {
                e += ~~(1e6 * Math.random());
              } while (document.getElementById(e));
              return e;
            },
            getSelectorFromElement: function (t) {
              var n,
                i = t.getAttribute("data-target");
              (i && "#" !== i) || (i = t.getAttribute("href") || ""),
                "#" === i.charAt(0) &&
                  ((n = i),
                  (i = n =
                    "function" == typeof e.escapeSelector
                      ? e.escapeSelector(n).substr(1)
                      : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
              try {
                return e(document).find(i).length > 0 ? i : null;
              } catch (e) {
                return null;
              }
            },
            reflow: function (e) {
              return e.offsetHeight;
            },
            triggerTransitionEnd: function (t) {
              e(t).trigger(n.end);
            },
            supportsTransitionEnd: function () {
              return Boolean(n);
            },
            isElement: function (e) {
              return (e[0] || e).nodeType;
            },
            typeCheckConfig: function (e, t, n) {
              for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                  var o = n[r],
                    a = t[r],
                    s =
                      a && i.isElement(a)
                        ? "element"
                        : ((l = a),
                          {}.toString
                            .call(l)
                            .match(/\s([a-zA-Z]+)/)[1]
                            .toLowerCase());
                  if (!new RegExp(o).test(s))
                    throw new Error(
                      e.toUpperCase() +
                        ': Option "' +
                        r +
                        '" provided type "' +
                        s +
                        '" but expected type "' +
                        o +
                        '".'
                    );
                }
              var l;
            },
          };
        return (
          (n = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend",
          }),
          (e.fn.emulateTransitionEnd = t),
          i.supportsTransitionEnd() &&
            (e.event.special[i.TRANSITION_END] = {
              bindType: n.end,
              delegateType: n.end,
              handle: function (t) {
                if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              },
            }),
          i
        );
      })(t),
      j =
        ((s = "alert"),
        (c = "." + (l = "bs.alert")),
        (u = (a = t).fn[s]),
        (f = {
          CLOSE: "close" + c,
          CLOSED: "closed" + c,
          CLICK_DATA_API: "click" + c + ".data-api",
        }),
        (d = "alert"),
        (p = "fade"),
        (h = "show"),
        (m = (function () {
          function e(e) {
            this._element = e;
          }
          var t = e.prototype;
          return (
            (t.close = function (e) {
              e = e || this._element;
              var t = this._getRootElement(e);
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
            }),
            (t.dispose = function () {
              a.removeData(this._element, l), (this._element = null);
            }),
            (t._getRootElement = function (e) {
              var t = O.getSelectorFromElement(e),
                n = !1;
              return t && (n = a(t)[0]), n || (n = a(e).closest("." + d)[0]), n;
            }),
            (t._triggerCloseEvent = function (e) {
              var t = a.Event(f.CLOSE);
              return a(e).trigger(t), t;
            }),
            (t._removeElement = function (e) {
              var t = this;
              a(e).removeClass(h),
                O.supportsTransitionEnd() && a(e).hasClass(p)
                  ? a(e)
                      .one(O.TRANSITION_END, function (n) {
                        return t._destroyElement(e, n);
                      })
                      .emulateTransitionEnd(150)
                  : this._destroyElement(e);
            }),
            (t._destroyElement = function (e) {
              a(e).detach().trigger(f.CLOSED).remove();
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = a(this),
                  i = n.data(l);
                i || ((i = new e(this)), n.data(l, i)),
                  "close" === t && i[t](this);
              });
            }),
            (e._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            e
          );
        })()),
        a(document).on(
          f.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          m._handleDismiss(new m())
        ),
        (a.fn[s] = m._jQueryInterface),
        (a.fn[s].Constructor = m),
        (a.fn[s].noConflict = function () {
          return (a.fn[s] = u), m._jQueryInterface;
        }),
        m),
      L =
        ((g = "button"),
        (b = "." + (y = "bs.button")),
        (_ = ".data-api"),
        (w = (v = t).fn[g]),
        (x = "active"),
        (E = "btn"),
        (T = "focus"),
        (C = '[data-toggle^="button"]'),
        (A = '[data-toggle="buttons"]'),
        (S = "input"),
        (D = ".active"),
        (k = ".btn"),
        (I = {
          CLICK_DATA_API: "click" + b + _,
          FOCUS_BLUR_DATA_API: "focus" + b + _ + " blur" + b + _,
        }),
        (N = (function () {
          function e(e) {
            this._element = e;
          }
          var t = e.prototype;
          return (
            (t.toggle = function () {
              var e = !0,
                t = !0,
                n = v(this._element).closest(A)[0];
              if (n) {
                var i = v(this._element).find(S)[0];
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && v(this._element).hasClass(x)) e = !1;
                    else {
                      var r = v(n).find(D)[0];
                      r && v(r).removeClass(x);
                    }
                  if (e) {
                    if (
                      i.hasAttribute("disabled") ||
                      n.hasAttribute("disabled") ||
                      i.classList.contains("disabled") ||
                      n.classList.contains("disabled")
                    )
                      return;
                    (i.checked = !v(this._element).hasClass(x)),
                      v(i).trigger("change");
                  }
                  i.focus(), (t = !1);
                }
              }
              t &&
                this._element.setAttribute(
                  "aria-pressed",
                  !v(this._element).hasClass(x)
                ),
                e && v(this._element).toggleClass(x);
            }),
            (t.dispose = function () {
              v.removeData(this._element, y), (this._element = null);
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = v(this).data(y);
                n || ((n = new e(this)), v(this).data(y, n)),
                  "toggle" === t && n[t]();
              });
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            e
          );
        })()),
        v(document)
          .on(I.CLICK_DATA_API, C, function (e) {
            e.preventDefault();
            var t = e.target;
            v(t).hasClass(E) || (t = v(t).closest(k)),
              N._jQueryInterface.call(v(t), "toggle");
          })
          .on(I.FOCUS_BLUR_DATA_API, C, function (e) {
            var t = v(e.target).closest(k)[0];
            v(t).toggleClass(T, /^focus(in)?$/.test(e.type));
          }),
        (v.fn[g] = N._jQueryInterface),
        (v.fn[g].Constructor = N),
        (v.fn[g].noConflict = function () {
          return (v.fn[g] = w), N._jQueryInterface;
        }),
        N),
      P = (function (e) {
        var t = "carousel",
          n = "bs.carousel",
          i = "." + n,
          a = e.fn[t],
          s = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
          },
          l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
          },
          c = "next",
          u = "prev",
          f = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
            CLICK_DATA_API: "click" + i + ".data-api",
          },
          d = "active",
          p = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]',
          },
          h = (function () {
            function a(t, n) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(n)),
                (this._element = e(t)[0]),
                (this._indicatorsElement = e(this._element).find(
                  p.INDICATORS
                )[0]),
                this._addEventListeners();
            }
            var h = a.prototype;
            return (
              (h.next = function () {
                this._isSliding || this._slide(c);
              }),
              (h.nextWhenVisible = function () {
                !document.hidden &&
                  e(this._element).is(":visible") &&
                  "hidden" !== e(this._element).css("visibility") &&
                  this.next();
              }),
              (h.prev = function () {
                this._isSliding || this._slide(u);
              }),
              (h.pause = function (t) {
                t || (this._isPaused = !0),
                  e(this._element).find(p.NEXT_PREV)[0] &&
                    O.supportsTransitionEnd() &&
                    (O.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (h.cycle = function (e) {
                e || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (h.to = function (t) {
                var n = this;
                this._activeElement = e(this._element).find(p.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                  if (this._isSliding)
                    e(this._element).one(f.SLID, function () {
                      return n.to(t);
                    });
                  else {
                    if (i === t) return this.pause(), void this.cycle();
                    var r = t > i ? c : u;
                    this._slide(r, this._items[t]);
                  }
              }),
              (h.dispose = function () {
                e(this._element).off(i),
                  e.removeData(this._element, n),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (h._getConfig = function (e) {
                return (e = o({}, s, e)), O.typeCheckConfig(t, e, l), e;
              }),
              (h._addEventListeners = function () {
                var t = this;
                this._config.keyboard &&
                  e(this._element).on(f.KEYDOWN, function (e) {
                    return t._keydown(e);
                  }),
                  "hover" === this._config.pause &&
                    (e(this._element)
                      .on(f.MOUSEENTER, function (e) {
                        return t.pause(e);
                      })
                      .on(f.MOUSELEAVE, function (e) {
                        return t.cycle(e);
                      }),
                    "ontouchstart" in document.documentElement &&
                      e(this._element).on(f.TOUCHEND, function () {
                        t.pause(),
                          t.touchTimeout && clearTimeout(t.touchTimeout),
                          (t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e);
                          }, 500 + t._config.interval));
                      }));
              }),
              (h._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName))
                  switch (e.which) {
                    case 37:
                      e.preventDefault(), this.prev();
                      break;
                    case 39:
                      e.preventDefault(), this.next();
                  }
              }),
              (h._getItemIndex = function (t) {
                return (
                  (this._items = e.makeArray(e(t).parent().find(p.ITEM))),
                  this._items.indexOf(t)
                );
              }),
              (h._getItemByDirection = function (e, t) {
                var n = e === c,
                  i = e === u,
                  r = this._getItemIndex(t),
                  o = this._items.length - 1;
                if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                  return t;
                var a = (r + (e === u ? -1 : 1)) % this._items.length;
                return -1 === a
                  ? this._items[this._items.length - 1]
                  : this._items[a];
              }),
              (h._triggerSlideEvent = function (t, n) {
                var i = this._getItemIndex(t),
                  r = this._getItemIndex(
                    e(this._element).find(p.ACTIVE_ITEM)[0]
                  ),
                  o = e.Event(f.SLIDE, {
                    relatedTarget: t,
                    direction: n,
                    from: r,
                    to: i,
                  });
                return e(this._element).trigger(o), o;
              }),
              (h._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                  e(this._indicatorsElement).find(p.ACTIVE).removeClass(d);
                  var n = this._indicatorsElement.children[
                    this._getItemIndex(t)
                  ];
                  n && e(n).addClass(d);
                }
              }),
              (h._slide = function (t, n) {
                var i,
                  r,
                  o,
                  a = this,
                  s = e(this._element).find(p.ACTIVE_ITEM)[0],
                  l = this._getItemIndex(s),
                  u = n || (s && this._getItemByDirection(t, s)),
                  h = this._getItemIndex(u),
                  m = Boolean(this._interval);
                if (
                  (t === c
                    ? ((i = "carousel-item-left"),
                      (r = "carousel-item-next"),
                      (o = "left"))
                    : ((i = "carousel-item-right"),
                      (r = "carousel-item-prev"),
                      (o = "right")),
                  u && e(u).hasClass(d))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(u, o).isDefaultPrevented() &&
                  s &&
                  u
                ) {
                  (this._isSliding = !0),
                    m && this.pause(),
                    this._setActiveIndicatorElement(u);
                  var v = e.Event(f.SLID, {
                    relatedTarget: u,
                    direction: o,
                    from: l,
                    to: h,
                  });
                  O.supportsTransitionEnd() &&
                  e(this._element).hasClass("slide")
                    ? (e(u).addClass(r),
                      O.reflow(u),
                      e(s).addClass(i),
                      e(u).addClass(i),
                      e(s)
                        .one(O.TRANSITION_END, function () {
                          e(u)
                            .removeClass(i + " " + r)
                            .addClass(d),
                            e(s).removeClass(d + " " + r + " " + i),
                            (a._isSliding = !1),
                            setTimeout(function () {
                              return e(a._element).trigger(v);
                            }, 0);
                        })
                        .emulateTransitionEnd(600))
                    : (e(s).removeClass(d),
                      e(u).addClass(d),
                      (this._isSliding = !1),
                      e(this._element).trigger(v)),
                    m && this.cycle();
                }
              }),
              (a._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n),
                    r = o({}, s, e(this).data());
                  "object" == typeof t && (r = o({}, r, t));
                  var l = "string" == typeof t ? t : r.slide;
                  if (
                    (i || ((i = new a(this, r)), e(this).data(n, i)),
                    "number" == typeof t)
                  )
                    i.to(t);
                  else if ("string" == typeof l) {
                    if (void 0 === i[l])
                      throw new TypeError('No method named "' + l + '"');
                    i[l]();
                  } else r.interval && (i.pause(), i.cycle());
                });
              }),
              (a._dataApiClickHandler = function (t) {
                var i = O.getSelectorFromElement(this);
                if (i) {
                  var r = e(i)[0];
                  if (r && e(r).hasClass("carousel")) {
                    var s = o({}, e(r).data(), e(this).data()),
                      l = this.getAttribute("data-slide-to");
                    l && (s.interval = !1),
                      a._jQueryInterface.call(e(r), s),
                      l && e(r).data(n).to(l),
                      t.preventDefault();
                  }
                }
              }),
              r(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return s;
                  },
                },
              ]),
              a
            );
          })();
        return (
          e(document).on(
            f.CLICK_DATA_API,
            p.DATA_SLIDE,
            h._dataApiClickHandler
          ),
          e(window).on(f.LOAD_DATA_API, function () {
            e(p.DATA_RIDE).each(function () {
              var t = e(this);
              h._jQueryInterface.call(t, t.data());
            });
          }),
          (e.fn[t] = h._jQueryInterface),
          (e.fn[t].Constructor = h),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = a), h._jQueryInterface;
          }),
          h
        );
      })(t),
      R = (function (e) {
        var t = "collapse",
          n = "bs.collapse",
          i = "." + n,
          a = e.fn[t],
          s = { toggle: !0, parent: "" },
          l = { toggle: "boolean", parent: "(string|element)" },
          c = {
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            CLICK_DATA_API: "click" + i + ".data-api",
          },
          u = "show",
          f = "collapse",
          d = "collapsing",
          p = "collapsed",
          h = "width",
          m = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]',
          },
          v = (function () {
            function i(t, n) {
              (this._isTransitioning = !1),
                (this._element = t),
                (this._config = this._getConfig(n)),
                (this._triggerArray = e.makeArray(
                  e(
                    '[data-toggle="collapse"][href="#' +
                      t.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      t.id +
                      '"]'
                  )
                ));
              for (var i = e(m.DATA_TOGGLE), r = 0; r < i.length; r++) {
                var o = i[r],
                  a = O.getSelectorFromElement(o);
                null !== a &&
                  e(a).filter(t).length > 0 &&
                  ((this._selector = a), this._triggerArray.push(o));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var a = i.prototype;
            return (
              (a.toggle = function () {
                e(this._element).hasClass(u) ? this.hide() : this.show();
              }),
              (a.show = function () {
                var t,
                  r,
                  o = this;
                if (
                  !(
                    this._isTransitioning ||
                    e(this._element).hasClass(u) ||
                    (this._parent &&
                      0 ===
                        (t = e.makeArray(
                          e(this._parent)
                            .find(m.ACTIVES)
                            .filter(
                              '[data-parent="' + this._config.parent + '"]'
                            )
                        )).length &&
                      (t = null),
                    t &&
                      (r = e(t).not(this._selector).data(n)) &&
                      r._isTransitioning)
                  )
                ) {
                  var a = e.Event(c.SHOW);
                  if ((e(this._element).trigger(a), !a.isDefaultPrevented())) {
                    t &&
                      (i._jQueryInterface.call(
                        e(t).not(this._selector),
                        "hide"
                      ),
                      r || e(t).data(n, null));
                    var s = this._getDimension();
                    e(this._element).removeClass(f).addClass(d),
                      (this._element.style[s] = 0),
                      this._triggerArray.length > 0 &&
                        e(this._triggerArray)
                          .removeClass(p)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var l = function () {
                      e(o._element).removeClass(d).addClass(f).addClass(u),
                        (o._element.style[s] = ""),
                        o.setTransitioning(!1),
                        e(o._element).trigger(c.SHOWN);
                    };
                    if (O.supportsTransitionEnd()) {
                      var h = "scroll" + (s[0].toUpperCase() + s.slice(1));
                      e(this._element)
                        .one(O.TRANSITION_END, l)
                        .emulateTransitionEnd(600),
                        (this._element.style[s] = this._element[h] + "px");
                    } else l();
                  }
                }
              }),
              (a.hide = function () {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass(u)) {
                  var n = e.Event(c.HIDE);
                  if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                    var i = this._getDimension();
                    if (
                      ((this._element.style[i] =
                        this._element.getBoundingClientRect()[i] + "px"),
                      O.reflow(this._element),
                      e(this._element)
                        .addClass(d)
                        .removeClass(f)
                        .removeClass(u),
                      this._triggerArray.length > 0)
                    )
                      for (var r = 0; r < this._triggerArray.length; r++) {
                        var o = this._triggerArray[r],
                          a = O.getSelectorFromElement(o);
                        null !== a &&
                          (e(a).hasClass(u) ||
                            e(o).addClass(p).attr("aria-expanded", !1));
                      }
                    this.setTransitioning(!0);
                    var s = function () {
                      t.setTransitioning(!1),
                        e(t._element)
                          .removeClass(d)
                          .addClass(f)
                          .trigger(c.HIDDEN);
                    };
                    (this._element.style[i] = ""),
                      O.supportsTransitionEnd()
                        ? e(this._element)
                            .one(O.TRANSITION_END, s)
                            .emulateTransitionEnd(600)
                        : s();
                  }
                }
              }),
              (a.setTransitioning = function (e) {
                this._isTransitioning = e;
              }),
              (a.dispose = function () {
                e.removeData(this._element, n),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (a._getConfig = function (e) {
                return (
                  ((e = o({}, s, e)).toggle = Boolean(e.toggle)),
                  O.typeCheckConfig(t, e, l),
                  e
                );
              }),
              (a._getDimension = function () {
                return e(this._element).hasClass(h) ? h : "height";
              }),
              (a._getParent = function () {
                var t = this,
                  n = null;
                O.isElement(this._config.parent)
                  ? ((n = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (n = this._config.parent[0]))
                  : (n = e(this._config.parent)[0]);
                var r =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]';
                return (
                  e(n)
                    .find(r)
                    .each(function (e, n) {
                      t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [
                        n,
                      ]);
                    }),
                  n
                );
              }),
              (a._addAriaAndCollapsedClass = function (t, n) {
                if (t) {
                  var i = e(t).hasClass(u);
                  n.length > 0 &&
                    e(n).toggleClass(p, !i).attr("aria-expanded", i);
                }
              }),
              (i._getTargetFromElement = function (t) {
                var n = O.getSelectorFromElement(t);
                return n ? e(n)[0] : null;
              }),
              (i._jQueryInterface = function (t) {
                return this.each(function () {
                  var r = e(this),
                    a = r.data(n),
                    l = o({}, s, r.data(), "object" == typeof t && t);
                  if (
                    (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1),
                    a || ((a = new i(this, l)), r.data(n, a)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === a[t])
                      throw new TypeError('No method named "' + t + '"');
                    a[t]();
                  }
                });
              }),
              r(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return s;
                  },
                },
              ]),
              i
            );
          })();
        return (
          e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var i = e(this),
              r = O.getSelectorFromElement(this);
            e(r).each(function () {
              var t = e(this),
                r = t.data(n) ? "toggle" : i.data();
              v._jQueryInterface.call(t, r);
            });
          }),
          (e.fn[t] = v._jQueryInterface),
          (e.fn[t].Constructor = v),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = a), v._jQueryInterface;
          }),
          v
        );
      })(t),
      H = (function (e) {
        var t = "dropdown",
          i = "bs.dropdown",
          a = "." + i,
          s = ".data-api",
          l = e.fn[t],
          c = new RegExp("38|40|27"),
          u = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            CLICK: "click" + a,
            CLICK_DATA_API: "click" + a + s,
            KEYDOWN_DATA_API: "keydown" + a + s,
            KEYUP_DATA_API: "keyup" + a + s,
          },
          f = "disabled",
          d = "show",
          p = "dropup",
          h = "dropdown-menu-right",
          m = '[data-toggle="dropdown"]',
          v = ".dropdown-menu",
          g = { offset: 0, flip: !0, boundary: "scrollParent" },
          y = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
          },
          b = (function () {
            function s(e, t) {
              (this._element = e),
                (this._popper = null),
                (this._config = this._getConfig(t)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
            }
            var l = s.prototype;
            return (
              (l.toggle = function () {
                if (!this._element.disabled && !e(this._element).hasClass(f)) {
                  var t = s._getParentFromElement(this._element),
                    i = e(this._menu).hasClass(d);
                  if ((s._clearMenus(), !i)) {
                    var r = { relatedTarget: this._element },
                      o = e.Event(u.SHOW, r);
                    if ((e(t).trigger(o), !o.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === n)
                          throw new TypeError(
                            "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                          );
                        var a = this._element;
                        e(t).hasClass(p) &&
                          (e(this._menu).hasClass("dropdown-menu-left") ||
                            e(this._menu).hasClass(h)) &&
                          (a = t),
                          "scrollParent" !== this._config.boundary &&
                            e(t).addClass("position-static"),
                          (this._popper = new n(
                            a,
                            this._menu,
                            this._getPopperConfig()
                          ));
                      }
                      "ontouchstart" in document.documentElement &&
                        0 === e(t).closest(".navbar-nav").length &&
                        e("body").children().on("mouseover", null, e.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        e(this._menu).toggleClass(d),
                        e(t).toggleClass(d).trigger(e.Event(u.SHOWN, r));
                    }
                  }
                }
              }),
              (l.dispose = function () {
                e.removeData(this._element, i),
                  e(this._element).off(a),
                  (this._element = null),
                  (this._menu = null),
                  null !== this._popper &&
                    (this._popper.destroy(), (this._popper = null));
              }),
              (l.update = function () {
                (this._inNavbar = this._detectNavbar()),
                  null !== this._popper && this._popper.scheduleUpdate();
              }),
              (l._addEventListeners = function () {
                var t = this;
                e(this._element).on(u.CLICK, function (e) {
                  e.preventDefault(), e.stopPropagation(), t.toggle();
                });
              }),
              (l._getConfig = function (n) {
                return (
                  (n = o(
                    {},
                    this.constructor.Default,
                    e(this._element).data(),
                    n
                  )),
                  O.typeCheckConfig(t, n, this.constructor.DefaultType),
                  n
                );
              }),
              (l._getMenuElement = function () {
                if (!this._menu) {
                  var t = s._getParentFromElement(this._element);
                  this._menu = e(t).find(v)[0];
                }
                return this._menu;
              }),
              (l._getPlacement = function () {
                var t = e(this._element).parent(),
                  n = "bottom-start";
                return (
                  t.hasClass(p)
                    ? ((n = "top-start"),
                      e(this._menu).hasClass(h) && (n = "top-end"))
                    : t.hasClass("dropright")
                    ? (n = "right-start")
                    : t.hasClass("dropleft")
                    ? (n = "left-start")
                    : e(this._menu).hasClass(h) && (n = "bottom-end"),
                  n
                );
              }),
              (l._detectNavbar = function () {
                return e(this._element).closest(".navbar").length > 0;
              }),
              (l._getPopperConfig = function () {
                var e = this,
                  t = {};
                return (
                  "function" == typeof this._config.offset
                    ? (t.fn = function (t) {
                        return (
                          (t.offsets = o(
                            {},
                            t.offsets,
                            e._config.offset(t.offsets) || {}
                          )),
                          t
                        );
                      })
                    : (t.offset = this._config.offset),
                  {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: t,
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary,
                      },
                    },
                  }
                );
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = e(this).data(i);
                  if (
                    (n ||
                      ((n = new s(this, "object" == typeof t ? t : null)),
                      e(this).data(i, n)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === n[t])
                      throw new TypeError('No method named "' + t + '"');
                    n[t]();
                  }
                });
              }),
              (s._clearMenus = function (t) {
                if (
                  !t ||
                  (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                )
                  for (var n = e.makeArray(e(m)), r = 0; r < n.length; r++) {
                    var o = s._getParentFromElement(n[r]),
                      a = e(n[r]).data(i),
                      l = { relatedTarget: n[r] };
                    if (a) {
                      var c = a._menu;
                      if (
                        e(o).hasClass(d) &&
                        !(
                          t &&
                          (("click" === t.type &&
                            /input|textarea/i.test(t.target.tagName)) ||
                            ("keyup" === t.type && 9 === t.which)) &&
                          e.contains(o, t.target)
                        )
                      ) {
                        var f = e.Event(u.HIDE, l);
                        e(o).trigger(f),
                          f.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement &&
                              e("body")
                                .children()
                                .off("mouseover", null, e.noop),
                            n[r].setAttribute("aria-expanded", "false"),
                            e(c).removeClass(d),
                            e(o).removeClass(d).trigger(e.Event(u.HIDDEN, l)));
                      }
                    }
                  }
              }),
              (s._getParentFromElement = function (t) {
                var n,
                  i = O.getSelectorFromElement(t);
                return i && (n = e(i)[0]), n || t.parentNode;
              }),
              (s._dataApiKeydownHandler = function (t) {
                if (
                  (/input|textarea/i.test(t.target.tagName)
                    ? !(
                        32 === t.which ||
                        (27 !== t.which &&
                          ((40 !== t.which && 38 !== t.which) ||
                            e(t.target).closest(v).length))
                      )
                    : c.test(t.which)) &&
                  (t.preventDefault(),
                  t.stopPropagation(),
                  !this.disabled && !e(this).hasClass(f))
                ) {
                  var n = s._getParentFromElement(this),
                    i = e(n).hasClass(d);
                  if (
                    (i || (27 === t.which && 32 === t.which)) &&
                    (!i || (27 !== t.which && 32 !== t.which))
                  ) {
                    var r = e(n)
                      .find(".dropdown-menu .dropdown-item:not(.disabled)")
                      .get();
                    if (0 !== r.length) {
                      var o = r.indexOf(t.target);
                      38 === t.which && o > 0 && o--,
                        40 === t.which && o < r.length - 1 && o++,
                        o < 0 && (o = 0),
                        r[o].focus();
                    }
                  } else {
                    if (27 === t.which) {
                      var a = e(n).find(m)[0];
                      e(a).trigger("focus");
                    }
                    e(this).trigger("click");
                  }
                }
              }),
              r(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return g;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return y;
                  },
                },
              ]),
              s
            );
          })();
        return (
          e(document)
            .on(u.KEYDOWN_DATA_API, m, b._dataApiKeydownHandler)
            .on(u.KEYDOWN_DATA_API, v, b._dataApiKeydownHandler)
            .on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, b._clearMenus)
            .on(u.CLICK_DATA_API, m, function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                b._jQueryInterface.call(e(this), "toggle");
            })
            .on(u.CLICK_DATA_API, ".dropdown form", function (e) {
              e.stopPropagation();
            }),
          (e.fn[t] = b._jQueryInterface),
          (e.fn[t].Constructor = b),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = l), b._jQueryInterface;
          }),
          b
        );
      })(t),
      M = (function (e) {
        var t = "bs.modal",
          n = "." + t,
          i = e.fn.modal,
          a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          s = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
          },
          l = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            FOCUSIN: "focusin" + n,
            RESIZE: "resize" + n,
            CLICK_DISMISS: "click.dismiss" + n,
            KEYDOWN_DISMISS: "keydown.dismiss" + n,
            MOUSEUP_DISMISS: "mouseup.dismiss" + n,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
            CLICK_DATA_API: "click" + n + ".data-api",
          },
          c = "modal-open",
          u = "fade",
          f = "show",
          d = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler",
          },
          p = (function () {
            function i(t, n) {
              (this._config = this._getConfig(n)),
                (this._element = t),
                (this._dialog = e(t).find(d.DIALOG)[0]),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._originalBodyPadding = 0),
                (this._scrollbarWidth = 0);
            }
            var p = i.prototype;
            return (
              (p.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e);
              }),
              (p.show = function (t) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                  O.supportsTransitionEnd() &&
                    e(this._element).hasClass(u) &&
                    (this._isTransitioning = !0);
                  var i = e.Event(l.SHOW, { relatedTarget: t });
                  e(this._element).trigger(i),
                    this._isShown ||
                      i.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      e(document.body).addClass(c),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      e(this._element).on(
                        l.CLICK_DISMISS,
                        d.DATA_DISMISS,
                        function (e) {
                          return n.hide(e);
                        }
                      ),
                      e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                        e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
                          e(t.target).is(n._element) &&
                            (n._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function () {
                        return n._showElement(t);
                      }));
                }
              }),
              (p.hide = function (t) {
                var n = this;
                if (
                  (t && t.preventDefault(),
                  !this._isTransitioning && this._isShown)
                ) {
                  var i = e.Event(l.HIDE);
                  if (
                    (e(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented())
                  ) {
                    this._isShown = !1;
                    var r =
                      O.supportsTransitionEnd() && e(this._element).hasClass(u);
                    r && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      e(document).off(l.FOCUSIN),
                      e(this._element).removeClass(f),
                      e(this._element).off(l.CLICK_DISMISS),
                      e(this._dialog).off(l.MOUSEDOWN_DISMISS),
                      r
                        ? e(this._element)
                            .one(O.TRANSITION_END, function (e) {
                              return n._hideModal(e);
                            })
                            .emulateTransitionEnd(300)
                        : this._hideModal();
                  }
                }
              }),
              (p.dispose = function () {
                e.removeData(this._element, t),
                  e(window, document, this._element, this._backdrop).off(n),
                  (this._config = null),
                  (this._element = null),
                  (this._dialog = null),
                  (this._backdrop = null),
                  (this._isShown = null),
                  (this._isBodyOverflowing = null),
                  (this._ignoreBackdropClick = null),
                  (this._scrollbarWidth = null);
              }),
              (p.handleUpdate = function () {
                this._adjustDialog();
              }),
              (p._getConfig = function (e) {
                return (e = o({}, a, e)), O.typeCheckConfig("modal", e, s), e;
              }),
              (p._showElement = function (t) {
                var n = this,
                  i = O.supportsTransitionEnd() && e(this._element).hasClass(u);
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                  document.body.appendChild(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  (this._element.scrollTop = 0),
                  i && O.reflow(this._element),
                  e(this._element).addClass(f),
                  this._config.focus && this._enforceFocus();
                var r = e.Event(l.SHOWN, { relatedTarget: t }),
                  o = function () {
                    n._config.focus && n._element.focus(),
                      (n._isTransitioning = !1),
                      e(n._element).trigger(r);
                  };
                i
                  ? e(this._dialog)
                      .one(O.TRANSITION_END, o)
                      .emulateTransitionEnd(300)
                  : o();
              }),
              (p._enforceFocus = function () {
                var t = this;
                e(document)
                  .off(l.FOCUSIN)
                  .on(l.FOCUSIN, function (n) {
                    document !== n.target &&
                      t._element !== n.target &&
                      0 === e(t._element).has(n.target).length &&
                      t._element.focus();
                  });
              }),
              (p._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard
                  ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
                      27 === e.which && (e.preventDefault(), t.hide());
                    })
                  : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS);
              }),
              (p._setResizeEvent = function () {
                var t = this;
                this._isShown
                  ? e(window).on(l.RESIZE, function (e) {
                      return t.handleUpdate(e);
                    })
                  : e(window).off(l.RESIZE);
              }),
              (p._hideModal = function () {
                var t = this;
                (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function () {
                    e(document.body).removeClass(c),
                      t._resetAdjustments(),
                      t._resetScrollbar(),
                      e(t._element).trigger(l.HIDDEN);
                  });
              }),
              (p._removeBackdrop = function () {
                this._backdrop &&
                  (e(this._backdrop).remove(), (this._backdrop = null));
              }),
              (p._showBackdrop = function (t) {
                var n = this,
                  i = e(this._element).hasClass(u) ? u : "";
                if (this._isShown && this._config.backdrop) {
                  var r = O.supportsTransitionEnd() && i;
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = "modal-backdrop"),
                    i && e(this._backdrop).addClass(i),
                    e(this._backdrop).appendTo(document.body),
                    e(this._element).on(l.CLICK_DISMISS, function (e) {
                      n._ignoreBackdropClick
                        ? (n._ignoreBackdropClick = !1)
                        : e.target === e.currentTarget &&
                          ("static" === n._config.backdrop
                            ? n._element.focus()
                            : n.hide());
                    }),
                    r && O.reflow(this._backdrop),
                    e(this._backdrop).addClass(f),
                    !t)
                  )
                    return;
                  if (!r) return void t();
                  e(this._backdrop)
                    .one(O.TRANSITION_END, t)
                    .emulateTransitionEnd(150);
                } else if (!this._isShown && this._backdrop) {
                  e(this._backdrop).removeClass(f);
                  var o = function () {
                    n._removeBackdrop(), t && t();
                  };
                  O.supportsTransitionEnd() && e(this._element).hasClass(u)
                    ? e(this._backdrop)
                        .one(O.TRANSITION_END, o)
                        .emulateTransitionEnd(150)
                    : o();
                } else t && t();
              }),
              (p._adjustDialog = function () {
                var e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight;
                !this._isBodyOverflowing &&
                  e &&
                  (this._element.style.paddingLeft =
                    this._scrollbarWidth + "px"),
                  this._isBodyOverflowing &&
                    !e &&
                    (this._element.style.paddingRight =
                      this._scrollbarWidth + "px");
              }),
              (p._resetAdjustments = function () {
                (this._element.style.paddingLeft = ""),
                  (this._element.style.paddingRight = "");
              }),
              (p._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                (this._isBodyOverflowing =
                  e.left + e.right < window.innerWidth),
                  (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (p._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                  e(d.FIXED_CONTENT).each(function (n, i) {
                    var r = e(i)[0].style.paddingRight,
                      o = e(i).css("padding-right");
                    e(i)
                      .data("padding-right", r)
                      .css(
                        "padding-right",
                        parseFloat(o) + t._scrollbarWidth + "px"
                      );
                  }),
                    e(d.STICKY_CONTENT).each(function (n, i) {
                      var r = e(i)[0].style.marginRight,
                        o = e(i).css("margin-right");
                      e(i)
                        .data("margin-right", r)
                        .css(
                          "margin-right",
                          parseFloat(o) - t._scrollbarWidth + "px"
                        );
                    }),
                    e(d.NAVBAR_TOGGLER).each(function (n, i) {
                      var r = e(i)[0].style.marginRight,
                        o = e(i).css("margin-right");
                      e(i)
                        .data("margin-right", r)
                        .css(
                          "margin-right",
                          parseFloat(o) + t._scrollbarWidth + "px"
                        );
                    });
                  var n = document.body.style.paddingRight,
                    i = e("body").css("padding-right");
                  e("body")
                    .data("padding-right", n)
                    .css(
                      "padding-right",
                      parseFloat(i) + this._scrollbarWidth + "px"
                    );
                }
              }),
              (p._resetScrollbar = function () {
                e(d.FIXED_CONTENT).each(function (t, n) {
                  var i = e(n).data("padding-right");
                  void 0 !== i &&
                    e(n).css("padding-right", i).removeData("padding-right");
                }),
                  e(d.STICKY_CONTENT + ", " + d.NAVBAR_TOGGLER).each(function (
                    t,
                    n
                  ) {
                    var i = e(n).data("margin-right");
                    void 0 !== i &&
                      e(n).css("margin-right", i).removeData("margin-right");
                  });
                var t = e("body").data("padding-right");
                void 0 !== t &&
                  e("body").css("padding-right", t).removeData("padding-right");
              }),
              (p._getScrollbarWidth = function () {
                var e = document.createElement("div");
                (e.className = "modal-scrollbar-measure"),
                  document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t;
              }),
              (i._jQueryInterface = function (n, r) {
                return this.each(function () {
                  var a = e(this).data(t),
                    s = o(
                      {},
                      i.Default,
                      e(this).data(),
                      "object" == typeof n && n
                    );
                  if (
                    (a || ((a = new i(this, s)), e(this).data(t, a)),
                    "string" == typeof n)
                  ) {
                    if (void 0 === a[n])
                      throw new TypeError('No method named "' + n + '"');
                    a[n](r);
                  } else s.show && a.show(r);
                });
              }),
              r(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              i
            );
          })();
        return (
          e(document).on(l.CLICK_DATA_API, d.DATA_TOGGLE, function (n) {
            var i,
              r = this,
              a = O.getSelectorFromElement(this);
            a && (i = e(a)[0]);
            var s = e(i).data(t)
              ? "toggle"
              : o({}, e(i).data(), e(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
              n.preventDefault();
            var c = e(i).one(l.SHOW, function (t) {
              t.isDefaultPrevented() ||
                c.one(l.HIDDEN, function () {
                  e(r).is(":visible") && r.focus();
                });
            });
            p._jQueryInterface.call(e(i), s, this);
          }),
          (e.fn.modal = p._jQueryInterface),
          (e.fn.modal.Constructor = p),
          (e.fn.modal.noConflict = function () {
            return (e.fn.modal = i), p._jQueryInterface;
          }),
          p
        );
      })(t),
      q = (function (e) {
        var t = "tooltip",
          i = "bs.tooltip",
          a = "." + i,
          s = e.fn[t],
          l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
          },
          u = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
          },
          f = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
          },
          d = "show",
          p = "out",
          h = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            INSERTED: "inserted" + a,
            CLICK: "click" + a,
            FOCUSIN: "focusin" + a,
            FOCUSOUT: "focusout" + a,
            MOUSEENTER: "mouseenter" + a,
            MOUSELEAVE: "mouseleave" + a,
          },
          m = "fade",
          v = "show",
          g = "hover",
          y = "focus",
          b = (function () {
            function s(e, t) {
              if (void 0 === n)
                throw new TypeError(
                  "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                );
              (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this.element = e),
                (this.config = this._getConfig(t)),
                (this.tip = null),
                this._setListeners();
            }
            var b = s.prototype;
            return (
              (b.enable = function () {
                this._isEnabled = !0;
              }),
              (b.disable = function () {
                this._isEnabled = !1;
              }),
              (b.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
              }),
              (b.toggle = function (t) {
                if (this._isEnabled)
                  if (t) {
                    var n = this.constructor.DATA_KEY,
                      i = e(t.currentTarget).data(n);
                    i ||
                      ((i = new this.constructor(
                        t.currentTarget,
                        this._getDelegateConfig()
                      )),
                      e(t.currentTarget).data(n, i)),
                      (i._activeTrigger.click = !i._activeTrigger.click),
                      i._isWithActiveTrigger()
                        ? i._enter(null, i)
                        : i._leave(null, i);
                  } else {
                    if (e(this.getTipElement()).hasClass(v))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }),
              (b.dispose = function () {
                clearTimeout(this._timeout),
                  e.removeData(this.element, this.constructor.DATA_KEY),
                  e(this.element).off(this.constructor.EVENT_KEY),
                  e(this.element).closest(".modal").off("hide.bs.modal"),
                  this.tip && e(this.tip).remove(),
                  (this._isEnabled = null),
                  (this._timeout = null),
                  (this._hoverState = null),
                  (this._activeTrigger = null),
                  null !== this._popper && this._popper.destroy(),
                  (this._popper = null),
                  (this.element = null),
                  (this.config = null),
                  (this.tip = null);
              }),
              (b.show = function () {
                var t = this;
                if ("none" === e(this.element).css("display"))
                  throw new Error("Please use show on visible elements");
                var i = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  e(this.element).trigger(i);
                  var r = e.contains(
                    this.element.ownerDocument.documentElement,
                    this.element
                  );
                  if (i.isDefaultPrevented() || !r) return;
                  var o = this.getTipElement(),
                    a = O.getUID(this.constructor.NAME);
                  o.setAttribute("id", a),
                    this.element.setAttribute("aria-describedby", a),
                    this.setContent(),
                    this.config.animation && e(o).addClass(m);
                  var l =
                      "function" == typeof this.config.placement
                        ? this.config.placement.call(this, o, this.element)
                        : this.config.placement,
                    c = this._getAttachment(l);
                  this.addAttachmentClass(c);
                  var u =
                    !1 === this.config.container
                      ? document.body
                      : e(this.config.container);
                  e(o).data(this.constructor.DATA_KEY, this),
                    e.contains(
                      this.element.ownerDocument.documentElement,
                      this.tip
                    ) || e(o).appendTo(u),
                    e(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new n(this.element, o, {
                      placement: c,
                      modifiers: {
                        offset: { offset: this.config.offset },
                        flip: { behavior: this.config.fallbackPlacement },
                        arrow: { element: ".arrow" },
                        preventOverflow: {
                          boundariesElement: this.config.boundary,
                        },
                      },
                      onCreate: function (e) {
                        e.originalPlacement !== e.placement &&
                          t._handlePopperPlacementChange(e);
                      },
                      onUpdate: function (e) {
                        t._handlePopperPlacementChange(e);
                      },
                    })),
                    e(o).addClass(v),
                    "ontouchstart" in document.documentElement &&
                      e("body").children().on("mouseover", null, e.noop);
                  var f = function () {
                    t.config.animation && t._fixTransition();
                    var n = t._hoverState;
                    (t._hoverState = null),
                      e(t.element).trigger(t.constructor.Event.SHOWN),
                      n === p && t._leave(null, t);
                  };
                  O.supportsTransitionEnd() && e(this.tip).hasClass(m)
                    ? e(this.tip)
                        .one(O.TRANSITION_END, f)
                        .emulateTransitionEnd(s._TRANSITION_DURATION)
                    : f();
                }
              }),
              (b.hide = function (t) {
                var n = this,
                  i = this.getTipElement(),
                  r = e.Event(this.constructor.Event.HIDE),
                  o = function () {
                    n._hoverState !== d &&
                      i.parentNode &&
                      i.parentNode.removeChild(i),
                      n._cleanTipClass(),
                      n.element.removeAttribute("aria-describedby"),
                      e(n.element).trigger(n.constructor.Event.HIDDEN),
                      null !== n._popper && n._popper.destroy(),
                      t && t();
                  };
                e(this.element).trigger(r),
                  r.isDefaultPrevented() ||
                    (e(i).removeClass(v),
                    "ontouchstart" in document.documentElement &&
                      e("body").children().off("mouseover", null, e.noop),
                    (this._activeTrigger.click = !1),
                    (this._activeTrigger[y] = !1),
                    (this._activeTrigger[g] = !1),
                    O.supportsTransitionEnd() && e(this.tip).hasClass(m)
                      ? e(i).one(O.TRANSITION_END, o).emulateTransitionEnd(150)
                      : o(),
                    (this._hoverState = ""));
              }),
              (b.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
              }),
              (b.isWithContent = function () {
                return Boolean(this.getTitle());
              }),
              (b.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t);
              }),
              (b.getTipElement = function () {
                return (
                  (this.tip = this.tip || e(this.config.template)[0]), this.tip
                );
              }),
              (b.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(
                  t.find(".tooltip-inner"),
                  this.getTitle()
                ),
                  t.removeClass(m + " " + v);
              }),
              (b.setElementContent = function (t, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery)
                  ? i
                    ? e(n).parent().is(t) || t.empty().append(n)
                    : t.text(e(n).text())
                  : t[i ? "html" : "text"](n);
              }),
              (b.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return (
                  e ||
                    (e =
                      "function" == typeof this.config.title
                        ? this.config.title.call(this.element)
                        : this.config.title),
                  e
                );
              }),
              (b._getAttachment = function (e) {
                return u[e.toUpperCase()];
              }),
              (b._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach(function (n) {
                  if ("click" === n)
                    e(t.element).on(
                      t.constructor.Event.CLICK,
                      t.config.selector,
                      function (e) {
                        return t.toggle(e);
                      }
                    );
                  else if ("manual" !== n) {
                    var i =
                        n === g
                          ? t.constructor.Event.MOUSEENTER
                          : t.constructor.Event.FOCUSIN,
                      r =
                        n === g
                          ? t.constructor.Event.MOUSELEAVE
                          : t.constructor.Event.FOCUSOUT;
                    e(t.element)
                      .on(i, t.config.selector, function (e) {
                        return t._enter(e);
                      })
                      .on(r, t.config.selector, function (e) {
                        return t._leave(e);
                      });
                  }
                  e(t.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function () {
                      return t.hide();
                    });
                }),
                  this.config.selector
                    ? (this.config = o({}, this.config, {
                        trigger: "manual",
                        selector: "",
                      }))
                    : this._fixTitle();
              }),
              (b._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) &&
                  (this.element.setAttribute(
                    "data-original-title",
                    this.element.getAttribute("title") || ""
                  ),
                  this.element.setAttribute("title", ""));
              }),
              (b._enter = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  e(t.currentTarget).data(i, n)),
                  t && (n._activeTrigger["focusin" === t.type ? y : g] = !0),
                  e(n.getTipElement()).hasClass(v) || n._hoverState === d
                    ? (n._hoverState = d)
                    : (clearTimeout(n._timeout),
                      (n._hoverState = d),
                      n.config.delay && n.config.delay.show
                        ? (n._timeout = setTimeout(function () {
                            n._hoverState === d && n.show();
                          }, n.config.delay.show))
                        : n.show());
              }),
              (b._leave = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  e(t.currentTarget).data(i, n)),
                  t && (n._activeTrigger["focusout" === t.type ? y : g] = !1),
                  n._isWithActiveTrigger() ||
                    (clearTimeout(n._timeout),
                    (n._hoverState = p),
                    n.config.delay && n.config.delay.hide
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === p && n.hide();
                        }, n.config.delay.hide))
                      : n.hide());
              }),
              (b._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                  if (this._activeTrigger[e]) return !0;
                return !1;
              }),
              (b._getConfig = function (n) {
                return (
                  "number" ==
                    typeof (n = o(
                      {},
                      this.constructor.Default,
                      e(this.element).data(),
                      n
                    )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                  "number" == typeof n.title && (n.title = n.title.toString()),
                  "number" == typeof n.content &&
                    (n.content = n.content.toString()),
                  O.typeCheckConfig(t, n, this.constructor.DefaultType),
                  n
                );
              }),
              (b._getDelegateConfig = function () {
                var e = {};
                if (this.config)
                  for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] &&
                      (e[t] = this.config[t]);
                return e;
              }),
              (b._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                  n = t.attr("class").match(l);
                null !== n && n.length > 0 && t.removeClass(n.join(""));
              }),
              (b._handlePopperPlacementChange = function (e) {
                this._cleanTipClass(),
                  this.addAttachmentClass(this._getAttachment(e.placement));
              }),
              (b._fixTransition = function () {
                var t = this.getTipElement(),
                  n = this.config.animation;
                null === t.getAttribute("x-placement") &&
                  (e(t).removeClass(m),
                  (this.config.animation = !1),
                  this.hide(),
                  this.show(),
                  (this.config.animation = n));
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = e(this).data(i),
                    r = "object" == typeof t && t;
                  if (
                    (n || !/dispose|hide/.test(t)) &&
                    (n || ((n = new s(this, r)), e(this).data(i, n)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === n[t])
                      throw new TypeError('No method named "' + t + '"');
                    n[t]();
                  }
                });
              }),
              r(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return f;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return t;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return i;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return h;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return a;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return c;
                  },
                },
              ]),
              s
            );
          })();
        return (
          (e.fn[t] = b._jQueryInterface),
          (e.fn[t].Constructor = b),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), b._jQueryInterface;
          }),
          b
        );
      })(t),
      F = (function (e) {
        var t = "popover",
          n = "bs.popover",
          i = "." + n,
          a = e.fn[t],
          s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          l = o({}, q.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          }),
          c = o({}, q.DefaultType, { content: "(string|element|function)" }),
          u = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
          },
          f = (function (o) {
            function a() {
              return o.apply(this, arguments) || this;
            }
            var f, d;
            (d = o),
              ((f = a).prototype = Object.create(d.prototype)),
              (f.prototype.constructor = f),
              (f.__proto__ = d);
            var p = a.prototype;
            return (
              (p.isWithContent = function () {
                return this.getTitle() || this._getContent();
              }),
              (p.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-popover-" + t);
              }),
              (p.getTipElement = function () {
                return (
                  (this.tip = this.tip || e(this.config.template)[0]), this.tip
                );
              }),
              (p.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(
                  t.find(".popover-header"),
                  this.getTitle()
                );
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)),
                  this.setElementContent(t.find(".popover-body"), n),
                  t.removeClass("fade show");
              }),
              (p._getContent = function () {
                return (
                  this.element.getAttribute("data-content") ||
                  this.config.content
                );
              }),
              (p._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                  n = t.attr("class").match(s);
                null !== n && n.length > 0 && t.removeClass(n.join(""));
              }),
              (a._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n),
                    r = "object" == typeof t ? t : null;
                  if (
                    (i || !/destroy|hide/.test(t)) &&
                    (i || ((i = new a(this, r)), e(this).data(n, i)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === i[t])
                      throw new TypeError('No method named "' + t + '"');
                    i[t]();
                  }
                });
              }),
              r(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return l;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return t;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return n;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return u;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return i;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return c;
                  },
                },
              ]),
              a
            );
          })(q);
        return (
          (e.fn[t] = f._jQueryInterface),
          (e.fn[t].Constructor = f),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = a), f._jQueryInterface;
          }),
          f
        );
      })(t),
      W = (function (e) {
        var t = "scrollspy",
          n = "bs.scrollspy",
          i = "." + n,
          a = e.fn[t],
          s = { offset: 10, method: "auto", target: "" },
          l = {
            offset: "number",
            method: "string",
            target: "(string|element)",
          },
          c = {
            ACTIVATE: "activate" + i,
            SCROLL: "scroll" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
          },
          u = "active",
          f = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle",
          },
          d = "position",
          p = (function () {
            function a(t, n) {
              var i = this;
              (this._element = t),
                (this._scrollElement = "BODY" === t.tagName ? window : t),
                (this._config = this._getConfig(n)),
                (this._selector =
                  this._config.target +
                  " " +
                  f.NAV_LINKS +
                  "," +
                  this._config.target +
                  " " +
                  f.LIST_ITEMS +
                  "," +
                  this._config.target +
                  " " +
                  f.DROPDOWN_ITEMS),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                e(this._scrollElement).on(c.SCROLL, function (e) {
                  return i._process(e);
                }),
                this.refresh(),
                this._process();
            }
            var p = a.prototype;
            return (
              (p.refresh = function () {
                var t = this,
                  n =
                    this._scrollElement === this._scrollElement.window
                      ? "offset"
                      : d,
                  i = "auto" === this._config.method ? n : this._config.method,
                  r = i === d ? this._getScrollTop() : 0;
                (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  e
                    .makeArray(e(this._selector))
                    .map(function (t) {
                      var n,
                        o = O.getSelectorFromElement(t);
                      if ((o && (n = e(o)[0]), n)) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height) return [e(n)[i]().top + r, o];
                      }
                      return null;
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .sort(function (e, t) {
                      return e[0] - t[0];
                    })
                    .forEach(function (e) {
                      t._offsets.push(e[0]), t._targets.push(e[1]);
                    });
              }),
              (p.dispose = function () {
                e.removeData(this._element, n),
                  e(this._scrollElement).off(i),
                  (this._element = null),
                  (this._scrollElement = null),
                  (this._config = null),
                  (this._selector = null),
                  (this._offsets = null),
                  (this._targets = null),
                  (this._activeTarget = null),
                  (this._scrollHeight = null);
              }),
              (p._getConfig = function (n) {
                if ("string" != typeof (n = o({}, s, n)).target) {
                  var i = e(n.target).attr("id");
                  i || ((i = O.getUID(t)), e(n.target).attr("id", i)),
                    (n.target = "#" + i);
                }
                return O.typeCheckConfig(t, n, l), n;
              }),
              (p._getScrollTop = function () {
                return this._scrollElement === window
                  ? this._scrollElement.pageYOffset
                  : this._scrollElement.scrollTop;
              }),
              (p._getScrollHeight = function () {
                return (
                  this._scrollElement.scrollHeight ||
                  Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  )
                );
              }),
              (p._getOffsetHeight = function () {
                return this._scrollElement === window
                  ? window.innerHeight
                  : this._scrollElement.getBoundingClientRect().height;
              }),
              (p._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight();
                if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                  var i = this._targets[this._targets.length - 1];
                  this._activeTarget !== i && this._activate(i);
                } else {
                  if (
                    this._activeTarget &&
                    e < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var r = this._offsets.length; r--; )
                    this._activeTarget !== this._targets[r] &&
                      e >= this._offsets[r] &&
                      (void 0 === this._offsets[r + 1] ||
                        e < this._offsets[r + 1]) &&
                      this._activate(this._targets[r]);
                }
              }),
              (p._activate = function (t) {
                (this._activeTarget = t), this._clear();
                var n = this._selector.split(",");
                n = n.map(function (e) {
                  return (
                    e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                  );
                });
                var i = e(n.join(","));
                i.hasClass("dropdown-item")
                  ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),
                    i.addClass(u))
                  : (i.addClass(u),
                    i
                      .parents(f.NAV_LIST_GROUP)
                      .prev(f.NAV_LINKS + ", " + f.LIST_ITEMS)
                      .addClass(u),
                    i
                      .parents(f.NAV_LIST_GROUP)
                      .prev(f.NAV_ITEMS)
                      .children(f.NAV_LINKS)
                      .addClass(u)),
                  e(this._scrollElement).trigger(c.ACTIVATE, {
                    relatedTarget: t,
                  });
              }),
              (p._clear = function () {
                e(this._selector).filter(f.ACTIVE).removeClass(u);
              }),
              (a._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n);
                  if (
                    (i ||
                      ((i = new a(this, "object" == typeof t && t)),
                      e(this).data(n, i)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === i[t])
                      throw new TypeError('No method named "' + t + '"');
                    i[t]();
                  }
                });
              }),
              r(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return s;
                  },
                },
              ]),
              a
            );
          })();
        return (
          e(window).on(c.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--; ) {
              var i = e(t[n]);
              p._jQueryInterface.call(i, i.data());
            }
          }),
          (e.fn[t] = p._jQueryInterface),
          (e.fn[t].Constructor = p),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = a), p._jQueryInterface;
          }),
          p
        );
      })(t),
      B = (function (e) {
        var t = "bs.tab",
          n = "." + t,
          i = e.fn.tab,
          o = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK_DATA_API: "click.bs.tab.data-api",
          },
          a = "active",
          s = "show",
          l = ".active",
          c = "> li > .active",
          u = (function () {
            function n(e) {
              this._element = e;
            }
            var i = n.prototype;
            return (
              (i.show = function () {
                var t = this;
                if (
                  !(
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                      e(this._element).hasClass(a)) ||
                    e(this._element).hasClass("disabled")
                  )
                ) {
                  var n,
                    i,
                    r = e(this._element).closest(".nav, .list-group")[0],
                    s = O.getSelectorFromElement(this._element);
                  if (r) {
                    var u = "UL" === r.nodeName ? c : l;
                    i = (i = e.makeArray(e(r).find(u)))[i.length - 1];
                  }
                  var f = e.Event(o.HIDE, { relatedTarget: this._element }),
                    d = e.Event(o.SHOW, { relatedTarget: i });
                  if (
                    (i && e(i).trigger(f),
                    e(this._element).trigger(d),
                    !d.isDefaultPrevented() && !f.isDefaultPrevented())
                  ) {
                    s && (n = e(s)[0]), this._activate(this._element, r);
                    var p = function () {
                      var n = e.Event(o.HIDDEN, { relatedTarget: t._element }),
                        r = e.Event(o.SHOWN, { relatedTarget: i });
                      e(i).trigger(n), e(t._element).trigger(r);
                    };
                    n ? this._activate(n, n.parentNode, p) : p();
                  }
                }
              }),
              (i.dispose = function () {
                e.removeData(this._element, t), (this._element = null);
              }),
              (i._activate = function (t, n, i) {
                var r = this,
                  o = ("UL" === n.nodeName
                    ? e(n).find(c)
                    : e(n).children(l))[0],
                  a =
                    i &&
                    O.supportsTransitionEnd() &&
                    o &&
                    e(o).hasClass("fade"),
                  s = function () {
                    return r._transitionComplete(t, o, i);
                  };
                o && a
                  ? e(o).one(O.TRANSITION_END, s).emulateTransitionEnd(150)
                  : s();
              }),
              (i._transitionComplete = function (t, n, i) {
                if (n) {
                  e(n).removeClass(s + " " + a);
                  var r = e(n.parentNode).find("> .dropdown-menu .active")[0];
                  r && e(r).removeClass(a),
                    "tab" === n.getAttribute("role") &&
                      n.setAttribute("aria-selected", !1);
                }
                if (
                  (e(t).addClass(a),
                  "tab" === t.getAttribute("role") &&
                    t.setAttribute("aria-selected", !0),
                  O.reflow(t),
                  e(t).addClass(s),
                  t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
                ) {
                  var o = e(t).closest(".dropdown")[0];
                  o && e(o).find(".dropdown-toggle").addClass(a),
                    t.setAttribute("aria-expanded", !0);
                }
                i && i();
              }),
              (n._jQueryInterface = function (i) {
                return this.each(function () {
                  var r = e(this),
                    o = r.data(t);
                  if (
                    (o || ((o = new n(this)), r.data(t, o)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === o[i])
                      throw new TypeError('No method named "' + i + '"');
                    o[i]();
                  }
                });
              }),
              r(n, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
              ]),
              n
            );
          })();
        return (
          e(document).on(
            o.CLICK_DATA_API,
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function (t) {
              t.preventDefault(), u._jQueryInterface.call(e(this), "show");
            }
          ),
          (e.fn.tab = u._jQueryInterface),
          (e.fn.tab.Constructor = u),
          (e.fn.tab.noConflict = function () {
            return (e.fn.tab = i), u._jQueryInterface;
          }),
          u
        );
      })(t);
    !(function (e) {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(t),
      (e.Util = O),
      (e.Alert = j),
      (e.Button = L),
      (e.Carousel = P),
      (e.Collapse = R),
      (e.Dropdown = H),
      (e.Modal = M),
      (e.Popover = F),
      (e.Scrollspy = W),
      (e.Tab = B),
      (e.Tooltip = q),
      Object.defineProperty(e, "__esModule", { value: !0 });
  });
var pJS = function (e, t) {
  var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: n, w: n.offsetWidth, h: n.offsetHeight },
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
  t && Object.deepExtend(i, t),
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
    (i.fn.particle = function (e, t, n) {
      if (
        ((this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
        i.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = i.particles.size.anim.speed / 100),
          i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = n ? n.x : Math.random() * i.canvas.w),
        (this.y = n ? n.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, n),
        (this.color = {}),
        "object" == typeof e.value)
      )
        if (e.value instanceof Array) {
          var r =
            e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(r);
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
      var o = {};
      switch (i.particles.move.direction) {
        case "top":
          o = { x: 0, y: -1 };
          break;
        case "top-right":
          o = { x: 0.5, y: -0.5 };
          break;
        case "right":
          o = { x: 1, y: -0 };
          break;
        case "bottom-right":
          o = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          o = { x: 0, y: 1 };
          break;
        case "bottom-left":
          o = { x: -0.5, y: 1 };
          break;
        case "left":
          o = { x: -1, y: 0 };
          break;
        case "top-left":
          o = { x: -0.5, y: -0.5 };
          break;
        default:
          o = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = o.x),
          (this.vy = o.y),
          i.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = o.x + Math.random() - 0.5),
          (this.vy = o.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var a = i.particles.shape.type;
      if ("object" == typeof a) {
        if (a instanceof Array) {
          var s = a[Math.floor(Math.random() * a.length)];
          this.shape = s;
        }
      } else this.shape = a;
      if ("image" == this.shape) {
        var l = i.particles.shape;
        (this.img = {
          src: l.image.src,
          ratio: l.image.width / l.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == i.tmp.img_type &&
            void 0 != i.tmp.source_svg &&
            (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function () {
      var e = this;
      if (void 0 != e.radius_bubble) var t = e.radius_bubble;
      else var t = e.radius;
      if (void 0 != e.opacity_bubble) var n = e.opacity_bubble;
      else var n = e.opacity;
      if (e.color.rgb)
        var r =
          "rgba(" +
          e.color.rgb.r +
          "," +
          e.color.rgb.g +
          "," +
          e.color.rgb.b +
          "," +
          n +
          ")";
      else
        var r =
          "hsla(" +
          e.color.hsl.h +
          "," +
          e.color.hsl.s +
          "%," +
          e.color.hsl.l +
          "%," +
          n +
          ")";
      switch (
        ((i.canvas.ctx.fillStyle = r), i.canvas.ctx.beginPath(), e.shape)
      ) {
        case "circle":
          i.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          i.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
          break;
        case "triangle":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - t,
            e.y + t / 1.66,
            2 * t,
            3,
            2
          );
          break;
        case "polygon":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - t / (i.particles.shape.polygon.nb_sides / 3.5),
            e.y - t / 0.76,
            (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4),
            e.y - t / 1.52,
            (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == i.tmp.img_type) var o = e.img.obj;
          else var o = i.tmp.img_obj;
          o &&
            (function () {
              i.canvas.ctx.drawImage(
                o,
                e.x - t,
                e.y - t,
                2 * t,
                (2 * t) / e.img.ratio
              );
            })();
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
        var t = i.particles.array[e];
        if (i.particles.move.enable) {
          var n = i.particles.move.speed / 2;
          (t.x += t.vx * n), (t.y += t.vy * n);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (1 == t.opacity_status
              ? (t.opacity >= i.particles.opacity.value &&
                  (t.opacity_status = !1),
                (t.opacity += t.vo))
              : (t.opacity <= i.particles.opacity.anim.opacity_min &&
                  (t.opacity_status = !0),
                (t.opacity -= t.vo)),
            t.opacity < 0 && (t.opacity = 0)),
          i.particles.size.anim.enable &&
            (1 == t.size_status
              ? (t.radius >= i.particles.size.value && (t.size_status = !1),
                (t.radius += t.vs))
              : (t.radius <= i.particles.size.anim.size_min &&
                  (t.size_status = !0),
                (t.radius -= t.vs)),
            t.radius < 0 && (t.radius = 0)),
          "bounce" == i.particles.move.out_mode)
        )
          var r = {
            x_left: t.radius,
            x_right: i.canvas.w,
            y_top: t.radius,
            y_bottom: i.canvas.h,
          };
        else
          var r = {
            x_left: -t.radius,
            x_right: i.canvas.w + t.radius,
            y_top: -t.radius,
            y_bottom: i.canvas.h + t.radius,
          };
        switch (
          (t.x - t.radius > i.canvas.w
            ? ((t.x = r.x_left), (t.y = Math.random() * i.canvas.h))
            : t.x + t.radius < 0 &&
              ((t.x = r.x_right), (t.y = Math.random() * i.canvas.h)),
          t.y - t.radius > i.canvas.h
            ? ((t.y = r.y_top), (t.x = Math.random() * i.canvas.w))
            : t.y + t.radius < 0 &&
              ((t.y = r.y_bottom), (t.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case "bounce":
            t.x + t.radius > i.canvas.w
              ? (t.vx = -t.vx)
              : t.x - t.radius < 0 && (t.vx = -t.vx),
              t.y + t.radius > i.canvas.h
                ? (t.vy = -t.vy)
                : t.y - t.radius < 0 && (t.vy = -t.vy);
        }
        if (
          (isInArray("grab", i.interactivity.events.onhover.mode) &&
            i.fn.modes.grabParticle(t),
          (isInArray("bubble", i.interactivity.events.onhover.mode) ||
            isInArray("bubble", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.bubbleParticle(t),
          (isInArray("repulse", i.interactivity.events.onhover.mode) ||
            isInArray("repulse", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.repulseParticle(t),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (var o = e + 1; o < i.particles.array.length; o++) {
            var a = i.particles.array[o];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(t, a),
              i.particles.move.attract.enable &&
                i.fn.interact.attractParticles(t, a),
              i.particles.move.bounce && i.fn.interact.bounceParticles(t, a);
          }
      }
    }),
    (i.fn.particlesDraw = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++) {
        i.particles.array[e].draw();
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
    (i.fn.interact.linkParticles = function (e, t) {
      var n = e.x - t.x,
        r = e.y - t.y,
        o = Math.sqrt(n * n + r * r);
      if (o <= i.particles.line_linked.distance) {
        var a =
          i.particles.line_linked.opacity -
          o /
            (1 / i.particles.line_linked.opacity) /
            i.particles.line_linked.distance;
        if (a > 0) {
          var s = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle =
            "rgba(" + s.r + "," + s.g + "," + s.b + "," + a + ")"),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(t.x, t.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function (e, t) {
      var n = e.x - t.x,
        r = e.y - t.y;
      if (Math.sqrt(n * n + r * r) <= i.particles.line_linked.distance) {
        var o = n / (1e3 * i.particles.move.attract.rotateX),
          a = r / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= o), (e.vy -= a), (t.vx += o), (t.vy += a);
      }
    }),
    (i.fn.interact.bounceParticles = function (e, t) {
      var n = e.x - t.x,
        i = e.y - t.y;
      Math.sqrt(n * n + i * i) <= e.radius + t.radius &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
    }),
    (i.fn.modes.pushParticles = function (e, t) {
      i.tmp.pushing = !0;
      for (var n = 0; n < e; n++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * i.canvas.w,
            y: t ? t.pos_y : Math.random() * i.canvas.h,
          })
        ),
          n == e - 1 &&
            (i.particles.move.enable || i.fn.particlesDraw(),
            (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function (e) {
      i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function (e) {
      function t() {
        (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
      }
      function n(t, n, r, o, s) {
        if (t != n)
          if (i.tmp.bubble_duration_end) {
            if (void 0 != r) {
              var l = o - (f * (o - t)) / i.interactivity.modes.bubble.duration,
                c = t - l;
              (d = t + c),
                "size" == s && (e.radius_bubble = d),
                "opacity" == s && (e.opacity_bubble = d);
            }
          } else if (a <= i.interactivity.modes.bubble.distance) {
            if (void 0 != r) var u = r;
            else var u = o;
            if (u != t) {
              var d = o - (f * (o - t)) / i.interactivity.modes.bubble.duration;
              "size" == s && (e.radius_bubble = d),
                "opacity" == s && (e.opacity_bubble = d);
            }
          } else
            "size" == s && (e.radius_bubble = void 0),
              "opacity" == s && (e.opacity_bubble = void 0);
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
      ) {
        var r = e.x - i.interactivity.mouse.pos_x,
          o = e.y - i.interactivity.mouse.pos_y,
          a = Math.sqrt(r * r + o * o),
          s = 1 - a / i.interactivity.modes.bubble.distance;
        if (a <= i.interactivity.modes.bubble.distance) {
          if (s >= 0 && "mousemove" == i.interactivity.status) {
            if (i.interactivity.modes.bubble.size != i.particles.size.value)
              if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                var l = e.radius + i.interactivity.modes.bubble.size * s;
                l >= 0 && (e.radius_bubble = l);
              } else {
                var c = e.radius - i.interactivity.modes.bubble.size,
                  l = e.radius - c * s;
                e.radius_bubble = l > 0 ? l : 0;
              }
            if (
              i.interactivity.modes.bubble.opacity != i.particles.opacity.value
            )
              if (
                i.interactivity.modes.bubble.opacity > i.particles.opacity.value
              ) {
                var u = i.interactivity.modes.bubble.opacity * s;
                u > e.opacity &&
                  u <= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = u);
              } else {
                var u =
                  e.opacity -
                  (i.particles.opacity.value -
                    i.interactivity.modes.bubble.opacity) *
                    s;
                u < e.opacity &&
                  u >= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = u);
              }
          }
        } else t();
        "mouseleave" == i.interactivity.status && t();
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("bubble", i.interactivity.events.onclick.mode)
      ) {
        if (i.tmp.bubble_clicking) {
          var r = e.x - i.interactivity.mouse.click_pos_x,
            o = e.y - i.interactivity.mouse.click_pos_y,
            a = Math.sqrt(r * r + o * o),
            f = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          f > i.interactivity.modes.bubble.duration &&
            (i.tmp.bubble_duration_end = !0),
            f > 2 * i.interactivity.modes.bubble.duration &&
              ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        i.tmp.bubble_clicking &&
          (n(
            i.interactivity.modes.bubble.size,
            i.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size"
          ),
          n(
            i.interactivity.modes.bubble.opacity,
            i.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity"
          ));
      }
    }),
    (i.fn.modes.repulseParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(t * t + n * n),
          o = { x: t / r, y: n / r },
          a = i.interactivity.modes.repulse.distance,
          s = clamp((1 / a) * (-1 * Math.pow(r / a, 2) + 1) * a * 100, 0, 50),
          l = { x: e.x + o.x * s, y: e.y + o.y * s };
        "bounce" == i.particles.move.out_mode
          ? (l.x - e.radius > 0 && l.x + e.radius < i.canvas.w && (e.x = l.x),
            l.y - e.radius > 0 && l.y + e.radius < i.canvas.h && (e.y = l.y))
          : ((e.x = l.x), (e.y = l.y));
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("repulse", i.interactivity.events.onclick.mode)
      )
        if (
          (i.tmp.repulse_finish ||
            (++i.tmp.repulse_count == i.particles.array.length &&
              (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking)
        ) {
          var a = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
            c = i.interactivity.mouse.click_pos_x - e.x,
            u = i.interactivity.mouse.click_pos_y - e.y,
            f = c * c + u * u,
            d = (-a / f) * 1;
          f <= a &&
            (function () {
              var t = Math.atan2(u, c);
              if (
                ((e.vx = d * Math.cos(t)),
                (e.vy = d * Math.sin(t)),
                "bounce" == i.particles.move.out_mode)
              ) {
                var n = { x: e.x + e.vx, y: e.y + e.vy };
                n.x + e.radius > i.canvas.w
                  ? (e.vx = -e.vx)
                  : n.x - e.radius < 0 && (e.vx = -e.vx),
                  n.y + e.radius > i.canvas.h
                    ? (e.vy = -e.vy)
                    : n.y - e.radius < 0 && (e.vy = -e.vy);
              }
            })();
        } else
          0 == i.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
    }),
    (i.fn.modes.grabParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(t * t + n * n);
        if (r <= i.interactivity.modes.grab.distance) {
          var o =
            i.interactivity.modes.grab.line_linked.opacity -
            r /
              (1 / i.interactivity.modes.grab.line_linked.opacity) /
              i.interactivity.modes.grab.distance;
          if (o > 0) {
            var a = i.particles.line_linked.color_rgb_line;
            (i.canvas.ctx.strokeStyle =
              "rgba(" + a.r + "," + a.g + "," + a.b + "," + o + ")"),
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
              var t = e.clientX,
                n = e.clientY;
            else
              var t = e.offsetX || e.clientX,
                n = e.offsetY || e.clientY;
            (i.interactivity.mouse.pos_x = t),
              (i.interactivity.mouse.pos_y = n),
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
        var t =
            (e * i.particles.number.value) /
            i.particles.number.density.value_area,
          n = i.particles.array.length - t;
        n < 0
          ? i.fn.modes.pushParticles(Math.abs(n))
          : i.fn.modes.removeParticles(n);
      }
    }),
    (i.fn.vendors.checkOverlap = function (e, t) {
      for (var n = 0; n < i.particles.array.length; n++) {
        var r = i.particles.array[n],
          o = e.x - r.x,
          a = e.y - r.y;
        Math.sqrt(o * o + a * a) <= e.radius + r.radius &&
          ((e.x = t ? t.x : Math.random() * i.canvas.w),
          (e.y = t ? t.y : Math.random() * i.canvas.h),
          i.fn.vendors.checkOverlap(e));
      }
    }),
    (i.fn.vendors.createSvgImg = function (e) {
      var t = i.tmp.source_svg,
        n = /#([0-9A-F]{3,6})/gi,
        r = t.replace(n, function (t, n, i, r) {
          if (e.color.rgb)
            var o =
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
            var o =
              "hsla(" +
              e.color.hsl.h +
              "," +
              e.color.hsl.s +
              "%," +
              e.color.hsl.l +
              "%," +
              e.opacity +
              ")";
          return o;
        }),
        o = new Blob([r], { type: "image/svg+xml;charset=utf-8" }),
        a = window.URL || window.webkitURL || window,
        s = a.createObjectURL(o),
        l = new Image();
      l.addEventListener("load", function () {
        (e.img.obj = l),
          (e.img.loaded = !0),
          a.revokeObjectURL(s),
          i.tmp.count_svg++;
      }),
        (l.src = s);
    }),
    (i.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(i.fn.drawAnimFrame), n.remove(), (pJSDom = null);
    }),
    (i.fn.vendors.drawShape = function (e, t, n, i, r, o) {
      var a = r * o,
        s = r / o,
        l = (180 * (s - 2)) / s,
        c = Math.PI - (Math.PI * l) / 180;
      e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
      for (var u = 0; u < a; u++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
      e.fill(), e.restore();
    }),
    (i.fn.vendors.exportImg = function () {
      window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (i.fn.vendors.loadImg = function (e) {
      if (((i.tmp.img_error = void 0), "" != i.particles.shape.image.src))
        if ("svg" == e) {
          var t = new XMLHttpRequest();
          t.open("GET", i.particles.shape.image.src),
            (t.onreadystatechange = function (e) {
              4 == t.readyState &&
                (200 == t.status
                  ? ((i.tmp.source_svg = e.currentTarget.response),
                    i.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (i.tmp.img_error = !0)));
            }),
            t.send();
        } else {
          var n = new Image();
          n.addEventListener("load", function () {
            (i.tmp.img_obj = n), i.fn.vendors.checkBeforeDraw();
          }),
            (n.src = i.particles.shape.image.src);
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
(Object.deepExtend = function (e, t) {
  for (var n in t)
    t[n] && t[n].constructor && t[n].constructor === Object
      ? ((e[n] = e[n] || {}), arguments.callee(e[n], t[n]))
      : (e[n] = t[n]);
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
  (window.particlesJS = function (e, t) {
    "string" != typeof e && ((t = e), (e = "particles-js")),
      e || (e = "particles-js");
    var n = document.getElementById(e),
      i = n.getElementsByClassName("particles-js-canvas-el");
    if (i.length) for (; i.length > 0; ) n.removeChild(i[0]);
    var r = document.createElement("canvas");
    (r.className = "particles-js-canvas-el"),
      (r.style.width = "100%"),
      (r.style.height = "100%"),
      null != document.getElementById(e).appendChild(r) &&
        pJSDom.push(new pJS(e, t));
  }),
  (window.particlesJS.load = function (e, t, n) {
    var i = new XMLHttpRequest();
    i.open("GET", t),
      (i.onreadystatechange = function (t) {
        if (4 == i.readyState)
          if (200 == i.status) {
            var r = JSON.parse(t.currentTarget.response);
            window.particlesJS(e, r), n && n();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + i.status),
              console.log("Error pJS - File config not found");
      }),
      i.send();
  }),
  $(document).ready(function () {
    FixHeader(),
      $(window).scroll(FixHeader),
      $("body").scrollspy({ target: ".navbar", offset: 100 }),
      particlesJS.load("home", "particles.json", function () {});
    var e = function () {
      var e = $(".arrow");
      e.hasClass("lift") ? e.removeClass("lift") : e.addClass("lift");
    };
    setInterval(e, 1e3),
      $("a.smoth-scroll").on("click", function (e) {
        var t = $(this);
        $("html, body")
          .stop()
          .animate({ scrollTop: $(t.attr("href")).offset().top - 50 }, 800),
          e.preventDefault();
      }),
      $(".navbar-toggler").on("click", function () {
        $("#navigation").toggleClass("nav-collapse-black");
      });
  });
