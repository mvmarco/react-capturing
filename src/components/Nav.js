// import styled components
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/"> capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/"> 1. About Us </Link>
        </li>
        <li>
          <Link to="/work"> 2. Our Work </Link>
        </li>
        <li>
          <Link to="/contacts"> 3. Contact Us </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

// styles with different name so does not collide with the element
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  z-index: 10;
  top: 0;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.6rem;
    font-family: "Major Mono Display", monospace;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 930px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block; // because by default is gonna be inline, a tag are inline, inline element cannot add padding and margins
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav;