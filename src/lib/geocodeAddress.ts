
export const geocodeAddress = async (address: string): Promise<google.maps.LatLngLiteral | null> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
  );
  const data = await response.json();
  if (data.status === "OK") {
    const location = data.results[0].geometry.location;
    return { lat: location.lat, lng: location.lng };
  }
  return null;
};
