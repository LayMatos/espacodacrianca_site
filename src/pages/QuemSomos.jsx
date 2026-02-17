import { FloatRocket, FloatCloud, FloatStar, Logo } from "../components";
import { NOSSA_HISTORIA, MISSÃO_VISÃO_VALORES, METODOLOGIA, PROJETOS_INTEGRADOS, PROGRAMAS_EDUCACIONAIS, EQUIPE_MULTIPROFISSIONAL } from "../data/constants";

const QuemSomos = () => {
  return (
    <div>
      {/* NOSSA HISTÓRIA */}
      <section className="historiabg">
        {/* Nuvens decorativas */}
        <FloatCloud top="5%" left="-8%" size={1.7} opacity={0.28} speed="52s" delay="0s" variant={3} />
        <FloatCloud top="15%" right="-7%" size={1.4} opacity={0.26} speed="50s" delay="8s" variant={2} />
        <FloatCloud top="30%" left="-6%" size={1.3} opacity={0.25} speed="48s" delay="16s" variant={1} />
        <FloatCloud top="50%" right="-5%" size={1.2} opacity={0.24} speed="51s" delay="24s" variant={3} />
        <FloatCloud top="65%" left="-4%" size={1.1} opacity={0.23} speed="49s" delay="32s" variant={2} />
        <FloatCloud bottom="30%" left="-7%" size={1.5} opacity={0.27} speed="53s" delay="40s" variant={1} />
        <FloatCloud bottom="20%" right="-6%" size={1.3} opacity={0.25} speed="47s" delay="48s" variant={3} />
        <FloatCloud bottom="10%" left="-5%" size={1.0} opacity={0.24} speed="50s" delay="56s" variant={2} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="8%" left="6%" size={16} delay="0.5s" />
        <FloatStar top="20%" right="8%" size={17} delay="1.5s" />
        <FloatStar top="35%" left="10%" size={14} delay="2.5s" />
        <FloatStar top="50%" right="12%" size={15} delay="3.5s" />
        <FloatStar top="70%" left="7%" size={13} delay="4.5s" />
        <FloatStar bottom="35%" left="12%" size={16} delay="5.5s" />
        <FloatStar bottom="25%" right="9%" size={14} delay="6.5s" />
        <FloatStar bottom="15%" left="8%" size={15} delay="7.5s" />
        <FloatStar bottom="5%" right="11%" size={13} delay="8.5s" />
        
        {/* Foguetes na seção História */}
        <FloatRocket top="18%" right="11%" size={0.35} angle={-16} dur="8s" delay="2s" />
        <FloatRocket top="45%" left="12%" size={0.4} angle={20} dur="7s" delay="4s" />
        <FloatRocket top="65%" right="10%" size={0.3} angle={-12} dur="9s" delay="6s" />
        <FloatRocket bottom="20%" left="13%" size={0.35} angle={18} dur="8s" delay="8s" />
        
        <div className="section-container">
          <h2 className="ttl">{NOSSA_HISTORIA.titulo}</h2>
          <p className="sub">{NOSSA_HISTORIA.subtitulo}</p>
          
          <div className="historia-content">
            <div className="historia-text">
              <p>{NOSSA_HISTORIA.texto}</p>
              {/* FOTOS DA HISTÓRIA - Adicione as imagens em: src/assets/images/historia-1.jpg, historia-2.jpg, etc. */}
              <div className="historia-photos">
                <div className="historia-photo-item">
                  <img 
                    src="/images/historia-1.jpg"
                    alt="História do Espaço da Criança"
                    className="historia-photo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="historia-photo-item">
                  <img 
                    src="/images/historia-2.jpg"
                    alt="História do Espaço da Criança"
                    className="historia-photo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="historia-photo-item">
                  <img 
                    src="/images/historia-3.jpg"
                    alt="História do Espaço da Criança"
                    className="historia-photo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="historia-marcos">
              <h3>Marcos da Nossa Trajetória</h3>
              <div className="marcos-timeline">
                {NOSSA_HISTORIA.marcos.map((marco, idx) => (
                  <div key={idx} className="marco-item">
                    <div className="marco-ano">{marco.ano}</div>
                    <div className="marco-evento">{marco.evento}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="valoresbg">
        {/* Nuvens decorativas */}
        <FloatCloud top="5%" right="-8%" size={1.6} opacity={0.28} speed="51s" delay="0s" variant={3} />
        <FloatCloud top="20%" left="-7%" size={1.4} opacity={0.26} speed="49s" delay="10s" variant={2} />
        <FloatCloud top="40%" right="-6%" size={1.3} opacity={0.25} speed="50s" delay="20s" variant={1} />
        <FloatCloud top="60%" left="-5%" size={1.2} opacity={0.24} speed="48s" delay="30s" variant={3} />
        <FloatCloud bottom="30%" right="-7%" size={1.5} opacity={0.27} speed="52s" delay="40s" variant={2} />
        <FloatCloud bottom="18%" left="-6%" size={1.3} opacity={0.25} speed="47s" delay="50s" variant={1} />
        <FloatCloud bottom="8%" right="-5%" size={1.0} opacity={0.23} speed="49s" delay="60s" variant={3} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="12%" left="7%" size={15} delay="0.5s" />
        <FloatStar top="28%" right="9%" size={16} delay="1.5s" />
        <FloatStar top="45%" left="11%" size={14} delay="2.5s" />
        <FloatStar top="65%" right="8%" size={17} delay="3.5s" />
        <FloatStar bottom="35%" left="10%" size={15} delay="4.5s" />
        <FloatStar bottom="22%" right="12%" size={13} delay="5.5s" />
        <FloatStar bottom="12%" left="9%" size={16} delay="6.5s" />
        <FloatStar bottom="5%" right="10%" size={14} delay="7.5s" />
        
        {/* Foguetes */}
        <FloatRocket top="20%" right="12%" size={0.4} angle={-12} dur="8s" delay="2s" />
        <FloatRocket top="50%" left="13%" size={0.35} angle={22} dur="7s" delay="4s" />
        <FloatRocket bottom="30%" right="11%" size={0.3} angle={-14} dur="9s" delay="6s" />
        <FloatRocket bottom="15%" left="14%" size={0.35} angle={18} dur="8s" delay="8s" />
        
        <div className="section-container">
          <h2 className="ttl">Missão, <em>Visão</em> e <em>Valores</em></h2>
          <p className="sub">Os pilares que guiam nosso trabalho diário</p>
          
          <div className="mvv-section">
            <div className="mvv-grid">
              <div className="mvv-card">
                <div className="mvv-icon">🎯</div>
                <h3>{MISSÃO_VISÃO_VALORES.missao.titulo}</h3>
                <p>{MISSÃO_VISÃO_VALORES.missao.texto}</p>
              </div>
              
              <div className="mvv-card">
                <div className="mvv-icon">👁️</div>
                <h3>{MISSÃO_VISÃO_VALORES.visao.titulo}</h3>
                <p>{MISSÃO_VISÃO_VALORES.visao.texto}</p>
              </div>
            </div>
            
            <div className="valores-section">
              <h3>Nossos Valores</h3>
              <div className="valores-grid">
                {MISSÃO_VISÃO_VALORES.valores.map((valor, idx) => (
                  <div key={idx} className="valor-card">
                    <span className="valor-icon">{valor.icon}</span>
                    <h4>{valor.titulo}</h4>
                    <p>{valor.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="metodologiabg">
        {/* Nuvens decorativas */}
        <FloatCloud top="5%" left="-8%" size={1.7} opacity={0.28} speed="53s" delay="0s" variant={3} />
        <FloatCloud top="18%" right="-7%" size={1.4} opacity={0.26} speed="51s" delay="9s" variant={2} />
        <FloatCloud top="35%" left="-6%" size={1.3} opacity={0.25} speed="49s" delay="18s" variant={1} />
        <FloatCloud top="55%" right="-5%" size={1.2} opacity={0.24} speed="50s" delay="27s" variant={3} />
        <FloatCloud bottom="30%" left="-7%" size={1.5} opacity={0.27} speed="52s" delay="36s" variant={2} />
        <FloatCloud bottom="18%" right="-6%" size={1.3} opacity={0.25} speed="48s" delay="45s" variant={1} />
        <FloatCloud bottom="8%" left="-5%" size={1.1} opacity={0.24} speed="47s" delay="54s" variant={3} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="10%" left="7%" size={15} delay="0.5s" />
        <FloatStar top="25%" right="9%" size={16} delay="1.5s" />
        <FloatStar top="42%" left="11%" size={14} delay="2.5s" />
        <FloatStar top="60%" right="8%" size={17} delay="3.5s" />
        <FloatStar bottom="35%" left="10%" size={15} delay="4.5s" />
        <FloatStar bottom="22%" right="12%" size={13} delay="5.5s" />
        <FloatStar bottom="12%" left="9%" size={16} delay="6.5s" />
        <FloatStar bottom="5%" right="11%" size={14} delay="7.5s" />
        
        {/* Foguetes */}
        <FloatRocket top="18%" right="11%" size={0.35} angle={-16} dur="8s" delay="2s" />
        <FloatRocket top="48%" left="12%" size={0.4} angle={22} dur="7s" delay="4s" />
        <FloatRocket bottom="25%" right="10%" size={0.3} angle={-14} dur="9s" delay="6s" />
        <FloatRocket bottom="12%" left="13%" size={0.35} angle={18} dur="8s" delay="8s" />
        
        <div className="section-container">
          <h2 className="ttl">{METODOLOGIA.titulo}</h2>
          <p className="sub">{METODOLOGIA.subtitulo}</p>
          
          <div className="metodologia-section">
            <p className="metodologia-desc">{METODOLOGIA.descricao}</p>
            
            <div className="pilares-grid">
              {METODOLOGIA.pilares.map((pilar, idx) => (
                <div key={idx} className="pilar-card">
                  <span className="pilar-icon">{pilar.icon}</span>
                  <h4>{pilar.titulo}</h4>
                  <p>{pilar.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS EDUCACIONAIS */}
      <section className="programasbg">
        {/* Nuvens decorativas */}
        <FloatCloud top="5%" left="-8%" size={1.7} opacity={0.28} speed="54s" delay="0s" variant={3} />
        <FloatCloud top="22%" right="-7%" size={1.4} opacity={0.26} speed="52s" delay="10s" variant={2} />
        <FloatCloud top="45%" left="-6%" size={1.3} opacity={0.25} speed="50s" delay="20s" variant={1} />
        <FloatCloud top="65%" right="-5%" size={1.2} opacity={0.24} speed="48s" delay="30s" variant={3} />
        <FloatCloud bottom="30%" left="-7%" size={1.5} opacity={0.27} speed="53s" delay="40s" variant={2} />
        <FloatCloud bottom="18%" right="-6%" size={1.3} opacity={0.25} speed="51s" delay="50s" variant={1} />
        <FloatCloud bottom="8%" left="-5%" size={1.1} opacity={0.24} speed="49s" delay="60s" variant={3} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="10%" left="7%" size={15} delay="0.5s" />
        <FloatStar top="28%" right="9%" size={16} delay="1.5s" />
        <FloatStar top="50%" left="11%" size={14} delay="2.5s" />
        <FloatStar top="70%" right="8%" size={17} delay="3.5s" />
        <FloatStar bottom="35%" left="10%" size={15} delay="4.5s" />
        <FloatStar bottom="22%" right="12%" size={13} delay="5.5s" />
        <FloatStar bottom="12%" left="9%" size={16} delay="6.5s" />
        <FloatStar bottom="5%" right="11%" size={14} delay="7.5s" />
        
        {/* Foguetes */}
        <FloatRocket top="20%" right="12%" size={0.4} angle={-12} dur="8s" delay="2s" />
        <FloatRocket top="55%" left="13%" size={0.35} angle={22} dur="7s" delay="4s" />
        <FloatRocket bottom="30%" right="11%" size={0.3} angle={-14} dur="9s" delay="6s" />
        <FloatRocket bottom="15%" left="14%" size={0.35} angle={18} dur="8s" delay="8s" />
        
        <div className="section-container">
          <div className="programas-content">
            <h2 className="programas-titulo">{PROGRAMAS_EDUCACIONAIS.titulo}</h2>
            
            <div className="programas-destaque-box">
              {PROGRAMAS_EDUCACIONAIS.destaque}
            </div>
            
            <div className="programas-textos">
              {PROGRAMAS_EDUCACIONAIS.textos.map((item, idx) => (
                <p key={idx} className="programas-texto" dangerouslySetInnerHTML={{
                  __html: item.paragrafo.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS INTEGRADOS */}
      <section className="projetosbg">
        {/* Nuvens decorativas */}
        <FloatCloud top="5%" left="-8%" size={1.7} opacity={0.28} speed="55s" delay="0s" variant={3} />
        <FloatCloud top="20%" right="-7%" size={1.4} opacity={0.26} speed="53s" delay="11s" variant={2} />
        <FloatCloud top="40%" left="-6%" size={1.3} opacity={0.25} speed="51s" delay="22s" variant={1} />
        <FloatCloud top="60%" right="-5%" size={1.2} opacity={0.24} speed="49s" delay="33s" variant={3} />
        <FloatCloud bottom="30%" left="-7%" size={1.5} opacity={0.27} speed="54s" delay="44s" variant={2} />
        <FloatCloud bottom="18%" right="-6%" size={1.3} opacity={0.25} speed="50s" delay="55s" variant={1} />
        <FloatCloud bottom="8%" left="-5%" size={1.1} opacity={0.24} speed="52s" delay="66s" variant={3} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="12%" left="7%" size={15} delay="0.5s" />
        <FloatStar top="30%" right="9%" size={16} delay="1.5s" />
        <FloatStar top="48%" left="11%" size={14} delay="2.5s" />
        <FloatStar top="68%" right="8%" size={17} delay="3.5s" />
        <FloatStar bottom="35%" left="10%" size={15} delay="4.5s" />
        <FloatStar bottom="22%" right="12%" size={13} delay="5.5s" />
        <FloatStar bottom="12%" left="9%" size={16} delay="6.5s" />
        <FloatStar bottom="5%" right="11%" size={14} delay="7.5s" />
        
        {/* Foguetes */}
        <FloatRocket top="20%" right="12%" size={0.4} angle={-12} dur="8s" delay="2s" />
        <FloatRocket top="52%" left="13%" size={0.35} angle={22} dur="7s" delay="4s" />
        <FloatRocket bottom="30%" right="11%" size={0.3} angle={-14} dur="9s" delay="6s" />
        <FloatRocket bottom="15%" left="14%" size={0.35} angle={18} dur="8s" delay="8s" />
        
        <div className="section-container">
          <div className="projetos-content">
            <h2 className="projetos-titulo">{PROJETOS_INTEGRADOS.titulo}</h2>
            <div className="projetos-subtitle-box">
              {PROJETOS_INTEGRADOS.subtitulo}
            </div>
            
            <div className="projetos-educacao">
              <h3 className="projetos-educacao-title">EDUCAÇÃO:</h3>
              <ul className="projetos-educacao-list">
                {PROJETOS_INTEGRADOS.educacoes.map((educacao, idx) => (
                  <li key={idx} className="projetos-educacao-item">
                    <span className="projetos-educacao-icon">{educacao.icon}</span>
                    <span className="projetos-educacao-nome">{educacao.nome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE MULTIPROFISSIONAL */}
      <section className="equipebg">
        {/* Pontos decorativos */}
        <div className="equipe-dots-top"></div>
        <div className="equipe-dots-bottom"></div>
        
        {/* Nuvens decorativas */}
        <FloatCloud top="5%" left="-8%" size={1.7} opacity={0.28} speed="57s" delay="0s" variant={3} />
        <FloatCloud top="25%" right="-7%" size={1.4} opacity={0.26} speed="55s" delay="13s" variant={2} />
        <FloatCloud top="50%" left="-6%" size={1.3} opacity={0.25} speed="53s" delay="26s" variant={1} />
        <FloatCloud bottom="30%" right="-7%" size={1.5} opacity={0.27} speed="56s" delay="39s" variant={3} />
        <FloatCloud bottom="18%" left="-6%" size={1.3} opacity={0.25} speed="52s" delay="52s" variant={2} />
        <FloatCloud bottom="8%" right="-5%" size={1.1} opacity={0.24} speed="54s" delay="65s" variant={1} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="12%" left="7%" size={15} delay="0.5s" />
        <FloatStar top="32%" right="9%" size={16} delay="1.5s" />
        <FloatStar top="55%" left="11%" size={14} delay="2.5s" />
        <FloatStar top="75%" right="8%" size={17} delay="3.5s" />
        <FloatStar bottom="35%" left="10%" size={15} delay="4.5s" />
        <FloatStar bottom="22%" right="12%" size={13} delay="5.5s" />
        <FloatStar bottom="12%" left="9%" size={16} delay="6.5s" />
        <FloatStar bottom="5%" right="11%" size={14} delay="7.5s" />
        
        {/* Foguetes */}
        <FloatRocket top="20%" right="12%" size={0.4} angle={-12} dur="8s" delay="2s" />
        <FloatRocket top="58%" left="13%" size={0.35} angle={22} dur="7s" delay="4s" />
        <FloatRocket bottom="30%" right="11%" size={0.3} angle={-14} dur="9s" delay="6s" />
        <FloatRocket bottom="15%" left="14%" size={0.35} angle={18} dur="8s" delay="8s" />
        
        <div className="section-container">
          <div className="equipe-content">
            <h2 className="equipe-titulo">{EQUIPE_MULTIPROFISSIONAL.titulo}</h2>
            <h3 className="equipe-subtitulo">{EQUIPE_MULTIPROFISSIONAL.subtitulo}</h3>
            
            <div className="equipe-destaque-box">
              {EQUIPE_MULTIPROFISSIONAL.destaque}
            </div>
            
            <p className="equipe-descricao">
              {EQUIPE_MULTIPROFISSIONAL.descricao}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;

