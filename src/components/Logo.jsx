import logoImg from "../assets/images/logo.jpeg";

const Logo = ({ style, size = 1 }) => {
  const w = Math.round(200 * size);
  return (
    <img 
      src={logoImg} 
      alt="Espaço da Criança"
      style={{
        width: w,
        maxWidth: "100%",
        height: "auto",
        objectFit: "contain",
        ...style
      }}
    />
  );
};

export default Logo;

