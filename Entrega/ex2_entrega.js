// 2. Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.

const readline = require("readline-sync");

const temperaturaFahrenheit = parseFloat(readline.question("Digite a temperatura em Fahrenheit "));

const temperaturaCelsius =  (temperaturaFahrenheit - 32) * 5 / 9 

console.log(`${temperaturaCelsius}ºC`)