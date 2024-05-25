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
