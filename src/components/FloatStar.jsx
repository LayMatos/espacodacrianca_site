import DecorativeStar from "./DecorativeStar";

const FloatStar = ({ left, right, top, bottom, size = 20, delay = "0s" }) => (
  <div style={{
    position: "absolute",
    left, right, top, bottom,
    pointerEvents: "none",
    zIndex: 0
  }}>
    <DecorativeStar size={size} delay={delay} />
  </div>
);

export default FloatStar;

