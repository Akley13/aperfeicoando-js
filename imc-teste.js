console.log(`\nCÁLCULO DE IMC`);

const peso = 106;
const altura = 1.76;

const imc = peso / altura ** 2;

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

console.log(``);