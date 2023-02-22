//1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector(".score");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessField = document.querySelector(".guess");
const highscoreField = document.querySelector(".highscore");
const messageField = document.querySelector(".message");
const numberField = document.querySelector(".number");

/*
console.log(
  scoreField,
  checkButton,
  againButton,
  guessField,
  highscoreField,
  messageField,
  numberField
);
*/

//2o paso: crear las variables que necesitamos
let score = 20;
let highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1; // número aleatorio entre 1 y 20
console.log(`El numero secreto es: ${secretNumber}`);

//3er paso: crear las funciones

checkButton.addEventListener("click", fnCheckButton);
againButton.addEventListener("click", fnReset);

function fnCheckButton() {
  const number = Number(guessField.value);
  if (secretNumber === number) {
    mostrarMensaje("¡¡Has acertado el número.!!");
    numberField.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreField.textContent = highscore;
    }
  } else {
    const mensaje =
      secretNumber > number
        ? "El número secreto es mayor."
        : "El número secreto es menor.";
    mostrarMensaje(mensaje);
    score--;
    scoreField.textContent = score;
  }
}

function mostrarMensaje(msj) {
  messageField.textContent = msj;
}
function fnReset() {
  score = 20;
  scoreField.textContent = score;
  mostrarMensaje("Start guessing...");
  guessField.value = "";
  numberField.textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1; // número aleatorio entre 1 y 20
}
