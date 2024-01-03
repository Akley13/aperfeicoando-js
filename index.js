
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`\nDigite o exercicio: `, resposta => {
  let mostrar = "";
   switch (resposta) {
    case '1':
      mostrar = require("./Exercicios/1-imprimindoEDeclarandoVariaveis.js");
      console.log(mostrar.codeEx1());
      break;

    case '2':
      mostrar = require("./Exercicios/2-trabalhandoComVariaveis.js");
      console.log(mostrar.codeEx2());
      break;

    case '3':
      mostrar = require("./Exercicios/3-operacoesAritmetcias.js");
      console.log(mostrar.codeEx3());
  };
});