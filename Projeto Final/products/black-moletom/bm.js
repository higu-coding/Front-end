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
    }
})

// Parte abaixo é colocando o produto no carrinho
// FIZ COM A AJUDA DO CHAT GPT, estava perdido
const nameProduct = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const quantity = document.querySelector('.quantity');
const addCart = document.querySelector('.btn-addcart');
const tbody = document.querySelector('.popup-content .sectionCart tbody'); // Seleciona o tbody correto
const subtotalSpan = document.querySelector('.infos > div:nth-child(1) span:nth-child(2)'); // Subtotal no "aside"
const totalSpanFooter = document.querySelector('aside footer span:nth-child(2)'); // Total no footer


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

// Parte acima é do popup -----------------------------------------------------------------------
