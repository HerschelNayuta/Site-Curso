/**
 * Se você chegou até aqui e ainda não sabe o que é uma classe, 
 * prepare-se: estamos criando moldes para objetos.
 */

// 1. Criar a classe Produto com as propriedades nome e preço.
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // 2. Adicionar o método mostrarDetalhes para exibir as informações.
    mostrarDetalhes() {
        return `Produto: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)}`;
    }
}

// 4. Criar a classe Eletronico que herda de Produto e adicionar garantia.
class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        // O 'super' chama o construtor da classe pai, porque não vamos digitar tudo de novo.
        super(nome, preco);
        this.garantia = garantia;
    }

    // 5. Sobrescrever o método mostrarDetalhes para incluir a garantia.
    mostrarDetalhes() {
        // Aproveitamos o método do pai e apenas penduramos a garantia no final.
        return `${super.mostrarDetalhes()} | Garantia: ${this.garantia} meses`;
    }
}

function executarLogicaProdutos() {
    const divSaida = document.getElementById("saida");
    divSaida.innerHTML = ""; // Limpa a tela para não virar bagunça

    // 3. Instanciar um objeto de Produto e chamar o método.
    const p1 = new Produto("Cadeira Comum", 150.00);
    const infoP1 = p1.mostrarDetalhes();
    console.log("Teste Produto Simples:", infoP1);

    // 6. Instanciar um objeto de Eletronico e chamar o método.
    const e1 = new Eletronico("Smartphone Gamer", 3500.99, 12);
    const infoE1 = e1.mostrarDetalhes();
    console.log("Teste Eletrônico (Herança):", infoE1);

    // Exibindo na tela para facilitar sua vida
    divSaida.innerHTML = `<p><strong>Classe Pai:</strong> ${infoP1}</p>
                          <p><strong>Classe Filha (Herança):</strong> ${infoE1}</p>`;

    alert("Objetos instanciados com sucesso. Veja o console para detalhes técnicos.");
}