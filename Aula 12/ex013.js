var agora = new Date()
var diaDaSemana = agora.getDay()


switch(diaDaSemana) {
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
    case 4:
        console.log('Quinta')
    case 5:
        console.log('Sexta')
    case 6:
        console.log('Sábado')
    case 7:
        console.log('Domingo')
    default:
        console.log('[ERRO] Dia inválido')
        break
}
