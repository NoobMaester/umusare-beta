
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {useEffect, useState} from 'react'

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "1rem",
};

// const defaultCenter = {
//   lat: 37.7749,
//   lng: -122.4194, // San Francisco as a fallback
// };

const MapView = () => {
    const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)

    useEffect(()=> {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=> {
                    setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error)=> {
                    console.error("Error getting locattion", error);
                }
            )
        }else{
            console.warn("geolocation is not supported by this browser")
        }
    }, [])
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      {position && (<GoogleMap mapContainerStyle={containerStyle} center={position} zoom={14}>
        <Marker position={position} />
      </GoogleMap>)}
    </LoadScript>
  );
};

export default MapView;
