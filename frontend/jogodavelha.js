/* Variáveis globais para controlar o estado do jogo, 
   já que o código não tem memória de curto prazo sozinho. 
*/
let jogadorAtual = "X";
let jogoAtivo = true;
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

// As combinações que fazem alguém ganhar, caso tenhas esquecido as regras básicas
const combinacoesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

function fazerJogada(indice) {
    // Verifica se a célula está vazia e se o jogo ainda não acabou
    if (tabuleiro[indice] === "" && jogoAtivo) {
        tabuleiro[indice] = jogadorAtual;
        
        // Atualiza a interface para o utilizador ver que algo aconteceu
        const celulas = document.querySelectorAll(".celula");
        celulas[indice].innerText = jogadorAtual;

        verificarResultado();
    }
}

function verificarResultado() {
    let vitoria = false;

    // Percorre as combinações para ver se algum iluminado ganhou
    for (let i = 0; i < combinacoesVitoria.length; i++) {
        const [a, b, c] = combinacoesVitoria[i];
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            vitoria = true;
            break;
        }
    }

    if (vitoria) {
        document.getElementById("status").innerText = "O jogador " + jogadorAtual + " venceu!";
        alert("Parabéns ao jogador " + jogadorAtual + ". O outro que treine mais.");
        jogoAtivo = false;
        return;
    }

    // Verifica se deu empate (velha), se não houver mais espaços vazios
    if (!tabuleiro.includes("")) {
        document.getElementById("status").innerText = "Empate! Deu velha.";
        alert("Ninguém ganhou. Que perda de tempo.");
        jogoAtivo = false;
        return;
    }

    // Alterna o jogador para a próxima jogada
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    document.getElementById("status").innerText = "Vez do jogador: " + jogadorAtual;
}

function reiniciarJogo() {
    // Reseta tudo para o estado inicial porque alguém quer tentar de novo
    jogadorAtual = "X";
    jogoAtivo = true;
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("status").innerText = "Vez do jogador: X";
    
    // Limpa visualmente as células do tabuleiro
    document.querySelectorAll(".celula").forEach(celula => celula.innerText = "");
    console.log("Jogo reiniciado. Tenta não empatar outra vez.");
}