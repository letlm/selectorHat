import { ArmazenarPergunta } from "../controllers/armazenarPergunta.js";

class Salvar {
  static perguntasFeitas = [];
  static tagPergunta = document.getElementById("perguntaEscrita");

  static salvarPerguntas(event) {
    event.preventDefault();

    const forms = event.target.name;
    const input = event.target;
    const dataPergunta = {};

    for (let i = 0; i < input.length; i++) {
      const { name, value } = input[i];
      if (name) {
        dataPergunta[name] = value;
      }
      input[i].value = "";
    }

    if (forms == "pergunta") {
      this.perguntasFeitas = ArmazenarPergunta.addQuestion(dataPergunta);
      this.aparecerRespostaNaTela(this.perguntasFeitas);
    }
    console.log(this.perguntasFeitas);
  }

  static aparecerRespostaNaTela(array) {
    this.tagPergunta.innerHTML = "";

    array.forEach((pergunta) => {
      this.tagPergunta.innerHTML = `<div>
                                            <h2 class="perguntaNoModal">"${pergunta.perguntaAleatoria.nome}"</h2>
                                        </div>`;
    });
  }
}

export { Salvar };
