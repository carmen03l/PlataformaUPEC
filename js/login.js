document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la página

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Verificar que los campos no estén vacíos
    if (email === "" || password === "") {
      alert("⚠️ Por favor, completa todos los campos.");
      return;
    }

    // Buscar el usuario en el localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuariosUPEC")) || [];
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (usuarioEncontrado) {
      // Guardar usuario activo
      localStorage.setItem("usuarioActivo", usuarioEncontrado.nombre);
      alert("✅ Sesión iniciada correctamente.");
      window.location.href = "inicio.html";
    } else {
      alert("❌ Correo o contraseña incorrectos.");
    }
  });
});
