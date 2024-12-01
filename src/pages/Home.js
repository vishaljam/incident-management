import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Container } from "@mui/material";

function Home() {
    const navigate = useNavigate(); // React Router hook for navigation
  
    const handleButtonClick = () => {
      navigate("/incident-image"); // Navigate to the "/next" route
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to the Home Page
            </Typography>
            <Button onClick={handleButtonClick}>Go to Incident Page</Button>
        </Container>
    );
}

export default Home;