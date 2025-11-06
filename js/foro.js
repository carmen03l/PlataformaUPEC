document.addEventListener("DOMContentLoaded", () => {
  const usuarioActivo = localStorage.getItem("usuarioUPEC");
  const comentariosContainer = document.getElementById("comentariosContainer");
  const publicarBtn = document.getElementById("publicarBtn");
  const comentarioTexto = document.getElementById("comentarioTexto");
  const volverBtn = document.getElementById("volverBtn");

  volverBtn.addEventListener("click", () => {
    window.location.href = "inicio.html";
  });

  let comentarios = JSON.parse(localStorage.getItem("foroComentarios")) || [];

  function mostrarComentarios() {
    comentariosContainer.innerHTML = "";

    if (comentarios.length === 0) {
      comentariosContainer.innerHTML = "<p style='text-align:center; color:#777;'>No hay comentarios aún. ¡Sé el primero en participar! 🎓</p>";
      return;
    }

    comentarios.forEach((comentario, index) => {
      const div = document.createElement("div");
      div.classList.add("comentario");

      div.innerHTML = `
        <div class="info-usuario">
          <strong>${comentario.usuario}</strong>
          <span>${comentario.fecha}</span>
        </div>
        <p>${comentario.texto}</p>
        <div class="acciones">
          <button class="likeBtn" data-index="${index}">👍 ${comentario.likes}</button>
          <button class="deleteBtn" data-index="${index}">🗑 Eliminar</button>
        </div>
      `;

      comentariosContainer.appendChild(div);
    });

    document.querySelectorAll(".likeBtn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const i = e.target.getAttribute("data-index");
        comentarios[i].likes++;
        localStorage.setItem("foroComentarios", JSON.stringify(comentarios));
        mostrarComentarios();
      });
    });

    document.querySelectorAll(".deleteBtn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const i = e.target.getAttribute("data-index");
        if (comentarios[i].usuario === usuarioActivo) {
          comentarios.splice(i, 1);
          localStorage.setItem("foroComentarios", JSON.stringify(comentarios));
          mostrarComentarios();
        } else {
          alert("⚠️ Solo puedes eliminar tus propios comentarios.");
        }
      });
    });
  }

  mostrarComentarios();

  publicarBtn.addEventListener("click", () => {
    if (!usuarioActivo) {
      alert("⚠️ Debes iniciar sesión para comentar.");
      return;
    }

    const texto = comentarioTexto.value.trim();
    if (texto === "") {
      alert("Por favor escribe algo antes de publicar.");
      return;
    }

    const nuevoComentario = {
      usuario: usuarioActivo,
      texto,
      fecha: new Date().toLocaleString(),
      likes: 0
    };

    comentarios.unshift(nuevoComentario);
    localStorage.setItem("foroComentarios", JSON.stringify(comentarios));

    comentarioTexto.value = "";
    mostrarComentarios();
  });
});
