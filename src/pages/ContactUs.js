// animations
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';
const ContactUs = () => {
  return (
    <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h1>Contact Us</h1>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
`;
export default ContactUs;
