import Header from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
