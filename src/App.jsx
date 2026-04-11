import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galleria" element={<Gallery />} />
          <Route path="/istruzioni-ingresso" element={<Instructions />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
