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
    const { name, description, price, category, stock, images } = req.body; 
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
    let productList = [
        {
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
            name: "Beautiful",
            price: 69,
            description: "Beautiful and elegant.",
            category: "Accessories",
            stock: 15,
            images: [
                "https://img.staticdj.com/7ced44cefceb6400747ea2fb3cbd4873_1080x.jpeg"
            ],
            createdAt: new Date()
        },
        {
            name: "Loragal",
            price: 50,
            description: "Brown Baddie mini.",
            category: "Dress",
            stock: 15,
            images: [
                "https://img.staticdj.com/b7787e50bab9be74abcfca3ab21937fb_750x.jpeg"
            ],
            createdAt: new Date()
        },
        {
            name: "Summer Breeze",
            price: 35,
            description: "Light and airy summer dress.",
            category: "Dress",
            stock: 20,
            images: [
                "https://www.rosewe.com/images/202212/source_img/310867_P_1670560339255.jpg"
            ],
            createdAt: new Date()
        },
        {
            name: "Classic White Tee",
            price: 25,
            description: "A must-have basic tee.",
            category: "Tops",
            stock: 50,
            images: [
                "https://example.com/classic-white-tee.jpg"
            ],
            createdAt: new Date()
        },
        {
            name: "Barely Denim",
            price: 70,
            description: "Stylish denim jacket for all seasons.",
            category: "Outerwear",
            stock: 10,
            images: [
                "https://img.staticdj.com/40a05843008cabefab40e1ed94598257_750x.jpeg"
            ],
            createdAt: new Date()
        },
        {
            name: "Smile",
            price: 40,
            description: "Comfortable and stylish sandals.",
            category: "Footwear",
            stock: 25,
            images: [
                "https://img.kwcdn.com/thumbnail/s/dc0a2ed4a985765bf48f6ca1e418e735_211aaa66a468.jpeg?imageView2/2/w/800/q/70/format/webp"
            ],
            createdAt: new Date()
        }
    
    ];

    try {
       
        for (let item of productList) {
            const newProduct = new Product({
                name: item.name,
                description: item.description,
                price: item.price,
                category: item.category,
                stock: item.stock,
                images: item.images,
                createdAt: item.createdAt
            });

            await newProduct.save(); 
        }
        res.status(201).json({ message: 'Products successfully added' });
    } catch (error) {
        res.status(500).json({ message: 'Server error adding products', error });
    }
};


export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, stock, images } = req.body;

  
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



