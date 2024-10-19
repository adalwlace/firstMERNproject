import express from "express";
import User from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const controller=express.Router();

//! register user
controller.post('/user/register',async(req,res)=>{
    // extract new user
    const newUser=req.body;

    //?check if user w provided email already exists
    const user=await User.findOne({email:newUser.email});
    //if user throw error
    if(user){
        return res.status(409).send({message:"email already exists"});

    }

    //hash pw before saving
    const plainPassword=newUser.password;
    //saltRound=>adds randomness to generated pw
    const saltRound=10;//1 to 32
    const hashedPassword=await bcrypt.hash(plainPassword,saltRound);
    newUser.password=hashedPassword;

    //save user
    await User.create(newUser);
    //send res
    return res.status(201).send({message:"user registered successfully"});

});

//?login user
controller.post("/user/login",async(req,res)=>{
    //extract login credenials from req body
    const loginCred=req.body;

    //find user using email
    const user=await User.findOne({email:loginCred.email});

    //if not user, throw error
    if(!user){
        return res.status(404).send({message:"invalid credentials"});

    }

    //check for pw match
    const plainPassword=loginCred.password;
    const hashedPassword=user.password;
    const isPasswordMatch=await bcrypt.compare(plainPassword,hashedPassword);

    //if not password match, throw error
    if(!isPasswordMatch){
        return res.status(409).send({message:"invalid credentials"});

    }

    //generate token
    //payload =>token ma rakhine kura/ kasko email bokiraxa , obj huna parxa bcoz it's json token
    const payload={email:user.email};
    const signature="adljajlasjasjlj";
    const token=jwt.sign(payload,signature);

    //hide hashed pw
    user.password=undefined;

    //send res
    return res.status(200).send({message:"login success",accessToken:token,userDetail:user});
    
})

export default controller;