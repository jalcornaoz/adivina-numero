//1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector(".score");
const checkButton = document.querySelector(".check");
scoreField.textContent = 10;

document.addEventListener("click", function () {
  alert("Hola mundo");
});

function alerta() {
  alert("Me hiciste click");
}
