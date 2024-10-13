export default function Navbar(){
  const nav = document.createElement('nav');
  nav.innerHTML =`
  <h1>Darling Apparel</h1>
  <ul>
  <li> <a href = "#shop-section">Shop</li>  
   <li> <a href = "#register-section">Register</li>  
    <li> <a href = "#login-section">Login</li>  
  </ul>`;
  return nav;
}