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
const addCartButton = document.querySelector('.btn-addcart');
const productImage = '../../images/moletom-preto-p.jpeg'

// configurando o botao de adicionar ao carrinho

addCartButton.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const existingProductIndex = cart.findIndex(item => item.name === nameProduct)

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1
    } else {
        const newProduct = {
            name: nameProduct,
            price: parseFloat(productPrice.replace('R$', '').replace(',', '.')),
            quantity: 1,
            image: productImage
        }
        cart.push(newProduct)
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    renderCart()
    alert('Produto adicionado ao carrinho') // isso pode ser apagado
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

// Parte acima é do popup -----------------------------------------------------------------------
