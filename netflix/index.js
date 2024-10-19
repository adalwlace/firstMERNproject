import express from "express";
//ESmodule
import Movie from "./movie.model.js";
import connectDB from "./connect.db.js";
import mongoose from "mongoose";

//commonjs
// const express = require("express");

const app = express();
//to make app understand json
app.use(express.json());

//connect db
connectDB();
//add movie
app.post("/movie/add", async (req, res) => {
  //extract new movie from req body
  const newMovie = req.body;

  //add movie to db

  try {
    await Movie.create(newMovie);
  } catch (error) {
    console.log(error.message);
  }
  //send res
  return res.status(201).send({ message: "Movie added successfully." });
});

//delete movie by id
app.delete("/movie/delete/:id", async (req, res) => {
  //extract id from req.params
  const movieId = req.params.id;
  //check for mongo id validity
  const isValidMongoId = mongoose.isValidObjectId(movieId);
  //if not valid mongo id, throw error
  if (!isValidMongoId) {
    return res.status(400).send({ message: "invalid mongo id" });
  }
  //find movie using movie id
  const movie = await Movie.findOne({ _id: movieId });

  //if not movie throw error
  if (!movie) {
    return res.status(404).send({ message: "movie doesn't exist" });
  }
  //delete movie
  await Movie.deleteOne({ _id: movieId });
  return res.status(200).send({ message: "movie deleted successfully" });
});

//get all movies
app.get("/movie/list", async (req, res) => {
  const movies = await Movie.find();
  return res.status(200).send({ message: "success", movieList: movies });
});

//edit movie
app.put("/movie/edit/:id", async (req, res) => {
    //extract id from req.params
    const movieId = req.params.id;
    //check for mongo id validity
    const isValidMongoId = mongoose.isValidObjectId(movieId);
    //if not valid mongo id, throw error
    if (!isValidMongoId) {
      return res.status(400).send({ message: "invalid mongo id" });
    }
    //find movie using movie id
    const movie = await Movie.findOne({ _id: movieId });
  
    //if not movie throw error
    if (!movie) {
      return res.status(404).send({ message: "movie doesn't exist" });
    }

    // extract new values from req.body
  const newValues = req.body;

  // edit movie
  await Movie.updateOne(
    { _id: movieId },
    {
      $set: {
        ...newValues,
      },
    }
  );

  // send res
  return res.status(200).send({ message: "Movie is updated successfully." });
});



//network port and server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
