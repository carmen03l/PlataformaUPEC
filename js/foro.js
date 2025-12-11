document.addEventListener("DOMContentLoaded", () => {

  const usuarioActivo = localStorage.getItem("usuarioUPEC") || "Invitado";
  const rolActivo = localStorage.getItem("rolUPEC") || "Estudiante";

  const comentariosContainer = document.getElementById("comentariosContainer");
  const publicarBtn = document.getElementById("publicarBtn");
  const comentarioTexto = document.getElementById("comentarioTexto");
  const imagenComentario = document.getElementById("imagenComentario");
  const volverBtn = document.getElementById("volverBtn");

  volverBtn.addEventListener("click", () => {
    window.location.href = "inicio.html";
  });

  let comentarios = JSON.parse(localStorage.getItem("foroComentarios")) || [];

  /* ======================================================================
     SI NO EXISTEN COMENTARIOS, GENERA EJEMPLOS AUTOMÁTICAMENTE
  ====================================================================== */
  if (comentarios.length === 0) {
    comentarios = [
      {
        usuario: "Ana Robles",
        rol: "Estudiante",
        texto: "La evolución de las metodologías de software permitió pasar de Waterfall a Agile por la necesidad de mejorar iteraciones y retroalimentación.",
        fecha: "📅 12/02/2025",
        likes: 10,
        dislikes: 1,
        imagen: "",
        respuestas: []
      },
      {
        usuario: "Carlos Viteri",
        rol: "Estudiante",
        texto: "IaaS, PaaS y SaaS representan modelos claves de computación en la nube, siendo SaaS el más usado por estudiantes.",
        fecha: "📅 25/11/2025",
        likes: 6,
        dislikes: 0,
        imagen: "",
        respuestas: []
      },
      {
        usuario: "Daniela Almeida",
        rol: "Estudiante",
        texto: "Scrum y Kanban son metodologías ágiles extremadamente útiles para mejorar la calidad final del producto.",
        fecha: "📅 12/11/2025",
        likes: 15,
        dislikes: 0,
        imagen: "",
        respuestas: []
      }
    ];

    localStorage.setItem("foroComentarios", JSON.stringify(comentarios));
  }

  /* ======================================================================
     FUNCIÓN PRINCIPAL PARA MOSTRAR COMENTARIOS
  ====================================================================== */
  function mostrarComentarios() {
    comentariosContainer.innerHTML = "";

    comentarios.forEach((c, i) => {
      const div = document.createElement("div");
      div.classList.add("comentario");

      div.innerHTML = `
        <div class="cabecera">
          <div>
            <span class="usuario">${c.usuario}</span>
            <span class="rol">${c.rol}</span>
          </div>
          <span class="fecha">${c.fecha}</span>
        </div>

        <p>${c.texto}</p>

        ${c.imagen ? `<img src="${c.imagen}" alt="Imagen del comentario">` : ""}

        <div class="acciones">
          <button class="likeBtn" data-index="${i}">👍 ${c.likes}</button>
          <button class="dislikeBtn" data-index="${i}">👎 ${c.dislikes}</button>
          <button class="replyBtn" data-index="${i}">💬 Comentar</button>
          ${c.usuario === usuarioActivo ? `<button class="deleteBtn" data-index="${i}">🗑 Eliminar</button>` : ""}
        </div>

        <div class="reply-box" id="replyBox-${i}" style="display:none; margin-top:10px;">
          <textarea class="replyText" id="replyText-${i}" placeholder="Escribe una respuesta..."></textarea>
          <button class="sendReplyBtn" data-index="${i}" style="margin-top:5px;">Enviar respuesta</button>
        </div>

        ${c.respuestas && c.respuestas.length > 0 ? 
          c.respuestas.map(r => `
            <div class="respuesta">
              <strong>${r.usuario}</strong> <span>${r.fecha}</span>
              <p>${r.texto}</p>
            </div>
          `).join("")
        : ""}
      `;

      comentariosContainer.appendChild(div);
    });

    activarBotones();
  }

  /* ======================================================================
     CONTROL DE BOTONES: LIKE / DISLIKE / ELIMINAR / COMENTAR / RESPONDER
  ====================================================================== */
  function activarBotones() {

    /* ---- LIKE ---- */
    document.querySelectorAll(".likeBtn").forEach(btn => {
      btn.onclick = e => {
        const i = e.target.dataset.index;
        comentarios[i].likes++;
        guardar();
      };
    });

    /* ---- DISLIKE ---- */
    document.querySelectorAll(".dislikeBtn").forEach(btn => {
      btn.onclick = e => {
        const i = e.target.dataset.index;
        comentarios[i].dislikes++;
        guardar();
      };
    });

    /* ---- ELIMINAR ---- */
    document.querySelectorAll(".deleteBtn").forEach(btn => {
      btn.onclick = e => {
        const i = e.target.dataset.index;
        comentarios.splice(i, 1);
        guardar();
      };
    });

    /* ---- MOSTRAR CAJA DE RESPUESTA ---- */
    document.querySelectorAll(".replyBtn").forEach(btn => {
      btn.onclick = e => {
        const i = e.target.dataset.index;
        const box = document.getElementById(`replyBox-${i}`);
        box.style.display = (box.style.display === "none") ? "block" : "none";
      };
    });

    /* ---- ENVIAR RESPUESTA ---- */
    document.querySelectorAll(".sendReplyBtn").forEach(btn => {
      btn.onclick = e => {
        const i = e.target.dataset.index;
        const texto = document.getElementById(`replyText-${i}`).value.trim();

        if (texto === "") {
          alert("Escribe una respuesta antes de enviar.");
          return;
        }

        const respuesta = {
          usuario: usuarioActivo,
          texto,
          fecha: new Date().toLocaleString()
        };

        if (!comentarios[i].respuestas) comentarios[i].respuestas = [];
        comentarios[i].respuestas.push(respuesta);

        guardar();
      };
    });
  }

  /* ======================================================================
     GUARDAR CAMBIOS
  ====================================================================== */
  function guardar() {
    localStorage.setItem("foroComentarios", JSON.stringify(comentarios));
    mostrarComentarios();
  }

  /* ======================================================================
     PUBLICAR NUEVO COMENTARIO
  ====================================================================== */
  publicarBtn.addEventListener("click", () => {
    const texto = comentarioTexto.value.trim();
    if (texto === "") {
      alert("Debes escribir algo antes de publicar.");
      return;
    }

    const nuevoComentario = {
      usuario: usuarioActivo,
      rol: rolActivo,
      texto,
      fecha: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
      imagen: "",
      respuestas: []
    };

    /* IMAGEN ADJUNTA */
    if (imagenComentario.files.length > 0) {
      const lector = new FileReader();
      lector.onload = e => {
        nuevoComentario.imagen = e.target.result;
        comentarios.unshift(nuevoComentario);
        guardar();
      };
      lector.readAsDataURL(imagenComentario.files[0]);
    } else {
      comentarios.unshift(nuevoComentario);
      guardar();
    }

    comentarioTexto.value = "";
    imagenComentario.value = "";
  });

  mostrarComentarios();
});
