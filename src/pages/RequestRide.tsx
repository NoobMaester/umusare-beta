// pages/RequestRide.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaCar } from "react-icons/fa";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";

export default function RequestRide() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "rideRequests"), {
        userId: user.uid,
        pickup,
        dropoff,
        time: Timestamp.fromDate(new Date(time)),
        notes,
        status: "pending",
        createdAt: Timestamp.now(),
      });
      navigate("/dashboard");
    } catch (err) {
      console.error("Ride request failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-8">
      <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-center mb-6">
          <FaCar className="text-4xl mx-2" />
          <h2 className="text-3xl font-bold">Request a Ride</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Pickup Location
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c48c]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Drop-off Location
            </label>
            <input
              type="text"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Enter drop-off location"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c48c]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Pickup Time
            </label>
            <input
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c48c]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Special Instructions
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Optional notes for your driver"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-[#00c48c]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00df9a] hover:bg-[#00c48c] transition-colors text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Submitting..." : "Submit Ride Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
