import { Clientes } from "./Clientes.js";
import { ContaCorrente } from "./ContaCorrente.js";

function pooEx1() {

    console.log(`\nPROGRAMAÇÃO ORIENTADA A OBJETOS - CODE BANK`);

    console.log(`\nDADOS DO CLIENTE`);

    const cliente1 = new Clientes();
    const contaCorrenteAkley = new ContaCorrente();

    cliente1.nome = "Akley";
    cliente1.cpf = 4992666175;
    contaCorrenteAkley.agencia = 1590;

    // Chamando com métodos
    contaCorrenteAkley.depositar(100);
    contaCorrenteAkley.depositar(100);
    contaCorrenteAkley.depositar(100);

    contaCorrenteAkley.transferir(200);

    console.log(cliente1, contaCorrenteAkley);

    console.log(`\nDADOS DO CLIENTE`);

    const cliente2 = new Clientes();
    const contaCorrenteKarinne = new ContaCorrente();

    cliente2.nome = "Karinne";
    cliente2.cpf = "61462282300"
    contaCorrenteKarinne.agencia = 2012;

    contaCorrenteKarinne.depositar(2000);
    contaCorrenteKarinne.depositar(2000);

    contaCorrenteKarinne.transferir(3000);

    console.log(cliente2, contaCorrenteKarinne);

    return "\npooEx1 - Concluído";

};

module.exports = {
    pooEx1,
}