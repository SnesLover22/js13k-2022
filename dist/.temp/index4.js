let S,
  I,
  Y,
  C,
  T,
  G,
  Z,
  $,
  e1,
  A,
  a1,
  M,
  k,
  c,
  t1,
  l1,
  r1,
  s1,
  x,
  F,
  O,
  Q,
  c1,
  B = 0,
  o1 = 0,
  R = 0,
  i1 = 0,
  n1 = 0,
  m1 = 0,
  f1 = 0,
  h1 = 0,
  u1 = 0,
  X = 0,
  q = 0,
  H = 0,
  d1 = 14,
  N = 180,
  g1 = .1,
  a = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  E = [],
  L = [],
  v1 = [],
  p1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  { PI: y, atan2: x1, sin: w, cos: z, exp: t, random: y1 } = Math,
  P = e => e < 0 ? -e : e,
  w1 = (e, a) => e < a ? e : a,
  z1 = (e, a) => a < e ? e : a,
  S1 = (e, a) => P(e) > a ? e : 0,
  W = (e, a = 0, t = 1) => e < a ? a : t < e ? t : e,
  A1 = e => x1(w(e * J1), z(e * J1)) / J1,
  M1 = (e, a, t) => e + (2 * (a = (a - e) % 360) % 360 - a) * W(t) || 0,
  k1 = (e, a, t) => (0 < t ? t < 1 ? e + (a - e) * t : a : e) || 0,
  I1 = (e, a) => (e = W(e), k1(e, 1 - e, a)),
  j1 = (e, a, t = 0) => (e * e + a * a + t * t) ** .5,
  j = (
    e,
    a = l,
    t = 0,
  ) => (t *= 16,
    a[t++] = e.m11,
    a[t++] = e.m12,
    a[t++] = e.m13,
    a[t++] = e.m14,
    a[t++] = e.m21,
    a[t++] = e.m22,
    a[t++] = e.m23,
    a[t++] = e.m24,
    a[t++] = e.m31,
    a[t++] = e.m32,
    a[t++] = e.m33,
    a[t++] = e.m34,
    a[t++] = e.m41,
    a[t++] = e.m42,
    a[t++] = e.m43,
    a[t] = e.m44,
    a),
  U = (
    e = p,
    a = D,
  ) => (a.m11 = e.m11,
    a.m12 = e.m12,
    a.m13 = e.m13,
    a.m14 = e.m14,
    a.m21 = e.m21,
    a.m22 = e.m22,
    a.m23 = e.m23,
    a.m24 = e.m24,
    a.m31 = e.m31,
    a.m32 = e.m32,
    a.m33 = e.m33,
    a.m34 = e.m34,
    a.m41 = e.m41,
    a.m42 = e.m42,
    a.m43 = e.m43,
    a.m44 = e.m44,
    a),
  K = (e = 0, a = 0, t = 0, l = 1) => {
    F = D.m11 * e + D.m21 * a + D.m31 * t + D.m41 * l,
      O = D.m12 * e + D.m22 * a + D.m32 * t + D.m42 * l,
      Q = D.m13 * e + D.m23 * a + D.m33 * t + D.m43 * l,
      c1 = D.m14 * e + D.m24 * a + D.m34 * t + D.m44 * l;
  },
  o = (e, a, t) => p.translate(e, a, t),
  m = (e, t) => Array.from(Array(e), (e, a) => t(a)),
  d = (e, a, t) => (e.A = t, e.s = a, e),
  D1 = (e, a, t = e.s) => (U(a), d(e.map(({ x: e, y: a, z: t }) => (K(e, a, t), { x: F, y: O, z: Q })), t, e.A)),
  i = (e, a, t) => e.map(e => D1(e, a, t)),
  Y1 = (t, l = 0) =>
    m(t, e => {
      let a = z(2 * y * e / t);
      return { x: w(2 * y * e / t), y: 0, z: P(a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  C1 = (l, r, s) =>
    l.map((e, a, { length: t }) => d([e, r[t - a - 1], r[t - (a + 1) % t - 1], l[(a + 1) % t]], l.s, s)),
  n = (
    e,
    a,
    t = 0,
    l,
  ) => (e = e ? Y1(e, l) : p1,
    l = D1(e, o(0, 1).scale3d(0 < t ? t : 1)),
    e = D1(e, o(0, -1).scale3d(t < 0 ? -t : 1)).reverse(),
    [...C1(e, l, a), l, e]),
  T1 = (l, r = l, s = (e, a) => (a *= y / r, { x: z(e *= 2 * y / l) * w(a), y: z(a), z: w(e) * w(a) })) => {
    let c = [];
    for (let t = 0; l > t; t++) {
      for (let a = 0; r > a; a++) {
        let e = d([], 0, 1);
        c.push(e),
          e.push(s(t, a, e)),
          a && e.push(s((t + 1) % l, a, e)),
          r - 1 > a && e.push(s((t + 1) % l, a + 1 % r, e)),
          e.push(s(t, a + 1 % r, e));
      }
    }
    return c;
  },
  F1 = e => 1 - t(-R * e),
  V = (e, a, t) => k1(e, a, F1(t)),
  O1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  Q1 = e => w(e * y * 2),
  B1 = (e, a, t, l) =>
    new DOMMatrix([t, 0, 0, 0, 0, l, 0, 0, 0, 0, (a + e) / (e - a), -1, 0, 0, 2 * a * e / (e - a), 0]),
  R1 = (e, a) => {
    1 / 0 > g1 && (g1 = B + a, h4.innerHTML = e);
  },
  X1 = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        e1 = v1.reduce((e, a) => e + a.j, 0)
      ] + " / XIII";
  },
  q1 = () => {
    localStorage["Dante-22"] = JSON.stringify([L.map(e => e.j), v1.map(e => e.j), d1, M, B]);
  },
  f = (e, a, t, l = 0) => 255 * l << 24 | 255 * t << 16 | 255 * a << 8 | 255 * e,
  _ = (e, a = 0, t = 0) => {
    let l = U(p, E[++k].l);
    return l.m41 = e, l.m42 = a, l.m43 = t, l;
  },
  h = () => {
    let l = [];
    c = (e, a = p, t) => l.push(...i(e, a, t)), E.push({ l: new DOMMatrix(), i: l });
  },
  u = a => {
    let t = () => {
        let e = t.h = V(t.h, t.j, 4);
        t.g = V(t.g, t.j, 1),
          U(U(l).multiplySelf(a), _(0)).rotateSelf(50 * e - 25, 0).translateSelf(0, 1).m44 = e,
          C && (K(), j1(X - F, q - O, H - Q) < 3)
            ? t.j
              ? .7 < e && (t.j = 0, d1 = r, R1("* click *", 1), q1())
              : e < .3 && (t.j = 1, d1 = r, R1("* click *", 1), q1())
            : t.j && .8 < e && 14 === r && (t.j = 0,
              e1 < 13
                ? R1("Not leaving now, there are souls to catch!", 3)
                : A || (R1("Well done. They will be punished.<br>Thanks for playing", 1 / 0), A = 1));
      },
      l = E.at(-1).l,
      r = L.length;
    t.l = l,
      t.D = a,
      L.push(t),
      c(n(5), a.translate(.2).rotate(90, 90).scale(.4, .1, .5), f(.4, .5, .5)),
      c(n(5), a.translate(-.2).rotate(90, 90).scale(.4, .1, .5), f(.4, .5, .5)),
      c(n().slice(0, -1), a.translate(0, -.4).scale(.5, .1, .5), f(.5, .5, .4));
  },
  g = (o, ...i) => {
    let n,
      m,
      f,
      h,
      u = 0,
      d = 0,
      g = 1,
      v = -1,
      p = () => {
        if (p.j) {
          U(E[35].l).translateSelf(
            e % 4 * 1.2 - 1.7 + w(B + e) / 7,
            -2,
            1.7 * (e >> 2) - 5.5 + P(e % 4 - 2) + z(B / 1.5 + e) / 6,
          );
        } else {
          let l, e, a, t, r, s = 1, c = 1 / 0;
          for (let t = 0; i.length > t; t++) {
            let e = i[t], a = j1(S - e[0], A - e[1]);
            s = w1(s, a / e[2]), (a -= e[2]) < 0 ? l = 1 : c > a && (c = a, b = e);
          }
          l
          || (e = S - b[0],
            a = A - b[1],
            t = j1(e, a),
            r = x1(-a, e),
            g && (h = W(h / (1 + y1())), d = (y1() - .5) * y / 2),
            r += d,
            v = -z(r),
            u = w(r),
            .1 < t && (t = w1(t, b[2]) / t, S = e * t + b[0], A = a * t + b[1])),
            g = l,
            h = V(h, 3 + 6 * (1 - s), 3 + s),
            M = V(M, S = V(S, S + v, h), h),
            k = V(k, A = V(A, A + u, h), h),
            n = M1(n, x1(M - m, k - f) / J1 - 180, F1(3)),
            U(I).multiplySelf(o).translateSelf(m = M, 0, f = k).rotateSelf(0, n, 7 * w(1.7 * B)),
            K(),
            j1(X - F, q - O, H - Q) < 1.6
            && (p.j = 1,
              R1(
                [
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
                ][e1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                6,
              ),
              X1(),
              q1());
        }
        j(D, V1, 28 + e);
      },
      b = i[0],
      [S, A] = b,
      [M, k] = b,
      I = E.at(-1).l,
      e = v1.length;
    v1.push(p);
  },
  H1 = e => {
    let a, t = 0, l = 0, r = 0, s = e.at(-1);
    for (a of e) t += (s.y - a.y) * (s.z + a.z), l += (s.z - a.z) * (s.x + a.x), r += (s.x - a.x) * (s.y + a.y), s = a;
    return a = j1(t, l, r), t /= a, l /= a, r /= a, { x: t, y: l, z: r, w: t * s.x + l * s.y + r * s.z };
  },
  N1 = ({ x: e, y: a, z: t }, l) => e * l.x + a * l.y + t * l.z,
  E1 = (l, e) => {
    let r, s, c, o = e.i, i = e.u;
    for (let t = 0; o.length > t; ++t) {
      if ((r = N1(l, o[t]) - l.w) < -8e-5 ? c = e : 8e-5 < r && (s = e), c && s) {
        s = [], c = [], t = o.at(-1);
        let a = N1(t, l) - l.w;
        for (let e of o) {
          r = N1(e, l) - l.w,
            a < 8e-5 && c.push(t),
            -8e-5 < a && s.push(t),
            (8e-5 < a && r < -8e-5 || a < -8e-5 && 8e-5 < r)
            && (a /= r - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              s.push(t),
              c.push(t)),
            t = e,
            a = r;
        }
        s = 2 < s.length && { i: d(s, o.s, o.A), u: i, v: e }, c = 2 < c.length && { i: d(c, o.s, o.A), u: i, v: e };
        break;
      }
    }
    return { x: s, y: c };
  },
  s = (e, a, t = H1(a.i)) => {
    let l, r;
    return e
      ? ({ x: l, y: r } = E1(e, a), l || r || e.i.push(a), l && (e.o = s(e.o, l, t)), r && (e.m = s(e.m, r, t)))
      : e = { x: t.x, y: t.y, z: t.z, w: t.w, i: [a], o: 0, m: 0 },
      e;
  },
  L1 = (a, r, s) => {
    let c = [],
      o = (e, a) => {
        let { x: t, y: l } = E1(e, a);
        t || l || (0 < s * N1(e, r) ? t = a : l = a), t && (e.o ? o(e.o, t) : c.push(t)), l && e.m && o(e.m, l);
      };
    for (let e of r.i) o(a, e);
    return c;
  },
  P1 = (e, a) => e && (a(e), P1(e.o, a), P1(e.m, a)),
  W1 = e => (P1(e, a => {
    let e = a.m;
    a.m = a.o, a.o = e, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let e of a.i) e.u = !e.u;
  }),
    e),
  U1 = e => e.length ? e.reduce((e, a) => s(e, { i: a, u: 0, v: 0 }), 0) : e,
  K1 = (...e) =>
    e.reduce((l, a) => {
      let r = [];
      if (l = U1(l), a) {
        a = U1(a), P1(l, e => e.i = L1(a, e, 1)), P1(a, e => r.push([e, L1(l, e, -1)]));
        for (let [a, t] of r) for (let e of t) s(l, e, a);
      }
      return l;
    }),
  v = (e, ...a) => {
    let t = e => {
        let a;
        return e.v && ((a = r.get(e.v)) ? (l.delete(a), e = t(e.v)) : r.set(e.v, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = W1(K1(W1(U1(e)), ...a)),
      P1(e, a => {
        for (let e of a.i) l.set(t(e), e.u);
      }),
      Array.from(l, ([{ i: e }, a]) => {
        let t = e.map(({ x: e, y: a, z: t }) => ({ x: e, y: a, z: t }));
        return d(a ? t.reverse() : t, e.s, e.A);
      });
  },
  p = new DOMMatrix(),
  D = new DOMMatrix(),
  l = new Float32Array(16),
  V1 = new Float32Array(760),
  _1 = new Uint8Array(65536),
  J1 = y / 180,
  G1 =
    (document.body.innerHTML +=
      "<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}",
      .3),
  b = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  J = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (let a in J) {
  [b, J].map(e => e[a[0] + [...a].reduce((e, a, t) => (e * t + a.charCodeAt(0)) % 434, 0).toString(36)] = e[a]);
}
O1(() => {
  let e = 0,
    d = () => {
      if (2 == ++e) {
        let h = [{}, {}, {}, {}, {}, {}, {}, {}],
          e = (
            t,
            e,
            a =
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
          ) => {
            let l = {}, r = (e, a) => (a = t.c6x(a), t.s3c(a, e), t.c6a(a), a), s = t.c1h();
            return t.abz(s, r(a, 35633)),
              t.abz(s, r(e, 35632)),
              t.l8l(s),
              e => e ? l[e] || (l[e] = t.gan(s, e)) : t.u7y(s);
          },
          l = (e, a, t) => {
            I
              ? 1100 < hC.width && e.d97(4, E[55].C - E[53].B, 5123, 2 * E[53].B)
              : (e.das(4, E[a].C - E[a].B, 5123, 2 * E[a].B, v1.length), e.d97(4, E[t ? 53 : 56].B - 3, 5123, 6));
          },
          r = a => {
            requestAnimationFrame(r);
            let e = (a - (S || a)) / 1e3;
            if (o1 += e, B += R = I ? 0 : w1(.055, e), S = a, 0 < R) {
              e = (e, a, t) => _(e + w(B + 2) / 5, a + w(.8 * B) / 5, t).rotateSelf(2 * w(B), w(.7 * B), w(.9 * B)),
                g1 && B > g1 && (g1 = 0, h4.innerHTML = ""),
                M = V(M, L[15].g, .2 + .3 * P(2 * L[15].g - 1)),
                a1 = A ? (T = 0, V(a1, -9, .015)) : V(a1, W(B / 3), 1),
                $(),
                k = 1,
                l1 = I1(L[13].h, L[8].h),
                x = k1(V(x, 0, 1), A1(x + 60 * R), L[2].h - L[3].g),
                r1 = k1(V(r1, 0, 5), A1(r1 + 56 * R), l1),
                s1 = k1(V(s1, 0, 4), A1(s1 + 48 * R), l1),
                _(0, 270 * (L[1].h - 1) + (2 + 5 * z(1.5 * B)) * (1 - L[10].h)),
                a = w1(1 - L[11].g, L[10].g),
                _(a * w(.6 * B + 1.2) * 12, 0, 35),
                _(a * w(.6 * B - 1.2) * 8.2, 0, 55),
                _(a * w(.6 * B) * 12, 0, 45),
                _(9.8 * (1 - a)),
                a = W(1 - 5 * a) * I1(L[11].h, L[2].h),
                _(0, a * w(1.35 * B) * 4),
                _(0, 0, a * w(.9 * B) * 8),
                _(0, -6.5 * L[11].g),
                a = I1(L[4].g, L[3].g),
                _(0, a * w(B) * 5 + 3.5 * (1 - z1(L[3].h, L[4].h))),
                _(0, a * w(B + 3) * 6, a * w(.6 * B + 1) * 6),
                _(0, -7.3 * L[4].g),
                a = I1(L[6].h, L[7].h),
                _(0, -2, 10 - 8.5 * a * P(w(1.1 * B))),
                _(0, -2, 10 - 8.5 * a * P(w(2.1 * B))),
                _(0, -2, 10 - 8.5 * z1(a * P(w(1.5 * B)), (1 - L[6].h) * (1 - a)));
              var t = I1(L[5].g, L[13].g);
              for (a = 0; a < 4; a++) {
                _(
                  (2 < a ? 2 * (1 - t) + t : 0) - 100,
                  t * w(1.3 * B + 1.7 * a) * (3 + a / 3) + .7,
                  115 - 7 * (1 - L[5].g) * (1 - L[13].g) * (1 & a ? -1 : 1)
                    + z1(.05, t) * z(1.3 * B + 7 * a) * (4 - 2 * (1 - a / 3)),
                );
              }
              a = I1(L[8].g, L[9].g);
              for (let e = 0; e < 3; ++e) {
                _(0, a * w(1.5 * B + 1.5 * e) * 4 + (e ? 0 : 3 * (1 - L[8].g) * (1 - L[9].g)));
              }
              for (
                a = I1(I1((L[9].h + L[9].g) / 2, L[8].g), (L[12].h + L[12].g) / 2),
                  _(0, 16 * a, 95 + 8.5 * W(2 * a - 1)),
                  _(0, -4.7 * L[0].h, -15),
                  _(0, -4.7 * L[10].h, 15),
                  _(-99.7, -1.9 - 5.5 * L[3].h, 63.5),
                  _(-100, .6 - 5.8 * L[13].h, 96.5),
                  _(-75, 3 * (1 - L[2].g) * (1 - L[3].h), 55).rotateSelf(180 * (1 - L[2].g) + x, 0),
                  _(2.5 * (1 - t) - 139.7, -3 * (1 - L[5].h) - t * w(.8 * B) - 1.8, 93.5).rotateSelf(
                    z(1.3 * B) * (3 + 3 * t),
                    0,
                  ),
                  _(-2 * w(B)).rotateSelf(25 * w(B)),
                  _(-81, .6, 106).rotateSelf(0, 40 + r1),
                  _(-65.8, .8, 106).rotateSelf(0, s1),
                  _(-50.7, .8, 106).rotateSelf(0, 180 - s1),
                  _(-50.7, .8, 91).rotateSelf(0, 270 + s1),
                  e(-12, 4.2, 40 * a1 - 66),
                  e(-123, 1.4, 55 - 65 * M),
                  e = 0;
                e < 16;
                ++e
              ) {
                e < 13 && v1[e](), L[e]();
              }
              for (t1(), e = 0; e < 28; ++e) {
                j(E[28 + e].l, V1, e);
              }
              for (let e, a = 0, t = 656; a < 26; ++a, ++t) {
                e = E[2 + a].l, V1[t++] = e.m41, V1[t++] = e.m42, V1[t++] = e.m43;
              }
              J.cbf(!0, !0, !0, !0),
                J.c4s(16640),
                J.u3a(c("j"), V1),
                J.cbf(!0, !1, !0, !1),
                J.uae(c("b"), !1, j(U().rotateSelf(0, 180).invertSelf().translateSelf(-X, -q, .3 - H))),
                l(J, 56, 1),
                J.c4s(256),
                J.cbf(!1, !0, !1, !0),
                J.uae(c("b"), !1, j(U().translateSelf(-X, -q, -H - .3))),
                l(J, 56, 1),
                J.f1s(),
                C = 0;
            }
            v(),
              b.u3a(v("j"), V1),
              b.b6o(36160, s),
              b.v5y(0, 0, 2048, 2048),
              b.ubh(v("g"), 4),
              b.ubh(v("h"), 4),
              b.uae(v("a"), !1, j(p)),
              e = m1,
              t = f1,
              a = h1,
              I
                ? (U().rotateSelf(0, 40 * w(o1) - 80, -8),
                  j(D, V1, 25),
                  j(D, V1, 26),
                  j(D, V1, 27),
                  U(G).invertSelf(),
                  K(3.6, 3.5),
                  e = F,
                  t = O,
                  a = 5,
                  U(p, d).rotateSelf(20, 0).translateSelf(-e, -t, -a).rotateSelf(0, 99))
                : U(p, d).rotateSelf(-u1, -N).invertSelf().translateSelf(-e, -t, -a),
              i(55 - G1),
              l(b, 57, T),
              n(126),
              l(b, 57, T),
              b.b6o(36160, null),
              b.v5y(0, 0, b.drawingBufferWidth, b.drawingBufferHeight),
              b.c4s(16640),
              b.ubh(v("g"), 0),
              b.ubh(v("h"), 1),
              b.ubu(v("k"), e, t, a),
              b.uae(v("a"), !1, j(G)),
              b.uae(v("b"), !1, j(d)),
              b.uae(v("i"), !1, g),
              l(b, 57, T),
              o(),
              b.uae(o("b"), !1, j(d.invertSelf())),
              b.ubu(o("j"), b.drawingBufferWidth, b.drawingBufferHeight, o1),
              b.d97(4, 3, 5123, 0);
          },
          u = new DOMMatrix(),
          d = new DOMMatrix(),
          g = new Float32Array(32),
          a = t,
          s = b.c5w(),
          v = e(
            b,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          c = e(
            J,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          o = e(
            b,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [i, n] = m(2, e => {
            let a = b.c25();
            return b.a4v(33984 + e),
              b.b9j(3553, a),
              b.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              b.t2z(3553, 10241, 9729),
              b.t2z(3553, 10240, 9729),
              b.t2z(3553, 34893, 515),
              b.t2z(3553, 34892, 34894),
              b.t2z(3553, 10243, 33071),
              b.t2z(3553, 10242, 33071),
              l => {
                let t = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, i = 1 / 0, n = -1 / 0, m = -1 / 0, f = -1 / 0;
                b.fas(36160, 36096, 3553, a, 0),
                  b.c4s(256),
                  U().scale3dSelf(l *= 1.1).multiplySelf(U(Z[e], u).multiplySelf(d).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = h[a];
                  K(4 & a ? 1 : -1, 2 & a ? 1 : -1, 1 & a ? 1 : -1),
                    t -= e.x = (0 | F) / l / c1,
                    r -= e.y = (0 | O) / l / c1,
                    s -= e.z = (0 | Q) / l / c1;
                }
                for (U().rotateSelf(298, 139).translateSelf(t / 8, r / 8, s / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: a, z: t } = h[l];
                  K(e, a, t), n = z1(n, F), m = z1(m, O), f = z1(f, Q), c = w1(c, F), o = w1(o, O), i = w1(i, Q);
                }
                l = 10 + e,
                  i *= i < 0 ? l : 1 / l,
                  f *= 0 < f ? l : 1 / l,
                  b.uae(
                    v("b"),
                    !1,
                    j(
                      U(p, u).scaleSelf(2 / (n - c), 2 / (m - o), 2 / (i - f)).translateSelf(
                        (n + c) / -2,
                        (m + o) / -2,
                        (i + f) / 2,
                      ).multiplySelf(D),
                      g,
                      e,
                    ),
                    16 * e,
                    16,
                  );
              };
          });
        b.a4v(33986),
          b.b9j(3553, b.c25()),
          b.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, a),
          b.t2z(3553, 10241, 9987),
          b.t2z(3553, 10240, 9729),
          b.gbn(3553),
          b.b6o(36160, s),
          b.d45([0]),
          b.r9l(0),
          v(),
          b.ubh(v("q"), 2),
          o(),
          b.ubh(o("q"), 2),
          b.c5t(0, 0, 0, 1),
          b.d4n(515),
          b.e8z(2929),
          b.e8z(2884),
          J.e8z(2929),
          J.e8z(2884),
          J.v5y(0, 0, 128, 128),
          c(),
          J.uae(c("a"), !1, j(B1(1e-4, 2, 1.2, .4))),
          (() => {
            let e,
              i,
              n,
              m,
              f,
              h,
              u,
              d,
              g,
              v,
              p,
              b,
              S,
              a,
              t,
              l,
              r = !0,
              s = [],
              c = () => {
                b4.innerHTML = "Music: " + r, l && (I || !r ? l.disconnect() : l.connect(t.destination));
              },
              o = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                Z = [B1(G1, 55, e, 1.732051), B1(55, 181, e, 1.732051)],
                  G = B1(G1, 181, e, 1.732051),
                  m = d = void 0,
                  s.length =
                    C =
                    a =
                    b =
                    S =
                    i1 =
                    n1 =
                      0,
                  document.hidden && A(!0);
              },
              A = e => {
                if (I !== e) {
                  if (I = e, o(), document.body.className = e ? "l m" : "l", e) {
                    try {
                      document.exitFullscreen().catch(() => 0), document.exitPointerLock();
                    } catch {}
                  }
                  c();
                }
              },
              M = e => {
                try {
                  t || (t = new AudioContext(), (l = t.createBufferSource()).buffer = Y, l.loop = !0, l.start()),
                    document.body.requestFullscreen().catch(() => 0);
                } catch {}
                A(!1), T = e;
              },
              k = (e, a) => e.buttons[a]?.pressed || 0 < e.buttons[a]?.value ? 1 : 0;
            oncontextmenu = () => !1,
              b1.onclick = () => M(),
              b2.onclick = () => M(1),
              b5.onclick = () => A(!0),
              b4.onclick = () => {
                r = !r, c();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
              },
              onclick = e => {
                if (!I && (e.target === hC && (C = 1), T)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let a;
                e.repeat
                  || (a = {
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
                    (s[a] = !!e.type[5] && !0) && (0 === a && (C = 1), 1 === a && A(!0)));
              },
              onmousemove = ({ movementX: e, movementY: a }) => {
                T && (e || a) && (N += .1 * e, u1 += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!I) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    T && e > hC.clientWidth / 2
                      ? void 0 === d && (g = 0, h = e, u = a, d = t, p = u1, v = N)
                      : void 0 === m && (f = 0, i = e, n = a, m = t);
                  }
                  e = o1;
                }
              },
              hC.ontouchmove = l => {
                if (!I) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    var r, s, c, o;
                    d === t && (u1 = p + (a - u) / 2.3, N = v + (e - h) / 2.3, g = 1),
                      m === t
                      && (t = (i - e) / 19,
                        r = P(t),
                        c = P(s = (n - a) / 19),
                        (o = .3 < z1(r, c)) && (f = 1),
                        b = W(t, -1) * (o && .2 < r),
                        S = W(s, -1) * (o && .2 < c),
                        2 < r && (i = 19 * (t < 0 ? -1 : 1) + e),
                        2 < c && (n = 19 * (s < 0 ? -1 : 1) + a));
                  }
                }
              },
              hC.ontouchend = a => {
                let t;
                document.activeElement === document.body && a.preventDefault();
                for (let e of a.changedTouches) {
                  e.identifier === d
                    ? (d = void 0, g || (t = 1), g = 0)
                    : e.identifier === m
                    ? (m = void 0, S = b = 0, f || (t = 1), f = 0)
                    : t = 1;
                }
                a.target === hC && t && e && .02 < (a = o1 - e) && a < .7 && (C = 1);
              },
              $ = () => {
                i1 = S + (s[4] ? 1 : 0) - (s[5] ? 1 : 0), n1 = b + (s[2] ? 1 : 0) - (s[3] ? 1 : 0);
                let e = navigator.getGamepads()[0];
                e
                  && (T && (u1 += 80 * R * S1(e.axes[3], .3), N += 80 * R * S1(e.axes[2], .3)),
                    i1 += k(e, 12) - k(e, 13) - S1(e.axes[1], .2),
                    n1 += k(e, 14) - k(e, 15) - S1(e.axes[0], .2),
                    k(e, 9) && A(!0),
                    (e = k(e, 3) || k(e, 2) || k(e, 1) || k(e, 0)) && !a && (C = 1),
                    a = e);
              },
              document.onvisibilitychange = onblur = onresize = o,
              A(!0);
          })(),
          (() => {
            let s,
              c,
              o,
              i,
              n,
              m,
              f,
              h,
              u,
              d,
              g,
              v,
              p,
              b,
              S,
              A,
              M = 0,
              k = 1,
              I = 2,
              j = 15,
              D = (e, a, t, l) => k1(e, a, k || (W(P(a - e) ** .5 - t) + 1 / 7) * F1(1.5 * l)),
              Y = () => U((I ? L[d1] : E[28 !== M ? M : 0]).l),
              C = e => {
                1 < I ? (U(L[d1].l).multiplySelf(L[d1].D), K(0, .9 < a1 ? 15 : 1, -2.4)) : (Y(), K(b, S, A)),
                  e && (n = (F - X) / R, m = (Q - H) / R),
                  X = F,
                  q = O,
                  H = Q;
              };
            t1 = () => {
              let e, a, t, l, r;
              for (
                C(d),
                  J.r9r(0, 0, 128, 128, 6408, 5121, _1),
                  (() => {
                    let a, t, l, r, s, c = 0, o = 0, i = 0, n = 0, e = 0, m = 0, f = -1;
                    for (a = 0; a < 36; ++a) {
                      for (t = 512 * a, l = 96; l < 416; l += 4) {
                        for (r = 0; r < 2; ++r) {
                          let e = _1[t + l + r + 2];
                          (s = _1[t + l + r]) > n && (n = s),
                            s + e && (f < 0 || f === a) && (f = a, e === d ? ++c : o && o !== e || (o = e, ++i));
                        }
                      }
                    }
                    for (d = f < 0 ? 0 : i > 2 * c ? o : d, c = 36; c < 128; ++c) {
                      for (
                        a =
                          f =
                          i =
                          o =
                            0,
                          t = 512 * c,
                          l = 0;
                        l < 128;
                        ++l
                      ) {
                        s = _1[r = t + 4 * l],
                          l < 64 ? s > o && (o = s) : s > i && (i = s),
                          (s = _1[2 + r]) > f && (f = s),
                          s = _1[1 + r],
                          64 < l ? s > o && (o = s) : s > i && (i = s),
                          (s = _1[3 + r]) > a && (a = s);
                      }
                      (i -= o) * i > e * e && (e = i), (a -= f) * a > m * m && (m = a);
                    }
                    e *= .7,
                      h = W(1 - .01 * z1(P(e), P(m)), .3),
                      e /= 255,
                      n /= 255,
                      m /= 255,
                      Y().invertSelf(),
                      K(e, n, m, 0),
                      b += F,
                      S += n,
                      A += Q,
                      C();
                  })(),
                  !I && d === M || (M = d, Y().invertSelf(), K(X, q, H), b = F, S = O, A = Q, I = I && (d ? 0 : 1)),
                  (X < -20 || H < 109 ? -25 : -9) > q && (I = 2),
                  1 === d && (L[15].j = X < -15 && H < 0 ? 1 : 0),
                  i = V(i, l1 * (30 < d && d < 35), 2),
                  g = D(g, X, .5, 1),
                  v = D(v, u = k1(V(u, q, 2), q, I || 8 * P(u - q)), 2, 1),
                  p = D(p, H, .5, 1),
                  T
                    ? (e = I + F1(18), m1 = k1(m1, X, e), h1 = k1(h1, H, e), f1 = k1(f1, 1.6 + u, e), N = A1(N))
                    : (m1 = D(m1, g, 1, 2 + i),
                      h1 = D(h1, p + -18 + 5 * i, 1, 2 + i),
                      f1 = D(f1, z1(v + W((-60 - H) / 8, 0, 20) + 13 + 9 * i, 6), 4, 2),
                      e = w1(-6, -P(p - h1)),
                      N = M1(N, 90 - A1(x1(e, a = g - m1) / J1), k + F1(10)),
                      u1 = M1(u1, 90 - x1(j1(e, a), f1 - v) / J1, k + F1(10))),
                  u1 = W(u1, -87, 87),
                  k = 0,
                  e = W(i1, -1),
                  a = W(n1, -1),
                  t = S1(j1(e, a) ** .5, .1),
                  l = x1(e, a),
                  t && (s = 90 - l / J1),
                  c = M1(c, s, F1(8)),
                  o = V(o, t, 10),
                  _(X, .06 * h * o * z(18.2 * B) + u, H).rotateSelf(0, c),
                  r = 0;
                r < 2;
                ++r
              ) {
                let e = 9.1 * B - y * r;
                U(E[53].l, _(0)).translateSelf(0, o * W(.45 * w(e - y / 2))).rotateSelf(o * w(e) * .25 / J1, 0);
              }
              j = d ? 5 : V(j, I ? 13 : 19 - 2 * w1(0, q + 10), 2.2),
                n = d || I ? 0 : V(n, 0, 3),
                m = d || I ? 0 : V(m, 0, 3),
                e = (f = I ? 0 : V(f, d ? 7 * W(2 * t) * h : 0, d ? 9 : 1)) * t * P(e) * w(l),
                a = f * t * P(a) * z(l),
                t = R * (n + (z(l = T ? (180 + N) * J1 : 0) * a - w(l) * e)),
                r = R * -j,
                e = R * (m + (w(l) * a + z(l) * e)),
                Y().invertSelf(),
                K(t, r, e, 0),
                b += F,
                S += r,
                A += Q,
                C();
            };
          })(),
          requestAnimationFrame(r);
      }
    },
    t = new Image();
  t.onerror = t.onload = d,
    t.src = a,
    (r => {
      let E = 0,
        s = () => {
          let b = 0,
            e = f => {
              let h,
                r,
                s,
                c,
                u,
                o,
                i = 0,
                n = 0,
                d = [],
                m = new Int32Array(768 * f),
                g = 2 ** (t - 9) / f,
                v = y * 2 ** (l - 8) / f,
                p = q * f & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * E + l];
                  e < 32;
                  ++e
                ) {
                  let t = (32 * l + e) * f;
                  for (c = 0; c < 4; ++c) {
                    if (h = 0, a && (h = S[a - 1].charCodeAt(e + 32 * c) - 40, h += 0 < h ? 106 : 0), h) {
                      if (!(u = d[h])) {
                        let l,
                          r,
                          s = 0,
                          c = 0,
                          o = u = h,
                          i = E < 2
                            ? e => e % 1 * 2 - 1
                            : Q1,
                          n = E < 2
                            ? E < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : Q1,
                          m = new Int32Array(C + T + N);
                        for (let a = 0, t = 0; C + T + N > a; ++a, ++t) {
                          let e = 1;
                          C > a ? e = a / C : C + T > a || (e = (1 - (e = (a - C - T) / N)) * 3 ** (-F / 16 * e)),
                            t < 0
                            || (t -= 4 * f,
                              r = .00396 * 2 ** ((o + M - 256) / 12),
                              l = .00396 * 2 ** ((o + j - 256) / 12) * (1 + (E ? 0 : .0072))),
                            m[a] = 80
                                * (i(s += r * e ** (k / 32)) * A + n(c += l * e ** (D / 32)) * I
                                  + (Y ? (2 * y1() - 1) * Y : 0))
                                * e | 0;
                        }
                        u = d[u] = m;
                      }
                      for (let e = 0, a = 2 * t; u.length > e; ++e, a += 2) m[a] += u[e];
                    }
                  }
                  for (let e, a = 0; f > a; ++a) {
                    u = 0,
                      ((e = m[c = 2 * (t + a)]) || s)
                      && (r = .00308 * O,
                        1 !== E && 4 !== E || (r *= w(g * c * y * 2) * H / 512 + .5),
                        r = 1.5 * w(r),
                        i += r * n,
                        n += r * (o = (1 - Q / 255) * (e - n) - i),
                        e = 4 === E ? n : 3 === E ? o : i,
                        E || (e = (e *= 22e-5) < 1 ? -1 < e ? w(e / 4 * y * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        s = 1e-5 < e * e,
                        u = e * (1 - (o = w(v * c) * R / 512 + .5)),
                        e *= o),
                      p > c || (u += m[1 + c - p] * X / 255, e += m[c - p] * X / 255),
                      L[o = b + c >> 1] += (m[c] = u) / 65536,
                      P[o] += (m[++c] = e) / 65536;
                  }
                }
              }
              b += 768 * f;
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
            ][E],
            [A, M, k, I, j, D, Y, C, T, a, F, t, O, Q, B, R, l, X, q, H] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][E],
            N = 4 * a ** 2;
          e(5513), e(4562), e(3891), O1(++E < 5 ? s : r);
        },
        L = (Y = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
        P = Y.getChannelData(1);
      O1(s);
    })(() => {
      let e = [-110, -100, -92, -82, -106, -97, -88],
        a = e => o(w((e /= 11) * y), e).rotateSelf(10 * e).scaleSelf(1.002 - e, 1, 1.002 - e),
        t = e =>
          v(
            i(n().slice(0, -1), o(0, -e / 2).scale(6, e - 1, 2.2)),
            i(n().slice(0, -1), o(0, -e / 2 - 4).scale(4, e - 5, 4)),
            i(n(28, 1), o(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        l = (O1(() => {
          let t = 0,
            r = [],
            c = [],
            o = [],
            i = [],
            s = [],
            n = [],
            m = new Int32Array(8),
            f = new Map(),
            h = new Int32Array(m.buffer, 0, 5),
            u = new Float32Array(m.buffer);
          E.map((e, a) => {
            let s,
              l = e => {
                let { x: a, y: t, z: l } = s[e], r = (u[0] = a, u[1] = t, u[2] = l, f.get(e = "" + (s.A ? h : m)));
                return void 0 !== r
                  ? (a = 3 * r, i[a] = (i[a++] + m[5]) / 2, i[a] = (i[a++] + m[6]) / 2, i[a] = (i[a] + m[7]) / 2)
                  : (f.set(e, r = f.size), c.push(a, t, l, u[3]), o.push(m[4]), i.push(m[5], m[6], m[7])),
                  r;
              };
            for (s of (u[3] = 55 < a ? -28 : a, e.i)) {
              let { x: e, y: a, z: t } = H1(s);
              m[4] = 0 | s.s, m[5] = 32767 * e, m[6] = 32767 * a, m[7] = 32767 * t;
              for (let e = 2, a = l(0), t = l(1); s.length > e; ++e) r.push(a, t, t = l(e));
            }
            e.i = 0, e.B = t, e.C = t = r.length;
          }),
            [b, J].map(e => {
              e.b11(34962, e.c1b()),
                e.b2v(34962, new Float32Array(c), 35044),
                e.v7s(0, 4, 5126, !1, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Int16Array(i), 35044),
                e.v7s(1, 3, 5122, !0, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Uint32Array(o), 35044),
                e.v7s(2, 4, 5121, !0, 0, 0),
                e.b11(34963, e.c1b()),
                e.b2v(34963, new Uint16Array(r), 35044),
                e.e3x(0),
                e.e3x(1),
                e.e3x(2);
            });
          try {
            let [e, a, t, l, r] = JSON.parse(localStorage["Dante-22"]);
            s = e, n = a, d1 = t, M = l, B = r;
          } catch {}
          L.map((e, a) => e.h = e.g = e.j = 14 !== a && s[a] ? 1 : 0),
            v1.map((e, a) => e.j = n[a] ? 1 : 0),
            X1(),
            a1 = e1 || 14 !== d1 ? 1 : 0,
            O1(d);
        }),
          m(11, e => C1(D1(Y1(16), a(e), f(1, 1, .8, .2)).reverse(), D1(Y1(16), a(e + 1), f(1, 1, .8, .2)), 1)).flat()),
        r = v(
          i(n(), o(0, -.5, 1).scale(1.15, 1.2, 6.5), f(.25, .25, .35, .3)),
          v(
            i(n(3), o(0, 0, -5.5).scale(3, 2), f(.6, .3, .4, .3)),
            i(n(), o(0, 0, -3.65).scale(2.5, 3), f(.6, .3, .4, .3)),
          ),
          ...[-1, 1].map(e => i(n(), o(1.2 * e, -.5, 1).scale(.14, .3, 6.5), f(.7, .2, 0, .3))),
        ),
        s = [
          i(n(), o(0, -3).scale(11, 1.4, 3), f(.9, .9, .9, .2)),
          i(n(), o(0, -2.2).scale(7.7, .5, 4), f(.5, .5, .5, .2)),
          m(12, e => i(n(), p.translate(e - 5.5, 4.4).scale(.1, .1, 2), f(.6, .5, .3, .2))).flat(),
          i(
            v(
              i(n(6), p.rotate(90).scale(6, 8, 6)),
              i(n(4, 0, .01), o(0, 6).scale(12, 2, .75).rotate(0, 45)),
              i(n(6), p.rotate(90).scale(5, 12, 5)),
              ...[-5, 0, 5].map(e => i(n(5), o(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
            ),
            p,
            f(.3, .6, .6, .3),
          ),
        ].flat();
      for (
        h(),
          c([p1.slice(1)], o(-2).scale3d(3).rotate(90, 0)),
          h(),
          u(o(-5.4, 1.5, -19).rotate(0, -90)),
          [-15, 15].map((e, a) => {
            c(n(), o(0, 0, a ? 22 : -23).scale(3, 1, 8), f(.9, .9, .9, .2)),
              c(n(), o(0, 6.3, e).scale(4, .3, 1), f(.3, .3, .3, .4)),
              c(n().slice(0, -1), o(0, 1, e).scale(3, .2, .35), f(.5, .5, .5, .3));
          }),
          c(n(), o(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), f(.8, .8, .8, .2)),
          c(n(), o(3, 1.5, -20).scale(.5, 2, 5), f(.7, .7, .7, .2)),
          c(n(5), o(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), f(.6, .3, .3, .4)),
          c(n(), o(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), f(.75, .75, .75, .2)),
          c(v(
            K1(
              v(
                i(n(6, 0, 0, .3), o(0, -.92).scale(13, 2, 13), f(.8, .8, .8, .2)),
                i(n(), p.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), f(.5, .5, .5, .5)),
              ),
              i(
                n(),
                p.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
                f(.8, .2, .2, .5),
              ),
              i(n(6), o(0, -8).scale(9, 8, 7), f(.2, .1, .4, .5)),
              i(n(6, 0, 0, .3), o(8, -4, -4).scale(14, 2, 13), f(.7, .7, .7, .2)),
            ),
            i(n(6), o(15.5, -1.5, 3.5).scale(3.5, 1, 3.5), f(.5, .5, .5, .5)),
            i(n(5, 0, 1.5), o(0, 1).scale(4.5, .3, 4.5), f(.7, .5, .9, .2)),
            i(n(5), p.scale(5, 30, 5), f(.4, .2, .6, .5)),
          )),
          u(o(15, -2, 4)),
          c(n(), o(-18.65, -3, 55).scale(2.45, 1.4, 2.7), f(.9, .9, .9, .2)),
          u(o(-55, -1.1, 46).rotate(0, 90)),
          c(n(7), o(-57, -2.6, 46).scale(4, 1, 4), f(.8, .8, .8, .3)),
          c(n(6), o(-61.3, -2.4, 49).scale(3, 1, 5), f(.4, .6, .6, .3)),
          c(s, o(-53, 0, 55)),
          c(n(), o(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), f(.7, .7, .7, .2)),
          c(n(3, 0, -.5), o(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), f(.8, .8, .8, .2)),
          c(v(
            i(n(), o(-100, 1, 63).scale(7.5, 4), f(.5, .5, .5, .4)),
            i(n(), o(-100, 0, 63).scale(2, 2, 4), f(.5, .5, .5, .4)),
            i(n(20, 1), o(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), f(.5, .5, .5, .4)),
          )),
          c(v(
            K1(
              i(n(), o(-100, -2.6, 70).scale(3, 1.1, 7), f(.8, .8, .8, .2)),
              i(n(), o(-100, -2.4, 55).scale(8, .9, 8), f(.8, .8, .8, .2)),
              i(n(), o(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), f(.8, .8, .8, .2)),
              i(n(6), o(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), f(.6, .6, .6, .3)),
              i(n(), o(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), f(.8, .8, .8, .2)),
              i(n(), o(-100, .42, 92).scale(3, 1.1, 4.1), f(.8, .8, .8, .2)),
              i(n(), o(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), f(.8, .8, .8, .2)),
            ),
            i(n(8), o(-100, -1, 55).scale(7, .9, 7), f(.3, .3, .3, .4)),
            i(n(8), o(-100, -2, 55).scale(4, .3, 4), f(.4, .4, .4, .5)),
            i(n(8, 0, -3.1), o(-100, -3, 55).scale(.4, 1, .4), f(.4, .4, .4, .5)),
          )),
          p1.map(({ x: a, z: t }) => {
            c(n(6), o(3 * a, 3, 15 * t).scale(.7, 4, .7), f(.6, .3, .3, .4)),
              c(n(6), o(7 * a - 100, -3, 7 * t + 55).scale(1, 8.1), f(.6, .15, .15, .8)),
              [4, -.4].map(e => c(n(6), o(7 * a - 100, e, 7 * t + 55).scale(1.3, .5, 1.3), f(.4, .2, .2, .8))),
              [1.5, 8].map(e =>
                c(n(15, 1), o(9 * a - 38.9, e - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), f(.6, .6, .6, .3))
              ),
              c(n(14, 1).slice(0, -2), o(9 * a - 38.9, -18, 11 * t + 17).scale(1, 14.2), f(.25, .25, .25, 1));
          }),
          m(7, e => {
            c(
              n((23 * e + 1) % 5 + 5, 0, .5),
              o(5 * w(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1.1 + e / 6, 5 + e / 3),
              f(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
            );
          }),
          c(n(), o(-87, -9.5, 24).scale(7, 1, 3), f(.4, .5, .6, .4)),
          c(n(4), o(-86, -9.2, 27).scale(5, 1, 5), f(.5, .6, .7, .3)),
          c(n(12, 1), o(-86, -9, 31).scale(1.5, 1, 1.5), f(.3, .3, .4, .1)),
          u(o(-86, -7.5, 31)),
          c(n(5), o(-38.9, -11.1, 10).scale(2, 1.2, 2), f(.2, .4, .7, .3)),
          c(v(
            K1(
              i(n(), o(-38.9, -11.3, 17).scale(11, 1, 13), f(.3, .4, .6, .3)),
              i(n(5), o(-38.9, -11.1, 17).scale(9, 1, 9), f(0, .2, .3, .5)),
            ),
            i(n(5), o(-38.9, -11.1, 17).scale3d(5.4), f(0, .2, .3, .5)),
          )),
          u(o(-38.9, -9.4, 10)),
          c(
            v(
              K1(
                i(n(6), o(0, 0, -18).scale(15, 1.3, 15), f(.7, .7, .7, .3)),
                i(n(6), p.scale(4, 1.2, 8), f(.45, .4, .6, .3)),
              ),
              ...m(6, a =>
                m(
                  6,
                  e =>
                    i(
                      n(6),
                      o(4.6 * e - (1 & a ? 10 : 12), 0, 4.6 * a + 2 * w(4 * e) - 32).scale3d(2),
                      f(.7, .7, .7, .3),
                    ),
                )).flat(),
            ),
            o(-38.9, -11.3, -1),
          ),
          c(n(5), o(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), f(.8, .1, .25, .4)),
          u(o(-84, -.7, 85).rotate(0, 45)),
          c(
            v(i(n(), o(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...e.map(e => i(n(), o(e, .05, -3).scale(1.35, 2, 9)))),
            p,
            f(.5, .5, .6, .2),
          ),
          c(n(), o(-96.5, 1, -2).scale(19, .3, .3), f(.5, .5, .6, .2)),
          u(o(-116, -1.4, -18).rotate(0, 180)),
          c(n(6), o(-116, -2.6, -16.5).scale(3.2, .8, 3), f(.6, .5, .7, .2)),
          c(n(), o(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), f(.8, .8, .8, .2)),
          c(n().slice(0, -1), o(-115.5, -17, -12).scale(.5, 15, 2.2), f(.6, .6, .6, .3)),
          c(n(8).slice(0, -2), o(-114, -17, -2).scale(2, 15, 2), f(.6, .6, .6, .3)),
          c(n(8).slice(0, -2), o(-79, -17, -2).scale(2, 15, 2), f(1, 1, 1, .3)),
          c(n().slice(0, -1), o(-77, -17, -50.5).scale(2.2, 15, .5), f(.6, .6, .6, .3)),
          c(v(
            i(n(12).slice(0, -1), o(-77, -14.5, -12).scale(4, 17.5, 4), f(.7, .7, .7, .2)),
            i(n(12), o(-77, 3.1, -12).scale(3, 5, 3), f(.4, .5, .6, .2)),
            i(n(), o(-79, .1, -12).scale(3.5, 2, 1.3), f(.4, .5, .6, .2)),
            i(n(), o(-77, .1, -14).scale(1.5, 2, 2), f(.4, .5, .6, .2)),
          )),
          c(v(
            i(n(), o(-93, -5.8, -40).scale(9, 1, 5), f(.8, .8, .8, .1)),
            i(n(9), o(-98, -5.8, -40).scale(3, 8, 3), f(.7, .7, .7, .2)),
          )),
          c(n(), o(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), f(.6, .6, .6, .3)),
          c(n(9).slice(0, -1), o(-98, -18.4, -40).scale(2.5, 13.5, 2.5), f(.5, .5, .5, .3)),
          u(o(-98, -4.4, -40).rotate(0, 90)),
          [-1, 1].map((a, t) => {
            c(
              v(
                i(n(), o(-4 * a, 3.5, -.5).scale(4, 4, .7), f(.5, .5, .5, .4)),
                i(n(5), o(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), f(.6, .24, .2, .5)),
                i(n(), p.scale(3, 3, 10), f(.6, .24, .2, .5)),
                i(n(5), o(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), f(.6, .24, .2, .5)),
                i(n(32, 1), o(0, 3, -5).scale(3, 4, 10).rotate(90, 0), f(.6, .24, .2, .5)),
              ),
              o(a - 100, .7, 97),
            ),
              c(n(12, 1), o(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), f(.6, .24, .2, .5)),
              [7.2, 1.5].map(e => c(n(15, 1), o(-7.5 * a - 100, e + .7, 96).scale(1.1, .5, 1.1), f(.5, .24, .2, .4))),
              c(l, o(-8 * a, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * a + 90)),
              c(l, o(-5 * a - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90)),
              m(5, e => c(l, o(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2)));
          }),
          c(v(
            i(n(), o(-82.07, .8, 106).scale(11, .9, 2.2), f(.7, .7, .7, .1)),
            i(n(45, 1), o(-81, .7, 106).scale3d(7.7), f(.7, .7, .7, .1)),
          )),
          c(n(), o(-58, 1, 106).scale(2, .65, 2), f(.7, .7, .7, .2)),
          c(n(), o(-50.7, 1, 99).scale(2, .65, 1), f(.7, .7, .7, .2)),
          c(n(), o(-42, .4, 91).scale(5, 1, 2.5), f(.7, .7, .7, .3)),
          c(n(), o(-34.2, .4, 91).scale(3, 1, 3), f(.7, .7, .7, .3)),
          c(n(5), o(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), f(.2, .5, .5, .6)),
          u(o(-34, 2.7, 96).rotate(-12, 0)),
          c(v(
            K1(
              i(n(), o(-101.5, .7, 93.5).scale(10.5, 1, 2), f(.7, .7, .7, .2)),
              i(n(6, 0, 0, .6), o(-100, .7, 105.5).scale(8, 1, 11), f(.7, .7, .7, .2)),
            ),
            i(n(5), o(-100, .7, 113).scale(4, 3, 4), f(.7, .7, .7, .2)),
          )),
          m(3, e => {
            c(t(16), o(-77, -9, -12 * e - 20).rotate(0, 90), f(.6, .6, .6, .3)),
              c(t(16), o(12 * e - 109, -9, -12), f(.6, .6, .6, .3)),
              c(
                t(24.7 - .7 * (1 & e)),
                o(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? f(.5, .5, .5, .3) : f(.35, .35, .35, .5),
              );
          }),
          c(v(
            K1(
              i(n(), o(0, 16, 111).scale(3, 1, 3.8), f(.5, .3, .3, .4)),
              i(n(6, 0, 0, .3), o(0, -.92, 95).scale(14, 2, 14), f(.8, .8, .8, .2)),
              i(n(), o(0, 16, 110.5).scale(12, 1, 3), f(.5, .3, .3, .4)),
            ),
            i(n(5), o(0, 0, 95).scale3d(6), f(.3, .3, .3, .5)),
            i(n(5), o(0, 16, 103.5).scale(5.5, 5, 5.5), f(.5, .3, .3, .4)),
          )),
          u(o(0, 1.7, 82).rotate(0, 180)),
          c(n(5).slice(0, -1), o(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), f(.5, .3, .3, .4)),
          c(n(6), o(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), f(.5, .6, .7, .3)),
          c(n(), o(0, 16, 127.8).scale(1.5, 1, .7), f(.5, .6, .7, .3)),
          c(n(7), o(0, 15.1, 133).scale(5, 2, 5), f(.4, .5, .6, .4)),
          g(o(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          g(o(0, 2.8), [5, 10, 3], [-5, 10, 3], ...Y1(18).map(({ x: e, z: a }) => [7 * e, 10 * a, 4.5 - 2 * P(e)])),
          g(o(0, 3, 95), ...Y1(9).map(({ x: e, z: a }) => [9 * e, 9 * a, 4])),
          g(o(0, 19, 134), [0, 0, 3.5]),
          g(o(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          g(o(-89, .2, 80), [0, 0, 6]),
          g(o(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          g(o(-115, .2, -12), [0, 0, 3.5]),
          g(o(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
          h(),
          c(n(5), o(0, -.2).scale(5, 1, 5), f(.6, .65, .7, .3)),
          u(o(0, 1.2)),
          m(2, () => {
            h(),
              p1.map(({ x: e, z: a }) => {
                c(n(11, 1).slice(0, -2), o(4 * e, 4, 4 * a).scale(.8, 3, .8), f(.5, .3, .7, .6)),
                  c(n(), o(4 * e, 7, 4 * a).scale(1, .3), f(.5, .5, .5, .3));
              }),
              c(v(
                i(n().slice(0, -1), p.scale(5, 1, 5), f(.8, .8, .8, .3)),
                ...[-1, 1].map(e => i(n(25, 1), o(5 * e, .2).rotate(-30 * e).scale(4, 1, 3), f(.8, .8, .8, .3))),
              )),
              c(n(), o(0, -3).scale(8, 2, 8), f(.4, .4, .4, .3));
          }),
          h(),
          c(v(
            K1(
              i(n(), p.scale(1.5, 1, 5), f(.9, .9, .9, .2)),
              i(n(), o(0, -2).scale(2, 3.2, 1.9), f(.3, .8, .5, .5)),
              i(n(6), p.scale(4, 1, 5), f(.9, .9, .9, .2)),
              i(n(16, 1, 0, 4), p.scale(1, 1, 1.5).rotate(0, 90), f(.9, .9, .9, .2)),
            ),
            i(n(), p.scale(1.3, 10, 1.3), f(.2, .7, .4, .6)),
          )),
          g(o(0, 2.8), [0, 0, 4.5]),
          h(),
          c(n(3), o(-23, -1.7, 55.8).scale(5, .7, 8.3), f(.3, .6, .6, .2)),
          c(n(8), o(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), f(.8, .8, .8, .2)),
          c(n(), o(-23, -3, 55).scale(5.2, 1.7, 3), f(.5, .5, .5, .3)),
          c(n(), o(-23, -2.2, 62).scale(3, 1, 4), f(.5, .5, .5, .3)),
          u(o(-23, -.5, 66.5)),
          h(),
          c(n(), o(-22.55, -3, 55).scale(1.45, 1.4, 2.7), f(.7, .7, .7, .2)),
          c(v(i(n(), p.scale(3, 1.4, 2.7)), i(n(), p.scale(1.2, 8, 1.2))), o(-33, -3, 55), f(.7, .7, .7, .2)),
          h(),
          c(v(i(n(), p.scale(3, 1.4, 2.7)), i(n(), p.scale(1, 3))), o(-27, -3, 55), f(.9, .9, .9, .2)),
          c(n(), o(-39, -3, 55).scale(3, 1.4, 2.7), f(.9, .9, .9, .2)),
          h(),
          c(n(6), o(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), f(.7, .7, .7, .4)),
          h(),
          [0, 12, 24].map(e =>
            c(n(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), f(.2, .5, .6, .2))
          ),
          h(),
          [6, 18].map(e =>
            c(n(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), f(.1, .4, .5, .2))
          ),
          h(),
          c(n(5), o(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), f(.3, .3, .5, .5)),
          c(n(5).slice(0, -1), o(-38.9, 2, 17).scale(.6, 2.5, .6).skewY(25), f(.6, .3, .5, .5)),
          c(
            v(
              i(n(5), o(0, 2).scale(5, 7, 5).skewY(8)),
              i(n(5), o(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
              i(n(), p.scale(2, 8, 3)),
            ),
            o(-38.9, -11.3, 17),
            f(.2, .4, .5, .5),
          ),
          g(o(-39.1, -.6, 17).rotate(11), ...Y1(15).map(({ x: e, z: a }) => [3 * e, 3 * a, 1.2])),
          e.map((e, a) => {
            a % 2 || 6 <= a || h(), c(r, o(e, 1.9, -12));
          }),
          m(4, e => {
            h(),
              c(
                n(6),
                o(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                  2.6,
                  1,
                  2.5,
                ),
                f(.5 - e / 8, e / 12 + .5, .7, .3),
              );
          }),
          [f(.1, .55, .45, .2), f(.2, .5, .5, .3), f(.3, .45, .55, .4)].map((e, a) => {
            h(),
              c(n(), o(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
              2 === a && c(n(), o(-29.1, .4, 91).scale(2.1, 1, 3), f(.7, .7, .7, .3)),
              1 === a && c(n(), o(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), f(.6, .6, .7, .3));
          }),
          h(),
          c(n(5), p.scale(5, 1.1, 5), f(.5, .3, .3, .4)),
          c(n(5), p.scale(5.5, .9, 5.5), f(.25, .25, .25, .4)),
          u(o(0, 1.5, -1).rotate(0, 180)),
          m(4, a => {
            h(),
              m(
                7,
                e =>
                  c(i(
                    n(8, 1).slice(0, -1),
                    o((2 < a ? 3.5 : 4) * (e / 6 - .5), 3).scale(.2, 2 < a ? 4 : 3, .2),
                    f(.3, .3, .38),
                  )),
              );
          }),
          h(),
          c(s),
          h(),
          c(n(15, 1), o(-7.5).rotate(0, 90).scale(3, 2.3, 3), f(.4, .4, .4, .3)),
          c(n(10).slice(0, -1), o(-7.5, 2.4).rotate(0, 90).scale(2, .1, 2), f(.3, .8, .7, .3)),
          c(n(5).slice(0, -1), o(-7.5, 2.7).rotate(0, 90).scale(1, .2), f(.5, .5, .5, .5)),
          u(o(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
          [-1, 1].map(e => c(l, p.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3))),
          c(v(i(n(10), p.scale(6, 2, 6), f(.1, .6, .5, .3)), i(n(10), p.scale(3.3, 6, 3.3), f(.1, .6, .5, .5)))),
          g(o(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
          h(),
          c(n(3), o(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), f(.5, .3, .3, .4)),
          [22, 30].map(e => {
            c(n(6), o(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), f(.7, .7, .7, .4)),
              c(n(), o(0, 6.2, e + 95).scale(.5, 11, .5), f(.5, .3, .3, .4));
          }),
          h(),
          c(v(
            i(n(28, 1), p.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
            i(n(), o(0, 0, -5.5).scale(1.5, 3, 2.7), f(.45, .45, .45, .2)),
          )),
          c(n(8).slice(0, -1), o(0, 2).scale(3, 1.5, 3).rotate(0, 22), f(.7, .7, .7, .1)),
          c(n(5).slice(0, -1), o(0, 2).scale(1, 2), f(.3, .3, .3, .2)),
          g(o(0, 3), ...Y1(14).map(({ x: e, z: a }) => [5.6 * e, 5.6 * a, 2])),
          h(),
          [-1, 1].map(e => c(l, p.rotate(0, 90).translate(-5 * e, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * e + 90))),
          c(v(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2).scale(9, 1.1, 2), f(.3, 0, 0, .3)),
          )),
          c(n(28, 1), p.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
          c(n(5).slice(0, -1), o(0, 1).scale(1, .2), f(.3, .3, .3, .2)),
          h(),
          c(v(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2, 7).scale(2, 1.1, 9), f(.3, 0, 0, .3)),
            i(n().slice(0, -1), o(7, 2).scale(9, 1.1, 2), f(.3, 0, 0, .3)),
          )),
          c(n(28, 1), p.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
          c(n(5).slice(0, -1), o(0, 1).scale(1, .2), f(.3, .3, .3, .2)),
          h(),
          c(v(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2, -7).scale(2, 1.1, 9), f(.3, 0, 0, .3)),
            i(n().slice(0, -1), o(7, 2).scale(9, 1.1, 2), f(.3, 0, 0, .3)),
          )),
          c(n(28, 1), p.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
          c(n(5).slice(0, -1), o(0, 1).scale(1, .2), f(.3, .3, .3, .2)),
          m(2, () => {
            h(),
              c(v(
                i(n(30, 1, 1.15, 1), o(0, -3).scale(3.5, 1, 3.5), f(.7, .4, .25, .7)),
                i(n(), o(4, -1.2).scale3d(2), f(.7, .4, .25, .3)),
                i(n(30, 1, 1.3, 1), o(0, -2.5).scale(2.6, 1, 3), f(.7, .4, .25, .2)),
              )),
              u(o(0, -3, 4));
          }),
          e = 0;
        e < 16;
        ++e
      ) {
        h(),
          c(n(6, 1).slice(0, -1), p.scale(.12, 1.2, .12), f(.3, .3, .5, .1)),
          c(n(9, 1), o(0, .8).scale(.2, .3, .2), f(.7, 1, .2)),
          c(n(3), o(0, -1).rotate(90, 90).scale(.3, .4, .3), f(.2, .2, .2, .1));
      }
      h(),
        c(T1(20), o(0, 1).scale3d(.5), f(1, .3, .4)),
        c(T1(30), p.scale(.65, .8, .55), f(1, .3, .4)),
        c(n(), o(0, .9, .45).scale(.15, .02, .06), f(.3, .3, .3)),
        [-1, 1].map(e => {
          c(l, p.rotate(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), f(1, 1, .8)),
            c(
              i(v(n(15, 1), i(n(), o(0, 0, 1).scale(2, 2, .5))), p.rotate(-90, 0).scale(.1, .05, .1), f(.3, .3, .3)),
              o(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
            );
        }),
        [-1, 1].map(e => {
          h(), c(n(20, 1), o(.3 * e, -.8).scale(.2, .7, .24), f(1, .3, .4));
        }),
        h(),
        c(n(6, 1).slice(0, -1), p.scale(.77, 1, .77), f(1, .3, .5)),
        h(),
        c(
          T1(28, 22, (e, a, t) => {
            let l = a / 22, r = e * y * 2 / 28, s = w(l ** .6 * y / 2);
            return e = l * l * w(e * y * .5) / 4,
              21 < a
                ? { x: t.A = 0, y: -.5, z: 0 }
                : { x: z(r) * s, y: z(l * y) - l - e, z: w(r) * s + w(e * y * 2) / 4 };
          }),
          p.scale(.7, .7, .7),
          f(1, 1, 1),
        ),
        [-1, 1].map(e => c(T1(10), o(.16 * e, .4, -.36).scale3d(.09)));
    });
});
