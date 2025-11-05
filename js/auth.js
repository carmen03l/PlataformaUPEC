function register() {
  const users = JSON.parse(localStorage.getItem('usuarios')) || [];
  const newUser = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    role: document.getElementById('email').value.includes('@admin.upec.edu.ec') ? 'admin' : 'usuario'
  };
  users.push(newUser);
  localStorage.setItem('usuarios', JSON.stringify(users));
  alert('Registro exitoso');
  window.location.href = 'login.html';
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const users = JSON.parse(localStorage.getItem('usuarios')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    localStorage.setItem('usuarioActivo', JSON.stringify(user));
    if (user.role === 'admin') {
      window.location.href = 'dashboard/admin.html';
    } else {
      window.location.href = 'dashboard/usuario.html';
    }
  } else {
    alert('Credenciales incorrectas');
  }
}
