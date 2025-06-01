
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapPreviewProps {
  pickup: google.maps.LatLngLiteral | null;
  dropoff: google.maps.LatLngLiteral | null;
}

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "0.75rem",
};

const MapPreview = ({ pickup, dropoff }: MapPreviewProps) => {
  const [currentLocation, setCurrentLocation] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCurrentLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Error getting location:", err);
      }
    );
  }, []);

  const mapCenter = currentLocation || pickup || dropoff || { lat: 37.7749, lng: -122.4194 };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={13}>
        {currentLocation && (
          <Marker position={currentLocation} label="You" />
        )}
        {pickup && <Marker position={pickup} label="P" />}
        {dropoff && <Marker position={dropoff} label="D" />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapPreview;
