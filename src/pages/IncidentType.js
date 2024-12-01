import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";

function IncidentType() {
  const location = useLocation();
  const navigate = useNavigate();
  const { file, location: incidentLocation } = location.state || {};

  // Sample data for items and subitems
  const items = [
    {
      id: 1,
      name: "Pit & Equipment",
      subitems: [
        { id: "1-1", name: "Pit and Equipment - nbn" },
      ],
    },
    {
      id: 2,
      name: "Graffiti & Vandalism",
      subitems: [
        { id: "2-1", name: "Graffiti - nbn" }
      ],
    },
    {
        id: 3,
        name: "Power",
        subitems: [
          { id: "3-1", name: "Overhead Aerial Cables - nbn" },
        ],
      },
  ];

  const [anchorEl, setAnchorEl] = useState(null); // For main menu
  const [selectedItem, setSelectedItem] = useState(null); // For selected item
  const [subAnchorEl, setSubAnchorEl] = useState(null); // For sub-menu

  // Open main menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close main menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedItem(null); // Reset selected item
  };

  // Open sub-menu for selected item
  const handleItemClick = (event, item) => {
    setSelectedItem(item);
    setAnchorEl(null); // Close the main menu
    setSubAnchorEl(event.currentTarget);
  };

  // Close sub-menu
  const handleSubMenuClose = () => {
    setSubAnchorEl(null);
  };

  // Handle sub-item selection and navigate to the next page
  const handleSubItemClick = (subitem) => {
    console.log("Selected Items:", selectedItem);
    console.log("Selected subitem:", subitem);
    switch (subitem.id) {
      case "1-1":
        navigate("/incident-details1", {
          state: { file, location: incidentLocation, selectedItem, subitem },
        });
        break;
      case "2-1":
        navigate("/incident-details2", {
          state: { file, location: incidentLocation, selectedItem, subitem },
        });
        break;
      case "3-1":
        navigate("/incident-details1", {
          state: { file, location: incidentLocation, selectedItem, subitem },
        });
        break;
      default:
        navigate("/incident-details1", {
            state: { file, location: incidentLocation, selectedItem, subitem },
          });
          break;
    }
  };

  return (
    <Container>
        
      <Typography align="center" variant="h3">Incident Type</Typography>
      {file && <Typography>Selected File: {file.name}</Typography>}
      {incidentLocation && (
        <Typography>Selected Location: {incidentLocation.address}</Typography>
      )}
    
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{ marginTop: "30px" }}
        variant="contained"
        color="primary"
        onClick={handleMenuOpen}
      >
        Select Incident Type
      </Button>

      {/* Main Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {items.map((item) => (
          <MenuItem
            key={item.id}
            onClick={(event) => handleItemClick(event, item)}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>

      {/* Sub-menu for selected item */}
      <Menu
        anchorEl={subAnchorEl}
        open={Boolean(subAnchorEl)}
        onClose={handleSubMenuClose}
      >
        {selectedItem?.subitems.map((subitem) => (
          <MenuItem
            key={subitem.id}
            onClick={() => handleSubItemClick(subitem)}
          >
            {subitem.name}
          </MenuItem>
        ))}
      </Menu>
      </div>
    </Container>
  );

}

export default IncidentType;
