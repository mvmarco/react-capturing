/* 
  The difference is that globalStyle file's purpose is for only styling things 
  like the HTML, body, *, etc. It's not meant to be reused, only done once.
  However, the Style file is for reusable styles for descriptions, images, etc. 
  that may be imported to multiple components to be reused across the project.
*/

import styled from 'styled-components';
//styled components
export const Layout = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content:space-between;
  padding: 5rem 10rem;
  color: #ffffff;
`

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2{
    font-weight: lighter;
  }
`

export const Image = styled.div`
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