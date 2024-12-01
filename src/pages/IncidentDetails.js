import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Container, Button } from "@mui/material";

function IncidentDetails() {
  const location = useLocation();
  const { file, location: incidentLocation, selectedItem, subitem } = location.state || {};

  const handleSubmit = () => {
    console.log("File:", file);
    console.log("Location:", incidentLocation);
    console.log("Selected Items:", selectedItem);
    console.log("Selected Subitem:", subitem);

    // Add API submission logic here
    alert("Incident details submitted successfully!");
  };

  return (
    <Container>
      <Typography variant="h4">Incident Details</Typography>
      {file && (
        <Typography>
          Uploaded File: {file.name}
        </Typography>
      )}
      {incidentLocation && (
        <Typography>
          Selected Location: {incidentLocation.address}
        </Typography>
      )}
      {selectedItem && (
        <Typography>
          Selected Items: {selectedItem.name}
        </Typography>
      )}
      {subitem && (
        <Typography>
          Selected Subitem: {subitem.name}
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
}

export default IncidentDetails;
