import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { useReducer } from 'react';

// register user
export const registerUser = async (req, res) =>{
  const {name, email, password} = req.body;

  try{
const existingUser = await User.findOne({email});
if (existingUser){
  return res.status(400).json({message: 'User alreay exists'})
}

const hashedPassword = await bcrypt.hash(password, 10);
const newUser = new User({ name, email, password: hashedPassword});

await newUser.save();
res.status(201).json({message: 'User registered successfully'});
  }catch(error){
res.status(500).json({message: 'server error'});
  }
};

//Login User
export const loginUser = async (req, res)=>{
  const {email, password} = req.body;

  try{
const user = await User.findOne({email});
if (!user){
  return res.status(400).json({message: 'Invalid credentials'})
}
const token = jwt.sign({id: user._id}, process.env.JWT_LOCKED,{expiresIn: '1hr'})
res.json({token, userId: user._id});
  }catch(error) {
res.status(500).json({message: 'server error'})
  }
};

//updated user
export const updateUser = async (req, res) =>{
  const {userId, name, email, password} = req.body;
  try{
const user = await User.findById(userId)
if (!user){
  return res.status(404).json({message: 'User not found'})
}
if (name )user.name =name;
if (email) user.email =email;
if (password) user.password = await bcrypt.hash(password, 10);

await user.save();
res.json({message: 'User updated successfully', user});

  }catch(error) {
res.status(500).json({message: 'server error'})
  }
};

//Delete user
export const deletedUser = async (req, res)=>{
  const {userId} = req.body;

  try{
const deletedUser = await User.findByIdAndDelete(userId);
if (!deletedUser){
  return res.status(404).json({message: 'user not found'})
}
res.json({message: 'User deleted successfully'})
  }catch(error){
res.status(500).json({message: 'server error'})
  }
};