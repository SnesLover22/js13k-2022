let aa,
  ba,
  ea,
  ha,
  ja,
  ka,
  la,
  ma,
  na,
  oa = 0,
  qa = 0,
  b = 0,
  ra = 0,
  ta = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 1,
  d = 0.066;
const e = [],
  k = [],
  Ia = [],
  Ja = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Na = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Oa = {},
  Pa = { x: 0, y: 0, z: 0 };
var Qa = 0, Ra = 180;
const Sa = { x: 0, y: 0, z: 0 },
  Ya = () => {
    Ba = Ta(k[12].g, k[13].g);
    xa = n(n(xa, 0, 1 - Math.exp(-1 * d)), Va(xa + 60 * d), k[5].g - k[6].i);
    ta = n(n(ta, 0, 1 - Math.exp(-5 * d)), Va(ta + 56 * d), Ba);
    wa = n(n(wa, 0, 1 - Math.exp(-4 * d)), Va(wa + 48 * d), Ba);
    var a = 0.2 + 0.3 * p(2 * k[9].i - 1);
    Aa = n(Aa, k[9].i, 1 - Math.exp(-a * d));
    za = n(za, ya ? n(za, -9, 1 - Math.exp(-1.5 * d)) : Wa(b / 3), 1 - Math.exp(-1 * d));
    Ha && b > Ha && (Ha = 0, h4.innerHTML = "");
    k[0].j && 0.8 < k[0].g && (13 > oa
      ? (1 / 0 > Ha && (Ha = b + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), k[0].j = 0)
      : ya
        || (1 / 0 > Ha && (Ha = b + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ya = 1));
    for (const c of e) {
      c.h(Xa(c.l));
    }
    for (const c of k) {
      c.h();
    }
    for (const c of Ia) {
      c.h();
    }
  },
  Za = () => {
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
      ][oa = Ia.reduce((a, { j: c }) => a + c, 0)] + " / XIII";
  },
  $a = () => {
    localStorage.DanteSP22 = JSON.stringify([k.map(({ j: a }) => a), Ia.map(({ j: a }) => a), ra, b, Aa]);
  },
  bb = (
    a,
    c,
    g = ka / ja * ab,
    m = ab,
  ) => [g, 0, 0, 0, 0, m, 0, 0, 0, 0, (c + a) / (a - c), -1, 0, 0, 2 * c * a / (a - c), 0],
  fb = () => {
    let a, c, g, m, q, l, u, w, x, z, B, M, C, f, h = !0;
    const r = [],
      v = () => {
        aa || !h ? cb.disconnect() : cb.connect(db.destination);
        b4.innerHTML = "Music: " + h;
      },
      y = () => {
        m = w = void 0;
        r.length =
          ea =
          M =
          Da =
          C =
          f =
            0;
        hC.width = ja = innerWidth;
        hC.height = ka = innerHeight;
        document.hidden && I(!0);
      },
      I = (A, D = 0) => {
        if (aa !== A) {
          aa = A;
          ha = D;
          y();
          Za();
          document.body.className = A ? "l m" : "l";
          try {
            A
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), cb.start());
          } catch {
          }
          v();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => I(!1);
    b2.onclick = () => I(!1, 1);
    b5.onclick = () => I(!0);
    b4.onclick = () => {
      h = !h;
      v();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = A => {
      if (!aa && (A.target === hC && (ea = 1), ha)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = A => {
      let D;
      A.repeat
        || (D = !!A.type[5] && !0,
          A = {
            KeyA: 1,
            ArrowLeft: 1,
            KeyW: 3,
            ArrowUp: 3,
            KeyD: 2,
            ArrowRight: 2,
            KeyS: 4,
            ArrowDown: 4,
            KeyE: 0,
            Space: 0,
            Enter: 0,
            Escape: 5,
          }[A.code],
          (r[A] = D) && (0 === A && (ea = 1), 5 === A && I(!0)));
    };
    onmousemove = ({ movementX: A, movementY: D }) => {
      ha && (A || D) && (Ra += 0.1 * A, Qa += 0.1 * D);
    };
    hC.ontouchstart = A => {
      if (!aa) {
        for (let { pageX: D, pageY: J, identifier: K } of A.changedTouches) {
          ha && D > hC.clientWidth / 2
            ? void 0 === w && (x = 0, l = D, u = J, w = K, z = Ra, B = Qa)
            : void 0 === m && (q = 0, c = D, g = J, m = K);
        }
        a = qa;
      }
    };
    hC.ontouchmove = A => {
      if (!aa) {
        for (let { pageX: Y, pageY: F, identifier: E } of A.changedTouches) {
          var D, J, K, R, ca;
          w === E && (Ra = z + (Y - l) / 2.3, Qa = B + (F - u) / 2.3, x = 1);
          m === E
            && (E = (c - Y) / 20,
              D = (g - F) / 20,
              J = p(E),
              K = p(D),
              R = Math.atan2(D, E),
              ca = Wa(Math.hypot(D, E) - 0.5),
              C = 0.2 < J ? Math.cos(R) * ca : 0,
              f = 0.2 < K ? Math.sin(R) * ca : 0,
              (C || f) && (q = 1),
              2 < J && (c = Y + 20 * (0 > E ? -1 : 1)),
              2 < K && (g = F + 20 * (0 > D ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = A => {
      let D;
      document.activeElement === document.body && A.preventDefault();
      for (const J of A.changedTouches) {
        J.identifier === w
          ? (w = void 0, x || (D = 1), x = 0)
          : J.identifier === m
          ? (m = void 0, f = C = 0, q || (D = 1), q = 0)
          : D = 1;
      }
      A.target === hC && D && a && 0.02 < (A = qa - a) && 0.7 > A && (r[0] = !0);
    };
    la = () => {
      let A = f + (r[3] ? 1 : 0) - (r[4] ? 1 : 0),
        D = C + (r[1] ? 1 : 0) - (r[2] ? 1 : 0),
        J = navigator.getGamepads()[0];
      if (J) {
        const K = Y => R[Y]?.pressed || 0 < R[Y]?.value ? 1 : 0, R = J.buttons, ca = J.axes;
        J = K(3) || K(2) || K(1) || K(0);
        A += K(12) - K(13) - eb(ca[1], 0.2);
        D += K(14) - K(15) - eb(ca[0], 0.2);
        K(9) && I(!0);
        ha && (Qa += d * eb(ca[3], 0.3) * 80, Ra += d * eb(ca[2], 0.3) * 80);
        J && !M && (ea = 1);
        M = J;
      }
      Ca = Math.atan2(A, D);
      Da = eb(Wa(Math.hypot(A, D)), 0.05);
    };
    document.onvisibilitychange = onblur = onresize = y;
    I(!0);
  },
  t = (a, c = 1) => {
    const g = ma;
    c = {
      l: new DOMMatrix(),
      H: e.length,
      G: c,
      s: [],
      h() {
      },
    };
    return e.push(c), a(ma = c), ma = g, c;
  },
  H = (a, c = new DOMMatrix(), g) => ma.s.push(...G(a, c, g)),
  hb = a => {
    const c = new DOMMatrix(),
      g = new DOMMatrix(),
      m = ma,
      q = k.length,
      l = {
        j: 0,
        g: 0,
        i: 0,
        u: m,
        I: c,
        l: g,
        h() {
          Xa(g).multiplySelf(Xa(c).multiplySelf(m.l).multiplySelf(a)).rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1);
          l.g = n(l.g, l.j, 1 - Math.exp(-4 * d));
          l.i = n(l.i, l.j, 1 - Math.exp(-1 * d));
          ea && 3 > gb(c.transformPoint()) && (0.3 > l.g || 0.7 < l.g)
            && (l.j = l.j ? 0 : 1, q && 1 / 0 > Ha && (Ha = b + 1, h4.innerHTML = "* click *"), ra = q, $a());
        },
      };
    k.push(l);
    H(L(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
    H(L(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
    H(L(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), P(0.5, 0.5, 0.4));
  },
  lb = (a, ...c) => {
    let g = -1, m = 0, q = 0, l = 0, u = 0, w = 0, x = 1, z = 3;
    const B = new DOMMatrix(), M = ma, C = Ia.length, f = c.map(([D, J, K]) => ({ x: D, z: J, w: K }));
    let h = f[0], { x: r, z: v } = h, y = r, I = v;
    const A = {
      j: 0,
      l: B,
      h() {
        if (!A.j) {
          let ca, Y, F, E, S, N, O, W = 1, U = 1 / 0;
          for (const sa of f) {
            var { x: D, z: J, w: K } = sa;
            J = (D = Math.hypot(r - D, v - J)) - K;
            O ||= D < K;
            0 < J && U > J && (U = J, h = sa);
            W = ib(W, D / K);
          }
          O
            || ({ x: ca, z: Y, w: F } = h,
              E = r - ca,
              S = v - Y,
              N = Math.hypot(E, S),
              R = Math.atan2(-S, E),
              x && (q = (Math.random() - 0.5) * Math.PI / 2, z = Wa(z / (1 + Math.random()))),
              R += q,
              g = -Math.cos(R),
              m = Math.sin(R),
              0.1 < N && (N = ib(N, F) / (N || 1), r = E * N + ca, v = S * N + Y));
          x = O;
          z = n(z, 6 * (1 - W) + 3, 1 - Math.exp(-(W + 3) * d));
          R = r = n(r, r + g, 1 - Math.exp(-z * d));
          y = n(y, R, 1 - Math.exp(-z * d));
          R = v = n(v, v + m, 1 - Math.exp(-z * d));
          I = n(I, R, 1 - Math.exp(-z * d));
          l = jb(l, Math.atan2(y - u, I - w) / kb - 180, 1 - Math.exp(-3 * d));
          u = y;
          w = I;
          var R = Xa(B).multiplySelf(M.l).multiplySelf(a).translateSelf(y, 0, I).rotateSelf(0, l, 7 * Math.sin(1.7 * b))
            .transformPoint();
          1.6 > gb(R)
            && (A.j = 1,
              R = [
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
              ][oa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              1 / 0 > Ha && (Ha = b + (oa && 12 > oa ? 5 : 7), h4.innerHTML = R),
              Za(),
              $a());
        }
        A.j
          && Xa(B).multiplySelf(e[2].l).translateSelf(
            C % 4 * 1.2 - 1.7 + Math.sin(b + C) / 7,
            -2,
            1.7 * (C / 4 | 0) - 5.5 + p(C % 4 - 2) + Math.cos(b / 1.5 + C) / 6,
          );
      },
    };
    Ia.push(A);
  },
  pb = (a, c, g, m) => {
    var q = 0;
    let l = 0, u = 0, w = 1 / 0, x = -1 / 0, z = 1 / 0, B = -1 / 0, M = 1 / 0, C = -1 / 0;
    const f = 1.1 * (g - c);
    Xa(mb).scale3dSelf(f).multiplySelf((new DOMMatrix(bb(c, g))).multiplySelf(a).invertSelf());
    for (a = 0; 8 > a; ++a) {
      Oa.x = 4 & a ? 1 : -1;
      Oa.y = 2 & a ? 1 : -1;
      Oa.z = 1 & a ? 1 : -1;
      let { x: h, y: r, z: v, w: y } = mb.transformPoint(Oa);
      y *= f;
      q -= nb[a].x = (0 | h) / y;
      l -= nb[a].y = (0 | r) / y;
      u -= nb[a].z = (0 | v) / y;
    }
    Xa(mb).rotateSelf(298, 139).translateSelf(q / 8, l / 8, u / 8);
    for (q = 0; 8 > q; ++q) {
      const { x: h, y: r, z: v } = mb.transformPoint(nb[q]);
      w = ib(w, h);
      x = ob(x, h);
      z = ib(z, r);
      B = ob(B, r);
      M = ib(M, v);
      C = ob(C, v);
    }
    return M *= 0 > M ? m : 1 / m,
      C *= 0 < C ? m : 1 / m,
      Q(2 / (x - w), 2 / (B - z), 2 / (M - C)).translateSelf((x + w) / -2, (B + z) / -2, (M + C) / 2).multiplySelf(mb);
  },
  qb = (a, c) => Array.from(Array(a), (g, m) => c(m)),
  kb = Math.PI / 180,
  tb = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Wa = (a, c = 0, g = 1) => a < c ? c : g < a ? g : a,
  eb = (a, c) => p(a) > c ? a : 0,
  n = (a, c, g) => (0 < g ? 1 > g ? a + (c - a) * g : c : a) || 0,
  Ta = (a, c) => (a = Wa(a), n(a, 1 - a, c)),
  Va = a => Math.atan2(Math.sin(a *= kb), Math.cos(a)) / kb,
  jb = (a, c, g) => a + (2 * (c = (c - a) % 360) % 360 - c) * Wa(g) || 0,
  gb = ({ x: a, y: c, z: g }) =>
    Math.hypot(
      a
        - Pa.x,
      c - Pa.y,
      g - Pa.z,
    ),
  ub = ({ x: a, y: c, z: g }, m) => a * m.x + c * m.y + g * m.z,
  vb = a => {
    let c, g = 0, m = 0, q = 0, l = a.at(-1);
    for (c of a) {
      g += (l.y - c.y) * (l.z + c.z), m += (l.z - c.z) * (l.x + c.x), q += (l.x - c.x) * (l.y + c.y), l = c;
    }
    return c = Math.hypot(g, m, q), g /= c, m /= c, q /= c, { x: g, y: m, z: q, w: g * l.x + m * l.y + q * l.z };
  },
  zb = (
    a,
    c = wb,
    g = 0,
  ) => (g *= 16,
    c[g++] = a.m11,
    c[g++] = a.m12,
    c[g++] = a.m13,
    c[g++] = a.m14,
    c[g++] = a.m21,
    c[g++] = a.m22,
    c[g++] = a.m23,
    c[g++] = a.m24,
    c[g++] = a.m31,
    c[g++] = a.m32,
    c[g++] = a.m33,
    c[g++] = a.m34,
    c[g++] = a.m41,
    c[g++] = a.m42,
    c[g++] = a.m43,
    c[g] = a.m44,
    c),
  Xa =
    a => (a.m11 = 1,
      a.m12 = 0,
      a.m13 = 0,
      a.m14 = 0,
      a.m21 = 0,
      a.m22 = 1,
      a.m23 = 0,
      a.m24 = 0,
      a.m31 = 0,
      a.m32 = 0,
      a.m33 = 1,
      a.m34 = 0,
      a.m41 = 0,
      a.m42 = 0,
      a.m43 = 0,
      a.m44 = 1,
      a),
  Ab = (a, c, g) => (a.D = g, a.A = c, a),
  Bb = (a, c, g = a.A) =>
    Ab(
      a.map(m => {
        let q, l;
        return { x: m, y: q, z: l } = m,
          { x: m, y: q, z: l } = c.transformPoint({ x: m, y: q, z: l }),
          { x: m, y: q, z: l };
      }),
      g,
      a.D,
    ),
  G = (a, c, g) => a.map(m => Bb(m, c, g)),
  Cb = (a, c = 0) =>
    qb(a, g => {
      const m = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > p(m) ? m : 0 > m ? m - c : m + c };
    }),
  Db = (a, c, g) =>
    a.map((m, q, { length: l }) => Ab([m, c[l - q - 1], c[l - (q + 1) % l - 1], a[(q + 1) % l]], a.A, g)),
  L = (
    a,
    c,
    g = 0,
    m,
  ) => (a = a ? Cb(a, m) : tb,
    m = Bb(a, T(0, 1).scale3d(0 < g ? g : 1)),
    a = Bb(a, T(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...Db(a, m, c), m, a]),
  Eb = (
    a,
    c = a,
    g = (
      m,
      q,
    ) => (q *= Math.PI / c,
      { x: Math.cos(m *= 2 * Math.PI / a) * Math.sin(q), y: Math.cos(q), z: Math.sin(m) * Math.sin(q) }),
  ) => {
    const m = [];
    for (let q = 0; a > q; q++) {
      for (let l = 0; c > l; l++) {
        const u = Ab([], 0, 1);
        m.push(u);
        u.push(g(q, l, u));
        l && u.push(g((q + 1) % a, l, u));
        c - 1 > l && u.push(g((q + 1) % a, l + 1 % c, u));
        u.push(g(q, l + 1 % c, u));
      }
    }
    return m;
  },
  Fb = (a, c) => {
    var g, m, q, l = c.C;
    for (var u = 0; l.length > u; ++u) {
      if (-0.00008 > (g = ub(a, l[u]) - a.w) ? q = c : 8e-5 < g && (m = c), q && m) {
        m = [];
        q = [];
        l = c.C;
        u = c.B;
        let w = l.at(-1), x = ub(a, w) - a.w;
        for (const z of l) {
          g = ub(a, z) - a.w,
            8e-5 > x && q.push(w),
            -0.00008 < x && m.push(w),
            (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g)
            && (x /= g - x,
              w = { x: w.x + (w.x - z.x) * x, y: w.y + (w.y - z.y) * x, z: w.z + (w.z - z.z) * x },
              m.push(w),
              q.push(w)),
            w = z,
            x = g;
        }
        return {
          o: 2 < m.length && { C: Ab(m, l.A, l.D), B: u, u: c },
          m: 2 < q.length && { C: Ab(q, l.A, l.D), B: u, u: c },
        };
      }
    }
    return { o: m, m: q };
  },
  Gb = (a, c, g = vb(c.C)) => {
    let m, q, l;
    return a
      ? ({ o: m, m: q } = Fb(a, c), m || q || a.s.push(c), m && (a.o = Gb(a.o, m, g)), q && (a.m = Gb(a.m, q, g)))
      : ({ x: m, y: q, z: g, w: l } = g, a = { x: m, y: q, z: g, w: l, s: [c], o: 0, m: 0 }),
      a;
  },
  Hb = (a, c, g) => {
    const m = [],
      q = (l, u) => {
        let { o: w, m: x } = Fb(l, u);
        w || x || (0 < g * ub(l, c) ? w = u : x = u);
        w && (l.o ? q(l.o, w) : m.push(w));
        x && l.m && q(l.m, x);
      };
    for (const l of c.s) {
      q(a, l);
    }
    return m;
  },
  Ib = (a, c) => a && (c(a), Ib(a.o, c), Ib(a.m, c)),
  Jb = a => a.length ? a.reduce((c, g) => Gb(c, { C: g, B: 0, u: 0 }), 0) : a,
  Kb = a => (Ib(a, c => {
    const g = c.m;
    c.m = c.o;
    c.o = g;
    c.x *= -1;
    c.y *= -1;
    c.z *= -1;
    c.w *= -1;
    for (const m of c.s) {
      m.B = !m.B;
    }
  }),
    a),
  Lb = (...a) =>
    a.reduce((c, g) => {
      const m = [];
      if (c = Jb(c), g) {
        g = Jb(g);
        Ib(c, q => q.s = Hb(g, q, 1));
        Ib(g, q => m.push([q, Hb(c, q, -1)]));
        for (let [q, l] of m) {
          for (const u of l) {
            Gb(c, u, q);
          }
        }
      }
      return c;
    }),
  V = (...a) => {
    let c;
    const g = l => {
        let u;
        return l.u && ((u = m.get(l.u)) ? (q.delete(u), l = g(l.u)) : m.set(l.u, l)), l;
      },
      m = new Map(),
      q = new Map();
    return [a, ...c] = [...a],
      a = Kb(Lb(Kb(Jb(a)), ...c)),
      Ib(a, l => {
        for (const u of l.s) {
          q.set(g(u), u.B);
        }
      }),
      Array.from(q, ([{ C: l }, u]) => {
        const w = l.map(({ x, y: z, z: B }) => ({ x, y: z, z: B }));
        return Ab(u ? w.reverse() : w, l.A, l.D);
      });
  },
  Mb = () => {
    let a, c, g, m, q, l, u, w, x, z, B, M, C, f, h, r, v, y = 1, I = 2, A = 2;
    const D = () => {
        let F = 0, E = 0, S = 0, N = 0;
        m = 0;
        ca.fill(0);
        for (let W = 0; 31 > W; ++W) {
          let U = 0;
          const sa = 512 * W;
          for (let da = 0; 128 > da; da++) {
            var O = sa + 4 * da;
            let ia = (Y[O] + Y[1 + O]) / 255;
            O = Y[2 + O];
            14 < da && 114 > da && (U += ia);
            O && ia && (ia = ca[O] + 1, ca[O] = ia, F > ia || (F = ia, E = O));
          }
          3 > U && 5 < W && (S += W / 32);
          3 < U && (7 < W && (N += W / 15), m = 1);
        }
        E && (m = 1);
        a = E || c;
        c = E;
        A = n(A, m ? 6.5 : -20 > Sa.y ? 11 : 8, 1 - Math.exp(-4 * d));
        Sa.y += N / 41 - (m || A) * S / 41 * A * d;
      },
      J = () => {
        z = x = 0;
        for (let F = 32; 128 > F; F += 2) {
          let E = 0, S = 0, N = 0, O = 0;
          const W = 512 * F;
          for (let U = 1 & F; 128 > U; U += 2) {
            const sa = W + 4 * U;
            let da = W + 4 * (127 - U);
            const ia = Y[sa] / 255, Ua = Y[1 + da] / 255, pa = 1 - p(U / 63.5 - 1);
            10 < U && 118 > U
              && (E = ob(ob(ia * pa, ia * Y[da] / 255), E), S = ob(ob(Ua * pa, Ua * Y[1 + sa] / 255), S));
            (54 > U || 74 < U) && 1e-3 < (da = (1 - pa) * ob(ia, Ua) / 3)
              && (64 > U && da > N ? N = da : 64 < U && da > O && (O = da));
          }
          p(O - N) > p(x) && (x = O - N);
          p(S - E) > p(z) && (z = S - E);
        }
      },
      K = () => (I ? k[ra].u : e[g && 1 === e[g].G && g || 0]).l,
      R = (F, E, S, N) => n(F, E, y || (Wa(p(E - F) ** 0.9 - S) + 1 / 7) * (1 - Math.exp(-(1.5 * N) * d))),
      ca = new Int32Array(256),
      Y = new Uint8Array(65536);
    na = () => {
      Z.fa7();
      Z.r9r(0, 0, 128, 128, 6408, 5121, Y);
      Z.iay(36008, [36064, 36096]);
      Z.iay(36009, [36064, 36096]);
      NO_INLINE(J)();
      NO_INLINE(D)();
      var F = Wa(1 - 5 * ob(p(x), p(z))), E = ha ? Ra * kb : Math.PI;
      F =
        (C = n(C, m * F * Wa(2 * Da) * 7, 1 - Math.exp(-(m ? 0.1 < F ? 10 : 5 + 2 * Da : 1) * d)),
          B = n(B, 0, 1 - Math.exp(-(m ? 8 : 4) * d)),
          x += d * ((a ? 0 : F * B) - Math.cos(Ca + E) * Da * C),
          M = n(M, 0, 1 - Math.exp(-(m ? 8 : 4) * d)),
          z += d * ((a ? 0 : F * M) - Math.sin(Ca + E) * Da * C),
          K());
      var { x: S, y: E, z: N } = 1 < I
        ? k[ra].I.transformPoint({ x: 0, y: ra || 0.9 < za ? 15 : 1, z: -2.4 })
        : (E = F,
          Xa(mb).multiplySelf(E).invertSelf(),
          mb.m41 = mb.m42 = mb.m43 = 0,
          S = mb.transformPoint({ x, z, w: 0 }),
          Sa.x += S.x,
          Sa.z += S.z,
          E.transformPoint(Sa));
      if (
        a && (B = (S - Pa.x) / d, M = (N - Pa.z) / d),
          Pa.x = S,
          Pa.y = E,
          Pa.z = N,
          (I = I && (m && a ? 0 : 1)) || a !== g
      ) {
        g = a;
        const O = (F = K()).inverse().transformPoint(Pa);
        Sa.x = O.x;
        Sa.y = O.y;
        Sa.z = O.z;
      }
      w = n(w, Ba * (27 < a && 32 > a), 1 - Math.exp(-2 * d));
      E < (-25 > S || 109 > N ? -25 : -9) && (B = M = C = 0, I = 2);
      1 === a && (k[9].j = -15 > S && 0 > N ? 1 : 0);
      f = n(n(f, E, 1 - Math.exp(-2 * d)), E, I || 8 * p(f - E));
      r = R(r, f, 2, 1);
      h = R(h, S, 0.5, 1);
      v = R(v, N, 0.5, 1);
      ha
        ? (F = I + (1 - Math.exp(-18 * d)), Ea = n(Ea, S, F), Fa = n(Fa, f + 1.5, F), Ga = n(Ga, N, F), Ra = Va(Ra))
        : (Fa = R(Fa, ob(r + Wa((-60 - N) / 8, 0, 20) + 13 + 9 * w, 6), 4, 2),
          Ga = R(Ga, v + -18 + 5 * w, 1, 2 + w),
          Ea = R(Ea, h, 1, 2 + w),
          E = ib(4, -p(v - Ga)),
          F = h - Ea,
          Ra = jb(Ra, 90 - Va(Math.atan2(E, F) / kb), y + (1 - Math.exp(-6 * d))),
          Qa = jb(Qa, 90 - Math.atan2(Math.hypot(E, F), Fa - r) / kb, y + (1 - Math.exp(-6 * d))));
      Qa = Wa(Qa, -87, 87);
      l = jb(l, q, 1 - Math.exp(-8 * d));
      u = n(u, Da, 1 - Math.exp(-10 * d));
      Da && (q = 90 - Ca / kb);
      y = 0;
      e[37].l.translateSelf(S, f + 0.124, N).rotateSelf(0, l);
      for (F = 0; 2 > F; ++F) {
        e[38 + F].l.multiplySelf(e[37].l).translateSelf(
          0,
          u * Wa(0.45 * Math.sin(9.1 * b + Math.PI * (F - 1) - Math.PI / 2)),
        ).rotateSelf(u * Math.sin(9.1 * b + Math.PI * (F - 1)) * 0.25 / kb, 0);
      }
    };
  },
  Nb = (a, c = 35633) => (c = Z.c6x(c), Z.s3c(c, a), Z.c6a(c), c),
  Ob = (a, c) => {
    const g = {}, m = Z.c1h();
    return Z.abz(m, a), Z.abz(m, Nb(c, 35632)), Z.l8l(m), q => q ? g[q] || (g[q] = Z.gan(m, q)) : Z.u7y(m);
  },
  Wb = (a, c, g) => {
    if (aa) {
      c = Pb(0, 40 * Math.sin(qa) - 70);
      for (const m of [37, 38, 39]) {
        zb(c, Ub, m - 1);
      }
      Z.uae(a, !1, Ub);
      Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      Z.uae(a, !1, Ub),
        Z.d97(4, (c ? e[39].F : e[37].v) - 3, 5123, 6),
        Z.uae(a, !1, Vb),
        Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13),
        Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, k.length);
    }
  },
  Xb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Yb = a => Math.sin(a * Math.PI * 2),
  Zb = a => 0.5 > a % 1 ? 1 : -1,
  $b = a => a % 1 * 2 - 1,
  ac = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  hc = a => {
    let c = 0;
    const g = () => {
        let u = 0;
        const w = O => {
            let W, U, sa, da = 0, ia = 0;
            const Ua = [],
              pa = new Int32Array(768 * O),
              bc = 2 ** (D - 9) / O,
              cc = Math.PI * 2 ** (Y - 8) / O,
              xb = E * O & -2;
            for (let rb = 0; 11 >= rb; ++rb) {
              for (
                let sb = 0, Qb = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + rb];
                32 > sb;
                ++sb
              ) {
                const Rb = (32 * rb + sb) * O;
                for (var Ka = 0; 4 > Ka; ++Ka) {
                  if (W = 0, Qb && (W = x[Qb - 1].charCodeAt(sb + 32 * Ka) - 40, W += 0 < W ? 106 : 0), W) {
                    var fa;
                    if (!(fa = Ua[W])) {
                      fa = W;
                      let X = void 0, ua = void 0;
                      var Sb = W;
                      let dc = 0, ec = 0;
                      const fc = 2 > c ? $b : Yb, gc = 2 > c ? 1 > c ? Zb : ac : Yb, Tb = new Int32Array(v + y + N);
                      for (let La = 0, yb = 0; v + y + N > La; ++La, ++yb) {
                        let Ma = 1;
                        v > La ? Ma = La / v : v + y > La || (Ma = (1 - (Ma = (La - v - y) / N)) * 3 ** (-A / 16 * Ma));
                        0 > yb
                          || (yb -= 4 * O,
                            ua = 396e-5 * 2 ** ((Sb + B - 256) / 12),
                            X = 396e-5 * 2 ** ((Sb + f - 256) / 12) * (1 + (c ? 0 : 0.007200)));
                        Tb[La] = 80
                            * (fc(dc += ua * Ma ** (M / 32)) * z + gc(ec += X * Ma ** (h / 32)) * C
                              + (r ? (2 * Math.random() - 1) * r : 0))
                            * Ma | 0;
                      }
                      fa = Ua[fa] = Tb;
                    }
                    for (let X = 0, ua = 2 * Rb; fa.length > X; ++X, ua += 2) {
                      pa[ua] += fa[X];
                    }
                  }
                }
                for (let X, ua = 0; O > ua; ++ua) {
                  Ka = 0;
                  fa = 2 * (Rb + ua);
                  var va = (((X = pa[fa]) || sa)
                    && (U = 308e-5 * J,
                      1 !== c && 4 !== c || (U *= Math.sin(bc * fa * Math.PI * 2) * S / 512 + 0.5),
                      U = 1.5 * Math.sin(U),
                      da += U * ia,
                      va = (1 - K / 255) * (X - ia) - da,
                      ia += U * va,
                      X = 4 === c ? ia : 3 === c ? va : da,
                      c || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5),
                      X *= R / 32,
                      sa = 1e-5 < X * X,
                      va = Math.sin(cc * fa) * ca / 512 + 0.5,
                      Ka = X * (1 - va),
                      X *= va),
                    fa < xb || (Ka += pa[1 + fa - xb] * F / 255, X += pa[fa - xb] * F / 255),
                    u + fa >> 1);
                  q[va] += (pa[fa] = Ka) / 65536;
                  l[va] += (pa[++fa] = X) / 65536;
                }
              }
            }
            u += 768 * O;
          },
          x = Ja[c],
          [z, B, M, C, f, h, r, v, y, I, A, D, J, K, R, ca, Y, F, E, S] = Na[c],
          N = 4 * I ** 2;
        w(5513);
        w(4562);
        w(3891);
        Xb(5 > ++c ? g : a);
      },
      m = db.createBuffer(2, 5362944, 44100),
      q = m.getChannelData(0),
      l = m.getChannelData(1);
    cb.buffer = m;
    cb.loop = !0;
    Xb(g);
  },
  db = new AudioContext(),
  mb = new DOMMatrix(),
  wb = new Float32Array(16),
  Ub = new Float32Array(624),
  Vb = new Float32Array(624),
  ic = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  ib = NO_INLINE((a, c) => a < c ? a : c),
  ob = NO_INLINE((a, c) => c < a ? a : c),
  p = NO_INLINE(a => 0 > a ? -a : a),
  T = NO_INLINE((a, c, g) => (new DOMMatrix()).translateSelf(a, c, g)),
  Pb = NO_INLINE((a, c, g) => (new DOMMatrix()).rotateSelf(a, c, g)),
  Q = NO_INLINE((a, c, g) => (new DOMMatrix()).scaleSelf(a, c, g)),
  cb = db.createBufferSource(),
  ab = 1 / Math.tan(60 * kb / 2),
  P = NO_INLINE((a, c, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * c << 8 | 255 * a),
  nb = qb(8, () => ({})),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((c, g, m) => (c * m + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Xb(() => {
  let a = 0;
  const c = () => {
      if (2 == ++a) {
        const m = r => {
            if (
              Z.f1s(),
                requestAnimationFrame(m),
                v = (r - (ba || r)) / 1e3,
                qa += v,
                b += d = aa ? 0 : ib(0.066, v),
                ba = r,
                0 < d
            ) {
              la();
              Ya();
              na();
              for (r = 0; e.length > r; ++r) {
                e[r].G && zb(e[r].l, Ub, r - 1);
              }
              for (r = 0; 13 > r; ++r) {
                zb(Ia[r].l, Vb, r);
              }
              for (r = 0; k.length > r; ++r) {
                zb(k[r].l, Vb, r + 13), Vb[16 * (r + 13) + 15] = 1 - k[r].g;
              }
              z();
              Z.b6o(36160, f);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: v, y: r, z: y } = Pa;
              Z.uae(z("b"), !1, zb(Xa(mb).rotateSelf(0, 180).invertSelf().translateSelf(-v, -r, 0.3 - y)));
              Wb(z("c"), 0, 41);
              Z.c4s(256);
              Z.cbf(!1, !0, !0, !1);
              Z.uae(z("b"), !1, zb(Xa(mb).translateSelf(-v, -r, -y - 0.3)));
              Wb(z("c"), 0, 41);
              Z.f1s();
            }
            ea = 0;
            Xa(q);
            aa
              ? q.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : q.rotateSelf(-Qa, -Ra).invertSelf().translateSelf(-Ea, -Fa, -Ga);
            w();
            Z.b6o(36160, C);
            Z.v5y(0, 0, 2048, 2048);
            M[0](pb(q, 0.3, 55, 10));
            M[1](pb(q, 55, 181, 11));
            B();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            M[0]();
            M[1]();
            Z.uae(B("a"), !1, bb(0.3, 181));
            Z.uae(B("b"), !1, zb(q));
            Z.ubu(B("k"), Ea, Fa, Ga);
            Wb(B("c"), !ha, 42);
            x();
            Z.ubu(x("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, qa);
            Z.ubu(x("k"), Ea, Fa, Ga);
            Z.uae(x("b"), !1, zb(Xa(mb).multiplySelf(q).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, f);
            Z.f1s();
          },
          q = new DOMMatrix(),
          l = g;
        let u = Nb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const w = Ob(
            Nb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          x = Ob(
            Nb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          z = Ob(
            u,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          B = Ob(
            u,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          M = qb(2, r => {
            const v = new Float32Array(16), y = Z.c25();
            return Z.a4v(33984 + r),
              Z.b9j(3553, y),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              I => {
                I
                  ? (zb(I, v), Z.uae(w("b"), !1, v), Z.fas(36160, 36096, 3553, y, 0), Z.c4s(256), Wb(w("c"), !ha, 42))
                  : Z.uae(B(r ? "j" : "i"), !1, v);
              };
          }),
          C = Z.c5w(),
          f = (u = Z.c3z(), Z.c5w()),
          h = Z.c25();
        z();
        Z.uae(z("a"), !1, bb(1e-4, 1, 1.4, 0.59));
        B();
        Z.ubh(B("q"), 2);
        Z.ubh(B("h"), 1);
        Z.ubh(B("g"), 0);
        x();
        Z.ubh(x("q"), 2);
        Z.b6o(36160, C);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, f);
        Z.bb1(36161, u);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, u);
        Z.a4v(33986);
        Z.b9j(3553, h);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, h, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, l);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        Ya();
        NO_INLINE(fb)();
        NO_INLINE(Mb)();
        requestAnimationFrame(m);
      }
    },
    g = new Image();
  g.onload = g.onerror = c;
  g.src = ic;
  NO_INLINE(hc)(() => {
    Xb(() => {
      let l, u = 0;
      const w = [],
        x = [],
        z = [],
        B = [],
        M = v => {
          let { x: y, y: I, z: A } = l[v], D = (r[0] = y, r[1] = I, r[2] = A, v = "" + (l.D ? h : C), f.get(v));
          return void 0 !== D
            ? (y = 3 * D, B[y] = (B[y++] + C[5]) / 2, B[y] = (B[y++] + C[6]) / 2, B[y] = (B[y] + C[7]) / 2)
            : (f.set(v, D = f.size), x.push(y, I, A, r[3]), z.push(C[4]), B.push(C[5], C[6], C[7])),
            D;
        },
        C = new Int32Array(8),
        f = new Map(),
        h = new Int32Array(C.buffer, 0, 5),
        r = new Float32Array(C.buffer);
      for (const v of e) {
        for (l of (r[3] = 40 === v.H ? -14 : v.G && v.H, v.s)) {
          const { x: y, y: I, z: A } = vb(l);
          C[4] = 0 | l.A;
          C[5] = 32767 * y;
          C[6] = 32767 * I;
          C[7] = 32767 * A;
          for (let D = 2, J = M(0), K = M(1); l.length > D; ++D) {
            w.push(J, K, K = M(D));
          }
        }
        v.s = null;
        v.v = u;
        v.F = u = w.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(x), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(B), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(z), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(w), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Xb(c);
      try {
        const [v, y, I, A, D] = JSON.parse(localStorage.DanteSP22);
        k.map((J, K) => J.g = J.i = J.j = K ? 0 | v[K] : 0);
        Ia.map((J, K) => J.j = 0 | y[K]);
        ra = I;
        b = A;
        Aa = D;
      } catch {
      }
      za = Wa(ra);
    });
    const m = qb(11, l => T(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10)),
      q = qb(10, l => Db(Bb(Cb(18), m[l]).reverse(), Bb(Cb(18), m[l + 1]), 1)).flat();
    t(() => H([tb.slice(1)], T(-2).scale3d(3).rotate(90, 0)), 0);
    t(() => {
      const l = (f, h, r) =>
          t(v => {
            v.h = y => y.translateSelf(x() * Math.sin(3 * f + b * f) * h);
            tb.map(({ x: y, z: I }) => {
              H(L(11, 1), T(4 * y, 4, r + 4 * I).scale(0.8, 3, 0.8), P(0.5, 0.3, 0.7, 0.6));
              H(L(), T(4 * y, 7, r + 4 * I).scale(1, 0.3), P(0.5, 0.5, 0.5, 0.3));
            });
            H(V(
              G(L(), T(0, 0, r).scale(5, 1, 5), P(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(y => G(L(), T(5 * y, 0.2, r).rotate(-30 * y).scale(4, 1, 2), P(0.8, 0.8, 0.8, 0.3))),
            ));
            H(L(), T(0, -3, r).scale(8, 2, 8), P(0.4, 0.4, 0.4, 0.3));
          }),
        u = (f, h, r, v) =>
          f.translateSelf(h + Math.sin(b + 2) / 5, r + Math.sin(0.8 * b) / 3, v).rotateSelf(
            2 * Math.sin(b),
            Math.sin(0.7 * b),
            Math.sin(0.9 * b),
          ),
        w = f =>
          V(
            G(L(), T(0, -f / 2).scale(6, f - 1, 2.2)),
            G(L(), T(0, -f / 2 - 6).scale(4, f - 3, 4)),
            G(L(32, 1), T(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        x = () => ib(k[2].i, 1 - k[4].i),
        z = V(
          G(L(30, 1, 1.15, 1), T(0, -3).scale(3.5, 1, 3.5), P(0.7, 0.4, 0.25, 0.7)),
          G(L(30, 1, 1.3, 1), T(0, -2.5).scale(2.6, 1, 3), P(0.7, 0.4, 0.25, 0.2)),
          G(L(), T(4, -1.2).scale3d(2), P(0.7, 0.4, 0.25, 0.3)),
        ),
        B = qb(7, f => G(L(6, 1), T(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), P(0.3, 0.3, 0.38))).flat(),
        M = (t(f => {
          f.h = h => u(h, -12, 4.2, 40 * za - 66);
          H(z);
          hb(T(0, -3, 4));
        }),
          hb(T(-5.4, 1.5, -19).rotate(0, -90)),
          lb(T(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          lb(T(0, 2.8), [5, 10, 3], [-5, 10, 3], ...Cb(18).map(({ x: f, z: h }) => [7 * f, 10 * h, 4.5 - 2 * p(f)])),
          H(L(), T(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), P(0.8, 0.8, 0.8, 0.2)),
          tb.map(({ x: f, z: h }) => H(L(6), T(3 * f, 3, 15 * h).scale(0.7, 4, 0.7), P(0.6, 0.3, 0.3, 0.4))),
          H(L(), T(0, 0, -23).scale(3, 1, 8), P(0.9, 0.9, 0.9, 0.2)),
          H(L(), T(0, 0, 22).scale(3, 1, 8), P(0.9, 0.9, 0.9, 0.2)),
          [-15, 15].map((f, h) => {
            H(L(), T(0, 6.3, f).scale(4, 0.3, 1), P(0.3, 0.3, 0.3, 0.4));
            H(L(), T(0, 1, f).scale(3, 0.2, 0.35), P(0.5, 0.5, 0.5, 0.3));
            t(r => {
              r.h = v => v.translateSelf(0, 0, f).scaleSelf(1, Wa(1.22 - k[h + 1].g), 1);
              H(B);
            });
          }),
          qb(5, f =>
            qb(2, h =>
              H(
                q,
                T(18.5 * (h - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * h).scale(1.2, 10, 1.2),
                P(1, 1, 0.8, 0.2),
              ))),
          H(L(), T(3, 1.5, -20).scale(0.5, 2, 5), P(0.7, 0.7, 0.7, 0.2)),
          H(L(), T(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(0.75, 0.75, 0.75, 0.2)),
          H(L(5), T(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(0.6, 0.3, 0.3, 0.4)),
          H(L(), Pb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), P(0.8, 0.2, 0.2, 0.5)),
          H(V(
            Lb(
              G(L(6, 0, 0, 0.3), T(8, -3, -4).scale(13, 1, 13), P(0.7, 0.7, 0.7, 0.2)),
              G(L(6), T(0, -8).scale(9, 8, 8), P(0.4, 0.2, 0.5, 0.5)),
              G(L(6, 0, 0, 0.3), T(0, -0.92).scale(13, 2, 13), P(0.8, 0.8, 0.8, 0.2)),
            ),
            G(L(5), Q(5, 30, 5), P(0.4, 0.2, 0.6, 0.5)),
            G(L(5, 0, 1.5), T(0, 1).scale(4.5, 0.3, 4.5), P(0.7, 0.5, 0.9, 0.2)),
            G(L(), Pb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), P(0.5, 0.5, 0.5, 0.5)),
            G(L(6), T(15, -1.5, 4).scale(3.5, 1, 3.5), P(0.5, 0.5, 0.5, 0.5)),
          )),
          t(f => {
            f.h = h =>
              h.translateSelf(
                0,
                0.01 < k[3].g ? (5 * Math.cos(1.5 * b) + 2) * k[3].i * (1 - k[2].g) + -15 * (1 - k[3].g) : -500,
                0,
              );
            H(L(5), T(0, -0.2).scale(5, 1, 5), P(0.6, 0.65, 0.7, 0.3));
            hb(T(0, 1.2));
          }),
          hb(T(15, -2, 4)),
          l(0.7, 12, 35),
          l(1, 8.2, 55),
          t(f => {
            f.h = h => h.translateSelf(x() * Math.sin(b / 1.5 + 2) * 12);
            H(
              V(
                Lb(
                  G(L(), Q(1.5, 1, 5), P(0.9, 0.9, 0.9, 0.2)),
                  G(L(6), Q(4, 1, 5), P(0.9, 0.9, 0.9, 0.2)),
                  G(L(), T(0, -2).scale(2, 3.2, 1.9), P(0.3, 0.8, 0.5, 0.5)),
                  G(L(16, 1, 0, 4), Q(1, 1, 1.5).rotate(0, 90), P(0.9, 0.9, 0.9, 0.2)),
                ),
                G(L(), Q(1.3, 10, 1.3), P(0.2, 0.7, 0.4, 0.6)),
              ),
              T(0, 0, 45),
            );
            lb(T(0, 2.8, 45), [0, 0, 4.5]);
          }),
          H(L(), T(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2)),
          t(f => {
            f.h = h => h.translateSelf(9.8 * (1 - x()));
            H(L(3), T(-23, -1.7, 55.8).scale(5, 0.7, 8.3), P(0.3, 0.6, 0.6, 0.2));
            H(L(8), T(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(0.8, 0.8, 0.8, 0.2));
            H(L(), T(-23, -3, 55).scale(5.2, 1.7, 3), P(0.5, 0.5, 0.5, 0.3));
            H(L(), T(-23, -2.2, 62).scale(3, 1, 4), P(0.5, 0.5, 0.5, 0.3));
            hb(T(-23, -0.5, 66.5));
          }),
          t(f => {
            f.h = h => h.translateSelf(0, Wa(1 - 5 * x()) * Ta(k[4].g, k[5].g) * Math.sin(1.35 * b) * 4);
            H(L(), T(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(0.7, 0.7, 0.7, 0.2));
            H(V(G(L(), Q(3, 1.4, 2.7)), G(L(), Q(1.2, 8, 1.2))), T(-33, -3, 55), P(0.7, 0.7, 0.7, 0.2));
          }),
          t(f => {
            f.h = h => h.translateSelf(0, 0, Wa(1 - 5 * x()) * Ta(k[4].g, k[5].g) * Math.sin(0.9 * b) * 8);
            H(V(
              G(L(), T(-27, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2)),
              G(L(), T(-27, -3, 55).scale(1, 3), P(0.9, 0.9, 0.9, 0.2)),
            ));
            H(L(), T(-39, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
          }),
          t(f => {
            f.h = h => h.translateSelf(0, -6.5 * k[4].i);
            H(L(6), T(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), P(0.7, 0.7, 0.7, 0.4));
          }),
          hb(T(-55, -1.1, 46).rotate(0, 90)),
          H(L(6), T(-61.3, -2.4, 49).scale(3, 1, 5), P(0.4, 0.6, 0.6, 0.3)),
          H(L(7), T(-57, -2.6, 46).scale(4, 1, 4), P(0.8, 0.8, 0.8, 0.3)),
          [
            ...G(L(), T(0, -3).scale(11, 1.4, 3), P(0.9, 0.9, 0.9, 0.2)),
            ...V(
              G(L(6), Pb(90).scale(6, 8, 6), P(0.3, 0.6, 0.6, 0.3)),
              G(L(4, 0, 0.01), T(0, 6).scale(12, 2, 0.75).rotate(0, 45), P(0.3, 0.6, 0.6, 0.3)),
              G(L(6), Pb(90).scale(5, 12, 5), P(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => G(L(5), T(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        C = (H(M, T(-53, 0, 55)),
          t(f => {
            f.h = h => h.translateSelf(-75, (1 - k[5].i) * (1 - k[6].g) * 3, 55).rotate(180 * (1 - k[5].i) + xa, 0);
            H(M);
          }, 2),
          H(L(), T(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), P(0.7, 0.7, 0.7, 0.2)),
          H(L(3, 0, -0.5), T(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(0.8, 0.8, 0.8, 0.2)),
          H(V(
            Lb(
              G(L(), T(-100, -2.5, 55).scale(8, 1, 8), P(0.8, 0.8, 0.8, 0.2)),
              G(L(), T(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(0.8, 0.8, 0.8, 0.2)),
              G(L(), T(-100, -2.6, 70).scale(3, 1.1, 7), P(0.8, 0.8, 0.8, 0.2)),
              G(L(), T(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(0.8, 0.8, 0.8, 0.2)),
              G(L(6), T(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(0.6, 0.6, 0.6, 0.3)),
              G(L(), T(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(0.8, 0.8, 0.8, 0.2)),
              G(L(), T(-100, 0.42, 92).scale(3, 1.1, 4.1), P(0.8, 0.8, 0.8, 0.2)),
            ),
            G(L(8), T(-100, -1, 55).scale(7, 0.9, 7), P(0.3, 0.3, 0.3, 0.4)),
            G(L(8), T(-100, -2, 55).scale(4, 0.3, 4), P(0.4, 0.4, 0.4, 0.5)),
            G(L(8), T(-100, -3, 55).scale(0.6, 1, 0.6), P(0.4, 0.4, 0.4, 0.5)),
          )),
          lb(T(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          lb(T(-89, 0.2, 80), [0, 0, 6]),
          H(V(
            G(L(), T(-100, 1, 63).scale(7.5, 4), P(0.5, 0.5, 0.5, 0.4)),
            G(L(), T(-100, 0, 70).scale(2, 2, 10), P(0.5, 0.5, 0.5, 0.4)),
            G(L(20, 1), T(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(0.5, 0.5, 0.5, 0.4)),
          )),
          t(f => {
            f.h = h => h.translateSelf(-99.7, -1.9, 63.5).scale(1, Wa(1.1 - k[6].g), 1);
            H(B);
          }),
          tb.map(({ x: f, z: h }) => {
            H(L(6), T(7 * f - 100, -3, 7 * h + 55).scale(1, 8.1), P(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(r => H(L(6), T(7 * f - 100, r, 7 * h + 55).scale(1.3, 0.5, 1.3), P(0.4, 0.2, 0.2, 0.8)));
          }),
          qb(7, f => {
            H(
              L((23 * f + 1) % 5 + 5, 0, 0.55),
              T(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              P(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          H(L(), T(-87, -9.5, 24).scale(7, 1, 3), P(0.4, 0.5, 0.6, 0.4)),
          H(L(4), T(-86, -9.2, 27).scale(5, 1, 5), P(0.5, 0.6, 0.7, 0.3)),
          H(L(12, 1), T(-86, -9, 31).scale(1.5, 1, 1.5), P(0.3, 0.3, 0.4, 0.1)),
          hb(T(-86, -7.5, 31)),
          t(f => {
            f.h = h => h.translateSelf(0, 3.5 * (1 - ob(k[6].g, k[7].g)) + Ta(k[7].i, k[6].i) * Math.sin(b) * 5);
            [0, 12, 24].map(h => H(L(), T(h - 76.9, h / -13 - 10, 24).scale(2.8, 1.5, 3), P(0.2, 0.5, 0.6, 0.2)));
          }),
          t(f => {
            f.h = h =>
              h.translateSelf(
                0,
                Ta(k[7].i, k[6].i) * Math.sin(b + 3) * 6,
                6 * Math.sin(0.6 * b + 1) * Ta(k[7].i, k[6].i),
              );
            [6, 18].map(h => H(L(), T(h - 76.9, h / -13 - 10, 24).scale(2.8, 1.5, 3), P(0.1, 0.4, 0.5, 0.2)));
          }),
          H(
            V(
              Lb(
                G(L(5), T(0, 0, -7).scale(2, 1.2, 2), P(0.2, 0.4, 0.7, 0.3)),
                G(L(5), Q(9, 1.2, 9), P(0, 0.2, 0.3, 0.5)),
                G(L(), Q(11, 1, 13), P(0.3, 0.4, 0.6, 0.3)),
              ),
              G(L(5), Q(5.4, 5, 5.4), P(0, 0.2, 0.3, 0.5)),
            ),
            T(-38.9, -11.3, 17),
          ),
          hb(T(-38.9, -9.6, 10)),
          t(f => {
            f.h = h => h.translateSelf(0, -7.3 * k[7].i);
            H(
              V(
                Lb(
                  G(L(5), T(0, 2).scale(5, 7, 5).skewY(8), P(0.2, 0.4, 0.5, 0.5)),
                  G(L(5), T(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(0.25, 0.35, 0.5, 0.5)),
                  G(L(5), T(0, 9).scale(0.6, 7, 0.6).skewY(8), P(0.35, 0.3, 0.5, 0.5)),
                ),
                G(L(5), Q(4, 8, 4), P(0.2, 0.4, 0.5, 0.5)),
                G(L(5), T(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(0.2, 0.4, 0.5, 0.5)),
              ),
              T(-38.9, -11.3, 17),
            );
            lb(T(-39.1, -0.6, 17).rotate(11), ...Cb(15).map(({ x: h, z: r }) => [3 * h, 3 * r, 1.2]));
          }),
          tb.map(({ x: f, z: h }) => {
            H(L(14, 1), T(9 * f - 38.9, -7.3, 11 * h + 17).scale(1, 4), P(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(r =>
              H(L(17, 1), T(9 * f - 38.9, r - 11.3, 11 * h + 17).scale(1.5, 0.5, 1.5), P(0.6, 0.6, 0.6, 0.3))
            );
          }),
          H(
            V(
              Lb(
                G(L(6), T(0, 0, -36).scale(15, 1.2, 15), P(0.7, 0.7, 0.7, 0.3)),
                G(L(), T(0, 0, -18).scale(4, 1.2, 6), P(0.45, 0.4, 0.6, 0.3)),
              ),
              ...qb(6, f =>
                qb(6, h =>
                  G(
                    L(6),
                    T(4.6 * h - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * h)).scale(2, 5, 2),
                    P(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            T(-38.9, -11.3, 17),
          ),
          lb(T(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          H(L(5), T(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), P(0.8, 0.1, 0.25, 0.4)),
          hb(T(-84, -0.5, 85).rotate(0, 45)),
          t(f => {
            f.h = h => u(h, -123, 1.4, 55 + -65 * Aa);
            H(z);
            hb(T(0, -3, -4).rotate(0, 180));
          }),
          V(
            G(L(), T(0, -0.5, 1).scale(1.15, 1.2, 6.5), P(0.25, 0.25, 0.35, 0.3)),
            G(L(3), T(0, 0, -5.5).scale(3, 2), P(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => G(L(), T(f, -0.5, 1).scale(0.14, 0.3, 6.5), P(0.7, 0.2, 0, 0.3))),
          ));
      t(f => {
        f.h = h => h.translateSelf(0, -2, Ta(k[10].g, k[11].g) * p(Math.sin(1.1 * b)) * -8.5 + 10);
        qb(2, h => H(C, T(9 * h - 110 + (1 & h), 1.7, -12)));
      });
      t(f => {
        f.h = h => h.translateSelf(0, -2, Ta(k[10].g, k[11].g) * p(Math.sin(2.1 * b)) * -8.5 + 10);
        qb(2, h => H(C, T(9 * (h + 2) - 110 + (1 & h), 1.7, -12)));
      });
      t(f => {
        f.h = h =>
          h.translateSelf(
            0,
            -2,
            -8.5 * ob((1 - k[10].g) * (1 - Ta(k[10].g, k[11].g)), Ta(k[10].g, k[11].g) * p(Math.sin(1.5 * b))) + 10,
          );
        qb(3, h => H(C, T(9 * h - 106, 1.7, -12)));
      });
      H(
        V(
          Lb(G(L(), T(26.5, -1.6, 10).scale(20, 2.08, 3)), G(L(), T(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...qb(4, f => G(L(), T(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...qb(3, f => G(L(), T(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        T(-123, 0, -12),
        P(0.5, 0.5, 0.6, 0.2),
      );
      hb(T(-116, -1.4, -18).rotate(0, 180));
      H(L(), T(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(0.8, 0.8, 0.8, 0.2));
      H(L(6), T(-116, -2.6, -16.5).scale(3.2, 0.8, 3), P(0.6, 0.5, 0.7, 0.2));
      H(L(), T(-115.5, -17, -12).scale(0.5, 15, 2.2), P(0.6, 0.6, 0.6, 0.3));
      H(L(8), T(-114, -17, -2).scale(2, 15, 2), P(0.6, 0.6, 0.6, 0.3));
      H(L(8), T(-79, -17, -2).scale(2, 15, 2), P(1, 1, 1, 0.3));
      H(L(), T(-77, -17, -50.5).scale(2.2, 15, 0.5), P(0.6, 0.6, 0.6, 0.3));
      qb(3, f => {
        H(w(16), T(12 * f - 109, -9, -12), P(0.6, 0.6, 0.6, 0.3));
        H(w(16), T(-77, -9, -12 * f - 20).rotate(0, 90), P(0.6, 0.6, 0.6, 0.3));
      });
      H(V(
        G(L(12), T(-77, -14.5, -12).scale(4, 17.5, 4), P(0.7, 0.7, 0.7, 0.2)),
        G(L(), T(-79, 0.1, -12).scale(3.5, 2, 1.3), P(0.4, 0.5, 0.6, 0.2)),
        G(L(), T(-77, 0.1, -14).scale(1.5, 2, 2), P(0.4, 0.5, 0.6, 0.2)),
        G(L(12), T(-77, 3.1, -12).scale(3, 5, 3), P(0.4, 0.5, 0.6, 0.2)),
      ));
      H(L(), T(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), P(0.6, 0.6, 0.6, 0.3));
      H(L(9), T(-98, -18.4, -40).scale(2.5, 13.5, 2.5), P(0.5, 0.5, 0.5, 0.3));
      H(V(
        G(L(), T(-93, -5.8, -40).scale(9, 1, 5), P(0.8, 0.8, 0.8, 0.1)),
        G(L(9), T(-98, -5.8, -40).scale(3, 8, 3), P(0.7, 0.7, 0.7, 0.2)),
      ));
      hb(T(-98, -4.4, -40).rotate(0, 90));
      lb(T(-115, 0.2, -12), [0, 0, 3.5]);
      lb(T(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      H(V(
        Lb(
          G(L(6, 0, 0, 0.6), T(-100, 0.7, 105.5).scale(8, 1, 11), P(0.7, 0.7, 0.7, 0.2)),
          G(L(), T(-101.5, 0.7, 93.5).scale(10.5, 1, 2), P(0.7, 0.7, 0.7, 0.2)),
        ),
        G(L(5), T(-100, 0.7, 113).scale(4, 3, 4), P(0.7, 0.7, 0.7, 0.2)),
      ));
      qb(4, f =>
        t(h => {
          h.h = r => {
            const v = Ta(k[8].i, k[12].i);
            r.translateSelf(
              (2 < f ? 2 * (1 - v) + v : 0) - 100,
              v * Math.sin(1.3 * b + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - k[8].i) * (1 - k[12].i) * -7
                + ob(v, 0.05) * Math.cos(1.3 * b + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          H(
            L(6),
            T(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            P(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      t(f => {
        f.h = h => {
          const r = Ta(k[8].i, k[12].i);
          h.translateSelf(2.5 * (1 - r) - 139.7, -3 * (1 - k[8].g) + r * Math.sin(0.8 * b) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * b) * (3 * r + 3),
            0,
          );
        };
        H(V(G(L(10), Q(6, 2, 6), P(0.1, 0.6, 0.5, 0.3)), G(L(10), Q(3.3, 6, 3.3), P(0.1, 0.6, 0.5, 0.5))));
        H(L(15, 1), T(-7.5).rotate(0, 90).scale(3, 2.3, 3), P(0.4, 0.4, 0.4, 0.3));
        H(L(10), T(-7.5).rotate(0, 90).scale(2, 2.5, 2), P(0.3, 0.8, 0.7, 0.3));
        H(L(5), T(-7.5).rotate(0, 90).scale(1, 3), P(0.5, 0.5, 0.5, 0.5));
        hb(T(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(h => H(q, Pb(90 * -h, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), P(1, 1, 0.8, 0.2)));
        lb(T(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        H(L(12, 1), T(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), P(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(h => H(L(15, 1), T(-7.5 * f - 100, h + 0.7, 96).scale(1.1, 0.5, 1.1), P(0.5, 0.24, 0.2, 0.4)));
        H(q, T(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), P(1, 1, 0.8));
        H(
          V(
            G(L(), T(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), P(0.5, 0.5, 0.5, 0.4)),
            G(L(), Q(3, 3, 10), P(0.6, 0.24, 0.2, 0.5)),
            G(L(28, 1), T(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(0.6, 0.24, 0.2, 0.5)),
            G(L(5), T(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(0.6, 0.24, 0.2, 0.5)),
            G(L(5), T(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), P(0.6, 0.24, 0.2, 0.5)),
          ),
          T(f - 100, 0.7, 97),
        );
      });
      t(f => {
        f.h = h => h.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - k[12].g);
        H(B);
      });
      H(V(
        G(L(), T(-82.07, 0.8, 106).scale(11, 0.9, 2.2), P(0.7, 0.7, 0.7, 0.1)),
        G(L(45, 1), T(-81, 0.7, 106).scale3d(7.7), P(0.7, 0.7, 0.7, 0.1)),
      ));
      t(f => {
        f.h = h => h.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ta);
        H(V(
          G(L(45, 1), Q(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)),
          G(L(), T(0, 0, -5.5).scale(1.5, 3, 2.7), P(0.45, 0.45, 0.45, 0.2)),
        ));
        H(L(8), T(0, 2).scale(3, 1.5, 3).rotate(0, 22), P(0.7, 0.7, 0.7, 0.1));
        H(L(5), T(0, 2).scale(1, 2), P(0.3, 0.3, 0.3, 0.2));
        lb(T(0, 3), ...Cb(14).map(({ x: h, z: r }) => [5.6 * h, 5.6 * r, 2]));
      });
      t(f => {
        f.h = h => h.translateSelf(-65.8, 0.8, 106).rotateSelf(0, wa);
        [-1, 1].map(h =>
          H(q, Pb(0, 90).translate(-5 * h, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * h + 90), P(1, 1, 0.8))
        );
        H(V(G(L(28, 1), T(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), G(L(), Q(9, 5, 2), P(0.3, 0, 0, 0.3))));
        H(G(L(28, 1), Q(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
        H(G(L(5), T(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
      });
      t(f => {
        f.h = h => h.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
        H(V(
          G(L(28, 1), T(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)),
          G(L(), T(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)),
          G(L(), T(0, 0, 7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),
        ));
        H(G(L(28, 1), Q(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
        H(G(L(5), T(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
      });
      t(f => {
        f.h = h => h.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
        H(V(
          G(L(28, 1), T(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)),
          G(L(), T(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)),
          G(L(), T(0, 0, -7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),
        ));
        H(G(L(28, 1), Q(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
        H(G(L(5), T(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
      });
      H(L(), T(-58, 1, 106).scale(2, 0.65, 2), P(0.7, 0.7, 0.7, 0.2));
      H(L(), T(-50.7, 1, 99).scale(2, 0.65, 1), P(0.7, 0.7, 0.7, 0.2));
      H(L(), T(-42, 0.4, 91).scale(5, 1, 2.5), P(0.7, 0.7, 0.7, 0.3));
      H(L(), T(-34.2, 0.4, 91).scale(3, 1, 3), P(0.7, 0.7, 0.7, 0.3));
      hb(T(-34, 2.7, 96).rotate(-12, 0));
      H(L(5), T(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), P(0.2, 0.5, 0.5, 0.6));
      [P(0.1, 0.55, 0.45, 0.2), P(0.2, 0.5, 0.5, 0.3), P(0.3, 0.45, 0.55, 0.4)].map((f, h) =>
        t(r => {
          r.h = v => {
            v.translateSelf(
              0,
              (1 - k[13].i) * (1 - k[14].i) * (h ? 0 : 3) + Ta(k[13].i, k[14].i) * Math.sin(1.5 * b + 1.5 * h) * 4,
            );
          };
          H(L(), T(-23.5, 0.5, 91 + 6.8 * h).scale(1 === h ? 2 : 3.3, 1, 3.3), f);
          2 === h && H(L(), T(-29.1, 0.4, 91).scale(2.1, 1, 3), P(0.7, 0.7, 0.7, 0.3));
          1 === h && H(L(), T(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), P(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => H(q, T(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), P(1, 1, 0.8)));
      qb(
        3,
        f =>
          H(
            w(24.7 - 0.7 * (1 & f)),
            T(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? P(0.5, 0.5, 0.5, 0.3) : P(0.35, 0.35, 0.35, 0.5),
          ),
      );
      H(V(
        G(L(6, 0, 0, 0.3), T(0, -0.92, 95).scale(14, 2, 14), P(0.8, 0.8, 0.8, 0.2)),
        G(L(5), T(0, 0, 95).scale3d(6), P(0.3, 0.3, 0.3, 0.5)),
      ));
      hb(T(0, 1.7, 82).rotate(0, 180));
      H(L(5), T(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(0.5, 0.3, 0.3, 0.4));
      H(L(6), T(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(0.5, 0.6, 0.7, 0.3));
      H(L(), T(0, 16, 129).scale(1.5, 1, 2), P(0.5, 0.6, 0.7, 0.3));
      H(L(7), T(0, 16.2, 133).scale(5, 1, 5), P(0.4, 0.5, 0.6, 0.4));
      H(V(
        Lb(
          G(L(), T(0, 16, 110.5).scale(12, 1, 3), P(0.5, 0.3, 0.3, 0.4)),
          G(L(), T(0, 16, 111).scale(3, 1, 3.8), P(0.5, 0.3, 0.3, 0.4)),
        ),
        G(L(5), T(0, 16, 103.5).scale(5.5, 5, 5.5), P(0.5, 0.3, 0.3, 0.4)),
      ));
      t(f => {
        f.h = h => h.translateSelf(-2 * Math.sin(b)).rotate(25 * Math.sin(b));
        H(L(3), T(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), P(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(h => {
          H(L(6), T(0, 16, h + 95).scale(3, 1, 2.3).rotate(0, 90), P(0.7, 0.7, 0.7, 0.4));
          H(L(), T(0, 6.2, h + 95).scale(0.5, 11, 0.5), P(0.5, 0.3, 0.3, 0.4));
        });
      });
      t(f => {
        f.h = h => {
          const r = Ta(Ta((k[14].g + k[14].i) / 2, k[13].i), (k[15].g + k[15].i) / 2);
          h.translateSelf(0, 16 * r, 8.5 * Wa(2 * r - 1) + 95);
        };
        H(L(5), Q(5, 1.1, 5), P(0.5, 0.3, 0.3, 0.4));
        H(L(5), Q(5.5, 0.9, 5.5), P(0.25, 0.25, 0.25, 0.4));
        hb(T(0, 1.5, -1).rotate(0, 180));
      });
      lb(T(0, 3, 95), ...Cb(9).map(({ x: f, z: h }) => [9 * f, 9 * h, 4]));
      lb(T(0, 19, 134), [0, 0, 3.5]);
    });
    t(() => {
      [0, 180].map(u => H(q, Pb(0, u).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), P(1, 1, 0.8)));
      H(Eb(20), T(0, 1).scale(0.5, 0.5, 0.5), P(1, 0.3, 0.4));
      H(Eb(30), Q(0.7, 0.8, 0.55), P(1, 0.3, 0.4));
      const l = G(V(L(15, 1), G(L(), T(0, 0, 1).scale(2, 2, 0.5))), Pb(-90, 0).scale(0.1, 0.05, 0.1), P(0.3, 0.3, 0.3));
      [-1, 1].map(u => H(l, T(0.2 * u, 1.2, 0.4).rotate(0, 20 * u, 20 * u)));
      H(L(), T(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), P(0.3, 0.3, 0.3));
    });
    [-1, 1].map(l =>
      t(() => {
        H(L(20, 1), T(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), P(1, 0.3, 0.4));
      })
    );
    t(() => {
      H(L(6, 1), Q(0.13, 1.4, 0.13), P(0.3, 0.3, 0.5, 0.1));
      H(L(10), T(0, 1).scale(0.21, 0.3, 0.21), P(1, 0.5, 0.2));
      H(L(3), T(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), P(0.2, 0.2, 0.2, 0.1));
    }, 0);
    t(() => {
      H(L(6).slice(0, -1), Q(0.77, 1, 0.77), P(1, 0.3, 0.5));
    }, 0);
    t(() => {
      H(
        Eb(30, 24, (l, u, w) => {
          const x = u / 24, z = l * Math.PI * 2 / 30, B = Math.sin(x ** 0.6 * Math.PI / 2);
          l = x * x * Math.sin(l * Math.PI * 14 / 30) / 4;
          return 23 < u
            ? { x: w.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(z) * B,
              y: Math.cos(x * Math.PI) - x - l,
              z: Math.sin(z) * B + Math.sin(l * Math.PI * 2) / 4,
            };
        }),
        Q(0.7, 0.7, 0.7),
        P(1, 1, 1),
      );
      [-1, 1].map(l => H(Eb(12), T(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
