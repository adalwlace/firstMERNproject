import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

//useSatate =>hooks=> react function
//store such variables which has to be displayed
const Counter = () => {
    // let count=1;
    const [count, setCount]=useState(100);
  return (
    <Box>
        <Typography variant='h3'>Counter</Typography>
        <Typography variant='h3'>{count}</Typography>

        <Button
        variant="contained"
        color="success"
        onClick={()=>{
            let newCount=count+1;
            setCount(newCount);
        }}>
            increase count
        </Button>

        <Button
        variant="contained"
        color="error"
        onClick={()=>{
            let newCount=count-1;
            setCount(newCount);
        }}>
            decrease count
        </Button>
    </Box>
  )
}

export default Counter;    