const ul = document.querySelector('ul');
const input = document.querySelector('input');

function addItem() {
    let newLi = document.createElement('li');
    newLi.innerText = input.value;
    ul.append(newLi);
}

function apertar(e) {
    if(e.key == 'Enter') {
        addItem();
        input.value = '';
    }
}

input.addEventListener('keypress', apertar)