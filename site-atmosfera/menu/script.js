let divLinhaSelecionado = document.querySelector("div#div-linha-selecionado")

let tituloEscolha = document.querySelector("h1#titulo-escolha")
let textoEscolha = document.querySelector("p#texto-escolha")
let botaoEscolha = document.querySelector("button#botao-escolha")

setIntervalCarousel(1)
let page = 1
let interval = setInterval(() => {
    setIntervalCarousel(page)
    if (page != 2) {
        page++
    } else {
        page = 0
    }
}, 5000)



function setIntervalCarousel(pageAtual) {
    
    switch (pageAtual) {
        case 0:
            changePage(1)
            pageAtual = 1
            break
        case 1:
            changePage(2)
            pageAtual = 2
            break
        case 2:
            changePage(0)
            pageAtual = 0
            break
    }
    
}



function changePage(page) {
    switch (page) {
        case 0:
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
            
            break
        case 1:
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
            break
        case 2:
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
            break
    }
                              
}
function linhaEsquerda() {
    clearInterval(interval)
    
    changePage(0)
    page = 0
    interval = setInterval(() => {
        setIntervalCarousel(page)
        if (page != 2) {
            page++
        } else {
            page = 0
        }
    }, 5000)
    
}
function linhaCentro() {
    
    clearInterval(interval)
    
    changePage(1)
    page = 1
    interval = setInterval(() => {
        setIntervalCarousel(page)
        if (page != 2) {
            page++
        } else {
            page = 0
        }
    }, 5000)
    
}

function linhaDireita() {
    
    clearInterval(interval)
    
    changePage(2)
    page = 2
    interval = setInterval(() => {
        setIntervalCarousel(page)
        if (page != 2) {
            page++
        } else {
            page = 0
        }
    }, 5000)
}
linhaCentro()
        





function scrollToRight() {
    let galeria = document.getElementById('container-fotos-sec5')
    let width = galeria.clientWidth
    console.log(width)
    galeria.scrollLeft += width/3
}
function scrollToLeft() {
    let galeria = document.getElementById('container-fotos-sec5')
    let width = galeria.clientWidth
    console.log(width)
    galeria.scrollLeft -= width/3
}

// ----------------- Menu Hambrguer ------------------




