import Cloud from "./Cloud";

const FloatCloud = ({ 
  left, right, top, bottom, 
  size = 1, 
  opacity = 0.4, 
  speed = "25s", 
  delay = "0s",
  src,
  variant = 1
}) => (
  <div style={{
    position: "absolute",
    left: left ? `clamp(-200px, ${left}, calc(100% + 200px))` : undefined,
    right: right ? `clamp(-200px, ${right}, calc(100% + 200px))` : undefined,
    top, bottom,
    pointerEvents: "none",
    zIndex: 0,
    maxWidth: "300px",
    overflow: "visible"
  }}>
    <Cloud src={src} size={size} opacity={opacity} speed={speed} delay={delay} variant={variant} />
  </div>
);

export default FloatCloud;

