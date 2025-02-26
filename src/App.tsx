import Footer from "./components/Footer";
//import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import About from './pages/About';
import Agents from './pages/Agents';
//import Services from './pages/Services';
//import Home from './pages/Home';
import Agent from "./pages/Agent";
import HeroSection from "./components/HeroSection";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import UserList from "./components/UserList";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> */}
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:email" element={<Agent />} />
        </Routes>
      </Router>
      <HeroSection/>
      <Analytics/>
      <Cards/>
      <UserList/>
      <Footer />
    </div>
  );
}

export default App;
