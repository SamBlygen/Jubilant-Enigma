export default function LoginForm() {
  const form = document.createElement('form');
  form.id = 'loginForm';

  form.innerHTML = `
  <h2>Login</h2>
  <input type= "email" id="loginEmail" placeholder="Email" required>
  <input type= "password" id="loginPassword" placeholder="Password" required>
  button type="submit">Login</button>

  `;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById('loginPassword').value;

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Login successful');

      } else {
        alert(data.message || 'Login failed')
      }
    } catch (error) {
      alert('Error loggin in: ' + error.message)
    }
  })
  return form;
}