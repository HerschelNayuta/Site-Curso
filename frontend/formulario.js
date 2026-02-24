/* Função de validação usando Regex (Expressões Regulares). 
   Se você não entender os símbolos abaixo, não se preocupe, o JavaScript entende.
*/
function validarFormulario() {
    // Captura dos valores
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;

    // 1. Regex para Email: básico que todo mundo deveria saber
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 2. Regex para Telefone: Formato brasileiro (DD) 99999-9999 ou 9999-9999
    const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    // 3. Regex para Senha Forte: 
    // No mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validação do Email
    if (!regexEmail.test(email)) {
        alert("E-mail inválido. Tente algo que pareça um endereço real.");
        return;
    }

    // Validação do Telefone
    if (!regexTelefone.test(telefone)) {
        alert("Telefone inválido. Use o formato (99) 99999-9999.");
        return;
    }

    // Validação da Senha
    if (!regexSenha.test(senha)) {
        alert("Senha fraca demais! O sistema exige mais esforço da sua parte.");
        return;
    }

    // Se chegar aqui, milagrosamente você acertou tudo
    alert("Formulário validado com sucesso! Seus dados não são um lixo.");
    console.log("Dados validados: ", { email, telefone, senha: "Oculta por segurança" });
}