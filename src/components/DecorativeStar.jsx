import { C } from "../data/constants";

const DecorativeStar = ({ size = 20, style, delay = "0s" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    style={{
      animation: `starTwinkle 3s ease-in-out infinite ${delay}`,
      opacity: 0.4,
      ...style
    }}
  >
    <path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
      fill={C.amarelo}
    />
  </svg>
);

export default DecorativeStar;

