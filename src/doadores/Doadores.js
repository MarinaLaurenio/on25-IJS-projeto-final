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
  #contaBanco;
  constructor(nome, numDoc, contaBanco) {
    this.nome = nome;
    this.#numDoc = numDoc;
    this.#contaBanco = contaBanco;
  }

  get numDoc() {
    return this.#numDoc;
  }
  set numDoc(novoNumDoc) {
    this.#numDoc = novoNumDoc;
  }

  get contaBanco() {
    return this.#contaBanco;
  }
  set contaBanco(novaContaBanco) {
    this.#contaBanco = novaContaBanco;
  }

  doarValorEmDinheiro(valor, entidade) {
    this.validarDadosDoacao(entidade);

    if (valor <= 0) {
      throw new Error(MensagensDeErro.VALOR_INVALIDO);
      return;
    }

    entidade.saldoContaBanco += valor;
    console.log(`Doação de R$ ${valor} recebida por ${entidade.nome}.`);
  }

  doarItem(itemNome, qntItem, entidade) {
    this.validarDadosDoacao(entidade);

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

  validarDadosDoacao(entidade) {
    if (!(entidade instanceof ONGs || entidade instanceof CasasAcolhimento)) {
      throw new Error(MensagensDeErro.ENTIDADE_NAO_ENCONTRADA);
    }
  }
}

module.exports = { Doadores };
