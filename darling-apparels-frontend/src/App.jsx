import Navbar from '../components/Navbar.jsx';
import ShopPage from '../components/ShopPage.jsx';
import RegisterForm from '../components/RegistrationForm.jsx';
import LoginForm from '../components/LoginPage.jsx';
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
