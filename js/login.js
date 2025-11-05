document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simulación de acceso
    if (email === "admin@upec.edu.ec" && password === "12345") {
      alert("Bienvenido, administrador 👨‍💼");
      window.location.href = "dashboard/admin.html";
    } 
    else if (email === "usuario@upec.edu.ec" && password === "12345") {
      alert("Bienvenido, usuario 👤");
      window.location.href = "dashboard/usuario.html";
    } 
    else {
      alert("Credenciales incorrectas. Intenta de nuevo.");
    }
  });
});
