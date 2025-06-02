import { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

interface MapPreviewProps {
  pickup: google.maps.LatLngLiteral | null;
  dropoff: google.maps.LatLngLiteral | null;
}

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "0.75rem",
};

const defaultCenter = { lat: -1.9441, lng: 30.0619 }; // Kigali, Rwanda

const MapPreview = ({ pickup, dropoff }: MapPreviewProps) => {
  const [currentLocation, setCurrentLocation] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
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
    }
  }, []);

  const mapCenter = pickup || dropoff || currentLocation || defaultCenter;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={13}
      options={{
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      }}
    >
      {currentLocation && (
        <Marker
          position={currentLocation}
          title="Your Location"
        />
      )}
      {pickup && (
        <Marker
          position={pickup}
          title="Pickup Location"
          label="P"
        />
      )}
      {dropoff && (
        <Marker
          position={dropoff}
          title="Drop-off Location"
          label="D"
        />
      )}
    </GoogleMap>
  );
};

export default MapPreview;
