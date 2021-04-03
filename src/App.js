// import components
import AboutUs from './pages/AboutUs';
import Nav from "./components/Nav";
import ContactUs from "../components/ContactUs";
import OurWork from "../components/OurWork";
// import global style
import GlobalStyle from './components/GlobalStyle';
// router
function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />
      <OurWork/>
      <ContactUs />
    </div>
  );
}

export default App;
