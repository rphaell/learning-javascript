let total = 0;

document.querySelector("#zero").addEventListener("click", zerar);
document.querySelector("#maisTres").addEventListener("click", add3);
document.querySelector("#maisNove").addEventListener("click", add9);
document.querySelector("#menosDois").addEventListener("click", minus2);

function zerar() {
  total = 0;
  document.querySelector("#resultado").innerText = total;
}

function add3() {
  total = total + 3;
  document.querySelector("#resultado").innerText = total;
}

function add9() {
  total = total + 9;
  document.querySelector("#resultado").innerText = total;
}

function minus2() {
  total = total - 2;
  document.querySelector("#resultado").innerText = total;
}
