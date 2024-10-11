import Product from '../models/Product.js'

export const getProduct = async (req, res)=>{
  try 
  {
const products = await Product.find();
res.json(products)
  }catch {
res.status(500).json({message: 'server error'});
  }
};

//get product by id
export const getProductById = async (req, res)=>{
  const {id} = req.params;

  try{
const product = await Product.findById(id);
if (!product){
  return res.status(404).json({message: 'Product not found'})
}
res.json(product)
  }catch(error){
res.status(500).json({message: 'server error'})
  }
}

//create a new product
export const createProduct = async (req, res)=>{
  const {name, description, price, category, stock, imageUrl}= req.body;
  try{
const newProduct = new Product ({
  name, description, price, category, stock, imageUrl
});

await newProduct.save();
res.status(201).json({message: 'Product successfully created', product: newProduct})
  }catch (error){
res.status(500).json({message:'server error creating product'})
  }
};

//Update an existing product
export const updatedProduct = async (req, res)=>{
  const {id } = req.params;
  const {name, description, price, category, stock, imageUrl} = req.body;

  try{
const product = await Product.findById(id);
if (!product){
  return res.status(404).json({message: 'Product not found'});
}
product.name = name || product.name;
product.description = description || product.description;
product.price = price || product.price;
product.category = category || product.category;
product.stock = stock || product.stock;
product.imageUrl = imageUrl || product.imageUrl;

await product.save();
res.json({message: 'Product updated', product})
  }catch(error){
res.status(500).json({message: 'server error'}); 
  }
};