import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Analytics from "./components/Analytics";
import UserList from "./components/UserList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <HeroSection />
          <Analytics />
          <Routes>
            <Route path="/users/:id" element={<UserDetail key={window.location.pathname} />} />
          </Routes>
          <UserList />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
