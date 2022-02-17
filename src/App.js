
import './App.css';
import Intro from './components/Intro';
import Navigation from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Line from './components/Line';

function App() {
  return (

    <div className="App">
      <Navigation />
      <Intro />
      <div className="topPage">
      <About />
      <Line />
      <Skills/>
      <Line/>
      <Projects />
      <Line/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
