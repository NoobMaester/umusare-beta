import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import { FaCar } from 'react-icons/fa'

export default function Dashboard() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth) {
    return null; // or some loading state
  }

  const handleRequestRide = () => {
    navigate("/request");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {auth.user?.email}</h1>
        <LogoutButton />
      </header>

      <section className="mb-8">
        <button
          onClick={handleRequestRide}
          className="btn-primary w-full py-3 text-lg"
        >
         <FaCar/> Request a Ride
        </button>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Your Ride Requests</h2>
        <p className="text-gray-500">No rides yet.</p>
        {/* Later, display ride request list from Firebase */}
      </section>
    </div>
  );
}
