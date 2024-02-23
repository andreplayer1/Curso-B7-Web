let count = 0;

function add() {
    let count = 0;
    count ++;
}

add();
add();

console.log(count);

/* Uma variavel criada fora das funções podem ser usadas dentro de funções. Mas uma variavel criada dentro de alguma funções (sendo de escopo local ou seja let ou const) não podem ser usadas fora da função. "var" por ser uma variavel global, pode ser usada em qualquer lugar do codigo. */