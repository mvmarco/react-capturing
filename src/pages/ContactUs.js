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
  @media (max-width: 655px) {
    padding: 2rem 8rem;
  }
  @media (max-width: 583px) {
    padding: 2rem 6rem;
  }
  @media (max-width: 463px) {
    padding: 2rem 3.8rem;
  }
    @media (max-width: 463px) {
    padding: 2rem 3rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1500px) {
    margin-top: 5rem;
    font-size: 100rem;
  }
  @media (max-width: 860px) {
    text-align: center;
    h2 {
          font-size: 3rem;
    }
  }
  @media (max-width: 378px) {
    h2 {
      font-size: 2.5rem
    }
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
  @media (max-width: 860px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 712px) {
    h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 672px) {
    h2 {
      font-size: 1.4rem;
    }
  }
    @media (max-width: 592px) {
    h2 {
      font-size: 1.2rem
    }
  }
      @media (max-width: 374px) {
    h2 {
      font-size: 1rem
    }
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
  @media (max-width: 592px) {
    width: 3.5rem;
    height: 3.5rem;
    .contact-icon {
      color: white;
      width: 0.75em;
      height: auto;
    }
  }  
  @media (max-width: 376px) {
    width: 3.2rem;
    height: 3.2rem;
    .contact-icon {
      color: white;
      width: 0.65em;
      height: auto;
    }
  }
  @media (max-width: 363px) {
    width: 3rem;
    height: 3rem;
    .contact-icon {
      color: white;
      width: 0.55em;
      height: auto;
    }
  }
`;
export default ContactUs;
