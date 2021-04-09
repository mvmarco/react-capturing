// import useAnimation
import { useAnimation } from "framer-motion";
// import react-intersection-observer
import { useInView } from "react-intersection-observer";

export const UseScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
}