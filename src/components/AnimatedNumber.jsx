import useCountUp from "../hooks/useCountUp";

const AnimatedNumber = ({ value, suffix = "", duration = 2000, delay = 0 }) => {
  const [count, ref] = useCountUp(value, duration, true);
  
  return (
    <span ref={ref} style={{display:"inline-block"}}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedNumber;

