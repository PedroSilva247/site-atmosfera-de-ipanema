let divLinhaSelecionado = document.querySelector("div#div-linha-selecionado")

let tituloEscolha = document.querySelector("h1#titulo-escolha")
let textoEscolha = document.querySelector("p#texto-escolha")
let botaoEscolha = document.querySelector("button#botao-escolha")



function linhaEsquerda() {
    divLinhaSelecionado.style.transform = "translateX(-100%)"

    tituloEscolha.style.opacity = "0%"
    textoEscolha.style.opacity = "0%"
    botaoEscolha.style.opacity = "0%"
    
    let left = setTimeout(() => {
        tituloEscolha.innerHTML = "Realize um evento"
        textoEscolha.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsa soluta nisi, blanditiis necessitatibus molestias a. Facere quos autem nisi consequuntur hic, neque deserunt optio? Saepe eligendi amet ex nihil, corporis doloribus. Enim libero molestias tenetur repellat. "
        botaoEscolha.innerHTML = "Saber mais detalhes"
    }, 200)
    
    let left1 = setTimeout(() => {
        tituloEscolha.style.opacity = "100%"
        textoEscolha.style.opacity = "100%"
        botaoEscolha.style.opacity = "100%"
    }, 250)
    
}
function linhaCentro() {
    divLinhaSelecionado.style.transform = "translateX(0%)"

    tituloEscolha.style.opacity = "0%"
    textoEscolha.style.opacity = "0%"
    botaoEscolha.style.opacity = "0%"
    
    let center = setTimeout(() => {
        tituloEscolha.innerHTML = "Consulte nosso cardápio"
        textoEscolha.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempora delectus velit consequatur modi laudantium animi voluptatem atque quasi adipisci nesciunt, provident, alias quaerat qui cumque ratione sunt ipsa doloremque! Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        botaoEscolha.innerHTML = "Consultar cardápio"
    }, 200)
    
    let center1 = setTimeout(() => {
        tituloEscolha.style.opacity = "100%"
        textoEscolha.style.opacity = "100%"
        botaoEscolha.style.opacity = "100%"
    }, 250)
    
}

function linhaDireita() {
    divLinhaSelecionado.style.transform = "translateX(100%)"

    tituloEscolha.style.opacity = "0%"
    textoEscolha.style.opacity = "0%"
    botaoEscolha.style.opacity = "0%"
    
    let right = setTimeout(() => {
        tituloEscolha.innerHTML = "Reserve sua mesa"
        textoEscolha.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem voluptatibus delectus quo voluptatum, ducimus ullam consequuntur veniam dolore laborum vel quae voluptate officia impedit atque aliquid soluta dignissimos eveniet ipsa aspernatur perspiciatis alias repellendus."
        botaoEscolha.innerHTML = "Enviar mensagem"
    }, 200)
    
    let right1 = setTimeout(() => {
        tituloEscolha.style.opacity = "100%"
        textoEscolha.style.opacity = "100%"
        botaoEscolha.style.opacity = "100%"
    }, 250)
}
linhaCentro()






function scrollToRight() {
    let galeria = document.getElementById('container-fotos-sec5')
    let width = galeria.clientWidth
    console.log(width)
    galeria.scrollLeft += width/4
}
function scrollToLeft() {
    let galeria = document.getElementById('container-fotos-sec5')
    let width = galeria.clientWidth
    console.log(width)
    galeria.scrollLeft -= width/4
}