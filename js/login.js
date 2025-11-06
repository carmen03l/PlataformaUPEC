// Esperar a que el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {

  const loginBtn = document.getElementById("loginBtn");

  // Si no existe el botón (por ejemplo si el script carga en otra página), salimos
  if (!loginBtn) return;

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Evita que el formulario se recargue

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación simple
    if (email === "" || password === "") {
      alert("⚠️ Por favor, completa todos los campos.");
      return;
    }

    // Tomar el nombre del correo antes del @ (ej: usuario@upec.edu.ec → usuario)
    const nombre = email.split("@")[0];

    // Guardar nombre de usuario en localStorage para mostrarlo en la página de inicio
    localStorage.setItem("usuarioUPEC", nombre);

    // Simular inicio de sesión exitoso
    alert("✅ Sesión iniciada correctamente.");

    // Redirigir al inicio
    window.location.href = "inicio.html";
  });
});
