//1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector(".score");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessField = document.querySelector(".guess");
const highscoreField = document.querySelector(".highscore");
const messageField = document.querySelector(".message");
const numberField = document.querySelector(".number");
const bodyField = document.querySelector("body");

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
let highscore;
let score;
let secretNumber;
fnInitApp();

//3er paso: crear las funciones

checkButton.addEventListener("click", fnCheckButton);

function fnCheckButton() {
  const number = Number(guessField.value);
  if (secretNumber === number) {
    mostrarMensaje("¡¡Has acertado el número.!!");
    numberField.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore);
      highscoreField.textContent = highscore;
      bodyField.style.backgroundColor = "#00cc00";
    }
  } else if (score === 1) {
    bodyField.style.backgroundColor = "#cc0000";
    scoreField.textContent = 0;
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

// 4o paso: añadir un listener al againButton
againButton.addEventListener("click", fnInitApp);

function fnInitApp() {
  if (localStorage.getItem("highscore"))
    highscore = localStorage.getItem("highscore");
  else highscore = 0;
  bodyField.style.backgroundColor = "#222";
  scoreField.textContent = score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; // número aleatorio entre 1 y 20
  console.log(`El numero secreto es: ${secretNumber}`);
  mostrarMensaje("Empieza a adivinar...");
  guessField.value = "";
  numberField.textContent = "?";
}
