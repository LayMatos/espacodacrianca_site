import { C } from "../data/constants";

export const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&family=Poppins:wght@400;500;600;700&display=swap');

*,*::before,*::after{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html{
  scroll-behavior:smooth;
  overflow-x:hidden;
  width:100%;
  max-width:100vw;
  position:relative;
}
body{
  font-family:'Nunito',sans-serif;
  background:#ffffff;
  overflow-x:hidden;
  width:100%;
  max-width:100vw;
  color:#333;
  line-height:1.6;
  position:relative;
  margin:0;
  padding:0;
}
#root{
  width:100%;
  max-width:100vw;
  overflow-x:hidden;
  position:relative;
}
img,video,svg,canvas{
  max-width:100%;
  height:auto;
}
div,section,article,header,footer,nav,main,aside{
  max-width:100%;
  box-sizing:border-box;
}

/* NAV */
.nav{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:1000;
  height:100px;
  padding:0 clamp(20px,5%,60px);
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ffffff;
  box-shadow:0 2px 10px rgba(0,0,0,0.05);
  transition:all 0.3s ease;
  width:100%;
  max-width:100vw;
  box-sizing:border-box;
  margin:0;
  position:relative;
}
.nav.sc{
  box-shadow:0 2px 15px rgba(0,0,0,0.08);
  height:95px;
}
.brand{
  position:absolute;
  left:clamp(20px,5%,60px);
  display:flex;
  align-items:center;
  gap:12px;
  text-decoration:none;
  transition:opacity 0.3s;
  flex-shrink:0;
  z-index:10;
}
.brand:hover{opacity:0.8;}
.brand-logo{
  height:80px;
  width:auto;
  object-fit:contain;
}
.nav-right{
  display:flex;
  align-items:center;
  gap:clamp(15px,3vw,25px);
  position:absolute;
  right:clamp(20px,5%,60px);
}
.links{
  list-style:none;
  display:flex;
  gap:clamp(12px,2vw,20px);
  align-items:center;
  flex-wrap:wrap;
  margin:0;
  padding:0;
  justify-content:center;
  flex:1;
}
.nav-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  text-decoration:none;
  cursor:pointer;
  transition:all 0.3s ease;
  padding:4px 8px;
  border-radius:8px;
  position:relative;
}
.nav-item-icon{
  font-size:28px;
  margin-bottom:4px;
  transition:transform 0.3s ease;
  display:block;
  line-height:1;
}
.nav-item-text{
  font-size:12px;
  font-weight:600;
  font-family:'Nunito',sans-serif;
  transition:color 0.3s ease;
  text-align:center;
  line-height:1.2;
}
.nav-item.active .nav-item-text{
  text-decoration:underline;
  text-decoration-thickness:2px;
  text-underline-offset:4px;
}
.nav-item:hover .nav-item-icon{
  transform:scale(1.15);
}
.nav-item:hover{
  background:rgba(0,0,0,0.02);
}
.pill{
  background:${C.amarelo};
  color:#fff;
  font-weight:700;
  font-size:14px;
  padding:12px 28px;
  border-radius:50px;
  border:none;
  cursor:pointer;
  font-family:'Nunito',sans-serif;
  box-shadow:0 4px 15px rgba(253,185,19,0.3);
  transition:all 0.3s ease;
  white-space:nowrap;
  flex-shrink:0;
}
.pill:hover{
  transform:translateY(-2px);
  box-shadow:0 6px 20px rgba(253,185,19,0.4);
}
.ham{
  display:none;
  background:none;
  border:none;
  cursor:pointer;
  padding:8px;
}
.drawer{
  display:none;
  flex-direction:column;
  gap:15px;
  position:fixed;
  top:100px;
  left:0;
  right:0;
  background:#fff;
  padding:30px clamp(20px,5%,60px);
  box-shadow:0 8px 30px rgba(0,0,0,0.1);
  z-index:999;
  width:100%;
  max-width:100vw;
}
.drawer.on{display:flex;}
.drawer-item{
  display:flex;
  align-items:center;
  font-weight:700;
  font-size:18px;
  text-decoration:none;
  padding:15px 20px;
  border-radius:12px;
  transition:all 0.3s ease;
  border-bottom:none;
}
.drawer-item:hover{
  background:rgba(0,0,0,0.03);
  transform:translateX(5px);
}
.drawer-item.active{
  background:rgba(0,0,0,0.05);
  text-decoration:underline;
  text-decoration-thickness:2px;
  text-underline-offset:4px;
}

/* HERO */
.hero{
  min-height:100vh;
  background:linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 25%, #fff9e6 50%, #f0f8ff 75%, #e8f4fd 100%);
  background-size:400% 400%;
  animation:gradientShift 15s ease infinite;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  padding:100px clamp(20px,5%,60px) 60px;
  gap:50px;
  position:relative;
  overflow:hidden;
  width:100%;
  max-width:100vw;
  box-sizing:border-box;
  margin:0;
}
.hero::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    radial-gradient(circle at 20% 50%, rgba(46,167,224,0.12) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(253,185,19,0.1) 0%, transparent 50%),
    radial-gradient(circle at 50% 80%, rgba(255,226,154,0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 10% 20%, rgba(46,167,224,0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 90% 80%, rgba(253,185,19,0.05) 0%, transparent 60%);
  pointer-events:none;
  z-index:0;
  animation:backgroundPulse 20s ease-in-out infinite;
}
.hero::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-image:
    radial-gradient(circle at 2px 2px, rgba(46,167,224,0.03) 1px, transparent 0),
    radial-gradient(circle at 18px 18px, rgba(253,185,19,0.02) 1px, transparent 0);
  background-size:40px 40px, 60px 60px;
  background-position:0 0, 20px 20px;
  pointer-events:none;
  z-index:0;
  opacity:0.6;
  animation:patternMove 30s linear infinite;
}
@keyframes backgroundPulse{
  0%,100%{opacity:1;transform:scale(1);}
  50%{opacity:0.95;transform:scale(1.02);}
}
@keyframes patternMove{
  0%{background-position:0 0, 20px 20px;}
  100%{background-position:40px 40px, 60px 60px;}
}
@keyframes gradientShift{
  0%,100%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
}
.hcopy{
  flex:1;
  min-width:300px;
  max-width:600px;
  z-index:2;
}
.badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  background:${C.amareloClaro};
  color:${C.azul};
  font-weight:700;
  font-size:13px;
  padding:8px 20px;
  border-radius:50px;
  margin-bottom:24px;
  animation:fadeInUp 0.6s ease both;
}
.hero h1{
  font-family:'Poppins',sans-serif;
  font-size:clamp(36px,5.5vw,64px);
  line-height:1.2;
  color:${C.azul};
  margin-bottom:20px;
  font-weight:700;
  animation:fadeInUp 0.6s 0.1s ease both;
}
.hero h1 em{
  color:${C.amarelo};
  font-style:normal;
}
.tagline{
  font-size:18px;
  color:#64748b;
  font-weight:500;
  margin-bottom:36px;
  animation:fadeInUp 0.6s 0.2s ease both;
}
.hbtns{
  display:flex;
  gap:16px;
  flex-wrap:wrap;
  animation:fadeInUp 0.6s 0.3s ease both;
}
.bcta{
  background:${C.amarelo};
  color:#fff;
  font-weight:700;
  font-size:16px;
  padding:16px 36px;
  border-radius:50px;
  border:none;
  cursor:pointer;
  font-family:'Nunito',sans-serif;
  box-shadow:0 6px 20px rgba(253,185,19,0.35);
  transition:all 0.3s ease;
}
.bcta:hover{
  transform:translateY(-3px);
  box-shadow:0 8px 25px rgba(253,185,19,0.45);
}
.bout{
  background:transparent;
  color:${C.azul};
  font-weight:700;
  font-size:16px;
  padding:16px 36px;
  border-radius:50px;
  border:2px solid ${C.azul};
  cursor:pointer;
  font-family:'Nunito',sans-serif;
  transition:all 0.3s ease;
}
.bout:hover{
  background:${C.azul};
  color:#fff;
  transform:translateY(-3px);
}
.hvisual{
  flex:1;
  min-width:300px;
  max-width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  z-index:2;
  animation:fadeInRight 0.8s 0.2s ease both;
  overflow:hidden;
}
.hero-image{
  max-width:100%;
  height:auto;
  filter:drop-shadow(0 20px 40px rgba(0,0,0,0.1));
}
.hero-photo-container{
  position:absolute;
  top:50%;
  right:0;
  transform:translateY(-50%);
  width:45%;
  max-width:400px;
  border-radius:30px;
  overflow:hidden;
  box-shadow:0 15px 40px rgba(0,0,0,0.15);
  z-index:3;
  animation:fadeInRight 1s 0.4s ease both;
}
.hero-photo{
  width:100%;
  height:auto;
  display:block;
  object-fit:cover;
  border-radius:30px;
  transition:transform 0.3s ease;
}
.hero-photo:hover{
  transform:scale(1.05);
}

/* STATS */
.ribbon{
  background:transparent;
  padding:60px clamp(20px,5%,60px) 40px;
  display:flex;
  justify-content:center;
  gap:clamp(30px,8vw,100px);
  flex-wrap:wrap;
  position:relative;
  z-index:2;
  width:100%;
  max-width:100vw;
  box-sizing:border-box;
  margin:0;
  overflow:visible;
  margin-bottom:-20px;
  perspective:1200px;
  perspective-origin:center center;
}
.ribbon::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    linear-gradient(to bottom, 
      rgba(240,248,255,0.3) 0%,
      rgba(255,255,255,0.2) 20%,
      rgba(255,254,245,0.2) 50%,
      rgba(255,255,255,0.2) 80%,
      rgba(240,248,255,0.3) 100%
    ),
    radial-gradient(ellipse at 15% 30%, rgba(46,167,224,0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 70%, rgba(253,185,19,0.02) 0%, transparent 50%);
  pointer-events:none;
  z-index:0;
  backdrop-filter:blur(1px);
}
.ribbon::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-image:
    radial-gradient(circle at 2px 2px, rgba(46,167,224,0.02) 1px, transparent 0),
    radial-gradient(circle at 18px 18px, rgba(253,185,19,0.015) 1px, transparent 0);
  background-size:40px 40px, 60px 60px;
  background-position:0 0, 20px 20px;
  pointer-events:none;
  z-index:0;
  opacity:0.5;
  animation:patternMove 30s linear infinite;
}
.stat-card-3d{
  perspective:1000px;
  transform-style:preserve-3d;
  transition:transform 0.6s cubic-bezier(0.4,0,0.2,1);
  cursor:pointer;
}
.stat-card-3d:hover{
  transform:translateY(-15px) rotateX(5deg) rotateY(-2deg);
}
.stat-card-inner{
  background:linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,255,0.95) 50%, rgba(255,255,255,0.98) 100%);
  border-radius:24px;
  padding:35px 40px;
  box-shadow:
    0 10px 40px rgba(46,49,146,0.15),
    0 0 0 1px rgba(46,167,224,0.1),
    inset 0 1px 0 rgba(255,255,255,0.9),
    inset 0 -1px 0 rgba(46,167,224,0.05);
  transform-style:preserve-3d;
  transition:all 0.6s cubic-bezier(0.4,0,0.2,1);
  position:relative;
  overflow:hidden;
  border:2px solid rgba(46,167,224,0.15);
  backdrop-filter:blur(10px);
}
.stat-card-inner::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:4px;
  background:linear-gradient(90deg, ${C.azul}, ${C.azulClaro}, ${C.amarelo});
  transform:scaleX(0);
  transform-origin:left;
  transition:transform 0.6s ease;
}
.stat-card-3d:hover .stat-card-inner{
  box-shadow:
    0 20px 60px rgba(46,49,146,0.25),
    0 0 0 1px rgba(46,167,224,0.2),
    inset 0 1px 0 rgba(255,255,255,0.9),
    0 0 40px rgba(46,167,224,0.2);
  transform:translateZ(20px);
}
.stat-card-3d:hover .stat-card-inner::before{
  transform:scaleX(1);
}
.stat-card-inner::after{
  content:'';
  position:absolute;
  top:-50%;
  left:-50%;
  width:200%;
  height:200%;
  background:radial-gradient(circle, rgba(46,167,224,0.08) 0%, transparent 70%);
  opacity:0;
  transition:opacity 0.6s ease;
  transform:rotate(45deg);
}
.stat-card-3d:hover .stat-card-inner::after{
  opacity:1;
}
.stn{
  font-family:'Poppins',sans-serif;
  font-size:clamp(36px,5vw,52px);
  color:${C.azul};
  line-height:1;
  font-weight:700;
  background:linear-gradient(135deg, ${C.azul} 0%, ${C.azulClaro} 50%, ${C.azul} 100%);
  background-size:200% 200%;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  animation:numberPop 0.6s ease-out, gradientShift 3s ease infinite;
  transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
  position:relative;
  z-index:2;
  transform:translateZ(10px);
  filter:drop-shadow(0 4px 8px rgba(46,167,224,0.2));
}
.stat-card-3d:hover .stn{
  transform:translateZ(30px) scale(1.05);
  filter:drop-shadow(0 8px 16px rgba(46,167,224,0.3));
}
.stn em{
  color:${C.amarelo};
  font-style:normal;
  -webkit-text-fill-color:${C.amarelo};
  animation:numberPop 0.6s ease-out 0.2s both;
  filter:drop-shadow(0 4px 8px rgba(253,185,19,0.3));
}
.stat-card-3d:hover .stn em{
  filter:drop-shadow(0 8px 16px rgba(253,185,19,0.4));
}
.stl{
  font-size:15px;
  color:#64748b;
  font-weight:600;
  margin-top:12px;
  animation:fadeInUp 0.6s ease-out 0.4s both;
  position:relative;
  z-index:2;
  transform:translateZ(5px);
  transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
}
.stat-card-3d:hover .stl{
  color:${C.azul};
  transform:translateZ(15px);
  font-weight:700;
}
@keyframes numberPop{
  0%{opacity:0;transform:scale(0.5) translateY(20px) translateZ(0);}
  60%{transform:scale(1.15) translateY(-5px) translateZ(10px);}
  100%{opacity:1;transform:scale(1) translateY(0) translateZ(10px);}
}

/* ZONA DE TRANSIÇÃO */
.transition-zone{
  position:relative;
  height:120px;
  width:100%;
  max-width:100vw;
  overflow:visible;
  margin-top:-60px;
  margin-bottom:-60px;
  z-index:1;
  pointer-events:none;
}
.transition-zone::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:linear-gradient(to bottom,
    rgba(240,248,255,0.3) 0%,
    rgba(255,255,255,0.25) 25%,
    rgba(255,254,245,0.25) 50%,
    rgba(255,255,255,0.25) 75%,
    rgba(240,248,255,0.3) 100%
  );
  pointer-events:none;
  z-index:0;
}
.transition-zone::after{
  content:'';
  position:absolute;
  top:50%;
  left:0;
  right:0;
  height:2px;
  background:linear-gradient(90deg,
    transparent 0%,
    rgba(46,167,224,0.1) 20%,
    rgba(253,185,19,0.1) 50%,
    rgba(46,167,224,0.1) 80%,
    transparent 100%
  );
  transform:translateY(-50%);
  pointer-events:none;
  z-index:0;
  animation:transitionLine 3s ease-in-out infinite;
}
@keyframes transitionLine{
  0%,100%{opacity:0.3;transform:translateY(-50%) scaleX(0.8);}
  50%{opacity:0.6;transform:translateY(-50%) scaleX(1);}
}

/* SECTION BASE */
section{
  padding:100px clamp(20px,5%,60px);
  position:relative;
  overflow:hidden;
  transition:background 0.5s ease;
  width:100%;
  max-width:100vw;
  box-sizing:border-box;
}
section::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  pointer-events:none;
  z-index:0;
}
.section-container{
  max-width:1200px;
  margin:0 auto;
  width:100%;
  padding:0;
  box-sizing:border-box;
  position:relative;
  z-index:1;
}
.ttl{
  font-family:'Poppins',sans-serif;
  font-size:clamp(28px,4.5vw,44px);
  color:${C.azul};
  text-align:center;
  margin-bottom:12px;
  font-weight:700;
}
.ttl em{
  color:${C.amarelo};
  font-style:normal;
}
.sub{
  text-align:center;
  color:#64748b;
  font-size:17px;
  font-weight:500;
  margin-bottom:60px;
  max-width:600px;
  margin-left:auto;
  margin-right:auto;
}

/* DIFERENCIAIS */
.difbg{
  background:linear-gradient(180deg, 
    #f8faff 0%, 
    #ffffff 20%, 
    #ffffff 50%, 
    #ffffff 80%, 
    #f8faff 100%
  );
  position:relative;
  overflow:hidden;
  margin-top:-40px;
  padding-top:140px;
}
.difbg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    linear-gradient(to bottom,
      rgba(240,248,255,0.2) 0%,
      rgba(255,255,255,0.15) 10%,
      transparent 20%,
      transparent 80%,
      rgba(255,254,245,0.15) 90%,
      rgba(240,248,255,0.2) 100%
    ),
    radial-gradient(circle at 10% 20%, rgba(46,167,224,0.04) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(253,185,19,0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 10%, rgba(46,167,224,0.02) 0%, transparent 70%),
    radial-gradient(ellipse at 30% 90%, rgba(253,185,19,0.02) 0%, transparent 70%);
  pointer-events:none;
  z-index:0;
  animation:backgroundFloat 25s ease-in-out infinite;
}
.difbg::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:200px;
  background:linear-gradient(to bottom, 
    transparent 0%, 
    rgba(245,250,255,0.2) 20%, 
    rgba(240,248,255,0.3) 50%, 
    rgba(245,250,255,0.4) 80%, 
    rgba(240,248,255,0.5) 100%
  );
  pointer-events:none;
  z-index:0;
}
@keyframes backgroundFloat{
  0%,100%{transform:translateY(0) scale(1);opacity:1;}
  50%{transform:translateY(-10px) scale(1.02);opacity:0.98;}
}
.dgrid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
  max-width:1200px;
  margin:0 auto;
  width:100%;
  box-sizing:border-box;
}
.dcard{
  background:#fff;
  border-radius:24px;
  padding:40px 30px;
  text-align:center;
  box-shadow:0 2px 15px rgba(0,0,0,0.04);
  border:1px solid rgba(46,167,224,0.08);
  position:relative;
  overflow:hidden;
  transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
  cursor:default;
  animation:cardFloat 0.6s ease-out both;
}
.dcard:nth-child(1){animation-delay:0.1s;}
.dcard:nth-child(2){animation-delay:0.2s;}
.dcard:nth-child(3){animation-delay:0.3s;}
.dcard:nth-child(4){animation-delay:0.4s;}
.dcard::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:5px;
  background:linear-gradient(90deg,${C.azul},${C.azulClaro},${C.amarelo});
  transform:scaleX(0);
  transform-origin:left;
  transition:transform 0.4s ease;
}
.dcard::after{
  content:'';
  position:absolute;
  top:50%;
  left:50%;
  width:0;
  height:0;
  border-radius:50%;
  background:radial-gradient(circle, rgba(253,185,19,0.1) 0%, transparent 70%);
  transform:translate(-50%,-50%);
  transition:width 0.6s ease, height 0.6s ease;
}
.dcard:hover{
  transform:translateY(-8px) scale(1.01);
  box-shadow:0 8px 30px rgba(46,49,146,0.1);
  border-color:${C.amarelo};
}
.dcard:hover::before{
  transform:scaleX(1);
}
.dcard:hover::after{
  width:200px;
  height:200px;
}
@keyframes cardFloat{
  from{opacity:0;transform:translateY(30px) scale(0.9);}
  to{opacity:1;transform:translateY(0) scale(1);}
}
.ico{
  font-size:56px;
  margin-bottom:20px;
  display:block;
  animation:iconBounce 2s ease-in-out infinite;
  transform-origin:center;
}
.dcard:nth-child(1) .ico{animation-delay:0s;}
.dcard:nth-child(2) .ico{animation-delay:0.2s;}
.dcard:nth-child(3) .ico{animation-delay:0.4s;}
.dcard:nth-child(4) .ico{animation-delay:0.6s;}
.dcard h3{
  font-family:'Poppins',sans-serif;
  font-size:20px;
  color:${C.azul};
  margin-bottom:12px;
  font-weight:600;
  transition:color 0.3s ease;
}
.dcard:hover h3{
  color:${C.amarelo};
}
.dcard-photo{
  width:100%;
  height:180px;
  margin-bottom:20px;
  border-radius:16px;
  overflow:hidden;
  position:relative;
  background:linear-gradient(135deg, #f0f8ff 0%, #fff9e6 100%);
}
.dcard-image{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform 0.4s ease;
}
.dcard:hover .dcard-image{
  transform:scale(1.1);
}
@keyframes iconBounce{
  0%,100%{transform:translateY(0) scale(1);}
  50%{transform:translateY(-8px) scale(1.1);}
}
.dcard p{
  font-size:15px;
  color:#64748b;
  font-weight:500;
  line-height:1.7;
}

/* TURMAS */
.tbg{
  background:linear-gradient(180deg,
    rgba(240,248,255,0.3) 0%,
    ${C.azul} 10%,
    ${C.azul} 90%,
    rgba(240,248,255,0.3) 100%
  );
  position:relative;
  overflow:hidden;
}
.tbg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0%, transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%);
  opacity:0.8;
  pointer-events:none;
  animation:gridPulse 15s ease-in-out infinite;
}
.tbg::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:200px;
  background:linear-gradient(to bottom, 
    rgba(240,248,255,0.4) 0%, 
    rgba(240,248,255,0.2) 30%, 
    transparent 100%
  );
  pointer-events:none;
  z-index:0;
}
@keyframes gridPulse{
  0%,100%{opacity:0.6;}
  50%{opacity:0.7;}
}
.tbg .ttl{color:#fff;}
.tbg .sub{color:rgba(255,255,255,0.8);}
.tgrid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:30px;
  max-width:1200px;
  margin:0 auto 50px;
  width:100%;
  box-sizing:border-box;
}
.tcard{
  background:rgba(255,255,255,0.95);
  border-radius:20px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.2);
  transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
  box-shadow:0 4px 20px rgba(0,0,0,0.1);
}
.tcard:hover{
  transform:translateY(-8px);
  box-shadow:0 12px 40px rgba(0,0,0,0.2);
}
.tthumb{
  height:200px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:72px;
  background:linear-gradient(135deg,${C.azulClaro}15,${C.amareloClaro}15);
}
.tbody{
  padding:30px;
}
.tbody h3{
  font-family:'Poppins',sans-serif;
  font-size:24px;
  color:${C.azul};
  margin-bottom:12px;
  font-weight:600;
}
.tbody p{
  font-size:15px;
  color:#64748b;
  font-weight:500;
  line-height:1.7;
  margin-bottom:20px;
}
.tbody .ttag-container{
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
  margin-top:20px;
  width:100%;
}
.tbody .ttag-container .ttag{
  margin-right:0;
  flex-shrink:0;
}
.tbody .ttag-container .tcard-btn{
  flex:1;
  min-width:120px;
}
.ttag{
  display:inline-block;
  background:${C.amareloClaro};
  color:${C.azul};
  font-size:13px;
  font-weight:700;
  padding:6px 16px;
  border-radius:50px;
  margin-right:10px;
}
.tcta{
  text-align:center;
  margin-top:40px;
}
.blt{
  background:${C.amarelo};
  color:#fff;
  font-weight:700;
  font-size:17px;
  padding:18px 52px;
  border-radius:50px;
  border:none;
  cursor:pointer;
  font-family:'Nunito',sans-serif;
  box-shadow:0 6px 25px rgba(0,0,0,0.2);
  transition:all 0.3s ease;
}
.blt:hover{
  transform:translateY(-3px) scale(1.02);
  box-shadow:0 8px 30px rgba(0,0,0,0.25);
}

/* GALERIA */
.gbg{
  background:linear-gradient(180deg,
    rgba(240,248,255,0.2) 0%,
    #ffffff 15%,
    #ffffff 50%,
    #ffffff 85%,
    rgba(240,248,255,0.2) 100%
  );
  position:relative;
  overflow:hidden;
}
.gbg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    radial-gradient(circle at 15% 30%, rgba(253,185,19,0.03) 0%, transparent 60%),
    radial-gradient(circle at 85% 70%, rgba(46,167,224,0.04) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 50%, rgba(253,185,19,0.01) 0%, transparent 80%),
    linear-gradient(45deg, transparent 0%, rgba(46,167,224,0.005) 50%, transparent 100%);
  pointer-events:none;
  z-index:0;
  animation:backgroundShift 20s ease-in-out infinite;
}
.gbg::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:200px;
  background:linear-gradient(to bottom, 
    rgba(248,250,255,0.4) 0%, 
    rgba(255,255,255,0.3) 20%, 
    rgba(255,255,255,0.2) 50%, 
    transparent 100%
  );
  pointer-events:none;
  z-index:0;
}
@keyframes backgroundShift{
  0%,100%{transform:translateX(0) translateY(0);opacity:1;}
  50%{transform:translateX(5px) translateY(-5px);opacity:0.95;}
}
.ggrid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  max-width:1200px;
  margin:0 auto;
  width:100%;
  box-sizing:border-box;
}
.gitem{
  border-radius:20px;
  overflow:hidden;
  background:linear-gradient(135deg,${C.amareloClaro}25,${C.azulClaro}25);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:56px;
  height:200px;
  cursor:pointer;
  box-shadow:0 4px 20px rgba(46,49,146,0.08);
  transition:all 0.5s cubic-bezier(0.4,0,0.2,1);
  border:2px solid rgba(46,167,224,0.1);
  position:relative;
  animation:galleryItem 0.6s ease-out both;
}
.gitem:nth-child(1){animation-delay:0.1s;}
.gitem:nth-child(2){animation-delay:0.2s;}
.gitem:nth-child(3){animation-delay:0.3s;}
.gitem:nth-child(4){animation-delay:0.4s;}
.gitem:nth-child(5){animation-delay:0.5s;}
.gitem:nth-child(6){animation-delay:0.6s;}
.gitem::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%);
  opacity:0;
  transition:opacity 0.5s ease;
}
.gitem:hover{
  transform:scale(1.05) rotate(1deg);
  box-shadow:0 12px 40px rgba(46,49,146,0.2);
  border-color:${C.amarelo};
}
.gitem:hover::before{
  opacity:1;
}
@keyframes galleryItem{
  from{opacity:0;transform:scale(0.8) translateY(20px);}
  to{opacity:1;transform:scale(1) translateY(0);}
}
.gitem.tall{
  grid-row:span 2;
  height:420px;
}
.gitem:nth-child(7){animation-delay:0.7s;}

/* GALLERY CAROUSEL */
.gallery-carousel-wrapper{
  position:relative;
  max-width:1200px;
  margin:0 auto;
  padding:0 60px;
}
.gallery-carousel-container{
  overflow:hidden;
  width:100%;
  position:relative;
}
.gallery-carousel-track{
  display:flex;
  transition:transform 0.6s cubic-bezier(0.4,0,0.2,1);
  width:100%;
}
.gallery-carousel-page{
  flex-shrink:0;
  width:100%;
}
.gallery-carousel-page .ggrid{
  width:100%;
  margin:0;
}
.gallery-carousel-btn{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  background:white;
  border:2px solid ${C.azul};
  color:${C.azul};
  width:50px;
  height:50px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:all 0.3s ease;
  z-index:10;
  box-shadow:0 4px 15px rgba(0,0,0,0.1);
}
.gallery-carousel-btn:hover{
  background:${C.azul};
  color:white;
  transform:translateY(-50%) scale(1.1);
  box-shadow:0 6px 20px rgba(46,49,146,0.3);
}
.gallery-carousel-prev{
  left:0;
}
.gallery-carousel-next{
  right:0;
}
.gallery-carousel-dots{
  display:flex;
  justify-content:center;
  gap:10px;
  margin-top:40px;
}
.gallery-carousel-dot{
  width:12px;
  height:12px;
  border-radius:50%;
  border:none;
  background:rgba(46,167,224,0.3);
  cursor:pointer;
  transition:all 0.3s ease;
  padding:0;
}
.gallery-carousel-dot:hover{
  background:rgba(46,167,224,0.5);
  transform:scale(1.2);
}
.gallery-carousel-dot.active{
  background:${C.azul};
  width:32px;
  border-radius:6px;
}

/* GALLERY MODAL */
.gallery-modal-overlay{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.9);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:10000;
  padding:20px;
  animation:fadeIn 0.3s ease;
}
.gallery-modal-content{
  position:relative;
  max-width:90vw;
  max-height:90vh;
  display:flex;
  align-items:center;
  justify-content:center;
  animation:zoomIn 0.3s ease;
}
.gallery-modal-close{
  position:absolute;
  top:-50px;
  right:0;
  background:rgba(255,255,255,0.2);
  border:none;
  color:white;
  width:40px;
  height:40px;
  border-radius:50%;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:all 0.3s ease;
  z-index:10001;
}
.gallery-modal-close:hover{
  background:rgba(255,255,255,0.3);
  transform:rotate(90deg);
}
.gallery-modal-nav{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  background:rgba(255,255,255,0.2);
  border:none;
  color:white;
  width:50px;
  height:50px;
  border-radius:50%;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:all 0.3s ease;
  z-index:10001;
}
.gallery-modal-nav:hover{
  background:rgba(255,255,255,0.3);
  transform:translateY(-50%) scale(1.1);
}
.gallery-modal-prev{
  left:-70px;
}
.gallery-modal-next{
  right:-70px;
}
.gallery-modal-image{
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100%;
}
.gallery-modal-icon{
  font-size:clamp(120px,20vw,200px);
  animation:galleryModalIcon 0.5s ease;
}
.gallery-modal-indicator{
  position:absolute;
  bottom:-50px;
  left:50%;
  transform:translateX(-50%);
  color:white;
  font-size:18px;
  font-weight:600;
  font-family:'Poppins',sans-serif;
  background:rgba(255,255,255,0.2);
  padding:8px 20px;
  border-radius:20px;
}
@keyframes fadeIn{
  from{opacity:0;}
  to{opacity:1;}
}
@keyframes zoomIn{
  from{opacity:0;transform:scale(0.8);}
  to{opacity:1;transform:scale(1);}
}
@keyframes galleryModalIcon{
  from{opacity:0;transform:scale(0.5) rotate(-10deg);}
  to{opacity:1;transform:scale(1) rotate(0deg);}
}
@media(max-width:768px){
  .gallery-modal-prev{
    left:10px;
  }
  .gallery-modal-next{
    right:10px;
  }
  .gallery-modal-close{
    top:10px;
    right:10px;
  }
  .gallery-modal-indicator{
    bottom:20px;
  }
}

/* DEPOIMENTOS */
.depobg{
  background:linear-gradient(180deg,
    rgba(240,248,255,0.15) 0%,
    #ffffff 20%,
    #ffffff 50%,
    #ffffff 80%,
    rgba(240,248,255,0.15) 100%
  );
  position:relative;
  overflow:hidden;
}
.depobg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    radial-gradient(circle at 25% 25%, rgba(46,167,224,0.02) 0%, transparent 60%),
    radial-gradient(circle at 75% 75%, rgba(253,185,19,0.02) 0%, transparent 60%),
    radial-gradient(ellipse at 10% 50%, rgba(46,167,224,0.01) 0%, transparent 70%),
    radial-gradient(ellipse at 90% 50%, rgba(253,185,19,0.01) 0%, transparent 70%);
  pointer-events:none;
  z-index:0;
  animation:depoBackgroundFloat 22s ease-in-out infinite;
}
.depobg::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:200px;
  background:linear-gradient(to bottom, 
    rgba(248,250,255,0.3) 0%, 
    rgba(255,255,255,0.2) 30%, 
    rgba(255,255,255,0.1) 60%, 
    transparent 100%
  );
  pointer-events:none;
  z-index:0;
}
@keyframes depoBackgroundFloat{
  0%,100%{transform:scale(1) rotate(0deg);opacity:1;}
  50%{transform:scale(1.01) rotate(0.5deg);opacity:0.97;}
}
.depogrid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:30px;
  max-width:1200px;
  margin:0 auto;
  width:100%;
  box-sizing:border-box;
}
.depocard{
  background:#fff;
  border-radius:24px;
  padding:35px;
  border:2px solid rgba(46,167,224,0.1);
  position:relative;
  box-shadow:0 4px 25px rgba(46,49,146,0.08);
  transition:all 0.5s cubic-bezier(0.4,0,0.2,1);
  animation:depoCard 0.6s ease-out both;
  overflow:hidden;
}
.depocard:nth-child(1){animation-delay:0.1s;}
.depocard:nth-child(2){animation-delay:0.2s;}
.depocard:nth-child(3){animation-delay:0.3s;}
.depocard::before{
  content:'';
  position:absolute;
  top:-50%;
  left:-50%;
  width:200%;
  height:200%;
  background:radial-gradient(circle, rgba(253,185,19,0.1) 0%, transparent 70%);
  opacity:0;
  transition:opacity 0.5s ease;
}
.depocard:hover{
  transform:translateY(-8px) scale(1.02);
  box-shadow:0 16px 45px rgba(46,49,146,0.15);
  border-color:${C.amarelo};
}
.depocard:hover::before{
  opacity:1;
}
@keyframes depoCard{
  from{opacity:0;transform:translateY(30px) scale(0.95);}
  to{opacity:1;transform:translateY(0) scale(1);}
}
.depostars{
  display:flex;
  gap:4px;
  margin-bottom:16px;
}
.depotext{
  font-size:16px;
  color:#475569;
  font-weight:500;
  line-height:1.8;
  margin-bottom:24px;
  font-style:italic;
}
.depoauthor{
  display:flex;
  align-items:center;
  gap:14px;
}
.depoav{
  width:50px;
  height:50px;
  border-radius:50%;
  background:${C.azul};
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  color:#fff;
  font-weight:700;
  font-family:'Poppins',sans-serif;
}
.deponame{
  font-weight:700;
  color:${C.azul};
  font-size:16px;
}
.deporole{
  font-size:14px;
  color:#64748b;
  font-weight:500;
}

/* DEPOIMENTOS CARROSSEL */
.depo-carousel-wrapper{
  position:relative;
  max-width:1200px;
  margin:0 auto;
  padding:0 60px;
}
.depo-carousel-container{
  overflow:hidden;
  width:100%;
  position:relative;
}
.depo-carousel-track{
  display:flex;
  transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);
  gap:30px;
  width:100%;
}
.depo-carousel-track .depocard{
  flex-shrink:0;
  margin:0;
  box-sizing:border-box;
}
.depo-carousel-btn{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  background:white;
  border:2px solid ${C.azul};
  color:${C.azul};
  width:50px;
  height:50px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:all 0.3s ease;
  z-index:10;
  box-shadow:0 4px 15px rgba(0,0,0,0.1);
}
.depo-carousel-btn:hover{
  background:${C.azul};
  color:white;
  transform:translateY(-50%) scale(1.1);
  box-shadow:0 6px 20px rgba(46,49,146,0.3);
}
.depo-carousel-prev{
  left:0;
}
.depo-carousel-next{
  right:0;
}
.depo-carousel-dots{
  display:flex;
  justify-content:center;
  gap:10px;
  margin-top:40px;
}
.depo-carousel-dot{
  width:12px;
  height:12px;
  border-radius:50%;
  border:none;
  background:rgba(46,167,224,0.3);
  cursor:pointer;
  transition:all 0.3s ease;
  padding:0;
}
.depo-carousel-dot:hover{
  background:rgba(46,167,224,0.5);
  transform:scale(1.2);
}
.depo-carousel-dot.active{
  background:${C.azul};
  width:32px;
  border-radius:6px;
}

/* AULAS E HORÁRIOS */
.aulasbg{
  background:linear-gradient(180deg,
    rgba(255,254,245,0.2) 0%,
    #ffffff 20%,
    #ffffff 50%,
    #ffffff 80%,
    rgba(240,248,255,0.2) 100%
  );
  position:relative;
  overflow:hidden;
}
.aulasbg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    radial-gradient(circle at 20% 30%, rgba(253,185,19,0.03) 0%, transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(46,167,224,0.04) 0%, transparent 60%),
    radial-gradient(ellipse at 40% 60%, rgba(253,185,19,0.015) 0%, transparent 70%),
    radial-gradient(ellipse at 60% 40%, rgba(46,167,224,0.015) 0%, transparent 70%);
  pointer-events:none;
  z-index:0;
  animation:aulasBackgroundMove 18s ease-in-out infinite;
}
.aulasbg::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:200px;
  background:linear-gradient(to bottom, 
    rgba(255,254,245,0.3) 0%, 
    rgba(240,248,255,0.2) 30%, 
    rgba(255,255,255,0.15) 60%, 
    transparent 100%
  );
  pointer-events:none;
  z-index:0;
}
@keyframes aulasBackgroundMove{
  0%,100%{transform:translate(0,0) scale(1);}
  50%{transform:translate(-3px,3px) scale(1.01);}
}
.aulas-section{
  margin-bottom:60px;
}
.aulas-section-title{
  font-family:'Poppins',sans-serif;
  font-size:clamp(26px,3vw,32px);
  color:${C.azul};
  margin-bottom:30px;
  font-weight:800;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  position:relative;
  z-index:2;
}
.aulas-section-title span:first-child{
  font-size:clamp(28px,3.5vw,36px);
  animation:iconBounce 2s ease-in-out infinite;
  filter:drop-shadow(0 2px 4px rgba(253,185,19,0.3));
}
.aulas-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:24px;
  max-width:1200px;
  margin:0 auto;
  width:100%;
  box-sizing:border-box;
}
.aula-card{
  background:#fff;
  border-radius:20px;
  padding:30px 25px;
  text-align:center;
  box-shadow:0 4px 20px rgba(46,49,146,0.08);
  border:2px solid rgba(46,167,224,0.1);
  position:relative;
  overflow:hidden;
  transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
  animation:aulaCardFloat 0.6s ease-out both;
}
.aula-card:nth-child(1){animation-delay:0.1s;}
.aula-card:nth-child(2){animation-delay:0.2s;}
.aula-card:nth-child(3){animation-delay:0.3s;}
.aula-card:nth-child(4){animation-delay:0.4s;}
.aula-card::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:4px;
  background:linear-gradient(90deg,${C.azul},${C.amarelo});
  transform:scaleX(0);
  transform-origin:left;
  transition:transform 0.4s ease;
}
.aula-card:hover{
  transform:translateY(-8px) scale(1.02);
  box-shadow:0 12px 40px rgba(46,49,146,0.15);
  border-color:${C.amarelo};
}
.aula-card:hover::before{
  transform:scaleX(1);
}
.aula-photo{
  width:100%;
  height:160px;
  margin-bottom:16px;
  border-radius:14px;
  overflow:hidden;
  position:relative;
  background:linear-gradient(135deg, #f0f8ff 0%, #fff9e6 100%);
}
.aula-image{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform 0.4s ease;
}
.aula-card:hover .aula-image{
  transform:scale(1.1);
}
.aula-card .aula-icon{
  font-size:56px;
  margin-bottom:16px;
  display:block;
  animation:iconBounce 2s ease-in-out infinite;
  transform-origin:center;
}
.aula-card:nth-child(1) .aula-icon{animation-delay:0s;}
.aula-card:nth-child(2) .aula-icon{animation-delay:0.2s;}
.aula-card:nth-child(3) .aula-icon{animation-delay:0.4s;}
.aula-card:nth-child(4) .aula-icon{animation-delay:0.6s;}
.aula-card h3{
  font-family:'Poppins',sans-serif;
  font-size:20px;
  color:${C.azul};
  margin-bottom:10px;
  font-weight:700;
  transition:color 0.3s ease;
}
.aula-card:hover h3{
  color:${C.amarelo};
}
.aula-card p{
  font-size:14px;
  color:#64748b;
  line-height:1.6;
  font-weight:500;
  margin-bottom:0;
}
.aula-extra-badge{
  display:inline-block;
  background:${C.amarelo};
  color:#fff;
  font-size:11px;
  font-weight:700;
  padding:4px 12px;
  border-radius:50px;
  margin-top:12px;
  text-transform:uppercase;
  letter-spacing:0.5px;
}

/* AULAS EXTRAS - NOVO DESIGN */
.aulas-extras-slogan{
  display:flex;
  justify-content:center;
  margin:40px 0 50px;
  position:relative;
  z-index:2;
}
.aulas-extras-box{
  background:linear-gradient(135deg, ${C.azul} 0%, ${C.azulClaro} 100%);
  border:3px solid ${C.amarelo};
  padding:20px 50px;
  border-radius:50px;
  font-size:clamp(20px,2.5vw,28px);
  font-weight:900;
  color:white;
  text-align:center;
  font-family:'Poppins',sans-serif;
  letter-spacing:2px;
  box-shadow:0 8px 30px rgba(46,49,146,0.25), 0 0 0 4px rgba(255,255,255,0.1);
  position:relative;
  overflow:hidden;
  animation:aulasExtrasBoxPulse 3s ease-in-out infinite;
}
.aulas-extras-box::before{
  content:'';
  position:absolute;
  top:-50%;
  left:-50%;
  width:200%;
  height:200%;
  background:radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
  animation:aulasExtrasBoxShine 4s ease-in-out infinite;
}
@keyframes aulasExtrasBoxPulse{
  0%,100%{transform:scale(1);box-shadow:0 8px 30px rgba(46,49,146,0.25), 0 0 0 4px rgba(255,255,255,0.1);}
  50%{transform:scale(1.02);box-shadow:0 12px 40px rgba(46,49,146,0.35), 0 0 0 6px rgba(255,255,255,0.15);}
}
@keyframes aulasExtrasBoxShine{
  0%,100%{transform:rotate(0deg) translate(-50%,-50%);opacity:0;}
  50%{transform:rotate(180deg) translate(-50%,-50%);opacity:1;}
}
.aula-extra-card{
  background:#fff;
  color:#333;
  border:2px solid rgba(46,167,224,0.15);
  box-shadow:0 4px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(46,167,224,0.05);
  position:relative;
  overflow:hidden;
  transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
}
.aula-extra-card::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:4px;
  background:linear-gradient(90deg, ${C.azul}, ${C.azulClaro}, ${C.amarelo});
  transform:scaleX(0);
  transform-origin:left;
  transition:transform 0.4s ease;
}
.aula-extra-card:hover{
  transform:translateY(-8px) scale(1.02);
  box-shadow:0 12px 40px rgba(46,49,146,0.15), 0 0 0 1px rgba(46,167,224,0.1);
  border-color:${C.azulClaro};
}
.aula-extra-card:hover::before{
  transform:scaleX(1);
}
.aula-extra-card h3{
  color:${C.azul};
  font-size:clamp(20px,2.2vw,24px);
  margin-bottom:12px;
  font-weight:800;
}
.aula-extra-card p{
  color:#64748b;
  line-height:1.6;
  font-size:clamp(14px,1.6vw,16px);
}
.aula-extra-card .aula-icon{
  font-size:clamp(40px,5vw,50px);
  margin-bottom:15px;
  display:block;
  filter:drop-shadow(0 2px 6px rgba(0,0,0,0.1));
}
.aula-extra-info{
  margin-top:25px;
  padding-top:20px;
  border-top:2px solid rgba(46,167,224,0.1);
  display:flex;
  flex-direction:column;
  gap:15px;
  background:linear-gradient(135deg, rgba(240,248,255,0.5) 0%, rgba(255,254,245,0.3) 100%);
  padding:20px;
  border-radius:12px;
  margin-left:-10px;
  margin-right:-10px;
  margin-bottom:-10px;
}
.aula-extra-frequencia{
  font-size:clamp(14px,1.5vw,16px);
  font-weight:600;
  color:#444;
  display:flex;
  align-items:center;
  gap:10px;
  padding:8px 12px;
  background:rgba(255,255,255,0.8);
  border-radius:8px;
  border-left:3px solid ${C.azulClaro};
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
}
.aula-extra-preco{
  font-size:clamp(16px,1.8vw,18px);
  font-weight:800;
  color:${C.azul};
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  background:linear-gradient(135deg, rgba(253,185,19,0.15) 0%, rgba(253,185,19,0.08) 100%);
  border-radius:8px;
  border:2px solid rgba(253,185,19,0.2);
  box-shadow:0 2px 8px rgba(253,185,19,0.1);
}
.aulas-extras-disclaimer{
  text-align:center;
  margin-top:40px;
  font-size:clamp(14px,1.5vw,16px);
  color:#64748b;
  font-weight:600;
  font-style:italic;
  position:relative;
  z-index:2;
  padding:15px 25px;
  background:rgba(253,185,19,0.08);
  border-radius:12px;
  border-left:4px solid ${C.amarelo};
  max-width:600px;
  margin-left:auto;
  margin-right:auto;
  box-shadow:0 2px 10px rgba(0,0,0,0.05);
}
.horarios-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:30px;
  max-width:1200px;
  margin:0 auto;
  width:100%;
  box-sizing:border-box;
}
.horario-card{
  background:#fff;
  border-radius:24px;
  padding:35px 30px;
  text-align:center;
  box-shadow:0 4px 25px rgba(46,49,146,0.08);
  border:2px solid rgba(46,167,224,0.1);
  position:relative;
  overflow:hidden;
  transition:all 0.5s cubic-bezier(0.4,0,0.2,1);
  animation:horarioCardFloat 0.6s ease-out both;
}
.horario-card:nth-child(1){animation-delay:0.1s;}
.horario-card:nth-child(2){animation-delay:0.2s;}
.horario-card:nth-child(3){animation-delay:0.3s;}
.horario-card::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:5px;
  background:linear-gradient(90deg,${C.azul},${C.azulClaro},${C.amarelo});
  transform:scaleX(0);
  transform-origin:left;
  transition:transform 0.5s ease;
}
.horario-card:hover{
  transform:translateY(-10px) scale(1.03);
  box-shadow:0 16px 50px rgba(46,49,146,0.2);
  border-color:${C.amarelo};
}
.horario-card:hover::before{
  transform:scaleX(1);
}
.horario-card .horario-icon{
  font-size:64px;
  margin-bottom:20px;
  display:block;
  animation:iconBounce 2.5s ease-in-out infinite;
}
.horario-card h3{
  font-family:'Poppins',sans-serif;
  font-size:24px;
  color:${C.azul};
  margin-bottom:12px;
  font-weight:700;
  transition:color 0.3s ease;
}
.horario-card:hover h3{
  color:${C.amarelo};
}
.horario-card .horario-desc{
  font-size:15px;
  color:#64748b;
  line-height:1.6;
  font-weight:500;
  margin-bottom:16px;
}
.horario-times{
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items:center;
  width:100%;
}
.horario-card .horario-time{
  display:block;
  background:linear-gradient(135deg,${C.azulClaro}20,${C.amareloClaro}20);
  color:${C.azul};
  font-size:15px;
  font-weight:700;
  padding:12px 24px;
  border-radius:50px;
  font-family:'Poppins',sans-serif;
  width:100%;
  text-align:center;
  border:2px solid rgba(46,167,224,0.2);
  transition:all 0.3s ease;
  box-sizing:border-box;
}
.horario-card .horario-time:hover{
  background:linear-gradient(135deg,${C.azulClaro}30,${C.amareloClaro}30);
  border-color:${C.azulClaro};
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(46,167,224,0.2);
}
@keyframes aulaCardFloat{
  from{opacity:0;transform:translateY(30px) scale(0.9);}
  to{opacity:1;transform:translateY(0) scale(1);}
}
@keyframes horarioCardFloat{
  from{opacity:0;transform:translateY(30px) scale(0.95);}
  to{opacity:1;transform:translateY(0) scale(1);}
}

/* CONTATO */
.cbg{
  background:linear-gradient(180deg,
    rgba(240,248,255,0.15) 0%,
    #ffffff 25%,
    #ffffff 50%,
    #ffffff 75%,
    rgba(240,248,255,0.15) 100%
  );
  position:relative;
  overflow:hidden;
}
.cbg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    radial-gradient(circle at 25% 25%, rgba(46,167,224,0.04) 0%, transparent 60%),
    radial-gradient(circle at 75% 75%, rgba(253,185,19,0.03) 0%, transparent 60%),
    radial-gradient(ellipse at 15% 70%, rgba(46,167,224,0.02) 0%, transparent 70%),
    radial-gradient(ellipse at 85% 30%, rgba(253,185,19,0.02) 0%, transparent 70%),
    linear-gradient(135deg, transparent 0%, rgba(46,167,224,0.01) 50%, transparent 100%);
  pointer-events:none;
  z-index:0;
  animation:contactBackgroundPulse 25s ease-in-out infinite;
}
.cbg::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:200px;
  background:linear-gradient(to bottom, 
    rgba(255,254,245,0.2) 0%, 
    rgba(240,248,255,0.15) 30%, 
    rgba(255,255,255,0.1) 60%, 
    transparent 100%
  );
  pointer-events:none;
  z-index:0;
}
@keyframes contactBackgroundPulse{
  0%,100%{opacity:1;transform:scale(1);}
  50%{opacity:0.96;transform:scale(1.015);}
}
.cinner{
  max-width:800px;
  margin:0 auto;
  text-align:center;
}
.chips{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:24px;
  margin-bottom:40px;
}
.chip{
  display:flex;
  align-items:center;
  gap:14px;
  background:#fff;
  border-radius:16px;
  padding:18px 28px;
  box-shadow:0 4px 20px rgba(0,0,0,0.06);
  font-weight:600;
  color:${C.azul};
  font-size:16px;
  border:1px solid rgba(0,0,0,0.04);
  transition:all 0.3s ease;
}
.chip:hover{
  transform:translateY(-3px);
  box-shadow:0 6px 25px rgba(0,0,0,0.1);
}
.chipico{
  width:44px;
  height:44px;
  border-radius:50%;
  background:${C.amareloClaro};
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
}
.cemail{
  color:#64748b;
  font-weight:600;
  font-size:16px;
  margin-bottom:36px;
}
.bcont{
  background:linear-gradient(135deg,${C.azul},${C.azulClaro});
  color:#fff;
  font-weight:700;
  font-size:18px;
  padding:20px 60px;
  border-radius:50px;
  border:none;
  cursor:pointer;
  font-family:'Nunito',sans-serif;
  box-shadow:0 8px 30px rgba(46,49,146,0.3);
  transition:all 0.3s ease;
}
.bcont:hover{
  transform:translateY(-4px) scale(1.02);
  box-shadow:0 12px 40px rgba(46,49,146,0.4);
}

/* CONTACT FORM */
.contact-cards-row{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
  max-width:1400px;
  margin:0 auto 50px;
  width:100%;
  box-sizing:border-box;
  position:relative;
  z-index:1;
}
.contact-cards-row .chip{
  flex:1;
  min-width:0;
  width:100%;
  box-sizing:border-box;
}
.chip-email{
  position:relative;
  overflow:visible;
}
.rocket-above-card{
  position:absolute;
  top:-90px;
  right:30px;
  z-index:20;
  pointer-events:none;
  animation:rocketFloat 8s ease-in-out infinite;
  filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));
}
@keyframes rocketFloat{
  0%,100%{transform:translateY(0) rotate(-20deg);}
  50%{transform:translateY(-12px) rotate(-15deg);}
}
@media(max-width:768px){
  .rocket-above-card{
    top:-70px;
    right:15px;
  }
  .rocket-above-card img{
    max-width:60px;
    height:auto;
  }
}
.contact-wrapper{
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  gap:40px;
  max-width:1400px;
  margin:0 auto;
  width:100%;
  box-sizing:border-box;
  align-items:start;
}
.contact-form-section{
  background:linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
  border-radius:28px;
  padding:50px 45px;
  box-shadow:0 12px 50px rgba(46,49,146,0.12);
  border:2px solid rgba(46,167,224,0.15);
  position:relative;
  z-index:1;
  overflow:hidden;
  animation:contactFormSlide 0.6s ease-out;
}
.contact-form-section::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:5px;
  background:linear-gradient(90deg,${C.azul},${C.azulClaro},${C.amarelo});
  z-index:0;
}
.contact-form-section::after{
  content:'';
  position:absolute;
  top:-50%;
  right:-50%;
  width:200%;
  height:200%;
  background:radial-gradient(circle, rgba(253,185,19,0.03) 0%, transparent 70%);
  pointer-events:none;
  z-index:0;
}
@keyframes contactFormSlide{
  from{opacity:0;transform:translateX(-30px);}
  to{opacity:1;transform:translateX(0);}
}
.form-title{
  font-family:'Poppins',sans-serif;
  font-size:24px;
  color:${C.azul};
  margin-bottom:35px;
  font-weight:700;
  text-align:center;
  position:relative;
  z-index:1;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
}
.form-title::before{
  content:'';
  position:absolute;
  bottom:-10px;
  left:50%;
  transform:translateX(-50%);
  width:60px;
  height:4px;
  background:linear-gradient(90deg,${C.azulClaro},${C.amarelo});
  border-radius:2px;
}
.contact-form{
  display:flex;
  flex-direction:column;
  gap:24px;
  position:relative;
  z-index:1;
}
.form-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
}
.form-group{
  display:flex;
  flex-direction:column;
  gap:10px;
  position:relative;
}
.form-group label{
  font-family:'Poppins',sans-serif;
  font-size:15px;
  font-weight:600;
  color:${C.azul};
  display:flex;
  align-items:center;
  gap:8px;
  margin-bottom:4px;
}
.input-wrapper{
  position:relative;
  width:100%;
}
.form-group input,
.form-group select,
.form-group textarea{
  padding:16px 20px;
  border:2px solid rgba(46,167,224,0.25);
  border-radius:14px;
  font-family:'Nunito',sans-serif;
  font-size:15px;
  color:#333;
  background:#fff;
  transition:all 0.3s cubic-bezier(0.4,0,0.2,1);
  width:100%;
  box-sizing:border-box;
  appearance:none;
}
.form-group select{
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232E3192' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat:no-repeat;
  background-position:right 18px center;
  background-size:14px;
  padding-right:45px;
}
.form-group input:hover,
.form-group select:hover,
.form-group textarea:hover{
  border-color:${C.azulClaro};
  box-shadow:0 2px 8px rgba(46,167,224,0.1);
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus{
  outline:none;
  border-color:${C.azulClaro};
  box-shadow:0 0 0 4px rgba(46,167,224,0.15), 0 4px 12px rgba(46,167,224,0.2);
  transform:translateY(-2px);
}
.form-group textarea{
  resize:vertical;
  min-height:130px;
  font-family:'Nunito',sans-serif;
  line-height:1.6;
}
.form-submit-btn{
  background:linear-gradient(135deg,${C.azul} 0%,${C.azulClaro} 100%);
  color:#fff;
  font-weight:700;
  font-size:18px;
  padding:20px 45px;
  border-radius:50px;
  border:none;
  cursor:pointer;
  font-family:'Nunito',sans-serif;
  box-shadow:0 8px 30px rgba(46,49,146,0.35);
  transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
  margin-top:15px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  position:relative;
  overflow:hidden;
  width:100%;
}
.form-submit-btn::before{
  content:'';
  position:absolute;
  top:0;
  left:-100%;
  width:100%;
  height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
  transition:left 0.5s ease;
}
.form-submit-btn:hover::before{
  left:100%;
}
.form-submit-btn:hover{
  transform:translateY(-4px) scale(1.02);
  box-shadow:0 12px 40px rgba(46,49,146,0.45);
}
.form-submit-btn:active{
  transform:translateY(-2px) scale(0.98);
}
.form-submit-btn span:first-child{
  font-size:22px;
  animation:iconPulse 2s ease-in-out infinite;
}
@keyframes iconPulse{
  0%,100%{transform:scale(1);}
  50%{transform:scale(1.1);}
}
.contact-map-section{
  display:flex;
  flex-direction:column;
  gap:0;
  position:relative;
  z-index:1;
  animation:contactInfoSlide 0.6s ease-out 0.2s both;
}
@keyframes contactInfoSlide{
  from{opacity:0;transform:translateX(30px);}
  to{opacity:1;transform:translateX(0);}
}
.chip{
  display:flex;
  align-items:center;
  gap:18px;
  background:linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
  border-radius:20px;
  padding:22px 28px;
  box-shadow:0 6px 25px rgba(46,49,146,0.1);
  font-weight:600;
  color:${C.azul};
  font-size:16px;
  border:2px solid rgba(46,167,224,0.15);
  transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
  position:relative;
  overflow:hidden;
}
.chip::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:5px;
  height:100%;
  background:linear-gradient(180deg,${C.azul},${C.azulClaro},${C.amarelo});
  transform:scaleY(0);
  transform-origin:bottom;
  transition:transform 0.4s ease;
}
.chip:hover{
  transform:translateY(-5px) translateX(5px);
  box-shadow:0 10px 35px rgba(46,49,146,0.2);
  border-color:${C.azulClaro};
}
.chip:hover::before{
  transform:scaleY(1);
}
.chipico{
  width:52px;
  height:52px;
  border-radius:16px;
  background:linear-gradient(135deg,${C.amareloClaro},${C.azulClaro}40);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:24px;
  flex-shrink:0;
  box-shadow:0 4px 15px rgba(253,185,19,0.25);
  transition:all 0.3s ease;
}
.chip:hover .chipico{
  transform:scale(1.1) rotate(5deg);
  box-shadow:0 6px 20px rgba(253,185,19,0.35);
}
.chip-text{
  flex:1;
  line-height:1.5;
  word-break:break-word;
}
.map-link-wrapper{
  text-align:center;
  margin-bottom:20px;
  position:relative;
  z-index:1;
}
.map-link{
  display:inline-block;
  color:${C.azulClaro};
  font-weight:600;
  font-size:15px;
  text-decoration:none;
  padding:8px 20px;
  border-radius:20px;
  background:rgba(46,167,224,0.1);
  transition:all 0.3s ease;
  font-family:'Nunito',sans-serif;
}
.map-link:hover{
  background:rgba(46,167,224,0.2);
  color:${C.azul};
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(46,167,224,0.2);
}
.map-wrapper{
  background:linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
  border-radius:28px;
  padding:35px;
  box-shadow:0 12px 50px rgba(46,49,146,0.12);
  border:2px solid rgba(46,167,224,0.15);
  position:relative;
  overflow:hidden;
}
.map-wrapper::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:5px;
  background:linear-gradient(90deg,${C.azul},${C.azulClaro},${C.amarelo});
  z-index:1;
}
.map-title{
  font-family:'Poppins',sans-serif;
  font-size:22px;
  color:${C.azul};
  margin-bottom:25px;
  font-weight:700;
  text-align:center;
  position:relative;
  z-index:1;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
}
.map-title::after{
  content:'';
  position:absolute;
  bottom:-8px;
  left:50%;
  transform:translateX(-50%);
  width:50px;
  height:3px;
  background:linear-gradient(90deg,${C.azulClaro},${C.amarelo});
  border-radius:2px;
}
.map-container{
  width:100%;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 8px 30px rgba(0,0,0,0.15);
  position:relative;
  z-index:1;
  transition:all 0.3s ease;
}
.map-container:hover{
  box-shadow:0 12px 40px rgba(0,0,0,0.2);
  transform:scale(1.01);
}
.map-container iframe{
  border-radius:20px;
}

/* FOOTER */
footer{
  background:${C.azul};
  color:rgba(255,255,255,0.8);
  text-align:center;
  padding:40px clamp(20px,5%,60px);
  font-size:15px;
  font-weight:500;
  width:100%;
  max-width:100vw;
  box-sizing:border-box;
  margin:0;
}
footer em{
  color:${C.amarelo};
  font-style:normal;
}

/* WA FLOAT */
.wa{
  position:fixed;
  bottom:30px;
  right:clamp(15px,3vw,30px);
  z-index:600;
  width:60px;
  height:60px;
  border-radius:50%;
  background:#25D366;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 6px 20px rgba(37,211,102,0.4);
  text-decoration:none;
  animation:pulse 2.5s ease-in-out infinite;
  transition:transform 0.3s;
  max-width:calc(100vw - 30px);
}
.wa:hover{
  transform:scale(1.1);
}

/* LAUNCH BUTTON */
.launch-btn{
  position:fixed;
  bottom:100px;
  right:clamp(15px,3vw,30px);
  z-index:600;
  width:50px;
  height:50px;
  border-radius:50%;
  background:${C.azulClaro};
  border:none;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 4px 15px rgba(46,167,224,0.4);
  animation:pulse 3s ease-in-out infinite 1s;
  transition:all 0.3s;
  font-size:24px;
  max-width:calc(100vw - 30px);
}
.launch-btn:hover{
  transform:scale(1.1);
}

/* FLYING ROCKET */
.fly-rocket{
  position:fixed;
  z-index:550;
  pointer-events:none;
  animation:fly 2.2s cubic-bezier(0.2,1,0.4,1) forwards;
  max-width:100vw;
  overflow:hidden;
}
@keyframes fly{
  0%{bottom:-120px;left:clamp(0px,var(--fx),calc(100vw - 120px));transform:rotate(-10deg) scale(0.6);opacity:0;}
  10%{opacity:1;}
  60%{transform:rotate(-15deg) scale(1.1);}
  100%{bottom:110vh;left:clamp(0px,calc(var(--fx) + 80px),calc(100vw - 120px));transform:rotate(25deg) scale(0.7);opacity:0;}
}

/* KEYFRAMES */
@keyframes fadeInUp{
  from{opacity:0;transform:translateY(30px);}
  to{opacity:1;transform:translateY(0);}
}
@keyframes fadeInRight{
  from{opacity:0;transform:translateX(40px);}
  to{opacity:1;transform:translateX(0);}
}
@keyframes bob{
  0%,100%{transform:translateY(0) rotate(0deg);}
  50%{transform:translateY(-12px) rotate(3deg);}
}
@keyframes pulse{
  0%,100%{transform:scale(1);}
  50%{transform:scale(1.08);}
}
@keyframes cloudDrift{
  0%{transform:translateX(-10%) translateY(0px);}
  50%{transform:translateX(10%) translateY(-5px);}
  100%{transform:translateX(-10%) translateY(0px);}
}

/* NUVENS REALISTAS COM CSS */
.realistic-cloud{
  position:relative;
  width:100%;
  height:100%;
  pointer-events:none;
}
.cloud-part{
  position:absolute;
  border-radius:50%;
  background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.85) 40%, rgba(230,240,250,0.7) 70%, rgba(220,235,245,0.5) 100%);
  box-shadow:
    0 8px 16px rgba(0,0,0,0.1),
    inset 0 -2px 8px rgba(135,206,250,0.3),
    inset 0 2px 4px rgba(255,255,255,0.8);
  filter:blur(1px);
  transform:translateZ(0);
  will-change:transform;
}
.cloud-part::before{
  content:'';
  position:absolute;
  top:10%;
  left:20%;
  width:40%;
  height:40%;
  border-radius:50%;
  background:radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%);
  filter:blur(2px);
}
.cloud-part::after{
  content:'';
  position:absolute;
  bottom:15%;
  right:25%;
  width:35%;
  height:35%;
  border-radius:50%;
  background:radial-gradient(circle, rgba(200,230,255,0.4) 0%, transparent 70%);
  filter:blur(3px);
}
.cloud-variant-1 .cloud-part:nth-child(1){
  background:radial-gradient(circle at 25% 25%, rgba(255,255,255,0.98) 0%, rgba(245,250,255,0.9) 50%, rgba(230,240,250,0.7) 100%);
}
.cloud-variant-1 .cloud-part:nth-child(2){
  background:radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.85) 45%, rgba(225,238,248,0.65) 100%);
}
.cloud-variant-1 .cloud-part:nth-child(4){
  background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.92) 0%, rgba(235,245,255,0.8) 50%, rgba(220,235,245,0.6) 100%);
}
.cloud-variant-2 .cloud-part{
  background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.97) 0%, rgba(242,250,255,0.88) 40%, rgba(228,240,250,0.72) 70%, rgba(215,235,245,0.55) 100%);
}
.cloud-variant-2 .cloud-part:nth-child(2){
  background:radial-gradient(circle at 28% 28%, rgba(255,255,255,0.99) 0%, rgba(248,252,255,0.9) 45%, rgba(232,242,252,0.75) 100%);
}
.cloud-variant-3 .cloud-part{
  background:radial-gradient(circle at 32% 32%, rgba(255,255,255,0.96) 0%, rgba(238,248,255,0.86) 42%, rgba(223,238,248,0.68) 100%);
}
.cloud-variant-3 .cloud-part:nth-child(4){
  background:radial-gradient(circle at 38% 38%, rgba(255,255,255,0.94) 0%, rgba(235,247,255,0.82) 48%, rgba(218,233,245,0.62) 100%);
}
@keyframes starTwinkle{
  0%,100%{opacity:0.3;transform:scale(1);}
  50%{opacity:0.6;transform:scale(1.1);}
}

/* Media Queries */
@media(max-width:1024px){
  .nav{padding:0 clamp(15px,4%,40px);}
  .links{gap:20px;}
  .hero{padding:100px clamp(15px,4%,40px) 60px;}
  section{padding:80px clamp(15px,4%,40px);}
  .ribbon{padding:40px clamp(15px,4%,40px);gap:40px;}
  .dgrid{grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;}
  .tgrid{grid-template-columns:repeat(auto-fit,minmax(250px,1fr));}
  .depogrid{grid-template-columns:repeat(auto-fit,minmax(280px,1fr));}
  .depo-carousel-wrapper{padding:0 50px;}
  .depo-carousel-track .depocard{width:100% !important;}
}

@media(max-width:1024px){
  .links{display:none;}
  .ham{display:block;}
}
@media(max-width:768px){
  .pill{display:none;}
  .nav{padding:0 20px;}
  .nav.sc{height:90px;}
  .drawer{top:100px;}
  .brand-logo{height:70px;}
  .brand{left:20px;}
  .nav-right{right:20px;}
  .hero{
    flex-direction:column;
    text-align:center;
    padding:120px 20px 40px;
  }
  .hero-photo-container{
    position:relative;
    top:auto;
    right:auto;
    transform:none;
    width:100%;
    max-width:400px;
    margin:30px auto 0;
  }
  .dcard-photo{
    height:150px;
  }
  .aula-photo{
    height:140px;
  }
  .historia-photos{
    grid-template-columns:1fr;
    gap:20px;
  }
  .historia-photo-item{
    height:180px;
  }
  .turma-header-photo{
    height:220px;
  }
  .hbtns{justify-content:center;}
  .ggrid{grid-template-columns:1fr 1fr;gap:15px;}
  .gitem.tall{grid-row:span 1;height:200px;}
  .gallery-carousel-wrapper{padding:0 50px;}
  .gallery-carousel-btn{width:40px;height:40px;}
  section{padding:60px 20px;}
  .ribbon{gap:30px;padding:40px 20px;}
  .dgrid{grid-template-columns:1fr;gap:20px;}
  .tgrid{grid-template-columns:1fr;}
  .depogrid{grid-template-columns:1fr;}
  .depo-carousel-wrapper{padding:0 40px;}
  .depo-carousel-btn{width:40px;height:40px;}
  .depo-carousel-track .depocard{width:100% !important;}
  .chips{flex-direction:column;align-items:stretch;}
  .chip{justify-content:center;}
  .aulas-grid{grid-template-columns:1fr;gap:20px;}
  .horarios-grid{grid-template-columns:1fr;gap:24px;}
  .aulas-section-title{font-size:24px;}
  .contact-cards-row{grid-template-columns:1fr;gap:20px;margin-bottom:40px;}
  .contact-wrapper{grid-template-columns:1fr;gap:35px;}
  .form-row{grid-template-columns:1fr;}
  .contact-form-section{padding:35px 30px;}
  .map-wrapper{padding:30px 25px;}
  .form-title{font-size:20px;}
  .map-title{font-size:20px;}
}

@media(max-width:480px){
  .hero{padding:100px 15px 30px;}
  section{padding:50px 15px;}
  .ribbon{padding:30px 15px;gap:25px;}
  .ggrid{grid-template-columns:1fr;}
  .gallery-carousel-wrapper{padding:0 40px;}
  .gallery-carousel-btn{width:40px;height:40px;}
  .hbtns{flex-direction:column;width:100%;}
  .bcta,.bout{width:100%;}
}

/* NOSSA HISTÓRIA */
.historiabg{
  background:linear-gradient(180deg,
    #e0f0ff 0%,
    #e8f4ff 10%,
    #f0f8ff 20%,
    #f8faff 35%,
    #ffffff 50%,
    #f8faff 65%,
    #f0f8ff 80%,
    #e8f4ff 90%,
    #fff0f5 100%
  );
  padding:120px clamp(20px,5%,60px) 100px;
  position:relative;
  overflow:hidden;
  margin-top:0;
}
.historiabg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    linear-gradient(to bottom,
      rgba(224,240,255,0.5) 0%,
      rgba(232,244,255,0.4) 10%,
      rgba(240,248,255,0.3) 20%,
      rgba(248,250,255,0.2) 30%,
      transparent 40%,
      transparent 60%,
      rgba(255,250,245,0.2) 70%,
      rgba(255,245,250,0.3) 80%,
      rgba(255,240,248,0.4) 90%,
      rgba(255,235,245,0.5) 100%
    ),
    radial-gradient(circle at 10% 20%, rgba(46,167,224,0.12) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(253,185,19,0.1) 0%, transparent 50%);
  pointer-events:none;
  z-index:0;
  animation:backgroundFloat 25s ease-in-out infinite;
}
.historiabg::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:800px;
  background:linear-gradient(to bottom, 
    rgba(255,240,245,0) 0%,
    rgba(255,240,245,0) 5%,
    rgba(255,240,245,0.01) 10%,
    rgba(255,240,245,0.03) 15%,
    rgba(255,240,245,0.06) 20%,
    rgba(255,240,245,0.1) 25%,
    rgba(255,240,245,0.15) 30%,
    rgba(255,240,245,0.22) 35%,
    rgba(255,240,245,0.3) 40%,
    rgba(255,240,245,0.4) 45%,
    rgba(255,240,245,0.5) 50%,
    rgba(255,240,245,0.6) 55%,
    rgba(255,240,245,0.7) 60%,
    rgba(255,240,245,0.78) 65%,
    rgba(255,240,245,0.85) 70%,
    rgba(255,240,245,0.9) 75%,
    rgba(255,240,245,0.94) 80%,
    rgba(255,240,245,0.97) 85%,
    rgba(255,240,245,0.99) 90%,
    rgba(255,240,245,1) 95%,
    rgba(255,240,245,1) 100%
  );
  pointer-events:none;
  z-index:0;
}
.historia-content{
  position:relative;
  z-index:2;
  margin-bottom:60px;
}
.historia-text{
  max-width:900px;
  margin:0 auto 50px;
  font-size:18px;
  line-height:1.8;
  color:#444;
  text-align:center;
}
.historia-photos{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:25px;
  margin-top:40px;
}
.historia-photo-item{
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 8px 25px rgba(0,0,0,0.1);
  position:relative;
  background:linear-gradient(135deg, #f0f8ff 0%, #fff9e6 100%);
  height:200px;
}
.historia-photo{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform 0.4s ease;
}
.historia-photo-item:hover .historia-photo{
  transform:scale(1.1);
}
.historia-marcos{
  margin-top:50px;
}
.historia-marcos h3{
  text-align:center;
  font-size:28px;
  color:${C.azul};
  margin-bottom:40px;
  font-weight:700;
}
.marcos-timeline{
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  max-width:1200px;
  margin:30px auto 0;
  justify-content:center;
}
.marco-item{
  background:white;
  padding:25px 20px;
  border-radius:20px;
  box-shadow:0 8px 25px rgba(0,0,0,0.1);
  text-align:center;
  transition:transform 0.3s ease,box-shadow 0.3s ease;
  position:relative;
  z-index:2;
  flex:1;
  min-width:180px;
  max-width:250px;
}
.marco-item:hover{
  transform:translateY(-5px);
  box-shadow:0 12px 35px rgba(0,0,0,0.15);
}
.marco-ano{
  font-size:32px;
  font-weight:800;
  color:${C.azul};
  margin-bottom:10px;
}
.marco-evento{
  font-size:16px;
  color:#666;
  line-height:1.6;
}

/* MISSÃO, VISÃO E VALORES */
.mvv-section{
  position:relative;
  z-index:2;
  margin-top:80px;
}
.mvv-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
  gap:40px;
  margin-bottom:60px;
  max-width:1200px;
  margin-left:auto;
  margin-right:auto;
}
.mvv-card{
  background:white;
  padding:40px;
  border-radius:25px;
  box-shadow:0 10px 30px rgba(0,0,0,0.1);
  text-align:center;
  transition:transform 0.3s ease,box-shadow 0.3s ease;
  position:relative;
  z-index:2;
}
.mvv-card:hover{
  transform:translateY(-8px);
  box-shadow:0 15px 40px rgba(0,0,0,0.15);
}
.mvv-icon{
  font-size:60px;
  margin-bottom:20px;
  display:block;
}
.mvv-card h3{
  font-size:26px;
  color:${C.azul};
  margin-bottom:20px;
  font-weight:700;
}
.mvv-card p{
  font-size:17px;
  line-height:1.8;
  color:#555;
}
.valores-section{
  margin-top:60px;
}
.valores-section h3{
  text-align:center;
  font-size:32px;
  color:${C.azul};
  margin-bottom:40px;
  font-weight:700;
}
.valores-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:25px;
  max-width:1200px;
  margin:0 auto;
}
.valor-card{
  background:white;
  padding:30px 20px;
  border-radius:20px;
  box-shadow:0 8px 25px rgba(0,0,0,0.1);
  text-align:center;
  transition:transform 0.3s ease,box-shadow 0.3s ease;
  position:relative;
  z-index:2;
}
.valor-card:hover{
  transform:translateY(-5px);
  box-shadow:0 12px 35px rgba(0,0,0,0.15);
}
.valor-icon{
  font-size:50px;
  display:block;
  margin-bottom:15px;
}
.valor-card h4{
  font-size:20px;
  color:${C.azul};
  margin-bottom:12px;
  font-weight:700;
}
.valor-card p{
  font-size:15px;
  line-height:1.6;
  color:#666;
}

/* METODOLOGIA */
.metodologia-section{
  position:relative;
  z-index:2;
  margin-top:80px;
  padding-top:60px;
  border-top:2px solid rgba(46,49,146,0.1);
}
.metodologia-title{
  text-align:center;
  font-size:32px;
  color:${C.azul};
  margin-bottom:15px;
  font-weight:700;
}
.metodologia-subtitle{
  text-align:center;
  font-size:20px;
  color:#666;
  margin-bottom:30px;
}
.metodologia-desc{
  max-width:900px;
  margin:0 auto 50px;
  font-size:18px;
  line-height:1.8;
  color:#444;
  text-align:center;
}
.pilares-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
  max-width:1200px;
  margin:0 auto;
}
.pilar-card{
  background:white;
  padding:35px 25px;
  border-radius:20px;
  box-shadow:0 8px 25px rgba(0,0,0,0.1);
  text-align:center;
  transition:transform 0.3s ease,box-shadow 0.3s ease;
  position:relative;
  z-index:2;
}
.pilar-card:hover{
  transform:translateY(-5px);
  box-shadow:0 12px 35px rgba(0,0,0,0.15);
}
.pilar-icon{
  font-size:50px;
  display:block;
  margin-bottom:15px;
}
.pilar-card h4{
  font-size:22px;
  color:${C.azul};
  margin-bottom:15px;
  font-weight:700;
}
.pilar-card p{
  font-size:16px;
  line-height:1.7;
  color:#666;
}

@media(max-width:768px){
  .historia-text{font-size:16px;}
  .mvv-grid{grid-template-columns:1fr;gap:30px;}
  .valores-grid{grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;}
  .pilares-grid{grid-template-columns:1fr;gap:25px;}
  .marcos-timeline{flex-direction:column;align-items:stretch;}
  .marco-item{max-width:100%;min-width:auto;}
  .metodologia-title{font-size:26px;}
  .metodologia-desc{font-size:16px;}
}

/* VALORES BG */
.valoresbg{
  background:linear-gradient(180deg,
    #fff0f5 0%,
    #fff0f5 3%,
    #fff0f6 6%,
    #fff0f7 10%,
    #fff0f8 15%,
    #fff2f8 20%,
    #fff4f8 28%,
    #fff5f8 35%,
    #fff6f9 42%,
    #fff7fa 48%,
    #fff8fa 55%,
    #fff9fb 62%,
    #fffafb 68%,
    #fffbfc 74%,
    #fffcfd 79%,
    #fefeff 84%,
    #fcfdff 88%,
    #fafdff 91%,
    #f8fcff 94%,
    #f0f0ff 97%,
    #e8f0ff 100%
  );
  padding:100px clamp(20px,5%,60px);
  position:relative;
  overflow:hidden;
  margin-top:-220px;
  padding-top:300px;
}
.valoresbg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:400px;
  background:linear-gradient(to bottom, 
    rgba(255,240,245,0.5) 0%,
    rgba(255,240,245,0.45) 8%,
    rgba(255,240,245,0.38) 15%,
    rgba(255,240,245,0.3) 22%,
    rgba(255,240,245,0.22) 30%,
    rgba(255,240,245,0.15) 40%,
    rgba(255,240,245,0.1) 50%,
    rgba(255,240,245,0.06) 60%,
    rgba(255,240,245,0.03) 70%,
    rgba(255,240,245,0.01) 80%,
    transparent 90%,
    transparent 100%
  );
  pointer-events:none;
  z-index:1;
}
.valoresbg::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:800px;
  background:linear-gradient(to bottom, 
    rgba(224,240,255,0) 0%,
    rgba(224,240,255,0) 5%,
    rgba(224,240,255,0.01) 10%,
    rgba(224,240,255,0.03) 15%,
    rgba(224,240,255,0.06) 20%,
    rgba(224,240,255,0.1) 25%,
    rgba(224,240,255,0.15) 30%,
    rgba(224,240,255,0.22) 35%,
    rgba(224,240,255,0.3) 40%,
    rgba(224,240,255,0.4) 45%,
    rgba(224,240,255,0.5) 50%,
    rgba(224,240,255,0.6) 55%,
    rgba(224,240,255,0.7) 60%,
    rgba(224,240,255,0.78) 65%,
    rgba(224,240,255,0.85) 70%,
    rgba(224,240,255,0.9) 75%,
    rgba(224,240,255,0.94) 80%,
    rgba(224,240,255,0.97) 85%,
    rgba(224,240,255,0.99) 90%,
    rgba(224,240,255,1) 95%,
    rgba(224,240,255,1) 100%
  );
  pointer-events:none;
  z-index:0;
}

/* METODOLOGIA BG */
.metodologiabg{
  background:linear-gradient(180deg,
    #e8f0ff 0%,
    #f0f4ff 10%,
    #f0f8ff 20%,
    #f5faff 35%,
    #ffffff 50%,
    #fffef5 65%,
    #fffaf0 80%,
    #fff5e8 90%,
    #fff0e0 100%
  );
  padding:100px clamp(20px,5%,60px);
  position:relative;
  overflow:hidden;
  margin-top:-80px;
  padding-top:180px;
}
.metodologiabg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    linear-gradient(to bottom,
      rgba(232,240,255,0.5) 0%,
      rgba(240,244,255,0.4) 10%,
      rgba(240,248,255,0.3) 20%,
      rgba(245,250,255,0.2) 30%,
      transparent 40%,
      transparent 60%,
      rgba(255,254,245,0.2) 70%,
      rgba(255,250,240,0.3) 80%,
      rgba(255,245,230,0.4) 90%,
      rgba(255,240,224,0.5) 100%
    ),
    radial-gradient(circle at 20% 30%, rgba(46,167,224,0.12) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(253,185,19,0.1) 0%, transparent 50%);
  pointer-events:none;
  z-index:0;
  animation:backgroundFloat 25s ease-in-out infinite;
}
.metodologiabg::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:350px;
  background:linear-gradient(to bottom, 
    transparent 0%,
    rgba(255,254,245,0.15) 10%,
    rgba(255,250,240,0.35) 25%,
    rgba(255,248,235,0.55) 45%,
    rgba(255,245,230,0.75) 70%,
    rgba(255,240,225,0.85) 85%,
    rgba(255,235,220,0.9) 100%
  );
  pointer-events:none;
  z-index:0;
}

/* BILINGUISMO BADGE */
.bilinguismo-badge,.bilinguismo-info{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  margin-top:30px;
  padding:20px 30px;
  background:linear-gradient(135deg, ${C.azul} 0%, ${C.azulClaro} 100%);
  border-radius:50px;
  box-shadow:0 8px 25px rgba(46,49,146,0.3);
  position:relative;
  z-index:2;
  max-width:600px;
  margin-left:auto;
  margin-right:auto;
}
.bilinguismo-icon{
  font-size:32px;
}
.bilinguismo-text{
  font-size:18px;
  font-weight:700;
  color:white;
  text-align:center;
}

/* BOTÃO SAIBA MAIS NO CARD DE TURMA */
.tcard-btn{
  margin-top:0;
  padding:12px 30px;
  background:linear-gradient(135deg, ${C.azul} 0%, ${C.azulClaro} 100%);
  color:white;
  border:none;
  border-radius:25px;
  font-size:14px;
  font-weight:700;
  cursor:pointer;
  transition:all 0.3s ease;
  text-transform:uppercase;
  letter-spacing:1px;
  box-shadow:0 4px 15px rgba(46,49,146,0.3);
  display:inline-block;
  vertical-align:middle;
}
.tcard-btn:hover{
  transform:translateY(-3px);
  box-shadow:0 6px 20px rgba(46,49,146,0.4);
  background:linear-gradient(135deg, ${C.azulClaro} 0%, ${C.azul} 100%);
}

/* PÁGINA DE TURMAS */
.turmas-header-bg{
  background:linear-gradient(180deg,
    #ffe8e0 0%,
    #fff0e8 5%,
    #fff8f0 12%,
    #fffaf5 25%,
    #ffffff 45%,
    #fffaf5 60%,
    #f8faff 72%,
    #f0f8ff 82%,
    #e8f0ff 90%,
    #e4f0ff 95%,
    #e0f0ff 100%
  );
  padding:120px clamp(20px,5%,60px) 80px;
  position:relative;
  overflow:hidden;
  margin-top:0;
}
.turmas-header-bg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    linear-gradient(to bottom,
      rgba(255,232,224,0.5) 0%,
      rgba(255,240,232,0.4) 10%,
      rgba(255,248,240,0.3) 20%,
      rgba(255,250,245,0.2) 30%,
      transparent 40%,
      transparent 60%,
      rgba(255,254,245,0.2) 70%,
      rgba(255,250,240,0.3) 80%,
      rgba(255,245,235,0.4) 90%,
      rgba(240,248,255,0.5) 100%
    ),
    radial-gradient(circle at 10% 20%, rgba(253,185,19,0.12) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(46,167,224,0.12) 0%, transparent 50%);
  pointer-events:none;
  z-index:0;
  animation:backgroundFloat 25s ease-in-out infinite;
}
.turmas-header-bg::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:800px;
  background:linear-gradient(to bottom, 
    rgba(224,240,255,0) 0%,
    rgba(224,240,255,0) 5%,
    rgba(224,240,255,0.01) 10%,
    rgba(224,240,255,0.03) 15%,
    rgba(224,240,255,0.06) 20%,
    rgba(224,240,255,0.1) 25%,
    rgba(224,240,255,0.15) 30%,
    rgba(224,240,255,0.22) 35%,
    rgba(224,240,255,0.3) 40%,
    rgba(224,240,255,0.4) 45%,
    rgba(224,240,255,0.5) 50%,
    rgba(224,240,255,0.6) 55%,
    rgba(224,240,255,0.7) 60%,
    rgba(224,240,255,0.78) 65%,
    rgba(224,240,255,0.85) 70%,
    rgba(224,240,255,0.9) 75%,
    rgba(224,240,255,0.94) 80%,
    rgba(224,240,255,0.97) 85%,
    rgba(224,240,255,0.99) 90%,
    rgba(224,240,255,1) 95%,
    rgba(224,240,255,1) 100%
  );
  pointer-events:none;
  z-index:0;
}
.turma-detail-bg{
  padding:80px clamp(20px,5%,60px);
  position:relative;
  overflow:hidden;
}
.turma-detail-bg.even{
  background:linear-gradient(180deg,
    #e0f0ff 0%,
    #e0f0ff 3%,
    #e2f0ff 6%,
    #e4f0ff 10%,
    #e6f0ff 15%,
    #e8f0ff 20%,
    #e8f0ff 28%,
    #eaf2ff 35%,
    #ecf4ff 42%,
    #eef4ff 48%,
    #f0f4ff 55%,
    #f2f6ff 62%,
    #f4f8ff 68%,
    #f6f9ff 74%,
    #f8faff 79%,
    #fafbff 84%,
    #fcfdff 88%,
    #fefeff 91%,
    #fff0f5 94%,
    #fff2f6 97%,
    #fff5f8 100%
  );
  margin-top:-220px;
  padding-top:300px;
}
.turma-detail-bg.even::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:400px;
  background:linear-gradient(to bottom, 
    rgba(224,240,255,0.5) 0%,
    rgba(224,240,255,0.45) 8%,
    rgba(224,240,255,0.38) 15%,
    rgba(224,240,255,0.3) 22%,
    rgba(224,240,255,0.22) 30%,
    rgba(224,240,255,0.15) 40%,
    rgba(224,240,255,0.1) 50%,
    rgba(224,240,255,0.06) 60%,
    rgba(224,240,255,0.03) 70%,
    rgba(224,240,255,0.01) 80%,
    transparent 90%,
    transparent 100%
  );
  pointer-events:none;
  z-index:1;
}
.turma-detail-bg.odd{
  background:linear-gradient(180deg,
    #fff0f5 0%,
    #fff0f5 3%,
    #fff0f5 6%,
    #fff0f5 10%,
    #fff0f6 15%,
    #fff0f7 20%,
    #fff0f8 28%,
    #fff2f8 35%,
    #fff4f8 42%,
    #fff5f8 48%,
    #fff5f8 55%,
    #fff6f9 62%,
    #fff7fa 68%,
    #fff8fa 74%,
    #fff9fb 79%,
    #fffafb 84%,
    #fffbfc 88%,
    #fffcfd 91%,
    #f0f8ff 94%,
    #e8f0ff 97%,
    #e8f0ff 100%
  );
  margin-top:-220px;
  padding-top:300px;
}
.turma-detail-bg.odd::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:400px;
  background:linear-gradient(to bottom, 
    rgba(255,240,245,0.5) 0%,
    rgba(255,240,245,0.45) 8%,
    rgba(255,240,245,0.38) 15%,
    rgba(255,242,248,0.3) 22%,
    rgba(255,244,248,0.22) 30%,
    rgba(255,246,250,0.15) 40%,
    rgba(255,248,252,0.1) 50%,
    rgba(240,248,255,0.06) 60%,
    rgba(232,240,255,0.03) 70%,
    rgba(232,240,255,0.01) 80%,
    transparent 90%,
    transparent 100%
  );
  pointer-events:none;
  z-index:1;
}
.turma-detail-bg.even::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:800px;
  background:linear-gradient(to bottom, 
    rgba(255,240,245,0) 0%,
    rgba(255,240,245,0) 5%,
    rgba(255,240,245,0.01) 10%,
    rgba(255,240,245,0.03) 15%,
    rgba(255,240,245,0.06) 20%,
    rgba(255,240,245,0.1) 25%,
    rgba(255,240,245,0.15) 30%,
    rgba(255,240,245,0.22) 35%,
    rgba(255,240,245,0.3) 40%,
    rgba(255,240,245,0.4) 45%,
    rgba(255,240,245,0.5) 50%,
    rgba(255,240,245,0.6) 55%,
    rgba(255,240,245,0.7) 60%,
    rgba(255,240,245,0.78) 65%,
    rgba(255,240,245,0.85) 70%,
    rgba(255,240,245,0.9) 75%,
    rgba(255,240,245,0.94) 80%,
    rgba(255,240,245,0.97) 85%,
    rgba(255,240,245,0.99) 90%,
    rgba(255,240,245,1) 95%,
    rgba(255,240,245,1) 100%
  );
  pointer-events:none;
  z-index:0;
}
.turma-detail-bg.odd::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:800px;
  background:linear-gradient(to bottom, 
    rgba(224,240,255,0) 0%,
    rgba(224,240,255,0) 5%,
    rgba(224,240,255,0.01) 10%,
    rgba(224,240,255,0.03) 15%,
    rgba(224,240,255,0.06) 20%,
    rgba(224,240,255,0.1) 25%,
    rgba(224,240,255,0.15) 30%,
    rgba(224,240,255,0.22) 35%,
    rgba(224,240,255,0.3) 40%,
    rgba(224,240,255,0.4) 45%,
    rgba(224,240,255,0.5) 50%,
    rgba(224,240,255,0.6) 55%,
    rgba(224,240,255,0.7) 60%,
    rgba(224,240,255,0.78) 65%,
    rgba(224,240,255,0.85) 70%,
    rgba(224,240,255,0.9) 75%,
    rgba(224,240,255,0.94) 80%,
    rgba(224,240,255,0.97) 85%,
    rgba(224,240,255,0.99) 90%,
    rgba(224,240,255,1) 95%,
    rgba(224,240,255,1) 100%
  );
  pointer-events:none;
  z-index:0;
}
.turma-detail-content{
  position:relative;
  z-index:2;
  max-width:1000px;
  margin:0 auto;
}
.turma-detail-header{
  text-align:center;
  margin-bottom:40px;
}
.turma-header-photo{
  width:100%;
  max-width:600px;
  height:300px;
  margin:30px auto 0;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,0.15);
  position:relative;
  background:linear-gradient(135deg, #f0f8ff 0%, #fff9e6 100%);
}
.turma-header-image{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform 0.4s ease;
}
.turma-header-photo:hover .turma-header-image{
  transform:scale(1.05);
}
.turma-detail-title{
  font-size:36px;
  color:${C.azul};
  margin-bottom:15px;
  font-weight:800;
}
.turma-detail-subtitle{
  font-size:24px;
  color:#666;
  font-weight:700;
  letter-spacing:2px;
}
.turma-detail-body{
  background:white;
  padding:50px 40px;
  border-radius:30px;
  box-shadow:0 10px 40px rgba(0,0,0,0.1);
}
.turma-detail-desc{
  font-size:18px;
  line-height:1.9;
  color:#444;
  margin-bottom:40px;
  text-align:justify;
}
.turma-atividades{
  margin-top:40px;
  padding-top:40px;
  border-top:1px solid rgba(46,49,146,0.05);
  position:relative;
}
.turma-atividades::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:1px;
  background:linear-gradient(to right,
    transparent 0%,
    rgba(46,49,146,0.05) 20%,
    rgba(46,49,146,0.08) 50%,
    rgba(46,49,146,0.05) 80%,
    transparent 100%
  );
}
.turma-atividades-title{
  font-size:24px;
  color:${C.azul};
  margin-bottom:25px;
  font-weight:700;
  text-align:center;
}
.turma-atividades-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
}
.turma-atividade-item{
  display:flex;
  align-items:center;
  gap:12px;
  padding:15px 20px;
  background:linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%);
  border-radius:15px;
  transition:all 0.3s ease;
}
.turma-atividade-item:hover{
  transform:translateY(-3px);
  box-shadow:0 6px 20px rgba(0,0,0,0.1);
  background:linear-gradient(135deg, #e8f0ff 0%, #d8e7ff 100%);
}
.turma-atividade-icon{
  font-size:28px;
}
.turma-atividade-nome{
  font-size:16px;
  font-weight:600;
  color:#333;
}
.turmas-cta-bg{
  background:linear-gradient(135deg, ${C.azul} 0%, ${C.azulClaro} 100%);
  padding:80px clamp(20px,5%,60px);
  position:relative;
  overflow:hidden;
  margin-top:-220px;
  padding-top:300px;
}
.turmas-cta-bg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:400px;
  background:linear-gradient(to bottom, 
    rgba(255,240,245,0.3) 0%,
    rgba(255,240,245,0.2) 15%,
    rgba(255,240,245,0.1) 30%,
    rgba(255,240,245,0.05) 50%,
    rgba(46,167,224,0.1) 70%,
    rgba(46,167,224,0.2) 85%,
    transparent 100%
  );
  pointer-events:none;
  z-index:0;
}
.turmas-cta-content{
  text-align:center;
  position:relative;
  z-index:2;
  max-width:800px;
  margin:0 auto;
}
.turmas-cta-title{
  font-size:32px;
  color:white;
  margin-bottom:20px;
  font-weight:800;
}
.turmas-cta-text{
  font-size:20px;
  color:rgba(255,255,255,0.9);
  margin-bottom:35px;
}
.turmas-cta-btn{
  padding:18px 50px;
  background:white;
  color:${C.azul};
  border:none;
  border-radius:50px;
  font-size:18px;
  font-weight:700;
  cursor:pointer;
  transition:all 0.3s ease;
  box-shadow:0 8px 25px rgba(0,0,0,0.2);
}
.turmas-cta-btn:hover{
  transform:translateY(-5px);
  box-shadow:0 12px 35px rgba(0,0,0,0.3);
  background:#f0f0f0;
}

@media(max-width:768px){
  .turma-detail-title{font-size:28px;}
  .turma-detail-subtitle{font-size:20px;}
  .turma-detail-desc{font-size:16px;}
  .turma-detail-body{padding:35px 25px;}
  .turma-atividades-grid{grid-template-columns:1fr;gap:15px;}
  .turmas-cta-title{font-size:26px;}
  .turmas-cta-text{font-size:18px;}
  .bilinguismo-badge,.bilinguismo-info{padding:15px 25px;flex-direction:column;gap:8px;}
  .bilinguismo-text{font-size:16px;}
}

/* PROJETOS INTEGRADOS */
.projetosbg{
  background:linear-gradient(180deg,
    #e8f0ff 0%,
    #f0f4ff 10%,
    #f0f8ff 20%,
    #f5faff 35%,
    #ffffff 50%,
    #fffef5 65%,
    #fffaf0 80%,
    #fff5e8 90%,
    #fff0e0 100%
  );
  padding:70px clamp(20px,5%,60px) 80px;
  position:relative;
  overflow:hidden;
  margin-top:-80px;
  padding-top:150px;
}
.projetosbg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    linear-gradient(to bottom,
      rgba(232,240,255,0.5) 0%,
      rgba(240,244,255,0.4) 10%,
      rgba(240,248,255,0.3) 20%,
      rgba(248,250,255,0.2) 30%,
      transparent 40%,
      transparent 60%,
      rgba(255,254,245,0.2) 70%,
      rgba(255,250,240,0.3) 80%,
      rgba(255,245,230,0.4) 90%,
      rgba(255,240,224,0.5) 100%
    ),
    radial-gradient(circle at 20% 30%, rgba(253,185,19,0.12) 0%, transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(46,167,224,0.12) 0%, transparent 60%);
  pointer-events:none;
  z-index:0;
  animation:backgroundFloat 25s ease-in-out infinite;
}
.projetosbg::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:800px;
  background:linear-gradient(to bottom, 
    rgba(240,248,255,0) 0%,
    rgba(240,248,255,0) 5%,
    rgba(240,248,255,0.01) 10%,
    rgba(240,248,255,0.03) 15%,
    rgba(240,248,255,0.06) 20%,
    rgba(240,248,255,0.1) 25%,
    rgba(240,248,255,0.15) 30%,
    rgba(240,248,255,0.22) 35%,
    rgba(240,248,255,0.3) 40%,
    rgba(240,248,255,0.4) 45%,
    rgba(240,248,255,0.5) 50%,
    rgba(240,248,255,0.6) 55%,
    rgba(240,248,255,0.7) 60%,
    rgba(240,248,255,0.78) 65%,
    rgba(240,248,255,0.85) 70%,
    rgba(240,248,255,0.9) 75%,
    rgba(240,248,255,0.94) 80%,
    rgba(240,248,255,0.97) 85%,
    rgba(240,248,255,0.99) 90%,
    rgba(240,248,255,1) 95%,
    rgba(240,248,255,1) 100%
  );
  pointer-events:none;
  z-index:0;
}
.projetos-content{
  position:relative;
  z-index:2;
  max-width:900px;
  margin:0 auto;
  text-align:center;
}
.projetos-titulo{
  font-family:'Nunito',sans-serif;
  font-size:clamp(32px,4vw,40px);
  color:${C.azul};
  margin-bottom:20px;
  font-weight:800;
  font-style:italic;
  position:relative;
  z-index:2;
  text-align:center;
}
.projetos-subtitle-box{
  background:white;
  border:2px solid ${C.azul};
  padding:15px 35px;
  border-radius:8px;
  font-size:clamp(18px,2.2vw,22px);
  font-weight:700;
  color:${C.azul};
  text-align:center;
  font-family:'Poppins',sans-serif;
  letter-spacing:0.5px;
  margin:0 auto 30px;
  max-width:550px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
  position:relative;
  z-index:2;
}
.projetos-educacao{
  text-align:center;
  max-width:700px;
  margin:0 auto;
  position:relative;
  z-index:2;
}
.projetos-educacao-title{
  font-size:clamp(20px,2.5vw,24px);
  color:${C.amarelo};
  font-weight:700;
  margin-bottom:20px;
  font-family:'Poppins',sans-serif;
  letter-spacing:1px;
  text-align:center;
}
.projetos-educacao-list{
  list-style:none;
  padding:0;
  margin:0;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:15px;
}
.projetos-educacao-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:8px;
  font-size:clamp(16px,1.8vw,18px);
  color:#444;
  font-weight:600;
  font-family:'Poppins',sans-serif;
  padding:20px 15px;
  background:rgba(255,255,255,0.9);
  border-radius:12px;
  border:2px solid ${C.amarelo};
  transition:all 0.3s ease;
  position:relative;
  box-shadow:0 2px 10px rgba(0,0,0,0.05);
  text-align:center;
}
.projetos-educacao-item:hover{
  background:rgba(255,255,255,1);
  transform:translateY(-5px);
  box-shadow:0 6px 20px rgba(0,0,0,0.12);
  border-color:${C.azul};
}
.projetos-educacao-item::before{
  display:none;
}
.projetos-educacao-icon{
  font-size:clamp(28px,3vw,32px);
  margin-bottom:5px;
}
.projetos-educacao-nome{
  letter-spacing:0.5px;
  line-height:1.4;
}

@media(max-width:768px){
  .projetos-educacao-list{
    grid-template-columns:1fr;
    gap:12px;
  }
  .projetos-educacao-item{
    padding:18px 12px;
  }
}

/* PROGRAMAS EDUCACIONAIS */
.programasbg{
  background:linear-gradient(180deg,
    #fff5e8 0%,
    #fffaf0 10%,
    #fffef5 20%,
    #fffef8 35%,
    #ffffff 50%,
    #f8faff 65%,
    #f0f8ff 80%,
    #e8f4ff 90%,
    #e0f0ff 100%
  );
  padding:100px clamp(20px,5%,60px);
  position:relative;
  overflow:hidden;
  margin-top:-80px;
  padding-top:180px;
}
.programasbg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:
    linear-gradient(to bottom,
      rgba(255,245,232,0.5) 0%,
      rgba(255,250,240,0.4) 10%,
      rgba(255,254,245,0.3) 20%,
      rgba(255,255,255,0.2) 30%,
      transparent 40%,
      transparent 60%,
      rgba(248,250,255,0.2) 70%,
      rgba(240,248,255,0.3) 80%,
      rgba(235,245,255,0.4) 90%,
      rgba(230,240,255,0.5) 100%
    ),
    radial-gradient(circle at 20% 30%, rgba(253,185,19,0.12) 0%, transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(46,167,224,0.12) 0%, transparent 60%);
  pointer-events:none;
  z-index:0;
  animation:backgroundFloat 25s ease-in-out infinite;
}
.programasbg::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:350px;
  background:linear-gradient(to bottom, 
    transparent 0%,
    rgba(240,248,255,0.15) 10%,
    rgba(235,245,255,0.35) 25%,
    rgba(230,240,255,0.55) 45%,
    rgba(225,238,255,0.75) 70%,
    rgba(220,235,255,0.85) 85%,
    rgba(215,232,255,0.9) 100%
  );
  pointer-events:none;
  z-index:0;
}
.programas-content{
  position:relative;
  z-index:2;
  max-width:900px;
  margin:0 auto;
}
.programas-titulo{
  font-family:'Nunito',sans-serif;
  font-size:clamp(36px,4vw,48px);
  color:${C.azul};
  margin-bottom:40px;
  font-weight:800;
  font-style:italic;
  text-align:center;
  position:relative;
}
.programas-destaque-box{
  background:white;
  border:3px solid ${C.azul};
  padding:25px 50px;
  border-radius:8px;
  font-size:32px;
  font-weight:800;
  color:${C.azul};
  text-align:center;
  font-family:'Poppins',sans-serif;
  letter-spacing:2px;
  margin:0 auto 50px;
  max-width:500px;
  box-shadow:0 8px 25px rgba(0,0,0,0.15);
  position:relative;
  z-index:2;
}
.programas-textos{
  display:flex;
  flex-direction:column;
  gap:25px;
  max-width:850px;
  margin:0 auto;
  position:relative;
  z-index:2;
}
.programas-texto{
  font-size:clamp(16px,1.8vw,18px);
  line-height:1.9;
  color:${C.azul};
  font-family:'Poppins',sans-serif;
  text-align:center;
  font-weight:500;
}
.programas-texto strong{
  font-weight:800;
  color:${C.azul};
}

@media(max-width:768px){
  .programas-titulo{font-size:36px;text-align:center;}
  .programas-destaque-box{font-size:24px;padding:20px 30px;}
  .programas-texto{font-size:16px;text-align:justify;}
}

/* EQUIPE MULTIPROFISSIONAL */
.equipebg{
  background:linear-gradient(180deg,
    #f0f8ff 0%,
    #f0f8ff 3%,
    #f2f8ff 6%,
    #f4f8ff 10%,
    #f5faff 15%,
    #f6faff 20%,
    #f8faff 28%,
    #fafaff 35%,
    #fcfaff 42%,
    #fefaff 48%,
    #ffffff 55%,
    #fefaff 62%,
    #fcfaff 68%,
    #fafaff 74%,
    #f8faff 79%,
    #f6faff 84%,
    #f4f8ff 88%,
    #f2f8ff 91%,
    #f0f8ff 94%,
    #eef8ff 97%,
    #e8f4ff 100%
  );
  padding:70px clamp(20px,5%,60px) 80px;
  position:relative;
  overflow:hidden;
  margin-top:-220px;
  padding-top:300px;
}
.equipebg::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:400px;
  background:linear-gradient(to bottom, 
    rgba(240,248,255,0.5) 0%,
    rgba(240,248,255,0.45) 8%,
    rgba(240,248,255,0.38) 15%,
    rgba(240,248,255,0.3) 22%,
    rgba(240,248,255,0.22) 30%,
    rgba(240,248,255,0.15) 40%,
    rgba(240,248,255,0.1) 50%,
    rgba(240,248,255,0.06) 60%,
    rgba(240,248,255,0.03) 70%,
    rgba(240,248,255,0.01) 80%,
    transparent 90%,
    transparent 100%
  );
  pointer-events:none;
  z-index:1;
}
.equipebg::after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:800px;
  background:linear-gradient(to bottom, 
    rgba(224,240,255,0) 0%,
    rgba(224,240,255,0) 5%,
    rgba(224,240,255,0.01) 10%,
    rgba(224,240,255,0.03) 15%,
    rgba(224,240,255,0.06) 20%,
    rgba(224,240,255,0.1) 25%,
    rgba(224,240,255,0.15) 30%,
    rgba(224,240,255,0.22) 35%,
    rgba(224,240,255,0.3) 40%,
    rgba(224,240,255,0.4) 45%,
    rgba(224,240,255,0.5) 50%,
    rgba(224,240,255,0.6) 55%,
    rgba(224,240,255,0.7) 60%,
    rgba(224,240,255,0.78) 65%,
    rgba(224,240,255,0.85) 70%,
    rgba(224,240,255,0.9) 75%,
    rgba(224,240,255,0.94) 80%,
    rgba(224,240,255,0.97) 85%,
    rgba(224,240,255,0.99) 90%,
    rgba(224,240,255,1) 95%,
    rgba(224,240,255,1) 100%
  );
  pointer-events:none;
  z-index:0;
}
.equipe-dots-top{
  position:absolute;
  top:30px;
  right:30px;
  width:100px;
  height:40px;
  background-image:radial-gradient(circle, white 3px, transparent 3px);
  background-size:20px 20px;
  opacity:0.6;
  z-index:1;
}
.equipe-dots-bottom{
  position:absolute;
  bottom:30px;
  left:30px;
  width:100px;
  height:40px;
  background-image:radial-gradient(circle, white 3px, transparent 3px);
  background-size:20px 20px;
  opacity:0.6;
  z-index:1;
}
.equipe-content{
  position:relative;
  z-index:2;
  max-width:900px;
  margin:0 auto;
  text-align:center;
}
.equipe-logo{
  margin-bottom:25px;
  display:flex;
  justify-content:center;
  align-items:center;
}
.equipe-titulo{
  font-size:clamp(28px,3.5vw,36px);
  color:${C.azul};
  font-weight:800;
  font-family:'Poppins',sans-serif;
  letter-spacing:1.5px;
  margin-bottom:15px;
  text-transform:uppercase;
  position:relative;
  z-index:2;
  text-align:center;
}
.equipe-subtitulo{
  font-size:clamp(20px,2.5vw,24px);
  color:${C.amarelo};
  font-weight:700;
  font-family:'Nunito',sans-serif;
  font-style:italic;
  margin-bottom:25px;
  text-align:center;
}
.equipe-destaque-box{
  background:white;
  border:2px solid ${C.azul};
  padding:15px 35px;
  border-radius:8px;
  font-size:clamp(18px,2.2vw,22px);
  font-weight:700;
  color:${C.azul};
  text-align:center;
  font-family:'Poppins',sans-serif;
  letter-spacing:1px;
  margin:0 auto 30px;
  max-width:550px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
  text-transform:uppercase;
  position:relative;
  z-index:2;
}
.equipe-descricao{
  font-size:clamp(16px,1.8vw,18px);
  color:#444;
  font-family:'Poppins',sans-serif;
  line-height:1.7;
  text-align:center;
  max-width:750px;
  margin:0 auto;
  font-weight:500;
  letter-spacing:0.3px;
  position:relative;
  z-index:2;
}

@media(max-width:768px){
  .equipe-dots-top,.equipe-dots-bottom{width:80px;height:30px;}
}
`;

