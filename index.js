const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntaExercicio() {
  readline.question(`\nDigite o exercício ou 0 para encerrar: `, resposta => {
    if (resposta === '0') {
      console.log('Encerrando...');
      readline.close();
    } else {
      let mostrar = "";
      switch (resposta) {
        case '1':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx1());
          break;
    
        case '2':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx2());
          break;
    
        case '3':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx3());
          break;
    
        case '4':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx4());
          break;
    
        case '5':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx5());
          break;
    
        case '6':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx6());
          break;
    
        case '7':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx7());
          break;
    
        case '8':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx8());
          break;
    
        case '9':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeEx9());
          break;
        case '10':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.codeImc());
          break;
        case '11':
          mostrar = require("./Exercicios/functionsDosExercicios.js");
          console.log(mostrar.pooEx1());
          break;
      };
      perguntaExercicio();
    }
  });
};

perguntaExercicio();