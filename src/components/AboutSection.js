import home1 from '../img/home1.png'
// import styled components: import styled from 'styled-components';
// import styled components from '../styles'
import {Layout, Description, Image, Hide,} from '../styles';
// import framer motion
import {motion} from 'framer-motion'
import {titleAnim} from '../animation'
const AboutSection = () => {
/*   const titleAnim = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: { duration: 2} },
  }
  const containerAnim = {
    hidden: {x: 100},
    show: {x:0, transition: { duration: 0.75, ease: "easeOut", staggerChildren:0.75 }},
  } 
  
    motion.div and hide are properties that are inherited from AboutUs that "wrap" AboutSection
  */
  return (
    <Layout>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Photographer profile picure, About section" />
      </Image>
    </Layout>
  );
}

//styled components

// exporting component
export default AboutSection;