import {Typography} from "@mui/material"
import { Button , IconButton, Box } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MapIcon from '@mui/icons-material/Map';


const CustomButton = () => {
  return (
    <Box
    style={{display:"flex", flexDirection:"column", gap:5}}>
      <Typography variant="h3">Button variant</Typography>
      <Button variant="contained">contained</Button>
      <Button variant="text">text</Button>
      <Button variant="outlined">outlined</Button>

      <Typography variant="h3">Button variant</Typography>
      <Button variant="contained" color="success">
        Heading 2
      </Button>
      <Button variant="contained" color="error">
        Heading 5
      </Button>
      <Button variant="contained" color="primary">
        Heading 6
      </Button>
      <Button variant="contained" color="secondary">
        Heading 6
      </Button>
      <Button variant="contained" color="warning">
        Heading 6
      </Button>
      <Button variant="contained" color="info">
        Heading 6
      </Button>

      <Typography variant="h3">Button with icons</Typography>
      <Button startIcon={<EditIcon/>} variant="contained" color="success">
       edit
      </Button>
      <Button endIcon={<DeleteOutlineIcon/>} variant="contained" color="error">
      delete
      </Button>

      <Typography variant="h3">Icon Button</Typography>
      <IconButton color="secondary">
        <MapIcon/>
      </IconButton>
      <Button
      variant="contained" color="success"
      onClick={()=>{
        console.log("clicked");
      }}>
      Add Friend
      </Button>
    </Box>
  );
};

export default CustomButton;
