//  1. Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const readline = require("readline-sync");

const temperaturaCelsius = parseFloat(readline.question("Digite a temperatura em Celsius "));

const temperaturaFahrenheit = 9 * temperaturaCelsius / 5 + 32

console.log(`${temperaturaFahrenheit}ºF`)