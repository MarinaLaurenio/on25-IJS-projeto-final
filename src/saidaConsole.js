const { Doadores } = require("./doadores/Doadores.js");
const { ONGs } = require("./recebedores/ONGs");
const { CasasAcolhimento } = require("./recebedores/CasasAcolhimento");
const { DoadoresAnonimos } = require("./doadores/DoadoresAnonimos.js");
const { Recebedor } = require("./recebedores/Recebedor.js");

//------- CADASTRAR UM DOADOR OU UM RECEBEDOR

const doador1 = new Doadores("NomeDoador1", 5245, 123);
const ong1 = new ONGs("NomeONG1", "RuaONG1", 40005000, 124);
const casaAcolhimento1 = new CasasAcolhimento(
  "NomeCasaAcolhimento",
  "RuaCasaAcolhimento",
  31400800,
  585
);
const doadorAnonimo1 = new DoadoresAnonimos("Marina")
console.log(doadorAnonimo1) //DoadoresAnonimos { nome: 'Anônimo' }

const ongFalsa = ("NomeONG1", "RuaONG1", 40005000, 124);

console.log(Recebedor.totalRecebedores); /*
[
  {
    id: 1,
    nome: 'NomeONG1',
    endereco: 'RuaONG1',
    contato: 40005000,
    tipo: 'ONG',
    contaBanco: 124
  },
  {
    id: 2,
    nome: 'NomeCasaAcolhimento',
    endereco: 'RuaCasaAcolhimento',
    contato: 31400800,
    tipo: 'Casas de Acolhimento',
    contaBanco: 585
  }
]
*/


// ---- CADASTRAR UM ITEM PELA ONG

ong1.cadastrarItem("Toalha", 15, 30); //Item: toalha. Foi cadastrado com sucesso!
//ong1.cadastrarItem("", 15, 30) //Error: Informe os dados corretamente.
ong1.cadastrarItem("Arroz", 30, 3.5); //Item: Arroz. Foi cadastrado com sucesso!
ong1.alterarQuantidade("Arroz", 15); //Quantidade do item: Arroz, alterada para 15.
ong1.alterarPreco("Arroz", 5.50); // Preço do item: Arroz, alterado para R$ 5.50

console.log(ong1.itens); /*[
    { id: 0, nome: 'Toalha', qnt: 15, preco: 30 },
    { id: 1, nome: 'Arroz', qnt: 15, preco: 5.5 }
  ]*/

//ong1.removerItem(3) // Error: Item não encontrado.
ong1.removerItem(1); // Item: Arroz. Foi removido(a) da lista.

console.log(ong1.itens); // [ { id: 0, nome: 'Toalha', qnt: 15, preco: 30 } ]



// ------- DOAR UM ITEM CADASTRADO DA ONG
// Erro um item não existente:
// doador1.doarItem("Feijao", 5 , ong1) // Error: Item não encontrado.

//Erro entidade não é uma instancia:
// doador1.doarItem("Toalha", 10, ongFalsa) //Error: Entidade não encontrada.

//Erro quantidade maior que a disponível:
//doador1.doarItem("Toalha", 50, ong1) // Error: Quantidade inválida para a doação.

doador1.doarItem("Toalha", 10, ong1); // Doação de: item: Toalha - qnt: 10, realizada com sucesso para NomeONG1.





// --------- DOAR VALOR EM DINHEIRO PARA UMA ONG:

// Erro entidade falsa:
// doador1.doarValorEmDinheiro(1000, ongFalsa) // Error: Entidade não encontrada.

doador1.doarValorEmDinheiro(1000, ong1); // Doação de R$ 1000 recebida por NomeONG1.

// só para confirmar a operação: 
console.log(ong1.saldoContaBanco) //1000
