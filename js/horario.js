let msg = document.querySelector('.msg')
let foto = document.querySelector('img#foto-manha')
let data = new Date()
let hour = data.getHours()
let min = data.getMinutes()

function carregar () {
    msg.innerHTML = `Agora são ${hour}:${min}h`

    if (hour < 12) {
        foto.src = 'image/manha.jpg'
        document.body.style.backgroundColor = '#264eff'
    } else if (hour >= 12 && hour < 18) {
        foto.src = 'image/tarde.jpg'
        document.body.style.backgroundColor = '#f77f23'
    } else {
        foto.src = 'image/noite.jpg'
        document.body.style.backgroundColor = '#000000'
    }
}