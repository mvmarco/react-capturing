// page AboutUs' components:
import AboutSection from '../components/AboutSection';
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'
// fixing scroll with this component
import ScrollTop from "../components/ScrollTop";
const AboutUS = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutUS;