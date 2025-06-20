import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import { FaCar } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import MapView from "@/components/MapView";

export default function Dashboard() {
  const auth = useAuth();
  const navigate = useNavigate();
  const user = getAuth().currentUser;
  const displayName = user?.displayName;
  const initials = displayName ? displayName.split(' ').filter(name => name).map(name => name[0]).join('').toUpperCase() : "?";

  if (!auth) return null;

  const handleRequestRide = () => {
    navigate("/requestride");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10 border-b border-gray-700 pb-4">
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-[#00df9a] flex items-center justify-center text-xl font-bold text-white mr-4">
              {initials}
            </div>
            <div>
              <h1 className="text-3xl font-bold">Hey, {auth.user?.displayName}</h1>
              <p className="text-sm text-gray-400 font-semibold my-2">Ready to request a ride?</p>
              <p className="text-sm text-gray-400 font-semibold">Where are you heading today?</p>
            </div>
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



        <section className="mb-8">
          <h2 className="text-xl font-semibold my-8">Your Current Location</h2>
          <MapView/>
        </section>
      </div>
    </div>
  );
}
