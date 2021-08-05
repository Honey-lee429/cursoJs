//EXERCÍCIO 1
// var nome = window.prompt('Qual seu nome?')
// document.write('É um grande prazer em te conhecer, ' + nome + '!' + 'e seu nome tem ' + nome.length + ' letras')

// var n1 = (window.prompt('digite um nº')) //prompt retorna um string

// var n2 = Number.parseInt(window.prompt('digite outro nº')) //parseInt converte string em números inteiros e parseFloat para nº reais e o modo simplificado Number(n) já entende de qual conjunto de elementos o número pertence
// var soma = n1 + n2

// window.alert(`A soma dos números entre ${n1} e ${n2} é ${soma}`) // template string, uma outra forma de concatenar usando crase e ${n}

//EXERCÍCIO 2

// var velo = document.querySelector('input#textv')
// var button = document.querySelector('input#btn').addEventListener('click', result)
// var res = document.getElementById('result')

// function result() {
//     if (velo.value > 60) {
//         res.innerHTML = 'MULTADO'
//     } else {
//         res.innerHTML = `PARABÉNS, sua velocidade foi ${velo.value}`
//     }   
// }

//EXERCÍCIO 3

let nasc = document.querySelector('input#nacionalidade')
let btn = document.querySelector('input#btn').addEventListener('click', descobrir)
let resultado = document.querySelector('div#result')

function descobrir() {
    if (nasc.value == 'Brasil' || nasc.value == 'brasil') {
        resultado.innerHTML = 'vc é brasileiro'
     } else {
        resultado.innerHTML = 'vc é estrangeiro'
    }
}

//EXERCÍCIO 4

// const now = new Date();
// let dayWeek = now.getDay()

// switch (dayWeek) {
//     case 0:
//         console.log('domingo')
//         break;
//     case 1:
//         console.log('segunda-feira')
//         break;
//     case  2:
//         console.log('hj é terça-feira')
//         break;
//     case  3:
//         console.log('quarta-feira')
//         break;
//     case  4:
//         console.log('quinta-feira')
//         break;
//     case  5:
//         console.log('sexta-feira')
//         break;
//     case  6:
//         console.log('sabado')
//         break;
//     default:
//         console.log('[ERRO] dia inválido')
//         break;
// }

