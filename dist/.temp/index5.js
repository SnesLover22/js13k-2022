let F,
  M,
  Y,
  H,
  k,
  O,
  e1,
  o,
  Q = 0,
  t1 = 0,
  a1 = 0,
  l1 = 0,
  r1 = 0,
  s1 = 0,
  x = 0,
  e = 0,
  y = 0,
  o1 = 0,
  z = 0,
  c1 = 0,
  n1 = 0,
  i1 = 0,
  w = 0,
  f1 = 0,
  B = 0,
  T = 1,
  P = 180,
  R = .066,
  q = [],
  L = [],
  m1 = [],
  h1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  X = { x: 0, y: 0, z: 0 },
  u1 = { x: 0, y: 0, z: 0 },
  N = e => e < 0 ? -e : e,
  x1 = (e, t) => e < t ? e : t,
  U = (e, t) => t < e ? e : t,
  g1 = (e, t) => N(e) > t ? e : 0,
  E = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  y1 = e => L1(J(e * Z), _(e * Z)) / Z,
  v1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * E(a) || 0,
  W = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  i = (e, t) => (e = E(e), W(e, 1 - e, t)),
  C = (
    e,
    t = P1,
    a = 0,
  ) => (a *= 16,
    t[a++] = e.m11,
    t[a++] = e.m12,
    t[a++] = e.m13,
    t[a++] = e.m14,
    t[a++] = e.m21,
    t[a++] = e.m22,
    t[a++] = e.m23,
    t[a++] = e.m24,
    t[a++] = e.m31,
    t[a++] = e.m32,
    t[a++] = e.m33,
    t[a++] = e.m34,
    t[a++] = e.m41,
    t[a++] = e.m42,
    t[a++] = e.m43,
    t[a] = e.m44,
    t),
  K = (
    e = Q1,
    t = B1,
  ) => (t.m11 = e.m11,
    t.m12 = e.m12,
    t.m13 = e.m13,
    t.m14 = e.m14,
    t.m21 = e.m21,
    t.m22 = e.m22,
    t.m23 = e.m23,
    t.m24 = e.m24,
    t.m31 = e.m31,
    t.m32 = e.m32,
    t.m33 = e.m33,
    t.m34 = e.m34,
    t.m41 = e.m41,
    t.m42 = e.m42,
    t.m43 = e.m43,
    t.m44 = e.m44,
    t),
  f = (e, t, a) => Q1.translate(e, t, a),
  h = (e, t, a) => Q1.rotate(e, t, a),
  u = (e, t, a) => Q1.scale(e, t, a),
  p = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  m = (e, t, a) => (e.D = a, e.A = t, e),
  r = (e, l, t = e.A) =>
    m(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.D,
    ),
  g = (e, t, a) => e.map(e => r(e, t, a)),
  z1 = (a, l = 0) =>
    p(a, e => {
      let t = _(2 * V * e / a);
      return { x: J(2 * V * e / a), y: 0, z: N(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  s = (l, r, s) => l.map((e, t, { length: a }) => m([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.A, s)),
  v = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? z1(e, l) : h1,
    l = r(e, f(0, 1).scale3d(0 < a ? a : 1)),
    e = r(e, f(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...s(e, l, t), l, e]),
  l = (l, r = l, s = (e, t) => (t *= V / r, { x: _(e *= 2 * V / l) * J(t), y: _(t), z: J(e) * J(t) })) => {
    let o = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = m([], 0, 1);
        o.push(e),
          e.push(s(a, t, e)),
          t && e.push(s((a + 1) % l, t, e)),
          r - 1 > t && e.push(s((a + 1) % l, t + 1 % r, e)),
          e.push(s(a, t + 1 % r, e));
      }
    }
    return o;
  },
  d1 = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  p1 = e => {
    let t, a = 0, l = 0, r = 0, s = e.at(-1);
    for (t of e) a += (s.y - t.y) * (s.z + t.z), l += (s.z - t.z) * (s.x + t.x), r += (s.x - t.x) * (s.y + t.y), s = t;
    return t = X1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  n = (l, r) => {
    let s, o, c, n = r.C;
    for (let e = 0; n.length > e; ++e) {
      if ((s = d1(l, n[e]) - l.w) < -8e-5 ? c = r : 8e-5 < s && (o = r), c && o) {
        o = [], c = [], n = r.C, e = r.B;
        let t = n.at(-1), a = d1(l, t) - l.w;
        for (let e of n) {
          s = d1(l, e) - l.w,
            a < 8e-5 && c.push(t),
            -8e-5 < a && o.push(t),
            (8e-5 < a && s < -8e-5 || a < -8e-5 && 8e-5 < s)
            && (a /= s - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              o.push(t),
              c.push(t)),
            t = e,
            a = s;
        }
        return {
          m: 2 < o.length && { C: m(o, n.A, n.D), B: e, s: r },
          l: 2 < c.length && { C: m(c, n.A, n.D), B: e, s: r },
        };
      }
    }
    return { m: o, l: c };
  },
  c = (e, t, a = p1(t.C)) => {
    let l, r, s;
    return e
      ? ({ m: l, l: r } = n(e, t), l || r || e.o.push(t), l && (e.m = c(e.m, l, a)), r && (e.l = c(e.l, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, o: [t], m: 0, l: 0 }),
      e;
  },
  a = (t, r, s) => {
    let o = [],
      c = (e, t) => {
        let { m: a, l } = n(e, t);
        a || l || (0 < s * d1(e, r) ? a = t : l = t), a && (e.m ? c(e.m, a) : o.push(a)), l && e.l && c(e.l, l);
      };
    for (let e of r.o) c(t, e);
    return o;
  },
  w1 = (e, t) => e && (t(e), w1(e.m, t), w1(e.l, t)),
  S1 = e => (w1(e, t => {
    let e = t.l;
    t.l = t.m, t.m = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.o) e.B = !e.B;
  }),
    e),
  M1 = e => e.length ? e.reduce((e, t) => c(e, { C: t, B: 0, s: 0 }), 0) : e,
  d = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = M1(l), t) {
        t = M1(t), w1(l, e => e.o = a(t, e, 1)), w1(t, e => r.push([e, a(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) c(l, e, t);
      }
      return l;
    }),
  b = (e, ...t) => {
    let a = e => {
        let t;
        return e.s && ((t = l.get(e.s)) ? (r.delete(t), e = a(e.s)) : l.set(e.s, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = S1(d(S1(M1(e)), ...t)),
      w1(e, t => {
        for (let e of t.o) r.set(a(e), e.B);
      }),
      Array.from(r, ([{ C: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return m(t ? a.reverse() : a, e.A, e.D);
      });
  },
  G = (e, t, a) => W(e, t, 1 - N1(-a * R)),
  A1 = () => {
    z = i(L[12].g, L[13].g),
      x = W(G(x, 0, 1), y1(x + 60 * R), L[5].g - L[6].i),
      r1 = W(G(r1, 0, 5), y1(r1 + 56 * R), z),
      s1 = W(G(s1, 0, 4), y1(s1 + 48 * R), z),
      o1 = G(o1, L[9].i, .2 + .3 * N(2 * L[9].i - 1)),
      y = G(y, e ? G(y, -9, 1.5) : E(Q / 3), 1),
      T && Q > T && (T = 0, h4.innerHTML = ""),
      L[0].j && .8 < L[0].g && (a1 < 13
        ? (1 / 0 > T && (T = Q + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), L[0].j = 0)
        : e
          || (1 / 0 > T && (T = Q + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            e = 1));
  },
  I1 = () => {
    h3.innerHTML = "Souls: "
      + [
        0,
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
      ][a1 = m1.reduce((e, { j: t }) => e + t, 0)] + " / XIII";
  },
  D1 = () => {
    localStorage.DanteSP22 = JSON.stringify([L.map(({ j: e }) => e), m1.map(({ j: e }) => e), l1, Q, o1]);
  },
  j1 = (e, t, a, l) =>
    new DOMMatrix([a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0]),
  S = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  A = (e, t = new DOMMatrix(), a) => o.o.push(...g(e, t, a)),
  I = (e, t = 1) => {
    let a = o;
    return q.push(t = { u: new DOMMatrix(), H: q.length, G: t, o: [] }), e(o = t), o = a, t;
  },
  F1 = e => (e = e.transformPoint(), X1(X.x - e.x, X.y - e.y, X.z - e.z)),
  D = e => {
    let t = new DOMMatrix(),
      a = new DOMMatrix(),
      l = o,
      r = L.length,
      s = {
        j: 0,
        g: 0,
        i: 0,
        s: l,
        I: t,
        h() {
          K(K(l.u, t).multiplySelf(e), a).rotateSelf(60 * s.g - 30, 0).translateSelf(0, 1),
            s.g = G(s.g, s.j, 4),
            s.i = G(s.i, s.j, 1),
            Y && F1(t) < 3 && (s.g < .3 || .7 < s.g)
            && (s.j = s.j ? 0 : 1, r && 1 / 0 > T && (T = Q + 1, h4.innerHTML = "* click *"), l1 = r, D1()),
            C(a, q1, r + 13),
            q1[16 * r + 223] = 1 - s.g;
        },
      };
    L.push(s),
      A(v(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), S(.4, .5, .5)),
      A(v(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), S(.4, .5, .5)),
      A(v(), e.translate(0, -.4).scale(.5, .1, .5), S(.5, .5, .4));
  },
  j = (f, ...e) => {
    let m = -1,
      h = 0,
      u = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      S = new DOMMatrix(),
      M = {
        j: 0,
        h() {
          if (!M.j) {
            let e, t, a, l, r, s, o, c, n = 1, i = 1 / 0;
            for (let l of I) {
              let { x: e, z: t, w: a } = l;
              t = (e = X1(j - e, F - t)) - a, c ||= e < a, 0 < t && i > t && (i = t, D = l), n = x1(n, e / a);
            }
            c
            || ({ x: e, z: t, w: a } = D,
              l = j - e,
              r = F - t,
              s = X1(l, r),
              o = L1(-r, l),
              p && (u = (U1() - .5) * V / 2, b = E(b / (1 + U1()))),
              o += u,
              m = -_(o),
              h = J(o),
              .1 < s && (s = x1(s, a) / (s || 1), j = l * s + e, F = r * s + t)),
              p = c,
              b = G(b, 6 * (1 - n) + 3, n + 3),
              Y = G(Y, j = G(j, j + m, b), b),
              k = G(k, F = G(F, F + h, b), b),
              g = v1(g, L1(Y - v, k - d) / Z - 180, 1 - N1(-3 * R)),
              F1(K(A.u, S).multiplySelf(f).translateSelf(v = Y, 0, d = k).rotateSelf(0, g, 7 * J(1.7 * Q))) < 1.6
              && (M.j = 1,
                e = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  "Giorgia Meloni<br>fascist",
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
                ][a1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > T && (T = Q + (a1 && a1 < 12 ? 5 : 7), h4.innerHTML = e),
                I1(),
                D1());
          }
          M.j
          && K(q[2].u, S).translateSelf(
            t % 4 * 1.2 - 1.7 + J(Q + t) / 7,
            -2,
            1.7 * (t / 4 | 0) - 5.5 + N(t % 4 - 2) + _(Q / 1.5 + t) / 6,
          ), C(S, q1, t);
        },
      },
      A = o,
      t = m1.length,
      I = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      D = I[0],
      { x: j, z: F } = D,
      Y = j,
      k = F;
    m1.push(M);
  },
  Y1 = (e, t = 35633) => (t = $.c6x(t), $.s3c(t, e), $.c6a(t), t),
  k1 = (e, t) => {
    let a = {}, l = $.c1h();
    return $.abz(l, e), $.abz(l, Y1(t, 35632)), $.l8l(l), e => e ? a[e] || (a[e] = $.gan(l, e)) : $.u7y(l);
  },
  T1 = (e, t, a) => {
    let l;
    M
      ? (l = h(0, 40 * J(t1) - 70),
        C(l, R1, 37),
        C(l, R1, 38),
        C(l, R1, 39),
        $.uae(e, !1, R1),
        $.d97(4, q[39].F - q[37].v, 5123, 2 * q[37].v))
      : ($.uae(e, !1, R1),
        $.d97(4, (t ? q[39].F : q[37].v) - 3, 5123, 6),
        $.uae(e, !1, q1),
        $.das(4, q[a].F - q[a].v, 5123, 2 * q[a].v, m1.length),
        $.das(4, q[40].F - q[40].v, 5123, 2 * q[40].v, L.length));
  },
  C1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  O1 = e => J(e * V * 2),
  H1 = new AudioContext(),
  Q1 = new DOMMatrix(),
  B1 = new DOMMatrix(),
  P1 = new Float32Array(16),
  R1 = new Float32Array(624),
  q1 = new Float32Array(624),
  { PI: V, atan2: L1, sin: J, cos: _, hypot: X1, exp: N1, random: U1 } = Math,
  Z = V / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  E1 = H1.createBufferSource(),
  $ = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in $) $[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = $[e];
C1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let u = [new Float32Array(16), new Float32Array(16)],
          l = e => {
            if (
              $.f1s(),
                requestAnimationFrame(l),
                t1 += t = (e - (F || e)) / 1e3,
                Q += R = M ? 0 : x1(.066, t),
                F = e,
                0 < R
            ) {
              k(), A1();
              for (let e of q) e.G && (e.h && e.h(K(Q1, e.u)), C(e.u, R1, e.H - 1));
              for (let e of L) e.h();
              for (let e of m1) e.h();
              s(), $.b6o(36160, f), $.v5y(0, 0, 128, 128), $.c4s(16640), $.cbf(!0, !1, !0, !1);
              var { x: t, y: e, z: a } = X;
              $.uae(s("b"), !1, C(K().rotateSelf(0, 180).invertSelf().translateSelf(-t, -e, .3 - a))),
                T1(s("c"), 0, 41),
                $.c4s(256),
                $.cbf(!1, !0, !0, !1),
                $.uae(s("b"), !1, C(K().translateSelf(-t, -e, -a - .3))),
                T1(s("c"), 0, 41),
                $.f1s();
            }
            Y = 0,
              K(Q1, g),
              M
                ? g.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
                : g.rotateSelf(-B, -P).invertSelf().translateSelf(-i1, -w, -f1),
              v(),
              $.b6o(36160, n),
              $.v5y(0, 0, 2048, 2048),
              c[0](54.7 * 1.1),
              c[1](126 * 1.1),
              o(),
              $.b6o(36160, null),
              $.v5y(0, 0, $.drawingBufferWidth, $.drawingBufferHeight),
              $.cbf(!0, !0, !0, !0),
              $.c4s(16640),
              $.uae(o("a"), !1, C(O)),
              $.uae(o("b"), !1, C(g)),
              $.uae(o("i"), !1, u[0]),
              $.uae(o("j"), !1, u[1]),
              $.ubu(o("k"), i1, w, f1),
              T1(o("c"), !H, 42),
              r(),
              $.ubu(r("j"), $.drawingBufferWidth, $.drawingBufferHeight, t1),
              $.ubu(r("k"), i1, w, f1),
              $.uae(r("b"), !1, C(K(g).invertSelf())),
              $.d97(4, 3, 5123, 0),
              $.b6o(36160, f),
              $.f1s();
          },
          g = new DOMMatrix(),
          a = new DOMMatrix(),
          e = m,
          t = Y1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          v = k1(
            Y1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          r = k1(
            Y1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          s = k1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          o = k1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          d = p(8, () => ({})),
          c = p(2, e => {
            let t = $.c25();
            return $.a4v(33984 + e),
              $.b9j(3553, t),
              $.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              $.t2z(3553, 10241, 9729),
              $.t2z(3553, 10240, 9729),
              $.t2z(3553, 34893, 515),
              $.t2z(3553, 34892, 34894),
              $.t2z(3553, 10243, 33071),
              $.t2z(3553, 10242, 33071),
              l => {
                let r = 0, s = 0, o = 0, c = 1 / 0, n = -1 / 0, i = 1 / 0, f = -1 / 0, m = 1 / 0, h = -1 / 0;
                $.fas(36160, 36096, 3553, t, 0),
                  $.c4s(256),
                  K().scale3dSelf(l).multiplySelf(K(e1[e], a).multiplySelf(g).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = d[a],
                    t = (e.x = 4 & a ? 1 : -1, e.y = 2 & a ? 1 : -1, e.z = 1 & a ? 1 : -1, B1.transformPoint(e));
                  r -= e.x = (0 | t.x) / l / t.w, s -= e.y = (0 | t.y) / l / t.w, o -= e.z = (0 | t.z) / l / t.w;
                }
                for (K().rotateSelf(298, 139).translateSelf(r / 8, s / 8, o / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: t, z: a } = B1.transformPoint(d[l]);
                  c = x1(c, e), n = U(n, e), i = x1(i, t), f = U(f, t), m = x1(m, a), h = U(h, a);
                }
                l = 10 + e,
                  m *= m < 0 ? l : 1 / l,
                  h *= 0 < h ? l : 1 / l,
                  $.uae(
                    v("b"),
                    !1,
                    C(
                      K(Q1, a).scaleSelf(2 / (n - c), 2 / (f - i), 2 / (m - h)).translateSelf(
                        (n + c) / -2,
                        (f + i) / -2,
                        (m + h) / 2,
                      ).multiplySelf(B1),
                      u[e],
                    ),
                  ),
                  T1(v("c"), !H, 42);
              };
          }),
          n = $.c5w(),
          i = (t = $.c25(), $.c3z()),
          f = $.c5w();
        s(),
          $.uae(s("a"), !1, C(j1(1e-4, 1, 1.4, .59))),
          o(),
          $.ubh(o("q"), 2),
          $.ubh(o("h"), 1),
          $.ubh(o("g"), 0),
          r(),
          $.ubh(r("q"), 2),
          $.b6o(36160, n),
          $.d45([0]),
          $.r9l(0),
          $.b6o(36160, f),
          $.bb1(36161, i),
          $.r4v(36161, 33189, 128, 128),
          $.f8w(36160, 36096, 36161, i),
          $.a4v(33986),
          $.b9j(3553, t),
          $.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          $.fas(36160, 36064, 3553, t, 0),
          $.b9j(3553, $.c25()),
          $.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          $.t2z(3553, 10241, 9987),
          $.t2z(3553, 10240, 9729),
          $.gbn(3553),
          $.e8z(2929),
          $.e8z(2884),
          $.c70(1),
          $.c7a(1029),
          $.d4n(515),
          $.c5t(0, 0, 0, 1),
          A1(),
          (() => {
            let e,
              n,
              i,
              f,
              m,
              h,
              u,
              g,
              v,
              d,
              p,
              b,
              S,
              l,
              t = !0,
              r = [],
              a = () => {
                b4.innerHTML = "Music: " + t, M || !t ? E1.disconnect() : E1.connect(H1.destination);
              },
              s = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                O = j1(.3, 181, e, 1.732051),
                  e1 = [j1(.3, 55, e, 1.732051), j1(55, 181, e, 1.732051)],
                  f = g = void 0,
                  r.length =
                    Y =
                    l =
                    b =
                    S =
                    c1 =
                    n1 =
                      0;
              },
              o = (e, t = 0) => {
                if (M !== e) {
                  M = e, H = t, s(), I1(), document.body.className = e ? "l m" : "l";
                  try {
                    e
                      ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
                      : (document.body.requestFullscreen().catch(() => 0), E1.start());
                  } catch {}
                  a();
                }
              };
            oncontextmenu = () => !1,
              b1.onclick = () => o(!1),
              b2.onclick = () => o(!1, 1),
              b5.onclick = () => o(!0),
              b4.onclick = () => {
                t = !t, a();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              onclick = e => {
                if (!M && (e.target === hC && (Y = 1), H)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let t;
                e.repeat
                  || (t = {
                    KeyE: 0,
                    Space: 0,
                    Enter: 0,
                    Escape: 1,
                    KeyA: 2,
                    ArrowLeft: 2,
                    KeyD: 3,
                    ArrowRight: 3,
                    KeyW: 4,
                    ArrowUp: 4,
                    KeyS: 5,
                    ArrowDown: 5,
                  }[e.code],
                    (r[t] = !!e.type[5] && !0) && (0 === t && (Y = 1), 1 === t && o(!0)));
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                H && (e || t) && (P += .1 * e, B += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    H && e > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, h = e, u = t, g = a, d = P, p = B)
                      : void 0 === f && (m = 0, n = e, i = t, f = a);
                  }
                  e = t1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c;
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    g === a && (P = d + (e - h) / 2.3, B = p + (t - u) / 2.3, v = 1),
                      f === a
                      && (a = (n - e) / 20,
                        r = N(a),
                        s = (i - t) / 20,
                        o = N(s),
                        (c = .5 < U(r, o)) && (m = 1),
                        b = (c && .2 < r) * E(a, -1),
                        S = (c && .2 < o) * E(s, -1),
                        2 < r && (n = e + 20 * (a < 0 ? -1 : 1)),
                        2 < o && (i = t + 20 * (s < 0 ? -1 : 1)));
                  }
                }
              },
              hC.ontouchend = t => {
                let a;
                document.activeElement === document.body && t.preventDefault();
                for (let e of t.changedTouches) {
                  e.identifier === g
                    ? (g = void 0, v || (a = 1), v = 0)
                    : e.identifier === f
                    ? (f = void 0, S = b = 0, m || (a = 1), m = 0)
                    : a = 1;
                }
                t.target === hC && a && e && .02 < (t = t1 - e) && t < .7 && (Y = 1);
              },
              k = () => {
                c1 = S + (r[4] ? 1 : 0) - (r[5] ? 1 : 0), n1 = b + (r[2] ? 1 : 0) - (r[3] ? 1 : 0);
                let a = navigator.getGamepads()[0];
                if (a) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = a.buttons;
                  a = a.axes,
                    H && (B += R * g1(a[3], .3) * 80, P += R * g1(a[2], .3) * 80),
                    c1 += e(12) - e(13) - g1(a[1], .2),
                    n1 += e(14) - e(15) - g1(a[0], .2),
                    e(9) && o(!0),
                    (a = e(3) || e(2) || e(1) || e(0)) && !l && (Y = 1),
                    l = a;
                }
              },
              document.onvisibilitychange = onblur = onresize = s,
              o(!0);
          })(),
          (() => {
            let c,
              n,
              i,
              f,
              m,
              h,
              u,
              g,
              v,
              d,
              p,
              b,
              S,
              M,
              A,
              I,
              D,
              j = 1,
              F = 2,
              Y = 2,
              k = () => (F ? L[l1].s : q[i && 1 === q[i].G && i || 0]).u,
              T = (e, t, a, l) => W(e, t, j || (E(N(t - e) ** .5 - a) + 1 / 7) * (1 - N1(-1.5 * l * R))),
              C = new Uint8Array(256),
              O = new Uint8Array(65536);
            q[37].h = e => {
              let t,
                a = (r = E(c1, -1), E(n1, -1)),
                l =
                  (t = g1(X1(r, a) ** .5, .1),
                    s = L1(r, a),
                    t && (m = 90 - s / Z),
                    h = v1(h, m, 1 - N1(-8 * R)),
                    u = G(u, t, 10),
                    r = t * N(r) * J(s),
                    a = t * N(a) * _(s),
                    $.r9r(0, 0, 128, 128, 6408, 5121, O),
                    (() => {
                      let s = 0, o = 0, t = 0, a = 0;
                      f = 0, C.fill(0);
                      for (let e = 0; e < 31; ++e) {
                        let l = 0, r = 512 * e;
                        for (let a = 0; a < 128; a++) {
                          let e = r + 4 * a, t = (O[e] + O[1 + e]) / 255;
                          e = O[2 + e],
                            14 < a && a < 114 && (l += t),
                            e && t && (t = C[e] + 1, C[e] = t, s > t || (s = t, o = e, f = 1));
                        }
                        l < 3 && 5 < e && (t += e / 32), 3 < l && (7 < e && (a += e / 15), f = 1);
                      }
                      c = o || n,
                        n = o,
                        Y = G(Y, f ? 6.5 : u1.y < -20 ? 11 : 8, 4),
                        u1.y += a / 41 - (f || Y) * t / 41 * Y * R;
                    })(),
                    (() => {
                      d = v = 0;
                      for (let e = 32; e < 128; e += 2) {
                        let o = 0, c = 0, n = 0, i = 0, f = 512 * e;
                        for (let s = 1 & e; s < 128; s += 2) {
                          let e = f + 4 * s,
                            t = f + 4 * (127 - s),
                            a = O[e] / 255,
                            l = O[1 + t] / 255,
                            r = 1 - N(s / 63.5 - 1);
                          10 < s && s < 118
                          && (o = U(o, U(a * r, a * O[t] / 255)), c = U(c, U(l * r, l * O[1 + e] / 255))),
                            (s < 54 || 74 < s) && .001 < (t = (1 - r) * U(a, l) / 3)
                            && (s < 64 && t > n ? n = t : 64 < s && t > i && (i = t));
                        }
                        N(i - n) > N(v) && (v = i - n), N(c - o) > N(d) && (d = c - o);
                      }
                    })(),
                    E(1 - 5 * U(N(v), N(d))));
              S = G(S, f * l * E(2 * t) * 7, f ? .1 < l ? 10 : 5 + 2 * t : 1),
                p = G(p, 0, f ? 8 : 4),
                b = G(b, 0, f ? 8 : 4),
                c && (l = 0),
                v += R * (l * p + S * (a * _(s = H ? (180 - P) * Z : 0) - r * J(s))),
                d += R * (l * b + S * (a * J(s) + r * _(s))),
                t = k();
              var { x: r, y: s, z: o } = 1 < F
                ? L[l1].I.transformPoint({ x: 0, y: l1 || .9 < y ? 15 : 1, z: -2.4 })
                : (a = t,
                  K(a).invertSelf(),
                  B1.m41 = B1.m42 = B1.m43 = 0,
                  o = B1.transformPoint({ x: v, z: d, w: 0 }),
                  u1.x += o.x,
                  u1.z += o.z,
                  a.transformPoint(u1));
              c && (p = (r - X.x) / R, b = (o - X.z) / R),
                X.x = r,
                X.y = s,
                X.z = o,
                !(F = F && (f && c ? 0 : 1)) && c === i
                || (i = c, l = (t = k()).inverse().transformPoint(X), u1.x = l.x, u1.y = l.y, u1.z = l.z),
                g = G(g, z * (27 < c && c < 32), 2),
                s < (r < -20 || o < 109 ? -25 : -9) && (p = b = S = 0, F = 2),
                1 === c && (L[9].j = r < -15 && o < 0 ? 1 : 0),
                M = W(G(M, s, 2), s, F || 8 * N(M - s)),
                I = T(I, M, 2, 1),
                A = T(A, r, .5, 1),
                D = T(D, o, .5, 1),
                H
                  ? (a = F + (1 - N1(-18 * R)), i1 = W(i1, r, a), w = W(w, M + 1.5, a), f1 = W(f1, o, a), P = y1(P))
                  : (w = T(w, U(I + E((-60 - o) / 8, 0, 20) + 13 + 9 * g, 6), 4, 2),
                    f1 = T(f1, D + -18 + 5 * g, 1, 2 + g),
                    i1 = T(i1, A, 1, 2 + g),
                    t = x1(-6, -N(D - f1)),
                    P = v1(P, 90 - y1(L1(t, s = A - i1) / Z), j + (1 - N1(-10 * R))),
                    B = v1(B, 90 - L1(X1(t, s), w - I) / Z, j + (1 - N1(-10 * R)))),
                B = E(B, -87, 87),
                j = 0,
                e.translateSelf(r, M + .124, o).rotateSelf(0, h);
            },
              [39, 38].map((e, t) =>
                q[e].h = e =>
                  K(q[37].u, e).translateSelf(0, u * E(.45 * J(9.1 * Q - V * t - V / 2))).rotateSelf(
                    u * J(9.1 * Q - V * t) * .25 / Z,
                    0,
                  )
              );
          })(),
          requestAnimationFrame(l);
      }
    },
    m = new Image();
  m.onload = m.onerror = a,
    m.src = t,
    (r => {
      let X = 0,
        s = () => {
          let b = 0,
            e = m => {
              let r,
                h,
                s,
                u,
                o,
                c,
                n = 0,
                i = 0,
                g = [],
                f = new Int32Array(768 * m),
                v = 2 ** (a - 9) / m,
                d = V * 2 ** (l - 8) / m,
                p = R * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, t = +"000001234556112341234556011111111112011111111112000001111112"[12 * X + l];
                  e < 32;
                  ++e
                ) {
                  let a = (32 * l + e) * m;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, t && (u = S[t - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(h = g[u])) {
                        let l,
                          r,
                          s = 0,
                          o = 0,
                          c = h = u,
                          n = X < 2
                            ? e => e % 1 * 2 - 1
                            : O1,
                          i = X < 2
                            ? X < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : O1,
                          f = new Int32Array(k + T + L);
                        for (let t = 0, a = 0; k + T + L > t; ++t, ++a) {
                          let e = 1;
                          k > t ? e = t / k : k + T > t || (e = (1 - (e = (t - k - T) / L)) * 3 ** (-C / 16 * e)),
                            a < 0
                            || (a -= 4 * m,
                              r = .00396 * 2 ** ((c + A - 256) / 12),
                              l = .00396 * 2 ** ((c + j - 256) / 12) * (1 + (X ? 0 : .0072))),
                            f[t] = 80
                                * (n(s += r * e ** (I / 32)) * M + i(o += l * e ** (F / 32)) * D
                                  + (Y ? (2 * U1() - 1) * Y : 0))
                                * e | 0;
                        }
                        h = g[h] = f;
                      }
                      for (let e = 0, t = 2 * a; h.length > e; ++e, t += 2) f[t] += h[e];
                    }
                  }
                  for (let e, t = 0; m > t; ++t) {
                    r = 0,
                      h = 2 * (a + t),
                      ((e = f[h]) || c)
                      && (o = .00308 * O,
                        1 !== X && 4 !== X || (o *= J(v * h * V * 2) * q / 512 + .5),
                        o = 1.5 * J(o),
                        n += o * i,
                        i += o * (s = (1 - H / 255) * (e - i) - n),
                        e = 4 === X ? i : 3 === X ? s : n,
                        X || (e = (e *= 22e-5) < 1 ? -1 < e ? J(e / 4 * V * 2) : -1 : 1, e /= 22e-5),
                        e *= Q / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (s = J(d * h) * B / 512 + .5)),
                        e *= s),
                      p > h || (r += f[1 + h - p] * P / 255, e += f[h - p] * P / 255),
                      N[s = b + h >> 1] += (f[h] = r) / 65536,
                      U[s] += (f[++h] = e) / 65536;
                  }
                }
              }
              b += 768 * m;
            },
            S = [
              [
                "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
                "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
                "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
                "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
                "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
                "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
              ],
              [
                ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
                "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
                ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
                "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
                "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
                "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
              ],
              ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
              ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
              ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
            ][X],
            [M, A, I, D, j, F, Y, k, T, t, C, a, O, H, Q, B, l, P, R, q] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][X],
            L = 4 * t ** 2;
          e(5513), e(4562), e(3891), C1(++X < 5 ? s : r);
        },
        e = H1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        U = e.getChannelData(1);
      E1.buffer = e, E1.loop = !0, C1(s);
    })(() => {
      C1(() => {
        let s,
          t = 0,
          l = [],
          o = [],
          c = [],
          n = [],
          r = e => {
            let { x: t, y: a, z: l } = s[e], r = (h[0] = t, h[1] = a, h[2] = l, f.get(e = "" + (s.D ? m : i)));
            return void 0 !== r
              ? (t = 3 * r, n[t] = (n[t++] + i[5]) / 2, n[t] = (n[t++] + i[6]) / 2, n[t] = (n[t] + i[7]) / 2)
              : (f.set(e, r = f.size), o.push(t, a, l, h[3]), c.push(i[4]), n.push(i[5], i[6], i[7])),
              r;
          },
          i = new Int32Array(8),
          f = new Map(),
          m = new Int32Array(i.buffer, 0, 5),
          h = new Float32Array(i.buffer);
        for (let e of q) {
          for (s of (h[3] = 40 === e.H ? -14 : e.G && e.H, e.o)) {
            let { x: e, y: t, z: a } = p1(s);
            i[4] = 0 | s.A, i[5] = 32767 * e, i[6] = 32767 * t, i[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); s.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.o = null, e.v = t, e.F = t = l.length;
        }
        $.b11(34962, $.c1b()),
          $.b2v(34962, new Float32Array(o), 35044),
          $.v7s(0, 4, 5126, !1, 0, 0),
          $.b11(34962, $.c1b()),
          $.b2v(34962, new Int16Array(n), 35044),
          $.v7s(1, 3, 5122, !0, 0, 0),
          $.b11(34962, $.c1b()),
          $.b2v(34962, new Uint32Array(c), 35044),
          $.v7s(2, 4, 5121, !0, 0, 0),
          $.b11(34963, $.c1b()),
          $.b2v(34963, new Uint16Array(l), 35044),
          $.e3x(0),
          $.e3x(1),
          $.e3x(2),
          C1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.DanteSP22);
          L.map((e, t) => e.g = e.i = e.j = t ? 0 | a[t] : 0),
            m1.map((e, t) => e.j = 0 | l[t]),
            l1 = e,
            o1 = r,
            Q = t,
            R = 0;
        } catch {}
        y = E(l1);
      });
      let t = p(11, e => f(J(e / 10 * V), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        n = p(10, e => s(r(z1(18), t[e]).reverse(), r(z1(18), t[e + 1]), 1)).flat();
      I(() => A([h1.slice(1)], f(-2).scale3d(3).rotate(90, 0)), 0),
        I(() => {
          let e = (t, a, l) =>
              I(e => {
                e.h = e => e.translateSelf(r() * J(3 * t + Q * t) * a),
                  h1.map(({ x: e, z: t }) => {
                    A(v(11, 1), f(4 * e, 4, l + 4 * t).scale(.8, 3, .8), S(.5, .3, .7, .6)),
                      A(v(), f(4 * e, 7, l + 4 * t).scale(1, .3), S(.5, .5, .5, .3));
                  }),
                  A(b(
                    g(v(), f(0, 0, l).scale(5, 1, 5), S(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => g(v(), f(5 * e, .2, l).rotate(-30 * e).scale(4, 1, 2), S(.8, .8, .8, .3))),
                  )),
                  A(v(), f(0, -3, l).scale(8, 2, 8), S(.4, .4, .4, .3));
              }),
            t = (e, t, a, l) =>
              e.translateSelf(t + J(Q + 2) / 5, a + J(.8 * Q) / 3, l).rotateSelf(2 * J(Q), J(.7 * Q), J(.9 * Q)),
            a = e =>
              b(
                g(v(), f(0, -e / 2).scale(6, e - 1, 2.2)),
                g(v(), f(0, -e / 2 - 6).scale(4, e - 3, 4)),
                g(v(32, 1), f(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            r = () => x1(L[2].i, 1 - L[4].i),
            l = b(
              g(v(30, 1, 1.15, 1), f(0, -3).scale(3.5, 1, 3.5), S(.7, .4, .25, .7)),
              g(v(30, 1, 1.3, 1), f(0, -2.5).scale(2.6, 1, 3), S(.7, .4, .25, .2)),
              g(v(), f(4, -1.2).scale3d(2), S(.7, .4, .25, .3)),
            ),
            s = p(7, e => g(v(6, 1), f(4 * (e / 6 - .5), 3).scale(.2, 3, .2), S(.3, .3, .38))).flat(),
            o = (I(e => {
              e.h = e => t(e, -12, 4.2, 40 * y - 66), A(l), D(f(0, -3, 4));
            }),
              D(f(-5.4, 1.5, -19).rotate(0, -90)),
              j(f(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              j(f(0, 2.8), [5, 10, 3], [-5, 10, 3], ...z1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * N(e)])),
              A(v(), f(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), S(.8, .8, .8, .2)),
              h1.map(({ x: e, z: t }) => A(v(6), f(3 * e, 3, 15 * t).scale(.7, 4, .7), S(.6, .3, .3, .4))),
              A(v(), f(0, 0, -23).scale(3, 1, 8), S(.9, .9, .9, .2)),
              A(v(), f(0, 0, 22).scale(3, 1, 8), S(.9, .9, .9, .2)),
              [-15, 15].map((t, a) => {
                A(v(), f(0, 6.3, t).scale(4, .3, 1), S(.3, .3, .3, .4)),
                  A(v(), f(0, 1, t).scale(3, .2, .35), S(.5, .5, .5, .3)),
                  I(e => {
                    e.h = e => e.translateSelf(0, 0, t).scaleSelf(1, E(1.22 - L[a + 1].g), 1), A(s);
                  });
              }),
              p(5, t =>
                p(2, e =>
                  A(
                    n,
                    f(18.5 * (e - .5), 0, 4.8 * t - 9.5).rotate(0, 180 - 180 * e).scale(1.2, 10, 1.2),
                    S(1, 1, .8, .2),
                  ))),
              A(v(), f(3, 1.5, -20).scale(.5, 2, 5), S(.7, .7, .7, .2)),
              A(v(), f(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(.75, .75, .75, .2)),
              A(v(5), f(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(.6, .3, .3, .4)),
              A(v(), h(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), S(.8, .2, .2, .5)),
              A(b(
                d(
                  g(v(6, 0, 0, .3), f(8, -3, -4).scale(13, 1, 13), S(.7, .7, .7, .2)),
                  g(v(6), f(0, -8).scale(9, 8, 8), S(.4, .2, .5, .5)),
                  g(v(6, 0, 0, .3), f(0, -.92).scale(13, 2, 13), S(.8, .8, .8, .2)),
                ),
                g(v(5), u(5, 30, 5), S(.4, .2, .6, .5)),
                g(v(5, 0, 1.5), f(0, 1).scale(4.5, .3, 4.5), S(.7, .5, .9, .2)),
                g(v(), h(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), S(.5, .5, .5, .5)),
                g(v(6), f(15, -1.5, 4).scale(3.5, 1, 3.5), S(.5, .5, .5, .5)),
              )),
              I(e => {
                e.h = e =>
                  e.translateSelf(
                    0,
                    .01 < L[3].g ? (5 * _(1.5 * Q) + 2) * L[3].i * (1 - L[2].g) + -15 * (1 - L[3].g) : -500,
                    0,
                  ),
                  A(v(5), f(0, -.2).scale(5, 1, 5), S(.6, .65, .7, .3)),
                  D(f(0, 1.2));
              }),
              D(f(15, -2, 4)),
              e(.7, 12, 35),
              e(1, 8.2, 55),
              I(e => {
                e.h = e => e.translateSelf(r() * J(Q / 1.5 + 2) * 12),
                  A(
                    b(
                      d(
                        g(v(), u(1.5, 1, 5), S(.9, .9, .9, .2)),
                        g(v(6), u(4, 1, 5), S(.9, .9, .9, .2)),
                        g(v(), f(0, -2).scale(2, 3.2, 1.9), S(.3, .8, .5, .5)),
                        g(v(16, 1, 0, 4), u(1, 1, 1.5).rotate(0, 90), S(.9, .9, .9, .2)),
                      ),
                      g(v(), u(1.3, 10, 1.3), S(.2, .7, .4, .6)),
                    ),
                    f(0, 0, 45),
                  ),
                  j(f(0, 2.8, 45), [0, 0, 4.5]);
              }),
              A(v(), f(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(.9, .9, .9, .2)),
              I(e => {
                e.h = e => e.translateSelf(9.8 * (1 - r())),
                  A(v(3), f(-23, -1.7, 55.8).scale(5, .7, 8.3), S(.3, .6, .6, .2)),
                  A(v(8), f(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(.8, .8, .8, .2)),
                  A(v(), f(-23, -3, 55).scale(5.2, 1.7, 3), S(.5, .5, .5, .3)),
                  A(v(), f(-23, -2.2, 62).scale(3, 1, 4), S(.5, .5, .5, .3)),
                  D(f(-23, -.5, 66.5));
              }),
              I(e => {
                e.h = e => e.translateSelf(0, E(1 - 5 * r()) * i(L[4].g, L[5].g) * J(1.35 * Q) * 4),
                  A(v(), f(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(.7, .7, .7, .2)),
                  A(b(g(v(), u(3, 1.4, 2.7)), g(v(), u(1.2, 8, 1.2))), f(-33, -3, 55), S(.7, .7, .7, .2));
              }),
              I(e => {
                e.h = e => e.translateSelf(0, 0, E(1 - 5 * r()) * i(L[4].g, L[5].g) * J(.9 * Q) * 8),
                  A(b(
                    g(v(), f(-27, -3, 55).scale(3, 1.4, 2.7), S(.9, .9, .9, .2)),
                    g(v(), f(-27, -3, 55).scale(1, 3), S(.9, .9, .9, .2)),
                  )),
                  A(v(), f(-39, -3, 55).scale(3, 1.4, 2.7), S(.9, .9, .9, .2));
              }),
              I(e => {
                e.h = e => e.translateSelf(0, -6.5 * L[4].i),
                  A(v(6), f(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), S(.7, .7, .7, .4));
              }),
              D(f(-55, -1.1, 46).rotate(0, 90)),
              A(v(6), f(-61.3, -2.4, 49).scale(3, 1, 5), S(.4, .6, .6, .3)),
              A(v(7), f(-57, -2.6, 46).scale(4, 1, 4), S(.8, .8, .8, .3)),
              [
                ...g(v(), f(0, -3).scale(11, 1.4, 3), S(.9, .9, .9, .2)),
                ...b(
                  g(v(6), h(90).scale(6, 8, 6), S(.3, .6, .6, .3)),
                  g(v(4, 0, .01), f(0, 6).scale(12, 2, .75).rotate(0, 45), S(.3, .6, .6, .3)),
                  g(v(6), h(90).scale(5, 12, 5), S(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => g(v(5), f(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(.3, .6, .6, .3))),
                ),
              ]),
            c = (A(o, f(-53, 0, 55)),
              I(e => {
                e.h = e => e.translateSelf(-75, (1 - L[5].i) * (1 - L[6].g) * 3, 55).rotate(180 * (1 - L[5].i) + x, 0),
                  A(o);
              }, 2),
              A(v(), f(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(.7, .7, .7, .2)),
              A(v(3, 0, -.5), f(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(.8, .8, .8, .2)),
              A(b(
                d(
                  g(v(), f(-100, -2.5, 55).scale(8, 1, 8), S(.8, .8, .8, .2)),
                  g(v(), f(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(.8, .8, .8, .2)),
                  g(v(), f(-100, -2.6, 70).scale(3, 1.1, 7), S(.8, .8, .8, .2)),
                  g(v(), f(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(.8, .8, .8, .2)),
                  g(v(6), f(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(.6, .6, .6, .3)),
                  g(v(), f(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(.8, .8, .8, .2)),
                  g(v(), f(-100, .42, 92).scale(3, 1.1, 4.1), S(.8, .8, .8, .2)),
                ),
                g(v(8), f(-100, -1, 55).scale(7, .9, 7), S(.3, .3, .3, .4)),
                g(v(8), f(-100, -2, 55).scale(4, .3, 4), S(.4, .4, .4, .5)),
                g(v(8), f(-100, -3, 55).scale(.6, 1, .6), S(.4, .4, .4, .5)),
              )),
              j(f(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              j(f(-89, .2, 80), [0, 0, 6]),
              A(b(
                g(v(), f(-100, 1, 63).scale(7.5, 4), S(.5, .5, .5, .4)),
                g(v(), f(-100, 0, 70).scale(2, 2, 10), S(.5, .5, .5, .4)),
                g(v(20, 1), f(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(.5, .5, .5, .4)),
              )),
              I(e => {
                e.h = e => e.translateSelf(-99.7, -1.9, 63.5).scale(1, E(1.1 - L[6].g), 1), A(s);
              }),
              h1.map(({ x: t, z: a }) => {
                A(v(6), f(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), S(.6, .15, .15, .8)),
                  [4, -.4].map(e => A(v(6), f(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), S(.4, .2, .2, .8)));
              }),
              p(7, e => {
                A(
                  v((23 * e + 1) % 5 + 5, 0, .55),
                  f(5 * J(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  S(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              A(v(), f(-87, -9.5, 24).scale(7, 1, 3), S(.4, .5, .6, .4)),
              A(v(4), f(-86, -9.2, 27).scale(5, 1, 5), S(.5, .6, .7, .3)),
              A(v(12, 1), f(-86, -9, 31).scale(1.5, 1, 1.5), S(.3, .3, .4, .1)),
              D(f(-86, -7.5, 31)),
              I(e => {
                e.h = e => e.translateSelf(0, 3.5 * (1 - U(L[6].g, L[7].g)) + i(L[7].i, L[6].i) * J(Q) * 5),
                  [0, 12, 24].map(e => A(v(), f(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), S(.2, .5, .6, .2)));
              }),
              I(e => {
                e.h = e => e.translateSelf(0, i(L[7].i, L[6].i) * J(Q + 3) * 6, 6 * J(.6 * Q + 1) * i(L[7].i, L[6].i)),
                  [6, 18].map(e => A(v(), f(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), S(.1, .4, .5, .2)));
              }),
              A(
                b(
                  d(
                    g(v(5), f(0, 0, -7).scale(2, 1.2, 2), S(.2, .4, .7, .3)),
                    g(v(5), u(9, 1.2, 9), S(0, .2, .3, .5)),
                    g(v(), u(11, 1, 13), S(.3, .4, .6, .3)),
                  ),
                  g(v(5), u(5.4, 5, 5.4), S(0, .2, .3, .5)),
                ),
                f(-38.9, -11.3, 17),
              ),
              D(f(-38.9, -9.6, 10)),
              I(e => {
                e.h = e => e.translateSelf(0, -7.3 * L[7].i),
                  A(
                    b(
                      d(
                        g(v(5), f(0, 2).scale(5, 7, 5).skewY(8), S(.2, .4, .5, .5)),
                        g(v(5), f(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(.25, .35, .5, .5)),
                        g(v(5), f(0, 9).scale(.6, 7, .6).skewY(8), S(.35, .3, .5, .5)),
                      ),
                      g(v(5), u(4, 8, 4), S(.2, .4, .5, .5)),
                      g(v(5), f(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(.2, .4, .5, .5)),
                    ),
                    f(-38.9, -11.3, 17),
                  ),
                  j(f(-39.1, -.6, 17).rotate(11), ...z1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              h1.map(({ x: t, z: a }) => {
                A(v(14, 1), f(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), S(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    A(v(17, 1), f(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), S(.6, .6, .6, .3))
                  );
              }),
              A(
                b(
                  d(
                    g(v(6), f(0, 0, -36).scale(15, 1.2, 15), S(.7, .7, .7, .3)),
                    g(v(), f(0, 0, -18).scale(4, 1.2, 6), S(.45, .4, .6, .3)),
                  ),
                  ...p(6, t =>
                    p(6, e =>
                      g(
                        v(6),
                        f(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * J(4 * e)).scale(2, 5, 2),
                        S(.7, .7, .7, .3),
                      ))).flat(),
                ),
                f(-38.9, -11.3, 17),
              ),
              j(f(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              A(v(5), f(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), S(.8, .1, .25, .4)),
              D(f(-84, -.5, 85).rotate(0, 45)),
              I(e => {
                e.h = e => t(e, -123, 1.4, 55 + -65 * o1), A(l), D(f(0, -3, -4).rotate(0, 180));
              }),
              b(
                g(v(), f(0, -.5, 1).scale(1.15, 1.2, 6.5), S(.25, .25, .35, .3)),
                g(v(3), f(0, 0, -5.5).scale(3, 2), S(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => g(v(), f(e, -.5, 1).scale(.14, .3, 6.5), S(.7, .2, 0, .3))),
              ));
          I(e => {
            e.h = e => e.translateSelf(0, -2, i(L[10].g, L[11].g) * N(J(1.1 * Q)) * -8.5 + 10),
              p(2, e => A(c, f(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            I(e => {
              e.h = e => e.translateSelf(0, -2, i(L[10].g, L[11].g) * N(J(2.1 * Q)) * -8.5 + 10),
                p(2, e => A(c, f(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            I(e => {
              e.h = e =>
                e.translateSelf(
                  0,
                  -2,
                  -8.5 * U((1 - L[10].g) * (1 - i(L[10].g, L[11].g)), i(L[10].g, L[11].g) * N(J(1.5 * Q))) + 10,
                ), p(3, e => A(c, f(9 * e - 106, 1.7, -12)));
            }),
            A(
              b(
                d(g(v(), f(26.5, -1.6, 10).scale(20, 2.08, 3)), g(v(), f(26.5, -.6, 10).scale(19, 2, .5))),
                ...p(4, e => g(v(), f(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...p(3, e => g(v(), f(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              f(-123, 0, -12),
              S(.5, .5, .6, .2),
            ),
            D(f(-116, -1.4, -18).rotate(0, 180)),
            A(v(), f(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(.8, .8, .8, .2)),
            A(v(6), f(-116, -2.6, -16.5).scale(3.2, .8, 3), S(.6, .5, .7, .2)),
            A(v(), f(-115.5, -17, -12).scale(.5, 15, 2.2), S(.6, .6, .6, .3)),
            A(v(8), f(-114, -17, -2).scale(2, 15, 2), S(.6, .6, .6, .3)),
            A(v(8), f(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, .3)),
            A(v(), f(-77, -17, -50.5).scale(2.2, 15, .5), S(.6, .6, .6, .3)),
            p(3, e => {
              A(a(16), f(12 * e - 109, -9, -12), S(.6, .6, .6, .3)),
                A(a(16), f(-77, -9, -12 * e - 20).rotate(0, 90), S(.6, .6, .6, .3));
            }),
            A(b(
              g(v(12), f(-77, -14.5, -12).scale(4, 17.5, 4), S(.7, .7, .7, .2)),
              g(v(), f(-79, .1, -12).scale(3.5, 2, 1.3), S(.4, .5, .6, .2)),
              g(v(), f(-77, .1, -14).scale(1.5, 2, 2), S(.4, .5, .6, .2)),
              g(v(12), f(-77, 3.1, -12).scale(3, 5, 3), S(.4, .5, .6, .2)),
            )),
            A(v(), f(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(.6, .6, .6, .3)),
            A(v(9), f(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(.5, .5, .5, .3)),
            A(b(
              g(v(), f(-93, -5.8, -40).scale(9, 1, 5), S(.8, .8, .8, .1)),
              g(v(9), f(-98, -5.8, -40).scale(3, 8, 3), S(.7, .7, .7, .2)),
            )),
            D(f(-98, -4.4, -40).rotate(0, 90)),
            j(f(-115, .2, -12), [0, 0, 3.5]),
            j(f(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            A(b(
              d(
                g(v(6, 0, 0, .6), f(-100, .7, 105.5).scale(8, 1, 11), S(.7, .7, .7, .2)),
                g(v(), f(-101.5, .7, 93.5).scale(10.5, 1, 2), S(.7, .7, .7, .2)),
              ),
              g(v(5), f(-100, .7, 113).scale(4, 3, 4), S(.7, .7, .7, .2)),
            )),
            p(4, a =>
              I(e => {
                e.h = e => {
                  let t = i(L[8].i, L[12].i);
                  e.translateSelf(
                    (2 < a ? 2 * (1 - t) + t : 0) - 100,
                    t * J(1.3 * Q + 1.7 * a) * (3 + a / 3) + .7,
                    115 + (1 & a ? -1 : 1) * (1 - L[8].i) * (1 - L[12].i) * -7
                      + U(t, .05) * _(1.3 * Q + 7 * a) * (4 - 2 * (1 - a / 3)),
                  );
                },
                  A(
                    v(6),
                    f(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                    S(.5 - a / 8, a / 12 + .5, .7, .3),
                  );
              })),
            I(e => {
              e.h = e => {
                let t = i(L[8].i, L[12].i);
                e.translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - L[8].g) + t * J(.8 * Q) * -1 - 1.8, 93.5).rotateSelf(
                  _(1.3 * Q) * (3 * t + 3),
                  0,
                );
              },
                A(b(g(v(10), u(6, 2, 6), S(.1, .6, .5, .3)), g(v(10), u(3.3, 6, 3.3), S(.1, .6, .5, .5)))),
                A(v(15, 1), f(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(.4, .4, .4, .3)),
                A(v(10), f(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(.3, .8, .7, .3)),
                A(v(5), f(-7.5).rotate(0, 90).scale(1, 3), S(.5, .5, .5, .5)),
                D(f(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  A(n, h(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, .8, .2))
                ),
                j(f(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            I(e => {
              e.h = e => e.translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - L[12].g), A(s);
            }),
            [-1, 1].map(t => {
              [7.2, 1.5].map(e => A(v(15, 1), f(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), S(.5, .24, .2, .4))),
                A(n, f(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), S(1, 1, .8)),
                A(v(12, 1), f(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), S(.6, .24, .2, .5)),
                A(
                  b(
                    g(v(), f(-4 * t, 3.5, -.5).scale(4, 4, .7), S(.5, .5, .5, .4)),
                    g(v(), u(3, 3, 10), S(.6, .24, .2, .5)),
                    g(v(28, 1), f(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(.6, .24, .2, .5)),
                    g(v(5), f(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(.6, .24, .2, .5)),
                    g(v(5), f(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), S(.6, .24, .2, .5)),
                  ),
                  f(t - 100, .7, 97),
                );
            }),
            A(b(
              g(v(), f(-82.07, .8, 106).scale(11, .9, 2.2), S(.7, .7, .7, .1)),
              g(v(45, 1), f(-81, .7, 106).scale3d(7.7), S(.7, .7, .7, .1)),
            )),
            I(e => {
              e.h = e => e.translateSelf(-81, .6, 106).rotateSelf(0, 40 + r1),
                A(b(
                  g(v(45, 1), u(7.5, 1, 7.5), S(.45, .45, .45, .2)),
                  g(v(), f(0, 0, -5.5).scale(1.5, 3, 2.7), S(.45, .45, .45, .2)),
                )),
                A(v(8), f(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(.7, .7, .7, .1)),
                A(v(5), f(0, 2).scale(1, 2), S(.3, .3, .3, .2)),
                j(f(0, 3), ...z1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            I(e => {
              e.h = e => e.translateSelf(-65.8, .8, 106).rotateSelf(0, s1),
                [-1, 1].map(e =>
                  A(n, h(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), S(1, 1, .8))
                ),
                A(b(g(v(28, 1), f(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)), g(v(), u(9, 5, 2), S(.3, 0, 0, .3)))),
                A(g(v(28, 1), u(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                A(g(v(5), f(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            I(e => {
              e.h = e => e.translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - s1),
                A(b(
                  g(v(28, 1), f(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)),
                  g(v(), f(7).scale(9, 5, 2), S(.3, 0, 0, .3)),
                  g(v(), f(0, 0, 7).scale(2, 5, 9), S(.3, 0, 0, .3)),
                )),
                A(g(v(28, 1), u(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                A(g(v(5), f(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            I(e => {
              e.h = e => e.translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + s1),
                A(b(
                  g(v(28, 1), f(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)),
                  g(v(), f(7).scale(9, 5, 2), S(.3, 0, 0, .3)),
                  g(v(), f(0, 0, -7).scale(2, 5, 9), S(.3, 0, 0, .3)),
                )),
                A(g(v(28, 1), u(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                A(g(v(5), f(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            A(v(), f(-58, 1, 106).scale(2, .65, 2), S(.7, .7, .7, .2)),
            A(v(), f(-50.7, 1, 99).scale(2, .65, 1), S(.7, .7, .7, .2)),
            A(v(), f(-42, .4, 91).scale(5, 1, 2.5), S(.7, .7, .7, .3)),
            A(v(), f(-34.2, .4, 91).scale(3, 1, 3), S(.7, .7, .7, .3)),
            D(f(-34, 2.7, 96).rotate(-12, 0)),
            A(v(5), f(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), S(.2, .5, .5, .6)),
            [S(.1, .55, .45, .2), S(.2, .5, .5, .3), S(.3, .45, .55, .4)].map((t, a) =>
              I(e => {
                e.h = e => {
                  e.translateSelf(
                    0,
                    (1 - L[13].i) * (1 - L[14].i) * (a ? 0 : 3) + i(L[13].i, L[14].i) * J(1.5 * Q + 1.5 * a) * 4,
                  );
                },
                  A(v(), f(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), t),
                  2 === a && A(v(), f(-29.1, .4, 91).scale(2.1, 1, 3), S(.7, .7, .7, .3)),
                  1 === a && A(v(), f(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), S(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => A(n, f(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), S(1, 1, .8))),
            p(
              3,
              e =>
                A(
                  a(24.7 - .7 * (1 & e)),
                  f(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                  1 & e ? S(.5, .5, .5, .3) : S(.35, .35, .35, .5),
                ),
            ),
            A(b(
              g(v(6, 0, 0, .3), f(0, -.92, 95).scale(14, 2, 14), S(.8, .8, .8, .2)),
              g(v(5), f(0, 0, 95).scale3d(6), S(.3, .3, .3, .5)),
            )),
            D(f(0, 1.7, 82).rotate(0, 180)),
            A(v(5), f(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(.5, .3, .3, .4)),
            A(v(6), f(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(.5, .6, .7, .3)),
            A(v(), f(0, 16, 129).scale(1.5, 1, 2), S(.5, .6, .7, .3)),
            A(v(7), f(0, 16.2, 133).scale(5, 1, 5), S(.4, .5, .6, .4)),
            A(b(
              d(
                g(v(), f(0, 16, 110.5).scale(12, 1, 3), S(.5, .3, .3, .4)),
                g(v(), f(0, 16, 111).scale(3, 1, 3.8), S(.5, .3, .3, .4)),
              ),
              g(v(5), f(0, 16, 103.5).scale(5.5, 5, 5.5), S(.5, .3, .3, .4)),
            )),
            I(e => {
              e.h = e => e.translateSelf(-2 * J(Q)).rotate(25 * J(Q)),
                A(v(3), f(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), S(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  A(v(6), f(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), S(.7, .7, .7, .4)),
                    A(v(), f(0, 6.2, e + 95).scale(.5, 11, .5), S(.5, .3, .3, .4));
                });
            }),
            I(e => {
              e.h = e => {
                let t = i(i((L[14].g + L[14].i) / 2, L[13].i), (L[15].g + L[15].i) / 2);
                e.translateSelf(0, 16 * t, 8.5 * E(2 * t - 1) + 95);
              },
                A(v(5), u(5, 1.1, 5), S(.5, .3, .3, .4)),
                A(v(5), u(5.5, .9, 5.5), S(.25, .25, .25, .4)),
                D(f(0, 1.5, -1).rotate(0, 180));
            }),
            j(f(0, 3, 95), ...z1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            j(f(0, 19, 134), [0, 0, 3.5]);
        }),
        I(() => {
          A(l(20), f(0, 1).scale(.5, .5, .5), S(1, .3, .4)),
            A(l(30), u(.7, .8, .55), S(1, .3, .4)),
            A(v(), f(0, .9, .45).scale(.15, .02, .06), S(.3, .3, .3)),
            [-1, 1].map(e => {
              A(n, h(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), S(1, 1, .8)),
                A(
                  g(b(v(15, 1), g(v(), f(0, 0, 1).scale(2, 2, .5))), h(-90, 0).scale(.1, .05, .1), S(.3, .3, .3)),
                  f(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
                ),
                I(() => {
                  A(v(20, 1), f(.3 * e, -.8).scale(.2, .7, .24), S(1, .3, .4));
                });
            });
        }),
        I(() => {
          A(v(6, 1), u(.13, 1.4, .13), S(.3, .3, .5, .1)),
            A(v(10), f(0, 1).scale(.21, .3, .21), S(1, .5, .2)),
            A(v(3), f(0, -1).rotate(90, 90).scale(.3, .4, .3), S(.2, .2, .2, .1));
        }, 0),
        I(() => {
          A(v(6).slice(0, -1), u(.77, 1, .77), S(1, .3, .5));
        }, 0),
        I(() => {
          A(
            l(30, 24, (e, t, a) => {
              let l = t / 24, r = e * V * 2 / 30, s = J(l ** .6 * V / 2);
              return e = l * l * J(e * V * 14 / 30) / 4,
                23 < t
                  ? { x: a.D = 0, y: -.5, z: 0 }
                  : { x: _(r) * s, y: _(l * V) - l - e, z: J(r) * s + J(e * V * 2) / 4 };
            }),
            u(.7, .7, .7),
            S(1, 1, 1),
          ), [-1, 1].map(e => A(l(12), f(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
