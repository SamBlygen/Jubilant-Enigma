import express from 'express';
import Order from '../models/Order.js';
const router = express.Router();

router.get('/',async (req, res)=>{
  try{
const orders = await Order.find();
res.json(orders);
  }catch(error){
res.status(500).json({message:'Server error'})
  }
});

router.post('/', async(req,res)=>{
 const {user, orderItems, shippingAddress, paymentMethod, shippingPrice, totalPrice } = req.body;

 try{
  const newOrder = new Order({
    user, 
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    totalPrice,
   

  });

  const savedOrder = await newOrder.save();
  


 }catch (error){

 }
})

router.patch ('/:id', (req, res)=>{
  res.send(`Update order ${req.params.id}`);
})

router.delete('/remove', (req,res)=>{
  res.send(`Delete order ${req.params.id}`);
})

export default router;