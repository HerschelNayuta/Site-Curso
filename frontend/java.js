function verificaAprovacao() {
    // 1. Captura o elemento
    let campoNota = document.getElementById("nota");
    
    // 2. Converte o valor para número
    let nota = parseFloat(campoNota.value);

    // 3. Validação simples: verifica se é um número válido
    if (isNaN(nota)) {
        alert("Por favor, digite uma nota válida.");
        return;
    }

    console.log("Nota inserida: ", nota);

    if (nota >= 7) {
        document.getElementById("resultado").innerHTML = "Aprovado";
        alert("Aprovado");
    } else {
        document.getElementById("resultado").innerHTML = "Reprovado";
        alert("Reprovado");
    }
}