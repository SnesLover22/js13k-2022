let rt = !0,
  st = 0,
  nt = 0,
  ot = 0,
  B = 0,
  S = 0,
  x = 0,
  y = 0,
  T = 0,
  Y = 0,
  C = 0,
  z = 0,
  ct = 0,
  it = 0,
  O = 0,
  w = 0,
  R = .066,
  L = -11,
  q = 17,
  W = -90,
  X = [],
  N = [],
  E = [],
  ht = [],
  f = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  U = { x: 0, y: 0, z: 0 },
  K = Math.PI / 180,
  G = new DOMMatrix(),
  l = new Float32Array(16),
  r = new Float32Array(624),
  ft = new Int32Array(10725888),
  V = (t, e) => e < t ? t : e,
  mt = t => t < 0 ? -t : t,
  J = t => t < 0 ? 0 : 1 < t ? 1 : t,
  m = (t, e) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (e < 0 ? 0 : 1 < e ? 1 : e),
  ut = t => Math.atan2(Math.sin(t *= K), Math.cos(t)) / K,
  xt = (t, e, a) =>
    ((t *= K) + (2 * (e = (e * K - t) % (2 * Math.PI)) % (2 * Math.PI) - e) * (a < 0 ? 0 : 1 < a ? 1 : a)) / K,
  yt = (t, e, a, l) => {
    let r = e - t;
    return (t += (e - t < 0 ? -1 : 1) * V(0, (r < 0 ? -r : r) ** .9 - a) * l * 2) + (e - t) * J(l / 7);
  },
  _ = (t, a) => Array.from(Array(t), (t, e) => a(e)),
  gt = (t, e, a, l) => [t, 0, 0, 0, 0, e, 0, 0, 0, 0, (l + a) / (a - l), -1, 0, 0, 2 * l * a / (a - l), 0],
  i = ({ x: t, y: e, z: a }, l) => t * l.x + e * l.y + a * l.z,
  k = ({ x: t, y: e, z: a }) => Math.hypot(t - U.x, e - U.y, a - U.z) || 0,
  Mt = t => {
    let e = 0, a = 0, l = 0, r, s = t.at(-1);
    for (r of t) e += (s.y - r.y) * (s.z + r.z), a += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(e, a, l), e /= r, a /= r, l /= r, { x: e, y: a, z: l, w: e * s.x + a * s.y + l * s.z };
  },
  Z = (
    t,
    e = l,
    a = 0,
  ) => (a *= 16,
    e[a++] = t.m11,
    e[a++] = t.m12,
    e[a++] = t.m13,
    e[a++] = t.m14,
    e[a++] = t.m21,
    e[a++] = t.m22,
    e[a++] = t.m23,
    e[a++] = t.m24,
    e[a++] = t.m31,
    e[a++] = t.m32,
    e[a++] = t.m33,
    e[a++] = t.m34,
    e[a++] = t.m41,
    e[a++] = t.m42,
    e[a++] = t.m43,
    e[a] = t.m44,
    e),
  h = (t, e, a) => (t.D = a, t.A = e, t),
  j = (t, l, e = t.A) =>
    h(
      t.map(t => {
        let e, a;
        return { x: t, y: e, z: a } = t,
          { x: t, y: e, z: a } = l.transformPoint({ x: t, y: e, z: a }),
          { x: t, y: e, z: a };
      }),
      e,
      t.D,
    ),
  u = (t, e, a) => t.map(t => j(t, e, a)),
  F = (a, l = 0) =>
    _(a, t => {
      let e = Math.cos(2 * Math.PI * t / a);
      return { x: Math.sin(2 * Math.PI * t / a), y: 0, z: (e < 0 ? -e : e) < .01 ? e : e < 0 ? e - l : e + l };
    }),
  s = (l, r, s) => l.map((t, e, { length: a }) => h([t, r[a - e - 1], r[a - (e + 1) % a - 1], l[(e + 1) % a]], l.A, s)),
  g = (
    t,
    e,
    a = 0,
    l,
  ) => (l = t.length ? t : F(t, l),
    t = j(l, G.translate(0, 1).scale3d(0 < a ? a : 1)),
    a = j(l, G.translate(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...s(a, t, e), t, a]),
  D = (
    l,
    r = l,
    s = (
      t,
      e,
    ) => (e *= Math.PI / r,
      { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(e), y: Math.cos(e), z: Math.sin(t) * Math.sin(e) }),
  ) => {
    let n = [];
    for (let a = 0; l > a; a++) {
      for (let e = 0; r > e; e++) {
        let t = h([], 0, 1);
        n.push(t),
          t.push(s(a, e, t)),
          e && t.push(s((a + 1) % l, e, t)),
          r - 1 > e && t.push(s((a + 1) % l, e + 1 % r, t)),
          t.push(s(a, e + 1 % r, t));
      }
    }
    return n;
  },
  vt = (t, e, a, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (a - e),
      x = new DOMMatrix(gt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, a)).multiplySelf(t).invertSelf();
    return t = _(
      8,
      t => (t = x.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (u * t.x | 0) / u / t.w,
        s -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      e = G.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      j(t, e).map(({ x: t, y: e, z: a }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = e > i ? i : e,
          h = h > e ? h : e,
          f = a > f ? f : a,
          m = m > a ? m : a;
      }),
      f *= f < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      G.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(e);
  },
  M = (t, e = G, a) => Tt.s.push(...u(t, e, a)),
  v = (t, e = 1) => {
    let a = Tt;
    return X.push(Tt = e = { l: G, F: X.length, H: e, s: [] }), t(e), Tt = a, e;
  },
  zt = (t, e = 35633) => (e = lt.c6x(e), lt.s3c(e, t), lt.c6a(e), e),
  pt = (t, e) => {
    let a = {}, l = lt.c1h();
    return lt.abz(l, t), lt.abz(l, zt(e, 35632)), lt.l8l(l), t => t ? a[t] || (a[t] = lt.gan(l, t)) : lt.u7y(l);
  },
  dt = t => Math.sin(t * Math.PI * 2),
  bt = () => {
    et || !rt ? Ht.disconnect() : Ht.connect(Dt.destination), b4.innerHTML = "Music: " + rt;
  },
  wt = (t = !1) => {
    if (et !== t) {
      et = t, tt = 0;
      try {
        t ? document.exitPointerLock() : Ht.start();
      } catch {}
      document.body.className = t ? "l m" : "l", bt();
    }
  },
  $ = (t, e, a) => t + (e - t) * J(1 - Math.exp(-a * R)),
  t = ({ j: t }) => t,
  It = () => {
    let t = m(E[12].g, E[13].g), e = (B > x && (h4.innerHTML = "", x = 0), $(C, 0, 1));
    C = e + (ut(C + 60 * R) - e) * J(E[5].g - E[6].i),
      e = $(T, 0, 5),
      T = e + (ut(T + 56 * R) - e) * (t < 0 ? 0 : 1 < t ? 1 : t),
      e = $(Y, 0, 4),
      Y = e + (ut(Y + 48 * R) - e) * (t < 0 ? 0 : 1 < t ? 1 : t),
      t = 2 * E[9].i - 1,
      it = $(it, E[9].i, .2 + .3 * (t < 0 ? -t : t)),
      ct = $(ct, z ? ct + (-9 - ct) * J(1.5 * R) : J(B / 3), 1),
      E[0].j && .7 < E[0].g && (S < 13
        ? (z || (h4.innerHTML = "Not leaving now, there are souls to catch!", x = B + 3), E[0].j = 0)
        : z || (z || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", x = B + 1 / 0), z = 1));
    for (let t of X) t.h && (t.l = t.h(t));
    for (let t of E) t.h();
    for (let t of ht) t.h();
  },
  At = () => {
    S = ht.reduce((t, e) => t + e.j, 0),
      h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][S];
  },
  H = () => {
    At(), localStorage.DanteSP22 = JSON.stringify([E.map(t), ht.map(t), y, B, it]);
  },
  c = (l, r) => {
    let s, n, o, c = r.C;
    for (let t = 0; c.length > t; ++t) {
      if ((o = i(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
        n = [], o = [], c = r.C, t = r.B;
        let e = c.at(-1), a = i(l, e) - l.w;
        for (let t of c) {
          s = i(l, t) - l.w,
            a < 8e-5 && o.push(e),
            -8e-5 < a && n.push(e),
            (8e-5 < a && s < -8e-5 || a < -8e-5 && 8e-5 < s)
            && (a /= s - a,
              e = { x: e.x + (e.x - t.x) * a, y: e.y + (e.y - t.y) * a, z: e.z + (e.z - t.z) * a },
              n.push(e),
              o.push(e)),
            e = t,
            a = s;
        }
        return {
          o: 2 < n.length && { C: h(n, c.A, c.D), B: t, u: r },
          m: 2 < o.length && { C: h(o, c.A, c.D), B: t, u: r },
        };
      }
    }
    return { o: s, m: n };
  },
  n = (a, l, r = Mt(l.C)) => {
    if (a) {
      let { o: t, m: e } = c(a, l);
      t || e || a.s.push(l), t && (a.o = n(a.o, t, r)), e && (a.m = n(a.m, e, r));
    } else a = { x: r.x, y: r.y, z: r.z, w: r.w, s: [l], o: 0, m: 0 };
    return a;
  },
  a = (e, r, s) => {
    let n = [],
      o = (t, e) => {
        let { o: a, m: l } = c(t, e);
        a || l || (0 < s * i(t, r) ? a = e : l = e), a && (t.o ? o(t.o, a) : n.push(a)), l && t.m && o(t.m, l);
      };
    for (let t of r.s) o(e, t);
    return n;
  },
  o = (t, e) => t && (e(t), o(t.o, e), o(t.m, e)),
  Q = t => t.length ? t.reduce((t, e) => n(t, { C: e, B: 0, u: 0 }), 0) : t,
  Pt = t => (o(t, e => {
    let t = e.m;
    e.m = e.o, e.o = t, e.x *= -1, e.y *= -1, e.z *= -1, e.w *= -1;
    for (let t of e.s) t.B = !t.B;
  }),
    t),
  p = (...t) =>
    t.reduce((l, e) => {
      let r = [];
      if (l = Q(l), e) {
        e = Q(e), o(l, t => t.s = a(e, t, 1)), o(e, t => r.push([t, a(l, t, -1)]));
        for (let [e, a] of r) for (let t of a) n(l, t, e);
      }
      return l;
    }),
  d = (t, ...e) => Pt(p(Pt(Q(t)), ...e)),
  b = t => {
    let a = new Map(),
      l = new Map(),
      r = e => {
        if (e.u) {
          let t = a.get(e.u);
          t ? (l.delete(t), e = r(e.u)) : a.set(e.u, e);
        }
        return e;
      };
    return o(t, e => {
      for (let t of e.s) l.set(r(t), t.B);
    }),
      Array.from(l, ([{ C: t }, e]) => {
        let a = t.map(({ x: t, y: e, z: a }) => ({ x: t, y: e, z: a }));
        return h(e ? a.reverse() : a, t.A, t.D);
      });
  },
  I = r => {
    let s = Tt,
      n = E.length,
      o = {
        j: 0,
        g: 0,
        i: 0,
        u: s,
        h() {
          let t = o.j, e = o.g, a = o.i, l = s.l.multiply(r);
          o.I = l,
            k(l.transformPoint()) < 2.9 && N[5] && (e < .3 || .7 < e)
            && (o.j = t ? 0 : 1, n && !z && (h4.innerHTML = "* click *", x = B + 1), y = n, H()),
            o.g = $(e, t, 4),
            o.i = $(a, t, 1),
            o.l = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
        },
      };
    E.push(o),
      M(g(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), P(.4, .5, .5)),
      M(g(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), P(.4, .5, .5)),
      M(g(f), r.translate(0, -.4).scale(.5, .1, .5), P(.5, .5, .4));
  },
  A = (o, ...t) => {
    let c = -1,
      i = 0,
      h = 0,
      f = 0,
      m = 0,
      u = 0,
      g = 1,
      M = 3,
      v = {
        j: 0,
        h() {
          if (!v.j) {
            var e = 1;
            let a = 1 / 0, l, t;
            for (l of p) {
              var r = l.w, s = Math.hypot(b - l.x, I - l.z), n = s - r;
              t ||= s < r, 0 < n && a > n && (a = n, d = l), e = e < (r = s / r) ? e : r;
            }
            if (!t) {
              r = d.w;
              let t = Math.hypot(s = b - (a = d.x), n = I - (l = d.z)), e = Math.atan2(-n, s);
              g && (h = (Math.random() - .5) * Math.PI / 2, M = V(1, M / (1 + Math.random()))),
                e += h,
                c = -Math.cos(e),
                i = Math.sin(e),
                .1 < t && (t = (t < r ? t : r) / (t || 1), b = s * t + a, I = n * t + l);
            }
            g = t,
              M = $(M, 3 + 6 * (1 - e), 3 + e),
              A = $(A, b = $(b, b + c, M), M),
              w = $(w, I = $(I, I + i, M), M),
              f = xt(f, Math.atan2(A - m, w - u) / K - 180, 3 * R),
              m = A,
              u = w,
              e = (v.l = y.l.multiply(o.translate(A, 0, w).rotateSelf(0, f, 7 * Math.sin(1.7 * B)))).transformPoint(),
              k(e) < 1.5
              && (v.j = 1,
                e = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  ,
                  "Andrzej Mazur<br>for the js13k competition",
                  "Donald Trump<br>lies",
                  "Kim Jong-un<br>Dictator, liked pineapple on pizza",
                  "Maxime Euziere<br>forced me to finish this game",
                  "She traded NFTs apes",
                  ,
                  "Vladimir Putin<br>evil war",
                  "He was not a good person",
                  ,
                  "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
                ][S] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                t = S && S < 12 ? 5 : 7,
                z || (h4.innerHTML = e, x = B + t),
                H());
          }
          v.j
            && (e = a % 4 - 2,
              v.l = X[2].l.translate(
                a % 4 * 1.2 - 1.7 + Math.sin(B + a) / 7,
                -2,
                1.7 * (a / 4 | 0) - 5.5 + (e < 0 ? -e : e) + Math.cos(B / 1.5 + a) / 6,
              ));
        },
      },
      y = Tt,
      a = ht.length,
      p = t.map(([t, e, a]) => ({ x: t, z: e, w: a })),
      d = p[0],
      { x: b, z: I } = d,
      A = b,
      w = I;
    ht.push(v);
  },
  St = (t, a, e) => {
    if (e = e ? jt : kt, et) {
      for (var { F: l } of (e = G.rotate(0, 40 * Math.sin(ot) - 70), at)) Z(e, r, l - 1);
      lt.uae(t, !1, r), lt.d97(4, at[2].G - at[0].v, 5123, 2 * at[0].v);
    } else {
      for (l = 0; X.length > l; ++l) {
        let { H: t, F: e, l: a } = X[l];
        t && Z(a, r, e - 1);
      }
      for (lt.uae(t, !1, r), lt.d97(4, (a ? at[2].G : at[0].v) - 3, 5123, 6), a = 0; E.length > a; ++a) {
        let { l: t, g: e } = E[a];
        Z(t, r, a), r[16 * a + 15] = 1 - e;
      }
      for (lt.uae(t, !1, r), lt.das(4, Ct.G - Ct.v, 5123, 2 * Ct.v, E.length), a = 0; a < 13; ++a) Z(ht[a].l, r, a);
      lt.uae(t, !1, r), lt.das(4, e.G - e.v, 5123, 2 * e.v, 13);
    }
  },
  P = (t, e, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * e << 8 | 255 * t,
  Tt,
  tt,
  et,
  Yt,
  Ct,
  kt,
  jt,
  at,
  Ft = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  lt = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let t in lt) lt[t[0] + [...t].reduce((t, e, a) => (t * a + e.charCodeAt(0)) % 434, 0).toString(36)] = lt[t];
let Dt = new AudioContext(), Ht = Dt.createBufferSource();
setTimeout(() => {
  let a = 0,
    t = 6,
    e = () => {
      if (h4.innerHTML += ".", !--t) {
        let c = !1,
          i = 0,
          h = 0,
          f = 0,
          m = 0,
          u = 0,
          g = 1,
          M = { x: 0, y: 0, z: 0 },
          v = new Int32Array(256),
          p = new Uint8Array(65536),
          a = () => {
            let { u: t, I: e } = E[y], { x: a, y: l, z: r } = e.transformPoint({ x: 0, y: 8, z: -3 });
            U.x = M.x = a,
              U.y = M.y = T = l,
              U.z = M.z = r,
              b =
                S =
                P =
                I =
                A =
                  0,
              g = 1,
              i = h = t?.F || 1;
          },
          l = e => {
            if (lt.i34()) location.reload();
            else {
              requestAnimationFrame(l);
              let t = (e - (Yt || e)) / 1e3;
              R = et ? N[5] = 0 : .066 < t ? .066 : t,
                B += R,
                ot += t,
                Yt = e,
                0 < R
                && (lt.b6o(36160, D),
                  lt.fa7(),
                  lt.r9r(0, 0, 128, 128, 6408, 5121, p),
                  lt.iay(36009, [36064, 36096]),
                  lt.iay(36008, [36064, 36096]),
                  (() => {
                    C = Y = 0,
                      (() => {
                        let s = 0, n = 0, e = 0, a = 0, o = 0;
                        v.fill(0);
                        for (let t = 0; t < 31; ++t) {
                          let l = 0, r = 512 * t;
                          for (let a = 0; a < 128; a++) {
                            let t = r + 4 * a, e = (p[t] + p[1 + t]) / 255;
                            t = p[2 + t],
                              14 < a && a < 114 && (l += e),
                              t && e && (e = v[t] + 1, v[t] = e, s > e || (s = e, n = t));
                          }
                          l < 3 && 5 < t && (a += t / 32), 3 < l && (7 < t && (e += t / 15), o = 1);
                        }
                        n && (o = 1),
                          g ? n && (g = 0, h = n) : h = n || i,
                          i = n,
                          b = o,
                          I = $(I, o ? 6.5 : 8, 4),
                          M.y += e / 41 - (o ? 1 : I) * a / 41 * I * R;
                      })(),
                      (() => {
                        for (let t = 32; t < 128; t += 2) {
                          let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                          for (let s = 1 & t; s < 128; s += 2) {
                            let t = h + 4 * s,
                              e = h + 4 * (127 - s),
                              a = p[t] / 255,
                              l = p[1 + e] / 255,
                              r = s / 63.5 - 1;
                            r = 1 - (r < 0 ? -r : r),
                              10 < s && s < 118
                              && (n = V(n, V(a * r, a * p[e] / 127.5)), o = V(o, V(l * r, l * p[1 + t] / 255))),
                              (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < a ? a : l) / 3)
                              && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                          }
                          c = i - c,
                            n = o - n,
                            (c < 0 ? -c : c) > (Y < 0 ? -Y : Y) && (Y = c),
                            (n < 0 ? -n : n) > (C < 0 ? -C : C) && (C = n);
                        }
                      })();
                    let t = st + (N[0] ? 1 : 0) + (N[2] ? -1 : 0),
                      a = nt + (N[1] ? 1 : 0) + (N[3] ? -1 : 0),
                      l = navigator.getGamepads()[0];
                    if (l) {
                      var r = t => e[t]?.pressed || 0 < e[t]?.value;
                      let e = l.buttons;
                      l = l.axes;
                      var s = r(1) || r(3) || r(2) || r(0);
                      s !== c && (c = s) && (N[5] = 1),
                        t += (.2 < mt(-l[0]) ? -l[0] : 0) + (r(14) ? 1 : 0) + (r(15) ? -1 : 0),
                        a += (.2 < mt(-l[1]) ? -l[1] : 0) + (r(12) ? 1 : 0) + (r(13) ? -1 : 0),
                        tt && (.3 < mt(l[2]) && (O += 80 * l[2] * R), .3 < mt(l[3]) && (w += 80 * l[3] * R));
                    }
                    (a < 0 ? -a : a) < .05 && (a = 0),
                      (t < 0 ? -t : t) < .05 && (t = 0),
                      r = Math.atan2(a, t),
                      l = J(Math.hypot(a, t)),
                      t = l * Math.cos(r),
                      a = l * Math.sin(r),
                      s = J(1 - 5 * V(Y < 0 ? -Y : Y, C < 0 ? -C : C)),
                      h || (Y += P * s * R, C += S * s * R),
                      P = $(P, 0, b ? 8 : 4),
                      S = $(S, 0, b ? 8 : 4),
                      A = $(A, b ? (t || a ? b ? 7 : 4 : 0) * s : 0, b ? .1 < s ? 10 : t || a ? 5 : 7 : 1);
                    let e = tt ? O * K : Math.PI;
                    if (
                      s = Math.sin(e) * A * R,
                        e = Math.cos(e) * A * R,
                        Y -= t * e - a * s,
                        C -= t * s + a * e,
                        (e = (s = 1 === X[h].H && X[h].l || G).inverse()).m41 = 0,
                        e.m42 = 0,
                        e.m43 = 0,
                        { x: Y, z: C } = e.transformPoint({ x: Y, z: C, w: 0 }),
                        M.x += Y,
                        M.z += C,
                        h !== d
                    ) {
                      d = h;
                      let { x: t, y: e, z: a } = s.inverse().transformPoint(U);
                      M.x = t, M.y = e, M.z = a;
                    }
                    e = U.x;
                    let x = U.z, { x: y, y: n, z: o } = s.transformPoint(M);
                    U.x = y,
                      U.y = n,
                      U.z = o,
                      s = mt(T - n),
                      T = $(T, n + .1, 50 * s + 5),
                      h && (P = (U.x - e) / R, S = (U.z - x) / R),
                      (t || a) && (f = 90 - r / K),
                      m = xt(m, f, 8 * R),
                      u += (l - u) * J(10 * R),
                      z = yt(z, U.x, .5, R),
                      k = yt(k, U.y, 2, R),
                      j = yt(j, U.z, .5, R),
                      tt
                        ? (t = 200 * g,
                          L = $(L, U.x, 18 + t),
                          q = $(q, U.y + 1.5, 15 + t),
                          W = $(W, U.z, 18 + t),
                          w = V(w < 87 ? w : 87, -87))
                        : (L = yt(L, z, 1, 2 * R),
                          q = yt(q, k + 13 + 15 * g, 4, 2 * R),
                          W = yt(W, j + -18, 1, 2 * R),
                          1 < ((t = W - j) < 0 ? -t : t)
                          && (a = L - z,
                            r = q - k,
                            O = 270 + Math.atan2(t, a) / K,
                            w = 90 - Math.atan2(Math.hypot(t, a), r) / K)),
                      O = ut(O);
                  })(),
                  It(),
                  1 === h && (E[9].j = U.x < -15 && U.z < 0 ? 1 : 0),
                  (U.x < -25 || U.z < 109 ? -25 : -9) > U.y && a(),
                  N[5] = 0),
                e = et
                  ? G.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + J(hC.clientWidth / 1e3))
                  : G.rotate(-w, -O, -0).invertSelf().translateSelf(-L, -q, -W),
                0 < R
                && (n(),
                  lt.b6o(36160, D),
                  lt.v5y(0, 0, 128, 128),
                  lt.c4s(16640),
                  lt.cbf(!0, !1, !0, !1),
                  lt.uae(n("b"), !1, Z(G.rotate(0, 180).invertSelf().translateSelf(-U.x, -U.y, .3 - U.z))),
                  St(n("c"), 0, 1),
                  lt.c4s(256),
                  lt.cbf(!1, !0, !0, !1),
                  lt.uae(n("b"), !1, Z(G.translate(-U.x, -U.y, -U.z - .3))),
                  St(n("c"), 0, 1),
                  lt.f1s()),
                r(),
                lt.b6o(36160, F),
                lt.v5y(0, 0, 2048, 2048),
                H[0](vt(e, .3, 55, 10)),
                H[1](vt(e, 55, 177, 11)),
                o(),
                lt.b6o(36160, null),
                lt.v5y(0, 0, lt.drawingBufferWidth, lt.drawingBufferHeight),
                lt.cbf(!0, !0, !0, !0),
                lt.c4s(16640),
                H[0](),
                H[1](),
                lt.uae(o("a"), !1, gt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
                lt.uae(o("b"), !1, Z(e)),
                lt.ubu(o("k"), L, q, W),
                St(o("c"), !tt, 0),
                s(),
                lt.ubu(s("j"), lt.drawingBufferWidth, lt.drawingBufferHeight, ot),
                et ? lt.ubu(s("k"), 0, 0, 0) : lt.ubu(s("k"), L, q, W),
                lt.uae(s("b"), !1, Z(e.inverse())),
                lt.d97(4, 3, 5123, 0),
                lt.b6o(36160, D),
                lt.f1s();
            }
          },
          d,
          b,
          I,
          A,
          P,
          S,
          T,
          Y,
          C,
          z,
          k,
          j,
          t = ((() => {
            let e = 0,
              l = [],
              s = [],
              n = [],
              o = [],
              c = new Map(),
              i = new Int32Array(8),
              r = t => {
                let { x: e, y: a, z: l } = h[t], r = (m[0] = e, m[1] = a, m[2] = l, c.get(t = "" + (h.D ? f : i)));
                return void 0 !== r
                  ? (e = 3 * r, o[e] = (o[e++] + i[5]) / 2, o[e] = (o[e++] + i[6]) / 2, o[e] = (o[e] + i[7]) / 2)
                  : (c.set(t, r = c.size), s.push(e, a, l, m[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
                  r;
              },
              h,
              f = new Int32Array(i.buffer, 0, 5),
              m = new Float32Array(i.buffer);
            for (let t of X) {
              for (h of (m[3] = t.H ? t.F : 0, t.s)) {
                let { x: t, y: e, z: a } = Mt(h);
                i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * e, i[7] = 32767 * a;
                for (let t = 2, e = r(0), a = r(1); h.length > t; ++t) l.push(e, a, a = r(t));
              }
              t.s = null, t.v = e, t.G = e = l.length;
            }
            lt.b11(34963, lt.c1b()),
              lt.b2v(34963, new Uint16Array(l), 35044),
              lt.b11(34962, lt.c1b()),
              lt.b2v(34962, new Float32Array(s), 35044),
              lt.v7s(0, 4, 5126, !1, 0, 0),
              lt.b11(34962, lt.c1b()),
              lt.b2v(34962, new Int16Array(o), 35044),
              lt.v7s(1, 3, 5122, !0, 0, 0),
              lt.b11(34962, lt.c1b()),
              lt.b2v(34962, new Uint32Array(n), 35044),
              lt.v7s(2, 4, 5121, !0, 0, 0),
              lt.e3x(0),
              lt.e3x(1),
              lt.e3x(2);
          })(),
            zt(
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
            )),
          r = pt(
            zt(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          s = pt(
            zt("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          n = pt(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          o = pt(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          F = lt.c5w(),
          D = lt.c5w(),
          e = (t = lt.c3z(), lt.c25()),
          H = _(2, t => {
            let e = new Float32Array(16), a = lt.c25(), l = o(t ? "j" : "i");
            return lt.b6o(36160, F),
              lt.d45([0]),
              lt.r9l(0),
              o(),
              lt.ubh(o(t ? "h" : "g"), t),
              lt.a4v(33984 + t),
              lt.b9j(3553, a),
              lt.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              lt.t2z(3553, 10241, 9729),
              lt.t2z(3553, 10240, 9729),
              lt.t2z(3553, 34893, 515),
              lt.t2z(3553, 34892, 34894),
              lt.t2z(3553, 10243, 33071),
              lt.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (Z(t, e), lt.uae(r("b"), !1, e), lt.fas(36160, 36096, 3553, a, 0), lt.c4s(256), St(r("c"), !tt, 0))
                  : lt.uae(l, !1, e);
              };
          });
        s(),
          lt.ubh(s("q"), 3),
          n(),
          lt.uae(n("a"), !1, gt(1.4, .59, 1e-4, 1)),
          o(),
          lt.ubh(o("q"), 3),
          lt.e8z(2929),
          lt.e8z(2884),
          lt.c70(1),
          lt.c7a(1029),
          lt.d4n(515),
          lt.c5t(0, 0, 0, 1),
          lt.b6o(36160, D),
          lt.bb1(36161, t),
          lt.r4v(36161, 33189, 128, 128),
          lt.f8w(36160, 36096, 36161, t),
          lt.a4v(33987),
          lt.b9j(3553, e),
          lt.fas(36160, 36064, 3553, e, 0),
          lt.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          lt.a4v(33987),
          lt.b9j(3553, lt.c25()),
          lt.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Q),
          lt.gbn(3553),
          lt.t2z(3553, 10241, 9987),
          lt.t2z(3553, 10240, 9729),
          at.map((t, e) => {
            t.h = e
              ? () =>
                at[0].l.translate(0, u * J(.45 * Math.sin(9.1 * B + Math.PI * (e - 1) - Math.PI / 2))).rotateSelf(
                  u * Math.sin(9.1 * B + Math.PI * (e - 1)) * .25 / K,
                  0,
                )
              : () => G.translate(U.x, T, U.z).rotateSelf(0, m);
          });
        try {
          let [a, l, t, e, r] = JSON.parse(localStorage.DanteSP22);
          E.map((t, e) => t.g = t.i = t.j = e ? 0 | a[e] : 0), ht.map((t, e) => t.j = 0 | l[e]), y = t, B = e, it = r;
        } catch (t) {}
        ct = y < 0 ? 0 : 1 < y ? 1 : y,
          h4.innerHTML = "",
          x = 0,
          At(),
          It(),
          a(),
          L = z = U.x,
          q = (k = U.y) + 13,
          W = (j = U.z) + -18,
          (() => {
            let t = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  N.length = st = nt = 0,
                  o = f = void 0,
                  document.hidden && wt(!0);
              },
              r,
              s,
              n,
              o,
              c,
              i,
              h,
              f,
              x,
              y,
              m,
              u;
            document.onvisibilitychange = onresize = onblur = t,
              b1.onclick = () => wt(),
              b2.onclick = () => {
                wt(), tt = 1;
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b4.onclick = () => {
                rt = !rt, bt();
              },
              b5.onclick = () => wt(!0),
              onclick = t => {
                u = 1, et || (t.target === hC && (N[5] = !0), tt && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: t, target: e, type: a, repeat: l }) => {
                l || ((e = !!a[5] && e === document.body) && ("Escape" === t || "Enter" === t && et)
                  ? et && !u || wt(!et)
                  : 5
                      === (t = {
                        KeyA: 0,
                        ArrowLeft: 0,
                        KeyW: 1,
                        ArrowUp: 1,
                        KeyD: 2,
                        ArrowRight: 2,
                        KeyS: 3,
                        ArrowDown: 3,
                        KeyE: 5,
                        Space: 5,
                        Enter: 5,
                      }[t])
                  ? e && (N[t] = 1)
                  : N[t] = e);
              },
              onmousemove = ({ movementX: t, movementY: e }) => {
                tt && (t || e) && (O += .1 * t, w += .1 * e);
              },
              oncontextmenu = () => !1,
              hC.ontouchstart = l => {
                if (!et) {
                  for (let { pageX: t, pageY: e, identifier: a } of l.changedTouches) {
                    tt && t > hC.clientWidth / 2
                      ? void 0 === f && (f = a, i = t, h = e, x = 0, y = O, m = w)
                      : void 0 === o && (o = a, s = t, n = e, c = 0);
                  }
                  r = ot;
                }
              },
              hC.ontouchmove = ({ changedTouches: r }) => {
                if (!et) {
                  for (
                    let { pageX: a, pageY: l, identifier: t } of r
                  ) {
                    if (f === t && (O = y + (a - i) / 3, w = m + (l - h) / 3, x = 1), o === t) {
                      let t = (r = (s - a) / 20) < 0 ? -1 : 1, e = t * r;
                      .4 < e && (c = 1, st = t * e ** 1.5, 1.5 < e && (s = a + 20 * t)),
                        .4 < (e = (t = (r = (n - l) / 20) < 0 ? -1 : 1) * r)
                        && (c = 1, nt = t * e ** 1.5, 1.5 < e && (n = l + 20 * t));
                    }
                  }
                }
              },
              hC.ontouchend = e => {
                let a;
                e.preventDefault();
                for (let t of e.changedTouches) {
                  t.identifier === f
                    ? (f = void 0, x || (a = 1), x = 0)
                    : t.identifier === o
                    ? (o = void 0, nt = st = 0, c || (a = 1), c = 0)
                    : a = 1;
                }
                a && e.target === hC && r && .06 < (e = ot - r) && e < .7 && (N[5] = !0);
              },
              t(),
              wt(!0);
          })(),
          requestAnimationFrame(l);
      }
    },
    z = () => {
      if (a < 5) {
        var H = 0, Q = a++;
        let [v, p, d, b, I, A, P, S, T, x, y, , Y, C, k, j, t, w, e, F, D] =
          [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, [
            "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
            "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
            "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
            "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
            "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
            "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
          ]], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, [
            ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
            "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
            ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
            "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
            "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
            "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
          ]], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
            "9(((9(((9(((9(((9(((9(((9(((9",
            "9(((Q(((Q(((Q",
          ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
            "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
            "9(9(9(9(9(999(9(((((Q",
          ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
            "((((Q(((((((Q(((((((Q(((((((Q",
            "Q((Q((Q((Q((Q((Q((((Q",
          ]]][Q];
        x = x * x * 4;
        for (let M of [5513, 4562, 3891]) {
          let r = 0,
            s = 0,
            f = [],
            m,
            n,
            o,
            c,
            i,
            h = new Int32Array(768 * M),
            u = Math.PI * 2 ** (t - 8) / M,
            g = e * M & -2;
          for (let l = 0; l <= 11; ++l) {
            for (
              let t = 0, e = +"000001234556112341234556011111111112011111111112000001111112"[12 * Q + l];
              t < 32;
              ++t
            ) {
              let a = (32 * l + t) * M;
              for (var B, O = 0; O < 4; ++O) {
                if (m = 0, e && (m = D[e - 1].charCodeAt(t + 32 * O) - 40, m += 0 < m ? 106 : 0), m) {
                  if (!(B = f[m])) {
                    let l = 0,
                      r = 0,
                      s,
                      n,
                      o = B = m,
                      c = Q < 2
                        ? t => t % 1 * 2 - 1
                        : dt,
                      i = Q < 2
                        ? Q < 1
                          ? t => t % 1 < .5 ? 1 : -1
                          : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                        : dt,
                      h = new Int32Array(S + T + x);
                    for (let e = 0, a = 0; S + T + x > e; ++e, ++a) {
                      let t = 1;
                      S > e ? t = e / S : S + T > e || (t = (1 - (t = (e - S - T) / x)) * 3 ** (-y / 16 * t)),
                        a < 0
                        || (a -= 4 * M,
                          n = .00396 * 2 ** ((o + p - 256) / 12),
                          s = .00396 * 2 ** ((o + I - 256) / 12) * (1 + (Q ? 0 : 8e-4 * 9))),
                        h[e] = 80
                            * (c(l += n * t ** (d / 32)) * v + i(r += s * t ** (A / 32)) * b
                              + (P ? (2 * Math.random() - 1) * P : 0))
                            * t | 0;
                    }
                    B = f[B] = h;
                  }
                  for (let t = 0, e = 2 * a; B.length > t; ++t, e += 2) h[e] += B[t];
                }
              }
              for (let t, e = 0; M > e; ++e) {
                O = 0,
                  ((t = h[B = 2 * (a + e)]) || i)
                  && (o = .00308 * Y,
                    1 != Q && 4 != Q || (o *= Math.sin(2 ** (t - 9) / M * B * Math.PI * 2) * F / 512 + .5),
                    o = 1.5 * Math.sin(o),
                    r += o * s,
                    c = (1 - C / 255) * (t - s) - r,
                    s += o * c,
                    t = 4 == Q ? s : 3 == Q ? c : r,
                    Q || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                    t *= k / 32,
                    i = 1e-5 < t * t,
                    n = Math.sin(u * B) * j / 512 + .5,
                    O = t * (1 - n),
                    t *= n),
                  B < g || (O += h[1 + B - g] * w / 255, t += h[B - g] * w / 255),
                  ft[H + B] += h[B] = O,
                  ++B,
                  ft[H + B] += h[B] = t;
              }
            }
          }
          H += h.length;
        }
        setTimeout(z);
      } else {
        for (H = Dt.createBuffer(2, 5362944, 44100), Q = 0; Q < 2; Q++) {
          for (
            let t = Q, e = H.getChannelData(Q);
            t < 10725888;
            t += 2
          ) {
            e[t >> 1] = ft[t] / 65536;
          }
        }
        Ht.buffer = H, Ht.loop = !0;
      }
      e();
    },
    Q = new Image();
  setTimeout(() => {
    let n = (t, e, a) =>
        G.translate(t + Math.sin(B + 2) / 5, e + Math.sin(.8 * B) / 3, a).rotateSelf(
          2 * Math.sin(B),
          Math.sin(.7 * B),
          Math.sin(.9 * B),
        ),
      o,
      c = (() => {
        let e = _(
            11,
            t => G.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
          ),
          a = F(18);
        return _(10, t => s(j(a, e[t]).reverse(), j(a, e[t + 1]), 1)).flat();
      })(),
      i = b(
        d(
          u(g(20, 1, 1.15, 1), G.translate(0, -3).scale(3.5, 1, 3.5), P(.7, .4, .25, .7)),
          u(g(20, 1, 1.3, 1), G.translate(0, -2.5).scale(2.6, 1, 3), P(.7, .4, .25, .2)),
          u(g(f), G.translate(4, -1.2).scale3d(2), P(.7, .4, .25, .3)),
        ),
      ),
      h = b(
        d(
          u(g(f), G.translate(0, -8).scale(6, 15, 2.2)),
          u(g(f), G.translate(0, -14.1).scale(4, 13, 4)),
          u(g(20, 1), G.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      );
    v(() => {
      M([f.slice(1)], G.translate(-2).scale3d(3).rotate(90, 0));
    }, 0),
      v(() => {
        let r = () => {
            let t = E[2].i, e = 1 - E[4].i;
            return t < e ? t : e;
          },
          t = (e, a, l) =>
            v(t => {
              t.h = () => G.translate(r() * Math.sin(3 * e + B * e) * a),
                f.map(({ x: t, z: e }) => {
                  M(g(11, 1), G.translate(4 * t, 4, l + 4 * e).scale(.8, 3, .8), P(.5, .3, .7, .6)),
                    M(g(f), G.translate(4 * t, 7, l + 4 * e).scale(1, .3), P(.5, .5, .5, .3));
                }),
                M(b(d(
                  u(g(f), G.translate(0, 0, l).scale(5, 1, 5), P(.8, .8, .8, .3)),
                  ...[-1, 1].map(t =>
                    u(g(f), G.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), P(.8, .8, .8, .3))
                  ),
                ))),
                M(g(f), G.translate(0, -3, l).scale(8, 2, 8), P(.4, .4, .4, .3));
            }),
          l = (v(t => {
            t.h = () => n(-12, 4.2, 40 * ct - 66), M(i), I(G.translate(0, -3, 4));
          }),
            _(7, t => u(g(6, 1), G.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), P(.3, .3, .38))).flat()),
          e = (A(G.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
            A(
              G.translate(0, 2.8),
              [5, 10, 3],
              [-5, 10, 3],
              ...F(18).map(({ x: t, z: e }) => [7 * t, 10 * e, 4.5 - 2 * (t < 0 ? -t : t)]),
            ),
            M(g(f), G.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), P(.8, .8, .8, .2)),
            f.map(({ x: t, z: e }) => M(g(6), G.translate(3 * t, 3, 15 * e).scale(.7, 4, .7), P(.6, .3, .3, .4))),
            [-23, 22].map(t => M(g(f), G.translate(0, 0, t).scale(3, 1, 8), P(.9, .9, .9, .2))),
            [-15, 15].map((e, a) => {
              M(g(f), G.translate(0, 6.3, e).scale(4, .3, 1), P(.3, .3, .3, .4)),
                M(g(f), G.translate(0, 1, e).scale(3, .2, .35), P(.5, .5, .5, .3)),
                v(t => {
                  t.h = () => G.translate(0, 4.7 * -E[a + 1].g, e), M(l);
                });
            }),
            _(5, e =>
              _(2, t =>
                M(
                  c,
                  G.translate(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                  P(1, 1, .8, .2),
                ))),
            M(g(f), G.translate(3, 1.5, -20).scale(.5, 2, 5), P(.7, .7, .7, .2)),
            M(g(f), G.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(.75, .75, .75, .2)),
            M(g(5), G.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(.6, .3, .3, .4)),
            I(G.translate(-5.4, 1.5, -19).rotate(0, -90)),
            M(
              g(f),
              G.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5),
              P(.8, .2, .2, .5),
            ),
            M(b(
              d(
                p(
                  u(g(6, 0, 0, .3), G.translate(8, -3, -4).scale(13, 1, 13), P(.7, .7, .7, .2)),
                  u(g(6), G.translate(0, -8).scale(9, 8, 8), P(.4, .2, .5, .5)),
                  u(g(6, 0, 0, .3), G.translate(0, -.92).scale(13, 2, 13), P(.8, .8, .8, .2)),
                ),
                u(g(5), G.scale(5, 30, 5), P(.4, .2, .6, .5)),
                u(g(5, 0, 1.5), G.translate(0, 1).scale(4.5, .3, 4.5), P(.7, .5, .9, .2)),
                u(g(f), G.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), P(.5, .5, .5, .5)),
                u(g(6), G.translate(15, -1.5, 4).scale(3.5, 1, 3.5), P(.5, .5, .5, .5)),
              ),
            )),
            v(t => {
              t.h = () =>
                G.translate(
                  0,
                  .01 < E[3].g ? (5 * Math.cos(1.5 * B) + 2) * E[3].i * (1 - E[2].g) + -15 * (1 - E[3].g) : -500,
                  0,
                ),
                I(G.translate(0, 1.2)),
                M(g(5), G.translate(0, -.2).scale(5, 1, 5), P(.6, .65, .7, .3));
            }),
            I(G.translate(15, -2, 4)),
            t(.7, 12, 35),
            t(1, 8.2, 55),
            v(t => {
              t.h = () => G.translate(r() * Math.sin(B / 1.5 + 2) * 12),
                M(
                  b(d(
                    p(
                      u(g(f), G.scale(1.5, 1, 5), P(.9, .9, .9, .2)),
                      u(g(6), G.scale(4, 1, 5), P(.9, .9, .9, .2)),
                      u(g(f), G.translate(0, -2).scale(2, 3.2, 1.9), P(.3, .8, .5, .5)),
                      u(g(16, 1, 0, 4), G.scale(1, 1, 1.5).rotate(0, 90), P(.9, .9, .9, .2)),
                    ),
                    u(g(f), G.scale(1.3, 10, 1.3), P(.2, .7, .4, .6)),
                  )),
                  G.translate(0, 0, 45),
                ),
                A(G.translate(0, 2.8, 45), [0, 0, 4.5]);
            }),
            v(t => {
              t.h = () => G.translate(9.8 * (1 - r())),
                M(g(3), G.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), P(.3, .6, .6, .2)),
                M(g(8), G.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(.8, .8, .8, .2)),
                M(g(f), G.translate(-23, -3, 55).scale(5.2, 1.7, 3), P(.5, .5, .5, .3)),
                M(g(f), G.translate(-23, -2.2, 62).scale(3, 1, 4), P(.5, .5, .5, .3)),
                I(G.translate(-23, -.5, 66.5));
            }),
            M(g(f), G.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(.9, .9, .9, .2)),
            v(t => {
              t.h = () => G.translate(0, J(1 - 5 * r()) * m(E[4].g, E[5].g) * Math.sin(1.35 * B) * 4),
                M(g(f), G.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(.7, .7, .7, .2)),
                M(
                  b(d(u(g(f), G.scale(3, 1.4, 2.7)), u(g(f), G.scale(1.2, 8, 1.2)))),
                  G.translate(-33, -3, 55),
                  P(.7, .7, .7, .2),
                );
            }),
            v(t => {
              t.h = () => G.translate(0, 0, J(1 - 5 * r()) * m(E[4].g, E[5].g) * Math.sin(.9 * B) * 8),
                M(b(
                  d(
                    u(g(f), G.translate(-27, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2)),
                    u(g(f), G.translate(-27, -3, 55).scale(1, 3), P(.9, .9, .9, .2)),
                  ),
                )),
                M(g(f), G.translate(-39, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2));
            }),
            v(t => {
              t.h = () => G.translate(0, -6.5 * E[4].i),
                M(
                  g(6),
                  G.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                  P(.7, .7, .7, .4),
                );
            }),
            [...u(
              b(p(
                u(g(f), G.translate(0, -3).scale(11, 1.4, 3), P(.9, .9, .9, .2)),
                d(
                  u(g(6), G.rotate(0, 0, 90).scale(6, 8, 6), P(.3, .6, .6, .3)),
                  u(g(4, 0, .01), G.translate(0, 6).scale(12, 2, .75).rotate(0, 45), P(.3, .6, .6, .3)),
                  u(g(6), G.rotate(0, 0, 90).scale(5, 12, 5), P(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(t =>
                    u(g(5), G.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(.3, .6, .6, .3))
                  ),
                ),
              )),
              G,
            )]),
          a =
            (M(e, G.translate(-53, 0, 55)),
              M(g(6), G.translate(-61.3, -2.4, 49).scale(3, 1, 5), P(.4, .6, .6, .3)),
              M(g(7), G.translate(-57, -2.6, 46).scale(4, 1, 4), P(.8, .8, .8, .3)),
              I(G.translate(-55, -1.1, 46).rotate(0, 90)),
              v(t => {
                t.h = () => G.translate(-75, (1 - E[5].i) * (1 - E[6].g) * 3, 55).rotate(180 * (1 - E[5].i) + C, 0),
                  M(e);
              }, 2),
              M(g(f), G.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), P(.7, .7, .7, .2)),
              M(g(3, 0, -.5), G.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(.8, .8, .8, .2)),
              M(
                b(d(
                  p(
                    u(g(f), G.translate(-100, -2.5, 55).scale(8, 1, 8), P(.8, .8, .8, .2)),
                    u(g(f), G.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(.8, .8, .8, .2)),
                    u(g(f), G.translate(-100, -2.6, 70).scale(3, 1.1, 7), P(.8, .8, .8, .2)),
                    u(g(f), G.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(.8, .8, .8, .2)),
                    u(g(6), G.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(.6, .6, .6, .3)),
                    u(g(f), G.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(.8, .8, .8, .2)),
                    u(g(f), G.translate(-100, .42, 92).scale(3, 1.1, 4.1), P(.8, .8, .8, .2)),
                  ),
                  u(g(8), G.translate(-100, -1, 55).scale(7, .9, 7), P(.3, .3, .3, .4)),
                  u(g(8), G.translate(-100, -2, 55).scale(4, .3, 4), P(.4, .4, .4, .5)),
                  u(g(8), G.translate(-100, -3, 55).scale(.6, 1, .6), P(.4, .4, .4, .5)),
                )),
                G,
              ),
              A(G.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              A(G.translate(-89, .2, 80), [0, 0, 6]),
              M(b(
                d(
                  u(g(f), G.translate(-100, 1, 63).scale(7.5, 4), P(.5, .5, .5, .4)),
                  u(g(f), G.translate(-100, 0, 70).scale(2, 2, 10), P(.5, .5, .5, .4)),
                  u(g(20, 1), G.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(.5, .5, .5, .4)),
                ),
              )),
              v(t => {
                t.h = () => G.translate(-99.7, 5.3 * -E[6].g - 2, 63.5), M(l);
              }),
              f.map(({ x: e, z: a }) => {
                M(g(6), G.translate(7 * e - 100, -3, 7 * a + 55).scale(1, 8.1), P(.6, .15, .15, .8)),
                  [4, -.4].map(t =>
                    M(g(6), G.translate(7 * e - 100, t, 7 * a + 55).scale(1.3, .5, 1.3), P(.4, .2, .2, .8))
                  );
              }),
              _(7, t => {
                M(
                  g((23 * t + 1) % 5 + 5, 0, .55),
                  G.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                    5 + t / 2,
                    1 + t / 6,
                    5 + t / 3,
                  ),
                  P(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                );
              }),
              M(g(f), G.translate(-87, -9.5, 24).scale(7, 1, 3), P(.4, .5, .6, .4)),
              M(g(4), G.translate(-86, -9.2, 27).scale(5, 1, 5), P(.5, .6, .7, .3)),
              M(g(12, 1), G.translate(-86, -9, 31).scale(1.5, 1, 1.5), P(.3, .3, .4, .1)),
              I(G.translate(-86, -7.5, 31)),
              v(t => {
                t.h = () => G.translate(0, 3.5 * (1 - V(E[6].g, E[7].g)) + m(E[7].i, E[6].i) * Math.sin(B) * 5),
                  [0, 12, 24].map(t =>
                    M(g(f), G.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.2, .5, .6, .2))
                  );
              }),
              v(t => {
                t.h = () => {
                  let t = m(E[7].i, E[6].i);
                  return G.translate(0, t * Math.sin(B + 3) * 6, 6 * Math.sin(.6 * B + t) * t);
                },
                  [6, 18].map(t =>
                    M(g(f), G.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.1, .4, .5, .2))
                  );
              }),
              M(
                b(d(
                  p(
                    u(g(f), G.scale(11, 1, 13), P(.3, .4, .6, .3)),
                    u(g(5), G.translate(0, 0, -7).scale(2, 1.2, 2), P(.2, .4, .7, .3)),
                    u(g(5), G.scale(9, 1.2, 9), P(0, .2, .3, .5)),
                  ),
                  u(g(5), G.scale(5.4, 5, 5.4), P(0, .2, .3, .5)),
                )),
                G.translate(-38.9, -11.3, 17),
              ),
              I(G.translate(-38.9, -9.6, 10)),
              v(t => {
                t.h = () => G.translate(0, -7.3 * E[7].i),
                  M(
                    b(d(
                      p(
                        u(g(5), G.translate(0, 2).scale(5, 7, 5).skewY(8), P(.2, .4, .5, .5)),
                        u(g(5), G.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(.25, .35, .5, .5)),
                        u(g(5), G.translate(0, 9).scale(.6, 7, .6).skewY(8), P(.35, .3, .5, .5)),
                      ),
                      u(g(5), G.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(.2, .4, .5, .5)),
                    )),
                    G.translate(-38.9, -11.3, 17),
                  ),
                  A(
                    G.translate(-39.1, -.3, 17).rotate(0, 0, 10),
                    ...F(15).map(({ x: t, z: e }) => [3 * t, 3 * e, 1.2]),
                  );
              }),
              f.map(({ x: t, z: e }) => {
                o = G.translate(9 * t - 38.9, -7.3, 11 * e + 17),
                  M(g(14, 1), o.scale(1, 4), P(.25, .25, .25, 1)),
                  [1.5, 8].map(t => M(g(17, 1), o.translate(0, t - 4).scale(1.5, .5, 1.5), P(.6, .6, .6, .3)));
              }),
              M(
                b(d(
                  p(
                    u(g(6), G.translate(0, 0, -36).scale(15, 1.2, 15), P(.7, .7, .7, .3)),
                    u(g(f), G.translate(0, 0, -18).scale(4, 1.2, 6), P(.45, .4, .6, .3)),
                  ),
                  ..._(6, e =>
                    _(6, t =>
                      u(
                        g(6),
                        G.translate(4.6 * t - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                        P(.7, .7, .7, .3),
                      ))).flat(),
                )),
                G.translate(-38.9, -11.3, 17),
              ),
              A(G.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              M(g(5), G.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), P(.8, .1, .25, .4)),
              I(G.translate(-84, -.5, 85).rotate(0, 45)),
              v(t => {
                t.h = () => n(-123, 1.4, 55 + -65 * it), I(G.translate(0, -3, -4).rotate(0, 180)), M(i);
              }),
              A(G.translate(-115, .2, -12), [0, 0, 3.5]),
              b(d(
                u(g(f), G.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), P(.25, .25, .35, .3)),
                u(g(3), G.translate(0, 0, -5.5).scale(3, 2), P(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(t => u(g(f), G.translate(t, -.5, 1).scale(.14, .3, 6.5), P(.7, .2, 0, .3))),
              ))),
          s = (v(t => {
            t.h = () => {
              let t = Math.sin(1.1 * B);
              return G.translate.call(G, 0, -2, m(E[10].g, E[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
            }, _(2, t => M(a, G.translate(9 * t - 110 + (1 & t), 1.7, -12)));
          }),
            v(t => {
              t.h = () => {
                let t = Math.sin(2.1 * B);
                return G.translate.call(G, 0, -2, m(E[10].g, E[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
              }, _(2, t => M(a, G.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
            }),
            v(t => {
              t.h = () => {
                let t = Math.sin(1.5 * B);
                return G.translate.call(
                  G,
                  0,
                  -2,
                  -8.5 * V((1 - E[10].g) * (1 - m(E[10].g, E[11].g)), m(E[10].g, E[11].g) * (t < 0 ? -t : t)) + 10,
                );
              }, _(3, t => M(a, G.translate(9 * t - 106, 1.7, -12)));
            }),
            M(
              b(d(
                p(
                  u(g(f), G.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                  u(g(f), G.translate(26.5, -.6, 10).scale(17, 2, .5)),
                ),
                ..._(4, t => u(g(f), G.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                ..._(3, t => u(g(f), G.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
              )),
              G.translate(-123, 0, -12),
              P(.5, .5, .6, .2),
            ),
            M(g(5), G.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), P(.25, .25, .35, 1)),
            M(g(f), G.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(.8, .8, .8, .2)),
            M(g(6), G.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), P(.6, .5, .7, .2)),
            I(G.translate(-116, -1.4, -18).rotate(0, 180)),
            _(3, t => {
              M(h, G.translate(12 * t - 109, -9, -12), P(.6, .6, .6, .3)),
                M(h, G.translate(-77, -9, -12 * t - 20).rotate(0, 90), P(.6, .6, .6, .3));
            }),
            M(b(
              d(
                u(g(12), G.translate(-77, -13.9, -12).scale(4, 18.2, 4), P(.7, .7, .7, .2)),
                u(g(f), G.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), P(.4, .5, .6, .2)),
                u(g(f), G.translate(-77, 0, -14).scale(1.5, 2.2, 2), P(.4, .5, .6, .2)),
                u(g(12), G.translate(-77, 2.8, -12).scale(3, 5, 3), P(.4, .5, .6, .2)),
              ),
            )),
            M(g(f), G.translate(-115.5, -17, -12).scale(.5, 15, 2.2), P(.6, .6, .6, .3)),
            M(g(f), G.translate(-77, -17, -50.5).scale(2.2, 15, .5), P(.6, .6, .6, .3)),
            M(g(f), G.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), P(.6, .6, .6, .3)),
            M(b(
              d(
                u(g(f), G.translate(-93, -5.8, -40).scale(9, 1, 5), P(.8, .8, .8, .1)),
                u(g(9), G.translate(-98, -5.8, -40).scale(3, 8, 3), P(.7, .7, .7, .2)),
              ),
            )),
            M(g(9), G.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), P(.5, .5, .5, .3)),
            I(G.translate(-98, -4.4, -40).rotate(0, 90)),
            A(G.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
            M(b(
              d(
                p(
                  u(g(6, 0, 0, .6), G.translate(-100, .7, 105.5).scale(8, 1, 11), P(.7, .7, .7, .2)),
                  u(g(f), G.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), P(.7, .7, .7, .2)),
                  u(g(f), G.translate(-91.2, .7, 107).scale(3, 1, 3.3), P(.7, .7, .7, .2)),
                ),
                u(g(5), G.translate(-100, .7, 113).scale(4, 3, 4), P(.7, .7, .7, .2)),
              ),
            )),
            _(4, e =>
              v(t => {
                t.h = () => {
                  let t = m(E[8].i, E[12].i);
                  return G.translate(
                    (2 < e ? 2 * (1 - t) + t : 0) - 100,
                    t * Math.sin(1.3 * B + 1.7 * e) * (3 + e / 3) + .7,
                    115 + (1 & e ? -1 : 1) * (1 - E[8].i) * (1 - E[12].i) * -7
                      + (t < .05 ? .05 : t) * Math.cos(1.3 * B + 7 * e) * (4 - 2 * (1 - e / 3)),
                  );
                },
                  M(
                    g(6),
                    G.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
                    P(.5 - e / 8, e / 12 + .5, .7, .3),
                  );
              })),
            v(t => {
              t.h = () => {
                let t = m(E[8].i, E[12].i);
                return G.translate(2.5 * (1 - t) - 139.7, -3 * (1 - E[8].g) + t * Math.sin(.8 * B) * -1 - 1.8, 93.5)
                  .rotateSelf(Math.cos(1.3 * B) * (3 * t + 3), 0);
              },
                M(b(
                  d(u(g(10), G.scale(6, 2, 6), P(.1, .6, .5, .3)), u(g(10), G.scale(3.3, 6, 3.3), P(.1, .6, .5, .5))),
                )),
                o = G.translate(-7.5).rotate(0, 90),
                M(g(15, 1), o.scale(3, 2.3, 3), P(.4, .4, .4, .3)),
                M(g(10), o.scale(2, 2.5, 2), P(.3, .8, .7, .3)),
                M(g(5), o.scale(1, 3), P(.5, .5, .5, .5)),
                I(o.translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(t =>
                  M(c, G.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), P(1, 1, .8, .2))
                ),
                A(G.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(e => {
              M(g(12, 1), G.translate(-7.5 * e - 100, 3.7, 96).scale(.8, 4, .8), P(.6, .24, .2, .5)),
                [7.2, 1.5].map(t =>
                  M(g(15, 1), G.translate(-7.5 * e - 100, t + .7, 96).scale(1.1, .5, 1.1), P(.5, .24, .2, .4))
                ),
                M(c, G.translate(-5 * e - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * e - 90), P(1, 1, .8)),
                M(
                  b(d(
                    u(g(f), G.translate(-4 * e, 3.5, -.5).scale(4, 4, .7), P(.5, .5, .5, .4)),
                    u(g(f), G.scale(3, 3, 10), P(.6, .24, .2, .5)),
                    u(g(28, 1), G.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(.6, .24, .2, .5)),
                    u(g(5), G.translate(-5.3 * e, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(.6, .24, .2, .5)),
                    u(g(5), G.translate(-5.3 * e, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), P(.6, .24, .2, .5)),
                  )),
                  G.translate(e - 100, .7, 97),
                );
            }),
            v(t => {
              t.h = () => G.translate(-100, .6 - 6 * E[12].g, 96.5).scale(.88, 1.2), M(l);
            }),
            [
              ...u(g(25, 1), G.scale(8, 1, 8), P(.45, .45, .45, .2)),
              ...u(g(5), G.translate(0, 1).scale(1, .2), P(.3, .3, .3, .2)),
            ]);
        v(t => {
          t.h = () => G.translate(-80, 1, 106).rotate(0, 40 + T),
            M(b(
              d(
                u(g(25, 1), G.scale(8, 1, 8), P(.45, .45, .45, .2)),
                u(g(f), G.translate(0, 0, -5.5).scale(1.5, 3, 2.5), P(.45, .45, .45, .2)),
              ),
            )),
            M(g(8), G.translate(0, 2).scale(3, 1.5, 3), P(.7, .7, .7, .1)),
            M(g(5), G.translate(0, 2).scale(1, 2), P(.3, .3, .3, .2)),
            A(G.translate(0, 3), ...F(10).map(({ x: t, z: e }) => [5.6 * t, 5.6 * e, 2.5]));
        }),
          v(t => {
            t.h = () => G.translate(-64, 1, 106).rotate(0, Y),
              M(b(
                d(
                  u(g(25, 1), G.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                  u(g(f), G.scale(9, 5, 2), P(.3, 0, 0, .3)),
                ),
              )),
              M(s),
              [-1, 1].map(t =>
                M(c, G.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))
              );
          }),
          v(t => {
            t.h = () => G.translate(-48, 1, 106).rotate(0, 180 - Y),
              M(b(
                d(
                  u(g(25, 1), G.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                  u(g(f), G.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                  u(g(f), G.translate(0, 0, 7).scale(2, 5, 9), P(.3, 0, 0, .3)),
                ),
              )),
              M(s);
          }),
          v(t => {
            t.h = () => G.translate(-48, 1, 90).rotate(0, 270 + Y),
              M(b(
                d(
                  u(g(25, 1), G.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                  u(g(f), G.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                  u(g(f), G.translate(0, 0, -7).scale(2, 5, 9), P(.3, 0, 0, .3)),
                ),
              )),
              M(s);
          }),
          M(g(f), G.translate(-56, 1, 106).scale(.7, .8, 2.5), P(.7, .7, .7, .2)),
          M(g(f), G.translate(-48, 1, 98).scale(2.5, .8, .7), P(.7, .7, .7, .2)),
          M(g(f), G.translate(-39, .4, 90).scale(2, 1, 2), P(.7, .7, .7, .3)),
          M(g(f), G.translate(-34.2, .4, 90).scale(3, 1, 3), P(.7, .7, .7, .3)),
          I(G.translate(-34, 2.7, 96).rotate(-12, 0)),
          M(g(5), G.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), P(.2, .5, .5, .6)),
          [P(.1, .55, .45, .2), P(.2, .5, .5, .3), P(.3, .45, .55, .4)].map((e, a) =>
            v(t => {
              t.h = () =>
                G.translate(
                  0,
                  (1 - E[13].i) * (1 - E[14].i) * (a ? 0 : 3) + m(E[13].i, E[14].i) * Math.sin(1.5 * B + 1.5 * a) * 4,
                ),
                M(g(f), G.translate(-23.5, .5, 90 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
                2 === a && M(g(f), G.translate(-29.1, .4, 90).scale(2.1, 1, 3), P(.7, .7, .7, .3)),
                1 === a
                && M(
                  g(f),
                  G.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1),
                  P(.6, .6, .7, .3),
                );
            })
          ),
          M(b(
            d(
              u(g(6, 0, 0, .3), G.translate(0, -.92, 95).scale(14, 2, 14), P(.8, .8, .8, .2)),
              u(g(5), G.translate(0, 0, 95).scale3d(6), P(.3, .3, .3, .5)),
            ),
          )),
          [8, -6.1].map((e, a) =>
            _(3, t =>
              M(
                h,
                G.translate(6 * t - 6, e - (1 & t), 111 - .2 * (1 & t) - a),
                1 & t ? P(.5, .5, .5, .3) : P(.35, .35, .35, .5),
              ))
          ),
          [-1, 1].map(t => M(c, G.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))),
          I(G.translate(0, 1.7, 82).rotate(0, 180)),
          M(g(5), G.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(.5, .3, .3, .4)),
          M(b(
            d(
              p(
                u(g(f), G.translate(0, 16, 110.5).scale(12, 1, 3), P(.5, .3, .3, .4)),
                u(g(f), G.translate(0, 16, 111).scale(3, 1, 3.8), P(.5, .3, .3, .4)),
              ),
              u(g(5), G.translate(0, 16, 103.5).scale(5.5, 5, 5.5), P(.5, .3, .3, .4)),
            ),
          )),
          v(t => {
            t.h = () => {
              let t = Math.sin(B);
              return G.translate(-2 * t).rotate(0, 0, 25 * t);
            },
              M(g(3), G.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), P(.5, .3, .3, .4)),
              [22, 30].map(t => {
                M(g(6), G.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), P(.7, .7, .7, .4)),
                  M(g(f), G.translate(0, 6.2, t + 95).scale(.5, 11, .5), P(.5, .3, .3, .4));
              });
          }),
          M(g(6), G.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(.5, .6, .7, .3)),
          M(g(f), G.translate(0, 16, 129).scale(1.5, 1, 2), P(.5, .6, .7, .3)),
          M(g(7), G.translate(0, 16.2, 133).scale(5, 1, 5), P(.4, .5, .6, .4)),
          v(t => {
            t.h = () => {
              let t = m(m((E[14].g + E[14].i) / 2, E[13].i), (E[15].g + E[15].i) / 2);
              return G.translate(0, 16 * t, 8.5 * J(2 * t - 1) + 95);
            },
              M(g(5), G.scale(5, 1.1, 5), P(.5, .3, .3, .4)),
              M(g(5), G.scale(5.5, .9, 5.5), P(.25, .25, .25, .4)),
              I(G.translate(0, 1.5, -1).rotate(0, 180));
          }),
          A(G.translate(0, 3, 95), ...F(9).map(({ x: t, z: e }) => [9 * t, 9 * e, 4])),
          A(G.translate(0, 19, 134), [0, 0, 3.5]);
      }),
      at = [
        v(() => {
          [0, 180].map(t => M(c, G.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), P(1, 1, .8))),
            M(D(20), G.translate(0, 1).scale(.5, .5, .5), P(1, .3, .4));
          let e = u(
            b(d(g(15, 1), u(g(f), G.translate(0, 0, 1).scale(2, 2, .5)))),
            G.rotate(-90, 0).scale(.1, .05, .1),
            P(.3, .3, .3),
          );
          [-1, 1].map(t => M(e, G.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            M(g(f), G.translate(0, .9, .45).scale(.15, .02, .06), P(.3, .3, .3)),
            M(D(20), G.scale(.7, .8, .55), P(1, .3, .4));
        }),
        ...[-1, 1].map(t =>
          v(() => {
            M(g(10, 1), G.translate(.3 * t, -.8).scale(.2, .7, .24), P(1, .3, .4));
          })
        ),
      ],
      Ct = v(() => {
        M(g(6, 1), G.scale(.13, 1.4, .13), P(.3, .3, .5, .1)),
          M(g(8, 1), G.translate(0, 1).scale(.21, .3, .21), P(1, .5, .2)),
          M(g(3), G.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), P(.2, .2, .2, .1));
      }, 0),
      jt = v(() => {
        M(g(6).slice(0, -1), G.scale(.77, 1, .77), P(1, .3, .5));
      }, 0),
      kt = v(() => {
        M(
          D(30, 24, (t, e, a) => {
            let l = e / 24, r = t * Math.PI * 2 / 30, s = l ** .6 * Math.PI / 2;
            return t = l * l * Math.sin(t * Math.PI * 14 / 30) / 4,
              23 === e
                ? { x: a.D = 0, y: -.5, z: 0 }
                : {
                  x: Math.cos(r) * Math.sin(s),
                  y: Math.cos(l * Math.PI) - l - t,
                  z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
                };
          }),
          G.scale3d(.7),
          P(1, 1, 1),
        ), [-1, 1].map(t => M(D(12), G.translate(.16 * t, .4, -.36).scale3d(.09)));
      }, 0),
      setTimeout(z);
  }),
    Q.onload = Q.onerror = e,
    Q.src = Ft;
});
