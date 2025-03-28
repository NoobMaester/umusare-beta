import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import MainLayout from "./layouts/MainLayout";
import Sailors from "./pages/Sailors";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
              </>
            }
          />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/sailors" element={<Sailors />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
