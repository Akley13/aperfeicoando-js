console.log(`\nTRABALHANDO COM LOOPS`);

const listaDePaises = [
    `Bolivia`,
    `Estados Unidos da América`,
    `Canadá`
];

console.log(`\nDestinos dísponiveis: `, listaDePaises);

const idadeDaPessoa = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = `Bolivi`;

const CompraAutorizada = idadeDaPessoa >= 18 || estaAcompanhado == true;

let contador = 0;

while(contador < 3){
    if (listaDePaises[contador] == destino) {
        console.log(`Destino econtrado: `, destino);
        break;
    } else {
        console.log(`Destino não econtrado.`);
    }

    contador++;
};