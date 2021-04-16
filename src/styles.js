/* 
  The difference is that globalStyle file's purpose is for only styling things 
  like the HTML, body, *, etc. It's not meant to be reused, only done once.
  However, the Style file is for reusable styles for descriptions, images, etc. 
  that may be imported to multiple components to be reused across the project.
*/

// import motion so we can use it on the layout and add to it where needed a variants
import { motion } from "framer-motion";

//import styled components
import styled from 'styled-components';

//styled components
export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content:space-between;
  padding: 5rem 10rem;
  color: #ffffff;
  @media (max-width: 1200px){
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2{
    font-weight: lighter;
  }
    @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`

export const Image = styled.div`
  z-index:2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`

export const Hide = styled.div`
  overflow: hidden;
`;