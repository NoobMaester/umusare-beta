import HeroSection from "./components/HeroSection";
import Analytics from "./components/Analytics";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import MainLayout from "./layouts/MainLayout";

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
                <UserList />
              </>
            }
          />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
