// animations
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';
// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const ContactUs = () => {
  return (
    <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}> Get in touch</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnim}>
          <Circle>
            <FontAwesomeIcon className="contact-icon" size="2x" icon={faMapMarkerAlt}/>
          </Circle>
          <h2>Artillerivej 73B, København S, 2300</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle>
            <FontAwesomeIcon className="contact-icon" size="2x" icon={faEnvelope}/>
          </Circle>
          <h2>capture@samplemail.dk</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle>
            <FontAwesomeIcon className="contact-icon" size="2x" icon={faPhone}/>
          </Circle>
          <h2>+45 50165178327</h2>
        </Social>
      </Hide>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  background:  black;
  @media (max-width: 1500px) {
    padding: 2rem 10rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex; // this is for the Circle
  align-items: center;
  h2 {
    margin: 1rem;
    color:white;
    font-size: 2.7rem;
    padding: 1rem 0rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background:#23d997;
  display: flex;
  align-items: center;
  justify-content: center;
  .contact-icon {
    color: white;
    width: 1em;
    height: auto;
  }
`;
export default ContactUs;
