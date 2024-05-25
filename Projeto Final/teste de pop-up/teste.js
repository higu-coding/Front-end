const button = document.querySelector('.cart')
const modal = document.querySelector('dialog')
const buttonClose = document.querySelector('.close')

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}