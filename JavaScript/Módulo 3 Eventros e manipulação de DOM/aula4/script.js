function clicou() {
    console.log('Clicou no botão.')
}

/*let botao = document.querySelector('.botao');
botao.addEventListener("click", () => {
    clicou();
})*/

document.querySelector('.botao').addEventListener("click", clicou);

//Ou posso usar o onclick diretamente no documento html.