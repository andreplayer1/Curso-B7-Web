function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    }else {
        return false;
    }
}

let idade = 32
let verificacao = maiorDeIdade(idade);

if(idade >= 18) {
    console.log('Maior de idade.')
} else {
    console.log('Menor de idade.')
}