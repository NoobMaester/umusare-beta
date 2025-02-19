import Footer from "./components/Footer";
//import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Agents from './pages/Agents';
import Services from './pages/Services';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agents" element={<Agents />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
