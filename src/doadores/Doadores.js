const { CasasAcolhimento } = require("../recebedores/CasasAcolhimento.js");
const { ONGs } = require("../recebedores/ONGs.js");
const { Recebedor } = require("../recebedores/Recebedor.js");

const MensagensDeErro = {
  ENTIDADE_NAO_ENCONTRADA: "Entidade não encontrada.",
  ITEM_NAO_ENCONTRADO: "Item não encontrado.",
  QUANTIDADE_INVALIDA: "Quantidade inválida para a doação.",
  VALOR_INVALIDO: "O valor da doação deve ser maior que zero.",
};

class Doadores {
  nome;
  #numDoc;
  #bankAccount;
  constructor(nome, numDoc, bankAccount) {
    this.nome = nome;
    this.#numDoc = numDoc;
    this.#bankAccount = bankAccount;
  }

  get numDoc() {
    return this.#numDoc;
  }
  set numDoc(novoNumDoc) {
    this.#numDoc = novoNumDoc;
  }

  get bankAccount() {
    return this.#bankAccount;
  }
  set bankAccount(newBankAccount) {
    this.#bankAccount = newBankAccount;
  }

  doarValorAleatorio(valor, entidade) {
    this.validardadosDoacao(entidade);

    if (valor <= 0) {
      throw new Error(MensagensDeErro.VALOR_INVALIDO);
      return;
    }

    entidade.saldoContaBanco += valor;
    console.log(`Doação de R$ ${valor} recebida por ${entidade.nome}.`);
  }

  doarItem(itemNome, qntItem, entidade) {
    this.validardadosDoacao(entidade);

    let item = entidade.itens.find((item) => item.nome === itemNome);

    if (!item) {
      throw new Error(MensagensDeErro.ITEM_NAO_ENCONTRADO);
    }

    if (qntItem > item.qnt) {
      throw new Error(MensagensDeErro.ENTIDADE_NAO_ENCONTRADA);
    }

    item.qnt -= qntItem;
    console.log(
      `Doação de: item: ${item.nome} - qnt: ${qntItem}, realizada com sucesso para ${entidade.nome}.`
    );
  }

  validardadosDoacao(entidade) {
    if (!(entidade instanceof ONGs || entidade instanceof CasasAcolhimento)) {
      throw new Error(MensagensDeErro.ENTIDADE_NAO_ENCONTRADA);
    }
  }
}

module.exports = { Doadores };
