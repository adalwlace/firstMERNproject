import { Box, Button } from "@mui/material";
import React from "react";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
      alignItems: "center",}}>
      <Header />
      <Button
        sx={{ marginTop: "7rem" }}
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("/add-product");
        }}
      >
        Add Product
      </Button>

      <Box
        sx={{
          margin: "5rem 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>
    </Box>
  );
};

export default Home;