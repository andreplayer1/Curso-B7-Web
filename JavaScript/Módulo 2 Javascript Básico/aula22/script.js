// 1. Faça um loop que mostre todas as frutas.
let fruits = ['Maçã', 'Uva', 'Banana'];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let n in fruits) {
    console.log(fruits[n]);
}

for (frutas of fruits) {
    console.log(frutas);
}

// 2. Conte de 1 até 100 através de um WHILE
let contagem = 1;

while (contagem <= 100) {
    console.log(`Contando - ${contagem}`);
    contagem ++
}