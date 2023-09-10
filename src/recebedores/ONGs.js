const { Recebedor } = require("./Recebedor.js");

class ONGs extends Recebedor {
  constructor(nome, endereco, contato, contaBanco) {
    super(nome, endereco, contato, "ONG", contaBanco);
  }
}

module.exports = { ONGs };
