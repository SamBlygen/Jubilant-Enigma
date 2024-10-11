import express from 'express';
import Product from '../models/Product.js';
import { deleteProduct, getProducts, getProductById, createProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();


router.get('/', getProducts);


router.get('/:id', getProductById);

router.post('/', createProduct);


router.patch('/:id', updateProduct);


router.delete('/:id', deleteProduct);

export default router;
