let Q,B,H,I,k,A,t1,F,Y,a1,C,T,j,r,x,l1,O,y,r1,X=0,z=0,s1=0,c1=0,w=0,o1=0,n1=0,i1=0,f1=0,m1=0,h1=0,D=1,q=180,R=.066,t="data:image/svg+xml;base64,"+btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>'),u1=[],L=[],N=[],x1=[{x:-1,z:1},{x:1,z:1},{x:1,z:-1},{x:-1,z:-1}],P={x:0,y:0,z:0},E=e=>e<0?-e:e,v1=(e,t)=>e<t?e:t,U=(e,t)=>t<e?e:t,g1=(e,t)=>E(e)>t?e:0,W=(e,t=0,a=1)=>e<t?t:a<e?a:e,y1=e=>K1(Z(e*J1),$(e*J1))/J1,d1=(e,t,a)=>e+(2*(t=(t-e)%360)%360-t)*W(a)||0,K=(e,t,a)=>(0<a?a<1?e+(t-e)*a:t:e)||0,p1=(e,t)=>(e=W(e),K(e,1-e,t)),z1=(e,t,a=0)=>V1(e*e+t*t+a*a),V=(e=0,t=0,a=0,l=1)=>{Q=M.m11*e+M.m21*t+M.m31*a+M.m41*l,B=M.m12*e+M.m22*t+M.m32*a+M.m42*l,H=M.m13*e+M.m23*t+M.m33*a+M.m43*l,I=M.m14*e+M.m24*t+M.m34*a+M.m44*l},p=(e,t=l,a=0)=>(a*=16,t[a++]=e.m11,t[a++]=e.m12,t[a++]=e.m13,t[a++]=e.m14,t[a++]=e.m21,t[a++]=e.m22,t[a++]=e.m23,t[a++]=e.m24,t[a++]=e.m31,t[a++]=e.m32,t[a++]=e.m33,t[a++]=e.m34,t[a++]=e.m41,t[a++]=e.m42,t[a++]=e.m43,t[a]=e.m44,t),_=(e=P1,t=M)=>(t.m11=e.m11,t.m12=e.m12,t.m13=e.m13,t.m14=e.m14,t.m21=e.m21,t.m22=e.m22,t.m23=e.m23,t.m24=e.m24,t.m31=e.m31,t.m32=e.m32,t.m33=e.m33,t.m34=e.m34,t.m41=e.m41,t.m42=e.m42,t.m43=e.m43,t.m44=e.m44,t),o=(e,t,a)=>P1.translate(e,t,a),S1=(e,t,a)=>P1.rotate(e,t,a),n=(e,t,a)=>P1.scale(e,t,a),m=(e,a)=>Array.from(Array(e),(e,t)=>a(t)),w1=(e,t,a)=>(e.C=a,e.u=t,e),s=(e,t,a=e.u)=>(_(t),w1(e.map(({x:e,y:t,z:a})=>(V(e,t,a),{x:Q,y:B,z:H})),a,e.C)),i=(e,t,a)=>e.map(e=>s(e,t,a)),A1=(a,l=0)=>m(a,e=>{let t=$(2*J*e/a);return{x:Z(2*J*e/a),y:0,z:E(t)<.01?t:t<0?t-l:t+l}}),M1=(l,r,s)=>l.map((e,t,{length:a})=>w1([e,r[a-t-1],r[a-(t+1)%a-1],l[(t+1)%a]],l.u,s)),f=(e,t,a=0,l)=>(e=e?A1(e,l):x1,l=s(e,o(0,1).scale3d(0<a?a:1)),e=s(e,o(0,-1).scale3d(a<0?-a:1)).reverse(),[...M1(e,l,t),l,e]),a=(l,r=l,s=(e,t)=>(t*=J/r,{x:$(e*=2*J/l)*Z(t),y:$(t),z:Z(e)*Z(t)}))=>{let c=[];for(let a=0;l>a;a++)for(let t=0;r>t;t++){let e=w1([],0,1);c.push(e),e.push(s(a,t,e)),t&&e.push(s((a+1)%l,t,e)),r-1>t&&e.push(s((a+1)%l,t+1%r,e)),e.push(s(a,t+1%r,e))}return c},G=(e,t,a)=>K(e,t,1-_1(-a*R)),I1=()=>{h3.innerHTML="Souls: "+[0,"I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII"][s1=u1.reduce((e,{i:t})=>e+t,0)]+" / XIII"},k1=()=>{localStorage.DanteSP22=JSON.stringify([L.map(({i:e})=>e),u1.map(({i:e})=>e),w,X,F])},h=(e,t,a,l=0)=>255*l<<24|255*a<<16|255*t<<8|255*e,F1=(e,t,a,l)=>new DOMMatrix([a,0,0,0,0,l,0,0,0,0,(t+e)/(e-t),-1,0,0,2*t*e/(e-t),0]),u=(e,t=new DOMMatrix,a)=>r.o.push(...i(e,t,a)),v=(e,t=1)=>{let a=r;N.push(r={m:new DOMMatrix,G:t,o:[]}),e(),r=a},g=e=>{let t=r,a=L.length,l={i:0,g:0,h:0,m:t.m,H:e,F(){l.g=G(l.g,l.i,4),l.h=G(l.h,l.i,1),_(t.m).multiplySelf(e),Y&&(V(),z1(P.x-Q,P.y-B,P.z-H)<3)&&(l.g<.3||.7<l.g)&&(l.i=l.i?0:1,a&&1/0>D&&(D=X+1,h4.innerHTML="* click *"),w=a,k1()),!a&&l.i&&.8<l.g&&(l.i=0,s1<13?1/0>D&&(D=X+3,h4.innerHTML="Not leaving now, there are souls to catch!"):c1||(1/0>D&&(D=X+1/0,h4.innerHTML="Well done. They will be punished.<br>Thanks for playing"),c1=1)),M.rotateSelf(60*l.g-30,0).translateSelf(0,1)}};L.push(l),u(f(5),e.translate(-.2).rotate(90,90).scale(.4,.1,.5),h(.4,.5,.5)),u(f(5),e.translate(.2).rotate(90,90).scale(.4,.1,.5),h(.4,.5,.5)),u(f(),e.translate(0,-.4).scale(.5,.1,.5),h(.5,.5,.4))},d=(f,...e)=>{let m,h,u,v=0,g=0,d=1,p=3,b=-1,S={i:0,F(){if(!S.i){let e,t,a,l,r,s,c,o,n=1,i=1/0;for(let l of A){let{x:e,z:t,w:a}=l;t=(e=z1(I-e,k-t))-a,o||=t<0,0<t&&i>t&&(i=t,M=l),n=v1(n,e/a)}o||({x:e,z:t,w:a}=M,l=I-e,r=k-t,s=z1(l,r),c=K1(-r,l),d&&(g=(G1()-.5)*J/2,p=W(p/(1+G1()))),c+=g,b=-$(c),v=Z(c),.1<s&&(s=v1(s,a)/(s||1),I=l*s+e,k=r*s+t)),d=o,p=G(p,6*(1-n)+3,n+3),F=G(F,I=G(I,I+b,p),p),Y=G(Y,k=G(k,k+v,p),p),m=d1(m,K1(F-h,Y-u)/J1-180,1-_1(-3*R)),_(C).multiplySelf(f).translateSelf(h=F,0,u=Y).rotateSelf(0,m,7*Z(1.7*X)),V(),z1(P.x-Q,P.y-B,P.z-H)<1.6&&(S.i=1,e=[,"Mark Zuckemberg<br>made the world worse","Giorgia Meloni<br>fascist","Andrzej Mazur<br>for the js13k competition","Donald Trump<br>lies","Kim Jong-un<br>Dictator, liked pineapple on pizza","Maxime Euziere<br>forced me to finish this game","She traded NFTs apes",,"Vladimir Putin<br>evil war","He was not a good person",,"Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat"][s1]||'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift',1/0>D&&(D=X+(s1&&s1<12?5:7),h4.innerHTML=e),I1(),k1())}S.i&&_(N[2].m).translateSelf(t%4*1.2-1.7+Z(X+t)/7,-2,1.7*(t/4|0)-5.5+E(t%4-2)+$(X/1.5+t)/6)}},A=e.map(([e,t,a])=>({x:e,z:t,w:a})),M=A[0],{x:I,z:k}=M,F=I,Y=k,C=r.m,t=u1.length;u1.push(S)},Y1=({x:e,y:t,z:a},l)=>e*l.x+t*l.y+a*l.z,C1=e=>{let t,a=0,l=0,r=0,s=e.at(-1);for(t of e)a+=(s.y-t.y)*(s.z+t.z),l+=(s.z-t.z)*(s.x+t.x),r+=(s.x-t.x)*(s.y+t.y),s=t;return t=z1(a,l,r),a/=t,l/=t,r/=t,{x:a,y:l,z:r,w:a*s.x+l*s.y+r*s.z}},D1=(l,r)=>{let s,c,o,n=r.B;for(let e=0;n.length>e;++e)if((s=Y1(l,n[e])-l.w)<-8e-5?o=r:8e-5<s&&(c=r),o&&c){c=[],o=[],n=r.B,e=r.v;let t=n.at(-1),a=Y1(l,t)-l.w;for(let e of n)s=Y1(l,e)-l.w,a<8e-5&&o.push(t),-8e-5<a&&c.push(t),(8e-5<a&&s<-8e-5||a<-8e-5&&8e-5<s)&&(a/=s-a,t={x:t.x+(t.x-e.x)*a,y:t.y+(t.y-e.y)*a,z:t.z+(t.z-e.z)*a},c.push(t),o.push(t)),t=e,a=s;return{l:2<c.length&&{B:w1(c,n.u,n.C),v:e,A:r},j:2<o.length&&{B:w1(o,n.u,n.C),v:e,A:r}}}return{l:c,j:o}},c=(e,t,a=C1(t.B))=>{let l,r,s;return e?({l,j:r}=D1(e,t),l||r||e.o.push(t),l&&(e.l=c(e.l,l,a)),r&&(e.j=c(e.j,r,a))):({x:l,y:r,z:a,w:s}=a,e={x:l,y:r,z:a,w:s,o:[t],l:0,j:0}),e},T1=(t,r,s)=>{let c=[],o=(e,t)=>{let{l:a,j:l}=D1(e,t);a||l||(0<s*Y1(e,r)?a=t:l=t),a&&(e.l?o(e.l,a):c.push(a)),l&&e.j&&o(e.j,l)};for(let e of r.o)o(t,e);return c},j1=(e,t)=>e&&(t(e),j1(e.l,t),j1(e.j,t)),O1=e=>(j1(e,t=>{let e=t.j;t.j=t.l,t.l=e,t.x*=-1,t.y*=-1,t.z*=-1,t.w*=-1;for(let e of t.o)e.v=!e.v}),e),Q1=e=>e.length?e.reduce((e,t)=>c(e,{B:t,v:0,A:0}),0):e,b=(...e)=>e.reduce((l,t)=>{let r=[];if(l=Q1(l),t){t=Q1(t),j1(l,e=>e.o=T1(t,e,1)),j1(t,e=>r.push([e,T1(l,e,-1)]));for(let[t,a]of r)for(let e of a)c(l,e,t)}return l}),S=(e,...t)=>{let a=e=>{let t;return e.A&&((t=l.get(e.A))?(r.delete(t),e=a(e.A)):l.set(e.A,e)),e},l=new Map,r=new Map;return e=O1(b(O1(Q1(e)),...t)),j1(e,t=>{for(let e of t.o)r.set(a(e),e.v)}),Array.from(r,([{B:e},t])=>{let a=e.map(({x:e,y:t,z:a})=>({x:e,y:t,z:a}));return w1(t?a.reverse():a,e.u,e.C)})},B1=(e,t,a,l)=>{e.translateSelf(t+Z(X+2)/5,a+Z(.8*X)/3,l).rotateSelf(2*Z(X),Z(.7*X),Z(.9*X))},H1=(e,t,a)=>{A?1100<hC.width&&(_().rotateSelf(0,40*Z(z)-80,-8),p(M,E1,36),p(M,E1,37),p(M,E1,38),e1.uae(e,!1,E1),e1.d97(4,N[39].D-N[37].s,5123,2*N[37].s)):(e1.uae(e,!1,E1),e1.d97(4,(t?N[39].D:N[37].s)-3,5123,6),e1.uae(e,!1,U1),e1.das(4,N[a].D-N[a].s,5123,2*N[a].s,u1.length),e1.das(4,N[42].D-N[42].s,5123,2*N[42].s,L.length))},X1=(e,t=35633)=>(t=e1.c6x(t),e1.s3c(t,e),e1.c6a(t),t),q1=(e,t)=>{let a={},l=e1.c1h();return e1.abz(l,e),e1.abz(l,X1(t,35632)),e1.l8l(l),e=>e?a[e]||(a[e]=e1.gan(l,e)):e1.u7y(l)},R1=e=>{h4.innerHTML+=".",setTimeout(e)},L1=e=>Z(e*J*2),N1=new AudioContext,M=new DOMMatrix,P1=new DOMMatrix,l=new Float32Array(16),E1=new Float32Array(624),U1=new Float32Array(624),W1=new Uint8Array(65536),{PI:J,atan2:K1,sin:Z,cos:$,sqrt:V1,exp:_1,random:G1}=Math,J1=J/180,Z1=N1.createBufferSource(),e1=hC.getContext("webgl2",{powerPreference:"high-performance"});for(let e in e1)e1[e[0]+[...e].reduce((e,t,a)=>(e*a+t.charCodeAt(0))%434,0).toString(36)]=e1[e];R1(()=>{let e=0,l=()=>{if(2==++e){let h=[new Float32Array(16),new Float32Array(16)],e=t=>{let a;if(requestAnimationFrame(e),z+=l=(t-(k||t))/1e3,X+=R=A?0:v1(.066,l),k=t,0<R){let e=1;for(j(),D&&X>D&&(D=0,h4.innerHTML=""),F=G(F,L[9].h,.2+.3*E(2*L[9].h-1)),t1=G(t1,c1?G(t1,-9,1.5):W(X/3),1),t=()=>_(P1,N[++e].m),l1=p1(L[12].g,L[13].g),r1=K(G(r1,0,1),y1(r1+60*R),L[5].g-L[6].h),O=K(G(O,0,5),y1(O+56*R),l1),y=K(G(y,0,4),y1(y+48*R),l1),B1(t(),-12,4.2,40*t1-66),t().translateSelf(0,0,-15).scaleSelf(1,W(1.22-L[1].g),1),t().translateSelf(0,0,15).scaleSelf(1,W(1.22-L[2].g),1),t().translateSelf(-99.7,-1.9,63.5).scaleSelf(1,W(1.1-L[6].g),1),t().translateSelf(-100,.6,96.5).scaleSelf(.88,1.2-L[12].g),t().translateSelf(0,L[3].g<.01?-500:(1-L[2].g)*L[3].h*(5*$(1.5*X)+2)+15*(L[3].g-1),0),l=v1(L[2].h,1-L[4].h),t().translateSelf(l*Z(X/1.5+2)*12),t().translateSelf(l*Z(.7*X+2)*12),t().translateSelf(l*Z(X+3)*8.2),t().translateSelf(9.8*(1-l)),l=W(1-5*l)*p1(L[4].g,L[5].g),t().translateSelf(0,l*Z(1.35*X)*4),t().translateSelf(0,0,l*Z(.9*X)*8),t().translateSelf(0,-6.5*L[4].h),t().translateSelf(-75,(1-L[5].h)*(1-L[6].g)*3,55).rotateSelf(180*(1-L[5].h)+r1,0),l=p1(L[7].h,L[6].h),t().translateSelf(0,l*Z(X)*5+3.5*(1-U(L[6].g,L[7].g))),t().translateSelf(0,l*Z(X+3)*6,l*Z(.6*X+1)*6),t().translateSelf(0,-7.3*L[7].h),B1(t(),-123,1.4,55+-65*F),l=p1(L[10].g,L[11].g),t().translateSelf(0,-2,l*E(Z(1.1*X))*-8.5+10),t().translateSelf(0,-2,l*E(Z(2.1*X))*-8.5+10),t().translateSelf(0,-2,-8.5*U((1-L[10].g)*(1-l),l*E(Z(1.5*X)))+10),l=p1(L[8].h,L[12].h),a=0;a<4;a++)t().translateSelf((2<a?2*(1-l)+l:0)-100,l*Z(1.3*X+1.7*a)*(3+a/3)+.7,115+(1&a?-1:1)*(1-L[8].h)*(1-L[12].h)*-7+U(l,.05)*$(1.3*X+7*a)*(4-2*(1-a/3)));for(t().translateSelf(2.5*(1-l)-139.7,-3*(1-L[8].g)+l*Z(.8*X)*-1-1.8,93.5).rotateSelf($(1.3*X)*(3*l+3),0),t().translateSelf(-81,.6,106).rotateSelf(0,40+O),t().translateSelf(-65.8,.8,106).rotateSelf(0,y),t().translateSelf(-50.7,.8,106).rotateSelf(0,180-y),t().translateSelf(-50.7,.8,91).rotateSelf(0,270+y),l=p1(L[13].h,L[14].h),a=0;a<3;++a)t().translateSelf(0,l*Z(1.5*X+1.5*a)*4+(a?0:(1-L[13].h)*(1-L[14].h)));for(t().translateSelf(-2*Z(X)).rotateSelf(25*Z(X)),l=p1(p1((L[14].g+L[14].h)/2,L[13].h),(L[15].g+L[15].h)/2),t().translateSelf(0,16*l,8.5*W(2*l-1)+95),l=0;l<13;++l)u1[l].F(),p(M,U1,l);for(l=0;l<16;++l)L[l].F(),p(M,U1,l+13),U1[16*l+223]=1-L[l].g;for(x(t),t=0;e>=t;++t)p(N[t].m,E1,t-1);Y=0,c(),e1.b6o(36160,f),e1.v5y(0,0,128,128),e1.c4s(16640),e1.cbf(!0,!1,!0,!1);var{x:t,y:l,z:r}=P;e1.uae(c("b"),!1,p(_().rotateSelf(0,180).invertSelf().translateSelf(-t,-l,.3-r))),H1(c("c"),0,40),e1.c4s(256),e1.cbf(!1,!0,!1,!0),e1.uae(c("b"),!1,p(_().translateSelf(-t,-l,-r-.3))),H1(c("c"),0,40),e1.f1s()}t=i1,l=f1,a=m1,A?(_(C).invertSelf(),V(3.6,3.5),t=Q,l=B,a=5,_(P1,u).rotateSelf(-20,0).invertSelf().translateSelf(-t,-l,-a).rotateSelf(0,99)):_(P1,u).rotateSelf(-h1,-q).invertSelf().translateSelf(-t,-l,-a),g(),e1.b6o(36160,i),e1.v5y(0,0,2048,2048),n[0](54.7*1.1),n[1](126*1.1),o(),e1.b6o(36160,null),e1.v5y(0,0,e1.drawingBufferWidth,e1.drawingBufferHeight),e1.cbf(!0,!0,!0,!0),e1.c4s(16640),e1.uae(o("a"),!1,p(C)),e1.uae(o("b"),!1,p(u)),e1.uae(o("i"),!1,h[0]),e1.uae(o("j"),!1,h[1]),e1.ubu(o("k"),t,l,a),H1(o("c"),!a1,41),s(),e1.ubu(s("j"),e1.drawingBufferWidth,e1.drawingBufferHeight,z),e1.ubu(s("k"),t,l,a),e1.uae(s("b"),!1,p(_(u).invertSelf())),e1.d97(4,3,5123,0),e1.b6o(36160,f),e1.f1s()},u=new DOMMatrix,v=new DOMMatrix,t=r,a=X1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),g=q1(X1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),`#version 300 es
void main(){}`),s=q1(X1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),`#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`),c=q1(a,`#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`),o=q1(a,`#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`),d=m(8,()=>({})),n=m(2,e=>{let t=e1.c25();return e1.a4v(33984+e),e1.b9j(3553,t),e1.t60(3553,0,33190,2048,2048,0,6402,5125,null),e1.t2z(3553,10241,9729),e1.t2z(3553,10240,9729),e1.t2z(3553,34893,515),e1.t2z(3553,34892,34894),e1.t2z(3553,10243,33071),e1.t2z(3553,10242,33071),l=>{let a=0,r=0,s=0,c=1/0,o=1/0,n=1/0,i=-1/0,f=-1/0,m=-1/0;e1.fas(36160,36096,3553,t,0),e1.c4s(256),_().scale3dSelf(l).multiplySelf(_(T[e],v).multiplySelf(u).invertSelf());for(let t=0;t<8;++t){let e=d[t];V(4&t?1:-1,2&t?1:-1,1&t?1:-1),a-=e.x=(0|Q)/l/I,r-=e.y=(0|B)/l/I,s-=e.z=(0|H)/l/I}for(_().rotateSelf(298,139).translateSelf(a/8,r/8,s/8),l=0;l<8;++l){let{x:e,y:t,z:a}=d[l];V(e,t,a),c=v1(c,Q),i=U(i,Q),o=v1(o,B),f=U(f,B),n=v1(n,H),m=U(m,H)}l=10+e,n*=n<0?l:1/l,m*=0<m?l:1/l,e1.uae(g("b"),!1,p(_(P1,v).scaleSelf(2/(i-c),2/(f-o),2/(n-m)).translateSelf((i+c)/-2,(f+o)/-2,(n+m)/2).multiplySelf(M),h[e])),H1(g("c"),!a1,41)}}),i=e1.c5w(),l=(a=e1.c25(),e1.c3z()),f=e1.c5w();c(),e1.uae(c("a"),!1,p(F1(1e-4,2,1.4,.4))),o(),e1.ubh(o("q"),2),e1.ubh(o("h"),1),e1.ubh(o("g"),0),s(),e1.ubh(s("q"),2),e1.b6o(36160,i),e1.d45([0]),e1.r9l(0),e1.b6o(36160,f),e1.bb1(36161,l),e1.r4v(36161,33190,128,128),e1.f8w(36160,36096,36161,l),e1.a4v(33986),e1.b9j(3553,a),e1.t60(3553,0,6408,128,128,0,6408,5121,null),e1.fas(36160,36064,3553,a,0),e1.b9j(3553,e1.c25()),e1.t60(3553,0,6408,1024,1024,0,6408,5121,t),e1.t2z(3553,10241,9987),e1.t2z(3553,10240,9729),e1.gbn(3553),e1.e8z(2929),e1.e8z(2884),e1.c70(1),e1.c7a(1029),e1.d4n(515),e1.c5t(0,0,0,0),(()=>{let e,n,i,f,m,h,u,v,g,d,p,b,S,l,t=!0,r=[],a=()=>{b4.innerHTML="Music: "+t,A||!t?Z1.disconnect():Z1.connect(N1.destination)},s=()=>{let e=(hC.height=innerHeight)/(hC.width=innerWidth)*1.732051;T=[F1(.3,55,e,1.732051),F1(55,181,e,1.732051)],C=F1(.3,181,e,1.732051),f=v=void 0,r.length=Y=l=b=S=o1=n1=0},c=(e,t=0)=>{if(A!==e){A=e,a1=t,s(),document.body.className=e?"l m":"l";try{e?(document.exitFullscreen().catch(()=>0),document.exitPointerLock()):(document.body.requestFullscreen().catch(()=>0),Z1.start())}catch{}a()}};oncontextmenu=()=>!1,b1.onclick=()=>c(!1),b2.onclick=()=>c(!1,1),b5.onclick=()=>c(!0),b4.onclick=()=>{t=!t,a()},b3.onclick=()=>{confirm("Restart game?")&&(localStorage.DanteSP22="",location.reload())},onclick=e=>{if(!A&&(e.target===hC&&(Y=1),a1))try{hC.requestPointerLock()}catch{}},onkeyup=onkeydown=e=>{let t;e.repeat||(t={KeyE:0,Space:0,Enter:0,Escape:1,KeyA:2,ArrowLeft:2,KeyD:3,ArrowRight:3,KeyW:4,ArrowUp:4,KeyS:5,ArrowDown:5}[e.code],(r[t]=!!e.type[5]&&!0)&&(0===t&&(Y=1),1===t&&c(!0)))},onmousemove=({movementX:e,movementY:t})=>{a1&&(e||t)&&(q+=.1*e,h1+=.1*t)},hC.ontouchstart=l=>{if(!A){for(let{pageX:e,pageY:t,identifier:a}of l.changedTouches)a1&&e>hC.clientWidth/2?void 0===v&&(g=0,h=e,u=t,v=a,d=q,p=h1):void 0===f&&(m=0,n=e,i=t,f=a);e=z}},hC.ontouchmove=l=>{let r,s,c,o;if(!A)for(let{pageX:e,pageY:t,identifier:a}of l.changedTouches)v===a&&(q=d+(e-h)/2.3,h1=p+(t-u)/2.3,g=1),f===a&&(a=(n-e)/20,r=E(a),s=(i-t)/20,c=E(s),(o=.5<U(r,c))&&(m=1),b=(o&&.2<r)*W(a,-1),S=(o&&.2<c)*W(s,-1),2<r&&(n=e+20*(a<0?-1:1)),2<c&&(i=t+20*(s<0?-1:1)))},hC.ontouchend=t=>{let a;document.activeElement===document.body&&t.preventDefault();for(let e of t.changedTouches)e.identifier===v?(v=void 0,g||(a=1),g=0):e.identifier===f?(f=void 0,S=b=0,m||(a=1),m=0):a=1;t.target===hC&&a&&e&&.02<(t=z-e)&&t<.7&&(Y=1)},j=()=>{o1=S+(r[4]?1:0)-(r[5]?1:0),n1=b+(r[2]?1:0)-(r[3]?1:0);let a=navigator.getGamepads()[0];if(a){let e=e=>t[e]?.pressed||0<t[e]?.value?1:0,t=a.buttons;a=a.axes,a1&&(h1+=R*g1(a[3],.3)*80,q+=R*g1(a[2],.3)*80),o1+=e(12)-e(13)-g1(a[1],.2),n1+=e(14)-e(15)-g1(a[0],.2),e(9)&&c(!0),(a=e(3)||e(2)||e(1)||e(0))&&!l&&(Y=1),l=a}},document.onvisibilitychange=onblur=onresize=s,c(!0)})(),(()=>{let n,i,f,m,h,u,v,g,d,p,b,S,A,M,I=0,k=0,F=0,Y=1,C=2,D=15,T=()=>_((C?L[w]:N[b&&1===N[b].G&&b||0]).m),j=e=>{1<C?(_(L[w].m).multiplySelf(L[w].H),V(0,w||.9<t1?15:1,-2.4)):(T(),V(I,k,F)),e&&(h=(Q-P.x)/R,u=(H-P.z)/R),P.x=Q,P.y=B,P.z=H},O=(e,t,a,l)=>K(e,t,Y||(W(E(t-e)**.5-a)+1/7)*(1-_1(-1.5*l*R)));x=e=>{let t,a,l=(j(p),e1.r9r(0,0,128,128,6408,5121,W1),(()=>{let t,e,a,l,r,s,c=0,o=0,n=0,i=0,f=0,m=0,h=-1;for(t=0;t<36;++t)for(e=512*t,a=96;a<416;a+=4)for(l=0;l<2;++l)(r=W1[e+a+l])>i&&(i=r),r+(s=W1[e+a+l+2])&&(h<0||h===t)&&(h=t,s===p?++c:o&&o!==s||(o=s,++n));for(p=h<0?0:n>2*c?o:p,c=36;c<128;c+=1){for(t=h=n=o=0,e=512*c,a=0;a<128;a+=1)for(l=e+4*a,r=0;r<2;++r){s=W1[l+r];let e=W1[l+r+2];(r?64<a:a<64)?o=U(o,s):n=U(n,s),r?t=U(t,e):h=U(h,e)}E(n-o)>E(f)&&(f=n-o),E(t-h)>E(m)&&(m=t-h)}g=W(1-.02*U(E(f),E(m))),f/=255,i/=255,m/=255,T().invertSelf(),V(f,i,m,0),I+=Q,k+=i,F+=H,j()})(),!C&&p===b||(b=p,T().invertSelf(),V(P.x,P.y,P.z),I=Q,k=B,F=H),C=C&&(p?0:1),P.x),r=P.y,s=P.z,c=((l<-20||s<109?-25:-9)>r&&(C=2),1===p&&(L[9].i=l<-15&&s<0?1:0),d=K(G(d,r,2),r,C||8*E(d-r)),A=O(A,d,2,1),S=O(S,l,.5,1),M=O(M,s,.5,1),m=G(m,l1*(27<p&&p<32),2),a1?(t=C+(1-_1(-18*R)),i1=K(i1,l,t),f1=K(f1,d+1.5,t),m1=K(m1,s,t),q=y1(q)):(m1=O(m1,M+-18+5*m,1,2+m),f1=O(f1,U(A+W((-60-s)/8,0,20)+13+9*m,6),4,2),i1=O(i1,S,1,2+m),t=v1(-6,-E(M-m1)),q=d1(q,90-y1(K1(t,a=S-i1)/J1),Y+(1-_1(-10*R))),h1=d1(h1,90-K1(z1(t,a),f1-A)/J1,Y+(1-_1(-10*R)))),h1=W(h1,-87,87),Y=0,t=W(o1,-1),a=W(n1,-1),g1(z1(t,a)**.5,.1)),o=K1(t,a);for(t=c*E(t)*Z(o),a=c*E(a)*$(o),c&&(n=90-o/J1),i=d1(i,n,1-_1(-8*R)),f=G(f,c,10),e().translateSelf(l,d,s).rotateSelf(0,i),o=0;o<2;++o)l=9.1*X-J*o,_(N[37].m,e()).translateSelf(0,f*W(.45*Z(l-J/2))).rotateSelf(f*Z(l)*.25/J1,0);D=p?5:G(D,C?13:19-2*v1(0,r+10),2.2),h=p||C?0:G(h,0,3),u=p||C?0:G(u,0,3),v=C?0:G(v,p?7*W(2*c)*g:0,p?9:1),o=a1?(180+q)*J1:0,e=R*(h+v*(a*$(o)-t*Z(o))),r=-D*R,t=R*(u+v*(a*Z(o)+t*$(o))),T().invertSelf(),V(e,r,t,0),I+=Q,k+=r,F+=H,j()}})(),requestAnimationFrame(e)}},r=new Image;r.onload=r.onerror=l,r.src=t,(r=>{let N=0,s=()=>{let b=0,e=m=>{let r,h,s,u,c,o,n=0,i=0,v=[],f=new Int32Array(768*m),g=2**(a-9)/m,d=J*2**(l-8)/m,p=q*m&-2;for(let l=0;l<=11;++l)for(let e=0,t=+"000001234556112341234556011111111112011111111112000001111112"[12*N+l];e<32;++e){let a=(32*l+e)*m;for(r=0;r<4;++r)if(u=0,t&&(u=S[t-1].charCodeAt(e+32*r)-40,u+=0<u?106:0),u){if(!(h=v[u])){let l,r,s=0,c=0,o=h=u,n=N<2?e=>e%1*2-1:L1,i=N<2?N<1?e=>e%1<.5?1:-1:e=>(e=e%1*4)<2?e-1:3-e:L1,f=new Int32Array(D+T+L);for(let t=0,a=0;D+T+L>t;++t,++a){let e=1;D>t?e=t/D:D+T>t||(e=(1-(e=(t-D-T)/L))*3**(-j/16*e)),a<0||(a-=4*m,r=.00396*2**((o+M-256)/12),l=.00396*2**((o+F-256)/12)*(1+(N?0:.0072))),f[t]=80*(n(s+=r*e**(I/32))*A+i(c+=l*e**(Y/32))*k+(C?(2*G1()-1)*C:0))*e|0}h=v[h]=f}for(let e=0,t=2*a;h.length>e;++e,t+=2)f[t]+=h[e]}for(let e,t=0;m>t;++t)r=0,h=2*(a+t),((e=f[h])||o)&&(c=.00308*O,1!==N&&4!==N||(c*=Z(g*h*J*2)*R/512+.5),c=1.5*Z(c),n+=c*i,i+=c*(s=(1-Q/255)*(e-i)-n),e=4===N?i:3===N?s:n,N||(e=(e*=22e-5)<1?-1<e?Z(e/4*J*2):-1:1,e/=22e-5),e*=B/32,o=1e-5<e*e,r=e*(1-(s=Z(d*h)*H/512+.5)),e*=s),p>h||(r+=f[1+h-p]*X/255,e+=f[h-p]*X/255),P[s=b+h>>1]+=(f[h]=r)/65536,E[s]+=(f[++h]=e)/65536}b+=768*m},S=[["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U","(059<59<A9<AE<AEHAEHMEHMQMQTY(Y","(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y","(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^","Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]","QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"],[".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5","-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5","*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6","5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5","5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"],["9(((9(((9(((9(((9(((9(((9(((9","9(((Q(((Q(((Q"],["9(9(9(9(9(9(9(999(9(9(9(999(9(9","9(9(9(9(9(999(9(((((Q"],["((((Q(((((((Q(((((((Q(((((((Q","Q((Q((Q((Q((Q((Q((((Q"]][N],[A,M,I,k,F,Y,C,D,T,t,j,a,O,Q,B,H,l,X,q,R]=[[69,128,0,143,128,0,0,196,100,36,0,0,149,110,31,47,3,56,2,0],[100,128,0,201,128,0,0,100,144,35,0,6,135,0,32,147,6,0,6,195],[255,116,85,255,116,37,14,64,144,73,99,0,136,15,32,0,0,66,6,0],[0,140,0,0,140,0,81,64,400,47,55,5,239,135,13,176,5,16,4,187],[221,128,64,210,128,64,255,64,144,73,79,7,195,15,21,20,0,9,3,64]][N],L=4*t**2;e(5513),e(4562),e(3891),R1(++N<5?s:r)},e=N1.createBuffer(2,5362944,44100),P=e.getChannelData(0),E=e.getChannelData(1);Z1.buffer=e,Z1.loop=!0,R1(s)})(()=>{R1(()=>{let a=0,r=[],c=[],o=[],n=[],i=new Int32Array(8),f=new Map,m=new Int32Array(i.buffer,0,5),h=new Float32Array(i.buffer);N.map((e,t)=>{let s,l=e=>{let{x:t,y:a,z:l}=s[e],r=(h[0]=t,h[1]=a,h[2]=l,f.get(e=""+(s.C?m:i)));return void 0!==r?(t=3*r,n[t]=(n[t++]+i[5])/2,n[t]=(n[t++]+i[6])/2,n[t]=(n[t]+i[7])/2):(f.set(e,r=f.size),c.push(t,a,l,h[3]),o.push(i[4]),n.push(i[5],i[6],i[7])),r};for(s of(h[3]=41<t?-14:e.G&&t,e.o)){let{x:e,y:t,z:a}=C1(s);i[4]=0|s.u,i[5]=32767*e,i[6]=32767*t,i[7]=32767*a;for(let e=2,t=l(0),a=l(1);s.length>e;++e)r.push(t,a,a=l(e))}e.o=null,e.s=a,e.D=a=r.length}),e1.b11(34962,e1.c1b()),e1.b2v(34962,new Float32Array(c),35044),e1.v7s(0,4,5126,!1,0,0),e1.b11(34962,e1.c1b()),e1.b2v(34962,new Int16Array(n),35044),e1.v7s(1,3,5122,!0,0,0),e1.b11(34962,e1.c1b()),e1.b2v(34962,new Uint32Array(o),35044),e1.v7s(2,4,5121,!0,0,0),e1.b11(34963,e1.c1b()),e1.b2v(34963,new Uint16Array(r),35044),e1.e3x(0),e1.e3x(1),e1.e3x(2);try{let[a,l,e,t,r]=JSON.parse(localStorage.DanteSP22);L.map((e,t)=>e.g=e.h=e.i=t?0|a[t]:0),u1.map((e,t)=>e.i=0|l[t]),w=e,F=r,X=t,R=0}catch{}I1(),t1=W(w),R1(l)});let t=m(11,e=>o(Z(e/10*J),e/10).rotate(+e).scale(1.0001-e/10,0,1-e/10)),c=m(10,e=>M1(s(A1(18),t[e]).reverse(),s(A1(18),t[e+1]),1)).flat();v(()=>u([x1.slice(1)],o(-2).scale3d(3).rotate(90,0)),0),v(()=>{let e=a=>v(()=>{x1.map(({x:e,z:t})=>{u(f(11,1),o(4*e,4,a+4*t).scale(.8,3,.8),h(.5,.3,.7,.6)),u(f(),o(4*e,7,a+4*t).scale(1,.3),h(.5,.5,.5,.3))}),u(S(i(f(),o(0,0,a).scale(5,1,5),h(.8,.8,.8,.3)),...[-1,1].map(e=>i(f(),o(5*e,.2,a).rotate(-30*e).scale(4,1,2),h(.8,.8,.8,.3))))),u(f(),o(0,-3,a).scale(8,2,8),h(.4,.4,.4,.3))}),t=e=>S(i(f(),o(0,-e/2).scale(6,e-1,2.2)),i(f(),o(0,-e/2-6).scale(4,e-3,4)),i(f(32,1),o(0,e/2-9).rotate(90,0,90).scale3d(4))),a=()=>v(()=>m(7,e=>u(i(f(6,1),o(4*(e/6-.5),3).scale(.2,3,.2),h(.3,.3,.38))))),l=S(i(f(30,1,1.15,1),o(0,-3).scale(3.5,1,3.5),h(.7,.4,.25,.7)),i(f(30,1,1.3,1),o(0,-2.5).scale(2.6,1,3),h(.7,.4,.25,.2)),i(f(),o(4,-1.2).scale3d(2),h(.7,.4,.25,.3))),r=(v(()=>{u(l),g(o(0,-3,4))}),g(o(-5.4,1.5,-19).rotate(0,-90)),d(o(-.5,2.8,-20),[0,0,2.5],[0,-3,2.5]),d(o(0,2.8),[5,10,3],[-5,10,3],...A1(18).map(({x:e,z:t})=>[7*e,10*t,4.5-2*E(e)])),x1.map(({x:e,z:t})=>u(f(6),o(3*e,3,15*t).scale(.7,4,.7),h(.6,.3,.3,.4))),[-15,15].map((e,t)=>{a(),a(),u(f(),o(0,6.3,e).scale(4,.3,1),h(.3,.3,.3,.4)),u(f(),o(0,1,e).scale(3,.2,.35),h(.5,.5,.5,.3)),u(f(),o(0,0,t?22:-23).scale(3,1,8),h(.9,.9,.9,.2)),m(5,e=>u(c,o(18.5*(t-.5),0,4.8*e-9.5).rotate(0,180-180*t).scale(1.2,10,1.2),h(1,1,.8,.2)))}),u(f(),o(-5,-.2,-26).scale(3.2,1,2.5).skewX(3),h(.8,.8,.8,.2)),u(f(),o(3,1.5,-20).scale(.5,2,5),h(.7,.7,.7,.2)),u(f(),o(-3.4,-.2,-19).scale(2,1,1.5).rotate(0,-90),h(.75,.75,.75,.2)),u(f(5),o(-5.4,0,-19).scale(2,1,2).rotate(0,-90),h(.6,.3,.3,.4)),u(f(),S1(0,60).translate(14.8,-1.46,-1).rotate(-30).scale(4,.6,4.5),h(.8,.2,.2,.5)),u(S(b(i(f(6,0,0,.3),o(8,-3,-4).scale(13,1,13),h(.7,.7,.7,.2)),i(f(6),o(0,-8).scale(9,8,8),h(.4,.2,.5,.5)),i(f(6,0,0,.3),o(0,-.92).scale(13,2,13),h(.8,.8,.8,.2))),i(f(5),n(5,30,5),h(.4,.2,.6,.5)),i(f(5,0,1.5),o(0,1).scale(4.5,.3,4.5),h(.7,.5,.9,.2)),i(f(),S1(0,60).translate(14,.7,-1).rotate(-35).scale(2,2,2),h(.5,.5,.5,.5)),i(f(6),o(15,-1.5,4).scale(3.5,1,3.5),h(.5,.5,.5,.5)))),v(()=>{u(f(5),o(0,-.2).scale(5,1,5),h(.6,.65,.7,.3)),g(o(0,1.2))}),g(o(15,-2,4)),v(()=>{u(S(b(i(f(),n(1.5,1,5),h(.9,.9,.9,.2)),i(f(6),n(4,1,5),h(.9,.9,.9,.2)),i(f(),o(0,-2).scale(2,3.2,1.9),h(.3,.8,.5,.5)),i(f(16,1,0,4),n(1,1,1.5).rotate(0,90),h(.9,.9,.9,.2))),i(f(),n(1.3,10,1.3),h(.2,.7,.4,.6))),o(0,0,45)),d(o(0,2.8,45),[0,0,4.5])}),e(35),e(55),u(f(),o(-18.65,-3,55).scale(2.45,1.4,2.7),h(.9,.9,.9,.2)),v(()=>{u(f(3),o(-23,-1.7,55.8).scale(5,.7,8.3),h(.3,.6,.6,.2)),u(f(8),o(-23,-2.2,66.5).scale(1.5,1.2,1.5),h(.8,.8,.8,.2)),u(f(),o(-23,-3,55).scale(5.2,1.7,3),h(.5,.5,.5,.3)),u(f(),o(-23,-2.2,62).scale(3,1,4),h(.5,.5,.5,.3)),g(o(-23,-.5,66.5))}),v(()=>{u(f(),o(-22.55,-3,55).scale(1.45,1.4,2.7),h(.7,.7,.7,.2)),u(S(i(f(),n(3,1.4,2.7)),i(f(),n(1.2,8,1.2))),o(-33,-3,55),h(.7,.7,.7,.2))}),v(()=>{u(S(i(f(),o(-27,-3,55).scale(3,1.4,2.7),h(.9,.9,.9,.2)),i(f(),o(-27,-3,55).scale(1,3),h(.9,.9,.9,.2)))),u(f(),o(-39,-3,55).scale(3,1.4,2.7),h(.9,.9,.9,.2))}),v(()=>{u(f(6),o(-44.5,0,55).rotate(90,90).rotate(0,90).scale(5.9,.5,5.9),h(.7,.7,.7,.4))}),g(o(-55,-1.1,46).rotate(0,90)),u(f(6),o(-61.3,-2.4,49).scale(3,1,5),h(.4,.6,.6,.3)),u(f(7),o(-57,-2.6,46).scale(4,1,4),h(.8,.8,.8,.3)),[...i(f(),o(0,-3).scale(11,1.4,3),h(.9,.9,.9,.2)),...i(f(),o(0,-2.2).scale(7.7,.5,4),h(.5,.5,.5,.2)),...S(i(f(6),S1(90).scale(6,8,6),h(.3,.6,.6,.3)),i(f(4,0,.01),o(0,6).scale(12,2,.75).rotate(0,45),h(.3,.6,.6,.3)),i(f(6),S1(90).scale(5,12,5),h(.3,.6,.6,.3)),...[5,0,-5].map(e=>i(f(5),o(e,2.5).rotate(90,0,36).scale(1.8,10,1.8),h(.3,.6,.6,.3))))]),s=(u(r,o(-53,0,55)),v(()=>u(r),2),u(f(),o(-88.3,-5.1,55).rotate(-30).scale(5,1.25,4.5),h(.7,.7,.7,.2)),u(f(3,0,-.5),o(-88.4,-3.9,55).rotate(0,-90,17).scale(3,1.45,5.9),h(.8,.8,.8,.2)),u(S(b(i(f(),o(-100,-2.4,55).scale(8,.9,8),h(.8,.8,.8,.2)),i(f(),o(-113,-2.6,55).scale(6.2,1.1,3).skewX(3),h(.8,.8,.8,.2)),i(f(),o(-100,-2.6,70).scale(3,1.1,7),h(.8,.8,.8,.2)),i(f(),o(-96,-2.6,73).rotate(0,45).scale(3,1.1,5),h(.8,.8,.8,.2)),i(f(6),o(-88.79,-2.6,80.21).scale(6,1.1,6).rotate(0,15),h(.6,.6,.6,.3)),i(f(),o(-100,-1.1,82.39).rotate(-15,0).scale(3,1.1,6),h(.8,.8,.8,.2)),i(f(),o(-100,.42,92).scale(3,1.1,4.1),h(.8,.8,.8,.2))),i(f(8),o(-100,-1,55).scale(7,.9,7),h(.3,.3,.3,.4)),i(f(8),o(-100,-2,55).scale(4,.3,4),h(.4,.4,.4,.5)),i(f(8,0,-3.1),o(-100,-3,55).scale(.4,1,.4),h(.4,.4,.4,.5)))),d(o(-100,.2,55),[0,0,7.5],[-8,0,3.5],[-12,0,3.5],[-15,0,3.5]),d(o(-89,.2,80),[0,0,6]),u(S(i(f(),o(-100,1,63).scale(7.5,4),h(.5,.5,.5,.4)),i(f(),o(-100,0,70).scale(2,2,10),h(.5,.5,.5,.4)),i(f(20,1),o(-100,2,70).scale(2,2,10).rotate(90,0),h(.5,.5,.5,.4)))),x1.map(({x:t,z:a})=>{u(f(6),o(7*t-100,-3,7*a+55).scale(1,8.1),h(.6,.15,.15,.8)),[4,-.4].map(e=>u(f(6),o(7*t-100,e,7*a+55).scale(1.3,.5,1.3),h(.4,.2,.2,.8)))}),m(7,e=>{u(f((23*e+1)%5+5,0,.5),o(5*Z(e)-101+e,-2.3-e,44.9-2.8*e).scaleSelf(5+e/2,1+e/6,5+e/3),h(.5-e/17,.5-(1&e)/9,.6,.3))}),u(f(),o(-87,-9.5,24).scale(7,1,3),h(.4,.5,.6,.4)),u(f(4),o(-86,-9.2,27).scale(5,1,5),h(.5,.6,.7,.3)),u(f(12,1),o(-86,-9,31).scale(1.5,1,1.5),h(.3,.3,.4,.1)),g(o(-86,-7.5,31)),v(()=>{[0,12,24].map(e=>u(f(),o(e-76.9,e/-16-10,24).rotate(0,0,-2).skewX(-2).scale(2.8,1.4,3),h(.2,.5,.6,.2)))}),v(()=>{[6,18].map(e=>u(f(),o(e-76.9,e/-16-10,24).rotate(0,0,-2).skewX(-2).scale(2.8,1.4,3),h(.1,.4,.5,.2)))}),u(S(b(i(f(5),o(0,0,-7).scale(2,1.2,2),h(.2,.4,.7,.3)),i(f(5),n(9,1.2,9),h(0,.2,.3,.5)),i(f(),n(11,1,13),h(.3,.4,.6,.3))),i(f(5),n(5.4,5,5.4),h(0,.2,.3,.5))),o(-38.9,-11.3,17)),g(o(-38.9,-9.6,10)),v(()=>{u(S(b(i(f(5),o(0,2).scale(5,7,5).skewY(8),h(.2,.4,.5,.5)),i(f(5),o(0,6).scale(1.1,7,1.1).skewY(-8),h(.25,.35,.5,.5)),i(f(5),o(0,9).scale(.6,7,.6).skewY(8),h(.35,.3,.5,.5))),i(f(5),n(4,8,4),h(.2,.4,.5,.5)),i(f(5),o(0,5).scale(1.5,1.5,8).rotate(90,0,35),h(.2,.4,.5,.5))),o(-38.9,-11.3,17)),d(o(-39.1,-.6,17).rotate(11),...A1(15).map(({x:e,z:t})=>[3*e,3*t,1.2]))}),x1.map(({x:t,z:a})=>{u(f(14,1),o(9*t-38.9,-7.3,11*a+17).scale(1,4),h(.25,.25,.25,1)),[1.5,8].map(e=>u(f(17,1),o(9*t-38.9,e-11.3,11*a+17).scale(1.5,.5,1.5),h(.6,.6,.6,.3)))}),u(S(b(i(f(6),o(0,0,-36).scale(15,1.2,15),h(.7,.7,.7,.3)),i(f(),o(0,0,-18).scale(4,1.2,6),h(.45,.4,.6,.3))),...m(6,t=>m(6,e=>i(f(6),o(4.6*e-12+2*(1&t),0,4.6*t-50+2*Z(4*e)).scale(2,5,2),h(.7,.7,.7,.3)))).flat()),o(-38.9,-11.3,17)),d(o(-38.9,-8.4,-21),[-7,-2.5,6],[6,-3,6],[0,-5,7]),u(f(5),o(-84,-2,85).scale(4,.8,4).rotate(0,10),h(.8,.1,.25,.4)),g(o(-84,-.5,85).rotate(0,45)),v(()=>{u(l),g(o(0,-3,-4).rotate(0,180))}),S(i(f(),o(0,-.5,1).scale(1.15,1.2,6.5),h(.25,.25,.35,.3)),S(i(f(3),o(0,0,-5.5).scale(3,2),h(.6,.3,.4,.3)),i(f(),o(0,0,-3.65).scale(2.5,3),h(.6,.3,.4,.3))),...[-1,1].map(e=>i(f(),o(1.2*e,-.5,1).scale(.14,.3,6.5),h(.7,.2,0,.3)))));v(()=>m(2,e=>u(s,o(9*e-110+(1&e),1.9,-12)))),v(()=>m(2,e=>u(s,o(9*(e+2)-110+(1&e),1.9,-12)))),v(()=>m(3,e=>u(s,o(9*e-106,1.9,-12)))),u(S(b(i(f(),o(26.5,-1.6,10).scale(20,2.08,3)),i(f(),o(26.5,-.5,10).scale(19,2,.5))),...m(4,e=>i(f(),o(13+9*e+(1&e),-.8,9).scale(1.35,1.35,9))),...m(3,e=>i(f(),o(17+9*e,-.8,9).scale(1.35,1.35,9)))),o(-123,.2,-12),h(.5,.5,.6,.2)),g(o(-116,-1.4,-18).rotate(0,180)),u(f(),o(-116,-2.6,-12).scale(3.2,1.1,4).skewX(3),h(.8,.8,.8,.2)),u(f(6),o(-116,-2.6,-16.5).scale(3.2,.8,3),h(.6,.5,.7,.2)),u(f(),o(-115.5,-17,-12).scale(.5,15,2.2),h(.6,.6,.6,.3)),u(f(8),o(-114,-17,-2).scale(2,15,2),h(.6,.6,.6,.3)),u(f(8),o(-79,-17,-2).scale(2,15,2),h(1,1,1,.3)),u(f(),o(-77,-17,-50.5).scale(2.2,15,.5),h(.6,.6,.6,.3)),m(3,e=>{u(t(16),o(12*e-109,-9,-12),h(.6,.6,.6,.3)),u(t(16),o(-77,-9,-12*e-20).rotate(0,90),h(.6,.6,.6,.3))}),u(S(i(f(12),o(-77,-14.5,-12).scale(4,17.5,4),h(.7,.7,.7,.2)),i(f(),o(-79,.1,-12).scale(3.5,2,1.3),h(.4,.5,.6,.2)),i(f(),o(-77,.1,-14).scale(1.5,2,2),h(.4,.5,.6,.2)),i(f(12),o(-77,3.1,-12).scale(3,5,3),h(.4,.5,.6,.2)))),u(f(),o(-84.9,-4.3,-40).rotate(12).scale(6,1,3),h(.6,.6,.6,.3)),u(f(9),o(-98,-18.4,-40).scale(2.5,13.5,2.5),h(.5,.5,.5,.3)),u(S(i(f(),o(-93,-5.8,-40).scale(9,1,5),h(.8,.8,.8,.1)),i(f(9),o(-98,-5.8,-40).scale(3,8,3),h(.7,.7,.7,.2)))),g(o(-98,-4.4,-40).rotate(0,90)),d(o(-115,.2,-12),[0,0,3.5]),d(o(-93,-3,-40).rotate(4),[0,-2,3.5],[0,2,3.5]),u(S(b(i(f(6,0,0,.6),o(-100,.7,105.5).scale(8,1,11),h(.7,.7,.7,.2)),i(f(),o(-101.5,.7,93.5).scale(10.5,1,2),h(.7,.7,.7,.2))),i(f(5),o(-100,.7,113).scale(4,3,4),h(.7,.7,.7,.2)))),m(4,e=>v(()=>u(f(6),o(-14.6-4.8*e-(2<e?2:0),-e/2.5-.1,-21.5).rotate(0,0,3.5).skewX(3.5).scale(2.6,1,2.5),h(.5-e/8,e/12+.5,.7,.3)))),v(()=>{u(S(i(f(10),n(6,2,6),h(.1,.6,.5,.3)),i(f(10),n(3.3,6,3.3),h(.1,.6,.5,.5)))),u(f(15,1),o(-7.5).rotate(0,90).scale(3,2.3,3),h(.4,.4,.4,.3)),u(f(10),o(-7.5).rotate(0,90).scale(2,2.5,2),h(.3,.8,.7,.3)),u(f(5),o(-7.5).rotate(0,90).scale(1,3),h(.5,.5,.5,.5)),g(o(-7.5).rotate(0,90).translate(0,3.4).rotate(0,180)),[-1,1].map(e=>u(c,S1(90*e,180,90).translate(0,5).rotate(40).scale(1.3,10,1.3),h(1,1,.8,.2))),d(o(-5,4),[0,-1.2,1.7],[0,1.2,1.7])}),[-1,1].map(t=>{[7.2,1.5].map(e=>u(f(15,1),o(-7.5*t-100,e+.7,96).scale(1.1,.5,1.1),h(.5,.24,.2,.4))),u(c,o(-5*t-100,1.7,114.5).scale(1.2,10,1.2).rotate(0,90*t-90),h(1,1,.8)),u(f(12,1),o(-7.5*t-100,3.7,96).scale(.8,4,.8),h(.6,.24,.2,.5)),u(S(i(f(),o(-4*t,3.5,-.5).scale(4,4,.7),h(.5,.5,.5,.4)),i(f(),n(3,3,10),h(.6,.24,.2,.5)),i(f(28,1),o(0,3,-5).scale(3,4,10).rotate(90,0),h(.6,.24,.2,.5)),i(f(5),o(-5.3*t,7).rotate(90,0).scale(1.7,5,1.7),h(.6,.24,.2,.5)),i(f(5),o(-5.3*t,3.8).rotate(90,0,35).scale(.75,5,.75),h(.6,.24,.2,.5))),o(t-100,.7,97))}),u(S(i(f(),o(-82.07,.8,106).scale(11,.9,2.2),h(.7,.7,.7,.1)),i(f(45,1),o(-81,.7,106).scale3d(7.7),h(.7,.7,.7,.1)))),v(()=>{u(S(i(f(45,1),n(7.5,1,7.5),h(.45,.45,.45,.2)),i(f(),o(0,0,-5.5).scale(1.5,3,2.7),h(.45,.45,.45,.2)))),u(f(8),o(0,2).scale(3,1.5,3).rotate(0,22),h(.7,.7,.7,.1)),u(f(5),o(0,2).scale(1,2),h(.3,.3,.3,.2)),d(o(0,3),...A1(14).map(({x:e,z:t})=>[5.6*e,5.6*t,2]))}),v(()=>{[-1,1].map(e=>u(c,S1(0,90).translate(-5*e,1,-.5).scale(1.2,10,1.2).rotate(0,90*e+90),h(1,1,.8))),u(S(i(f(28,1),o(0,2).scale(7.5,1,7.5),h(.35,0,0,.3)),i(f(),n(9,5,2),h(.3,0,0,.3)))),u(i(f(28,1),n(7.5,1,7.5),h(.45,.45,.45,.2))),u(i(f(5),o(0,1).scale(1,.2),h(.3,.3,.3,.2)))}),v(()=>{u(S(i(f(28,1),o(0,2).scale(7.5,1,7.5),h(.35,0,0,.3)),i(f(),o(7).scale(9,5,2),h(.3,0,0,.3)),i(f(),o(0,0,7).scale(2,5,9),h(.3,0,0,.3)))),u(i(f(28,1),n(7.5,1,7.5),h(.45,.45,.45,.2))),u(i(f(5),o(0,1).scale(1,.2),h(.3,.3,.3,.2)))}),v(()=>{u(S(i(f(28,1),o(0,2).scale(7.5,1,7.5),h(.35,0,0,.3)),i(f(),o(7).scale(9,5,2),h(.3,0,0,.3)),i(f(),o(0,0,-7).scale(2,5,9),h(.3,0,0,.3)))),u(i(f(28,1),n(7.5,1,7.5),h(.45,.45,.45,.2))),u(i(f(5),o(0,1).scale(1,.2),h(.3,.3,.3,.2)))}),u(f(),o(-58,1,106).scale(2,.65,2),h(.7,.7,.7,.2)),u(f(),o(-50.7,1,99).scale(2,.65,1),h(.7,.7,.7,.2)),u(f(),o(-42,.4,91).scale(5,1,2.5),h(.7,.7,.7,.3)),u(f(),o(-34.2,.4,91).scale(3,1,3),h(.7,.7,.7,.3)),g(o(-34,2.7,96).rotate(-12,0)),u(f(5),o(-34,.2,96).scale(3,2,4).rotate(-20,0),h(.2,.5,.5,.6)),[h(.1,.55,.45,.2),h(.2,.5,.5,.3),h(.3,.45,.55,.4)].map((e,t)=>v(()=>{u(f(),o(-23.5,.5,91+6.8*t).scale(1===t?2:3.3,1,3.3),e),2===t&&u(f(),o(-29.1,.4,91).scale(2.1,1,3),h(.7,.7,.7,.3)),1===t&&u(f(),o(-16.1,.5,103.5).rotate(-3.5).scale(3.9,.8,2).skewX(-1),h(.6,.6,.7,.3))})),[-1,1].map(e=>u(c,o(-8*e,1,85).scale(1.2,10,1.2).rotate(0,90*e+90),h(1,1,.8))),m(3,e=>u(t(24.7-.7*(1&e)),o(6*e-6,4-(1&e),111-.2*(1&e)),1&e?h(.5,.5,.5,.3):h(.35,.35,.35,.5))),u(S(i(f(6,0,0,.3),o(0,-.92,95).scale(14,2,14),h(.8,.8,.8,.2)),i(f(5),o(0,0,95).scale3d(6),h(.3,.3,.3,.5)))),g(o(0,1.7,82).rotate(0,180)),u(f(5),o(0,-15.7,82).scale(2.5,17,2.5).rotate(0,35),h(.5,.3,.3,.4)),u(f(6),o(0,16,121).scale(2.5,1,2.1).rotate(0,90),h(.5,.6,.7,.3)),u(f(),o(0,16,129).scale(1.5,1,2),h(.5,.6,.7,.3)),u(f(7),o(0,16.2,133).scale(5,1,5),h(.4,.5,.6,.4)),u(S(b(i(f(),o(0,16,110.5).scale(12,1,3),h(.5,.3,.3,.4)),i(f(),o(0,16,111).scale(3,1,3.8),h(.5,.3,.3,.4))),i(f(5),o(0,16,103.5).scale(5.5,5,5.5),h(.5,.3,.3,.4)))),v(()=>{u(f(3),o(0,-3,118.8).scale(.8,.8,18).rotate(90,0,60),h(.5,.3,.3,.4)),[22,30].map(e=>{u(f(6),o(0,16,e+95).scale(3,1,2.3).rotate(0,90),h(.7,.7,.7,.4)),u(f(),o(0,6.2,e+95).scale(.5,11,.5),h(.5,.3,.3,.4))})}),v(()=>{u(f(5),n(5,1.1,5),h(.5,.3,.3,.4)),u(f(5),n(5.5,.9,5.5),h(.25,.25,.25,.4)),g(o(0,1.5,-1).rotate(0,180))}),d(o(0,3,95),...A1(9).map(({x:e,z:t})=>[9*e,9*t,4])),d(o(0,19,134),[0,0,3.5])}),v(()=>{u(a(20),o(0,1).scale3d(.5),h(1,.3,.4)),u(a(30),n(.65,.8,.55),h(1,.3,.4)),u(f(),o(0,.9,.45).scale(.15,.02,.06),h(.3,.3,.3)),[-1,1].map(e=>{u(c,S1(0,0<e?180:0).translate(.2,1.32).rotate(-30).scale(.2,.6,.2),h(1,1,.8)),u(i(S(f(15,1),i(f(),o(0,0,1).scale(2,2,.5))),S1(-90,0).scale(.1,.05,.1),h(.3,.3,.3)),o(.2*e,1.2,.4).rotate(0,20*e,20*e)),v(()=>{u(f(20,1),o(.3*e,-.8).scale(.2,.7,.24),h(1,.3,.4))})})}),v(()=>{u(f(6).slice(0,-1),n(.77,1,.77),h(1,.3,.5))},0),v(()=>{u(a(30,24,(e,t,a)=>{let l=t/24,r=e*J*2/30,s=Z(l**.6*J/2);return e=l*l*Z(e*J*14/30)/4,23<t?{x:a.C=0,y:-.5,z:0}:{x:$(r)*s,y:$(l*J)-l-e,z:Z(r)*s+Z(e*J*2)/4}}),n(.7,.7,.7),h(1,1,1)),[-1,1].map(e=>u(a(12),o(.16*e,.4,-.36).scale3d(.09)))},0),v(()=>{u(f(6,1),n(.13,1.4,.13),h(.3,.3,.5,.1)),u(f(10),o(0,1).scale(.21,.3,.21),h(1,.5,.2)),u(f(3),o(0,-1).rotate(90,90).scale(.3,.4,.3),h(.2,.2,.2,.1))},0)})})