let input = document.querySelector('[data-inum]')
let num = Number(input.value)
let selec = document.querySelector('[data-selecnum]')
let vetor = []
let res = document.querySelector('[data-res]')

function checkNum(n){
    if (Number(n) >= 1 && Number(n) <= 100 ){
        return true
    } else{
        return false
    }
}
function checkLista(n,l){
    if (l.indexOf(Number(n)) == -1){
        return true
    } else {
        return false
    }
}
function addBt(){
    if (checkNum(input.value) && checkLista(input.value,vetor)){
        vetor.push(Number(input.value))
        let item = document.createElement("option")
        item.text = `Valor ${input.value} foi adicionado.`
        selec.appendChild(item)
        res.innerHTML = ''

    } else{
        alert('Nop, invalido ou ja tem.')
    }
    input.value = ''
    input.focus()
}
function finalizar() {
    if (vetor.length == 0){
        alert('Por favor, adicione algum valor para finalizar!')
    } else {
        let elementosLista = lista.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        for (let pos in vetor){
            soma += vetor[pos]
            if(vetor[pos]>maior)
            maior = vetor[pos]
            if(vetor[pos]<menor)
            menor = vetor[pos]
        }
        let media = soma / elementosLista
        res.innerHTML = ''
        res.innerHTML += `<p>A lista tem ${elementosLista} elementos.</p>`
        res.innerHTML += `<p>O maior valor é o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é o ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média é de ${media}.</p>`
    }
}