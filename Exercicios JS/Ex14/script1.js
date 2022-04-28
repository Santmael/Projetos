
function carregar (){
    
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

msg.innerHTML = `${hora}:${minutos}`

if(hora >=0 && hora < 12){
    img.src ="../imagem/876047.jpg"
    document.body.style.background ="#FFB6C1"
}else if (hora >= 12 && hora<=18){
    img.src="../imagem/203530.jpg"
    document.body.style.background ="#3b2949"
}else {
    img.src="../imagem/881790.jpg"
    document.body.style.background ="#1C1C1C"
 }
}
