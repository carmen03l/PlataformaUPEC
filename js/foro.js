document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuario");
  const role = localStorage.getItem("role");
  const areaComentario = document.getElementById("areaComentario");
  const mensajeAcceso = document.getElementById("mensajeAcceso");

  if (usuario) {
    areaComentario.classList.remove("oculto");
    mensajeAcceso.style.display = "none";
  } else {
    areaComentario.classList.add("oculto");
  }
});

function publicar() {
  const comentario = document.getElementById("comentario").value;
  const usuario = localStorage.getItem("usuario");

  if (comentario.trim() !== "") {
    const div = document.createElement("div");
    div.className = "comentario";
    div.innerHTML = `<strong>${usuario}</strong>: ${comentario}`;
    document.getElementById("mensajes").appendChild(div);
    document.getElementById("comentario").value = "";
  }
}
