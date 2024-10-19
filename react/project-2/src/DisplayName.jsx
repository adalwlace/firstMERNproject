import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const DisplayName = () => {
    const [UserName,setUserName]=useState("Shrey")
  return (
    <Box>
        <Typography variant='h3'>Display ur name</Typography>

        <Box sx={{height:60}}>
        <Typography variant='h4'>{UserName}</Typography>

        </Box>


        <TextField
        label="NAME"
        onChange={(event)=>{
            setUserName(event.target.value);
        }}
        />


    </Box>
  )
}

export default DisplayName;