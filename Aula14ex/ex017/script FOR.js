function calcular() {
    var num = window.document.getElementById('tabuada1')
    var tab = window.document.getElementById('tabuada2')
    if (num.value.length == 0) {
        window.alert('[ERRO]')
    } else {
        var a = Number(num.value)
        tab.innerHTML = ` `        
        for (var c = 1; c <= 10; c++) {
            var item = window.document.createElement('option')
            item.innerHTML = `${a} x ${c} = ${c*a}` // pode usar tbm o item.text
            tab.appendChild(item)
        }
    }
}

