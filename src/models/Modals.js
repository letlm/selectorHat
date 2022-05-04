import { Resposta } from "./Resposta.js";

class Modals {
  static modalDasRegras = document.getElementById("modalRegras");
  static modalDasRespostas = document.getElementById("modalRespostas");

  static modalRegra() {
    this.modalDasRegras.classList.add("aparecer");
    this.modalDasRegras.addEventListener("click", (event) => {
      if (event.target.tagName == "BUTTON") {
        this.modalDasRegras.classList.remove("aparecer");
      }
    });
  }

  static modalResposta() {
    const resposta = new Resposta();
    resposta.gerarRespostas();
    this.modalDasRespostas.classList.add("aparecer");
    this.modalDasRespostas.addEventListener("click", (event) => {
      if (event.target.tagName == "BUTTON") {
        this.modalDasRespostas.classList.remove("aparecer");
      }
    });
  }

  static limparResposta() {
    Modals.modalDasRespostas.classList.remove("aparecer");
  }
}

export { Modals };
