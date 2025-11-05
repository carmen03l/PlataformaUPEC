document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (usuario && pass) {
      localStorage.setItem("usuario", usuario);
      localStorage.setItem("role", role);

      if (role === "admin") {
        window.location.href = "dashboard/admin.html";
      } else {
        window.location.href = "dashboard/usuario.html";
      }
    } else {
      alert("Por favor completa todos los campos");
    }
  });
});
