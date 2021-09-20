
import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (

    <div className="App">
  
      <Navbar />
      <Intro />
      <div className="container">
      <About />
    
    </div>
    </div>
  );
}

export default App;
