
import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (

    <div className="App">
  
      <Navbar />
      <Intro />
      <div className="container">
      <About />
      <hr className= "lineBreak"/>
      <Projects />
      <hr className= "lineBreak"/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
