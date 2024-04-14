const btn = document.querySelector('#sendInfos');

btn.addEventListener('click', function(e){
    e.preventDefault()

    const name = document.querySelector('#name')
    const nameValue = name.value

    const addres = document.querySelector('#addres')
    const addresValue = addres.value

    const operation = document.querySelector('#operation')
    const operationValue = operation.value

    const time = document.querySelector('#time')
    const timeValue = time.value

    console.log(nameValue)
    console.log(addresValue)
    console.log(operationValue)
    console.log(timeValue)
})

