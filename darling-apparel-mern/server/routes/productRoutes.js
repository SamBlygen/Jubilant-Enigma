import express from 'express';
import Product from '../models/Product.js';
import { getProducts, getProductById, seedData, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);

router.get('/seed', seedData);

router.get('/:id', getProductById);


router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
