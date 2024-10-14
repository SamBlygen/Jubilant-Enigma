// server/routes/productRoutes.js
import express from 'express';
import { fetchAndSaveProducts } from '../controllers/productController.js'; // Import the new function

const router = express.Router();

// Other routes...

// Route to fetch and save products from Pexels
router.get('/fetch-images', fetchAndSaveProducts);

export default router;

