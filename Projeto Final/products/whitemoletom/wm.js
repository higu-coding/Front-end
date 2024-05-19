const btnQuantity = document.querySelector('.quantity')
const btnAumentar = document.querySelector('.aumentar')
const btnDiminuir = document.querySelector('.diminuir')

let contador = 1

btnAumentar.addEventListener('click', (e) => {
    btnQuantity.innerHTML = contador++
})

btnDiminuir.addEventListener('click', (e) => {
    btnQuantity.innerHTML = contador--
})