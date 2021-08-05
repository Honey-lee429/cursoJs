
var num = document.querySelector('#num')
var button = document.querySelector('#btn').addEventListener('click', tabuada)
var mostra = document.getElementById('seltab')

function tabuada() {
    let n = Number(num.value)
    if (n == 0) {
        alert('Insira um número maior que zero')
    } else {
        mostra.innerHTML = ''
        for (let t = 0; t <= 10; t++) {
            //mostra.innerHTML += `${t} x ${n} = ${t*n} <br>` não funcionou
            let item = document.createElement('option')
            item.text = `${t} x ${n} = ${t*n}`
            mostra.appendChild(item)
        }
    }      
}
 