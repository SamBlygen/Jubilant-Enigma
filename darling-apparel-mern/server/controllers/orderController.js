import Order from '../models/Order.js';

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new order
export const createOrder = async (req, res) => {
  const { user, orderItems, shippingAddress, paymentMethod, shippingPrice, totalPrice } = req.body;
  try {
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
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({ message: 'Error creating Order' });
  }
};

// Update order
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    Object.assign(order, req.body); // Update order with provided body
    await order.save();
    res.json({ message: 'Order updated successfully', order });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};
