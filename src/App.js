import "./App.css";
import Intro from "./components/Intro";
import Navigation from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
         <hr id="home" className="topLine"></hr>
      <Navigation />
      <Intro />
      <div className="topPage">
        <hr id="About" className="hiddenLine"></hr>
        <About />
        <hr id="Skills" className="lineBreak"></hr>
        <Skills />
        <hr id="Projects" className="lineBreak"></hr>
        <Projects />
        <hr id="Contact" className="lineBreak"></hr>
        <Contact />
      </div>
    </div>
  );
}

export default App;
