let lista = document.getElementById("listaVetor")
let vetor = new Array();


function adicionarVetor() {
    var numero = parseFloat(document.getElementById("txtnumeroAtual").value)
    //parseInt(Math.random()*100)

    if (isNaN(numero)) {
        alert('Por favor, Digite um Número.')
    }
    else if (vetor.includes(numero) || (numero > 100 || numero <= 0)) {
        alert('Esse Número já existe no vetor, ou o número não está entre 1 e 100.')
    } else {
        vetor.push(numero)

        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        lista.add(item)

        res.innerHTML = ''
    }

    document.getElementById("txtnumeroAtual").value = ''
    document.getElementById("txtnumeroAtual").focus()
}

function finalizar() {

    if (vetor.length == 0) {
        alert('A lista está vazia, adicione números antes de finalizar.')
    }
    else {
        let maiorNumero = vetor[0]
        let menorNumero = vetor[0]
        let somaValores = 0

        for (let pos in vetor) {
            somaValores += vetor[pos]
            if (vetor[pos] > maiorNumero) {
                maiorNumero = vetor[pos]
            }
            if (vetor[pos] < menorNumero) {
                menorNumero = vetor[pos]
            }
        }

        res.innerHTML = `O vetor é: ${vetor} <br><br>
        Ao todo, temos ${vetor.length} números cadastrados.<br><br>
        O maior valor informado é ${maiorNumero}<br><br>
        O menor valor informado é ${menorNumero}<br><br>
        Somando todos os valores, temos ${somaValores}<br><br>
        A média dos valores digitados é ${somaValores / vetor.length}.`;
    }

}