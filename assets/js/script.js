function calcularIMC() {
    const peso = document.getElementById('peso-input').value
    const altura = document.getElementById('altura-input').value
    let res = document.getElementById('res')
    let imc = peso / altura ** 2
    if (imc < 17) {
        res.innerHTML = `O seu IMC ${imc.toFixed(2)} consta, <strong>muito abaixo do peso</strong>`
    } else if (imc >= 17 && imc <= 18.49) {
        res.innerHTML = `O seu IMC ${imc.toFixed(2)} consta, <strong>abaixo do peso</strong>`
    } else if (imc >= 18.5 && imc <= 24.99) {
        res.innerHTML = `O seu IMC ${imc.toFixed(2)} consta, <strong>peso normal</strong>`
    } else if (imc >= 25 && imc <= 29.99) {
        res.innerHTML = `O seu IMC ${imc.toFixed(2)} consta, <strong>acima do peso</strong>`
    } else if (imc >= 30 && imc <= 34.99) {
        res.innerHTML = `O seu IMC ${imc.toFixed(2)} consta, <strong>obesidade 1</strong>`
    } else if (imc >= 35 && imc <= 39.99) {
        res.innerHTML = `O seu IMC ${imc.toFixed(2)} consta, <strong>obesidade 2</strong>`
    } else if (imc >= 40) {
        res.innerHTML = `O seu IMC ${imc.toFixed(2)} consta, <strong>obesidade 3</strong>`
    } else if (peso == '' && altura == '') {
        res.innerHTML = `<strong>Digite as informações necessarias</strong>`
    }


    console.log(imc.toFixed(2))
}
document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        calcularIMC()
    }
})