import Order from "../models/Order";

//Get all orders
export const getOrders = async (req,res)=>{
  try{
    const orders = await Order.find();
    res.json(orders);
  }catch (error){
    res.status(500).json({message: 'Server error'});
  }
};

//create new order

export const createOrder = async (req, res)=>{
  const {userId, items, total} = req.body;
 
  try{
const newOrder = new Order({userId, items, total});
await newOrder.save();
res.status(201).json({message: 'order created successfully', order: newOrder})
  }catch(error){
res.status(500).json({message: 'Server error'});
  }
};

//Update order
export const updatedOrder = async (req, res)=>{
  const {id} = req.params;
  const {items, total} = req.body;

  try{
const order = await Order.findById(id)
if (!order){
  return res.status(404).json({message:"Order not found"});
}
order.items = items || order.items;
order.total = total || order.total;
await order.save();

res.json({message: 'Order updated successfully',order });

  }catch(error){
res.status(500).json({message : 'server error'})
  }
};

Delete order