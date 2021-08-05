let inicio =document.querySelector('#inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let btn = document.getElementById('btn').addEventListener('click', verificar)
let text = document.getElementById('resultado')

function verificar() {
    if (fim.value == 0 || passo.value == 0) {
        alert('Campos fim e passo não podem ser iguais a zero')
    }
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    
    if (i<f) {
        //Contagem crescente
        for(let c = i; c <= f ; c += p){
            text.innerHTML += ` ${c}  \u{21AC}`
            //console.log(c) 
        }
    } else {
        //Contagem regressiva
        for (let c = i; c >= f; c-= p){
            text.innerHTML += ` ${c} \u{21AC}`
        }
    }
   
    text.innerHTML += `\u{1F51A}` //unicode só funciona entre crase no js
}

