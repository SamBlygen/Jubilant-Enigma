import express from 'express';
import Order from '../models/Order.js';
import { updatedOrder } from '../controllers/orderController.js';
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
  res.status(201).json(savedOrder); 


 }catch (error){
res.status(400).json({message: 'Error creating Order'})
 }
});

router.patch ('/:id', async (req, res)=>{
  const {id} = req.params;
  try{
const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {new: true})
if (!updatedOrder){
  return res.status(404).json({message: 'order not found'})
}
res.json(updatedOrder);

  }catch(error){
res.status(400).json({message: 'error updating order'})
  }
});

router.delete('/:id',async (req,res)=>{
  const {id} = req.params;
  try{
const deletedOrder = await Order.findByIdAndDelete(id);
if (!deletedOrder){
  return res.status(400).json({message: 'order not found'})
}
res.json({message: 'order deleted successfully'})
  }catch (error){
res.status(500).json({message: 'server error'})
  }
})

router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:id', updatedOrder);
router.delete('/:id', deleteOrder);

export default router;