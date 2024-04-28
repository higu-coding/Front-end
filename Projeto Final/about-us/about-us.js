const sendInfos = document.querySelector('.btn-send')

sendInfos.addEventListener('click', (e) => {
    alert('Informações enviadas!')
})

const hamburger = document.querySelector(".hamburger")

const nav = document.querySelector(".nav")

hamburger.addEventListener('click', (e) => {
    nav.classList.toggle("active")
})