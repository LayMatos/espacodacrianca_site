import { useNavigate } from "react-router-dom";
import { FloatRocket, FloatCloud, FloatStar } from "../components";
import { TURMAS_DETALHADAS, C, CONTACT_INFO } from "../data/constants";

const Turmas = () => {
  const navigate = useNavigate();

  const turmas = [
    { key: "bercario", data: TURMAS_DETALHADAS.bercario },
    { key: "educacaoInfantil", data: TURMAS_DETALHADAS.educacaoInfantil },
    { key: "ensinoFundamental", data: TURMAS_DETALHADAS.ensinoFundamental },
  ];

  return (
    <div>
      {/* HEADER DA PÁGINA */}
      <section className="turmas-header-bg">
        {/* Nuvens decorativas */}
        <FloatCloud top="5%" left="-8%" size={1.7} opacity={0.68} speed="48s" delay="0s" variant={3} />
        <FloatCloud top="18%" right="-6%" size={1.3} opacity={0.66} speed="46s" delay="10s" variant={2} />
        <FloatCloud top="30%" left="-5%" size={1.2} opacity={0.64} speed="50s" delay="20s" variant={1} />
        <FloatCloud bottom="25%" left="-7%" size={1.5} opacity={0.67} speed="49s" delay="40s" variant={2} />
        <FloatCloud bottom="15%" right="-5%" size={1.0} opacity={0.63} speed="51s" delay="50s" variant={1} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="10%" left="5%" size={16} delay="0.5s" />
        <FloatStar top="22%" right="7%" size={18} delay="1.5s" />
        <FloatStar top="35%" left="4%" size={14} delay="2.5s" />
        <FloatStar top="50%" right="6%" size={17} delay="3.5s" />
        <FloatStar bottom="30%" left="9%" size={15} delay="4.5s" />
        <FloatStar bottom="20%" right="8%" size={16} delay="5.5s" />
        
        {/* Foguetes */}
        <FloatRocket top="18%" right="11%" size={0.35} angle={-16} dur="8s" delay="2s" />
        <FloatRocket top="55%" left="11%" size={0.4} angle={20} dur="7s" delay="5s" />
        
        <div className="section-container">
          <h2 className="ttl">Nossas <em>Turmas</em></h2>
          <p className="sub">Cada fase do desenvolvimento merece atenção especial</p>
          <div className="bilinguismo-badge">
            <span className="bilinguismo-icon">🌍</span>
            <span className="bilinguismo-text">Programa Bilíngue em todas as turmas</span>
          </div>
        </div>
      </section>

      {/* TURMAS DETALHADAS */}
      {turmas.map((turma, idx) => (
        <section key={turma.key} className={`turma-detail-bg ${idx % 2 === 0 ? 'even' : 'odd'}`}>
          {/* Nuvens decorativas */}
          <FloatCloud top="5%" left="-8%" size={1.7} opacity={0.68} speed="48s" delay={`${idx * 10}s`} variant={3} />
          <FloatCloud top="18%" right="-6%" size={1.3} opacity={0.66} speed="46s" delay={`${idx * 10 + 5}s`} variant={2} />
          <FloatCloud bottom="25%" left="-7%" size={1.5} opacity={0.67} speed="49s" delay={`${idx * 10 + 10}s`} variant={2} />
          <FloatCloud bottom="15%" right="-5%" size={1.0} opacity={0.63} speed="51s" delay={`${idx * 10 + 15}s`} variant={1} />
          
          {/* Estrelas decorativas */}
          <FloatStar top="10%" left="5%" size={16} delay={`${idx * 0.5 + 0.5}s`} />
          <FloatStar top="22%" right="7%" size={18} delay={`${idx * 0.5 + 1.5}s`} />
          <FloatStar bottom="30%" left="9%" size={15} delay={`${idx * 0.5 + 4.5}s`} />
          <FloatStar bottom="20%" right="8%" size={16} delay={`${idx * 0.5 + 5.5}s`} />
          
          {/* Foguetes */}
          <FloatRocket top="18%" right="11%" size={0.35} angle={-16} dur="8s" delay={`${idx * 2 + 2}s`} />
          <FloatRocket top="55%" left="11%" size={0.4} angle={20} dur="7s" delay={`${idx * 2 + 5}s`} />
          
          <div className="section-container">
            <div className="turma-detail-content">
              <div className="turma-detail-header">
                <h3 className="turma-detail-title">{turma.data.titulo}</h3>
                <div className="turma-detail-subtitle">{turma.data.subtitulo}</div>
                {/* FOTO DA TURMA - Adicione as imagens em: src/assets/images/turma-${turma.key}.jpg */}
                <div className="turma-header-photo">
                  <img 
                    src={`/images/turma-${turma.key}.jpg`}
                    alt={turma.data.titulo}
                    className="turma-header-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
              <div className="turma-detail-body">
                <p className="turma-detail-desc">{turma.data.descricao}</p>
                
                <div className="turma-atividades">
                  <h4 className="turma-atividades-title">Atividades Inclusas:</h4>
                  <div className="turma-atividades-grid">
                    {turma.data.atividades.map((atividade, actIdx) => (
                      <div key={actIdx} className="turma-atividade-item">
                        <span className="turma-atividade-icon">{atividade.icon}</span>
                        <span className="turma-atividade-nome">{atividade.nome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA FINAL */}
      <section className="turmas-cta-bg">
        {/* Nuvens decorativas */}
        <FloatCloud top="8%" left="-6%" size={1.6} opacity={0.65} speed="50s" delay="0s" variant={1} />
        <FloatCloud top="25%" right="-5%" size={1.4} opacity={0.63} speed="48s" delay="8s" variant={2} />
        <FloatCloud top="45%" left="-4%" size={1.3} opacity={0.64} speed="52s" delay="16s" variant={3} />
        <FloatCloud bottom="30%" right="-6%" size={1.5} opacity={0.66} speed="49s" delay="24s" variant={1} />
        <FloatCloud bottom="15%" left="-5%" size={1.2} opacity={0.62} speed="51s" delay="32s" variant={2} />
        
        {/* Estrelas decorativas */}
        <FloatStar top="12%" left="8%" size={17} delay="0.5s" />
        <FloatStar top="28%" right="10%" size={16} delay="1.5s" />
        <FloatStar top="50%" left="6%" size={15} delay="2.5s" />
        <FloatStar top="65%" right="8%" size={18} delay="3.5s" />
        <FloatStar bottom="35%" left="12%" size={14} delay="4.5s" />
        <FloatStar bottom="20%" right="9%" size={16} delay="5.5s" />
        <FloatStar bottom="8%" left="7%" size={15} delay="6.5s" />
        
        {/* Foguetes */}
        <FloatRocket top="20%" right="12%" size={0.38} angle={-18} dur="8s" delay="2s" />
        <FloatRocket top="60%" left="13%" size={0.42} angle={22} dur="7s" delay="5s" />
        <FloatRocket bottom="25%" right="11%" size={0.35} angle={-15} dur="9s" delay="8s" />
        
        <div className="section-container">
          <div className="turmas-cta-content">
            <h3 className="turmas-cta-title">Gostaria de conhecer mais sobre nossas turmas?</h3>
            <p className="turmas-cta-text">Entre em contato e agende uma visita!</p>
            <button 
              className="turmas-cta-btn"
              onClick={() => {
                const mensagem = encodeURIComponent("olá, gostaria de agenda uma visita guiada");
                const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${mensagem}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Agende uma Visita
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Turmas;

