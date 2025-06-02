
export const reverseGeocode = async (lat: number, lng: number): Promise<string | null> => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
  );
  const data = await res.json();
  if (data.status === "OK") {
    return data.results[0].formatted_address;
  }
  return null;
};
