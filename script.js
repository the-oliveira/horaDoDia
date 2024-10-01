function carregar() {
    var mensagem = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var horaatual = data.getHours()
    //horaatual = 19
    //mensagem.innerHTML = `Agora são ${horaatual} horas.`

    if (horaatual >= 5 && horaatual < 12) {
        // Bom Dia!
        img.src = 'img/foto-manha.jpg'
        document.body.style.background = '#0b9aa0'
        mensagem.innerHTML = `Bom dia! Agora são ${horaatual} horas...`

        
    } else if (horaatual >= 12 && horaatual <= 18){
        //Boa tarde!
        img.src = 'img/foto-tarde.jpg'
        document.body.style.background = '#a6663e'
        mensagem.innerHTML = `Boa tarde! Agora são ${horaatual} horas...`

    } else {
        //Boa noite!
        img.src = 'img/foto-noite.jpg'
        document.body.style.background = '#0e3a3c'
        mensagem.innerHTML = `Boa noite! Agora são ${horaatual} horas...`
    }
}

