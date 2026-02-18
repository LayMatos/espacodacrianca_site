import { FloatCloud, FloatStar, FloatRocket } from "../components";
import { C, APPS_ESCOLA } from "../data/constants";
import clipescolaLogo from "../assets/images/logo_clipescola.png";
import wdmobLogo from "../assets/images/WD-MOB V2.png";

const Pais = () => {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="pais-header-bg">
        {/* Nuvens decorativas */}
        <FloatCloud top="8%" left="-6%" size={1.4} opacity={0.25} speed="55s" delay="0s" variant={3} />
        <FloatCloud top="20%" right="-5%" size={1.2} opacity={0.22} speed="53s" delay="10s" variant={2} />
        <FloatCloud top="35%" left="-4%" size={1.1} opacity={0.2} speed="57s" delay="20s" variant={1} />
        <FloatCloud bottom="25%" right="-7%" size={1.3} opacity={0.24} speed="54s" delay="30s" variant={3} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="12%" left="4%" size={16} delay="1s" />
        <FloatStar top="25%" right="6%" size={14} delay="2s" />
        <FloatStar top="38%" left="7%" size={17} delay="3s" />
        <FloatStar top="50%" right="5%" size={13} delay="4s" />
        <FloatStar bottom="30%" left="9%" size={15} delay="5s" />
        <FloatStar bottom="20%" right="8%" size={16} delay="6s" />
        
        {/* Foguetes decorativos */}
        <FloatRocket top="18%" right="12%" size={0.35} angle={-18} dur="7s" delay="2s" />
        <FloatRocket bottom="30%" left="10%" size={0.4} angle={20} dur="8s" delay="5s" />
        
        <div className="section-container">
          <h2 className="ttl">Já é <em>Pai de um Aluno</em>?</h2>
          <p className="sub">Acesse os aplicativos da escola e acompanhe o dia a dia do seu filho</p>
        </div>
      </section>

      {/* APPS SECTION */}
      <section className="pais-apps-bg">
        {/* Nuvens decorativas */}
        <FloatCloud top="10%" right="-6%" size={1.3} opacity={0.23} speed="52s" delay="0s" variant={2} />
        <FloatCloud top="30%" left="-5%" size={1.1} opacity={0.21} speed="54s" delay="15s" variant={1} />
        <FloatCloud bottom="20%" right="-4%" size={1.2} opacity={0.22} speed="56s" delay="30s" variant={3} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="15%" right="8%" size={15} delay="1s" />
        <FloatStar top="40%" left="6%" size={16} delay="3s" />
        <FloatStar bottom="25%" right="9%" size={14} delay="5s" />
        
        <div className="section-container">
          <div className="apps-grid">
            {APPS_ESCOLA.map((app, index) => {
              const logoImage = app.nome === "ClipEscola" ? clipescolaLogo : wdmobLogo;
              return (
              <div key={index} className="app-card">
                <div className="app-logo-container">
                  <img 
                    src={logoImage} 
                    alt={`Logo ${app.nome}`}
                    className="app-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="app-icon" style={{display: 'none'}}>{app.icon}</div>
                </div>
                <h3 className="app-name">{app.nome}</h3>
                <p className="app-description">{app.descricao}</p>
                <div className="app-buttons">
                  <a 
                    href={app.playStore} 
                    target="_blank" 
                    rel="noreferrer"
                    className="app-btn app-btn-android"
                    aria-label={`Baixar ${app.nome} na Play Store`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>Play Store</span>
                  </a>
                  <a 
                    href={app.appStore} 
                    target="_blank" 
                    rel="noreferrer"
                    className="app-btn app-btn-ios"
                    aria-label={`Baixar ${app.nome} na App Store`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-1.02.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>App Store</span>
                  </a>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pais;

