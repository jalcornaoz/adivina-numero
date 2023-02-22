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
const score = 20;
const highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1; // número aleatorio entre 1 y 20
const number = guessField.value;

/*
console.log(`El numero secreto es: ${secretNumber}`);
console.log(`El número elegido es: ${number}`);
*/

//3er paso: crear las funciones

function compara(secretNumber, number) {
  if (secretNumber < guessInput) {
    messageField.textContent = "El número secreto es menor.";
  } else if (secretNumber > guessInput) {
    messageField.textContent = "El número secreto es mayor.";
  } else if (secretNumber == guessInput) {
    messageField.textContent = "Has acertado el número.";
  }
}

checkButton.addEventListener("click", compara(secretNumber, number));

//scoreField.textContent = 10;

//document.addEventListener("click", function () {
//  alert("Hola mundo");
//});
