console.log(`LOOP: FOR`);

const listaDePaises = [`Roma`, ` California`, ` Peru`];
const destino = `Roma`;


console.log(`Lista de países: ${listaDePaises}`);

for (let i = 0; i < 3; i++) {
    
    if (listaDePaises[i] == destino) {
        console.log(`Destino encontrado!`);
    }

}