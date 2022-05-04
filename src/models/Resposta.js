import { respostasAleatorias } from "../db/dbRespostas.js";

class Resposta {
  static tagResposta = document.getElementById("gerarResposta");

  gerarRespostas() {
    let resposta = Math.floor(Math.random() * respostasAleatorias.length);
    Resposta.tagResposta.innerHTML = respostasAleatorias[resposta];
  }
}
export { Resposta };
