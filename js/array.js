let rotulo = document.querySelector('#num')
let btnAdicionar = document.getElementById('btn-adicionar').addEventListener('click', adicionarNumero)
let mostraNumero = document.querySelector('#selopt')
//let btnVerificar = document.getElementById('btn-verificar').addEventListener('click', mostraResultado)
//let resultado = document.querySelector('#result')


function adicionarNumero() {
    num = Number(rotulo.value)
    let lista = []
    lista.push(num)

    if (num == 0 || num > 100){
        alert('Insira um número maior que 0 e menor que 100')
    }else if (lista.indexOf(num) != -1){ //-1 indica que o número digitado não foi encontrado 
        //mostraNumero.innerHTML += `${num} <br><br>`
        let see = document.createElement('option')
        see.text = `${num}`
        mostraNumero.appendChild(see)
    }else{
        alert('valor inválido ou já encontrado na lista')
    }
        
}



// function mostraResultado() {
//     mostraNumero.innerHTML = `Ao todo, temos ${rotulo.length} números cadastrados`

// }


// `O maior valor informado foi ${}`

// `O menor valor informado foi ${}`

// `Somando todos os valores, temos ${}`

// `A média dos valores digitados é ${}`
