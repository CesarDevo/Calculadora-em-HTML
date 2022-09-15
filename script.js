let sete = document.getElementById('sete');
let oito = document.getElementById('oito');
let mais = document.getElementById('plus');
let input = document.getElementById('input');
let x = 0;
let y = 0;
let sum = 0;

sete.addEventListener("click", () => {
  input.value = "7";
  x = 7;
});

oito.addEventListener("click", () => {
  input.value = "8";
  x = 8;
});

mais.addEventListener("click", () => {
  soma (x, 1);
});

function soma (x, y) {
  sum = x + y;
  input.value = soma;
}

