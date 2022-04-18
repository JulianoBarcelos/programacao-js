function verificar() {
    var data = new Date()
    var anos = data.getFullYear()
    var fano = window.document.getElementById('txt1')
    var resultado = window.document.getElementById('resultado')
    if (fano.value == 0 || fano.value > anos) {
        window.alert('[ERRO] Preencha novamente o formulário')
    } else {
        var fsex = window.document.getElementsByName('sexo')
        var idade = anos - fano.value
        var genero = ''
        var imagem = window.document.getElementById('imagem')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 5) {
                imagem.src = 'bebe.png'
            } else if (idade <= 17) {
                imagem.src = 'homem jovem.png'
            } else if (idade <= 50) {
                imagem.src = 'homem adulto.png'
            } else { imagem.src = 'idosos.png' }
        }
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade <= 5) {
                imagem.src = 'bebe.png'
            } else if (idade <= 17) {
                imagem.src = 'mulhoer jovem.png'
            } else if (idade <= 50) {
                imagem.src = 'mulher adulta.png'
            } else { imagem.src = 'idosos.png' }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(imagem)
    }

}