const Map = ({ address }) => {
  // Codificar o endereço para URL do Google Maps
  const encodedAddress = encodeURIComponent(address);
  // Usando Google Maps embed sem necessidade de API key
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed&hl=pt-BR`;

  return (
    <div className="map-container">
      <iframe
        src={mapUrl}
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "20px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização Espaço da Criança"
      />
    </div>
  );
};

export default Map;

