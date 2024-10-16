import React from 'react';

const CartPage = ({ cartItems, clearCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div id="cartPage">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto', borderRadius: '10px' }} />
                <div>
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <button onClick={clearCart}>Clear Cart</button>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
