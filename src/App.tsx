import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import MainLayout from "./layouts/MainLayout";
import Sailors from "./pages/Sailors";
import Register from "./pages/Register";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import RequestRide from "./pages/RequestRide";

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
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/requestride" element={<RequestRide/>}></Route>
          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
