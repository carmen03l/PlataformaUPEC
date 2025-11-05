// --- CAMBIO ENTRE LOGIN Y REGISTRO ---
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const openBtn = document.getElementById('open-register');
const backBtn = document.getElementById('backToLogin');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.style.display = 'none';
  registerSection.style.display = 'flex';
});

backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  registerSection.style.display = 'none';
  loginSection.style.display = 'flex';
});

// --- BOTÓN REGISTRARME ---
registerBtn.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;

  if (nombre && correo && password) {
    alert(`🎉 Bienvenida al foro académico de la UPEC, ${nombre}!`);
    registerSection.style.display = 'none';
    loginSection.style.display = 'flex';
  } else {
    alert('Por favor, completa todos los campos obligatorios.');
  }
});

// --- BOTÓN INICIAR SESIÓN (simulado) ---
loginBtn.addEventListener('click', () => {
  alert('✅ Sesión iniciada correctamente.');
});
