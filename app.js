//encriptación
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

// g (global): Realiza una búsqueda global, es decir, encuentra todas las ocurrencias en lugar de solo la pri
// i (ignore case): Ignora las mayúsculas y minúsculas, es decir, la búsqueda no distingue entre "a" y "A".
function encriptacion() {
  let texto = document.getElementById("texto").value;

  if (texto.trim() === "") {
    mostrarMensajeError();
    return;
  }

  let cifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  document.getElementById("resultado").value = cifrado;
  mostrarResultado(cifrado);
}
// g (global): Realiza una búsqueda global, es decir, encuentra todas las ocurrencias en lugar de solo la pri
// i (ignore case): Ignora las mayúsculas y minúsculas, es decir, la búsqueda no distingue entre "a" y "A".
function desencriptar() {
  let texto = document.getElementById("texto").value;

  if (texto.trim() === "") {
    mostrarMensajeError();
    return;
  }

  let decifrar = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("resultado").value = decifrar;
  mostrarResultado(decifrar);
}
function copiar() {
  let copia = document.getElementById("resultado");
  copia.select();
  document.execCommand("copy");
}

function mostrarResultado() {
  document.getElementById("imagen").style.visibility = "hidden";
  document.getElementById("mensaje").innerText = "Mensaje encontrado";
}

function mostrarMensajeError() {
  document.getElementById("imagen").style.visibility = "visible";
  document.getElementById("mensaje").innerText =
    "Ningún mensaje fue encontrado";
  document.getElementById("resultado").value = "";
}
