export default function RegisterForm(){
  const form = document.createElement('form');
  form.id = 'registerForm';

  form.innerHTML =`
        <h2>Create an Account</h2>
        <input type="text" id="registerName" placeholder="Name" required>
        <input type="email" id="registerEmail" placeholder="Email" required>
        <input type="password" id="registerPassword" placeholder="Password" required>
        <button type="submit">Register</button>
    `;

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

try{
  const response = await fetch('http://localhost:5000/api/users/register',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, email, password}),
  });
  const data = await response.json();
  alert(data.message || 'Registration failed');

}catch(error) {
alert('Error registering:' + error.message)
}

  })
  return form;
}