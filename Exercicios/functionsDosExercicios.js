function pulaLinha() {

    console.log("");

}

function codeEx1() {
    console.log("Primeiro programa: Trabalhando com variáveis!");

    const nome = "Gabriel";
    const idade = 22;

    console.log("Nome: " + nome);
    console.log("Idade: " + idade);

    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

    return `\nExercício 1 - Feito `;
};

function codeEx2() {
    console.log("Bem-vindo");

    const idade = 22;

    console.log(idade);

    return `\nExercício 2 - Feito `;

};

function codeEx3() {
    console.log("Operações aritméticas");

    console.log(2 + 2);
    console.log((10 + 8) * 2);
    console.log("2" + "2");
    console.log("Ano" + "2023");

    return `\nExercício 3 - Feito `;

};

function codeEx4() {
    console.log("Convertendo string em numero \n");

    console.log("Conversão explicita: " + parseInt("2") + parseInt("2"));

    console.log("Conversão implícita: " + "10" / "2");
    console.log("Not a number: " + "Akley" / "2");

    return `\nExercício 4 - Feito `;

};

function codeEx5() {
    console.log("\nInterpolação de variáveis");

    const akley = "Akley";
    const akleySobrenome = "Alves de Araujo Silva";
    const akleyIdade = 22;

    const karinne = "Karinne";
    const karinneSobrenome = "Emilia Silva e Silva Alves";
    const karinneIdade = 23;

    const jon = `Jon`;
    const jonIdade = 38;

    console.log(`Meu amigo chamado ${jon}, tem ${jonIdade} anos.`);

    console.log(`Nome completo: ${akley} ${akleySobrenome} \nIdade: ${akleyIdade}`);

    console.log(`Nome completo 2: ${karinne} ${karinneSobrenome} \nidade: ${karinneIdade}`);

    const nomeCompleto = akley + " " + akleySobrenome;
    const nomeCompleto2 = karinne + " " + karinneSobrenome;

    console.log(`\nLista de nomes:  \n${nomeCompleto}  \n${nomeCompleto2}`);

    console.log(` \n`);

    return `\nExercício 5 - Feito `;

};

function codeEx6() {
    console.log(`\nTRABALHANDO COM LISTAS`);

    // const brazil = `Brazil`;
    // const newYork = `New York`;
    // const cappadocia = `Cappadocia`;

    const listaDePaises = [
        `Brazil`,
        `New York`,
        `Cappadocia`
    ];

    listaDePaises.push(`Barcelona`);
    listaDePaises.push(`Paris`);

    listaDePaises.splice(1, 1);

    console.log(`Lista de Paises: `, listaDePaises);
    console.log(`Tamanho da lista: `, listaDePaises.length);

    console.log(`País favorito: `, listaDePaises[1]);

    console.log(`\n`);

    return `\nExercício 6 - Feito `;

};

function codeEx7() {
    console.log(`\nTRABALHANDO COM LISTAS - AEROPORTO`);

    const listaDePaises = [
        `Brazil`,
        `New York`,
        `Cappadocia`
    ];

    listaDePaises.push(`Barcelona`);
    listaDePaises.push(`Paris`);

    console.log(`Lista de Paises: `, listaDePaises);
    console.log(`Tamanho da lista: `, listaDePaises.length);

    const idadeDaPessoa = 18;
    const estaAcompanhado = true;
    const temPassagemComprada = true;

    if (idadeDaPessoa >= 18 || estaAcompanhado) {
        console.log(`\nPassagem comprada com sucesso!`);
        console.log(`Destino: `, listaDePaises[1]);
        listaDePaises.splice(1, 1);
        console.log(`\nLista de Paises disponíveis: `, listaDePaises);
        console.log(`Lista atualizada: `, listaDePaises.length);

    } else {
        console.log(`\nIngresso negado.`);
        console.log(`\Ingresso apenas para maiores de 18 anos ou liberado para acompanhante.`);
    }

    console.log(`\nEMBARQUE`);

    if (temPassagemComprada == true && idadeDaPessoa >= 18) {
        console.log(`\nAutorizado a embarcar.`);
    } else {
        console.log(`\nNão está autorizado a embarcar.`);
    }

    console.log(`\n`);

    return `\nExercício 7 - Feito `;

};

function codeEx8() {
    console.log(`\nTRABALHANDO COM LOOPS`);

    const listaDePaises = new Array(
        `Bolivia`,
        `Estados Unidos da América`,
        `Canadá`
    );

    console.log(`\nDestinos disponíveis: ${listaDePaises}`);

    const idadeDaPessoa = 18;
    const estaAcompanhado = false;
    let temPassagemComprada = true;
    const destino = `Estados Unidos da América`;

    const CompraAutorizada = idadeDaPessoa >= 18 || estaAcompanhado == true;

    let contador = 0;
    let status = false;

    while (contador < 3) {
        if (listaDePaises[contador] == destino) {
            console.log(`\nVerificação: ${contador + 1}`);
            console.log(`Destino encontrado: ${destino}`);
            console.log(`Status: ${status = true}`);
            console.log(``);
            break;
        } else {
            console.log(`\nVerificação: ${contador + 1}`);
            console.log(`Destino não encontrado.`);
            console.log(`Status: ${status = false}`);
            console.log(``);
        }

        contador++;
    };

    return `\nExercício 8 - Feito `;

};

function codeEx9() {
    console.log(`LOOP: FOR`);

    const listaDePaises = [`Roma`, ` California`, ` Peru`];
    const destino = `Roma`;


    console.log(`Lista de países: ${listaDePaises}`);

    for (let i = 0; i < 3; i++) {

        if (listaDePaises[i] == destino) {
            console.log(`Destino encontrado!`);
        }
    };

    return `\nExercício 9 - Feito `;

};

function codeImc() {
    console.log(`\nCÁLCULO DE IMC`);

    const nome = "Akley";
    const peso = 87;
    const altura = 1.76;

    const imc = peso / altura ** 2;

    console.log(`Nome: ${nome}`);

    if (imc < 18.5) {
        console.log(`IMC: `, imc.toFixed(2));
        console.log(`Classificação: A baixo do peso.`);
    } else if (imc > 18.5 && imc < 24.9) {
        console.log(`IMC: `, imc.toFixed(2));
        console.log(`Classificação: Peso normal.`);
    } else if (imc > 25 && imc < 29.9) {
        console.log(`IMC: `, imc.toFixed(2));
        console.log(`Classificação: Sobrepeso.`);
    } else if (imc > 30 && imc < 34.9) {
        console.log(`IMC: `, imc.toFixed(2));
        console.log(`Classificação: Obesidade grau I.`);
    } else if (imc > 35 && imc < 39.9) {
        console.log(`IMC: `, imc.toFixed(2));
        console.log(`Classificação: Obesidade grau II.`);
    } else if (imc > 40) {
        console.log(`IMC: `, imc.toFixed(2));
        console.log(`Classificação: Obesidade grau III.`);
    }

    console.log(`Nota: A classificação para o peso normal é entre 18.5 e 24.9.`);

    console.log(``);

    return `\nDesafio pessoal IMC - Feito `;

};

// JAVA POO

function pooEx1() {

    console.log(`\nPROGRAMAÇÃO ORIENTADA A OBJETOS - CODE BANK`);

    class Clientes {
        nome;
        cpf;
    };

    class ContaCorrente {
        agencia;
        _saldo = 0;

        depositar(valor) {
            if (valor > 0) {
                this._saldo += valor;
                console.log("\nDepósito realizado | Saldo atual: " + this._saldo);
            } else {
                console.log("\nDepósito cancelado | Motivo: Valor negativo: " + valor);
            }
         
        };

        transferir(valor) {
            if (valor >= this._saldo) {
                console.log("\nTransferência negada | Valor da transferência: " + valor);
                console.log("Saldo atual: " + this._saldo);
                pulaLinha();
            } else {
                this._saldo -= valor;
                console.log("\nTransferência realizada | valor da transferência: " + valor);
                console.log("Saldo atualizado: " + this._saldo);
                pulaLinha();
            };
        };
    };

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
    pulaLinha,
    codeEx1,
    codeEx2,
    codeEx3,
    codeEx4,
    codeEx5,
    codeEx6,
    codeEx7,
    codeEx8,
    codeEx9,
    codeImc,
    pooEx1
};