
// var idade = 69
// console.log(`Voce tem ${idade} anos!`)
// if(idade < 16) {
//     console.log('Não vota')
// } else{
//     if (idade < 18 || idade > 65) {
//         console.log('voto opcional')
//     } else{
//         console.log('vota')
//     }
// }

// var agora = new Date()
// var hora = agora.getHours()
// console.log(`Agora são exatamente ${hora} horas`)
// if (hora < 12) {
//     console.log('Bom dia!')
// } else if (hora <= 18) {
//     console.log('Boa tarde!')
// } else {
//     console.log('Boa noite!')
// }

var agora = new Date()
var diaSem = agora.getDay()
/*
domingo
segunda
terça
quarta
quinta
sexta
sabado
*/

// console.log(diaSem)



switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
    default:
        console.log('[erro] dia invalido!')
}