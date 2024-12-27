import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Contact from "./components/Skills/Works/Contact/Contact";
import Works from "./components/Skills/Works/works";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
