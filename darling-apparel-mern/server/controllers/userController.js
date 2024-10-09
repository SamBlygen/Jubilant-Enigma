import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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