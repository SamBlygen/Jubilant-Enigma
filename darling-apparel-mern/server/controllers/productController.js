import Product from '../models/Product.js';


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


export const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


export const createProduct = async (req, res) => {
    const { name, description, price, category, stock, images } = req.body; // Ensure 'images' is used consistently
    try {
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            stock,
            images,
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product successfully created', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Server error creating product', error });
    }
};


export const updateProduct = async (req, res) => { // Corrected function name
    const { id } = req.params;
    const { name, description, price, category, stock, images } = req.body; // Ensure 'images' is used consistently

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.stock = stock || product.stock;
        product.images = images || product.images; // Ensure 'images' is used consistently

        await product.save();
        res.json({ message: 'Product updated', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
