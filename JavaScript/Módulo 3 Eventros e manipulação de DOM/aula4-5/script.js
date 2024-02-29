/*
function clicou() {
    console.log('Clicou no botão.')
}

let botao = document.querySelector('.botao');
botao.addEventListener("click", () => {
    clicou();
})

document.querySelector('.botao').addEventListener("click", clicou);
*/
//Ou posso usar o onclick diretamente no documento html.

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    /*ul.innerHTML = ul.innerHTML + "<li>Item Alterado</li>";*/

    /*ul.children[0].innerHTML = "Item <strong>alterado!</strong>";*/

    ul.outerHTML = "<strong>Alterado!</strong>"
}
