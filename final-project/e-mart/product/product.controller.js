import express from "express";
import Product from "./product.model.js";
import mongoose from "mongoose";

const controller = express.Router();

// add product
controller.post("/product/add", async (req, res) => {
  //extract new product from req body
  const newProduct = req.body;
  //add product
  await Product.create(newProduct);
  //send res
  return res.status(200).send({ message: "product added successfully" });
});

// controller.get("product/detail/:id",async(req,res)=>{
//     return res.status(200).send({message:"deleting..."});
// })

controller.delete("/product/delete/:id", async (req, res) => {
  //extract product id from req.params
  const productId = req.params.id;
  //check for mongo id validity
  const validProductId = mongoose.isValidObjectId(productId);
  //if not valid mongo id throw error
  if (!validProductId) {
    return res.status(400).send({ message: "invalid product id" });
  }
  //find product
  const product = await Product.findOne({ _id: productId });
  //if not product throw error
  if (!product) {
    return res.status(404).send({ message: "product doesn't exist" });
  }
  //delete product
  await Product.deleteOne({ _id: productId });
  //send res
  return res.status(200).send({ message: "product deleted successfully" });
});

controller.put("/product/edit/:id", async (req, res) => {
  //extract product id from req.params
  const productId = req.params.id;
  //check for mongo id validity
  const validProductId = mongoose.isValidObjectId(productId);
  //if not valid mongo id throw error
  if (!validProductId) {
    return res.status(400).send({ message: "invalid product id" });
  }
  //find product
  const product = await Product.findOne({ _id: productId });
  //if not product throw error
  if (!product) {
    return res.status(404).send({ message: "product doesn't exist" });
  }
  //extract new valoiues from req.body
  const newValues = req.body;

  //update values
  await Product.updateOne(
    {
      _id: productId,
    },
    {
      $set: {
        ...newValues,
      },
    }
  );
  
  //send res
  return res.status(200).send({ message: "product updated successfully" });
});

//list all products
router.get("/product/list")

export default controller;
