let pessoa = {
    nome: 'André',
    sobrenome: 'Barbosa',
    idade: 90,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}` // OBS. Se usar arrow function dentro do objeto não vou ter como acessar propriedades do proprio objeto, Como o this por exemplo. Com arrow function a função se torna anonima. Quer acesso ao this? usa function não quer? pode usar () => {}
    }
}

console.log(pessoa.nomeCompleto())