// import components
import AboutUs from './pages/AboutUs';
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// import global style
import GlobalStyle from './components/GlobalStyle';
// router
import { Switch, Route, useLocation } from "react-router-dom";
// animation
import {AnimatePresence} from "framer-motion"
/* 
  we import Route, to speficy where to render the component inside ot if.
  But it does not give an exact route. If you wrote the path="/"
  and another path="/work" react will render both, because it notices the "/" as first
  match.

  With "switch" the component get rendered as soon as it matches the first url or the first path,
  so if it matches the slash is not going to the other ones (paths or url) anymore. It is
  not going to work or contacts. As soon as it matches the first one, is gonna stop and render
  the component and it is gonna ignore everything else. So you wrap the in the "switch" 
  all the "route".

  We you use "exact" on the slash path, to say: render this specific "/" as the exact path
  and if you don't find it render the others, because now the others are not anymore exactly
  a single /.
*/
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contacts">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
