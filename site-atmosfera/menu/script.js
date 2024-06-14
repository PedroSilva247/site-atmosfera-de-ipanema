let linhaSelecionadoEsq = document.querySelector("hr#linha-selecionado-esquerda")
let linhaSelecionadoMeio = document.querySelector("hr#linha-selecionado-meio")
let linhaSelecionadoDir = document.querySelector("hr#linha-selecionado-direita")

let tituloEscolha = document.querySelector("h1#titulo-escolha")
let textoEscolha = document.querySelector("p#texto-escolha")
let botaoEscolha = document.querySelector("button#botao-escolha")


function linhaEsquerda() {
    linhaSelecionadoEsq.style.opacity = "100%";
    linhaSelecionadoMeio.style.opacity = "0";
    linhaSelecionadoDir.style.opacity = "0";
    
    tituloEscolha.innerHTML = "Realize um evento"
    textoEscolha.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsa soluta nisi, blanditiis necessitatibus molestias a. Facere quos autem nisi consequuntur hic, neque deserunt optio? Saepe eligendi amet ex nihil, corporis doloribus. Enim libero molestias tenetur repellat. "
    botaoEscolha.innerHTML = "Saber mais detalhes"
}
function linhaCentro() {
    linhaSelecionadoEsq.style.opacity = "0";
    linhaSelecionadoMeio.style.opacity = "100%";
    linhaSelecionadoDir.style.opacity = "0";
    
    tituloEscolha.innerHTML = "Consulte nosso cardápio"
    textoEscolha.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempora delectus velit consequatur modi laudantium animi voluptatem atque quasi adipisci nesciunt, provident, alias quaerat qui cumque ratione sunt ipsa doloremque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
    botaoEscolha.innerHTML = "Consultar cardápio"
}
function linhaDireita() {
    linhaSelecionadoEsq.style.opacity = "0";
    linhaSelecionadoMeio.style.opacity = "0";
    linhaSelecionadoDir.style.opacity = "100%";

    tituloEscolha.innerHTML = "Reserve sua mesa"
    textoEscolha.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem voluptatibus delectus quo voluptatum, ducimus ullam consequuntur veniam dolore laborum vel quae voluptate officia impedit atque aliquid soluta dignissimos eveniet ipsa aspernatur perspiciatis alias repellendus. "
    botaoEscolha.innerHTML = "Enviar mensagem"
}
linhaCentro()