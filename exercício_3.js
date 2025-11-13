let numeros = [5, 12, 8, 20, 3, 7, 15];
let menor = numeros[0];
let maior = numeros[0];
let soma = 0;

for (let n of numeros) {
  if (n < menor) menor = n;
  if (n > maior) maior = n;
  soma += n;
}

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);