// 4. Crie uma função com as seguintes características:
//    - A função deve receber 3 parâmetros.
//    - Se somente um argumento for passado, retorne o valor do argumento.
//    - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
//    - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
//    - Se nenhum argumento for passado, retorne "não recebeu parâmetro"


let readline = require('readline-sync')

let valor1 = parseFloat(readline.question('Digite um valor: '))

let valor2 = parseFloat(readline.question('Digite um valor: '))

let valor3 = parseFloat(readline.question('Digite um valor: '))

let resultado = analiseDeValores(valor1, valor2, valor3)

console.log(resultado)


function analiseDeValores(valor1, valor2, valor3) {
    if (!valor1 && !valor2 && !valor3) {
        return "Não recebeu parâmetro"
    }
    else if (valor1 && valor2 && valor3) {
        let calculo = (valor1 + valor2) / valor3
        return calculo
    }
    else if (valor1 && !valor2 && !valor3){
            return valor1
         }
         
    else if (!valor1 && valor2 && !valor3){
        return valor2
     }
     
    else if (!valor1 && !valor2 && valor3){
        return valor3
     }
    else{ 
        let soma = 0
        if (valor1 && valor2){
            soma = valor1 + valor2
        }
        else if (valor1 && valor3){
            soma = valor1 + valor3
        }
        else {
            soma = valor2 + valor3
        }
        return soma
    }

}
