function clicou() {
    const input = document.querySelector("input");
    const botao = document.querySelector(".botao");

    if (input.getAttribute('type') === ('password')) {
        input.setAttribute('type', 'text');
        botao.innerText = 'Ocultar senha'
    } else {
        input.setAttribute('type', 'password');
        botao.innerText = 'Mostrar senha'
    }
}