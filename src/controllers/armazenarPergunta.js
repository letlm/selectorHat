import { Pergunta } from "../models/Pergunta.js";
import { dbPergunta } from "../db/dbPergunta.js";

class ArmazenarPergunta {
  static addQuestion(pergunta) {
    const novaQuestion = new Pergunta(pergunta);
    dbPergunta.perguntasFeitas.push(novaQuestion);

    return dbPergunta.perguntasFeitas;
  }
}
export { ArmazenarPergunta };
