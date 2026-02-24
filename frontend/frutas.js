// ... sua função apresentarSaudacao() continua aqui em cima ...

function processarFrutas() {
    /* 1. Criando um array chamado frutas com cinco itens. 
       Tente não escolher frutas muito complexas para não errar a escrita. */
    let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

    // 2. Exibindo o array completo. É só olhar o console, não tem mistério.
    console.log("2. Array completo:", frutas);

    /* 3. Acessando o terceiro item. 
       Lembrando (pela milésima vez) que arrays começam no índice 0, então o terceiro é o índice 2. */
    console.log("3. Terceiro item (índice 2):", frutas[2]);

    // 4. Alterando o segundo item (índice 1) para outra fruta.
    frutas[1] = "Morango";
    console.log("4. Array após alterar o segundo item:", frutas);

    /* 5. Adicionando mais duas frutas ao final. 
       O método é .push(), caso você tenha esquecido. */
    frutas.push("Abacaxi", "Pera");

    // 6. Exibindo todas as frutas, já que você quer ver o resultado final.
    console.log("6. Lista final de frutas:", frutas);
    
    alert("Lógica das frutas executada! Abra o console (F12) para ver o resultado, se for capaz.");
}