// --- CAMBIO ENTRE LOGIN Y REGISTRO ---
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const openBtn = document.getElementById('open-register');
const backBtn = document.getElementById('backToLogin');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

// --- ABRIR REGISTRO ---
openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.style.display = 'none';
  registerSection.style.display = 'flex';
});

// --- VOLVER AL LOGIN ---
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

// --- BOTÓN INICIAR SESIÓN ---
loginBtn.addEventListener('click', () => {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // En esta simulación se permite acceso sin validar usuario real
  if (email !== "" && password !== "") {
    alert("✅ Sesión iniciada correctamente.");
    // Guarda el usuario en localStorage para mantener sesión
    localStorage.setItem("usuarioUPEC", email);
    // Redirige al inicio
    window.location.href = "inicio.html";
  } else {
    alert("Por favor ingresa tu correo y contraseña.");
  }
});
