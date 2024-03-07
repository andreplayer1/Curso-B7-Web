// Elementos
const lista = document.querySelector('ul');
const input = document.querySelector('input');

// Funções
function handleKeyUp(e) {
    if(e.key === 'Enter') {
        // Adicionar elemento LI na lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        // Limpar o campo de texto
        input.value = '';
    }
// Eventos
}
input.addEventListener('keyup', handleKeyUp)