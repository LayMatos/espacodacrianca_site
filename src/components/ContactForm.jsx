import { useState } from "react";
import { C } from "../data/constants";

const ContactForm = ({ whatsappNumber, onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    idade: "",
    periodo: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatar mensagem para WhatsApp
    const mensagem = `*Olá! Gostaria de agendar uma visita ao Espaço da Criança*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Idade da Criança:* ${formData.idade} anos%0A` +
      `*Período de Interesse:* ${formData.periodo}%0A` +
      `*Mensagem:* ${formData.mensagem}`;

    // Abrir WhatsApp com a mensagem formatada
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensagem}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({
      nome: "",
      telefone: "",
      idade: "",
      periodo: "",
      mensagem: ""
    });

    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nome">👤 Nome Completo *</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="telefone">📱 Telefone *</label>
          <div className="input-wrapper">
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              placeholder="(65) 9 9999-9999"
            />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="idade">🎂 Idade da Criança *</label>
          <div className="input-wrapper">
            <input
              type="number"
              id="idade"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              required
              min="0"
              max="12"
              placeholder="Ex: 3"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="periodo">⏰ Período de Interesse *</label>
          <div className="input-wrapper">
            <select
              id="periodo"
              name="periodo"
              value={formData.periodo}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o período</option>
              <option value="Meio Período">🌅 Meio Período</option>
              <option value="Semi-Integral">☀️ Semi-Integral</option>
              <option value="Integral">🌞 Integral</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="mensagem">💬 Mensagem</label>
        <div className="input-wrapper">
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="4"
            placeholder="Conte-nos mais sobre sua necessidade ou deixe uma mensagem..."
          />
        </div>
      </div>

      <button type="submit" className="form-submit-btn">
        <span>📱</span>
        <span>Enviar via WhatsApp</span>
      </button>
    </form>
  );
};

export default ContactForm;

