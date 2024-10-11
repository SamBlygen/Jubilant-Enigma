import express from 'express';
import Order from '../models/Order.js';
import { getOrders, createOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

// Get all orders
router.get('/', getOrders);

// Create new order
router.post('/', createOrder);

// Update order
router.patch('/:id', updateOrder);

// Delete order
router.delete('/:id', deleteOrder);

export default router;
