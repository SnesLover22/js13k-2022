let Z = 0,
  $ = 0,
  Y = 0,
  z = 0,
  tt = 0,
  at = 0,
  et = 0,
  w = 0,
  lt = 0,
  rt = 0,
  st = 0,
  nt = 0,
  ot = 0,
  m = 0,
  ct = 0,
  it = 0,
  ht = 0,
  u = 0,
  g = 0,
  ft = 0,
  v = 0,
  mt = 0,
  C = .066,
  j = 1,
  ut = 1,
  xt = !1,
  yt = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  k = [],
  M = [],
  gt = [],
  p = [],
  d = { x: 0, y: 0, z: 0 },
  b = { x: 0, y: 0, z: 0 },
  F = Math.PI / 180,
  I = new DOMMatrix(),
  l = new Float32Array(16),
  r = new Float32Array(624),
  Mt = new Int32Array(256),
  vt = new Uint8Array(65536),
  A = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  T = (t, a) => a < t ? t : a,
  D = t => t < 0 ? -t : t,
  P = t => t < 0 ? 0 : 1 < t ? 1 : t,
  S = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  zt = t => Math.atan2(Math.sin(t *= F), Math.cos(t)) / F,
  pt = (t, a, e) =>
    ((t *= F) + (2 * (a = (a * F - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / F,
  dt = (t, a, e, l) => (t += (a - t < 0 ? -1 : 1) * T(0, D(a - t) ** .9 - e) * l * 2) + (a - t) * P(l / 7),
  bt = ({ x: t, y: a, z: e }) => Math.hypot(t - d.x, a - d.y, e - d.z),
  i = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  wt = t => {
    let a = 0, e = 0, l = 0, r, s = t.at(-1);
    for (r of t) a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
  },
  It = (
    t,
    a = l,
    e = 0,
  ) => (e *= 16,
    a[e++] = t.m11,
    a[e++] = t.m12,
    a[e++] = t.m13,
    a[e++] = t.m14,
    a[e++] = t.m21,
    a[e++] = t.m22,
    a[e++] = t.m23,
    a[e++] = t.m24,
    a[e++] = t.m31,
    a[e++] = t.m32,
    a[e++] = t.m33,
    a[e++] = t.m34,
    a[e++] = t.m41,
    a[e++] = t.m42,
    a[e++] = t.m43,
    a[e] = t.m44,
    a),
  At = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  h = (t, a, e) => (t.D = e, t.A = a, t),
  Pt = (t, l, a = t.A) =>
    h(
      t.map(t => {
        let a, e;
        return { x: t, y: a, z: e } = t,
          { x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }),
          { x: t, y: a, z: e };
      }),
      a,
      t.D,
    ),
  H = (t, a, e) => t.map(t => Pt(t, a, e)),
  St = (e, l = 0) =>
    A(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  s = (l, r, s) => l.map((t, a, { length: e }) => h([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, s)),
  Q = (
    t,
    a,
    e = 0,
    l,
  ) => (t = t ? St(t, l) : yt,
    l = Pt(t, I.translate(0, 1).scale3d(0 < e ? e : 1)),
    t = Pt(t, I.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...s(t, l, a), l, t]),
  Yt = (
    l,
    r = l,
    s = (
      t,
      a,
    ) => (a *= Math.PI / r,
      { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(a), y: Math.cos(a), z: Math.sin(t) * Math.sin(a) }),
  ) => {
    let n = [];
    for (let e = 0; l > e; e++) {
      for (let a = 0; r > a; a++) {
        let t = h([], 0, 1);
        n.push(t),
          t.push(s(e, a, t)),
          a && t.push(s((e + 1) % l, a, t)),
          r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
          t.push(s(e, a + 1 % r, t));
      }
    }
    return n;
  },
  c = (l, r) => {
    let s, n, o, c = r.C;
    for (let t = 0; c.length > t; ++t) {
      if ((s = i(l, c[t]) - l.w) < -8e-5 ? o = r : 8e-5 < s && (n = r), o && n) {
        n = [], o = [], c = r.C, t = r.B;
        let a = c.at(-1), e = i(l, a) - l.w;
        for (let t of c) {
          s = i(l, t) - l.w,
            e < 8e-5 && o.push(a),
            -8e-5 < e && n.push(a),
            (8e-5 < e && s < -8e-5 || e < -8e-5 && 8e-5 < s)
            && (e /= s - e,
              a = { x: a.x + (a.x - t.x) * e, y: a.y + (a.y - t.y) * e, z: a.z + (a.z - t.z) * e },
              n.push(a),
              o.push(a)),
            a = t,
            e = s;
        }
        return {
          o: 2 < n.length && { C: h(n, c.A, c.D), B: t, u: r },
          m: 2 < o.length && { C: h(o, c.A, c.D), B: t, u: r },
        };
      }
    }
    return { o: n, m: o };
  },
  n = (t, a, e = wt(a.C)) => {
    let l, r, s;
    return t
      ? ({ o: l, m: r } = c(t, a), l || r || t.s.push(a), l && (t.o = n(t.o, l, e)), r && (t.m = n(t.m, r, e)))
      : ({ x: l, y: r, z: e, w: s } = e, t = { x: l, y: r, z: e, w: s, s: [a], o: 0, m: 0 }),
      t;
  },
  e = (a, r, s) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = c(t, a);
        e || l || (0 < s * i(t, r) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of r.s) o(a, t);
    return n;
  },
  o = (t, a) => t && (a(t), o(t.o, a), o(t.m, a)),
  f = t => t.length ? t.reduce((t, a) => n(t, { C: a, B: 0, u: 0 }), 0) : t,
  Ct = t => (o(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.s) t.B = !t.B;
  }),
    t),
  B = (...t) =>
    t.reduce((l, a) => {
      let r = [];
      if (l = f(l), a) {
        a = f(a), o(l, t => t.s = e(a, t, 1)), o(a, t => r.push([t, e(l, t, -1)]));
        for (let [a, e] of r) for (let t of e) n(l, t, a);
      }
      return l;
    }),
  O = (t, ...a) => Ct(B(Ct(f(t)), ...a)),
  R = t => {
    let e = new Map(),
      l = new Map(),
      r = t => {
        let a;
        return t.u && ((a = e.get(t.u)) ? (l.delete(a), t = r(t.u)) : e.set(t.u, t)), t;
      };
    return o(t, a => {
      for (let t of a.s) l.set(r(t), t.B);
    }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return h(a ? e.reverse() : e, t.A, t.D);
      });
  },
  q = (t, a, e) => t + (a - t) * P(1 - Math.exp(-e * C)),
  jt = () => {
    let t = S(M[12].h, M[13].h), a = q(et, 0, 1);
    et = a + (zt(et + 60 * C) - a) * P(M[5].h - M[6].i),
      a = q(tt, 0, 5),
      tt = a + (zt(tt + 56 * C) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
      a = q(at, 0, 4),
      at = a + (zt(at + 48 * C) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
      rt = q(rt, M[9].i, .2 + .3 * D(2 * M[9].i - 1)),
      lt = q(lt, w ? lt + (-9 - lt) * P(1.5 * C) : P(Y / 3), 1),
      j && Y > j && (j = 0, h4.innerHTML = ""),
      M[0].j && .8 < M[0].h && (Z < 13
        ? (1 / 0 > j && (j = Y + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), M[0].j = 0)
        : w
          || (1 / 0 > j && (j = Y + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            w = 1));
    for (let t of k) t.g && (t.l = t.g(t));
    for (let t of M) t.g();
    for (let t of gt) t.g();
  },
  kt = () => {
    h3.innerHTML = [
      "0",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
      "XIII",
    ][Z = gt.reduce((t, { j: a }) => t + a, 0)];
  },
  Ft = () => {
    localStorage.DanteSP22 = JSON.stringify([M.map(({ j: t }) => t), gt.map(({ j: t }) => t), z, Y, rt]);
  },
  L = (t, a = 1) => {
    let e = Lt;
    return k.push(Lt = a = { l: I, F: k.length, H: a, s: [] }), t(a), Lt = e, a;
  },
  W = (t, a = I, e) => Lt.s.push(...H(t, a, e)),
  X = r => {
    let s = Lt,
      n = M.length,
      o = {
        j: 0,
        h: 0,
        i: 0,
        u: s,
        g() {
          let t = o.j, a = o.h, e = o.i, l = s.l.multiply(r);
          o.I = l,
            bt(l.transformPoint()) < 2.9 && p[5] && (a < .3 || .7 < a)
            && (o.j = t ? 0 : 1, n && 1 / 0 > j && (j = Y + 1, h4.innerHTML = "* click *"), z = n, Ft()),
            o.h = q(a, t, 4),
            o.i = q(e, t, 1),
            o.l = l.rotate(60 * o.h - 30, 0).translateSelf(0, 1);
        },
      };
    M.push(o),
      W(Q(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), E(.4, .5, .5)),
      W(Q(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), E(.4, .5, .5)),
      W(Q(), r.translate(0, -.4).scale(.5, .1, .5), E(.5, .5, .4));
  },
  N = (h, ...t) => {
    let f = -1,
      m = 0,
      u = 0,
      g = 0,
      M = 0,
      v = 0,
      p = 1,
      d = 3,
      b = {
        j: 0,
        g() {
          if (!b.j) {
            let r = 1, s = 1 / 0, t, a, w, e, l, n, o;
            for (let l of x) {
              let { x: t, z: a, w: e } = l;
              a = (t = Math.hypot(A - t, z - a)) - e, o ||= t < e, 0 < a && s > a && (s = a, y = l);
              var c = t / e;
              r = c > r ? r : c;
            }
            o
            || ({ x: t, z: a, w } = y,
              e = A - t,
              l = z - a,
              n = Math.hypot(e, l),
              i = Math.atan2(-l, e),
              p && (u = (Math.random() - .5) * Math.PI / 2, d = T(1, d / (1 + Math.random()))),
              f = -Math.cos(i += u),
              m = Math.sin(i),
              .1 < n && (n = (n < w ? n : w) / (n || 1), A = e * n + t, z = l * n + a)),
              p = o,
              d = q(d, 3 + 6 * (1 - r), 3 + r),
              P = q(P, A = q(A, A + f, d), d),
              S = q(S, z = q(z, z + m, d), d),
              g = pt(g, Math.atan2(P - M, S - v) / F - 180, 3 * C),
              M = P,
              v = S;
            var i = (b.l = I.l.multiply(h.translate(P, 0, S).rotateSelf(0, g, 7 * Math.sin(1.7 * Y)))).transformPoint();
            bt(i) < 1.5
              && (b.j = 1,
                c = [
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
                ][Z] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > j && (j = Y + (Z && Z < 12 ? 5 : 7), h4.innerHTML = c),
                kt(),
                Ft());
          }
          b.j
            && (b.l = k[2].l.translate(
              a % 4 * 1.2 - 1.7 + Math.sin(Y + a) / 7,
              -2,
              1.7 * (a / 4 | 0) - 5.5 + D(a % 4 - 2) + Math.cos(Y / 1.5 + a) / 6,
            ));
        },
      },
      I = Lt,
      a = gt.length,
      x = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      y = x[0],
      { x: A, z } = y,
      P = A,
      S = z;
    gt.push(b);
  },
  Tt = (t, a, e, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (e - a),
      x = new DOMMatrix(At(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return a = A(
      8,
      t => (t = x.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (u * t.x | 0) / u / t.w,
        s -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      e = I.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      Pt(a, e).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          m = m > e ? m : e;
      }),
      f *= f < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      I.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(e);
  },
  Dt = (t, a = 35633) => (a = _.c6x(a), _.s3c(a, t), _.c6a(a), a),
  Ht = (t, a) => {
    let e = {}, l = _.c1h();
    return _.abz(l, t), _.abz(l, Dt(a, 35632)), _.l8l(l), t => t ? e[t] || (e[t] = _.gan(l, t)) : _.u7y(l);
  },
  Qt = (t, e, a = 42) => {
    if (U) {
      for (var l of (a = I.rotate(0, 40 * Math.sin($) - 70), [37, 38, 39])) It(a, r, l - 1);
      _.uae(t, !1, r), _.d97(4, k[39].G - k[37].v, 5123, 2 * k[37].v);
    } else {
      for (l = 0; k.length > l; ++l) {
        let { H: t, F: a, l: e } = k[l];
        t && It(e, r, a - 1);
      }
      for (_.uae(t, !1, r), _.d97(4, (e ? k[39].G : k[37].v) - 3, 5123, 6), e = 0; e < 13; ++e) It(gt[e].l, r, e);
      for (e = 0; M.length > e; ++e) {
        let { l: t, h: a } = M[e];
        It(t, r, e + 13), r[16 * (e + 13) + 15] = 1 - a;
      }
      _.uae(t, !1, r),
        _.das(4, k[a].G - k[a].v, 5123, 2 * k[a].v, 13),
        _.das(4, k[40].G - k[40].v, 5123, 2 * k[40].v, M.length);
    }
  },
  Bt = () => {
    var { u: t, I: a } = M[z], { x: a, y: e, z: l } = a.transformPoint({ x: 0, y: 8, z: -3 });
    d.x = b.x = a,
      d.y = b.y = Kt = e,
      d.z = b.z = l,
      ot = m = t.F || 1,
      G =
        Ut =
        Et =
        Xt =
        Nt =
          0,
      ut = 1;
  },
  Ot = t => {
    h4.innerHTML += ".", setTimeout(t);
  },
  Rt = t => Math.sin(t * Math.PI * 2),
  E = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  U,
  qt,
  Lt,
  K,
  Wt,
  G,
  Xt,
  Nt,
  Et,
  Ut,
  Kt,
  V,
  J,
  Gt,
  x,
  y,
  a = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Vt = new AudioContext(),
  Jt = Vt.createBufferSource(),
  _ = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let t in _) _[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = _[t];
Ot(() => {
  let t = 0,
    e = () => {
      if (2 == ++t) {
        let e = t => {
            requestAnimationFrame(e),
              a = (t - (qt || t)) / 1e3,
              U ? (C = 0, p[5] = 0) : C = .066 < a ? .066 : a,
              Y += C,
              $ += a,
              qt = t,
              0 < C
              && (_.b6o(36160, l),
                _.fa7(),
                _.r9r(0, 0, 128, 128, 6408, 5121, vt),
                _.iay(36009, [36064, 36096]),
                _.iay(36008, [36064, 36096]),
                (() => {
                  G = J = V = 0,
                    (() => {
                      for (let t = 32; t < 128; t += 2) {
                        let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                        for (let s = 1 & t; s < 128; s += 2) {
                          let t = h + 4 * s,
                            a = h + 4 * (127 - s),
                            e = vt[t] / 255,
                            l = vt[1 + a] / 255,
                            r = 1 - D(s / 63.5 - 1);
                          10 < s && s < 118
                          && (n = T(n, T(e * r, e * vt[a] / 255)), o = T(o, T(l * r, l * vt[1 + t] / 255))),
                            (s < 54 || 74 < s) && .001 < (a = (1 - r) * (l < e ? e : l) / 3)
                            && (s < 64 && a > c ? c = a : 64 < s && a > i && (i = a));
                        }
                        D(i - c) > (V < 0 ? -V : V) && (V = i - c), D(o - n) > (J < 0 ? -J : J) && (J = o - n);
                      }
                    })(),
                    (() => {
                      let s = 0, n = 0, a = 0, e = 0;
                      Mt.fill(0);
                      for (let t = 0; t < 31; ++t) {
                        let l = 0, r = 512 * t;
                        for (let e = 0; e < 128; e++) {
                          let t = r + 4 * e, a = (vt[t] + vt[1 + t]) / 255;
                          t = vt[2 + t],
                            14 < e && e < 114 && (l += a),
                            t && a && (a = Mt[t] + 1, Mt[t] = a, s > a || (s = a, n = t));
                        }
                        l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), G = 1);
                      }
                      n && (G = 1),
                        ut ? n && (ut = 0, m = n) : m = n || ot,
                        ot = n,
                        Xt = q(Xt, G ? 6.5 : 8, 4),
                        b.y += a / 41 - (G ? 1 : Xt) * e / 41 * Xt * C;
                    })();
                  let t = st + (p[0] ? 1 : 0) + (p[2] ? -1 : 0), e = nt + (p[1] ? 1 : 0) + (p[3] ? -1 : 0);
                  if (r = navigator.getGamepads()[0]) {
                    let a = r.buttons;
                    var l = r.axes;
                    (r = (s = t => a[t]?.pressed || 0 < a[t]?.value)(1) || s(3) || s(2) || s(0)) !== xt && (xt = r)
                    && (p[5] = 1),
                      t += (.2 < D(-l[0]) ? -l[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                      e += (.2 < D(-l[1]) ? -l[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                      K && (.3 < D(l[2]) && (mt += 80 * l[2] * C), .3 < D(l[3]) && (v += 80 * l[3] * C));
                  }
                  (e < 0 ? -e : e) < .05 && (e = 0), (t < 0 ? -t : t) < .05 && (t = 0);
                  var r = Math.atan2(e, t),
                    s = P(Math.hypot(e, t)),
                    a =
                      (t = s * Math.cos(r),
                        e = s * Math.sin(r),
                        l = P(1 - 5 * T(V < 0 ? -V : V, J < 0 ? -J : J)),
                        m || (V += Et * l * C, J += Ut * l * C),
                        Et = q(Et, 0, G ? 8 : 4),
                        Ut = q(Ut, 0, G ? 8 : 4),
                        Nt = q(Nt, G ? (t || e ? G ? 7 : 4 : 0) * l : 0, G ? .1 < l ? 10 : t || e ? 5 : 7 : 1),
                        Math.sin(l = K ? mt * F : Math.PI) * Nt * C),
                    z =
                      (V -= t * (l = Math.cos(l) * Nt * C) - e * a,
                        J -= t * a + e * l,
                        (l = (a = 1 === k[m].H && k[m].l || I).inverse()).m41 = 0,
                        l.m42 = 0,
                        l.m43 = 0,
                        { x: V, z: J } = l.transformPoint({ x: V, z: J, w: 0 }),
                        b.x += V,
                        b.z += J,
                        m !== Wt
                        && (Wt = m, { x: l, y: z, z: n } = a.inverse().transformPoint(d), b.x = l, b.y = z, b.z = n),
                        l = d.x,
                        d.z),
                    { x: n, y: a, z: o } = a.transformPoint(b);
                  d.x = n,
                    d.y = a,
                    d.z = o,
                    m && (Et = (n - l) / C, Ut = (o - z) / C),
                    (t || e) && (ct = 90 - r / F),
                    it = pt(it, ct, 8 * C),
                    ht += (s - ht) * P(10 * C),
                    Kt = .03 < D(Kt - a) ? a : q(Kt, a, 2),
                    Gt = dt(Gt, n, .5, C),
                    x = dt(x, a, 2, C),
                    y = dt(y, o, .5, C),
                    K
                      ? (u = q(u, n, 666 * ut + 18), g = q(g, Kt + 1.5, 666 * ut + 18), ft = q(ft, o, 666 * ut + 18))
                      : (u = dt(u, Gt, 1, 2 * C),
                        g = dt(g, x + 13 + 15 * ut, 4, 2 * C),
                        1 < ((l = (ft = dt(ft, y + -18, 1, 2 * C)) - y) < 0 ? -l : l)
                        && (mt = 270 + Math.atan2(l, z = u - Gt) / F,
                          v = 90 - Math.atan2(Math.hypot(l, z), g - x) / F)),
                    v = T(v < 87 ? v : 87, -87),
                    mt = zt(mt);
                })(),
                jt(),
                (d.x < -25 || d.z < 109 ? -25 : -9) > d.y && Bt(),
                1 === m && (M[9].j = d.x < -15 && d.z < 0 ? 1 : 0),
                p[5] = 0);
            var a = U
              ? I.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + P(hC.clientWidth / 1e3))
              : I.rotate(-v, -mt, -0).invertSelf().translateSelf(-u, -g, -ft);
            0 < C
            && (c(),
              _.b6o(36160, l),
              _.v5y(0, 0, 128, 128),
              _.c4s(16640),
              _.cbf(!0, !1, !0, !1),
              _.uae(c("b"), !1, It(I.rotate(0, 180).invertSelf().translateSelf(-d.x, -d.y, .3 - d.z))),
              Qt(c("c"), 0, 41),
              _.c4s(256),
              _.cbf(!1, !0, !0, !1),
              _.uae(c("b"), !1, It(I.translate(-d.x, -d.y, -d.z - .3))),
              Qt(c("c"), 0, 41),
              _.f1s()),
              n(),
              _.b6o(36160, r),
              _.v5y(0, 0, 2048, 2048),
              h[0](Tt(a, .3, 55, 10)),
              h[1](Tt(a, 55, 177, 11)),
              i(),
              _.b6o(36160, null),
              _.v5y(0, 0, _.drawingBufferWidth, _.drawingBufferHeight),
              _.cbf(!0, !0, !0, !0),
              _.c4s(16640),
              h[0](),
              h[1](),
              _.uae(i("a"), !1, At(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              _.uae(i("b"), !1, It(a)),
              _.ubu(i("k"), u, g, ft),
              Qt(i("c"), !K),
              o(),
              _.ubu(o("j"), _.drawingBufferWidth, _.drawingBufferHeight, $),
              U ? _.ubu(o("k"), 0, 0, 0) : _.ubu(o("k"), u, g, ft),
              _.uae(o("b"), !1, It(a.inverse())),
              _.d97(4, 3, 5123, 0),
              _.b6o(36160, l),
              _.f1s();
          },
          r = _.c5w(),
          l = _.c5w(),
          t = _.c3z(),
          a = _.c25(),
          s = Dt(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          n = Ht(
            Dt(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          o = Ht(
            Dt("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          c = Ht(
            s,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          i = Ht(
            s,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          h = (c(),
            _.uae(c("a"), !1, At(1.4, .59, 1e-4, 1)),
            o(),
            _.ubh(o("q"), 3),
            i(),
            _.ubh(i("q"), 3),
            A(2, t => {
              let a = new Float32Array(16), e = _.c25(), l = i(t ? "j" : "i");
              return _.ubh(i(t ? "h" : "g"), t),
                _.b6o(36160, r),
                _.d45([0]),
                _.r9l(0),
                _.a4v(33984 + t),
                _.b9j(3553, e),
                _.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                _.t2z(3553, 10241, 9729),
                _.t2z(3553, 10240, 9729),
                _.t2z(3553, 34893, 515),
                _.t2z(3553, 34892, 34894),
                _.t2z(3553, 10243, 33071),
                _.t2z(3553, 10242, 33071),
                t => {
                  t
                    ? (It(t, a), _.uae(n("b"), !1, a), _.fas(36160, 36096, 3553, e, 0), _.c4s(256), Qt(n("c"), !K))
                    : _.uae(l, !1, a);
                };
            }));
        _.e8z(2929),
          _.e8z(2884),
          _.c70(1),
          _.c7a(1029),
          _.d4n(515),
          _.c5t(0, 0, 0, 1),
          _.b6o(36160, l),
          _.bb1(36161, t),
          _.r4v(36161, 33189, 128, 128),
          _.f8w(36160, 36096, 36161, t),
          _.a4v(33987),
          _.b9j(3553, a),
          _.fas(36160, 36064, 3553, a, 0),
          _.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          _.a4v(33987),
          _.b9j(3553, _.c25()),
          _.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, f),
          _.gbn(3553),
          _.t2z(3553, 10241, 9987),
          _.t2z(3553, 10240, 9729),
          k[37].g = () => I.translate(d.x, Kt, d.z).rotateSelf(0, it),
          [38, 39].map((t, a) => {
            k[t].g = () =>
              k[37].l.translate(0, ht * P(.45 * Math.sin(9.1 * Y + Math.PI * (a - 1) - Math.PI / 2))).rotateSelf(
                ht * Math.sin(9.1 * Y + Math.PI * (a - 1)) * .25 / F,
                0,
              );
          });
        try {
          let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
          M.map((t, a) => t.h = t.i = t.j = a ? 0 | e[a] : 0), gt.map((t, a) => t.j = 0 | l[a]), z = t, Y = a, rt = r;
        } catch {}
        lt = z < 0 ? 0 : 1 < z ? 1 : z,
          jt(),
          Bt(),
          u = Gt = d.x,
          g = (x = d.y) + 13,
          ft = (y = d.z) + -18,
          requestAnimationFrame(e),
          (() => {
            let x = !0,
              y = () => {
                U || !x ? Jt.disconnect() : Jt.connect(Vt.destination), b4.innerHTML = "Music: " + x;
              },
              r = (t = !1) => {
                if (U !== t) {
                  U = t;
                  try {
                    t ? document.exitPointerLock() : Jt.start();
                  } catch {}
                  K = 0, document.body.className = t ? "l m" : "l", y(), kt();
                }
              },
              t,
              s,
              n,
              o,
              c,
              i,
              h,
              f,
              m,
              u,
              g,
              M;
            b3.onclick = () => {
              confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
            },
              b1.onclick = () => r(),
              b2.onclick = () => {
                r(), K = 1;
              },
              b4.onclick = () => {
                x = !x, y();
              },
              b5.onclick = () => r(!0),
              onclick = t => {
                M = 1, U || (t.target === hC && (p[5] = !0), K && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((l = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && U)
                  ? U && !M || r(!U)
                  : 5
                      === (e = {
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
                  ? l && (p[e] = 1)
                  : p[e] = l);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                K && (t || a) && (mt += .1 * t, v += .1 * a);
              },
              oncontextmenu = () => !1,
              hC.ontouchstart = e => {
                if (!U) {
                  for (let { pageX: t, pageY: a, identifier: x } of e.changedTouches) {
                    K && t > hC.clientWidth / 2
                      ? void 0 === f && (f = x, i = t, h = a, m = 0, u = mt, g = v)
                      : void 0 === o && (o = x, s = t, n = a, c = 0);
                  }
                  t = $;
                }
              },
              hC.ontouchmove = ({ changedTouches: a }) => {
                if (!U) {
                  for (let { pageX: t, pageY: x, identifier: y } of a) {
                    var e, l;
                    f === y && (mt = u + (t - i) / 3, v = g + (x - h) / 3, m = 1),
                      o === y
                      && (.4 < (l = (e = (y = (s - t) / 20) < 0 ? -1 : 1) * y)
                        && (c = 1, st = e * l ** 1.5, 1.5 < l && (s = t + 20 * e)),
                        .4 < (l = (e = (y = (n - x) / 20) < 0 ? -1 : 1) * y)
                        && (c = 1, nt = e * l ** 1.5, 1.5 < l && (n = x + 20 * e)));
                  }
                }
              },
              hC.ontouchend = a => {
                let e;
                a.preventDefault();
                for (let t of a.changedTouches) {
                  t.identifier === f
                    ? (f = void 0, m || (e = 1), m = 0)
                    : t.identifier === o
                    ? (o = void 0, nt = st = 0, c || (e = 1), c = 0)
                    : e = 1;
                }
                e && a.target === hC && t && .06 < (a = $ - t) && a < .7 && (p[5] = !0);
              },
              (document.onvisibilitychange = onblur = onresize = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  p.length = st = nt = 0,
                  o = f = void 0,
                  document.hidden && r(!0);
              })(),
              r(!0);
          })();
      }
    },
    f = new Image();
  f.onload = f.onerror = e,
    f.src = a,
    (t => {
      let Q = 0,
        B = new Int32Array(10725888),
        e = () => {
          let l = Vt.createBuffer(2, 5362944, 44100);
          for (let e = 0; e < 2; e++) {
            for (let t = e, a = l.getChannelData(e); t < 10725888; t += 2) {
              a[t >> 1] = B[t] / 65536;
            }
          }
          Jt.buffer = l, Jt.loop = !0, Ot(t);
        },
        l = () => {
          let f = 0,
            M,
            [v, p, d, b, I, A, P, S, x, y, Y, , C, z, j, k, t, w, a, F, T] =
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
          y = y * y * 4;
          for (let g of [5513, 4562, 3891]) {
            let r = 0,
              s = 0,
              m = [],
              u,
              n,
              o,
              c = new Int32Array(768 * g),
              i = Math.PI * 2 ** (t - 8) / g,
              h = a * g & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * Q + l];
                t < 32;
                ++t
              ) {
                let e = (32 * l + t) * g;
                for (var D, H = 0; H < 4; ++H) {
                  if (u = 0, a && (u = T[a - 1].charCodeAt(t + 32 * H) - 40, u += 0 < u ? 106 : 0), u) {
                    if (!(D = m[u])) {
                      let l = 0,
                        r = 0,
                        s,
                        n,
                        o = (D = u, g),
                        c = u,
                        i = Q < 2
                          ? t => t % 1 * 2 - 1
                          : Rt,
                        h = Q < 2
                          ? Q < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : Rt,
                        f = new Int32Array(S + x + y);
                      for (let a = 0, e = 0; S + x + y > a; ++a, ++e) {
                        let t = 1;
                        S > a ? t = a / S : S + x > a || (t = (1 - (t = (a - S - x) / y)) * 3 ** (-Y / 16 * t)),
                          e < 0
                          || (e -= 4 * o,
                            n = .00396 * 2 ** ((c + p - 256) / 12),
                            s = .00396 * 2 ** ((c + I - 256) / 12) * (1 + (Q ? 0 : .0072))),
                          f[a] = 80
                              * (i(l += n * t ** (d / 32)) * v + h(r += s * t ** (A / 32)) * b
                                + (P ? (2 * Math.random() - 1) * P : 0))
                              * t | 0;
                      }
                      D = m[D] = f;
                    }
                    for (let t = 0, a = 2 * e; D.length > t; ++t, a += 2) c[a] += D[t];
                  }
                }
                for (let t, a = 0; g > a; ++a) {
                  H = 0,
                    ((t = c[D = 2 * (e + a)]) || o)
                    && (n = .00308 * C,
                      1 !== Q && 4 !== Q || (n *= Math.sin(2 ** (t - 9) / g * D * Math.PI * 2) * F / 512 + .5),
                      n = 1.5 * Math.sin(n),
                      r += n * s,
                      M = (1 - z / 255) * (t - s) - r,
                      s += n * M,
                      t = 4 === Q ? s : 3 === Q ? M : r,
                      Q || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= j / 32,
                      o = 1e-5 < t * t,
                      M = Math.sin(i * D) * k / 512 + .5,
                      H = t * (1 - M),
                      t *= M),
                    D < h || (H += c[1 + D - h] * w / 255, t += c[D - h] * w / 255),
                    B[f + D] += c[D] = H,
                    ++D,
                    B[f + D] += c[D] = t;
                }
              }
            }
            f += c.length;
          }
          Ot(++Q < 5 ? l : e);
        };
      Ot(l);
    })(() => {
      let n = (t, a, e) =>
          I.translate(t + Math.sin(Y + 2) / 5, a + Math.sin(.8 * Y) / 3, e).rotateSelf(
            2 * Math.sin(Y),
            Math.sin(.7 * Y),
            Math.sin(.9 * Y),
          ),
        o,
        c = (Ot(() => {
          let a = 0,
            l = [],
            s = [],
            n = [],
            o = [],
            c = new Map(),
            i = new Int32Array(8),
            r = t => {
              let { x: a, y: e, z: l } = h[t], r = (m[0] = a, m[1] = e, m[2] = l, c.get(t = "" + (h.D ? f : i)));
              return void 0 !== r
                ? (a = 3 * r, o[a] = (o[a++] + i[5]) / 2, o[a] = (o[a++] + i[6]) / 2, o[a] = (o[a] + i[7]) / 2)
                : (c.set(t, r = c.size), s.push(a, e, l, m[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
                r;
            },
            h,
            f = new Int32Array(i.buffer, 0, 5),
            m = new Float32Array(i.buffer);
          for (let t of k) {
            for (h of (m[3] = 40 === t.F ? -13 : t.H && t.F, t.s)) {
              let { x: t, y: a, z: e } = wt(h);
              i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * a, i[7] = 32767 * e;
              for (let t = 2, a = r(0), e = r(1); h.length > t; ++t) l.push(a, e, e = r(t));
            }
            t.s = null, t.v = a, t.G = a = l.length;
          }
          _.b11(34962, _.c1b()),
            _.b2v(34962, new Float32Array(s), 35044),
            _.v7s(0, 4, 5126, !1, 0, 0),
            _.b11(34962, _.c1b()),
            _.b2v(34962, new Int16Array(o), 35044),
            _.v7s(1, 3, 5122, !0, 0, 0),
            _.b11(34962, _.c1b()),
            _.b2v(34962, new Uint32Array(n), 35044),
            _.v7s(2, 4, 5121, !0, 0, 0),
            _.b11(34963, _.c1b()),
            _.b2v(34963, new Uint16Array(l), 35044),
            _.e3x(0),
            _.e3x(1),
            _.e3x(2),
            Ot(e);
        }),
          (() => {
            let a = A(
                11,
                t => I.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
              ),
              e = St(18);
            return A(10, t => s(Pt(e, a[t]).reverse(), Pt(e, a[t + 1]), 1)).flat();
          })()),
        i = R(
          O(
            H(Q(20, 1, 1.15, 1), I.translate(0, -3).scale(3.5, 1, 3.5), E(.7, .4, .25, .7)),
            H(Q(20, 1, 1.3, 1), I.translate(0, -2.5).scale(2.6, 1, 3), E(.7, .4, .25, .2)),
            H(Q(), I.translate(4, -1.2).scale3d(2), E(.7, .4, .25, .3)),
          ),
        ),
        h = R(
          O(
            H(Q(), I.translate(0, -8).scale(6, 15, 2.2)),
            H(Q(), I.translate(0, -14.1).scale(4, 13, 4)),
            H(Q(20, 1), I.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
          ),
        );
      L(() => {
        W([yt.slice(1)], I.translate(-2).scale3d(3).rotate(90, 0));
      }, 0),
        L(() => {
          let t = (a, e, l) =>
              L(t => {
                t.g = () => I.translate(r() * Math.sin(3 * a + Y * a) * e),
                  yt.map(({ x: t, z: a }) => {
                    W(Q(11, 1), I.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), E(.5, .3, .7, .6)),
                      W(Q(), I.translate(4 * t, 7, l + 4 * a).scale(1, .3), E(.5, .5, .5, .3));
                  }),
                  W(R(O(
                    H(Q(), I.translate(0, 0, l).scale(5, 1, 5), E(.8, .8, .8, .3)),
                    ...[-1, 1].map(t =>
                      H(Q(), I.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), E(.8, .8, .8, .3))
                    ),
                  ))),
                  W(Q(), I.translate(0, -3, l).scale(8, 2, 8), E(.4, .4, .4, .3));
              }),
            r = () => {
              let t = M[2].i, a = 1 - M[4].i;
              return t < a ? t : a;
            },
            l = (L(t => {
              t.g = () => n(-12, 4.2, 40 * lt - 66), W(i), X(I.translate(0, -3, 4));
            }),
              A(7, t => H(Q(6, 1), I.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), E(.3, .3, .38))).flat()),
            a = (N(I.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              N(
                I.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...St(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              W(Q(), I.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), E(.8, .8, .8, .2)),
              yt.map(({ x: t, z: a }) => W(Q(6), I.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), E(.6, .3, .3, .4))),
              [-23, 22].map(t => W(Q(), I.translate(0, 0, t).scale(3, 1, 8), E(.9, .9, .9, .2))),
              [-15, 15].map((a, e) => {
                W(Q(), I.translate(0, 6.3, a).scale(4, .3, 1), E(.3, .3, .3, .4)),
                  W(Q(), I.translate(0, 1, a).scale(3, .2, .35), E(.5, .5, .5, .3)),
                  L(t => {
                    t.g = () => I.translate(0, 4.7 * -M[e + 1].h, a), W(l);
                  });
              }),
              A(5, a =>
                A(2, t =>
                  W(
                    c,
                    I.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    E(1, 1, .8, .2),
                  ))),
              W(Q(), I.translate(3, 1.5, -20).scale(.5, 2, 5), E(.7, .7, .7, .2)),
              W(Q(), I.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), E(.75, .75, .75, .2)),
              W(Q(5), I.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), E(.6, .3, .3, .4)),
              X(I.translate(-5.4, 1.5, -19).rotate(0, -90)),
              W(
                Q(),
                I.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5),
                E(.8, .2, .2, .5),
              ),
              W(R(
                O(
                  B(
                    H(Q(6, 0, 0, .3), I.translate(8, -3, -4).scale(13, 1, 13), E(.7, .7, .7, .2)),
                    H(Q(6), I.translate(0, -8).scale(9, 8, 8), E(.4, .2, .5, .5)),
                    H(Q(6, 0, 0, .3), I.translate(0, -.92).scale(13, 2, 13), E(.8, .8, .8, .2)),
                  ),
                  H(Q(5), I.scale(5, 30, 5), E(.4, .2, .6, .5)),
                  H(Q(5, 0, 1.5), I.translate(0, 1).scale(4.5, .3, 4.5), E(.7, .5, .9, .2)),
                  H(Q(), I.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), E(.5, .5, .5, .5)),
                  H(Q(6), I.translate(15, -1.5, 4).scale(3.5, 1, 3.5), E(.5, .5, .5, .5)),
                ),
              )),
              L(t => {
                t.g = () =>
                  I.translate(
                    0,
                    .01 < M[3].h ? (5 * Math.cos(1.5 * Y) + 2) * M[3].i * (1 - M[2].h) + -15 * (1 - M[3].h) : -500,
                    0,
                  ),
                  X(I.translate(0, 1.2)),
                  W(Q(5), I.translate(0, -.2).scale(5, 1, 5), E(.6, .65, .7, .3));
              }),
              X(I.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              L(t => {
                t.g = () => I.translate(r() * Math.sin(Y / 1.5 + 2) * 12),
                  W(
                    R(O(
                      B(
                        H(Q(), I.scale(1.5, 1, 5), E(.9, .9, .9, .2)),
                        H(Q(6), I.scale(4, 1, 5), E(.9, .9, .9, .2)),
                        H(Q(), I.translate(0, -2).scale(2, 3.2, 1.9), E(.3, .8, .5, .5)),
                        H(Q(16, 1, 0, 4), I.scale(1, 1, 1.5).rotate(0, 90), E(.9, .9, .9, .2)),
                      ),
                      H(Q(), I.scale(1.3, 10, 1.3), E(.2, .7, .4, .6)),
                    )),
                    I.translate(0, 0, 45),
                  ),
                  N(I.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              L(t => {
                t.g = () => I.translate(9.8 * (1 - r())),
                  W(Q(3), I.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), E(.3, .6, .6, .2)),
                  W(Q(8), I.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), E(.8, .8, .8, .2)),
                  W(Q(), I.translate(-23, -3, 55).scale(5.2, 1.7, 3), E(.5, .5, .5, .3)),
                  W(Q(), I.translate(-23, -2.2, 62).scale(3, 1, 4), E(.5, .5, .5, .3)),
                  X(I.translate(-23, -.5, 66.5));
              }),
              W(Q(), I.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), E(.9, .9, .9, .2)),
              L(t => {
                t.g = () => I.translate(0, P(1 - 5 * r()) * S(M[4].h, M[5].h) * Math.sin(1.35 * Y) * 4),
                  W(Q(), I.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), E(.7, .7, .7, .2)),
                  W(
                    R(O(H(Q(), I.scale(3, 1.4, 2.7)), H(Q(), I.scale(1.2, 8, 1.2)))),
                    I.translate(-33, -3, 55),
                    E(.7, .7, .7, .2),
                  );
              }),
              L(t => {
                t.g = () => I.translate(0, 0, P(1 - 5 * r()) * S(M[4].h, M[5].h) * Math.sin(.9 * Y) * 8),
                  W(R(
                    O(
                      H(Q(), I.translate(-27, -3, 55).scale(3, 1.4, 2.7), E(.9, .9, .9, .2)),
                      H(Q(), I.translate(-27, -3, 55).scale(1, 3), E(.9, .9, .9, .2)),
                    ),
                  )),
                  W(Q(), I.translate(-39, -3, 55).scale(3, 1.4, 2.7), E(.9, .9, .9, .2));
              }),
              L(t => {
                t.g = () => I.translate(0, -6.5 * M[4].i),
                  W(
                    Q(6),
                    I.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                    E(.7, .7, .7, .4),
                  );
              }),
              [...H(
                R(B(
                  H(Q(), I.translate(0, -3).scale(11, 1.4, 3), E(.9, .9, .9, .2)),
                  O(
                    H(Q(6), I.rotate(0, 0, 90).scale(6, 8, 6), E(.3, .6, .6, .3)),
                    H(Q(4, 0, .01), I.translate(0, 6).scale(12, 2, .75).rotate(0, 45), E(.3, .6, .6, .3)),
                    H(Q(6), I.rotate(0, 0, 90).scale(5, 12, 5), E(.3, .6, .6, .3)),
                    ...[5, 0, -5].map(t =>
                      H(Q(5), I.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), E(.3, .6, .6, .3))
                    ),
                  ),
                )),
                I,
              )]),
            e =
              (W(a, I.translate(-53, 0, 55)),
                W(Q(6), I.translate(-61.3, -2.4, 49).scale(3, 1, 5), E(.4, .6, .6, .3)),
                W(Q(7), I.translate(-57, -2.6, 46).scale(4, 1, 4), E(.8, .8, .8, .3)),
                X(I.translate(-55, -1.1, 46).rotate(0, 90)),
                L(t => {
                  t.g = () => I.translate(-75, (1 - M[5].i) * (1 - M[6].h) * 3, 55).rotate(180 * (1 - M[5].i) + et, 0),
                    W(a);
                }, 2),
                W(Q(), I.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), E(.7, .7, .7, .2)),
                W(Q(3, 0, -.5), I.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), E(.8, .8, .8, .2)),
                W(
                  R(O(
                    B(
                      H(Q(), I.translate(-100, -2.5, 55).scale(8, 1, 8), E(.8, .8, .8, .2)),
                      H(Q(), I.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), E(.8, .8, .8, .2)),
                      H(Q(), I.translate(-100, -2.6, 70).scale(3, 1.1, 7), E(.8, .8, .8, .2)),
                      H(Q(), I.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), E(.8, .8, .8, .2)),
                      H(Q(6), I.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), E(.6, .6, .6, .3)),
                      H(Q(), I.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), E(.8, .8, .8, .2)),
                      H(Q(), I.translate(-100, .42, 92).scale(3, 1.1, 4.1), E(.8, .8, .8, .2)),
                    ),
                    H(Q(8), I.translate(-100, -1, 55).scale(7, .9, 7), E(.3, .3, .3, .4)),
                    H(Q(8), I.translate(-100, -2, 55).scale(4, .3, 4), E(.4, .4, .4, .5)),
                    H(Q(8), I.translate(-100, -3, 55).scale(.6, 1, .6), E(.4, .4, .4, .5)),
                  )),
                  I,
                ),
                N(I.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
                N(I.translate(-89, .2, 80), [0, 0, 6]),
                W(R(
                  O(
                    H(Q(), I.translate(-100, 1, 63).scale(7.5, 4), E(.5, .5, .5, .4)),
                    H(Q(), I.translate(-100, 0, 70).scale(2, 2, 10), E(.5, .5, .5, .4)),
                    H(Q(20, 1), I.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), E(.5, .5, .5, .4)),
                  ),
                )),
                L(t => {
                  t.g = () => I.translate(-99.7, 5.3 * -M[6].h - 2, 63.5), W(l);
                }),
                yt.map(({ x: a, z: e }) => {
                  W(Q(6), I.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), E(.6, .15, .15, .8)),
                    [4, -.4].map(t =>
                      W(Q(6), I.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), E(.4, .2, .2, .8))
                    );
                }),
                A(7, t => {
                  W(
                    Q((23 * t + 1) % 5 + 5, 0, .55),
                    I.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                      5 + t / 2,
                      1 + t / 6,
                      5 + t / 3,
                    ),
                    E(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                  );
                }),
                W(Q(), I.translate(-87, -9.5, 24).scale(7, 1, 3), E(.4, .5, .6, .4)),
                W(Q(4), I.translate(-86, -9.2, 27).scale(5, 1, 5), E(.5, .6, .7, .3)),
                W(Q(12, 1), I.translate(-86, -9, 31).scale(1.5, 1, 1.5), E(.3, .3, .4, .1)),
                X(I.translate(-86, -7.5, 31)),
                L(t => {
                  t.g = () => I.translate(0, 3.5 * (1 - T(M[6].h, M[7].h)) + S(M[7].i, M[6].i) * Math.sin(Y) * 5),
                    [0, 12, 24].map(t =>
                      W(Q(), I.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), E(.2, .5, .6, .2))
                    );
                }),
                L(t => {
                  t.g = () => {
                    let t = S(M[7].i, M[6].i);
                    return I.translate(0, t * Math.sin(Y + 3) * 6, 6 * Math.sin(.6 * Y + t) * t);
                  },
                    [6, 18].map(t =>
                      W(Q(), I.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), E(.1, .4, .5, .2))
                    );
                }),
                W(
                  R(O(
                    B(
                      H(Q(), I.scale(11, 1, 13), E(.3, .4, .6, .3)),
                      H(Q(5), I.translate(0, 0, -7).scale(2, 1.2, 2), E(.2, .4, .7, .3)),
                      H(Q(5), I.scale(9, 1.2, 9), E(0, .2, .3, .5)),
                    ),
                    H(Q(5), I.scale(5.4, 5, 5.4), E(0, .2, .3, .5)),
                  )),
                  I.translate(-38.9, -11.3, 17),
                ),
                X(I.translate(-38.9, -9.6, 10)),
                L(t => {
                  t.g = () => I.translate(0, -7.3 * M[7].i),
                    W(
                      R(O(
                        B(
                          H(Q(5), I.translate(0, 2).scale(5, 7, 5).skewY(8), E(.2, .4, .5, .5)),
                          H(Q(5), I.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), E(.25, .35, .5, .5)),
                          H(Q(5), I.translate(0, 9).scale(.6, 7, .6).skewY(8), E(.35, .3, .5, .5)),
                        ),
                        H(Q(5), I.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), E(.2, .4, .5, .5)),
                      )),
                      I.translate(-38.9, -11.3, 17),
                    ),
                    N(
                      I.translate(-39.1, -.3, 17).rotate(0, 0, 10),
                      ...St(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.2]),
                    );
                }),
                yt.map(({ x: t, z: a }) => {
                  o = I.translate(9 * t - 38.9, -7.3, 11 * a + 17),
                    W(Q(14, 1), o.scale(1, 4), E(.25, .25, .25, 1)),
                    [1.5, 8].map(t => W(Q(17, 1), o.translate(0, t - 4).scale(1.5, .5, 1.5), E(.6, .6, .6, .3)));
                }),
                W(
                  R(O(
                    B(
                      H(Q(6), I.translate(0, 0, -36).scale(15, 1.2, 15), E(.7, .7, .7, .3)),
                      H(Q(), I.translate(0, 0, -18).scale(4, 1.2, 6), E(.45, .4, .6, .3)),
                    ),
                    ...A(6, a =>
                      A(6, t =>
                        H(
                          Q(6),
                          I.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                          E(.7, .7, .7, .3),
                        ))).flat(),
                  )),
                  I.translate(-38.9, -11.3, 17),
                ),
                N(I.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
                W(Q(5), I.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), E(.8, .1, .25, .4)),
                X(I.translate(-84, -.5, 85).rotate(0, 45)),
                L(t => {
                  t.g = () => n(-123, 1.4, 55 + -65 * rt), X(I.translate(0, -3, -4).rotate(0, 180)), W(i);
                }),
                N(I.translate(-115, .2, -12), [0, 0, 3.5]),
                R(O(
                  H(Q(), I.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), E(.25, .25, .35, .3)),
                  H(Q(3), I.translate(0, 0, -5.5).scale(3, 2), E(.6, .3, .4, .3)),
                  ...[-1.2, 1.2].map(t => H(Q(), I.translate(t, -.5, 1).scale(.14, .3, 6.5), E(.7, .2, 0, .3))),
                ))),
            s = (L(t => {
              t.g = () => I.translate(0, -2, S(M[10].h, M[11].h) * D(Math.sin(1.1 * Y)) * -8.5 + 10),
                A(2, t => W(e, I.translate(9 * t - 110 + (1 & t), 1.7, -12)));
            }),
              L(t => {
                t.g = () => I.translate(0, -2, S(M[10].h, M[11].h) * D(Math.sin(2.1 * Y)) * -8.5 + 10),
                  A(2, t => W(e, I.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
              }),
              L(t => {
                t.g = () =>
                  I.translate(
                    0,
                    -2,
                    -8.5 * T((1 - M[10].h) * (1 - S(M[10].h, M[11].h)), S(M[10].h, M[11].h) * D(Math.sin(1.5 * Y)))
                      + 10,
                  ), A(3, t => W(e, I.translate(9 * t - 106, 1.7, -12)));
              }),
              W(
                R(O(
                  B(
                    H(Q(), I.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                    H(Q(), I.translate(26.5, -.6, 10).scale(17, 2, .5)),
                  ),
                  ...A(4, t => H(Q(), I.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                  ...A(3, t => H(Q(), I.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
                )),
                I.translate(-123, 0, -12),
                E(.5, .5, .6, .2),
              ),
              W(Q(5), I.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), E(.25, .25, .35, 1)),
              W(Q(), I.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), E(.8, .8, .8, .2)),
              W(Q(6), I.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), E(.6, .5, .7, .2)),
              X(I.translate(-116, -1.4, -18).rotate(0, 180)),
              A(3, t => {
                W(h, I.translate(12 * t - 109, -9, -12), E(.6, .6, .6, .3)),
                  W(h, I.translate(-77, -9, -12 * t - 20).rotate(0, 90), E(.6, .6, .6, .3));
              }),
              W(R(
                O(
                  H(Q(12), I.translate(-77, -13.9, -12).scale(4, 18.2, 4), E(.7, .7, .7, .2)),
                  H(Q(), I.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), E(.4, .5, .6, .2)),
                  H(Q(), I.translate(-77, 0, -14).scale(1.5, 2.2, 2), E(.4, .5, .6, .2)),
                  H(Q(12), I.translate(-77, 2.8, -12).scale(3, 5, 3), E(.4, .5, .6, .2)),
                ),
              )),
              W(Q(), I.translate(-115.5, -17, -12).scale(.5, 15, 2.2), E(.6, .6, .6, .3)),
              W(Q(), I.translate(-77, -17, -50.5).scale(2.2, 15, .5), E(.6, .6, .6, .3)),
              W(Q(), I.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), E(.6, .6, .6, .3)),
              W(R(
                O(
                  H(Q(), I.translate(-93, -5.8, -40).scale(9, 1, 5), E(.8, .8, .8, .1)),
                  H(Q(9), I.translate(-98, -5.8, -40).scale(3, 8, 3), E(.7, .7, .7, .2)),
                ),
              )),
              W(Q(9), I.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), E(.5, .5, .5, .3)),
              X(I.translate(-98, -4.4, -40).rotate(0, 90)),
              N(I.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
              W(R(
                O(
                  B(
                    H(Q(6, 0, 0, .6), I.translate(-100, .7, 105.5).scale(8, 1, 11), E(.7, .7, .7, .2)),
                    H(Q(), I.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), E(.7, .7, .7, .2)),
                    H(Q(), I.translate(-91.2, .7, 107).scale(3, 1, 3.3), E(.7, .7, .7, .2)),
                  ),
                  H(Q(5), I.translate(-100, .7, 113).scale(4, 3, 4), E(.7, .7, .7, .2)),
                ),
              )),
              A(4, a =>
                L(t => {
                  t.g = () => {
                    let t = S(M[8].i, M[12].i);
                    return I.translate(
                      (2 < a ? 2 * (1 - t) + t : 0) - 100,
                      t * Math.sin(1.3 * Y + 1.7 * a) * (3 + a / 3) + .7,
                      115 + (1 & a ? -1 : 1) * (1 - M[8].i) * (1 - M[12].i) * -7
                        + (t < .05 ? .05 : t) * Math.cos(1.3 * Y + 7 * a) * (4 - 2 * (1 - a / 3)),
                    );
                  },
                    W(
                      Q(6),
                      I.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                      E(.5 - a / 8, a / 12 + .5, .7, .3),
                    );
                })),
              L(t => {
                t.g = () => {
                  let t = S(M[8].i, M[12].i);
                  return I.translate(2.5 * (1 - t) - 139.7, -3 * (1 - M[8].h) + t * Math.sin(.8 * Y) * -1 - 1.8, 93.5)
                    .rotateSelf(Math.cos(1.3 * Y) * (3 * t + 3), 0);
                },
                  W(R(
                    O(H(Q(10), I.scale(6, 2, 6), E(.1, .6, .5, .3)), H(Q(10), I.scale(3.3, 6, 3.3), E(.1, .6, .5, .5))),
                  )),
                  o = I.translate(-7.5).rotate(0, 90),
                  W(Q(15, 1), o.scale(3, 2.3, 3), E(.4, .4, .4, .3)),
                  W(Q(10), o.scale(2, 2.5, 2), E(.3, .8, .7, .3)),
                  W(Q(5), o.scale(1, 3), E(.5, .5, .5, .5)),
                  X(o.translate(0, 3.4).rotate(0, 180)),
                  [-1, 1].map(t =>
                    W(
                      c,
                      I.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                      E(1, 1, .8, .2),
                    )
                  ),
                  N(I.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              }),
              [-1, 1].map(a => {
                W(Q(12, 1), I.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), E(.6, .24, .2, .5)),
                  [7.2, 1.5].map(t =>
                    W(Q(15, 1), I.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), E(.5, .24, .2, .4))
                  ),
                  W(c, I.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), E(1, 1, .8)),
                  W(
                    R(O(
                      H(Q(), I.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), E(.5, .5, .5, .4)),
                      H(Q(), I.scale(3, 3, 10), E(.6, .24, .2, .5)),
                      H(Q(28, 1), I.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), E(.6, .24, .2, .5)),
                      H(Q(5), I.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), E(.6, .24, .2, .5)),
                      H(Q(5), I.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), E(.6, .24, .2, .5)),
                    )),
                    I.translate(a - 100, .7, 97),
                  );
              }),
              L(t => {
                t.g = () => I.translate(-100, .6 - 6 * M[12].h, 96.5).scale(.88, 1.2), W(l);
              }),
              [
                ...H(Q(25, 1), I.scale(8, 1, 8), E(.45, .45, .45, .2)),
                ...H(Q(5), I.translate(0, 1).scale(1, .2), E(.3, .3, .3, .2)),
              ]);
          L(t => {
            t.g = () => I.translate(-80, 1, 106).rotate(0, 40 + tt),
              W(R(
                O(
                  H(Q(25, 1), I.scale(8, 1, 8), E(.45, .45, .45, .2)),
                  H(Q(), I.translate(0, 0, -5.5).scale(1.5, 3, 2.5), E(.45, .45, .45, .2)),
                ),
              )),
              W(Q(8), I.translate(0, 2).scale(3, 1.5, 3), E(.7, .7, .7, .1)),
              W(Q(5), I.translate(0, 2).scale(1, 2), E(.3, .3, .3, .2)),
              N(I.translate(0, 3), ...St(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
          }),
            L(t => {
              t.g = () => I.translate(-64, 1, 106).rotate(0, at),
                W(R(
                  O(
                    H(Q(25, 1), I.translate(0, 2).scale(8, 1, 8), E(.35, 0, 0, .3)),
                    H(Q(), I.scale(9, 5, 2), E(.3, 0, 0, .3)),
                  ),
                )),
                W(s),
                [-1, 1].map(t =>
                  W(
                    c,
                    I.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                    E(1, 1, .8),
                  )
                );
            }),
            L(t => {
              t.g = () => I.translate(-48, 1, 106).rotate(0, 180 - at),
                W(R(
                  O(
                    H(Q(25, 1), I.translate(0, 2).scale(8, 1, 8), E(.35, 0, 0, .3)),
                    H(Q(), I.translate(7).scale(9, 5, 2), E(.3, 0, 0, .3)),
                    H(Q(), I.translate(0, 0, 7).scale(2, 5, 9), E(.3, 0, 0, .3)),
                  ),
                )),
                W(s);
            }),
            L(t => {
              t.g = () => I.translate(-48, 1, 90).rotate(0, 270 + at),
                W(R(
                  O(
                    H(Q(25, 1), I.translate(0, 2).scale(8, 1, 8), E(.35, 0, 0, .3)),
                    H(Q(), I.translate(7).scale(9, 5, 2), E(.3, 0, 0, .3)),
                    H(Q(), I.translate(0, 0, -7).scale(2, 5, 9), E(.3, 0, 0, .3)),
                  ),
                )),
                W(s);
            }),
            W(Q(), I.translate(-56, 1, 106).scale(.7, .8, 2.5), E(.7, .7, .7, .2)),
            W(Q(), I.translate(-48, 1, 98).scale(2.5, .8, .7), E(.7, .7, .7, .2)),
            W(Q(), I.translate(-39, .4, 90).scale(2, 1, 2), E(.7, .7, .7, .3)),
            W(Q(), I.translate(-34.2, .4, 90).scale(3, 1, 3), E(.7, .7, .7, .3)),
            X(I.translate(-34, 2.7, 96).rotate(-12, 0)),
            W(Q(5), I.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), E(.2, .5, .5, .6)),
            [E(.1, .55, .45, .2), E(.2, .5, .5, .3), E(.3, .45, .55, .4)].map((a, e) =>
              L(t => {
                t.g = () =>
                  I.translate(
                    0,
                    (1 - M[13].i) * (1 - M[14].i) * (e ? 0 : 3) + S(M[13].i, M[14].i) * Math.sin(1.5 * Y + 1.5 * e) * 4,
                  ),
                  W(Q(), I.translate(-23.5, .5, 90 + 6.8 * e).scale(1 === e ? 2 : 3.3, 1, 3.3), a),
                  2 === e && W(Q(), I.translate(-29.1, .4, 90).scale(2.1, 1, 3), E(.7, .7, .7, .3)),
                  1 === e
                  && W(
                    Q(),
                    I.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1),
                    E(.6, .6, .7, .3),
                  );
              })
            ),
            W(R(
              O(
                H(Q(6, 0, 0, .3), I.translate(0, -.92, 95).scale(14, 2, 14), E(.8, .8, .8, .2)),
                H(Q(5), I.translate(0, 0, 95).scale3d(6), E(.3, .3, .3, .5)),
              ),
            )),
            [8, -6.1].map((a, e) =>
              A(
                3,
                t =>
                  W(
                    h,
                    I.translate(6 * t - 6, a - (1 & t), 111 - .2 * (1 & t) - e),
                    1 & t ? E(.5, .5, .5, .3) : E(.35, .35, .35, .5),
                  ),
              )
            ),
            [-1, 1].map(t => W(c, I.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), E(1, 1, .8))),
            X(I.translate(0, 1.7, 82).rotate(0, 180)),
            W(Q(5), I.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), E(.5, .3, .3, .4)),
            W(R(
              O(
                B(
                  H(Q(), I.translate(0, 16, 110.5).scale(12, 1, 3), E(.5, .3, .3, .4)),
                  H(Q(), I.translate(0, 16, 111).scale(3, 1, 3.8), E(.5, .3, .3, .4)),
                ),
                H(Q(5), I.translate(0, 16, 103.5).scale(5.5, 5, 5.5), E(.5, .3, .3, .4)),
              ),
            )),
            L(t => {
              t.g = () => {
                let t = Math.sin(Y);
                return I.translate(-2 * t).rotate(0, 0, 25 * t);
              },
                W(Q(3), I.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), E(.5, .3, .3, .4)),
                [22, 30].map(t => {
                  W(Q(6), I.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), E(.7, .7, .7, .4)),
                    W(Q(), I.translate(0, 6.2, t + 95).scale(.5, 11, .5), E(.5, .3, .3, .4));
                });
            }),
            W(Q(6), I.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), E(.5, .6, .7, .3)),
            W(Q(), I.translate(0, 16, 129).scale(1.5, 1, 2), E(.5, .6, .7, .3)),
            W(Q(7), I.translate(0, 16.2, 133).scale(5, 1, 5), E(.4, .5, .6, .4)),
            L(t => {
              t.g = () => {
                let t = S(S((M[14].h + M[14].i) / 2, M[13].i), (M[15].h + M[15].i) / 2);
                return I.translate(0, 16 * t, 8.5 * P(2 * t - 1) + 95);
              },
                W(Q(5), I.scale(5, 1.1, 5), E(.5, .3, .3, .4)),
                W(Q(5), I.scale(5.5, .9, 5.5), E(.25, .25, .25, .4)),
                X(I.translate(0, 1.5, -1).rotate(0, 180));
            }),
            N(I.translate(0, 3, 95), ...St(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            N(I.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        L(() => {
          [0, 180].map(t => W(c, I.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), E(1, 1, .8))),
            W(Yt(20), I.translate(0, 1).scale(.5, .5, .5), E(1, .3, .4));
          let a = H(
            R(O(Q(15, 1), H(Q(), I.translate(0, 0, 1).scale(2, 2, .5)))),
            I.rotate(-90, 0).scale(.1, .05, .1),
            E(.3, .3, .3),
          );
          [-1, 1].map(t => W(a, I.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            W(Q(), I.translate(0, .9, .45).scale(.15, .02, .06), E(.3, .3, .3)),
            W(Yt(20), I.scale(.7, .8, .55), E(1, .3, .4));
        }),
        [-1, 1].map(t =>
          L(() => {
            W(Q(10, 1), I.translate(.3 * t, -.8).scale(.2, .7, .24), E(1, .3, .4));
          })
        ),
        L(() => {
          W(Q(6, 1), I.scale(.13, 1.4, .13), E(.3, .3, .5, .1)),
            W(Q(8, 1), I.translate(0, 1).scale(.21, .3, .21), E(1, .5, .2)),
            W(Q(3), I.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), E(.2, .2, .2, .1));
        }, 0),
        L(() => {
          W(Q(6).slice(0, -1), I.scale(.77, 1, .77), E(1, .3, .5));
        }, 0),
        L(() => {
          W(
            Yt(30, 24, (t, a, e) => {
              let l = a / 24, r = t * Math.PI * 2 / 30, s = l ** .6 * Math.PI / 2;
              return t = l * l * Math.sin(t * Math.PI * 14 / 30) / 4,
                23 === a
                  ? { x: e.D = 0, y: -.5, z: 0 }
                  : {
                    x: Math.cos(r) * Math.sin(s),
                    y: Math.cos(l * Math.PI) - l - t,
                    z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
                  };
            }),
            I.scale3d(.7),
            E(1, 1, 1),
          ), [-1, 1].map(t => W(Yt(12), I.translate(.16 * t, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
