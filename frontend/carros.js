/* Função que utiliza o do-while para percorrer a lista. 
   Lembrando que o do-while sempre executa a primeira vez antes de perguntar qualquer coisa.
*/
function percorrerCarros() {
    // 1. Utilize a estrutura do-while para percorrer uma lista predefinida de carros.
    const listaDeCarros = ["Fusca", "Civic", "Uno", "Corolla", "Ferrari"];
    let i = 0;
    let desejaContinuar = true;

    do {
        // 2. Mostrar um carro por iteração e perguntar se deseja continuar para o próximo.
        // O confirm retorna true para OK e false para Cancelar.
        desejaContinuar = confirm("Carro: " + listaDeCarros[i] + "\nDeseja ver o próximo veículo?");

        i++;

        // Verificação extra para não tentar ler um carro que não existe na lista.
        if (i >= listaDeCarros.length) {
            alert("A lista chegou ao fim.");
            break; 
        }

    // 3. Parar o loop quando o usuário decidir não continuar.
    } while (desejaContinuar);

    console.log("Navegação encerrada pelo usuário.");
}