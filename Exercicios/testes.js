const readline = require('readline');
const resposta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

resposta.question('Qual o seu nome? ', (name) => {
    console.log(`Olá, ${name}!`);
    resposta.close();
});