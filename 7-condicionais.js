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
    console.log(`\nLista de Paises disponiveis: `, listaDePaises);
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
