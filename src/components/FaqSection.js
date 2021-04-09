// import styled components
import styled from "styled-components";
// styles
import { Layout } from "../styles";
// importing toggle component
import Toggle from "./Toggle";
// import AnimateSharedLayout, detect when our layout changes and if it did it will start an animation
// for instance when we click a question to let it disappear the below question collapse on the higher part. We don't want that
import {AnimateSharedLayout} from "framer-motion"
// import UseScroll component 
import {UseScroll} from './UseScroll';
import {scrollReveal} from '../animation'

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do You Start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, aut?
              </p>
            </div>
        </Toggle>
        <Toggle title="Our Daily Schedule?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, aut?
            </p>
          </div>
        </Toggle>
        <Toggle title="Our Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, aut?
              </p>
            </div>
        </Toggle>
        <Toggle title="Our Products and Services">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, aut?
              </p>
            </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

// styled components
const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
// exporting component
export default FaqSection;
