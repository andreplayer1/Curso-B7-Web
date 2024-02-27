let fruits =  ['Banana', 'Laranja', 'Maçã'];

//let bigFruits = fruits.filter((item) => item.length > 4);

/*let ok = fruits.every((value) => { // O every(), só retorna true quando todos os itens do array satisfazem aquela condição
    return value.length > 3;
})

if (ok) {
    console.log('Todos são maiores do que 3')
} else {
    console.log('Não são todos maiores que 3')
}

let ok2 = fruits.some((value) => { // O some(), retorna true quando algum dos itens do array satisfazem aquela condição
    return value.length > 3;
})

if (ok2) {
    console.log('Algum item é maior do que 3')
} else {
    console.log('Nenhum dos itens são maiores que 3')
}
*/

if(fruits.includes('Uva')) { // .includes() verifica se tem o item que eu passei, dentro do meu array.
    console.log('Tem uva sim.')
} else {
    console.log('Não tem uva')
}