/* 1. Função que simula o carregamento de um produto.
   Retorna uma Promise que resolve após 2 segundos.
*/
function carregarProduto(id) {
    return new Promise((resolve, reject) => {
        // Simula o atraso de 2 segundos conforme o requisito
        setTimeout(() => {
            // Simulando a criação do objeto com ID, Nome e Preço
            const produto = {
                id: id,
                nome: "Produto Exemplo",
                preco: 250.00
            };
            
            // Se o ID for válido, resolvemos a busca
            if (id > 0) {
                resolve(produto);
            } else {
                reject("Erro: ID de produto inválido.");
            }
        }, 2000);
    });
}

/* 2. Invocação usando .then(), conversão para JSON e Reversão.
   Inclui Try/Catch para lidar com erros de processamento.
*/
function testarComThen() {
    console.log("--- Iniciando teste com .then() ---");
    
    try {
        carregarProduto(1)
            .then((produto) => {
                // Converte o objeto para String JSON
                const produtoJSON = JSON.stringify(produto);
                console.log("Produto convertido para JSON:", produtoJSON);

                // Reverte a String JSON para Objeto novamente
                const objetoRevertido = JSON.parse(produtoJSON);
                console.log("JSON revertido para Objeto:", objetoRevertido);
            })
            .catch((erro) => {
                console.error("Erro na Promise:", erro);
            });
    } catch (e) {
        console.error("Erro inesperado no bloco Try/Catch:", e);
    }
}

/* 3. Reescrevendo a função usando ASYNC/AWAIT.
   Usa Try/Catch interno para tratar erros de forma limpa.
*/
async function carregarProdutoAsync(id) {
    console.log(`--- Iniciando teste com Async/Await (ID: ${id}) ---`);
    
    try {
        // Aguarda a promessa ser resolvida (o await substitui o .then)
        const produto = await carregarProduto(id);
        
        console.log("Produto carregado via Async:", produto);
        console.log("Preço formatado:", produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        
    } catch (erro) {
        // Lida com erros caso a Promise seja rejeitada
        console.error("Erro ao carregar via Async/Await:", erro);
    } finally {
        console.log("Operação assíncrona finalizada.");
    }
}

console.log (carregarProdutoAsync(1));