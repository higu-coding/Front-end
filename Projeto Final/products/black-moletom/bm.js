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
const addCartButton = document.querySelector('.btn-addcart');
const nameProduct = document.querySelector('.product-name').textContent;
const productPrice = document.querySelector('.product-price').textContent;
const productImage = '../../images/moletom-preto-p.jpeg'

const cartTableBody = document.querySelector('tbody');
const asideTotalSpan = document.querySelector('.infos span:last-child');
const footerTotalSpan = document.querySelector('footer span:last-child');
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
})

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cartTableBody.innerHTML = ''
    
    cart.forEach(product => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <div class="product-oncart">
                    <img src="${product.image}" class="imgProd" alt="${product.name}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                    </div>
                </div>
            </td>
            <td>R$ ${product.price.toFixed(2).replace('.', ',')}</td>
            <td>
                <div class="qty">
                    <button class="minus">-</button>
                    <span class="qty-oncart">${product.quantity}</span>
                    <button class="plus">+</button>
                </div>
            </td>
            <td>R$ ${(product.price * product.quantity).toFixed(2).replace('.', ',')}</td>
            <td>
                <button class="remove-product"><i class='bx bx-x'></i></button>
            </td>
        `
        setupRowEvents(row, product.name)
        cartTableBody.appendChild(row)
    })
    updateCartTotal()
 }

function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    asideTotalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`
    footerTotalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`
}

function setupRowEvents(row, productName) {
    const minusButton = row.querySelector('.minus');
    const plusButton = row.querySelector('.plus');
    const removeButton = row.querySelector('.remove-product');
    const quantitySpan = row.querySelector('.qty-oncart');

    minusButton.addEventListener('click', () => {
        updateProductQuantity(productName, -1);
    });

    plusButton.addEventListener('click', () => {
        updateProductQuantity(productName, 1);
    });

    removeButton.addEventListener('click', () => {
        removeProduct(productName);
    });
}

function updateProductQuantity(productName, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex > -1) {
        cart[productIndex].quantity += change;

        if (cart[productIndex].quantity < 1) {
            cart.splice(productIndex, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        renderCart();
    }
}

// Função para remover um produto do carrinho
function removeProduct(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);

    localStorage.setItem('cart', JSON.stringify(cart));

    renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);
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
