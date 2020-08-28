// 5. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 


let read = require('readline-sync')

let num = parseFloat(read.question("Digite um valor: ")) 

let somaProgressiva = 0

function soma(num){
    for (i = 1; i < num; i++){
        somaProgressiva +=i
    }
    console.log (`a soma progressiva do seu número é ${somaProgressiva}`)
}
soma(num)