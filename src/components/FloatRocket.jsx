import Rocket from "./Rocket";

const FloatRocket = ({ left, right, top, bottom, size = 1, angle = 0, delay = "0s", dur = "5s" }) => (
  <div style={{
    position: "absolute",
    left: left ? `clamp(0px, ${left}, calc(100% - 120px))` : undefined,
    right: right ? `clamp(0px, ${right}, calc(100% - 120px))` : undefined,
    top, bottom,
    animation: `bob ${dur} ease-in-out infinite ${delay}`,
    pointerEvents: "none",
    zIndex: 1,
    maxWidth: "120px",
    overflow: "hidden"
  }}>
    <Rocket size={size} angle={angle} />
  </div>
);

export default FloatRocket;

