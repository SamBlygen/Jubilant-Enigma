import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/register', async (req, res)=>{
 const {name, email, password} = req.body;

 try{
const existingUser = await User.findOne({email});
if (existingUser){
  return res.status(400).json({message: 'User exists'})
}

const hashedPassword = await bcrypt.hash(password, 10);

const newUser = new User({
  name,
  email,
  password: hashedPassword,
})

await newUser.save();
res.status(201).json({message: 'User registered successfully'})
 }catch(error){
res.status(500).json({message: 'server error'});
 }
});

router.post('/login',async  (req,res)=>{
  const {email, password} = req.body;

  try{
 const user = await User.findOne({email});

 if (!user){
  return res.status(400).json({message: 'Invalid credentials'})
 }

 const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: '2h'});
 res.json({ token, userId: user._id}) // respond with token and user ID 
}catch (error){
  res.status(500).json({message:'server error'});
}
});

router.patch ('/update', async (req, res)=>{
  res.send('User update');
})

router.delete('/remove', async (req,res)=>{
  res.send('Delete user');
})

export default router;