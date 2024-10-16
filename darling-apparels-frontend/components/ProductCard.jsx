
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () =>{
    addToCart(product);
  }
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
