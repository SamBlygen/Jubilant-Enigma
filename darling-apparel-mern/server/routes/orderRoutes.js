import express from 'express';
import Order from '../models/Order.js';
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Get all orders');
});

router.post('/', (req,res)=>{
  res.send('Create new order');
})

router.patch ('/:id', (req, res)=>{
  res.send(`Update order ${req.params.id}`);
})

router.delete('/remove', (req,res)=>{
  res.send(`Delete order ${req.params.id}`);
})

export default router;