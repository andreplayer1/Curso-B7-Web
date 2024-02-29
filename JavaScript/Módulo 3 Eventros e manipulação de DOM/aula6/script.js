function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');

    
    //ul.children[0].innerHTML += "(alterado)"; //Desta forma todo o conteudo do UL é alterado.

   // ul.children[0].append("(alterado)"); //Usando o append não altera todo o conteúdo. Ele simplesmente vai acrescentar o que eu pedi sem mexer em mais nada(Isso é bom porque ele não precisa repocessar todo conteúdo só para acrescentar algo.) Mas ele só funciona com texto. Se eu quiser adicionar uma "tag" um "html", não vai funcionar. Solução a seguir...

    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";
    /* Então a forma correta de adicionar um elemento novo na tela é com o appendChild. primeiro cria-se o elemento com o document.createElement e depois adiociona ele com o appendChild 

    Existe também o prepend que adiciona o texto no começo. O append adiciona o final
    */

    ul.prepend(newLi);
}