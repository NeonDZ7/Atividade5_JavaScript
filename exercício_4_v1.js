let salario = 1000;
let percentual = 0.0015;
let ano = 1996;

while (ano <= 2025) {
  salario += salario * percentual;
  percentual *= 2;
  ano++;
}

console.log("Salário atual em 2025: R$ " + salario.toFixed(2));