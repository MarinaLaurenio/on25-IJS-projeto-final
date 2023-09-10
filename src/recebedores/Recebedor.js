const MensagensDeErro = {
  DADOS_INCORRETOS: "Informe os dados corretamente.",
  ITEM_NAO_ENCONTRADO: "Item não encontrado.",
};

class Recebedor {
  #saldoContaBanco;

  constructor(nome, endereco, contato, tipo, contaBanco) {
    if (!nome || !endereco || !contato) {
      throw new Error(MensagensDeErro.DADOS_INCORRETOS);
    }

    this.id = ++Recebedor.count;
    this.nome = nome;
    this.endereco = endereco;
    this.contato = contato;
    this.tipo = tipo;
    this.contaBanco = contaBanco;
    this.#saldoContaBanco = 0;
    this.itens = [];

    this.constructor.totalRecebedores.push({
      id: this.id,
      nome: this.nome,
      endereco: this.endereco,
      contato: this.contato,
      tipo: this.tipo,
      contaBanco: this.contaBanco,
    });
  }

  static count = 0;
  static totalRecebedores = [];

  get saldoContaBanco() {
    return this.#saldoContaBanco;
  }
  set saldoContaBanco(novoSaldo) {
    this.#saldoContaBanco = novoSaldo;
  }

  validarDados(nome, qnt, preco) {
    if (!nome || !qnt || !preco) {
      throw new Error(MensagensDeErro.DADOS_INCORRETOS);
    }
  }

  cadastrarItem(nome, qnt, preco) {
    this.validarDados(nome, qnt, preco);
    this.itens.push({
      id: this.itens.length,
      nome: nome,
      qnt: qnt,
      preco: preco,
    });
    console.log(`Item: ${nome}. Foi cadastrado com sucesso!`);
  }

  removerItem(id) {
    const index = this.itens.findIndex((item) => item.id === id);

    if (index !== -1) {
      const itemRemovido = this.itens.splice(index, 1)[0];
      console.log(`Item: ${itemRemovido.nome}. Foi removido(a) da lista.`);
    } else {
      throw new Error(MensagensDeErro.ITEM_NAO_ENCONTRADO);
    }
  }

  alterarQuantidade(nome, qntNova) {
    const item = this.itens.find((item) => item.nome === nome);
    if (item) {
      item.qnt = qntNova;
      console.log(`Quantidade do item: ${nome}, alterada para ${qntNova}.`);
    } else {
      throw new Error(MensagensDeErro.ITEM_NAO_ENCONTRADO);
    }
  }

  alterarPreco(nome, precoNovo) {
    const item = this.itens.find((item) => item.nome === nome);
    if (item) {
      item.preco = precoNovo;
      console.log(`Preço do item: ${nome}, alterado para R$ ${precoNovo}.`);
    } else {
      throw new Error(MensagensDeErro.ITEM_NAO_ENCONTRADO);
    }
  }
}

module.exports = { Recebedor };
