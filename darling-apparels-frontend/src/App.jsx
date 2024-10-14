import Navbar from '../components/Navbar.js';
import ShopPage from '../components/ShopPage.js';
import RegisterForm from '../components/RegistrationForm.js';
import LoginForm from '../components/LoginPage.js';
import './App.css'

function App() {

  return (
    <>
      <div id='navbar'>
        <Navbar/>
      </div>

      <div id='register-section'>
        <RegisterForm/>
      </div>
     
     <div id='login-section'>
<LoginForm/>
     </div>
     
     <div>
      <ShopPage/>
     </div>
    </>
  )
}

export default App;
