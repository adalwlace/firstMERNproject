import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h3">Welcome to Contact Page</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to DashBoard
      </Button>
    </Box>
  );
};

export default Contact;