import React, { useState } from "react";
import { Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function IncidentImage() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
        //setSelectedFile(event.target.files[0]);
        const file = event.target.files[0];
        if (file) {
            // Check if the file is an image
            if (file.type.startsWith("image/")) {
                setSelectedFile(file);
            } else {
                alert("Please select an image file (e.g., .jpg, .png, .gif).");
                event.target.value = null; // Clear invalid selection
            }
        } else {
            setSelectedFile(null);
        }
    };

    // Handle file upload (you can replace this with your API call)
  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select an image file first.");
      return;
    }

    // Simulate a file upload
    console.log("Selected file:", selectedFile);

    // Clear the selected file after "upload"
    //setSelectedFile(null);
    //alert("File uploaded successfully!");
    navigate("/incident-location", { state: { file: selectedFile } });
  };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Please upload the image of the incident
            </Typography>
            <input
                type="file"
                onChange={handleFileChange}
                style={{ display: "block", marginBottom: "20px" }}
            />
            <Button variant="contained" color="primary" onClick={handleUpload} disabled={!selectedFile}>Next</Button>
            {selectedFile && (
                <Typography variant="body1" style={{ marginTop: "20px" }}>
                    Selected file: {selectedFile.name}
                </Typography>
            )}
        </Container>
    );
}

export default IncidentImage;
