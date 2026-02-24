// Aparentemente, o ensino fundamental falhou e precisamos de um módulo para isso.

// Soma dois números. Incrível, eu sei.
export const somar = (a, b) => a + b;

// Subtrai b de a. Tente não entrar em dívida técnica ou financeira.
export const subtrair = (a, b) => a - b;

// Multiplica os valores. Cuidado para não multiplicar seus problemas.
export const multiplicar = (a, b) => a * b;

// Divide a por b. 
export const dividir = (a, b) => {
    // Verificação para quem faltou na aula sobre "divisão por zero".
    if (b === 0) {
        return "Parabéns, você tentou quebrar o universo. Não se divide por zero.";
    }
    return a / b;
};