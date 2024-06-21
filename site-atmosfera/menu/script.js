let tituloEscolha = document.querySelector("h1#titulo-escolha")
let textoEscolha = document.querySelector("p#texto-escolha")
let botaoEscolha = document.querySelector("button#botao-escolha")


function linhaEsquerda() {
    tituloEscolha.innerHTML = "Realize um evento"
    textoEscolha.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsa soluta nisi, blanditiis necessitatibus molestias a. Facere quos autem nisi consequuntur hic, neque deserunt optio? Saepe eligendi amet ex nihil, corporis doloribus. Enim libero molestias tenetur repellat. "
    botaoEscolha.innerHTML = "Saber mais detalhes"
}
function linhaCentro() {
    tituloEscolha.innerHTML = "Consulte nosso cardápio"
    textoEscolha.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempora delectus velit consequatur modi laudantium animi voluptatem atque quasi adipisci nesciunt, provident, alias quaerat qui cumque ratione sunt ipsa doloremque! Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    botaoEscolha.innerHTML = "Consultar cardápio"
}
function linhaDireita() {
    tituloEscolha.innerHTML = "Reserve sua mesa"
    textoEscolha.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem voluptatibus delectus quo voluptatum, ducimus ullam consequuntur veniam dolore laborum vel quae voluptate officia impedit atque aliquid soluta dignissimos eveniet ipsa aspernatur perspiciatis alias repellendus. "
    botaoEscolha.innerHTML = "Enviar mensagem"
}
linhaCentro()