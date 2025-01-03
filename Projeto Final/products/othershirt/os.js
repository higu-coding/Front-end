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

//Parte abaixo é colocando o produto no carrinho

const nameProduct = document.querySelector('.product-name')
const productPrice = document.querySelector('.product-price')
const quantity = document.querySelector('.quantity')
const addCart = document.querySelector('.btn-addcart')
const tbody = document.querySelector('.popup-content .sectionCart tbody')
const subtotalSpan = document.querySelector('.infos > div:nth-child(1) span:nth-child(2)')
const totalSpanFooter = document.querySelector('aside footer span:nth-child(2)')

addCart.addEventListener('click', () => {
    addProductToCart()
}) 

function addProductToCart() {
    const newRow = document.createElement('tr')
    newRow.classList.add('cart-product')

    newRow.innerHTML = `
        <td>
            <div class="product-oncart">
                <img class="imgProd" src="../../images/camisa-manga-curta2-p.jpeg" alt="">
                <div class="info">
                    <div class="name">${nameProduct.textContent}</div>
                    <div class="category">Roupas</div>
                </div>
            </div>
        </td>
        <td><span class="price">${productPrice.textContent}</span></td>
        <td>
            <div class="qty">
                <button class="minus">-</button>
                <span class="qty-oncart">${quantity.textContent}</span>
                <button class="plus">+</button>
            </div>
        </td>
        <td>R$ <span class="total price">${calculateTotal(quantity.textContent, productPrice.textContent)}</span></td>
        <td>
            <button class="remove-product"><i class='bx bx-x'></i></button>
        </td>
    `
    tbody.appendChild(newRow)
    setupRowEvents(newRow)
    updateCartTotal()
}

function calculateTotal(quantity, price){
    const priceValue = parseFloat(price.replace('R$', '').replace(',', '.'))
    return (quantity * priceValue).toFixed(2).replace('.', ',')
}

function setupRowEvents(row) {
    const minusButton = row.querySelector('.minus');
    const plusButton = row.querySelector('.plus');
    const removeButton = row.querySelector('.remove-product');
    const qtySpan = row.querySelector('.qty-oncart');
    const totalSpan = row.querySelector('.total.price');
    const priceSpan = row.querySelector('.price');

    let qty = parseInt(qtySpan.textContent)
     
    plusButton.addEventListener('click', () => {
        qty++
        qtySpan.textContent = qty
        totalSpan.textContent = calculateTotal(qty, priceSpan.textContent)
        updateCartTotal()
    })

    minusButton.addEventListener('click', () => {
        if (qty > 1){
            qty--
            qtySpan.textContent = qty
            totalSpan.textContent = calculateTotal(qty, priceSpan.textContent)
            updateCartTotal()
        }
    })

    removeButton.addEventListener('click', () => {
        row.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    let total = 0

    document.querySelectorAll('.cart-product .total.price').forEach((totalSpan) => {
        const totalValue = parseFloat(totalSpan.textContent.replace(',', '.'))
        total += totalValue
    })

    subtotalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`
    totalSpanFooter.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`
}

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
