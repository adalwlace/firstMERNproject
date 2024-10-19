import {Typography} from "@mui/material"
import React from 'react'


const CustomTypography = () => {
  return (
    <div>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography>Body1(Default)</Typography>
        <Typography variant="Body2">Body2</Typography>

    </div>
  )
}

export default CustomTypography;