import express from 'express'
import User from '../models/User.js'
const router = express.Router();

router.post('/register', async (req, res)=>{
 const {name, email, password} = req.body;

 try{
const existingUser = await User.findOne({email});
if (existingUser){
  return res.status(400).json({message: 'User exists'})
}

const hashedPassword = await bcrypt.hash(password, 10)
 }catch{

 }
});

router.post('/login',async  (req,res)=>{
  res.send('User login');
})

router.patch ('/update', async (req, res)=>{
  res.send('User update');
})

router.delete('/remove', async (req,res)=>{
  res.send('Delete user');
})

export default router;