/* Função para exibir a saudação. 
   Tente não se perder com as quatro opções disponíveis.
*/
function apresentarSaudacao() {
    // Variável que captura o que você selecionou no menu
    let idioma = document.getElementById("escolhaIdioma").value;
    
    // Variável para armazenar a frase que será jogada na tela
    let saudacao = "";

    // Switch case: a forma mais organizada de lidar com suas escolhas
    switch (idioma) {
        case "portugues":
            saudacao = "Olá! Como vai você?";
            break;
        case "ingles":
            saudacao = "Hello! How are you?";
            break;
        case "espanhol":
            saudacao = "¡Hola! ¿Cómo estás?";
            break;
        case "frances":
            saudacao = "Salut! Comment ça va?";
            break;
        default:
            saudacao = "Selecione algo válido, por favor.";
    }

    // Exibe o resultado no parágrafo do HTML para ficar visível
    document.getElementById("mensagemSaudacao").innerHTML = saudacao;

    // Registra no console para ficar registrado que o código trabalhou
    console.log("Saudação disparada para o idioma: " + idioma);
}