import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaCar } from "react-icons/fa";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import MapPreview from "@/components/MapPreview";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { reverseGeocode } from "@/lib/reverseGeocode";

const libraries: ("places")[] = ["places"];

interface LatLngLiteral {
  lat: number;
  lng: number;
}

export default function RequestRide() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const coords = { lat: latitude, lng: longitude };

        const address = await reverseGeocode(latitude, longitude);
        if (address) {
          setPickup(address);
          setPickupAddress(coords);
        }
      },
      (err) => {
        console.warn("Location access denied or unavailable:", err);
      }
    );
  }, []);

  const { user } = useAuth();
  const navigate = useNavigate();
  const pickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropoffRef = useRef<google.maps.places.Autocomplete | null>(null);

  const [pickupAddress, setPickupAddress] = useState<LatLngLiteral | null>(
    null
  );
  const [dropoffAddress, setDropoffAddress] = useState<LatLngLiteral | null>(
    null
  );
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const onPickupPlaceChanged = () => {
    const place = pickupRef.current?.getPlace();
    if (place && place.geometry && place.geometry.location) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setPickupAddress(location);
      setPickup(place.formatted_address || "");
    }
    console.log("Pickup place changed:", place);
    console.log("Pickup address:", pickupAddress);
  };

  const onDropoffPlaceChanged = () => {
    const place = dropoffRef.current?.getPlace();
    if (place && place.geometry && place.geometry.location) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setDropoffAddress(location);
      setDropoff(place.formatted_address || "");
      console.log("Dropoff place changed:", place);
      console.log("Dropoff address:", dropoffAddress);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "rideRequests"), {
        userId: user.uid,
        pickup,
        dropoff,
        pickupLocation: pickupAddress,
        dropoffLocation: dropoffAddress,
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
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-8">
        <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-center mb-6">
            <FaCar className="text-4xl mx-2" />
            <h2 className="text-3xl font-bold">Request a Ride</h2>
          </div>

          {/* Map Preview */}
          <div className="mb-6">
            <MapPreview pickup={pickupAddress} dropoff={dropoffAddress} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Pickup Location
              </label>
              <Autocomplete
                onLoad={(autocomplete) => {
                  pickupRef.current = autocomplete;
                }}
                onPlaceChanged={onPickupPlaceChanged}
                options={{
                  componentRestrictions: { country: "rw" },
                  types: ["address"],
                }}
              >
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Enter pickup location"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c48c]"
                  required
                />
              </Autocomplete>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Drop-off Location
              </label>
              <Autocomplete
                onLoad={(autocomplete) => {
                  dropoffRef.current = autocomplete;
                }}
                onPlaceChanged={onDropoffPlaceChanged}
                options={{
                  componentRestrictions: { country: "rw" },
                  types: ["address"],
                }}
              >
                <input
                  type="text"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="Enter drop-off location"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c48c]"
                  required
                />
              </Autocomplete>
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
    </LoadScript>
  );
}
