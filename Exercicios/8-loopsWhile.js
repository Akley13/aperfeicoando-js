console.log(`\nTRABALHANDO COM LOOPS`);

const listaDePaises = new Array (
    `Bolivia`,
    `Estados Unidos da América`,
    `Canadá`
);

console.log(`\nDestinos dísponiveis: ${listaDePaises}`);

const idadeDaPessoa = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = `Estados Unidos da América`;

const CompraAutorizada = idadeDaPessoa >= 18 || estaAcompanhado == true;

let contador = 0;
let status = false;

while(contador < 3){
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