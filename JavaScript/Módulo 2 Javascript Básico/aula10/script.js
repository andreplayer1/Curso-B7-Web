// Arrow Functions
// Arrow functions são basicamente uma nova forma de definir funções.

/*function somar(x, y) {
    return x + y;
}*/

// Arrow function veio para reduzir a quantidade de linhas no código.
/*const somar = (x, y) => {
    return x + y;
}*/

// Da pra fazer com menos linhas ainda...

// const somar = (x, y) => x + y;

// Se a função tiver somente um paramentro é possivel reduzir ainda mais. Exemplo:

/*function sobrenome(sob) {
    return 'André' + sob;
}*/

// Com Arrow function:

const sobrenome = sob => 'André' + sob;

console.log(sobrenome(' Barbosa'))

// Se tiver somente um parametro pode-se remover também os parenteses.