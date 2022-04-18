function contar() {
    var inicio = window.document.getElementById("number1")
    var fim = window.document.getElementById("number2")
    var passo = window.document.getElementById("number3")
    var res = window.document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        var a = Number(inicio.value)
        var b = Number(fim.value)
        var d = Number(passo.value)
        if (d <= 0) {
            window.alert('Passo inválido! Considere passo = 1')
            d = 1
        }
        if (a < b) {
            // Contagem crescente
            for (var c = a; c <= b; c += d) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else if (a > b) {
            // Contagem regressiva
            for (var c = a; c >= b; c = c - d) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
    }
    res.innerHTML += ` \u{26F3}`
}



