import mongoose from 'mongoose';
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

    // Validate if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

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
export const seedData = async (req, res) => {
    // Ensure 'images' is used consistently
    //loop overr the productList

    let productList = [
       
        {
            _id: mongoose.Types.ObjectId('670e91b7b57f63dfbd696090'),
            name: "Shoes",
            price: 89,
            description: "Stylish and comfortable shoes.",
            category: "Footwear",
            stock: 50,
            images: [
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/92ffc42c863b4d3b85a04a517d00e765_9366/Gazelle_Bold_Shoes_Pink_IE0420_01_standard.jpg"
            ],
            createdAt: new Date()
        },
        {
            _id: mongoose.Types.ObjectId('670e91b7b57f63dfbd696091'),
            name: "You Boss",
            price: 75,
            description: "Stylish and trendy.",
            category: "Fashion",
            stock: 30,
            images: [
                "https://cdn.shopify.com/s/files/1/0293/9277/files/08-23-23Studio2_KS_R_16-02-52_42_CAP10032_Mustard_18740_SG.jpg?v=1693353380"
            ],
            createdAt: new Date()
        },
        {
            _id: mongoose.Types.ObjectId('670e91b7b57f63dfbd696092'),
            name: "Fashion",
            price: 86,
            description: "Latest fashion trends.",
            category: "Clothing",
            stock: 20,
            images: [
                "https://cdn.shopify.com/s/files/1/0293/9277/products/CallItEvenWideLegDressPants-White_MER_2.jpg?v=1673375837"
            ],
            createdAt: new Date()
        },
        {
            _id: mongoose.Types.ObjectId('670e91b7b57f63dfbd696093'),
            name: "Beautiful",
            price: 69,
            description: "Beautiful and elegant.",
            category: "Accessories",
            stock: 15,
            images: [
                "https://img.staticdj.com/7ced44cefceb6400747ea2fb3cbd4873_1080x.jpeg"
            ],
            createdAt: new Date()
        }
    ];


    for (item of  productList){

    
        const newProduct = new Product({
            name:item.name,
            description,
            price,
            category,
            stock,
            images,
        });

        await newProduct.save();
 
    res.status(201).json({ message: 'Product successfully created', product: newProduct });
}
};


export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, stock, images } = req.body;

    // Validate ObjectId before proceeding
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

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
        product.images = images || product.images;

        await product.save();
        res.json({ message: 'Product updated', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

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



