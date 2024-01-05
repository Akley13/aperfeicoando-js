console.log(`\nPROGRAMAÇÃO ORIENTADA A OBJETOS - Code Bank`);

class dadosDosClientes {
    nome;
    cpf;
    agencia;
    saldo;
};

const cliente1 = new dadosDosClientes();
const cliente2 = new dadosDosClientes();

cliente1.nome = "Akley";
cliente1.cpf = 4992666175;
cliente1.agencia = 1959;
cliente1.saldo = 0;

cliente2.nome = "Karinne";
cliente2.cpf = 4555822554;
cliente2.agencia = 1985;
cliente2.saldo = 0;

console.log(`\nDADOS DOS CLIENTES`);

console.log(``);

console.log(cliente1);
console.log(cliente2);

const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primeiroNome() {

    leitor.question('Qual é o seu primeiro nome? ', (resposta) => {
        console.log(`Olá, ${resposta}`);
        segundoNome();
    });

};

function segundoNome() {

    leitor.question('E o seu segundo nome? ', (resposta2) => {
        console.log(`Olá, Sr(a). ${resposta2}`);
        leitor.close();
    });

};

primeiroNome();

console.log(``);
