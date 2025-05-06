
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {useEffect, useState} from 'react'

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "1rem",
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194, // San Francisco as a fallback
};

const MapView = () => {
    const [center, setCenter] = useState(defaultCenter);

    useEffect(()=> {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=> {
                    setCenter({
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
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
