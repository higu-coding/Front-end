const btnQuantity = document.querySelector('.quantity')
const btnAumentar = document.querySelector('.aumentar')
const btnDiminuir = document.querySelector('.diminuir')

let contador = 1

btnAumentar.addEventListener('click', (e) => {
    btnQuantity.innerHTML = contador+=1
})

btnDiminuir.addEventListener('click', (e) => {
    if(contador > 1) {
        contador--
        btnQuantity.innerHTML = contador
    }})

// Parte abaixo é colocando o produto no carrinho

const activeProduct = document.querySelector('.active-product')
const nameProduct = document.querySelector('.product-name')
const productPrice = document.querySelector('.product-price')
const quantity = document.querySelector('.quantity')
const addCart = document.querySelector('.btn-addcart')

addCart.addEventListener('click', (e) => {
    window.localStorage.setItem('nome',nameProduct.value)
    window.localStorage.setItem('preço',productPrice.value)
    window.localStorage.setItem('quantidade',quantity.value)
    console.log(nameProduct.textContent)
    console.log(productPrice.textContent)
    console.log(quantity.textContent)

})

// Parte acima é colocando o produto no carrinho

// Parte abaixo é do popup -----------------------------------------------------------------------

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
    if(contador2 > 1) {
        contador2--
        qty.innerHTML = contador2
    }
})

// abaixo vai estar a parte para atualizar os valores

const cartProducts = document.getElementsByClassName('cart-product')
let totalPrice = document.querySelector('.total-price')

for (let i = 0; i < cartProducts.length; i++) {
    const price = cartProducts[i].getElementsByClassName('price')[0].innerText.replace(",", ".")
    
    //totalPrice.innerHTML = (price*contador2)
}
//console.log(totalPrice)

// Parte acima é do popup -----------------------------------------------------------------------
