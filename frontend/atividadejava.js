/* A função que faz o trabalho que a calculadora do Windows faria em dois segundos, 
   mas aqui estamos nós, automatizando o básico.
*/
function calcularPrecoFinal() {
    // Pegando os elementos do HTML porque o JS não adivinha o que você digitou
    const campoPreco = document.getElementById("precoOriginal");
    const campoDesconto = document.getElementById("porcentagemDesconto");

    // Convertendo texto para número, já que o JavaScript acha que tudo é string se você não avisar
    let preco = parseFloat(campoPreco.value);
    let porcentagem = parseFloat(campoDesconto.value);

    // Verificação de segurança para o caso de alguém tentar colocar preço negativo ou letras
    if (isNaN(preco) || isNaN(porcentagem) || preco <= 0 || porcentagem < 0) {
        // Alerta de erro para quem não sabe preencher um formulário simples
        alert("Erro: Tente inserir números que façam sentido matemático.");
        console.error("O usuário falhou em digitar números básicos.");
        return;
    }

    // Calculando o valor que será subtraído, vulgo desconto
    let valorDesconto = preco * (porcentagem / 100);
    
    // O preço final, subtraindo o desconto do valor original (matemática de nível primário)
    let precoFinal = preco - valorDesconto;

    // Montando o texto para o console e o alert, já que você quer ver o resultado em todo lugar
    let resumo = "Preço Original: R$ " + preco.toFixed(2) + 
                 "\nDesconto aplicado: R$ " + valorDesconto.toFixed(2) + 
                 "\nValor final a pagar: R$ " + precoFinal.toFixed(2);

    // Exibindo no console para fingir que estamos debbugando algo complexo
    console.log(resumo);

    // O alert que interrompe tudo só para mostrar o que já era óbvio
    alert(resumo);

    // Jogando o resultado no HTML para o usuário não ter que abrir o console
    document.getElementById("resultado").innerHTML = "Total: R$ " + precoFinal.toFixed(2);
}