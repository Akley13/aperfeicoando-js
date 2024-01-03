
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function perguntar() {
    readline.question(`Digite o exercicio: `, resposta => {

      switch (resposta) {
        case '1':
          const mostrar = require("./Exercicios/1-imprimindoEDeclarandoVariaveis");
          console.log(mostrar.codeEx1());
          break;
        
        case '2':
          console.log("Comando inválido.");
          break;
      };
      readline.close();
    });
  };

perguntar();