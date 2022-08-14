import "./styles.css";

const opera = document.getElementById("opera");
const base = document.getElementById("base");
const altura = document.getElementById("altura");
const btn = document.getElementById("boton");

btn.addEventListener("click", () => {
  let bases: number = Number(base.value);
  let alturas: number = Number(altura.value);
  let resultado: number = bases * alturas;
  if (resultado === 0) {
    alert("Usted no ingreso base o altura");
    opera.innerText = "Usted no ingreso Base o Altura";
  } 
  else if (resultado <= 1000) {
    opera.innerText = "El Area es " + resultado + " Calculo by JMGD";
  