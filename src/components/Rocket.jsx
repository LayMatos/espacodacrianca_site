import rocketImg from "../assets/images/foguete.png";

const Rocket = ({ style, size = 1, angle = 0 }) => {
  const w = Math.round(120 * size);
  const h = Math.round(180 * size);
  return (
    <img 
      src={rocketImg} 
      alt="Foguete"
      style={{
        width: w,
        height: h,
        maxWidth: "100%",
        objectFit: "contain",
        transform: `rotate(${angle}deg)`,
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
        ...style
      }}
    />
  );
};

export default Rocket;

