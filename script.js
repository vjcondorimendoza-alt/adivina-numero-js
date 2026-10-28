const nombre = "Valeria";

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const tarjeta = document.getElementById("tarjeta");
const inputNumero = document.getElementById("inputNumero");
const btnVerificar = document.getElementById("btnVerificar");
const btnReiniciar = document.getElementById("btnReiniciar");
const mensaje = document.getElementById("mensaje");
const historial = document.getElementById("historial");
const contador = document.getElementById("contador");

function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

function verificarIntento() {
  const valor = Number(inputNumero.value);
  if (!valor || valor < 1 || valor > 100) {
    mostrarMensaje(" Transmisión fallida. Ingresa un número del 1 al 100", "#ff6b6b");
    inputNumero.style.borderColor = "#ff6b6b";
    return;
  }

  intentos++;
  contador.textContent = intentos;
  const item = document.createElement("li");
  item.textContent = "Señal " + intentos + ": " + valor;
  historial.appendChild(item);

  if (valor === numeroSecreto) {
    mostrarMensaje(" ¡Correcto, " + nombre + "! Descifraste el código en " + intentos + " señales", "#2ecc71");
    tarjeta.style.borderColor = "#2ecc71";
    tarjeta.style.boxShadow = "0 0 40px #2ecc71";
    inputNumero.style.borderColor = "#2ecc71";
    inputNumero.style.boxShadow = "0 0 15px #2ecc71";
    btnVerificar.disabled = true;
  } else if (valor < numeroSecreto) {
    mostrarMensaje(" Muy bajo, el código está más lejos en la galaxia", "#ffd700");
    inputNumero.style.borderColor = "#ffd700";
  } else {
    mostrarMensaje(" Muy alto, el código está más cerca de la Tierra", "#ffd700");
    inputNumero.style.borderColor = "#ffd700";
  }

  inputNumero.value = "";
}

function reiniciarJuego() {
  intentos = 0;
  contador.textContent = 0;
  historial.innerHTML = "";
  mostrarMensaje("", "white");
  tarjeta.style.borderColor = "#4a6cf7";
  tarjeta.style.boxShadow = "0 0 20px rgba(74, 108, 247, 0.4)";
  inputNumero.style.borderColor = "#3a4a8a";
  inputNumero.style.boxShadow = "none";
  inputNumero.value = "";
  btnVerificar.disabled = false;
}

btnVerificar.addEventListener("click", verificarIntento);
btnReiniciar.addEventListener("click", reiniciarJuego);

inputNumero.addEventListener("keydown", function(evento) {
  if (evento.key === "Enter") {
    verificarIntento();
  }
});
