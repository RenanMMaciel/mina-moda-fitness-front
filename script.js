// Navbar

const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// Product Page

const mainImage = document.getElementById("main-image")
const smallImage = document.getElementsByClassName("small-image")

smallImage[0].onclick = function () {
    mainImage.src = smallImage[0].src
}
smallImage[1].onclick = function () {
    mainImage.src = smallImage[1].src
}
smallImage[2].onclick = function () {
    mainImage.src = smallImage[2].src
}
smallImage[3].onclick = function () {
    mainImage.src = smallImage[3].src
}