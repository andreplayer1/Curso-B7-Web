function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');

    ul.innerHTML += "<li>Item adicionado</li>"; // FORMA INCORRETA. Altera todo o html para adicionar um novo elemento. Nesse caso aqui um novo <li>.
    
    let newLi = document.createElement("li");
    newLi.innerText = ("Item adicionado"); // FORMA CORRETA. Não mexe no seu html, simplesmente adiciona o novo elemento.

    ul.prepend("newLi");
 }

 /* Observações
 1 - O appendChild() serve para adicionar elementos.

 2 - Se for adicionar um elemento deve-se cria-lo antes de colocar como fiz no exemplo acima.

 3 - O append() serve tanto para textos como para elementos, mas se for elementos tem que ser criado antes de colocar senão entrará como texto.
 
 3 - O prepend() é a mesma coisa que o append(). A única diferença é que ele adiciona no começo.
 */