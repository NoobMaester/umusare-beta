import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

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
      console.error("Error submitting ride request:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-white">Request a Ride</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Drop-off Location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          className="input"
          required
        />
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input"
          required
        />
        <textarea
          placeholder="Special Instructions (Optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="input"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? "Submitting..." : "Submit Ride Request"}
        </button>
      </form>
    </div>
  );
}
