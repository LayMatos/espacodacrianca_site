const Cloud = ({ 
  src, 
  style, 
  size = 1, 
  opacity = 0.6, 
  speed = "20s", 
  delay = "0s",
  variant = 1 
}) => {
  const w = Math.round(200 * size);
  const h = Math.round(120 * size);
  
  if (src) {
    return (
      <img 
        src={src} 
        alt="Nuvem"
        style={{
          width: w,
          height: h,
          maxWidth: "100%",
          objectFit: "contain",
          opacity,
          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))",
          animation: `cloudDrift ${speed} ease-in-out infinite ${delay}`,
          ...style
        }}
      />
    );
  }
  
  // Nuvens realistas com CSS puro usando divs com gradientes e sombras
  const cloudStyles = {
    position: 'relative',
    width: `${w}px`,
    height: `${h}px`,
    opacity: opacity,
    animation: `cloudDrift ${speed} ease-in-out infinite ${delay}`,
    filter: 'blur(0.5px)',
    ...style
  };

  // Diferentes variantes de nuvens realistas
  const cloudVariants = {
    1: (
      <div style={cloudStyles} className="realistic-cloud cloud-variant-1">
        <div className="cloud-part" style={{top: '20%', left: '10%', width: '35%', height: '30%'}}></div>
        <div className="cloud-part" style={{top: '15%', left: '30%', width: '40%', height: '35%'}}></div>
        <div className="cloud-part" style={{top: '25%', left: '55%', width: '35%', height: '30%'}}></div>
        <div className="cloud-part" style={{top: '35%', left: '20%', width: '50%', height: '40%'}}></div>
        <div className="cloud-part" style={{top: '50%', left: '5%', width: '30%', height: '25%'}}></div>
        <div className="cloud-part" style={{top: '55%', left: '60%', width: '35%', height: '30%'}}></div>
      </div>
    ),
    2: (
      <div style={cloudStyles} className="realistic-cloud cloud-variant-2">
        <div className="cloud-part" style={{top: '10%', left: '5%', width: '45%', height: '40%'}}></div>
        <div className="cloud-part" style={{top: '20%', left: '40%', width: '50%', height: '45%'}}></div>
        <div className="cloud-part" style={{top: '15%', left: '75%', width: '25%', height: '30%'}}></div>
        <div className="cloud-part" style={{top: '45%', left: '15%', width: '60%', height: '50%'}}></div>
        <div className="cloud-part" style={{top: '60%', left: '50%', width: '40%', height: '35%'}}></div>
        <div className="cloud-part" style={{top: '70%', left: '10%', width: '30%', height: '25%'}}></div>
      </div>
    ),
    3: (
      <div style={cloudStyles} className="realistic-cloud cloud-variant-3">
        <div className="cloud-part" style={{top: '5%', left: '0%', width: '30%', height: '35%'}}></div>
        <div className="cloud-part" style={{top: '10%', left: '25%', width: '50%', height: '50%'}}></div>
        <div className="cloud-part" style={{top: '8%', left: '65%', width: '35%', height: '40%'}}></div>
        <div className="cloud-part" style={{top: '40%', left: '10%', width: '55%', height: '55%'}}></div>
        <div className="cloud-part" style={{top: '50%', left: '55%', width: '40%', height: '45%'}}></div>
        <div className="cloud-part" style={{top: '70%', left: '20%', width: '50%', height: '30%'}}></div>
        <div className="cloud-part" style={{top: '75%', left: '60%', width: '30%', height: '20%'}}></div>
      </div>
    )
  };

  return cloudVariants[variant] || cloudVariants[1];
};

export default Cloud;

