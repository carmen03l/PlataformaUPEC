// --- Menú lateral ---
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hide');
});

// --- Menú del usuario ---
const userMenu = document.getElementById('userMenu');
const dropdownMenu = document.getElementById('dropdownMenu');

userMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// --- Mostrar el nombre del usuario desde el login (simulado) ---
document.addEventListener('DOMContentLoaded', () => {
  const userName = localStorage.getItem('usuarioUPEC') || 'Invitado';
  document.getElementById('userName').textContent = userName;
});
