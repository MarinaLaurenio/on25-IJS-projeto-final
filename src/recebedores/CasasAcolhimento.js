const { Recebedor } = require("./Recebedor.js");

class CasasAcolhimento extends Recebedor {
  constructor(nome, endereco, contato, contaBanco) {
    super(nome, endereco, contato, "Casas de Acolhimento", contaBanco);
  }
}

module.exports = { CasasAcolhimento };
