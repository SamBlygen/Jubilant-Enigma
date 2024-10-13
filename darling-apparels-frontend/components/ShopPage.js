import ProductCard from "./ProductCard";

export default async function ShopPage(){
  const shopSection = document.getElementById('shop-section');
  shopSection.innerHTML ='<h2>Our Collection</h2>';
  try{
const response = await fetch ('http://localhost:5000/api/products')
const products= await response.json();

products.forEach(product =>{
  const productCard = ProductCard(product);
  shopSection.appendChild(productCard);
});
  }catch(error){
console.error('Error fetching products', error);
shopSection.innerHTML ='<p>Error loading products.</p>'
  }
}