// import styled components
import styled from "styled-components";
// styles
import { Layout } from "../styles";
// importing toggle component
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle>
        <div className="question">
          <h4>How Do You Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, aut?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <div className="question">
        <h4>Our Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, aut?
          </p>
        </div>
        <div className="faq-line"></div>
        <div className="question">
          <h4>Our Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, aut?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Our Products and Services</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, aut?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </div>
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
