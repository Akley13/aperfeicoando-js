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

listaDePaises.splice(1,1);

console.log(`Lista de Paises: `, listaDePaises);
console.log(`Tamanho da lista: `, listaDePaises.length);

console.log(`País favorito: `, listaDePaises[1]);

console.log(`\n`);