export default function ProductCard(product){
  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML =`
  "<img src =${product.imageUrl}" alt=${product.name}>
  <h3> ${product.name}</h3>
  <p>Price: ${product.price}</p>
  <button>Add to Cart</button>

  `;
  return card;
}