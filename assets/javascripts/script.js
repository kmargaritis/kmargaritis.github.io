!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length, n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (Z.isFunction(t))
            return Z.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return Z.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (st.test(t))
                return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = ht[e] = {};
        return Z.each(e.match(pt) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function a() {
        Y.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
                return {}
            }}), this.expando = Z.expando + Math.random()
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(bt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : wt.test(n) ? Z.parseJSON(n) : n
                } catch (i) {
                }
                yt.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function d() {
        try {
            return Y.activeElement
        } catch (e) {
        }
    }
    function f(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function h(e) {
        var t = qt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function m(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
    }
    function g(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (vt.hasData(e) && (o = vt.access(e), a = vt.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++)
                        Z.event.add(t, i, l[i][n])
            }
            yt.hasData(e) && (s = yt.access(e), u = Z.extend({}, s), yt.set(t, u))
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && St.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function w(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }
    function b(e) {
        var t = Y, n = Ft[e];
        return n || (n = w(e, t), "none" !== n && n || (It = (It || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = It[0].contentDocument, t.write(), t.close(), n = w(e, t), It.detach()), Ft[e] = n), n
    }
    function x(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || zt(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Bt.test(a) && Mt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }
    function T(e, t) {
        return {get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }}
    }
    function C(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Gt.length; i--; )
            if (t = Gt[i] + n, t in e)
                return t;
        return r
    }
    function S(e, t, n) {
        var r = Xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += Z.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (a -= Z.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (a -= Z.css(e, "border" + Tt[o] + "Width", !0, i))) : (a += Z.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (a += Z.css(e, "border" + Tt[o] + "Width", !0, i)));
        return a
    }
    function _(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = zt(e), a = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = x(e, t, o), (0 > i || null == i) && (i = e.style[t]), Bt.test(i))
                return i;
            r = a && (V.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function j(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            r = e[a], r.style && (o[a] = vt.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ct(r) && (o[a] = vt.access(r, "olddisplay", b(r.nodeName)))) : (i = Ct(r), "none" === n && i || vt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function E(e, t, n, r, i) {
        return new E.prototype.init(e, t, n, r, i)
    }
    function N() {
        return setTimeout(function() {
            Vt = void 0
        }), Vt = Z.now()
    }
    function $(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Tt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function A(e, t, n) {
        for (var r, i = (nn[t] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function D(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this, f = {}, p = e.style, h = e.nodeType && Ct(e), m = vt.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = Z.css(e, "display"), c = "none" === l ? vt.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Qt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    h = !0
                }
                f[r] = m && m[r] || Z.style(e, r)
            } else
                l = void 0;
        if (Z.isEmptyObject(f))
            "inline" === ("none" === l ? b(e.nodeName) : l) && (p.display = l);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = vt.access(e, "fxshow", {}), o && (m.hidden = !h), h ? Z(e).show() : d.done(function() {
                Z(e).hide()
            }), d.done(function() {
                var t;
                vt.remove(e, "fxshow");
                for (t in f)
                    Z.style(e, t, f[t])
            });
            for (r in f)
                a = A(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function L(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n], t[n] = i)
            } else
                t[r] = i
    }
    function O(e, t, n) {
        var r, i, o = 0, a = tn.length, s = Z.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = Vt || N(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({elem: e,props: Z.extend({}, t),opts: Z.extend(!0, {specialEasing: {}}, n),originalProperties: t,originalOptions: n,startTime: Vt || N(),duration: n.duration,tweens: [],createTween: function(t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }}), c = l.props;
        for (L(c, l.opts.specialEasing); a > o; o++)
            if (r = tn[o].call(l, e, c, l.opts))
                return r;
        return Z.map(c, A, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {elem: e,anim: l,queue: l.opts.queue})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function H(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(pt) || [];
            if (Z.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function q(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, Z.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {}, a = e === Tn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function R(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }
    function P(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function I(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a)
                        for (i in l)
                            if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {state: "parsererror",error: a ? d : "No conversion from " + u + " to " + o}
                            }
                }
        return {state: "success",data: t}
    }
    function F(e, t, n, r) {
        var i;
        if (Z.isArray(t))
            Z.each(t, function(t, i) {
                n || _n.test(e) ? r(e, i) : F(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== Z.type(t))
            r(e, t);
        else
            for (i in t)
                F(e + "[" + i + "]", t[i], n, r)
    }
    function M(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B = [], z = B.slice, W = B.concat, X = B.push, U = B.indexOf, K = {}, J = K.toString, G = K.hasOwnProperty, V = {}, Y = e.document, Q = "2.1.1", Z = function(e, t) {
        return new Z.fn.init(e, t)
    }, et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, tt = /^-ms-/, nt = /-([\da-z])/gi, rt = function(e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {jquery: Q,constructor: Z,selector: "",length: 0,toArray: function() {
            return z.call(this)
        },get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        },pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },each: function(e, t) {
            return Z.each(this, e, t)
        },map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },slice: function() {
            return this.pushStack(z.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: X,sort: B.sort,splice: B.splice}, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t], r = e[t], a !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Z.extend({expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(e) {
            throw new Error(e)
        },noop: function() {
        },isFunction: function(e) {
            return "function" === Z.type(e)
        },isArray: Array.isArray,isWindow: function(e) {
            return null != e && e === e.window
        },isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) >= 0
        },isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[J.call(e)] || "object" : typeof e
        },globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },camelCase: function(e) {
            return e.replace(tt, "ms-").replace(nt, rt)
        },nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },each: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1)
                            break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++)
                    ;
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1)
                        break;
            return e
        },trim: function(e) {
            return null == e ? "" : (e + "").replace(et, "")
        },makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        },inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                e[i++] = t[r];
            return e.length = i, e
        },grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },map: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s)
                for (; a > o; o++)
                    i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e)
                    i = t(e[o], o, r), null != i && u.push(i);
            return W.apply([], u)
        },guid: 1,proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = z.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(z.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },now: Date.now,support: V}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var it = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, p, h, m;
            if ((t ? t.ownerDocument || t : F) !== D && A(t), t = t || D, n = n || [], !e || "string" != typeof e)
                return n;
            if (1 !== (s = t.nodeType) && 9 !== s)
                return [];
            if (O && !r) {
                if (i = yt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a)
                            return n.push(o), n
                    } else {
                        if (i[2])
                            return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && x.getElementsByClassName && t.getElementsByClassName)
                            return Z.apply(n, t.getElementsByClassName(a)), n
                    }
                if (x.qsa && (!H || !H.test(e))) {
                    if (p = d = I, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (d = t.getAttribute("id")) ? p = d.replace(bt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--; )
                            l[u] = p + f(l[u]);
                        h = wt.test(e) && c(t.parentNode) || t, m = l.join(",")
                    }
                    if (m)
                        try {
                            return Z.apply(n, h.querySelectorAll(m)), n
                        } catch (g) {
                        }finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return j(e.replace(ut, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[I] = !0, e
        }
        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            }finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && typeof e.getElementsByTagName !== K && e
        }
        function d() {
        }
        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l = [M, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[I] || (t[I] = {}), (s = u[r]) && s[0] === M && s[1] === o)
                                return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[I] && (i = v(i)), o && !o[I] && (o = v(o, a)), r(function(r, a, s, u) {
                var l, c, d, f = [], p = [], h = a.length, v = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, f, e, s, u), w = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, w, s, u), i)
                    for (l = g(w, p), i(l, [], s, u), c = l.length; c--; )
                        (d = l[c]) && (w[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = w.length; c--; )
                                (d = w[c]) && l.push(y[c] = d);
                            o(null, w = [], l, u)
                        }
                        for (c = w.length; c--; )
                            (d = w[c]) && (l = o ? tt.call(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else
                    w = g(w === a ? w.splice(h, w.length) : w), o ? o(null, a, w, u) : Z.apply(a, w)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                return e === t
            }, a, !0), l = p(function(e) {
                return tt.call(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                    return !o && (r || n !== E) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; i > s; s++)
                if (n = T.relative[e[s].type])
                    c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function w(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function(r, a, s, u, l) {
                var c, d, f, p = 0, h = "0", m = r && [], v = [], y = E, w = r || o && T.find.TAG("*", l), b = M += null == y ? 1 : Math.random() || .1, x = w.length;
                for (l && (E = a !== D && a); h !== x && null != (c = w[h]); h++) {
                    if (o && c) {
                        for (d = 0; f = e[d++]; )
                            if (f(c, a, s)) {
                                u.push(c);
                                break
                            }
                        l && (M = b)
                    }
                    i && ((c = !f && c) && p--, r && m.push(c))
                }
                if (p += h, i && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = Y.call(u));
                        v = g(v)
                    }
                    Z.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return l && (M = b, E = y), m
            };
            return i ? r(a) : a
        }
        var b, x, T, C, S, k, _, j, E, N, $, A, D, L, O, H, q, R, P, I = "sizzle" + -new Date, F = e.document, M = 0, B = 0, z = n(), W = n(), X = n(), U = function(e, t) {
            return e === t && ($ = !0), 0
        }, K = "undefined", J = 1 << 31, G = {}.hasOwnProperty, V = [], Y = V.pop, Q = V.push, Z = V.push, et = V.slice, tt = V.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }, nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", rt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"), at = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]", st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)", ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"), lt = new RegExp("^" + rt + "*," + rt + "*"), ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"), dt = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"), ft = new RegExp(st), pt = new RegExp("^" + ot + "$"), ht = {ID: new RegExp("^#(" + it + ")"),CLASS: new RegExp("^\\.(" + it + ")"),TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),ATTR: new RegExp("^" + at),PSEUDO: new RegExp("^" + st),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),bool: new RegExp("^(?:" + nt + ")$", "i"),needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")}, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, wt = /[+~]/, bt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"), Tt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            Z.apply(V = et.call(F.childNodes), F.childNodes), V[F.childNodes.length].nodeType
        } catch (Ct) {
            Z = {apply: V.length ? function(e, t) {
                    Q.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }}
        }
        x = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : F, r = n.defaultView;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, L = n.documentElement, O = !S(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                A()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                A()
            })), x.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), x.getById = i(function(e) {
                return L.appendChild(e).id = I, !n.getElementsByName || !n.getElementsByName(I).length
            }), x.getById ? (T.find.ID = function(e, t) {
                if (typeof t.getElementById !== K && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== K && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== K ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== K && O ? t.getElementsByClassName(e) : void 0
            }, q = [], H = [], (x.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || H.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (x.matchesSelector = vt.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), q.push("!=", st)
            }), H = H.length && new RegExp(H.join("|")), q = q.length && new RegExp(q.join("|")), t = vt.test(L.compareDocumentPosition), P = t || vt.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t)
                    return $ = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !x.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === F && P(F, e) ? -1 : t === n || t.ownerDocument === F && P(F, t) ? 1 : N ? tt.call(N, e) - tt.call(N, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return $ = !0, 0;
                var r, i = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : N ? tt.call(N, e) - tt.call(N, t) : 0;
                if (o === s)
                    return a(e, t);
                for (r = e; r = r.parentNode; )
                    u.unshift(r);
                for (r = t; r = r.parentNode; )
                    l.unshift(r);
                for (; u[i] === l[i]; )
                    i++;
                return i ? a(u[i], l[i]) : u[i] === F ? -1 : l[i] === F ? 1 : 0
            }, n) : D
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && A(e), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !O || q && q.test(n) || H && H.test(n)))
                try {
                    var r = R.call(e, n);
                    if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {
                }
            return t(n, D, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && A(e), P(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && A(e);
            var n = T.attrHandle[t.toLowerCase()], r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : x.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if ($ = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(U), $) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return N = null, e
        }, C = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += C(t);
            return n
        }, T = t.selectors = {cacheLength: 50,createPseudo: r,match: ht,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
                    return e[1] = e[1].replace(xt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }},filter: {TAG: function(e) {
                    var t = e.replace(xt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== K && e.getAttribute("class") || "")
                    })
                },ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[I] || (g[I] = {}), l = c[e] || [], p = l[0] === M && l[1], f = l[0] === M && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [M, p, f];
                                        break
                                    }
                            } else if (y && (l = (t[I] || (t[I] = {}))[e]) && l[0] === M)
                                f = l[1];
                            else
                                for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [M, f]), d !== t)); )
                                    ;
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }},pseudos: {not: r(function(e) {
                    var t = [], n = [], i = _(e.replace(ut, "$1"));
                    return i[I] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, Tt).toLowerCase(), function(t) {
                        var n;
                        do
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },root: function(e) {
                    return e === L
                },focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },enabled: function(e) {
                    return e.disabled === !1
                },disabled: function(e) {
                    return e.disabled === !0
                },checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },parent: function(e) {
                    return !T.pseudos.empty(e)
                },header: function(e) {
                    return gt.test(e.nodeName)
                },input: function(e) {
                    return mt.test(e.nodeName)
                },button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },first: l(function() {
                    return [0]
                }),last: l(function(e, t) {
                    return [t - 1]
                }),eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })}}, T.pseudos.nth = T.pseudos.eq;
        for (b in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            T.pseudos[b] = s(b);
        for (b in {submit: !0,reset: !0})
            T.pseudos[b] = u(b);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, k = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = W[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s; ) {
                (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({value: r,type: i[0].replace(ut, " ")}), s = s.slice(r.length));
                for (a in T.filter)
                    !(i = ht[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({value: r,type: a,matches: i}), s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : W(e, u).slice(0)
        }, _ = t.compile = function(e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--; )
                    o = y(t[n]), o[I] ? r.push(o) : i.push(o);
                o = X(e, w(i, r)), o.selector = e
            }
            return o
        }, j = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, d = !r && k(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(xt, Tt), t) || [])[0], !t)
                        return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]); )
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(xt, Tt), wt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e)
                            return Z.apply(n, r), n;
                        break
                    }
            }
            return (l || _(e, d))(r, t, !O, n, wt.test(e) && c(t.parentNode) || t), n
        }, x.sortStable = I.split("").sort(U).join("") === I, x.detectDuplicates = !!$, A(), x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(nt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
    var ot = Z.expr.match.needsContext, at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, st = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(Z(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (Z.contains(i[t], this))
                            return !0
                }));
            for (t = 0; n > t; t++)
                Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },is: function(e) {
            return !!r(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
        }});
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = Z.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t)
                return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), at.test(n[1]) && Z.isPlainObject(t))
                    for (n in t)
                        Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = Y.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Y, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ct.prototype = Z.fn, ut = Z(Y);
    var dt = /^(?:parents|prev(?:Until|All))/, ft = {children: !0,contents: !0,next: !0,prev: !0};
    Z.extend({dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }}), Z.fn.extend({has: function(e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e]))
                        return !0
            })
        },closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }}), Z.each({parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },parents: function(e) {
            return Z.dir(e, "parentNode")
        },parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },next: function(e) {
            return i(e, "nextSibling")
        },prev: function(e) {
            return i(e, "previousSibling")
        },nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },children: function(e) {
            return Z.sibling(e.firstChild)
        },contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }}, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (ft[e] || Z.unique(i), dt.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var pt = /\S+/g, ht = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, a, s, u = [], l = !e.once && [], c = function(o) {
            for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
                if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : d.disable())
        }, d = {add: function() {
                if (u) {
                    var n = u.length;
                    !function o(t) {
                        Z.each(t, function(t, n) {
                            var r = Z.type(n);
                            "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), r ? a = u.length : t && (i = n, c(t))
                }
                return this
            },remove: function() {
                return u && Z.each(arguments, function(e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1; )
                        u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                }), this
            },has: function(e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            },empty: function() {
                return u = [], a = 0, this
            },disable: function() {
                return u = l = t = void 0, this
            },disabled: function() {
                return !u
            },lock: function() {
                return l = void 0, t || d.disable(), this
            },locked: function() {
                return !l
            },fireWith: function(e, t) {
                return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
            },fire: function() {
                return d.fireWith(this, arguments), this
            },fired: function() {
                return !!n
            }};
        return d
    }, Z.extend({Deferred: function(e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]], n = "pending", r = {state: function() {
                    return n
                },always: function() {
                    return i.done(arguments).fail(arguments), this
                },then: function() {
                    var e = arguments;
                    return Z.Deferred(function(n) {
                        Z.each(t, function(t, o) {
                            var a = Z.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                },promise: function(e) {
                    return null != e ? Z.extend(e, r) : r
                }}, i = {};
            return r.pipe = r.then, Z.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },when: function(e) {
            var t, n, r, i = 0, o = z.call(arguments), a = o.length, s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0, u = 1 === s ? e : Z.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? z.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)
                    o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }});
    var mt;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({isReady: !1,readyWait: 1,holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (mt.resolveWith(Y, [Z]), Z.fn.triggerHandler && (Z(Y).triggerHandler("ready"), Z(Y).off("ready"))))
        }}), Z.ready.promise = function(t) {
        return mt || (mt = Z.Deferred(), "complete" === Y.readyState ? setTimeout(Z.ready) : (Y.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), mt.promise(t)
    }, Z.ready.promise();
    var gt = Z.access = function(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (s in n)
                Z.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(Z(e), n)
        })), t))
            for (; u > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {key: function(e) {
            if (!s.accepts(e))
                return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)
                o[t] = n;
            else if (Z.isEmptyObject(o))
                Z.extend(this.cache[i], t);
            else
                for (r in t)
                    o[r] = t[r];
            return o
        },get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },remove: function(e, t) {
            var n, r, i, o = this.key(e), a = this.cache[o];
            if (void 0 === t)
                this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(pt) || [])), n = r.length;
                for (; n--; )
                    delete a[r[n]]
            }
        },hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }};
    var vt = new s, yt = new s, wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, bt = /([A-Z])/g;
    Z.extend({hasData: function(e) {
            return yt.hasData(e) || vt.hasData(e)
        },data: function(e, t, n) {
            return yt.access(e, t, n)
        },removeData: function(e, t) {
            yt.remove(e, t)
        },_data: function(e, t, n) {
            return vt.access(e, t, n)
        },_removeData: function(e, t) {
            vt.remove(e, t)
        }}), Z.fn.extend({data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                yt.set(this, e)
            }) : gt(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = yt.get(o, e), void 0 !== n)
                        return n;
                    if (n = yt.get(o, r), void 0 !== n)
                        return n;
                    if (n = u(o, r, void 0), void 0 !== n)
                        return n
                } else
                    this.each(function() {
                        var n = yt.get(this, r);
                        yt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },removeData: function(e) {
            return this.each(function() {
                yt.remove(this, e)
            })
        }}), Z.extend({queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = vt.get(e, t), n && (!r || Z.isArray(n) ? r = vt.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), r = n.length, i = n.shift(), o = Z._queueHooks(e, t), a = function() {
                Z.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },_queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return vt.get(e, n) || vt.access(e, n, {empty: Z.Callbacks("once memory").add(function() {
                    vt.remove(e, [t + "queue", n])
                })})
        }}), Z.fn.extend({queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },promise: function(e, t) {
            var n, r = 1, i = Z.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; )
                n = vt.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }});
    var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Tt = ["Top", "Right", "Bottom", "Left"], Ct = function(e, t) {
        return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }, St = /^(?:checkbox|radio)$/i;
    !function() {
        var e = Y.createDocumentFragment(), t = e.appendChild(Y.createElement("div")), n = Y.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), V.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", V.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    V.focusinBubbles = "onfocusin" in e;
    var _t = /^key/, jt = /^(?:mouse|pointer|contextmenu)|click/, Et = /^(?:focusinfocus|focusoutblur)$/, Nt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {global: {},add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = vt.get(e);
            if (g)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                    return typeof Z !== kt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(pt) || [""], l = t.length; l--; )
                    s = Nt.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (d = Z.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = Z.event.special[p] || {}, c = Z.extend({type: p,origType: m,data: r,handler: n,guid: n.guid,selector: i,needsContext: i && Z.expr.match.needsContext.test(i),namespace: h.join(".")}, o), (f = u[p]) || (f = u[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), Z.event.global[p] = !0)
        },remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = vt.hasData(e) && vt.get(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(pt) || [""], l = t.length; l--; )
                    if (s = Nt.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = Z.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--; )
                            c = f[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u)
                            Z.event.remove(e, p + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete g.handle, vt.remove(e, "events"))
            }
        },trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || Y], p = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || Y, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), d = Z.event.special[p] || {}, i || !d.trigger || d.trigger.apply(r, n) !== !1)) {
                if (!i && !d.noBubble && !Z.isWindow(r)) {
                    for (u = d.delegateType || p, Et.test(u + p) || (a = a.parentNode); a; a = a.parentNode)
                        f.push(a), s = a;
                    s === (r.ownerDocument || Y) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = f[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : d.bindType || p, c = (vt.get(a, "events") || {})[t.type] && vt.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[p]) && !Z.isWindow(r) && (s = r[l], s && (r[l] = null), Z.event.triggered = p, r[p](), Z.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, a = [], s = z.call(arguments), u = (vt.get(this, "events") || {})[e.type] || [], l = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = Z.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; s > n; n++)
                            o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({elem: u,handlers: r})
                    }
            return s < t.length && a.push({elem: this,handlers: t.slice(s)}), a
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }},mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }},fix: function(e) {
            if (e[Z.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = jt.test(i) ? this.mouseHooks : _t.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = r.length; t--; )
                n = r[t], e[n] = o[n];
            return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },special: {load: {noBubble: !0},focus: {trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },delegateType: "focusout"},click: {trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },_default: function(e) {
                    return Z.nodeName(e.target, "a")
                }},beforeunload: {postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }}},simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }}, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void (this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {isDefaultPrevented: c,isPropagationStopped: c,isImmediatePropagationStopped: c,preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }}, Z.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(e, t) {
        Z.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }}
    }), V.focusinBubbles || Z.each({focus: "focusin",blur: "focusout"}, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {setup: function() {
                var r = this.ownerDocument || this, i = vt.access(r, t);
                i || r.addEventListener(e, n, !0), vt.access(r, t, (i || 0) + 1)
            },teardown: function() {
                var r = this.ownerDocument || this, i = vt.access(r, t) - 1;
                i ? vt.access(r, t, i) : (r.removeEventListener(e, n, !0), vt.remove(r, t))
            }}
    }), Z.fn.extend({on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e)
                    this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)
                r = c;
            else if (!r)
                return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }});
    var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, At = /<([\w:]+)/, Dt = /<|&#?\w+;/, Lt = /<(?:script|style|link)/i, Ot = /checked\s*(?:[^=]|=\s*.checked.)/i, Ht = /^$|\/(?:java|ecma)script/i, qt = /^true\/(.*)/, Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pt = {option: [1, "<select multiple='multiple'>", "</select>"],thead: [1, "<table>", "</table>"],col: [2, "<table><colgroup>", "</colgroup></table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: [0, "", ""]};
    Pt.optgroup = Pt.option, Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead, Pt.th = Pt.td, Z.extend({clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(V.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (a = v(s), o = v(e), r = 0, i = o.length; i > r; r++)
                    y(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || v(e), a = a || v(s), r = 0, i = o.length; i > r; r++)
                        g(o[r], a[r]);
                else
                    g(e, s);
            return a = v(s, "script"), a.length > 0 && m(a, !u && v(e, "script")), s
        },buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c = t.createDocumentFragment(), d = [], f = 0, p = e.length; p > f; f++)
                if (i = e[f], i || 0 === i)
                    if ("object" === Z.type(i))
                        Z.merge(d, i.nodeType ? [i] : i);
                    else if (Dt.test(i)) {
                        for (o = o || c.appendChild(t.createElement("div")), a = (At.exec(i) || ["", ""])[1].toLowerCase(), s = Pt[a] || Pt._default, o.innerHTML = s[1] + i.replace($t, "<$1></$2>") + s[2], l = s[0]; l--; )
                            o = o.lastChild;
                        Z.merge(d, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else
                        d.push(t.createTextNode(i));
            for (c.textContent = "", f = 0; i = d[f++]; )
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && m(o), n))
                    for (l = 0; i = o[l++]; )
                        Ht.test(i.type || "") && n.push(i);
            return c
        },cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (i = n[vt.expando], i && (t = vt.cache[i]))) {
                    if (t.events)
                        for (r in t.events)
                            o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    vt.cache[i] && delete vt.cache[i]
                }
                delete yt.cache[n[yt.expando]]
            }
        }}), Z.fn.extend({text: function(e) {
            return gt(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },html: function(e) {
            return gt(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Lt.test(e) && !Pt[(At.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace($t, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },detach: function(e) {
            return this.remove(e, !0)
        },domManip: function(e, t) {
            e = W.apply([], e);
            var n, r, i, o, a, s, u = 0, l = this.length, c = this, d = l - 1, f = e[0], m = Z.isFunction(f);
            if (m || l > 1 && "string" == typeof f && !V.checkClone && Ot.test(f))
                return this.each(function(n) {
                    var r = c.eq(n);
                    m && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
                });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), p), o = i.length; l > u; u++)
                    a = n, u !== d && (a = Z.clone(a, !0, !0), o && Z.merge(i, v(a, "script"))), t.call(this[u], a, u);
                if (o)
                    for (s = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++)
                        a = i[u], Ht.test(a.type || "") && !vt.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Rt, "")))
            }
            return this
        }}), Z.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, a = 0; o >= a; a++)
                n = a === o ? this : this.clone(!0), Z(i[a])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var It, Ft = {}, Mt = /^margin/, Bt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"), zt = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = Y.documentElement, o = Y.createElement("div"), a = Y.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", V.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(V, {pixelPosition: function() {
                return t(), n
            },boxSizingReliable: function() {
                return null == r && t(), r
            },reliableMarginRight: function() {
                var t, n = a.appendChild(Y.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
            }}))
    }(), Z.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    };
    var Wt = /^(none|table(?!-c[ea]).+)/, Xt = new RegExp("^(" + xt + ")(.*)$", "i"), Ut = new RegExp("^([+-])=(" + xt + ")", "i"), Kt = {position: "absolute",visibility: "hidden",display: "block"}, Jt = {letterSpacing: "0",fontWeight: "400"}, Gt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({cssHooks: {opacity: {get: function(e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": "cssFloat"},style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = Z.camelCase(t), u = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = C(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void (null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), V.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
            }
        },css: function(e, t, n, r) {
            var i, o, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = C(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = x(e, t, r)), "normal" === i && t in Jt && (i = Jt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }}), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {get: function(e, n, r) {
                return n ? Wt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Kt, function() {
                    return _(e, t, r)
                }) : _(e, t, r) : void 0
            },set: function(e, n, r) {
                var i = r && zt(e);
                return S(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }}
    }), Z.cssHooks.marginRight = T(V.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {display: "inline-block"}, x, [e, "marginRight"]) : void 0
    }), Z.each({margin: "",padding: "",border: "Width"}, function(e, t) {
        Z.cssHooks[e + t] = {expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }}, Mt.test(e) || (Z.cssHooks[e + t].set = S)
    }), Z.fn.extend({css: function(e, t) {
            return gt(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Z.isArray(t)) {
                    for (r = zt(e), i = t.length; i > a; a++)
                        o[t[a]] = Z.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },show: function() {
            return j(this, !0)
        },hide: function() {
            return j(this)
        },toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ct(this) ? Z(this).show() : Z(this).hide()
            })
        }}), Z.Tween = E, E.prototype = {constructor: E,init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },cur: function() {
            var e = E.propHooks[this.prop];
            return e && e.get ? e.get(this) : E.propHooks._default.get(this)
        },run: function(e) {
            var t, n = E.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
        }}, E.prototype.init.prototype = E.prototype, E.propHooks = {_default: {get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }}}, E.propHooks.scrollTop = E.propHooks.scrollLeft = {set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }}, Z.easing = {linear: function(e) {
            return e
        },swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }}, Z.fx = E.prototype.init, Z.fx.step = {};
    var Vt, Yt, Qt = /^(?:toggle|show|hide)$/, Zt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"), en = /queueHooks$/, tn = [D], nn = {"*": [function(e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = Zt.exec(t), o = i && i[3] || (Z.cssNumber[e] ? "" : "px"), a = (Z.cssNumber[e] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, e)), s = 1, u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do
                        s = s || ".5", a /= s, Z.style(n.elem, e, a + o);
                    while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]};
    Z.Animation = Z.extend(O, {tweener: function(e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
        },prefilter: function(e, t) {
            t ? tn.unshift(e) : tn.push(e)
        }}), Z.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({}, e) : {complete: n || !n && t || Z.isFunction(e) && e,duration: e,easing: n && t || t && !Z.isFunction(t) && t};
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
        }, r
    }, Z.fn.extend({fadeTo: function(e, t, n, r) {
            return this.filter(Ct).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        },animate: function(e, t, n, r) {
            var i = Z.isEmptyObject(e), o = Z.speed(t, n, r), a = function() {
                var t = O(this, Z.extend({}, e), o);
                (i || vt.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, i = null != e && e + "queueHooks", o = Z.timers, a = vt.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && en.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        },finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = vt.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers, a = r ? r.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }}), Z.each(["toggle", "show", "hide"], function(e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
        }
    }), Z.each({slideDown: $("show"),slideUp: $("hide"),slideToggle: $("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
        Z.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), Z.timers = [], Z.fx.tick = function() {
        var e, t = 0, n = Z.timers;
        for (Vt = Z.now(); t < n.length; t++)
            e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Vt = void 0
    }, Z.fx.timer = function(e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function() {
        Yt || (Yt = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function() {
        clearInterval(Yt), Yt = null
    }, Z.fx.speeds = {slow: 600,fast: 200,_default: 400}, Z.fn.delay = function(e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, function() {
        var e = Y.createElement("input"), t = Y.createElement("select"), n = t.appendChild(Y.createElement("option"));
        e.type = "checkbox", V.checkOn = "" !== e.value, V.optSelected = n.selected, t.disabled = !0, V.optDisabled = !n.disabled, e = Y.createElement("input"), e.value = "t", e.type = "radio", V.radioValue = "t" === e.value
    }();
    var rn, on, an = Z.expr.attrHandle;
    Z.fn.extend({attr: function(e, t) {
            return gt(this, Z.attr, e, t, arguments.length > 1)
        },removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }}), Z.extend({attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === kt ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        },removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(pt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },attrHooks: {type: {set: function(e, t) {
                    if (!V.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }}}}), on = {set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = an[t] || Z.find.attr;
        an[t] = function(e, t, r) {
            var i, o;
            return r || (o = an[t], an[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, an[t] = o), i
        }
    });
    var sn = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({prop: function(e, t) {
            return gt(this, Z.prop, e, t, arguments.length > 1)
        },removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }}), Z.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        },propHooks: {tabIndex: {get: function(e) {
                    return e.hasAttribute("tabindex") || sn.test(e.nodeName) || e.href ? e.tabIndex : -1
                }}}}), V.optSelected || (Z.propHooks.selected = {get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({addClass: function(e) {
            var t, n, r, i, o, a, s = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).addClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(pt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = Z.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },removeClass: function(e) {
            var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).removeClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(pt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; i = t[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(pt) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (n === kt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }});
    var ln = /\r/g;
    Z.fn.extend({val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)) : void 0
        }}), Z.extend({valHooks: {option: {get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }},select: {get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (V.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o)
                                return t;
                            a.push(t)
                        }
                    return a
                },set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), a = i.length; a--; )
                        r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }}}}), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }}, V.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },unbind: function(e, t) {
            return this.off(e, null, t)
        },delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }});
    var cn = Z.now(), dn = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var fn, pn, hn = /#.*$/, mn = /([?&])_=[^&]*/, gn = /^(.*?):[ \t]*([^\r\n]*)$/gm, vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, yn = /^(?:GET|HEAD)$/, wn = /^\/\//, bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, xn = {}, Tn = {}, Cn = "*/".concat("*");
    try {
        pn = location.href
    } catch (Sn) {
        pn = Y.createElement("a"), pn.href = "", pn = pn.href
    }
    fn = bn.exec(pn.toLowerCase()) || [], Z.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: pn,type: "GET",isLocal: vn.test(fn[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": Cn,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": Z.parseJSON,"text xml": Z.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(e, t) {
            return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
        },ajaxPrefilter: H(xn),ajaxTransport: H(Tn),ajax: function(e, t) {
            function n(e, t, n, a) {
                var u, c, v, y, b, T = t;
                2 !== w && (w = 2, s && clearTimeout(s), r = void 0, o = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = P(d, x, n)), y = I(d, y, x, u), u ? (d.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = x.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", u ? h.resolveWith(f, [c, T, x]) : h.rejectWith(f, [x, T, v]), x.statusCode(g), g = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [x, d, u ? c : v]), m.fireWith(f, [x, T]), l && (p.trigger("ajaxComplete", [x, d]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, d = Z.ajaxSetup({}, t), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? Z(f) : Z.event, h = Z.Deferred(), m = Z.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, w = 0, b = "canceled", x = {readyState: 0,getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!a)
                            for (a = {}; t = gn.exec(o); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },getAllResponseHeaders: function() {
                    return 2 === w ? o : null
                },setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = y[n] = y[n] || e, v[e] = t), this
                },overrideMimeType: function(e) {
                    return w || (d.mimeType = e), this
                },statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > w)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            x.always(e[x.status]);
                    return this
                },abort: function(e) {
                    var t = e || b;
                    return r && r.abort(t), n(0, t), this
                }};
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || pn) + "").replace(hn, "").replace(wn, fn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(pt) || [""], null == d.crossDomain && (u = bn.exec(d.url.toLowerCase()), d.crossDomain = !(!u || u[1] === fn[1] && u[2] === fn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (fn[3] || ("http:" === fn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), q(xn, d, t, x), 2 === w)
                return x;
            l = d.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !yn.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (dn.test(i) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = mn.test(i) ? i.replace(mn, "$1_=" + cn++) : i + (dn.test(i) ? "&" : "?") + "_=" + cn++)), d.ifModified && (Z.lastModified[i] && x.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && x.setRequestHeader("If-None-Match", Z.etag[i])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Cn + "; q=0.01" : "") : d.accepts["*"]);
            for (c in d.headers)
                x.setRequestHeader(c, d.headers[c]);
            if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === w))
                return x.abort();
            b = "abort";
            for (c in {success: 1,error: 1,complete: 1})
                x[c](d[c]);
            if (r = q(Tn, d, t, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, r.send(v, n)
                } catch (T) {
                    if (!(2 > w))
                        throw T;
                    n(-1, T)
                }
            } else
                n(-1, "No Transport");
            return x
        },getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }}), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({url: e,type: t,dataType: i,data: n,success: r})
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({url: e,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }, Z.fn.extend({wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)), this)
        },wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }}), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var kn = /%20/g, _n = /\[\]$/, jn = /\r?\n/g, En = /^(?:submit|button|image|reset|file)$/i, Nn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e))
            Z.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                F(n, e[n], t, i);
        return r.join("&").replace(kn, "+")
    }, Z.fn.extend({serialize: function() {
            return Z.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Nn.test(this.nodeName) && !En.test(e) && (this.checked || !St.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {name: t.name,value: e.replace(jn, "\r\n")}
                }) : {name: t.name,value: n.replace(jn, "\r\n")}
            }).get()
        }}), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var $n = 0, An = {}, Dn = {0: 200,1223: 204}, Ln = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function() {
        for (var e in An)
            An[e]()
    }), V.cors = !!Ln && "withCredentials" in Ln, V.ajax = Ln = !!Ln, Z.ajaxTransport(function(e) {
        var t;
        return V.cors || Ln && !e.crossDomain ? {send: function(n, r) {
                var i, o = e.xhr(), a = ++$n;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields)
                        o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n)
                    o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete An[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Dn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = An[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t)
                        throw s
                }
            },abort: function() {
                t && t()
            }} : void 0
    }), Z.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(e) {
                return Z.globalEval(e), e
            }}}), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {send: function(r, i) {
                    t = Z("<script>").prop({async: !0,charset: e.scriptCharset,src: e.url}).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), Y.head.appendChild(t[0])
                },abort: function() {
                    n && n()
                }}
        }
    });
    var On = [], Hn = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var e = On.pop() || Z.expando + "_" + cn++;
            return this[e] = !0, e
        }}), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Hn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Hn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Hn, "$1" + i) : t.jsonp !== !1 && (t.url += (dn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || Z.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, On.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Y;
        var r = at.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var qn = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && qn)
            return qn.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Z.ajax({url: e,type: i,dataType: "html",data: t}).done(function(e) {
            o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Rn = e.document.documentElement;
    Z.offset = {setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = Z.css(e, "position"), d = Z(e), f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }}, Z.fn.extend({offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    Z.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {top: 0,left: 0}, o = r && r.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== kt && (i = r.getBoundingClientRect()), n = M(o), {top: i.top + n.pageYOffset - t.clientTop,left: i.left + n.pageXOffset - t.clientLeft}) : i) : void 0
        },position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0,left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {top: t.top - r.top - Z.css(n, "marginTop", !0),left: t.left - r.left - Z.css(n, "marginLeft", !0)}
            }
        },offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Rn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position"); )
                    e = e.offsetParent;
                return e || Rn
            })
        }}), Z.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return gt(this, function(t, i, o) {
                var a = M(t);
                return void 0 === o ? a ? a[n] : t[i] : void (a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = T(V.pixelPosition, function(e, n) {
            return n ? (n = x(e, t), Bt.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({Height: "height",Width: "width"}, function(e, t) {
        Z.each({padding: "inner" + e,content: t,"": "outer" + e}, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" : "border");
                return gt(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Pn = e.jQuery, In = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = In), t && e.jQuery === Z && (e.jQuery = Pn), Z
    }, typeof t === kt && (e.jQuery = e.$ = Z), Z
}), function(e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n;
    e.rails = n = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",buttonClickSelector: "button[data-remote]",inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector: "form",formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector: "input[type=file]",linkDisableSelector: "a[data-disable-with]",CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },confirm: function(e) {
            return confirm(e)
        },ajax: function(t) {
            return e.ajax(t)
        },href: function(e) {
            return e.attr("href")
        },handleRemote: function(r) {
            var i, o, a, s, u, l, c, d;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("cross-domain"), u = s === t ? null : s, l = r.data("with-credentials") || null, c = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                    i = r.attr("method"), o = r.attr("action"), a = r.serializeArray();
                    var f = r.data("ujs:submit-button");
                    f && (a.push(f), r.data("ujs:submit-button", null))
                } else
                    r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
                d = {type: i || "GET",data: a,dataType: c,beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(r, "ajax:beforeSend", [e, i])
                    },success: function(e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    },complete: function(e, t) {
                        r.trigger("ajax:complete", [e, t])
                    },error: function(e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    },crossDomain: u}, l && (d.xhrFields = {withCredentials: l}), o && (d.url = o);
                var p = n.ajax(d);
                return r.trigger("ajax:send", p), p
            }
            return !1
        },handleMethod: function(r) {
            var i = n.href(r), o = r.data("method"), a = r.attr("target"), s = e("meta[name=csrf-token]").attr("content"), u = e("meta[name=csrf-param]").attr("content"), l = e('<form method="post" action="' + i + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
            u !== t && s !== t && (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(c).appendTo("body"), l.submit()
        },disableFormElements: function(t) {
            t.find(n.disableSelector).each(function() {
                var t = e(this), n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },enableFormElements: function(t) {
            t.find(n.enableSelector).each(function() {
                var t = e(this), n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },allowAction: function(e) {
            var t, r = e.data("confirm"), i = !1;
            return r ? (n.fire(e, "confirm") && (i = n.confirm(r), t = n.fire(e, "confirm:complete", [i])), i && t) : !0
        },blankInputs: function(t, n, r) {
            var i, o, a = e(), s = n || "input,textarea", u = t.find(s);
            return u.each(function() {
                if (i = e(this), o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val(), !o == !r) {
                    if (i.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length)
                        return !0;
                    a = a.add(i)
                }
            }), a.length ? a : !1
        },nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            })
        },enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }}, n.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }), e(document).delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }), e(document).delegate(n.linkClickSelector, "click.rails", function(r) {
        var i = e(this), o = i.data("method"), a = i.data("params");
        if (!n.allowAction(i))
            return n.stopEverything(r);
        if (i.is(n.linkDisableSelector) && n.disableElement(i), i.data("remote") !== t) {
            if (!(!r.metaKey && !r.ctrlKey || o && "GET" !== o || a))
                return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.error(function() {
                n.enableElement(i)
            }), !1
        }
        return i.data("method") ? (n.handleMethod(i), !1) : void 0
    }), e(document).delegate(n.buttonClickSelector, "click.rails", function(t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), e(document).delegate(n.inputChangeSelector, "change.rails", function(t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), e(document).delegate(n.formSubmitSelector, "submit.rails", function(r) {
        var i = e(this), o = i.data("remote") !== t, a = n.blankInputs(i, n.requiredInputSelector), s = n.nonBlankInputs(i, n.fileInputSelector);
        if (!n.allowAction(i))
            return n.stopEverything(r);
        if (a && i.attr("novalidate") == t && n.fire(i, "ajax:aborted:required", [a]))
            return n.stopEverything(r);
        if (o) {
            if (s) {
                setTimeout(function() {
                    n.disableFormElements(i)
                }, 13);
                var u = n.fire(i, "ajax:aborted:file", [s]);
                return u || setTimeout(function() {
                    n.enableFormElements(i)
                }, 13), u
            }
            return n.handleRemote(i), !1
        }
        setTimeout(function() {
            n.disableFormElements(i)
        }, 13)
    }), e(document).delegate(n.formInputClickSelector, "click.rails", function(t) {
        var r = e(this);
        if (!n.allowAction(r))
            return n.stopEverything(t);
        var i = r.attr("name"), o = i ? {name: i,value: r.val()} : null;
        r.closest("form").data("ujs:submit-button", o)
    }), e(document).delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && n.disableFormElements(e(this))
    }), e(document).delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function() {
        var t = e("meta[name=csrf-token]").attr("content"), n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery), function() {
    function e() {
        var e = !1;
        if ("localStorage" in window)
            try {
                window.localStorage.setItem("_tmptest", "tmpval"), e = !0, window.localStorage.removeItem("_tmptest")
            } catch (t) {
            }
        if (e)
            try {
                window.localStorage && (x = window.localStorage, S = "localStorage", j = x.jStorage_update)
            } catch (i) {
            }
        else if ("globalStorage" in window)
            try {
                window.globalStorage && (x = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], S = "globalStorage", j = x.jStorage_update)
            } catch (o) {
            }
        else {
            if (T = document.createElement("link"), !T.addBehavior)
                return void (T = null);
            T.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(T);
            try {
                T.load("jStorage")
            } catch (a) {
                T.setAttribute("jStorage", "{}"), T.save("jStorage"), T.load("jStorage")
            }
            var u = "{}";
            try {
                u = T.getAttribute("jStorage")
            } catch (l) {
            }
            try {
                j = T.getAttribute("jStorage_update")
            } catch (f) {
            }
            x.jStorage = u, S = "userDataBehavior"
        }
        s(), c(), n(), d(), "addEventListener" in window && window.addEventListener("pageshow", function(e) {
            e.persisted && r()
        }, !1)
    }
    function t() {
        var e = "{}";
        if ("userDataBehavior" == S) {
            T.load("jStorage");
            try {
                e = T.getAttribute("jStorage")
            } catch (t) {
            }
            try {
                j = T.getAttribute("jStorage_update")
            } catch (n) {
            }
            x.jStorage = e
        }
        s(), c(), d()
    }
    function n() {
        "localStorage" == S || "globalStorage" == S ? "addEventListener" in window ? window.addEventListener("storage", r, !1) : document.attachEvent("onstorage", r) : "userDataBehavior" == S && setInterval(r, 1e3)
    }
    function r() {
        var e;
        clearTimeout(_), _ = setTimeout(function() {
            if ("localStorage" == S || "globalStorage" == S)
                e = x.jStorage_update;
            else if ("userDataBehavior" == S) {
                T.load("jStorage");
                try {
                    e = T.getAttribute("jStorage_update")
                } catch (t) {
                }
            }
            e && e != j && (j = e, i())
        }, 25)
    }
    function i() {
        var e, n = y.parse(y.stringify(b.__jstorage_meta.CRC32));
        t(), e = y.parse(y.stringify(b.__jstorage_meta.CRC32));
        var r, i = [], a = [];
        for (r in n)
            if (n.hasOwnProperty(r)) {
                if (!e[r]) {
                    a.push(r);
                    continue
                }
                n[r] != e[r] && "2." == String(n[r]).substr(0, 2) && i.push(r)
            }
        for (r in e)
            e.hasOwnProperty(r) && (n[r] || i.push(r));
        o(i, "updated"), o(a, "deleted")
    }
    function o(e, t) {
        if (e = [].concat(e || []), "flushed" == t) {
            e = [];
            for (var n in k)
                k.hasOwnProperty(n) && e.push(n);
            t = "deleted"
        }
        for (var r = 0, i = e.length; i > r; r++) {
            if (k[e[r]])
                for (var o = 0, a = k[e[r]].length; a > o; o++)
                    k[e[r]][o](e[r], t);
            if (k["*"])
                for (var o = 0, a = k["*"].length; a > o; o++)
                    k["*"][o](e[r], t)
        }
    }
    function a() {
        var e = (+new Date).toString();
        "localStorage" == S || "globalStorage" == S ? x.jStorage_update = e : "userDataBehavior" == S && (T.setAttribute("jStorage_update", e), T.save("jStorage")), r()
    }
    function s() {
        if (x.jStorage)
            try {
                b = y.parse(String(x.jStorage))
            } catch (e) {
                x.jStorage = "{}"
            }
        else
            x.jStorage = "{}";
        C = x.jStorage ? String(x.jStorage).length : 0, b.__jstorage_meta || (b.__jstorage_meta = {}), b.__jstorage_meta.CRC32 || (b.__jstorage_meta.CRC32 = {})
    }
    function u() {
        p();
        try {
            x.jStorage = y.stringify(b), T && (T.setAttribute("jStorage", x.jStorage), T.save("jStorage")), C = x.jStorage ? String(x.jStorage).length : 0
        } catch (e) {
        }
    }
    function l(e) {
        if (!e || "string" != typeof e && "number" != typeof e)
            throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == e)
            throw new TypeError("Reserved key name");
        return !0
    }
    function c() {
        var e, t, n, r, i = 1 / 0, s = !1, l = [];
        if (clearTimeout(w), b.__jstorage_meta && "object" == typeof b.__jstorage_meta.TTL) {
            e = +new Date, n = b.__jstorage_meta.TTL, r = b.__jstorage_meta.CRC32;
            for (t in n)
                n.hasOwnProperty(t) && (n[t] <= e ? (delete n[t], delete r[t], delete b[t], s = !0, l.push(t)) : n[t] < i && (i = n[t]));
            1 / 0 != i && (w = setTimeout(c, i - e)), s && (u(), a(), o(l, "deleted"))
        }
    }
    function d() {
        var e, t;
        if (b.__jstorage_meta.PubSub) {
            var n, r = N;
            for (e = t = b.__jstorage_meta.PubSub.length - 1; e >= 0; e--)
                n = b.__jstorage_meta.PubSub[e], n[0] > N && (r = n[0], f(n[1], n[2]));
            N = r
        }
    }
    function f(e, t) {
        if (E[e])
            for (var n = 0, r = E[e].length; r > n; n++)
                E[e][n](e, y.parse(y.stringify(t)))
    }
    function p() {
        if (b.__jstorage_meta.PubSub) {
            for (var e = +new Date - 2e3, t = 0, n = b.__jstorage_meta.PubSub.length; n > t; t++)
                if (b.__jstorage_meta.PubSub[t][0] <= e) {
                    b.__jstorage_meta.PubSub.splice(t, b.__jstorage_meta.PubSub.length - t);
                    break
                }
            b.__jstorage_meta.PubSub.length || delete b.__jstorage_meta.PubSub
        }
    }
    function h(e, t) {
        b.__jstorage_meta || (b.__jstorage_meta = {}), b.__jstorage_meta.PubSub || (b.__jstorage_meta.PubSub = []), b.__jstorage_meta.PubSub.unshift([+new Date, e, t]), u(), a()
    }
    function m(e, t) {
        for (var n, r = e.length, i = t ^ r, o = 0; r >= 4; )
            n = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), n ^= n >>> 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ n, r -= 4, ++o;
        switch (r) {
            case 3:
                i ^= (255 & e.charCodeAt(o + 2)) << 16;
            case 2:
                i ^= (255 & e.charCodeAt(o + 1)) << 8;
            case 1:
                i ^= 255 & e.charCodeAt(o), i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16)
        }
        return i ^= i >>> 13, i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16), i ^= i >>> 15, i >>> 0
    }
    var g = "0.4.3", v = window.jQuery || window.$ || (window.$ = {}), y = {parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(e) {
            return String(e).evalJSON()
        } || v.parseJSON || v.evalJSON,stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || v.toJSON};
    if (!y.parse || !y.stringify)
        throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var w, b = {__jstorage_meta: {CRC32: {}}}, x = {jStorage: "{}"}, T = null, C = 0, S = !1, k = {}, _ = !1, j = 0, E = {}, N = +new Date, $ = {isXML: function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        },encode: function(e) {
            if (!this.isXML(e))
                return !1;
            try {
                return (new XMLSerializer).serializeToString(e)
            } catch (t) {
                try {
                    return e.xml
                } catch (n) {
                }
            }
            return !1
        },decode: function(e) {
            var t, n = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function(e) {
                var t = new ActiveXObject("Microsoft.XMLDOM");
                return t.async = "false", t.loadXML(e), t
            };
            return n ? (t = n.call("DOMParser" in window && new DOMParser || window, e, "text/xml"), this.isXML(t) ? t : !1) : !1
        }};
    v.jStorage = {version: g,set: function(e, t, n) {
            if (l(e), n = n || {}, "undefined" == typeof t)
                return this.deleteKey(e), t;
            if ($.isXML(t))
                t = {_is_xml: !0,xml: $.encode(t)};
            else {
                if ("function" == typeof t)
                    return void 0;
                t && "object" == typeof t && (t = y.parse(y.stringify(t)))
            }
            return b[e] = t, b.__jstorage_meta.CRC32[e] = "2." + m(y.stringify(t), 2538058380), this.setTTL(e, n.TTL || 0), o(e, "updated"), t
        },get: function(e, t) {
            return l(e), e in b ? b[e] && "object" == typeof b[e] && b[e]._is_xml ? $.decode(b[e].xml) : b[e] : "undefined" == typeof t ? null : t
        },deleteKey: function(e) {
            return l(e), e in b ? (delete b[e], "object" == typeof b.__jstorage_meta.TTL && e in b.__jstorage_meta.TTL && delete b.__jstorage_meta.TTL[e], delete b.__jstorage_meta.CRC32[e], u(), a(), o(e, "deleted"), !0) : !1
        },setTTL: function(e, t) {
            var n = +new Date;
            return l(e), t = Number(t) || 0, e in b ? (b.__jstorage_meta.TTL || (b.__jstorage_meta.TTL = {}), t > 0 ? b.__jstorage_meta.TTL[e] = n + t : delete b.__jstorage_meta.TTL[e], u(), c(), a(), !0) : !1
        },getTTL: function(e) {
            var t, n = +new Date;
            return l(e), e in b && b.__jstorage_meta.TTL && b.__jstorage_meta.TTL[e] ? (t = b.__jstorage_meta.TTL[e] - n, t || 0) : 0
        },flush: function() {
            return b = {__jstorage_meta: {CRC32: {}}}, u(), a(), o(null, "flushed"), !0
        },storageObj: function() {
            function e() {
            }
            return e.prototype = b, new e
        },index: function() {
            var e, t = [];
            for (e in b)
                b.hasOwnProperty(e) && "__jstorage_meta" != e && t.push(e);
            return t
        },storageSize: function() {
            return C
        },currentBackend: function() {
            return S
        },storageAvailable: function() {
            return !!S
        },listenKeyChange: function(e, t) {
            l(e), k[e] || (k[e] = []), k[e].push(t)
        },stopListening: function(e, t) {
            if (l(e), k[e]) {
                if (!t)
                    return void delete k[e];
                for (var n = k[e].length - 1; n >= 0; n--)
                    k[e][n] == t && k[e].splice(n, 1)
            }
        },subscribe: function(e, t) {
            if (e = (e || "").toString(), !e)
                throw new TypeError("Channel not defined");
            E[e] || (E[e] = []), E[e].push(t)
        },publish: function(e, t) {
            if (e = (e || "").toString(), !e)
                throw new TypeError("Channel not defined");
            h(e, t)
        },reInit: function() {
            t()
        }}, e()
}(), function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
}(this, function() {
    "use strict";
    function e(e, t) {
        var n, r = document.createElement(e || "div");
        for (n in t)
            r[n] = t[n];
        return r
    }
    function t(e) {
        for (var t = 1, n = arguments.length; n > t; t++)
            e.appendChild(arguments[t]);
        return e
    }
    function n(e, t, n, r) {
        var i = ["opacity", t, ~~(100 * e), n, r].join("-"), o = .01 + n / r * 100, a = Math.max(1 - (1 - e) / t * (100 - o), e), s = l.substring(0, l.indexOf("Animation")).toLowerCase(), u = s && "-" + s + "-" || "";
        return d[i] || (f.insertRule("@" + u + "keyframes " + i + "{0%{opacity:" + a + "}" + o + "%{opacity:" + e + "}" + (o + .01) + "%{opacity:1}" + (o + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + a + "}}", f.cssRules.length), d[i] = 1), i
    }
    function r(e, t) {
        var n, r, i = e.style;
        if (void 0 !== i[t])
            return t;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < c.length; r++)
            if (n = c[r] + t, void 0 !== i[n])
                return n
    }
    function i(e, t) {
        for (var n in t)
            e.style[r(e, n) || n] = t[n];
        return e
    }
    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                void 0 === e[r] && (e[r] = n[r])
        }
        return e
    }
    function a(e) {
        for (var t = {x: e.offsetLeft,y: e.offsetTop}; e = e.offsetParent; )
            t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }
    function s(e) {
        return "undefined" == typeof this ? new s(e) : void (this.opts = o(e || {}, s.defaults, p))
    }
    function u() {
        function n(t, n) {
            return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
        }
        f.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function(e, r) {
            function o() {
                return i(n("group", {coordsize: l + " " + l,coordorigin: -u + " " + -u}), {width: l,height: l})
            }
            function a(e, a, s) {
                t(d, t(i(o(), {rotation: 360 / r.lines * e + "deg",left: ~~a}), t(i(n("roundrect", {arcsize: r.corners}), {width: u,height: r.width,left: r.radius,top: -r.width >> 1,filter: s}), n("fill", {color: r.color,opacity: r.opacity}), n("stroke", {opacity: 0}))))
            }
            var s, u = r.length + r.width, l = 2 * u, c = 2 * -(r.width + r.length) + "px", d = i(o(), {position: "absolute",top: c,left: c});
            if (r.shadow)
                for (s = 1; s <= r.lines; s++)
                    a(s, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (s = 1; s <= r.lines; s++)
                a(s);
            return t(e, d)
        }, s.prototype.opacity = function(e, t, n, r) {
            var i = e.firstChild;
            r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
        }
    }
    var l, c = ["webkit", "Moz", "ms", "O"], d = {}, f = function() {
        var n = e("style", {type: "text/css"});
        return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
    }(), p = {lines: 12,length: 7,width: 5,radius: 10,rotate: 0,corners: 1,color: "#000",direction: 1,speed: 1,trail: 100,opacity: .25,fps: 20,zIndex: 2e9,className: "spinner",top: "auto",left: "auto",position: "relative"};
    s.defaults = {}, o(s.prototype, {spin: function(t) {
            this.stop();
            var n, r, o = this, s = o.opts, u = o.el = i(e(0, {className: s.className}), {position: s.position,width: 0,zIndex: s.zIndex}), c = s.radius + s.length + s.width;
            if (t && (t.insertBefore(u, t.firstChild || null), r = a(t), n = a(u), i(u, {left: ("auto" == s.left ? r.x - n.x + (t.offsetWidth >> 1) : parseInt(s.left, 10) + c) + "px",top: ("auto" == s.top ? r.y - n.y + (t.offsetHeight >> 1) : parseInt(s.top, 10) + c) + "px"})), u.setAttribute("role", "progressbar"), o.lines(u, o.opts), !l) {
                var d, f = 0, p = (s.lines - 1) * (1 - s.direction) / 2, h = s.fps, m = h / s.speed, g = (1 - s.opacity) / (m * s.trail / 100), v = m / s.lines;
                !function y() {
                    f++;
                    for (var e = 0; e < s.lines; e++)
                        d = Math.max(1 - (f + (s.lines - e) * v) % m * g, s.opacity), o.opacity(u, e * s.direction + p, d, s);
                    o.timeout = o.el && setTimeout(y, ~~(1e3 / h))
                }()
            }
            return o
        },stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
        },lines: function(r, o) {
            function a(t, n) {
                return i(e(), {position: "absolute",width: o.length + o.width + "px",height: o.width + "px",background: t,boxShadow: n,transformOrigin: "left",transform: "rotate(" + ~~(360 / o.lines * u + o.rotate) + "deg) translate(" + o.radius + "px,0)",borderRadius: (o.corners * o.width >> 1) + "px"})
            }
            for (var s, u = 0, c = (o.lines - 1) * (1 - o.direction) / 2; u < o.lines; u++)
                s = i(e(), {position: "absolute",top: 1 + ~(o.width / 2) + "px",transform: o.hwaccel ? "translate3d(0,0,0)" : "",opacity: o.opacity,animation: l && n(o.opacity, o.trail, c + u * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"}), o.shadow && t(s, i(a("#000", "0 0 4px #000"), {top: "2px"})), t(r, t(s, a(o.color, "0 0 1px rgba(0,0,0,.1)")));
            return r
        },opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }});
    var h = i(e("group"), {behavior: "url(#default#VML)"});
    return !r(h, "transform") && h.adj ? u() : l = r(h, "animation"), s
}), function(e) {
    if ("object" == typeof exports)
        e(require("jquery"), require("spin"));
    else if ("function" == typeof define && define.amd)
        define(["jquery", "spin"], e);
    else {
        if (!window.Spinner)
            throw new Error("Spin.js not present");
        e(window.jQuery, window.Spinner)
    }
}(function(e, t) {
    e.fn.spin = function(n, r) {
        return this.each(function() {
            var i = e(this), o = i.data();
            o.spinner && (o.spinner.stop(), delete o.spinner), n !== !1 && (n = e.extend({color: r || i.css("color")}, e.fn.spin.presets[n] || n), o.spinner = new t(n).spin(this))
        })
    }, e.fn.spin.presets = {tiny: {lines: 8,length: 2,width: 2,radius: 3},small: {lines: 8,length: 4,width: 3,radius: 5},large: {lines: 10,length: 8,width: 4,radius: 8}}
}), $.fn.spin.presets.loader = {lines: 12,length: 4,width: 2,radius: 5,corners: 1,rotate: 0,direction: 1,speed: 1.4,trail: 56,shadow: !1,hwaccel: !0,className: "spinner",top: "auto",left: "auto"}, function() {
    window.delay = function(e, t) {
        return setTimeout(t, e)
    }, window.isActive = !0, window.onfocus = function() {
        return window.isActive = !0
    }, window.onblur = function() {
        return window.isActive = !1
    }, window.startApplication = function() {
        var e, t, n, r, i, o;
        return n || (n = null), o || (o = null), e = function() {
            return clearTimeout(o), n = setTimeout(function() {
                return $("body").removeClass("menu_active"), $("#master").removeClass("active"), $(".kudo.side").removeClass("pushover"), $("nav#master").scrollTop(0)
            }, 600)
        }, t = function() {
            return clearTimeout(o), $("body").removeClass("menu_active"), $("#master").removeClass("active"), $(".kudo.side").removeClass("pushover"), $("nav#master").scrollTop(0)
        }, r = function() {
            return clearTimeout(n), o = setTimeout(function() {
                return $("body").addClass("menu_active"), $("#master").addClass("active"), $(".kudo.side").addClass("pushover")
            }, 300)
        }, i = function() {
            return clearTimeout(n), $("body").addClass("menu_active"), $("#master").addClass("active"), $(".kudo.side").addClass("pushover")
        }, $("div#touch_close").on("touchend", function() {
            return t(), !1
        }), $("div#touch_close").on("click", function() {
            return t(), !1
        }), $("#master_indicator, #master_indicator a").on("click", function() {
            return !1
        }), $("div#touch_menu").on("touchend", function() {
            return $("#master").hasClass("active") ? t() : i(), !1
        }), $("div#touch_menu").on("click", function() {
            return $("#master").hasClass("active") ? t() : i(), !1
        }), $("#master, div#touch_menu").on("mouseenter", function() {
            return r()
        }).on("mouseleave", function() {
            return e()
        }), !1
    }
}.call(this), function() {
    window.startOverlord = function() {
        var e, t, n, r;
        return setTimeout(function() {
            return $("body").addClass("loaded")
        }, 100), t || (t = null), r || (r = null), e = function(e) {
            return null == e && (e = 300), clearTimeout(r), t = setTimeout(function() {
                return $("body").removeClass("overlord_active").removeClass("overlord_opened")
            }, e)
        }, n = function(e) {
            return null == e && (e = 50), clearTimeout(t), r = setTimeout(function() {
                return $("body").addClass("overlord_active"), setTimeout(function() {
                    return $("body").addClass("overlord_done")
                }, 20), setTimeout(function() {
                    return $("body").addClass("overlord_opened")
                }, 500)
            }, e)
        }, $("div#whiteout").on("click", function() {
            return e(0), !1
        }), $("ul#dropdown li a").on("click", function() {
            return e(0)
        }), $("#hamburger").on("click touchend", function() {
            return $("body").hasClass("overlord_opened") ? (e(0), $("body").removeClass("overlord_opened")) : n(0), !1
        }), $("#hamburger, ul#dropdown").on("mouseenter", function() {
            return n(200)
        }).on("mouseleave", function() {
            return e(600)
        }), !1
    }
}.call(this), function() {
    var e, t, n, r, i, o, a, s, u, l, c, d, f, p, h, m, g, v, y, w, b, x, T, C, S, k, _, j, E, N, $, A, D, L, O, H, q, R, P, I, F, M, B, z, W, X, U, K, J, G, V, Y, Q, Z, et, tt, nt = [].indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }, rt = {}.hasOwnProperty, it = function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t)
            rt.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    }, ot = [].slice, at = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    L = {}, f = 10, V = !1, P = null, y = null, A = null, F = null, et = null, r = {BEFORE_CHANGE: "page:before-change",FETCH: "page:fetch",RECEIVE: "page:receive",CHANGE: "page:change",UPDATE: "page:update",LOAD: "page:load",RESTORE: "page:restore",BEFORE_UNLOAD: "page:before-unload",EXPIRE: "page:expire"}, C = function(e) {
        var t;
        return e = new n(e), X(), d(), null != P && P.start(), V && (t = Y(e.absolute)) ? (S(t), k(e, null, !1)) : k(e, J)
    }, Y = function(e) {
        var t;
        return t = L[e], t && !t.transitionCacheDisabled ? t : void 0
    }, b = function(e) {
        return null == e && (e = !0), V = e
    }, w = function(e) {
        return null == e && (e = !0), l ? e ? null != P ? P : P = new o("html") : (null != P && P.uninstall(), P = null) : void 0
    }, k = function(e, t, n) {
        return null == n && (n = !0), Q(r.FETCH, {url: e.absolute}), null != et && et.abort(), et = new XMLHttpRequest, et.open("GET", e.withoutHashForIE10compatibility(), !0), et.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), et.setRequestHeader("X-XHR-Referer", F), et.onload = function() {
            var n;
            return Q(r.RECEIVE, {url: e.absolute}), (n = R()) ? (M(e), B(), p.apply(null, T(n)), D(), "function" == typeof t && t(), Q(r.LOAD)) : document.location.href = v() || e.absolute
        }, P && n && (et.onprogress = function() {
            return function(e) {
                var t;
                return t = e.lengthComputable ? e.loaded / e.total * 100 : P.value + (100 - P.value) / 10, P.advanceTo(t)
            }
        }(this)), et.onloadend = function() {
            return et = null
        }, et.onerror = function() {
            return document.location.href = e.absolute
        }, et.send()
    }, S = function(e) {
        return null != et && et.abort(), p(e.title, e.body), I(e), Q(r.RESTORE)
    }, d = function() {
        var e;
        return e = new n(y.url), L[e.absolute] = {url: e.relative,body: document.body,title: document.title,positionY: window.pageYOffset,positionX: window.pageXOffset,cachedAt: (new Date).getTime(),transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")}, m(f)
    }, H = function(e) {
        return null == e && (e = f), /^[\d]+$/.test(e) ? f = parseInt(e) : void 0
    }, m = function(e) {
        var t, n, i, o, a, s;
        for (i = Object.keys(L), t = i.map(function(e) {
            return L[e].cachedAt
        }).sort(function(e, t) {
            return t - e
        }), s = [], o = 0, a = i.length; a > o; o++)
            n = i[o], L[n].cachedAt <= t[e] && (Q(r.EXPIRE, L[n]), s.push(delete L[n]));
        return s
    }, p = function(t, n, i, o) {
        return Q(r.BEFORE_UNLOAD), document.title = t, document.documentElement.replaceChild(n, document.body), null != i && e.update(i), G(), o && x(), y = window.history.state, null != P && P.done(), Q(r.CHANGE), Q(r.UPDATE)
    }, x = function() {
        var e, t, n, r, i, o, a, s, u, l, c, d;
        for (o = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), a = 0, u = o.length; u > a; a++)
            if (i = o[a], "" === (c = i.type) || "text/javascript" === c) {
                for (t = document.createElement("script"), d = i.attributes, s = 0, l = d.length; l > s; s++)
                    e = d[s], t.setAttribute(e.name, e.value);
                i.hasAttribute("async") || (t.async = !1), t.appendChild(document.createTextNode(i.innerHTML)), r = i.parentNode, n = i.nextSibling, r.removeChild(i), r.insertBefore(t, n)
            }
    }, U = function(e) {
        return e.innerHTML = e.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), e
    }, G = function() {
        var e, t;
        return e = (t = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[t.length - 1], e && document.activeElement !== e ? e.focus() : void 0
    }, M = function(e) {
        return (e = new n(e)).absolute !== F ? window.history.pushState({turbolinks: !0,url: e.absolute}, "", e.absolute) : void 0
    }, B = function() {
        var e, t;
        return (e = et.getResponseHeader("X-XHR-Redirected-To")) ? (e = new n(e), t = e.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", e.href + t)) : void 0
    }, v = function() {
        var e;
        return null != (e = et.getResponseHeader("Location")) && new n(e).crossOrigin() ? e : void 0
    }, X = function() {
        return F = document.location.href
    }, W = function() {
        return window.history.replaceState({turbolinks: !0,url: document.location.href}, "", document.location.href)
    }, z = function() {
        return y = window.history.state
    }, D = function() {
        var e;
        return navigator.userAgent.match(/Firefox/) && !(e = new n).hasNoHash() ? (window.history.replaceState(y, "", e.withoutHash()), document.location.hash = e.hash) : void 0
    }, I = function(e) {
        return window.scrollTo(e.positionX, e.positionY)
    }, J = function() {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, h = function(e) {
        var t, n, r;
        if (null == e || "object" != typeof e)
            return e;
        t = new e.constructor;
        for (n in e)
            r = e[n], t[n] = h(r);
        return t
    }, q = function(e) {
        var t, n;
        return t = (null != (n = document.cookie.match(new RegExp(e + "=(\\w+)"))) ? n[1].toUpperCase() : void 0) || "", document.cookie = e + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", t
    }, Q = function(e, t) {
        var n;
        return "undefined" != typeof Prototype && Event.fire(document, e, t, !0), n = document.createEvent("Events"), t && (n.data = t), n.initEvent(e, !0, !0), document.dispatchEvent(n)
    }, O = function(e) {
        return !Q(r.BEFORE_CHANGE, {url: e})
    }, R = function() {
        var e, t, n, r, i, o;
        return t = function() {
            var e;
            return 400 <= (e = et.status) && 600 > e
        }, o = function() {
            var e;
            return null != (e = et.getResponseHeader("Content-Type")) && e.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, r = function(e) {
            var t, n, r, i, o;
            for (i = e.querySelector("head").childNodes, o = [], n = 0, r = i.length; r > n; n++)
                t = i[n], null != ("function" == typeof t.getAttribute ? t.getAttribute("data-turbolinks-track") : void 0) && o.push(t.getAttribute("src") || t.getAttribute("href"));
            return o
        }, e = function(e) {
            var t;
            return A || (A = r(document)), t = r(e), t.length !== A.length || i(t, A).length !== A.length
        }, i = function(e, t) {
            var n, r, i, o, a;
            for (e.length > t.length && (o = [t, e], e = o[0], t = o[1]), a = [], r = 0, i = e.length; i > r; r++)
                n = e[r], nt.call(t, n) >= 0 && a.push(n);
            return a
        }, !t() && o() && (n = g(et.responseText), n && !e(n)) ? n : void 0
    }, T = function(t) {
        var n;
        return n = t.querySelector("title"), [null != n ? n.textContent : void 0, U(t.querySelector("body")), e.get(t).token, "runScripts"]
    }, e = {get: function(e) {
            var t;
            return null == e && (e = document), {node: t = e.querySelector('meta[name="csrf-token"]'),token: null != t && "function" == typeof t.getAttribute ? t.getAttribute("content") : void 0}
        },update: function(e) {
            var t;
            return t = this.get(), null != t.token && null != e && t.token !== e ? t.node.setAttribute("content", e) : void 0
        }}, g = function(e) {
        var t;
        return t = document.documentElement.cloneNode(), t.innerHTML = e, t.head = t.querySelector("head"), t.body = t.querySelector("body"), t
    }, n = function() {
        function e(t) {
            return this.original = null != t ? t : document.location.href, this.original.constructor === e ? this.original : void this._parse()
        }
        return e.prototype.withoutHash = function() {
            return this.href.replace(this.hash, "").replace("#", "")
        }, e.prototype.withoutHashForIE10compatibility = function() {
            return this.withoutHash()
        }, e.prototype.hasNoHash = function() {
            return 0 === this.hash.length
        }, e.prototype.crossOrigin = function() {
            return this.origin !== (new e).origin
        }, e.prototype._parse = function() {
            var e;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, e = this.link, this.href = e.href, this.protocol = e.protocol, this.host = e.host, this.hostname = e.hostname, this.port = e.port, this.pathname = e.pathname, this.search = e.search, this.hash = e.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
        }, e
    }(), i = function(e) {
        function t(e) {
            return this.link = e, this.link.constructor === t ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void t.__super__.constructor.apply(this, arguments))
        }
        return it(t, e), t.HTML_EXTENSIONS = ["html"], t.allowExtensions = function() {
            var e, n, r, i;
            for (n = 1 <= arguments.length ? ot.call(arguments, 0) : [], r = 0, i = n.length; i > r; r++)
                e = n[r], t.HTML_EXTENSIONS.push(e);
            return t.HTML_EXTENSIONS
        }, t.prototype.shouldIgnore = function() {
            return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }, t.prototype._anchored = function() {
            return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
        }, t.prototype._nonHtml = function() {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + t.HTML_EXTENSIONS.join("|") + ")?$", "g"))
        }, t.prototype._optOut = function() {
            var e, t;
            for (t = this.originalElement; !e && t !== document; )
                e = null != t.getAttribute("data-no-turbolink"), t = t.parentNode;
            return e
        }, t.prototype._target = function() {
            return 0 !== this.link.target.length
        }, t
    }(n), t = function() {
        function e(e) {
            this.event = e, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (O(this.link.absolute) || Z(this.link.href), this.event.preventDefault()))
        }
        return e.installHandlerLast = function(t) {
            return t.defaultPrevented ? void 0 : (document.removeEventListener("click", e.handle, !1), document.addEventListener("click", e.handle, !1))
        }, e.handle = function(t) {
            return new e(t)
        }, e.prototype._extractLink = function() {
            var e;
            for (e = this.event.target; e.parentNode && "A" !== e.nodeName; )
                e = e.parentNode;
            return "A" === e.nodeName && 0 !== e.href.length ? this.link = new i(e) : void 0
        }, e.prototype._validForTurbolinks = function() {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }, e.prototype._nonStandardClick = function() {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }, e
    }(), o = function() {
        function e(e) {
            this.elementSelector = e, this._trickle = at(this._trickle, this), this.value = 0, this.opacity = 1, this.content = "", this.speed = 300, this.install()
        }
        var t;
        return t = "turbolinks-progress-bar", e.prototype.install = function() {
            return this.element = document.querySelector(this.elementSelector), this.element.classList.add(t), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
        }, e.prototype.uninstall = function() {
            return this.element.classList.remove(t), document.head.removeChild(this.styleElement)
        }, e.prototype.start = function() {
            return this.advanceTo(5)
        }, e.prototype.advanceTo = function(e) {
            var t;
            if (e > (t = this.value) && 100 >= t) {
                if (this.value = e, this._updateStyle(), 100 === this.value)
                    return this._stopTrickle();
                if (this.value > 0)
                    return this._startTrickle()
            }
        }, e.prototype.done = function() {
            return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
        }, e.prototype._reset = function() {
            return setTimeout(function(e) {
                return function() {
                    return e.opacity = 0, e._updateStyle()
                }
            }(this), this.speed / 2), setTimeout(function(e) {
                return function() {
                    return e.value = 0, e.opacity = 1, e._withSpeed(0, function() {
                        return e._updateStyle(!0)
                    })
                }
            }(this), this.speed)
        }, e.prototype._startTrickle = function() {
            return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
        }, e.prototype._stopTrickle = function() {
            return delete this.trickling
        }, e.prototype._trickle = function() {
            return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
        }, e.prototype._withSpeed = function(e, t) {
            var n, r;
            return n = this.speed, this.speed = e, r = t(), this.speed = n, r
        }, e.prototype._updateStyle = function(e) {
            return null == e && (e = !1), e && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
        }, e.prototype._changeContentToForceRepaint = function() {
            return this.content = "" === this.content ? " " : ""
        }, e.prototype._createCSSRule = function() {
            return "" + this.elementSelector + "." + t + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
        }, e
    }(), c = function(e) {
        return setTimeout(e, 500)
    }, E = function() {
        return document.addEventListener("DOMContentLoaded", function() {
            return Q(r.CHANGE), Q(r.UPDATE)
        }, !0)
    }, $ = function() {
        return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function(e, t) {
            return jQuery.trim(t.responseText) ? Q(r.UPDATE) : void 0
        }) : void 0
    }, N = function(e) {
        var t, r;
        return (null != (r = e.state) ? r.turbolinks : void 0) ? (t = L[new n(e.state.url).absolute]) ? (d(), S(t)) : Z(e.target.location.href) : void 0
    }, j = function() {
        return W(), z(), document.addEventListener("click", t.installHandlerLast, !0), window.addEventListener("hashchange", function() {
            return W(), z()
        }, !1), c(function() {
            return window.addEventListener("popstate", N, !1)
        })
    }, _ = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), u = window.history && window.history.pushState && window.history.replaceState && _, a = !navigator.userAgent.match(/CriOS\//), K = "GET" === (tt = q("request_method")) || "" === tt, l = u && a && K, s = document.addEventListener && document.createEvent, s && (E(), $()), l ? (Z = C, j()) : Z = function(e) {
        return document.location.href = e
    }, this.Turbolinks = {visit: Z,pagesCached: H,enableTransitionCache: b,enableProgressBar: w,allowLinkExtensions: i.allowExtensions,supported: l,EVENTS: h(r)}
}.call(this), function() {
    var e, t, n, r, i, o, a, s;
    e || (e = null), n || (n = null), i || (i = null), r || (r = null), s || (s = null), t || (t = null), o || (o = null), a || (a = null), window.startCode = function() {
        return $("code").addClass("prettyprint"), $.getScript("https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js")
    }, window.startTweets = function() {
        return $.getScript("//platform.twitter.com/widgets.js", function() {
            return twttr.events.bind("loaded", function() {
                return $("article iframe.twitter-tweet").css({width: "100%","max-width": "500px",margin: "0 auto"})
            })
        })
    }, window.updateKudos = function() {
        return $("figure.kudo").each(function() {
            var e, t;
            return e = $(this).closest("article").attr("id"), t = $.jStorage.get(String(e)), t ? $("#" + e + " figure.kudo").removeClass("able").addClass("complete") : void 0
        })
    }, window.getKudos = function() {
        var e, t, n;
        return e = $("article").first().attr("id"), n = parseInt($("span.page.current").text()), isNaN(n) && (n = 1), t = 1 === $("article").length ? "/" + e + "/kudos" : "/page/" + n + "/kudos", e && $.get(t, function(e, t, n) {
            var r;
            return r = n.getResponseHeader("X-SvbKey-r"), $('meta[name="csrf-token"]').attr("content", r), $.each(e, function(e, t) {
                var n, r, i;
                return n = $("#" + t.extid).find("div.num"), r = t.kudos, isNaN(r) && (r = 9e6), i = n.first().text().replace(/,/g, ""), isNaN(i) && (i = 0), r - i >= 0 ? (r = r.toString(), r = r.replace(/\B(?=(\d{3})+(?!\d))/g, ","), n.html(r)) : void 0
            })
        }), !0
    }, window.makeBigParagraph = function() {
        return $("article").each(function() {
            var e;
            return e = $(this).children("p").first(), "" === $.trim(e.text()) ? e.next("p").addClass("bigtext") : void 0
        })
    }, window.checkMessages = function() {
        var e;
        return e = window.location.search, e.indexOf("not_found") >= 0 && (history.pushState(null, null, "/"), $('<div id ="notice"><span>:(</span><br/><br/>Not found.</div>').insertBefore("header#begin")), e.indexOf("udate") >= 0 ? ($("article").css({opacity: .1}), setTimeout(function() {
            return history.pushState(null, null, window.location.pathname), window.location.reload(!0)
        }, 700)) : void 0
    }, window.bleedImages = function() {
        return $("article img").not(".no-resize").each(function() {
            var e, t, n;
            return e = this, n = getImageWidth(e), n > 400 ? ($(this).not(".no-resize").addClass("bleed"), t = $(this).not(".no-resize").closest("p"), t.addClass("bleed_image")) : void 0
        })
    }, window.getImageWidth = function(e) {
        var t;
        return t = new Image, t.src = (e.getAttribute ? e.getAttribute("src") : !1) || e.src, t.width
    }, window.bootstrapKudo = function(t) {
        return t.addClass("activated"), t.find(".num").hide(), t.find(".txt").html("Don&rsquo;t move"), e = setTimeout(function() {
            return clearTimeout(e), fireKudo(t), t.find(".txt").fadeOut(), t.addClass("complete"), t.siblings("figure.kudo").addClass("complete").removeClass("able"), setTimeout(function() {
                return t.removeClass("activated").removeClass("able"), t.find(".num").fadeIn(), t.find(".txt").html("Kudos").fadeIn()
            }, 600)
        }, 1e3)
    }, window.fireKudo = function(e) {
        var t, n, r;
        return t = e.closest("article").attr("id"), r = e.closest("article").find("a.title").text(), $.post("/kudos", {article: t}, function() {
            return $.jStorage.set(String(t), !0), ga("userTracker.send", "event", "Articles", "Kudos", window.location.pathname, {page: window.location.pathname,title: window.document.title}), ga("send", "event", "Articles", "Kudos", window.location.pathname, {page: window.location.pathname,title: window.document.title}), null != window._gaq ? _gaq.push(["_trackEvent", "Articles", "Kudos", r]) : void 0
        }), n = parseInt(e.find("div.num").text().replace(/,/g, "")) + 1, e.find("div.num").text(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), e.siblings("figure.kudo").find("div.num").text(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }, window.sizeUp = function() {
        var e;
        return s = $(window).width(), e = parseInt($("article p").css("max-width")) - 1, $("article img").not(".no-resize").each(function() {
            return 650 >= s && s > 530 ? ($(this).not(".no-resize").removeAttr("height"), $(this).not(".no-resize").css("width", $(window).width() + "px"), $(this).not(".no-resize").css("margin-left", "-" + ($(window).width() - e) / 2 + "px")) : 530 > s ? ($(this).not(".no-resize").removeAttr("height"), $(this).not(".no-resize").css("width", $(window).width() + "px"), $(this).not(".no-resize").css("margin-left", "0px")) : ($(this).not(".no-resize").removeAttr("height"), $(this).not(".no-resize").css("width", ""), $(this).not(".no-resize").css("margin-left", ""))
        })
    }, window.checkImages = function() {
        return s = $(window).width(), $("article img").each(function() {
            var e, t;
            return e = new Image, e.src = $(this).attr("src"), t = $(this), e.onload = function() {
                return e.width < 400 ? t.addClass("no-resize") : void 0
            }
        })
    }, window.subscribeSuccess = function() {
        return o = $("#user_extid").text(), $.jStorage.set(String(o + "_subscribed"), !0)
    }, window.subscribeCheck = function() {
        return o = $("#user_extid").text(), $.jStorage.get(String(o + "_subscribed")) ? $("section#subscribe").remove() : void 0
    }, window.startBlog = function() {
        var t;
        return setTimeout(function() {
            return $("#user_logo").addClass("active")
        }, 100), $("article.post").height() < 700 && $("figure.kudo.side").hide(), t = $(window).scrollTop(), $("article iframe").each(function() {
            return $(this).css("width", ""), $(this).wrap('<p class="objected"></p>')
        }), $("h1.article_title").on({mouseenter: function() {
                return clearTimeout(r), $(".article_time").addClass("active")
            },mouseleave: function() {
                return r = setTimeout(function() {
                    return $(".article_time").removeClass("active")
                }, 200)
            }}), $(window).scroll(function() {
            var e, t, n;
            return $("figure.side").length > 0 ? (e = $("figure.postend").offset().top, n = $(window).height(), t = $(window).scrollTop(), t + n > e + 50 ? $("figure.kudo.side").addClass("bottom") : $("figure.kudo.side").removeClass("bottom")) : void 0
        }), sizeUp(), subscribeCheck(), $("article p img").on({click: function() {
                return $(this).closest("p").hasClass("image_expand") ? !0 : ($(this).closest("p").addClass("image_expand"), !1)
            }}), $("section#subscribe input.pane_input").on({focus: function() {
                return $("a.buttonize.submit_subscribe").addClass("active")
            },blur: function() {
                return setTimeout(function() {
                    return $("a.buttonize.submit_subscribe").removeClass("active")
                }, 500)
            }}), $("a.buttonize.submit_subscribe").on({click: function() {
                return $(this).hide(), $(this).closest("form").submit(), !1
            }}), $(window).load(function() {
            return checkImages(), bleedImages()
        }), $(document).on("page:change", function() {
            return checkImages(), bleedImages()
        }), $(window).resize(function() {
            return sizeUp(), $(window).width() < 600 ? bleedImages : void 0
        }), checkMessages(), bleedImages(), getKudos(), updateKudos(), makeBigParagraph(), $("code, pre").length > 0 && startCode(), $(".twitter-tweet").length > 0 && startTweets(), $("a#nudge_user").on({click: function() {
                return $(this).closest("form").submit(), !1
            }}), $("figure.kudo a").on({click: function(e) {
                return e.preventDefault(), !1
            },mouseenter: function() {
                var e;
                return e = $(this).parent(), e.is(".able") ? bootstrapKudo(e) : void 0
            },mouseleave: function() {
                var t;
                return t = $(this).parent(), t.find(".num").show(), t.find(".txt").html("Kudos"), t.removeClass("activated"), clearTimeout(e)
            }}), $("figure.kudo a").on("touchstart", function(e) {
            var t;
            return t = $(this).parent(), t.is(".able") && bootstrapKudo(t), e.preventDefault(), !1
        }), $("figure.kudo a").on("touchend", function(t) {
            var n;
            return clearTimeout(e), n = $(this).parent(), n.find(".num").show(), n.find(".txt").html("Kudos"), n.removeClass("activated"), t.preventDefault()
        }), window.saveError = function() {
            var e;
            return $("#lights").show().removeClass().addClass("error"), e = setInterval(function() {
                return $("#lights").toggleClass("active")
            }, 300), setTimeout(function() {
                return clearInterval(e), $("#lights").hide().removeClass("error")
            }, 1400), !0
        }, window.saveSuccess = function() {
            var e;
            return $("#floater").fadeOut(), $("#lights").show().removeClass().addClass("success"), e = setInterval(function() {
                return $("#lights").toggleClass("active")
            }, 300), setTimeout(function() {
                return clearInterval(e), $("#lights").hide().removeClass("success")
            }, 1400), !0
        }
    }
}.call(this), function() {
    function e() {
    }
    function t(e) {
        this.path = e, this.at_2x_path = e.replace("_small", function(e) {
            return e ? "_retina" : e
        })
    }
    function n(e) {
        this.el = e, this.path = new t(this.el.getAttribute("src"));
        var n = this;
        this.path.check_2x_variant(function(e) {
            e && n.swap()
        })
    }
    var r = "undefined" == typeof exports ? window : exports;
    r.Retina = e, e.init = function(e) {
        null == e && (e = r);
        var t = e.onload || new Function;
        e.onload = function() {
            var e, r, i = $("article img"), o = [];
            for (e = 0; e < i.length; e++)
                r = i[e], o.push(new n(r));
            t()
        }
    }, e.isRetina = function() {
        var e = "(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";
        return r.devicePixelRatio > 1 ? !0 : r.matchMedia && r.matchMedia(e).matches ? !0 : !1
    }, r.RetinaImagePath = t, t.confirmed_paths = [], t.prototype.at_2x_path_loads = function(e) {
        var t = new Image;
        t.onload = function() {
            return e(!0)
        }, t.onerror = function() {
            return e(!1)
        }, t.src = this.at_2x_path
    }, t.prototype.check_2x_variant = function(e) {
        var n = this;
        return -1 != t.confirmed_paths.indexOf(this.at_2x_path) ? e(!0) : void this.at_2x_path_loads(function(r) {
            return r && t.confirmed_paths.push(n.at_2x_path), e(r)
        })
    }, r.RetinaImage = n, n.prototype.swap = function(e) {
        function t() {
            n.el.complete ? n.el.setAttribute("src", e) : setTimeout(t, 5)
        }
        "undefined" == typeof e && (e = this.path.at_2x_path);
        var n = this;
        t()
    }, e.isRetina() && e.init(r)
}(), function() {
    var e, t, n;
    t = function(e, t) {
        return setTimeout(t, e)
    }, n = function() {
        return startOverlord(), startBlog(), startApplication()
    }, e = function() {
        var e, t, n;
        return e = window.location.protocol + "//" + window.location.hostname + window.location.pathname + window.location.search, t = window.location.pathname, n = window.document.title, ga("send", "pageview", {page: t,title: n,location: e}), ga("userTracker.send", "pageview", {page: t,title: n,location: e}), null != window._gaq ? (_gaq.push(["_trackPageview"]), _gaq.push(["b._trackPageview"])) : null != window.pageTracker && pageTracker._trackPageview(), window.pSUPERFLY ? window.pSUPERFLY.virtualPage(window.location.pathname, window.document.title) : void 0
    }, $(function() {
    }), $(document).on("page:fetch", function() {
        return $("body").removeClass("loaded"), $("#logo_top").addClass("loading"), $("#loading").spin("loader", "black")
    }), $(document).on("page:change", function() {
        return n(), e(), $("#logo_top").removeClass(loading), $("#loading").spin(!1)
    })
}.call(this);
