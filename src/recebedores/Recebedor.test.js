const { CasasAcolhimento } = require("./CasasAcolhimento.js");
const { ONGs } = require("./ONGs.js");
const { Recebedor } = require("./Recebedor.js");

describe("testar as classes filhas de Recebedor", () => {
  let ONG1;
  let Casa1;

  beforeEach(() => {
    ONG1 = new ONGs("Casa Uma", "Rua taltaltal", 32445896);
    Casa1 = new CasasAcolhimento("Casa Uma", "Rua taltaltal", 32445896);

    ONG1.cadastrarItem("toalha", 10, 100);
    Casa1.cadastrarItem("lençol", 10, 100);
  });

  afterEach(() => {
    ONG1 = null;
    Casa1 = null;
  });
  test("deve criar uma instancia das classes filhas", () => {
    expect(ONG1).toBeInstanceOf(ONGs);
    expect(Casa1).toBeInstanceOf(CasasAcolhimento);
  });
  test("deve gerar um erro ao nao passar um dado", () => {
    ONG1 = new ONGs("", "Rua taltaltal", 32445896);
    Casa1 = new CasasAcolhimento("Casa Uma", "Rua taltaltal");
    expect(ONG1).toThrowError("Informe dos dados corretamente");
    expect(Casa1).toThrowError("Informe dos dados corretamente");
  });
  test("deve cadastrar um item corretamente na instancia", () => {
    expect(ONG1.itens.length).toBe(1);
  });
  test("deve remover um item corretamente da instancia", () => {
    ONG1.cadastrarItem("arroz", 10, 100);
    ONG1.removerItem(1);
    expect(ONG1.itens.length).toBe(1);
  });
  test("deve alterar a quantidade do item escolhido", () => {
    ONG1.alterarQuantidade("toalha", 30);
    const itemAlterado = ONG1.itens.find((item) => item.nome === "toalha");
    expect(itemAlterado.qnt).toBe(30);
  });
  test("deve alterar o preço do item escolhido", () => {
    ONG1.alterarPreco("toalha", 245);
    const itemAlterado = ONG1.itens.find((item) => item.nome === "toalha");
    expect(itemAlterado.preco).toBe(245);
  });
});
