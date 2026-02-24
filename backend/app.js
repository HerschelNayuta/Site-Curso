// Importando as funções porque digitar "a + b" diretamente é muito mainstream.
import { somar, subtrair, multiplicar, dividir } from './calculadora.js';

const x = 10;
const y = 5;

console.log("--- Executando operações extremamente complexas ---");

// Testando a soma (espero que o resultado não te surpreenda)
console.log(`Soma de ${x} e ${y}:`, somar(x, y));

// Testando a subtração (útil para calcular o que sobra do seu salário)
console.log(`Subtração de ${x} e ${y}:`, subtrair(x, y));

// Testando a multiplicação (escala como o ego de um dev sênior)
console.log(`Multiplicação de ${x} e ${y}:`, multiplicar(x, y));

// Testando a divisão
console.log(`Divisão de ${x} e ${y}:`, dividir(x, y));

// Testando a inteligência do usuário
console.log("Tentando dividir por zero:", dividir(10, 0));

console.log("--- Fim do show. Agora volte para o trabalho de verdade. ---");