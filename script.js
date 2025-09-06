//1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector(".score");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessField = document.querySelector(".guess");
const highscoreField = document.querySelector(".highscore");
const messageField = document.querySelector(".message");
const numberField = document.querySelector(".number");
const bodyField = document.querySelector("body");

// Comprobamos que hemos seleccionado bien los elementos
console.log(
  scoreField,
  checkButton,
  againButton,
  guessField,
  highscoreField,
  messageField,
  numberField
);

//2o paso: crear las variables que necesitamos
let highscore;
let score;
let secretNumber;

fnInitApp(); //inicializamos variables

//3er paso: crear listeners para los botones
againButton.addEventListener("click", fnInitApp);
checkButton.addEventListener("click", fnCheckButton);

// 4o paso: crear las funciones que necesitamos
function fnInitApp() {
  scoreField.textContent = score = 20;
  guessField.value = "";

  if (localStorage.getItem("highscore"))
    highscore = Number(localStorage.getItem("highscore"));
  else highscore = 0;
  highscoreField.textContent = highscore;

  bodyField.style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1; // número aleatorio entre 1 y 20
  console.log(`El numero secreto es: ${secretNumber}`);
  mostrarMensaje("Empieza a adivinar...");
  numberField.textContent = "?";
}

function fnCheckButton() {
  const number = Number(guessField.value);
  if (secretNumber === number) {
    mostrarMensaje("¡¡Has acertado el número.!!");
    numberField.textContent = secretNumber;
    if (score > highscore) {
      highscoreField.textContent = highscore = score;
      localStorage.setItem("highscore", score);
      bodyField.style.backgroundColor = "#00cc00";
    }
  } else if (score === 1) {
    bodyField.style.backgroundColor = "#cc0000";
    scoreField.textContent = 0;
  } else {
    const mensaje =
      secretNumber > number
        ? "El número secreto es MAYOR."
        : "El número secreto es MENOR.";
    mostrarMensaje(mensaje);
    score--;
    scoreField.textContent = score;
  }
}

function mostrarMensaje(msj) {
  messageField.textContent = msj;
}
