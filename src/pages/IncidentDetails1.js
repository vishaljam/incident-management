import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Container, Button, TextField, InputLabel, Select, MenuItem } from "@mui/material";

function IncidentDetails() {
  const location = useLocation();
  const { file, location: incidentLocation, selectedItem, subitem } = location.state || {};
  const [damageDescription, setDamageDescription] = useState("");
  const [errors, setErrors] = useState({
    damageDescription: false,
    outcomeSeeking: false,
    healthAndSafetyConcern: false,
  });
  const [damageCauser, setDamageCauser] = useState("");
  const [outcomeSeeking, setOutcomeSeeking] = useState("");
  const [healthAndSafetyConcern, setHealthAndSafetyConcern] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const handleHealthAndSafetyConcernChange = (event) => {
    setHealthAndSafetyConcern(event.target.value);
  };
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    if (event.target.value.length > 500) {
      alert("Description cannot be longer than 500 characters.");
      return;
    }
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    console.log("File:", file);
    console.log("Location:", incidentLocation);
    console.log("Selected Items:", selectedItem);
    console.log("Selected Subitem:", subitem);

    if (!damageDescription.trim()) {
        setErrors({...errors, damageDescription: true});
      } else if (!damageCauser.trim()) {
        setErrors({...errors, damageDescription: false, damageCauser: true});
      } else if (!outcomeSeeking.trim()) {
        setErrors({...errors, damageDescription: false, damageCauser: false, outcomeSeeking: true});
      } else {
        setErrors({
          damageDescription: false,
          damageCauser: false,
          outcomeSeeking: false
        });
        alert("Incident details submitted successfully!");
      }
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

      <Typography>Add any supporting details below</Typography>
      <Typography>Describe the damage:</Typography>
      <TextField label="Describe the damage" variant="outlined" fullWidth value={damageDescription} onChange={(e) => setDamageDescription(e.target.value)} error={errors.damageDescription} helperText={errors.damageDescription ? "This field is required." : ""}/>
      <Typography>Who caused the damage? (if known)</Typography>
      <TextField label="Who caused the damage? (if known)" variant="outlined" fullWidth value={damageCauser} onChange={(e) => setDamageCauser(e.target.value)}/>
      <Typography>Outcome seeking (definition of resolved)</Typography>
      <TextField label="Outcome seeking (definition of resolved)" variant="outlined" fullWidth value={outcomeSeeking} onChange={(e) => setOutcomeSeeking(e.target.value)} error={errors.outcomeSeeking} helperText={errors.outcomeSeeking ? "This field is required." : ""}/>
      <Typography>Do you consider this damage as a Health & Safety concern?</Typography>
      <Select label="Do you consider this damage as a Health & Safety concern?" value={healthAndSafetyConcern} onChange={handleHealthAndSafetyConcernChange}>
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </Select>
      <Typography>Do you wish to be contacted? (nbn may contact for Health and Safety or more information).</Typography>
      <Select label="Do you wish to be contacted? (nbn may contact for Health and Safety or more information)." value={contact} onChange={handleContactChange}>
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </Select>
      <Typography>Add a description</Typography>
      <TextField label="Add a description" variant="outlined" multiline fullWidth value={description} onChange={(e) => setDescription(e.target.value)} helperText={`${description.length}/500`}/>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
}

export default IncidentDetails;
