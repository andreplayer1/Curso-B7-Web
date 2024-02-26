let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana'];

fruits.push('Kiwi'); // Adiciona um item dentro do array.
fruits.pop(); // Deleta o ultimo item do array.
fruits.shift(); // Deleta o primeiro item do array.

console.log(fruits.join(', ')); // o join() basicamente retorna uma string juntando os itens do array; e em cada item ele coloca algo. Como nesse exemplo, que eu coloque uma virgula e um espaço (.join(', ')) e então, no final de cada objeto ele adicionou uma (, ) virgula e espaço. basicamente separando os itens por ele. (Obs. Ele não modifica o array)

fruits[0] = 'Pêra' // Substitui o index (Nesse caso 0)
fruits[fruits.length - 1] = 'Limão'; // Altera o ultimo item do array mesmo não sabendo o seu index.

console.log(fruits);