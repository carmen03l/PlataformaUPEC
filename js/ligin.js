// login.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simulación básica (más adelante se puede conectar con base de datos)
    if (email === "admin@upec.edu.ec" && password === "12345") {
      alert("Bienvenido Administrador");
      window.location.href = "dashboard/admin.html";
    } 
    else if (email === "usuario@upec.edu.ec" && password === "12345") {
      alert("Bienvenido Usuario");
      window.location.href = "dashboard/usuario.html";
    } 
    else {
      alert("Credenciales incorrectas. Intenta de nuevo.");
    }
  });
});
