topNav = document.getElementById("top-nav")


window.addEventListener('scroll', () => {
    if(topNav.style.background != "rgb(82, 75, 69)") {
        console.log(topNav.style.background)
        if(window.scrollY < 50) {
            topNav.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.66) 10.87%, rgba(0, 0, 0, 0.39) 44.29%, rgba(0, 0, 0, 0.39) 93.6%), url(../assets/images/atmosfera-foto-frente.png) center"
        } else {
            topNav.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.66) 10.87%, rgba(0, 0, 0, 0.39) 44.29%, rgba(0, 0, 0, 0.39) 93.6%)"
        }
    }
    
}) 



