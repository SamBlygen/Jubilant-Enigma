Darling-Apparels
Darling-Apparels is a chic and trendy clothing boutique. The project is built with both a backend and frontend to manage user and product data, authentication, and provide a smooth user experience.

Backend
Express.js: Handles server-side logic and routing.

Mongoose: Defines schemas for users and products.

Cors: Allows cross-origin requests.

Dotenv: Manages environment variables.

Jsonwebtoken: Authenticates users during registration and login.

Bcrypt: Hashes passwords before storing them in MongoDB.

MongoDB: Stores user data and product information.

Routes
Product Routes: Perform CRUD operations.

User Routes: Handle POST requests for registration and login.

Controllers
Contain the functionality and logic for user and product interactions with MongoDB.

Frontend - Uses Vite, React and React-Router-dom
Consists of a component folder with 10 component files.

Uses CSS for dynamic and responsive styling.

Key Components
Background:
Uses an overlay for transparency.
Fades in and out with animations.
Utilizes @Keyframes for background movement.

Carousel:
Built with React Bootstrap Carousel and useState Hook.
Displays a dynamic carousel of items.

CarouselLayout:
Renders child components passed to the layout.
Displays content beneath the register form, login form, and Add to Cart section.

CartPage:
Shows cart items and allows users to clear the cart.
Uses reduce function to calculate total price.

Footer:
Uses React Icons to add social media icons.

LoginForm:
Includes an API POST route connected to the backend api/user/login route.
Manages login functionality.

Navbar:
Uses react-router-dom for navigation between pages.
Includes React Icons for Shop, Register, Login, and Cart.

ProductCard:
Allows users to add products to the cart.

RegisterForm:
Uses useState Hook to collect user details.
Handles form submission via POST route to the backend registration API.

ShopPage:

Displays all products fetched from the API.
Uses useState Hook to manage the product list and map through each product.

App.jsx
Renders all components and manages navigation with Router, Routes, and Route.
Uses useState, useEffect Hooks to handle cart functionality and carousel component.

Things i would want to implement later 
Payment integration for checkout.
Implement product filtering and search functionality.
Integrate user profile management.
