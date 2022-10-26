


function calcularImc() {

    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let resposta = document.getElementById("imc")

    peso = parseFloat(peso)
    altura = parseFloat(altura)
    
    const resultado = peso / (altura * altura)
    resposta.innerText = `Imc Calculado: ${resultado.toFixed(2)}\n `
    estadoDeSaude(resultado)
    

}



function estadoDeSaude(resultado) {
    let resposta = document.getElementById("estadoSaude")
    if (resultado < 18.5) {
        resposta.innerText = "Estado Fisico: Abaixo do peso"
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        resposta.innerText = "Estado Fisico: Peso normal"
    } else if (resultado >= 25 && resultado <= 29.9) {
        resposta.innerText = "Estado Fisico: Sobrepeso"
    } else if (resultado >= 30 && resultado <= 34.9) {
        resposta.innerText = "Estado Fisico: Obesidade grau 1"
    } else if (resultado >= 35 && resultado <= 39.9) {
        resposta.innerText = "Estado Fisico: Obessidade de grau 2"
    } else if (resultado >= 40) {
        resposta.innerText = "Estado Fisico: Obessidade de grau 3"
    }
}