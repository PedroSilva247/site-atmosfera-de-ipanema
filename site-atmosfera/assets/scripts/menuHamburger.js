
let menuOpened = false
let bottomNav = document.getElementById('bottom-nav')
    let topNav = document.getElementById('top-nav')
    let nav = document.getElementById('nav')
    let listMenuHamburger = document.getElementById('list-menu-hamburger')

function closeMenu(page) {
    setTimeout(() => {
            
        listMenuHamburger.style.display = 'none'

    }, 350)
    setTimeout(() => {
        topNav.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.66) 10.87%, rgba(0, 0, 0, 0.39) 44.29%, rgba(0, 0, 0, 0.39) 93.6%)" + page == "contato" ? ", url(../images/atmosfera-foto-frente.png)":""

    }, 400)
    listMenuHamburger.style.transform = "translateY(-300px)"
    bottomNav.style.height = "0"
    
    menuOpened = false
}

function openMenu() {
    topNav.style.background = "#524B45"
    setTimeout(() => {
        listMenuHamburger.style.display = 'flex'
    },350)
    setTimeout(() => {
        bottomNav.style.height = "235px"
        listMenuHamburger.style.transform = "translateY(0)"
    }, 400)

    menuOpened = true
}


function menu(page) {
    
    if (menuOpened) {
        closeMenu(page)
    } else {
        openMenu()
    }
}

let width = document.body.clientWidth

setInterval(() => {
    
    if (document.body.clientWidth >= 850 && menuOpened) {
        closeMenu()
    }
},200)