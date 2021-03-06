// import styled components
import styled from "styled-components";
// images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Link from react dom, when you click image you go to another page with the actual movie
import { Link } from "react-router-dom";
// animations
import {motion} from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { UseScroll } from "../components/UseScroll";
// fixing scroll with this component
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}> 
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <img variants={photoAnim} src={athlete} alt="athlete movie" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img style={{objectPosition: "100% 5%"}} src={theracer} alt="racer movie" />
        </Link>
      </Movie>
      <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
        <h2>The Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
         <Link to="/work/good-times">
          <img style={{objectPosition: "100% 55%"}} src={goodtimes} alt="good times movie" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
}
// styled component
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
   @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: #ffffff;
  }
  `;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%; // so does not cover the nav
  width: 100%;
  height: 100vh;
  background: #b4b4b4;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #424546;
`;
const Frame3 = styled(Frame1)`
  background: #b4b4b4;
`;
const Frame4 = styled(Frame1)`
  background: #424546;
`;
export default OurWork;