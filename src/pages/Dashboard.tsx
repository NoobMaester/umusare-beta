import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import { FaCar } from "react-icons/fa";

export default function Dashboard() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth) return null;

  const handleRequestRide = () => {
    navigate("/request");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10 border-b border-gray-700 pb-4">
          <div>
            <h1 className="text-3xl font-bold">Hey, {auth.user?.email}</h1>
            <p className="text-sm text-gray-400">Ready to request a ride?</p>
          </div>
          <LogoutButton />
        </header>

        {/* Request a Ride */}
        <section className="mb-10">
          <button
            onClick={handleRequestRide}
            className="flex items-center justify-center gap-2 w-full bg-[#00df9a] hover:bg-black transition-colors text-white font-semibold text-lg py-3 rounded-xl shadow-lg"
          >
            <FaCar className="text-xl" />
            Request a Ride
          </button>
        </section>

        {/* Ride Request Section */}
        <section className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Ride Requests</h2>
          <p className="text-gray-400">No rides yet.</p>
        </section>
      </div>
    </div>
  );
}
