import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3"> Welcome to DashBoard</Typography>
      <Link to="/contact"> go to contact</Link>
    </Box>
  );
};

export default Dashboard;