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

console.log(`${personagem.nome} tem ${personagem.idade} anos.`)
console.log(`Magia: ${personagem.caracteristicas.magia}`)
console.log(`Olho direito: ${personagem.olhos[1]}`)