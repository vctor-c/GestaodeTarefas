const tarefa = document.querySelector("#tarefa")
const botao = document.querySelector("#botao")
const exibirLista = document.querySelector("#exibirLista")
const lista = document.querySelector("#lista")

function mostrarLista() {
    if (tarefa.value.length != 0) { // verifica se existe algum valor no entrada de texto
        
        // deixa a div visivel
        exibirLista.classList.remove("d-none")

        // cria um novo item
        const novoItem = document.createElement("li");

        // adiciona a classe para o novo item da lista
        novoItem.classList.add("list-group-item")

        // cria um conteudo com base na entrada do usuario
        const conteudo = document.createTextNode(tarefa.value);

        // adiciona o conteudo para a o novo item da lista
        novoItem.appendChild(conteudo);

        // adiciona o novo item no DOM na posicao 0 da lista
        lista.insertBefore(novoItem, lista.children[0]);

    }
}

// chama a funcao mostrarLista ao clicar no botao
botao.addEventListener("click", mostrarLista)

// verifica qual tecla esta sendo precionada
tarefa.addEventListener("keypress", function (t) {

    if (t.code == "NumpadEnter" || t.code == "Enter") { // se a tecla precionada for enter chama a funcao mostrarLista
        mostrarLista()
    }
});

