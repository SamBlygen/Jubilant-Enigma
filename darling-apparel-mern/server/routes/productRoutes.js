import express from 'express';
import Product from '../models/Product.js'
import { deleteProduct, getProductById } from '../controllers/productController.js';
const router = express.Router();

//Get all products
router.get('/', async  (req,res)=>{
  try{
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error){
    res.status(500).json({message: 'Server error', error})
  }
});


//Create a new product
router.post('/', async (req, res)=>{
  const {name, price, description, category, stock, images} = req. body;
  try{
const newProduct = new Product({
  name, price, description, category, stock, images,
});
const savedProduct = await newProduct.save();
res.status(201).json(savedProduct);
  }catch(error){
res.status(400).json({message: 'Error creating product', error});
  }
});

router.patch('/', async (req, res)=>{
 const {id} = req.params;
 const updates = req.body;

 try{
const updatedProduct = await Product.findByIdAndUpdate(id, updates,{
  new: true,
});

if (!updatedProduct){
  return res.status(404).json({message: 'Product not found'});
}
res.status(200).json(updatedProduct);
 }catch(error){
res.status(400).json({message: 'Error update'})
 }
})

router.delete('/',async (req,res)=>{
const {id} = req.params;

try{
const deletedProduct = await Product.findByIdAndDelete(id);

if (!deletedProduct){
  return res.status(404).json({message: 'Product not found'});
}
res.status(200).json({message: 'Product deleted', deletedProduct});
}catch (error){
res.status(500).json({message: 'Error deleting product', error});
}
})

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/'. createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;