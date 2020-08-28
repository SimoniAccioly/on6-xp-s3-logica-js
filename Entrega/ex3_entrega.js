//3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

const readline = require("readline-sync");

console.log("Calculadora de metros para milímetros");

const valor = parseInt(readline.question("Digite um valor em metro "));

const resultado = valor / 0.0010000;

console.log(`${valor} metros equivale a ${resultado} milimetros`);