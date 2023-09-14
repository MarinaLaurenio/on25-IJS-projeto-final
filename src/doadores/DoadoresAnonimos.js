const { Doadores } = require("./Doadores");

class DoadoresAnonimos extends Doadores {
  constructor(nome) {
    super("Anônimo");
  }
}

module.exports = { DoadoresAnonimos };
