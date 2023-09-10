const { Recebedor } = require("../src/recebedores/Recebedor.js");
const { CasasAcolhimento } = require("../src/recebedores/CasasAcolhimento");
const {ONGs} = require("../src/recebedores/ONGs");
const {Doadores} = require("../src/doadores/Doadores")

/*const recebedor1 = new Recebedor("Casa Uma", "Rua taltaltal", 32445896);
const recebedor2 = new Recebedor("Casa dois", "Rua taltaltal", 32445896);
const recebedor3 = new ONGs("Casa tres", "Rua taltaltal", 32445896);
const recebedor4 = new CasasAcolhimento("Casa quatro", "Rua taltaltal", 32445896);

console.log(Recebedor.totalRecebedores);

console.log(recebedor3);
console.log(recebedor4);

recebedor1.cadastrarItem("toalha", 3, 50);
recebedor1.cadastrarItem("lençol", 10, 50);
//recebedor1.removerItem(0);
//recebedor1.removerItem(6);
recebedor1.alterarQuantidade("lençol", 20);
recebedor1.alterarPreco("lençol", 245);

console.log(recebedor1.itens)*/


const doador1 = new Doadores("marina", 235, 56888)
const ong = new ONGs("Minha ONG", "Rua ABC", 123456, 522)
ong.cadastrarItem("lençol", 10, 50);
console.log(ong)
doador1.doarItem("lençol", 5, ong)
console.log(ong)

