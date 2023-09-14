const { Doadores } = require("./Doadores");
const { ONGs } = require("../recebedores/ONGs");
const { CasasAcolhimento } = require("../recebedores/CasasAcolhimento");
const { DoadoresAnonimos } = require("./DoadoresAnonimos");

describe("Testes da Classe Doadores", () => {
  let ong1;
  let casa1;
  let doador1;
  let doadorAnonimo1

  beforeEach(() => {
    ong1 = new ONGs("Minha ONG", "Rua da ONG", 569);
    casa1 = new CasasAcolhimento("Casa de Acolhimento", "Rua da Casa", 522);
    doador1 = new Doadores("Nome do Doador", "Documento do Doador", 133);
    doadorAnonimo1 = new DoadoresAnonimos()
  });

  test("Deve realizar uma doação de valor", () => {
    doador1.doarValorEmDinheiro(100, ong1);
    expect(ong1.saldoContaBanco).toBe(100);
  });
  test("Deve realizar uma doação anonima de valor", () => {
    doadorAnonimo1.doarValorEmDinheiro(5600, ong1);
    expect(ong1.saldoContaBanco).toBe(5600);
  });

  test("Deve realizar uma doação de item", () => {
    ong1.cadastrarItem("lençol", 10, 20);
    doador1.doarItem("lençol", 5, ong1);
    expect(ong1.itens[0].qnt).toBe(5);
  });
  test("Deve falhar ao tentar doar um item que não existe", () => {
    ong1.cadastrarItem("lençol", 10, 20);
    input = doador1.doarItem("roupa", 5, ong1);
    expect(input).toThrow("Item não encontrado.");
  });
  test("Deve falhar ao tentar doar a uma entidade que não existe", () => {
    const ong2 = ("ONG FALHA", "Rua da ONG falha", 100);
    input = doador1.doarItem("roupa", 5, ong2);
    expect(input).toThrow("Entidade inválida para receber doação.");
  });
  test("Deve verificar se a entidade recebedora é uma instancia de ONGs ou CasasAcolhimento", () => {
    expect(ong1).toBeInstanceOf(ONGs);
  });
});
