import HeroSection from "./components/HeroSection";
import Analytics from "./components/Analytics";
//import UserList from "./components/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import MainLayout from "./layouts/MainLayout";
import Sailors from "./pages/Sailors";

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
                <Analytics />
              </>
            }
          />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/sailors" element={<Sailors />} /> {/* New Route */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
