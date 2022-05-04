import { Salvar } from ".//models/Quadro.js";
import { Modals } from "./models/Modals.js";

const btnPerguntar = document.querySelector("body");
btnPerguntar.addEventListener("submit", Salvar.salvarPerguntas.bind(Salvar));

const btnRegras = document.getElementById("regras");
btnRegras.addEventListener("click", Modals.modalRegra.bind(Modals));

const btnRespostas = document.querySelector("body");
btnRespostas.addEventListener("submit", Modals.modalResposta.bind(Modals));

const limpar = document.getElementById("novaPergunta");
limpar.addEventListener("click", Modals.limparResposta);
