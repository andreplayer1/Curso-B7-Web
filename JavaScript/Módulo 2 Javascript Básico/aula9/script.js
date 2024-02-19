/*
Crie uma função que valide usuário e senha.
 usuario correto: pedro
 senha correta: 123
*/

// Uso da função
//Minha resposta:
function validar(loginUsuario, senhaUsuario) {
    let login = 'pedro';
    let senha = 123;

    if (loginUsuario == login && senhaUsuario == senha){
        return true;
    }else { return false}
}

//Resposta do professor Bonieky:
function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === 123){
        return true;
    } else {
        return false;
    }

}

let usuario = 'pedro';
let senha = '123'
let validacao = validar(usuario, senha);
    if (validacao) {
        console.log('Acesso concedido.');
    } else {
        console.log('Acesso NEGADO.')
    }