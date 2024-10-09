import express from 'express'
import User from '../models/User.js'
const router = express.Router();

router.post('/register', (req, res)=>{
  res.send('Register user');
});

router.post('/login', (req,res)=>{
  res.send('User login');
})

router.patch ('/update', (req, res)=>{
  res.send('User update');
})

router.delete('/remove', (req,res)=>{
  res.send('Delete user');
})

export default router;