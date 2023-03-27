const tarefa = document.querySelector("#tarefa")
const botao = document.querySelector("#botao")
const exibirLista = document.querySelector("#exibirLista")
const lista = document.querySelector("#lista")

function mostrarLista() {

    if (exibirLista.classList.contains("d-none")) { // verifica se a div esta visivel

        exibirLista.classList.remove("d-none") // deixa a div visivel
        
    }

    const novoItem = document.createElement("li") // cria um novo item

    novoItem.classList.add("list-group-item") // adiciona a classe para o novo item da lista

    const conteudo = document.createTextNode(tarefa.value) // cria um conteudo com base na entrada do usuario

    novoItem.appendChild(conteudo) // adiciona o conteudo para a o novo item da lista

    lista.insertBefore(novoItem, lista.children[0]) // adiciona o novo item no DOM na posicao 0 da lista

}

botao.addEventListener("click", function () { // espera o clique do usuario
    if (tarefa.value.length != 0) { // verifica se existe algum valor na entrada de texto
        mostrarLista() // chama a funcao mostrarLista
    }
})

tarefa.addEventListener("keypress", function (t) { // verifica qual tecla esta sendo pressionada
    if (tarefa.value.length != 0) { // verifica se existe algum valor na entrada de texto
        if (t.code == "NumpadEnter" || t.code == "Enter") { // se a tecla pressionada for enter chama a funcao mostrarLista
            mostrarLista() // chama a funcao mostrarLista
        }
    }
});

lista.onclick = function (e) { // pega posicao quando clicar em algum item da lista
    e.target.classList.toggle("active") // deixa ativo caso o campo nao estaja ativo, e deixa desativado caso esteja ativado
}

