import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const CustomTextField = () => {
  return (
<Box sx={{display: "flex",flexDirection: "column", gap:"1rem"}}>
        <Typography variant='h3'>text field variant</Typography>
        <TextField required label="Email" variant='outlined' onChange={(event)=>{
           console.log(event.target.value); 
        }}
        />
        <TextField label="Email" variant='filled'/>
        <TextField label="Email" variant='standard'/>
    </Box>
  );
};

export default CustomTextField;