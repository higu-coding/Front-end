const btnQuantity = document.querySelector('.quantity')
const btnAumentar = document.querySelector('.aumentar')
const btnDiminuir = document.querySelector('.diminuir')

let contador = 1
btnQuantity.innerHTML = 1

btnAumentar.addEventListener('click', (e) => {
    btnQuantity.innerHTML = contador+=1
})

btnDiminuir.addEventListener('click', (e) => {
    btnQuantity.innerHTML = contador-=1
})

// Parte abaixo é do popup
const active = document.querySelector('.active')
const closePopup = document.querySelector('.close-popup')
const container = document.querySelector('#container')

active.addEventListener('click', () => {
    container.classList.add('active')
})

closePopup.addEventListener('click', () => {
    container.classList.remove('active')
})

// Parte acima é do popup
