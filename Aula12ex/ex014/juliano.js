function carregar() {
    var a = window.document.getElementById('msg')
    var b = window.document.getElementById('img')
    var c = new Date()
    var d = c.getHours()
    a.innerHTML = `Agora são ${d} horas`
    if (d > 0 && d < 12) {
        b.src = 'manhã pqna.png'
    }
    else if ( d >=12 && d < 18) {
        b.src = 'tarde.png'
    }
    else { b.src = 'noite.png'}
        
}