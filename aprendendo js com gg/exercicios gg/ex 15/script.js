function testar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('ERROU! Digite corretamente, pra obter um resultado preciso')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Sexo Masculino'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'garoto.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemH.jpg')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adultoH.jpg')
            } else {
                // idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else {
            genero = 'Sexo Feminino'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'garota.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemF.jpg')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adultaF.jpg')
            } else {
                // idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        // res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos.`
        res.appendChild(img)
        // res.innerHTML = `Idade calculada: ${idade} anos`
    }
}