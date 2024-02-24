// #16 O que são objetos?
let personagem = {
    nome: 'Bonieky',
    idade: '90',
    pais: 'Brasil',
    olhos: ['preto', 'azul'],

    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

/*console.log(`${personagem.nome} tem ${personagem.idade} anos.`)
console.log(`Magia: ${personagem.caracteristicas.magia}`)
console.log(`Olho direito: ${personagem.olhos[1]}`)*/

//#17 Acessando e alterando objetos
personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('verde');


let personagem2 = {
    nome: 'André',
    idade: 60,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(personagem2.carros[1])