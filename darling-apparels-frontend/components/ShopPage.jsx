import React, {useState, useEffect} from 'react';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');  // Fetch products from backend API
        const data = await response.json();
        setProducts(data);  // Set product data in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className ="shop-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={product.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;