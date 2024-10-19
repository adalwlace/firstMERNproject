import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Chip, Stack } from "@mui/material";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://media.gettyimages.com/id/622013488/photo/chinese-water-dragon.jpg?s=612x612&w=0&k=20&c=AXYA9calwRrnu3ouzU57Ub5xYaCxFxWDE7zYNsTKKAg="
        title="green iguana"
      />
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography gutterBottom variant="h5" component="div">
            Macbook M3
          </Typography>

          <Chip label="Apple" color="success" />
          <Typography gutterBottom>Price:$2020</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          asperiores iure animi error iste aspernatur quas? Aperiam culpa id
          suscipit neque maxime, et, incidunt totam amet nostrum praesentium quo
          magnam...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          startIcon={<RemoveRedEyeOutlinedIcon />}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;