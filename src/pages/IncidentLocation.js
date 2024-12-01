import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import { Button, Typography, Container } from "@mui/material";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };
  const center = { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco
  

function IncidentLocation() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchBox, setSearchBox] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    

    // Retrieve the file from the state
    const { file } = location.state || {};
    const handleLoad = (autocomplete) => {
        setSearchBox(autocomplete);
      };

      const handlePlaceChanged = () => {
        if (searchBox) {
          const place = searchBox.getPlace();
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            address: place.formatted_address,
          };
          setSelectedLocation(location);
        }
      };

      const handleNext = () => {
        if (!selectedLocation) {
          alert("Please select a location.");
          return;
        }
        navigate("/incident-type", { state: { file, location: selectedLocation } });
      };

      return (
        <Container>
          <Typography variant="h4">Select Incident Location</Typography>
          {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" libraries={["places"]}> */}
          <LoadScript googleMapsApiKey="AIzaSyAevbXxc5VK_SKUGgGFcGcd-0L9vGKO5uU" libraries={["places"]}>

            <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
              <input
                type="text"
                placeholder="Search location"
                style={{ width: "100%", padding: "10px" }}
              />
            </Autocomplete>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            />
          </LoadScript>
          <Button variant="contained" onClick={handleNext} disabled={!selectedLocation}>
            Next
          </Button>
        </Container>
      );

}

export default IncidentLocation;