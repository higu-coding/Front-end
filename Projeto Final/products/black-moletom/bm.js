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

const qty = document.querySelector('.qty-oncart')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

let contador2 = 1

qty.innerHTML = 1

plus.addEventListener('click', (e) => {
    qty.innerHTML = contador2+=1
})

minus.addEventListener('click', (e) => {
    qty.innerHTML = contador2-=1
})

// abaixo vai estar a parte para atualizar os valores

const cartProducts = document.getElementsByClassName('cart-product')
let totalPrice = document.querySelector('.total-price')

for (let i = 0; i < cartProducts.length; i++) {
    const price = cartProducts[i].getElementsByClassName('price')[0].innerText.replace(",", ".")
    
    totalPrice.innerHTML = (price*contador2)
}
console.log(totalPrice)

// Parte acima é do popup
