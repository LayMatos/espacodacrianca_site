import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Rocket, Logo, FloatRocket, FloatCloud, FloatStar, AnimatedNumber 
} from "../components";
import { 
  C, DIFS, TURMAS, DEPOS, GALS, AULAS_INCLUSAS, AULAS_EXTRAS, HORARIOS, CONTACT_INFO 
} from "../data/constants";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import GalleryModal from "../components/GalleryModal";

const Home = () => {
  const navigate = useNavigate();
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentDepoIndex, setCurrentDepoIndex] = useState(0);
  const [currentGalleryPage, setCurrentGalleryPage] = useState(0);

  const openGalleryModal = (index) => {
    setCurrentGalleryIndex(index);
    setGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setGalleryModalOpen(false);
  };

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % GALS.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + GALS.length) % GALS.length);
  };

  // Detectar se é mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextDepo = () => {
    setCurrentDepoIndex((prev) => {
      // No mobile mostra 1 por vez, no desktop 3
      const itemsPerView = isMobile ? 1 : 3;
      const maxIndex = Math.max(0, DEPOS.length - itemsPerView);
      if (maxIndex === 0) return 0;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevDepo = () => {
    setCurrentDepoIndex((prev) => {
      // No mobile mostra 1 por vez, no desktop 3
      const itemsPerView = isMobile ? 1 : 3;
      const maxIndex = Math.max(0, DEPOS.length - itemsPerView);
      if (maxIndex === 0) return 0;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // No mobile mostra menos itens por página na galeria
  const itemsPerPage = isMobile ? 4 : 7;
  const totalPages = Math.ceil(GALS.length / itemsPerPage);

  const nextGallery = () => {
    setCurrentGalleryPage((prev) => (prev + 1) % totalPages);
  };

  const prevGallery = () => {
    setCurrentGalleryPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentGalleryItems = () => {
    const start = currentGalleryPage * itemsPerPage;
    return GALS.slice(start, start + itemsPerPage);
  };
  
  const go = (id) => {
    if (id === "contato" || id === "turmas" || id === "aulas" || id === "galeria" || id === "diferenciais") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  
  const goToTurmas = () => {
    navigate("/turmas");
  };
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        {/* Nuvens decorativas no hero - SUTIS E FLUIDAS */}
        <FloatCloud top="5%" left="-10%" size={1.8} opacity={0.28} speed="45s" delay="0s" variant={3} />
        <FloatCloud top="15%" right="-8%" size={1.5} opacity={0.26} speed="50s" delay="8s" variant={2} />
        <FloatCloud top="30%" left="-6%" size={1.3} opacity={0.24} speed="42s" delay="16s" variant={1} />
        <FloatCloud top="50%" right="-5%" size={1.2} opacity={0.22} speed="48s" delay="24s" variant={3} />
        <FloatCloud bottom="30%" left="-8%" size={1.6} opacity={0.25} speed="46s" delay="32s" variant={2} />
        <FloatCloud bottom="15%" right="-6%" size={1.1} opacity={0.23} speed="44s" delay="40s" variant={1} />
        <FloatCloud top="70%" left="3%" size={1.0} opacity={0.21} speed="40s" delay="48s" variant={3} />
        <FloatCloud top="25%" right="2%" size={1.2} opacity={0.24} speed="47s" delay="56s" variant={2} />
        <FloatCloud bottom="45%" left="4%" size={1.1} opacity={0.22} speed="43s" delay="64s" variant={1} />
        
        {/* Estrelas decorativas - SUTIS */}
        <FloatStar top="10%" left="8%" size={16} delay="0s" />
        <FloatStar top="25%" right="10%" size={14} delay="2s" />
        <FloatStar top="45%" left="6%" size={15} delay="4s" />
        <FloatStar top="60%" right="8%" size={13} delay="6s" />
        <FloatStar bottom="30%" left="12%" size={16} delay="8s" />
        <FloatStar bottom="15%" right="10%" size={14} delay="10s" />
        <FloatStar top="20%" left="12%" size={15} delay="12s" />
        <FloatStar top="50%" right="12%" size={16} delay="14s" />
        <FloatStar bottom="40%" left="10%" size={13} delay="16s" />
        
        {/* Foguetes flutuantes adicionais no hero */}
        <FloatRocket top="25%" left="15%" size={0.4} angle={-15} dur="7s" delay="0s" />
        <FloatRocket bottom="40%" right="20%" size={0.35} angle={25} dur="8s" delay="3s" />
        
        <div className="hcopy" style={{position:"relative",zIndex:2}}>
          <div className="badge">✨ Berçário e Escola</div>
          <h1>Bem-vindo ao<br/><em>Espaço</em> da <em>Criança</em></h1>
          <p className="tagline">Aprender, brincar e crescer com amor</p>
          <div className="hbtns">
            <button className="bcta" onClick={()=>go("turmas")}>Conheça Nossa Escola</button>
            <button className="bout" onClick={() => {
              const mensagem = encodeURIComponent("olá, gostaria de agenda uma visita guiada");
              const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${mensagem}`;
              window.open(whatsappUrl, '_blank');
            }}>Agende uma Visita</button>
          </div>
        </div>
        <div className="hvisual" style={{position:"relative",zIndex:2}}>
          <div style={{position:"relative",width:"100%",maxWidth:"500px",overflow:"hidden"}}>
            <Rocket size={1.5} angle={15} style={{animation:"bob 4s ease-in-out infinite",maxWidth:"100%"}} />
            <FloatRocket top="10%" right="5%" size={0.6} angle={-10} dur="5s" delay="1s" />
            <FloatRocket bottom="15%" left="5%" size={0.5} angle={20} dur="6s" delay="2s" />
          </div>
          {/* FOTO DE CRIANÇAS - Adicione a imagem em: src/assets/images/hero-criancas.jpg */}
          <div className="hero-photo-container">
            <img 
              src="/images/hero-criancas.jpg" 
              alt="Crianças felizes no Espaço da Criança"
              className="hero-photo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="ribbon" style={{position:"relative"}}>
        {/* Nuvens decorativas no ribbon - MAIS NUVENS */}
        <FloatCloud top="-18%" left="-4%" size={1.3} opacity={0.4} speed="43s" delay="0s" variant={3} />
        <FloatCloud top="-12%" right="-3%" size={1.1} opacity={0.38} speed="41s" delay="10s" variant={2} />
        <FloatCloud top="-8%" left="-2%" size={0.9} opacity={0.35} speed="39s" delay="20s" variant={1} />
        <FloatCloud bottom="-15%" left="-5%" size={1.2} opacity={0.39} speed="45s" delay="30s" variant={3} />
        <FloatCloud bottom="-10%" right="-4%" size={1.0} opacity={0.37} speed="42s" delay="40s" variant={2} />
        <FloatCloud bottom="-6%" left="-3%" size={0.95} opacity={0.36} speed="44s" delay="50s" variant={1} />
        
        {/* Estrelas decorativas no ribbon - MAIS ESTRELAS */}
        <FloatStar top="15%" left="6%" size={16} delay="1s" />
        <FloatStar top="25%" right="8%" size={18} delay="2s" />
        <FloatStar top="35%" left="10%" size={14} delay="3s" />
        <FloatStar top="45%" right="7%" size={17} delay="4s" />
        <FloatStar bottom="25%" left="9%" size={15} delay="5s" />
        <FloatStar bottom="15%" right="11%" size={16} delay="6s" />
        <FloatStar bottom="5%" left="7%" size={13} delay="7s" />
        <FloatStar top="10%" left="12%" size={15} delay="8s" />
        <FloatStar top="50%" right="12%" size={16} delay="9s" />
        <FloatStar bottom="10%" left="15%" size={14} delay="10s" />
        
        {/* Foguetes no ribbon - um de cada lado */}
        <FloatRocket top="30%" left="5%" size={0.4} angle={-12} dur="8s" delay="1s" />
        <FloatRocket top="30%" right="5%" size={0.4} angle={12} dur="8s" delay="3s" />
        
        {[
          {num:"15",label:"Anos de Experiência",duration:2000},
          {num:"500",label:"Crianças Felizes",duration:2500},
          {num:"98",label:"% Aprovação",duration:1800},
          {num:"4",label:"Turmas Especiais",duration:1500}
        ].map(({num,label,duration},idx)=>(
          <div key={label} className="stat-card-3d" style={{position:"relative",zIndex:1}}>
            <div className="stat-card-inner">
              <div className="stn">
                <AnimatedNumber value={num} suffix="+" duration={duration} delay={idx*200} />
              </div>
              <div className="stl">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ZONA DE TRANSIÇÃO DECORATIVA */}
      <div className="transition-zone">
        <FloatCloud top="15%" left="-4%" size={1.3} opacity={0.25} speed="48s" delay="0s" variant={2} />
        <FloatCloud bottom="15%" right="-4%" size={1.2} opacity={0.23} speed="46s" delay="10s" variant={3} />
        <FloatStar top="20%" left="10%" size={15} delay="1s" />
        <FloatStar bottom="20%" right="10%" size={14} delay="3s" />
      </div>

      {/* DIFERENCIAIS */}
      <section className="difbg" id="diferenciais">
        {/* Nuvens decorativas - MUITO MAIS NUVENS - MAIS VISÍVEIS */}
        <FloatCloud top="5%" right="-7%" size={1.6} opacity={0.68} speed="50s" delay="0s" variant={3} />
        <FloatCloud top="15%" left="-6%" size={1.3} opacity={0.66} speed="48s" delay="8s" variant={2} />
        <FloatCloud top="25%" right="-5%" size={1.4} opacity={0.64} speed="52s" delay="16s" variant={1} />
        <FloatCloud top="38%" left="-4%" size={1.2} opacity={0.62} speed="46s" delay="24s" variant={3} />
        <FloatCloud top="50%" right="-6%" size={1.1} opacity={0.6} speed="49s" delay="32s" variant={2} />
        <FloatCloud bottom="25%" right="-7%" size={1.5} opacity={0.65} speed="51s" delay="40s" variant={1} />
        <FloatCloud bottom="15%" left="-5%" size={1.0} opacity={0.63} speed="47s" delay="48s" variant={3} />
        <FloatCloud bottom="8%" right="-4%" size={1.2} opacity={0.61} speed="53s" delay="56s" variant={2} />
        <FloatCloud top="60%" left="-3%" size={0.95} opacity={0.59} speed="45s" delay="64s" variant={1} />
        <FloatCloud bottom="2%" left="-2%" size={1.1} opacity={0.58} speed="50s" delay="72s" variant={3} />
        <FloatCloud top="28%" left="-1%" size={1.2} opacity={0.65} speed="46s" delay="78s" variant={1} />
        <FloatCloud top="58%" right="-1%" size={1.0} opacity={0.63} speed="48s" delay="84s" variant={2} />
        <FloatCloud bottom="45%" left="-3%" size={1.3} opacity={0.64} speed="47s" delay="90s" variant={3} />
        
        {/* Estrelas decorativas - MAIS ESTRELAS */}
        <FloatStar top="10%" left="5%" size={16} delay="0.5s" />
        <FloatStar top="18%" right="7%" size={14} delay="1.5s" />
        <FloatStar top="25%" left="3%" size={17} delay="2.5s" />
        <FloatStar top="32%" right="9%" size={13} delay="3.5s" />
        <FloatStar top="40%" left="6%" size={15} delay="4.5s" />
        <FloatStar top="48%" right="4%" size={16} delay="5.5s" />
        <FloatStar bottom="30%" left="10%" size={14} delay="6.5s" />
        <FloatStar bottom="22%" right="8%" size={18} delay="7.5s" />
        <FloatStar bottom="15%" left="5%" size={13} delay="8.5s" />
        <FloatStar bottom="8%" right="11%" size={15} delay="9.5s" />
        <FloatStar bottom="3%" left="8%" size={12} delay="10.5s" />
        <FloatStar top="55%" left="8%" size={17} delay="11.5s" />
        <FloatStar top="65%" right="6%" size={15} delay="12.5s" />
        <FloatStar bottom="35%" left="12%" size={16} delay="13.5s" />
        
        {/* Foguetes na seção Diferenciais */}
        <FloatRocket top="20%" right="12%" size={0.4} angle={-12} dur="8s" delay="2s" />
        <FloatRocket bottom="25%" left="15%" size={0.35} angle={18} dur="7s" delay="5s" />
        
        <div className="section-container">
          <h2 className="ttl">Diferenciais que <em>Encantam</em></h2>
          <p className="sub">O que torna o Espaço da Criança único e especial</p>
          <div className="dgrid">
            {DIFS.map((d, idx)=>(
              <div className="dcard" key={d.t}>
                <span className="ico">{d.icon}</span>
                {/* FOTO DO DIFERENCIAL - Adicione as imagens em: src/assets/images/diferencial-{idx}.jpg */}
                <div className="dcard-photo">
                  <img 
                    src={`/images/diferencial-${idx + 1}.jpg`}
                    alt={d.t}
                    className="dcard-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3>{d.t}</h3>
                <p>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TURMAS */}
      <section className="tbg" id="turmas">
        {/* Nuvens decorativas - nuvens brancas sutis no fundo azul */}
        <FloatCloud top="8%" right="-6%" size={1.4} opacity={0.25} speed="55s" delay="0s" variant={3} />
        <FloatCloud top="20%" left="-5%" size={1.2} opacity={0.22} speed="53s" delay="10s" variant={2} />
        <FloatCloud top="35%" right="-4%" size={1.1} opacity={0.2} speed="57s" delay="20s" variant={1} />
        <FloatCloud bottom="25%" left="-7%" size={1.3} opacity={0.24} speed="54s" delay="30s" variant={3} />
        <FloatCloud bottom="15%" right="-5%" size={1.0} opacity={0.21} speed="56s" delay="40s" variant={2} />
        <FloatCloud bottom="8%" left="-4%" size={1.1} opacity={0.23} speed="52s" delay="50s" variant={1} />
        <FloatCloud top="12%" left="-3%" size={1.2} opacity={0.22} speed="55s" delay="60s" variant={2} />
        <FloatCloud top="42%" right="-3%" size={1.1} opacity={0.21} speed="54s" delay="70s" variant={3} />
        <FloatCloud bottom="18%" left="-5%" size={1.0} opacity={0.24} speed="53s" delay="80s" variant={1} />
        
        {/* Estrelas decorativas - estrelas amarelas no fundo azul */}
        <FloatStar top="12%" left="4%" size={16} delay="1s" />
        <FloatStar top="25%" right="6%" size={14} delay="2s" />
        <FloatStar top="38%" left="7%" size={17} delay="3s" />
        <FloatStar top="50%" right="5%" size={13} delay="4s" />
        <FloatStar bottom="30%" left="9%" size={15} delay="5s" />
        <FloatStar bottom="20%" right="8%" size={16} delay="6s" />
        <FloatStar bottom="12%" left="6%" size={14} delay="7s" />
        <FloatStar top="15%" left="10%" size={18} delay="8s" />
        <FloatStar top="42%" right="10%" size={15} delay="9s" />
        <FloatStar top="60%" left="5%" size={16} delay="10s" />
        <FloatStar bottom="35%" right="12%" size={17} delay="11s" />
        
        {/* Foguetes na seção Turmas */}
        <FloatRocket top="15%" left="8%" size={0.4} angle={-20} dur="9s" delay="1s" />
        <FloatRocket top="45%" right="10%" size={0.3} angle={25} dur="8s" delay="4s" />
        <FloatRocket bottom="25%" left="12%" size={0.35} angle={-15} dur="7s" delay="7s" />
        
        <div className="section-container">
          <h2 className="ttl">Nossas <em>Turmas</em></h2>
          <p className="sub">Cada fase do desenvolvimento merece atenção especial</p>
          <div className="tgrid">
            {TURMAS.map(t=>(
              <div className="tcard" key={t.t}>
                <div className="tthumb">{t.icon}</div>
                <div className="tbody">
                  <h3>{t.t}</h3>
                  <p>{t.d}</p>
                  <div className="ttag-container">
                    <span className="ttag">{t.tag}</span>
                    <button className="tcard-btn" onClick={goToTurmas}>
                      SAIBA MAIS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bilinguismo-info">
            <span className="bilinguismo-icon">🌍</span>
            <span className="bilinguismo-text">Programa Bilíngue em todas as turmas</span>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="gbg" id="galeria">
        {/* Nuvens decorativas - SUTIS */}
        <FloatCloud top="8%" left="-6%" size={1.5} opacity={0.26} speed="52s" delay="0s" variant={3} />
        <FloatCloud top="25%" right="-5%" size={1.2} opacity={0.24} speed="48s" delay="10s" variant={2} />
        <FloatCloud top="50%" left="-4%" size={1.1} opacity={0.22} speed="50s" delay="20s" variant={1} />
        <FloatCloud bottom="25%" right="-5%" size={1.3} opacity={0.25} speed="49s" delay="30s" variant={3} />
        <FloatCloud bottom="12%" left="-4%" size={1.0} opacity={0.23} speed="47s" delay="40s" variant={2} />
        
        {/* Estrelas decorativas - SUTIS */}
        <FloatStar top="15%" left="8%" size={14} delay="1s" />
        <FloatStar top="40%" right="10%" size={15} delay="3s" />
        <FloatStar bottom="30%" left="10%" size={13} delay="5s" />
        <FloatStar bottom="15%" right="10%" size={14} delay="7s" />
        
        {/* Foguetes na seção Galeria - apenas desktop */}
        {!isMobile && (
          <>
            <FloatRocket top="18%" right="12%" size={0.35} angle={-18} dur="7s" delay="2s" />
            <FloatRocket bottom="30%" left="10%" size={0.4} angle={20} dur="8s" delay="5s" />
          </>
        )}
        
        <div className="section-container">
          <h2 className="ttl">Nossa <em>Galeria</em></h2>
          <p className="sub">Momentos de alegria e descoberta</p>
          
          <div className="gallery-carousel-wrapper">
            <button 
              className="gallery-carousel-btn gallery-carousel-prev" 
              onClick={prevGallery} 
              aria-label="Galeria anterior"
            >
              <span className="carousel-rocket-icon">🚀</span>
            </button>
            
            <div className="gallery-carousel-container">
              <div 
                className="gallery-carousel-track" 
                style={{ transform: `translateX(-${currentGalleryPage * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                  const pageItems = GALS.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage);
                  return (
                    <div key={pageIndex} className="gallery-carousel-page">
                      <div className="ggrid">
                        {pageItems.map((g, itemIndex) => {
                          const globalIndex = pageIndex * itemsPerPage + itemIndex;
                          return (
                            <div 
                              key={globalIndex} 
                              className={`gitem${g.tall?" tall":""}`}
                              onClick={() => {
                                setCurrentGalleryIndex(globalIndex);
                                openGalleryModal(globalIndex);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              {g.icon}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <button 
              className="gallery-carousel-btn gallery-carousel-next" 
              onClick={nextGallery} 
              aria-label="Próxima galeria"
            >
              <span className="carousel-rocket-icon">🚀</span>
            </button>
          </div>

          {totalPages > 1 && (
            <div className="gallery-carousel-dots">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`gallery-carousel-dot ${currentGalleryPage === index ? 'active' : ''}`}
                  onClick={() => setCurrentGalleryPage(index)}
                  aria-label={`Ir para página ${index + 1}`}
                />
              ))}
            </div>
          )}

          <GalleryModal
            isOpen={galleryModalOpen}
            onClose={closeGalleryModal}
            currentIndex={currentGalleryIndex}
            items={GALS}
            onNext={nextGalleryImage}
            onPrev={prevGalleryImage}
          />
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depobg">
        {/* Nuvens decorativas - MAIS VISÍVEIS */}
        <FloatCloud top="7%" right="-6%" size={1.5} opacity={0.66} speed="52s" delay="0s" variant={3} />
        <FloatCloud top="22%" left="-5%" size={1.2} opacity={0.64} speed="50s" delay="10s" variant={2} />
        <FloatCloud top="38%" right="-4%" size={1.1} opacity={0.62} speed="54s" delay="20s" variant={1} />
        <FloatCloud bottom="22%" left="-7%" size={1.4} opacity={0.65} speed="48s" delay="30s" variant={3} />
        <FloatCloud bottom="12%" right="-5%" size={1.0} opacity={0.63} speed="51s" delay="40s" variant={2} />
        <FloatCloud bottom="5%" left="-4%" size={1.1} opacity={0.6} speed="49s" delay="50s" variant={1} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="15%" left="6%" size={16} delay="1s" />
        <FloatStar top="28%" right="8%" size={14} delay="2s" />
        <FloatStar top="45%" left="5%" size={17} delay="3s" />
        <FloatStar bottom="28%" right="7%" size={15} delay="4s" />
        <FloatStar bottom="18%" left="8%" size={13} delay="5s" />
        <FloatStar bottom="8%" right="10%" size={16} delay="6s" />
        <FloatStar top="10%" right="12%" size={18} delay="7s" />
        <FloatStar top="35%" left="9%" size={15} delay="8s" />
        <FloatStar top="55%" right="9%" size={16} delay="9s" />
        <FloatStar bottom="35%" left="11%" size={14} delay="10s" />
        
        {/* Foguetes na seção Depoimentos - apenas desktop */}
        {!isMobile && (
          <>
            <FloatRocket top="25%" right="10%" size={0.3} angle={-15} dur="6s" delay="3s" />
            <FloatRocket bottom="20%" left="12%" size={0.35} angle={22} dur="7s" delay="6s" />
          </>
        )}
        
        <div className="section-container">
          <h2 className="ttl">O que as <em>Famílias</em> dizem</h2>
          <p className="sub">Histórias reais de amor e transformação</p>
          
          <div className="depo-carousel-wrapper">
            <button className="depo-carousel-btn depo-carousel-prev" onClick={prevDepo} aria-label="Depoimentos anteriores">
              <span className="carousel-rocket-icon">🚀</span>
            </button>
            
            <div className="depo-carousel-container">
              <div 
                className="depo-carousel-track" 
                style={{ 
                  transform: isMobile 
                    ? `translateX(-${currentDepoIndex * 100}%)`
                    : `translateX(calc(-${currentDepoIndex * (100 / 3)}% - ${currentDepoIndex * 20}px))`,
                  gap: isMobile ? '0' : '30px'
                }}
              >
                {DEPOS.map((d, index) => (
                  <div 
                    className="depocard" 
                    key={d.n} 
                    style={{ 
                      width: isMobile ? '100%' : `calc((100% - 60px) / 3)`, 
                      minWidth: isMobile ? '100%' : '280px' 
                    }}
                  >
                    <div className="depostars">
                      {[1,2,3,4,5].map(s=>(
                        <span key={s} style={{color:C.amarelo,fontSize:"18px"}}>⭐</span>
                      ))}
                    </div>
                    <p className="depotext">{d.t}</p>
                    <div className="depoauthor">
                      <div className="depoav">{d.i}</div>
                      <div>
                        <div className="deponame">{d.n}</div>
                        <div className="deporole">{d.r}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="depo-carousel-btn depo-carousel-next" onClick={nextDepo} aria-label="Próximos depoimentos">
              <span className="carousel-rocket-icon">🚀</span>
            </button>
          </div>
          
          {DEPOS.length > (isMobile ? 1 : 3) && (
            <div className="depo-carousel-dots-wrapper">
              {isMobile && (
                <div className="depo-carousel-counter">
                  {currentDepoIndex + 1} de {DEPOS.length}
                </div>
              )}
              <div className="depo-carousel-dots">
                {Array.from({ length: isMobile ? DEPOS.length : Math.max(1, DEPOS.length - 2) }).map((_, index) => (
                  <button
                    key={index}
                    className={`depo-carousel-dot ${currentDepoIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentDepoIndex(index)}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* AULAS E HORÁRIOS */}
      <section className="aulasbg" id="aulas">
        {/* Nuvens decorativas - SUTIS */}
        <FloatCloud top="10%" left="-6%" size={1.4} opacity={0.26} speed="50s" delay="0s" variant={3} />
        <FloatCloud top="35%" right="-5%" size={1.2} opacity={0.24} speed="48s" delay="12s" variant={2} />
        <FloatCloud bottom="25%" left="-6%" size={1.3} opacity={0.25} speed="49s" delay="24s" variant={1} />
        <FloatCloud bottom="12%" right="-4%" size={1.0} opacity={0.23} speed="47s" delay="36s" variant={3} />
        
        {/* Estrelas decorativas - SUTIS */}
        <FloatStar top="15%" left="8%" size={14} delay="1s" />
        <FloatStar top="40%" right="10%" size={15} delay="3s" />
        <FloatStar bottom="30%" left="10%" size={13} delay="5s" />
        <FloatStar bottom="15%" right="10%" size={14} delay="7s" />
        <FloatStar bottom="15%" right="12%" size={17} delay="12.5s" />
        
        {/* Nuvens na seção Aulas - SUTIS */}
        <FloatCloud top="15%" left="-4%" size={1.1} opacity={0.24} speed="46s" delay="0s" variant={1} />
        <FloatCloud bottom="15%" right="-4%" size={1.0} opacity={0.22} speed="48s" delay="15s" variant={3} />
        
        {/* Foguetes na seção Aulas */}
        <FloatRocket top="18%" right="11%" size={0.35} angle={-16} dur="8s" delay="2s" />
        <FloatRocket top="55%" left="11%" size={0.4} angle={20} dur="7s" delay="5s" />
        
        <div className="section-container">
          <h2 className="ttl">Nossas <em>Aulas</em> e <em>Horários</em></h2>
          <p className="sub">Atividades que desenvolvem habilidades e horários flexíveis para sua família</p>
          
          {/* AULAS INCLUSAS */}
          <div className="aulas-section" style={{position:"relative",zIndex:1}}>
            <h3 className="aulas-section-title">✨ Aulas Inclusas na Grade Curricular</h3>
            <div className="aulas-grid">
              {AULAS_INCLUSAS.map((aula, idx)=>(
                <div className="aula-card" key={aula.t}>
                  <span className="aula-icon">{aula.icon}</span>
                  {/* FOTO DA AULA - Adicione as imagens em: src/assets/images/aula-${aula.t.toLowerCase().replace(/\s+/g, '-')}.jpg */}
                  <div className="aula-photo">
                    <img 
                      src={`/images/aula-${aula.t.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={aula.t}
                      className="aula-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3>{aula.t}</h3>
                  <p>{aula.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AULAS EXTRAS */}
          <div className="aulas-section" style={{position:"relative",zIndex:1}}>
            <h3 className="aulas-section-title">
              <span style={{fontSize:"32px",marginRight:"10px"}}>🌟</span>
              Atividades Extras*
            </h3>
            <div className="aulas-extras-slogan">
              <div className="aulas-extras-box">TUDO EM UM SÓ LUGAR!</div>
            </div>
            <div className="aulas-grid">
              {AULAS_EXTRAS.map((aula, idx)=>(
                <div className="aula-card aula-extra-card" key={aula.t}>
                  <span className="aula-icon">{aula.icon}</span>
                  {/* FOTO DA AULA EXTRA - Adicione as imagens em: src/assets/images/aula-extra-${aula.t.toLowerCase().replace(/\s+/g, '-')}.jpg */}
                  <div className="aula-photo">
                    <img 
                      src={`/images/aula-extra-${aula.t.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={aula.t}
                      className="aula-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3>{aula.t}</h3>
                  <p>{aula.d}</p>
                  <div className="aula-extra-info">
                    <div className="aula-extra-frequencia">📅 {aula.frequencia}</div>
                    <div className="aula-extra-preco">💰 Investimento: {aula.preco}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="aulas-extras-disclaimer">
              * Não incluso na mensalidade escolar
            </div>
          </div>

          {/* HORÁRIOS */}
          <div className="aulas-section" style={{position:"relative",zIndex:1}}>
            <h3 className="aulas-section-title">⏰ Horários Disponíveis</h3>
            <div className="horarios-grid">
              {HORARIOS.map(horario=>(
                <div className="horario-card" key={horario.t}>
                  <span className="horario-icon">{horario.icon}</span>
                  <h3>{horario.t}</h3>
                  <p className="horario-desc">{horario.d}</p>
                  <div className="horario-times">
                    {horario.horarios.map((h, idx) => (
                      <span key={idx} className="horario-time">{h}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="cbg" id="contato">
        {/* Nuvens decorativas - MUITO MAIS NUVENS - MAIS VISÍVEIS */}
        <FloatCloud top="8%" left="-7%" size={1.6} opacity={0.68} speed="47s" delay="0s" variant={3} />
        <FloatCloud top="20%" right="-6%" size={1.3} opacity={0.66} speed="44s" delay="8s" variant={2} />
        <FloatCloud top="35%" left="-5%" size={1.2} opacity={0.64} speed="50s" delay="16s" variant={1} />
        <FloatCloud top="50%" right="-4%" size={1.1} opacity={0.62} speed="46s" delay="24s" variant={3} />
        <FloatCloud top="60%" left="-3%" size={1.0} opacity={0.6} speed="48s" delay="32s" variant={2} />
        <FloatCloud bottom="28%" left="-6%" size={1.4} opacity={0.65} speed="48s" delay="40s" variant={1} />
        <FloatCloud bottom="18%" right="-5%" size={1.0} opacity={0.63} speed="51s" delay="48s" variant={3} />
        <FloatCloud bottom="10%" left="-4%" size={1.2} opacity={0.61} speed="49s" delay="56s" variant={2} />
        <FloatCloud top="70%" right="-3%" size={0.9} opacity={0.58} speed="45s" delay="64s" variant={1} />
        <FloatCloud bottom="2%" left="-2%" size={1.1} opacity={0.59} speed="47s" delay="72s" variant={3} />
        
        {/* Estrelas decorativas - MAIS ESTRELAS */}
        <FloatStar top="12%" left="5%" size={17} delay="0.5s" />
        <FloatStar top="25%" right="7%" size={15} delay="1.5s" />
        <FloatStar top="38%" left="4%" size={16} delay="2.5s" />
        <FloatStar top="52%" right="6%" size={14} delay="3.5s" />
        <FloatStar bottom="32%" left="9%" size={18} delay="4.5s" />
        <FloatStar bottom="24%" right="8%" size={15} delay="5.5s" />
        <FloatStar bottom="15%" left="7%" size={13} delay="6.5s" />
        <FloatStar bottom="8%" right="9%" size={16} delay="7.5s" />
        <FloatStar top="68%" left="3%" size={12} delay="8.5s" />
        <FloatStar top="6%" right="11%" size={19} delay="9.5s" />
        <FloatStar top="18%" left="8%" size={16} delay="10.5s" />
        <FloatStar top="45%" right="10%" size={17} delay="11.5s" />
        <FloatStar top="62%" left="6%" size={15} delay="12.5s" />
        <FloatStar bottom="28%" right="12%" size={16} delay="13.5s" />
        <FloatStar bottom="12%" left="10%" size={14} delay="14.5s" />
        
        {/* Nuvens na seção Contato - SUTIS */}
        <FloatCloud top="20%" left="-3%" size={1.2} opacity={0.25} speed="48s" delay="0s" variant={2} />
        <FloatCloud bottom="15%" right="-3%" size={1.1} opacity={0.23} speed="46s" delay="18s" variant={1} />
        
        {/* Foguetes na seção Contato */}
        <FloatRocket top="20%" right="11%" size={0.4} angle={-18} dur="9s" delay="1s" />
        <FloatRocket top="50%" left="10%" size={0.35} angle={22} dur="8s" delay="4s" />
        
        <div className="section-container">
          <h2 className="ttl">Entre em <em>Contato</em></h2>
          <p className="sub">Estamos prontos para receber sua família! 🌟</p>
          
          {/* Cards de contato em linha */}
          <div className="contact-cards-row">
            <div className="chip">
              <div className="chipico">📍</div>
              <div className="chip-text">{CONTACT_INFO.endereco}</div>
            </div>
            <div className="chip">
              <div className="chipico">📞</div>
              <div className="chip-text">{CONTACT_INFO.whatsappFormatted}</div>
            </div>
            <div className="chip chip-email">
              <div className="chipico">✉️</div>
              <div className="chip-text">{CONTACT_INFO.email}</div>
              {/* Foguete acima do card de email */}
              <div className="rocket-above-card">
                <Rocket size={0.5} angle={-20} style={{animation:"bob 8s ease-in-out infinite 1s",filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.2))"}} />
              </div>
            </div>
          </div>

          {/* Formulário e Mapa lado a lado */}
          <div className="contact-wrapper">
            <div className="contact-form-section">
              <h3 className="form-title">
                <span>📝</span>
                <span>Preencha o formulário e envie via WhatsApp</span>
              </h3>
              <ContactForm 
                whatsappNumber={CONTACT_INFO.whatsapp} 
                onSubmit={() => {}}
              />
            </div>

            <div className="contact-map-section">
              <div className="map-wrapper">
                <h3 className="map-title">
                  <span>📍</span>
                  <span>Nossa Localização</span>
                </h3>
                <div className="map-link-wrapper">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.enderecoCompleto)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Ver mapa ampliado →
                  </a>
                </div>
                <Map address={CONTACT_INFO.enderecoCompleto} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

