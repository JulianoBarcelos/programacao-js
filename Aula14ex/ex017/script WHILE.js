function calcular() {
    var num = window.document.getElementById('tabuada1')
    var tab = window.document.getElementById('tabuada2')
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var a = Number(num.value)
        var c = 1
        tab.innerHTML = `` //antes de começar a tabuada, a gente limpa a área de tabuada
        while (c<=10){
            var item = window.document.createElement('option')// Você precisa criar um elemento dentro da lista e para criar qualquer elemento dentro de JS, faz isso aí !
            item.text = `${a} x ${c} = ${a*c}`
            tab.appendChild(item)// Você precisa adicionar um elemento filho. Inserir a tabuada na lista, ou seja, no select   
            c++
        }
    
    }

}
