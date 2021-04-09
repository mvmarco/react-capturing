import { motion } from "framer-motion";
import { useState } from "react";
/* 
  children is everything inside the 
  <Toggle>      </Toggle>
  component in Faq section

  so basically we set the state to false initially
  by clicking the children, the state toggle gets
  updated to true. When it is true we show the children
  when it is false we do not show anything


  the motion.div is necessary to work with AnimateSharedLayout
  as well as to motion.h4. Also we need layout.
  "layout" is a prop of the AnimateSharedLayout component. 
  You need to add it to any element that you want to animate. 
  If the layout of one element with the "layout" prop changes, 
  it will inform the other layout elements and they all animate accordingly. 
  I didn't add it to the faq-line element. If you do, you'll see that it will animate too, 
  because it knows about the two other layout elements and adjust accordingly. 
  If you don't add it, that line won't animate, and just make a jerky jump, rather 
  than a smooth downward animation. I did it at the end.
*/
const Toggle = ({ children, title }) => {

  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;