document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value.trim();

    if (usuario === "" || clave === "") {
      alert("⚠️ Por favor completa todos los campos.");
      return;
    }

    // Recuperar usuarios guardados
    const usuarios = JSON.parse(localStorage.getItem("usuariosUPEC")) || [];

    // Buscar si existe
    const usuarioEncontrado = usuarios.find(
      (u) => (u.usuario === usuario || u.email === usuario) && u.password === clave
    );

    if (usuarioEncontrado) {
      // Guardar sesión correctamente
      localStorage.setItem("usuarioActivo", usuarioEncontrado.usuario);

      alert("✅ Sesión iniciada correctamente.");
      window.location.href = "inicio.html";
    } else {
      alert("❌ Usuario o contraseña incorrectos.");
    }
  });
});
