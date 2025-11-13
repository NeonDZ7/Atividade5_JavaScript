let paisA = 80000;
let paisB = 200000;
let taxaA = 0.03;
let taxaB = 0.015;
let anos = 0;

while (paisA < paisB) {
  paisA += paisA * taxaA;
  paisB += paisB * taxaB;
  anos++;
}

console.log("Serão necessários " + anos + " anos para que o país A ultrapasse ou iguale o país B.");
console.log("População final de A: " + Math.round(paisA));
console.log("População final de B: " + Math.round(paisB));