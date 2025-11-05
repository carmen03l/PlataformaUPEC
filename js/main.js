document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuario");
  const role = localStorage.getItem("role");
  const perfil = document.getElementById("perfilUsuario");
  const nombre = document.getElementById("nombreUsuario");

  if (usuario && perfil) {
    perfil.classList.remove("perfil-oculto");
    nombre.textContent = `${usuario} (${role})`;
  }
});

function cerrarSesion() {
  localStorage.clear();
  window.location.href = "index.html";
}
