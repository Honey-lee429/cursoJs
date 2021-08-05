let year = document.querySelector('input#ano')
let text = document.querySelector('div#texto')
let btn = document.querySelector('.btn').addEventListener('click', result)
let data = new Date()
let anoAtual = data.getFullYear()

function result() {
    if (year.value == 0 || year.value > anoAtual) {
        text.innerHTML = 'ano inválido' 
    
    } else {
        var fgen = document.getElementsByName('gender')
        var idade = anoAtual - Number(year.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //atribuindo um id='foto' pelo javaScript

        if (fgen[0].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/mcrianca.jpg')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'image/mjovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'image/madulta.jpg')
            } else if (idade >= 50 && idade < 150) {
                img.setAttribute('src', 'image/midosa.jpg')
            }
        } else {
            genero = 'homem'
             if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/hcrianca.jpg')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'image/hjovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'image/hadulto.jpg')
            } else if (idade >= 50 && idade < 150) {
                img.setAttribute('src', 'image/hidoso.jpg')
            }
        }  

        text.style.textAlign = 'center'
        text.innerHTML = `Detectamos ${genero} com ${idade} anos`
        text.appendChild(img)
    }
}