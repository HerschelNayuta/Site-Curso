// Dados detalhados dos projetos
const projetosDetalhes = {
    jogodavelha: {
        titulo: "🎮 Jogo da Velha",
        descricao: "Um clássico jogo da velha interativo construído do zero.",
        aprendizado: [
            "Manipulação de arrays para representar o tabuleiro",
            "Verificação de condições de vitória usando combinações predefinidas",
            "Controle de estado do jogo (jogador atual, jogo ativo)",
            "Atualização dinâmica da interface com querySelectorAll",
            "Lógica condicional para alternar jogadores"
        ],
        tecnologias: "HTML, CSS, JavaScript",
        destaque: "Primeiro projeto com lógica de jogo complexa!"
    },
    calculadora: {
        titulo: "💰 Calculadora de Desconto",
        descricao: "Calculadora funcional que aplica descontos em valores.",
        aprendizado: [
            "Captura de valores de input com getElementById",
            "Conversão de tipos com parseFloat()",
            "Validação de entrada com isNaN()",
            "Cálculo de porcentagens",
            "Tratamento de erros e feedback ao usuário"
        ],
        tecnologias: "HTML, CSS, JavaScript",
        destaque: "Aprendi a importância da validação de dados!"
    },
    carros: {
        titulo: "🚗 Lista de Carros",
        descricao: "Sistema de navegação por lista usando do-while.",
        aprendizado: [
            "Uso do loop do-while (executa ao menos uma vez)",
            "Interação com confirm() para capturar escolhas",
            "Controle de índices em arrays",
            "Break para interromper loops",
            "Verificação de limites de arrays"
        ],
        tecnologias: "HTML, JavaScript",
        destaque: "Entendi a diferença entre while e do-while na prática!"
    },
    idiomas: {
        titulo: "🌍 Seletor de Idiomas",
        descricao: "Sistema de seleção com switch-case.",
        aprendizado: [
            "Estrutura switch-case para múltiplas condições",
            "Captura de valores de select",
            "Uso do break em cada case",
            "Default para casos não previstos",
            "Atualização de conteúdo HTML dinamicamente"
        ],
        tecnologias: "HTML, JavaScript",
        destaque: "Switch-case é muito mais limpo que vários if/else!"
    },
    frutas: {
        titulo: "🍎 Manipulação de Arrays",
        descricao: "Exercícios práticos com arrays e métodos.",
        aprendizado: [
            "Criação e inicialização de arrays",
            "Acesso por índice (lembrando que começa em 0)",
            "Método push() para adicionar elementos",
            "Alteração de valores por índice",
            "Exibição no console para debugging"
        ],
        tecnologias: "JavaScript",
        destaque: "Arrays são a base para estruturas de dados!"
    },
    formulario: {
        titulo: "📝 Formulário com Validação",
        descricao: "Validação robusta usando Expressões Regulares.",
        aprendizado: [
            "Regex para validar e-mail",
            "Regex para telefone no formato brasileiro",
            "Regex para senha forte (maiúscula, minúscula, número, especial)",
            "Método test() para verificar padrões",
            "Feedback detalhado para o usuário"
        ],
        tecnologias: "HTML, CSS, JavaScript",
        destaque: "Regex parece complicado, mas é poderoso demais!"
    },
    modulos: {
        titulo: "🧮 Calculadora Modular",
        descricao: "Organização de código com ES6 Modules.",
        aprendizado: [
            "Export de funções individuais",
            "Import nomeado de múltiplas funções",
            "Separação de código em arquivos lógicos",
            "Uso de type='module' no HTML",
            "Reutilização de código"
        ],
        tecnologias: "JavaScript (ES6)",
        destaque: "Módulos deixam o código muito mais organizado!"
    },
    produtos: {
        titulo: "📦 Sistema de Produtos (POO)",
        descricao: "Implementação de Programação Orientada a Objetos.",
        aprendizado: [
            "Criação de classes com constructor",
            "Métodos dentro de classes",
            "Herança com extends",
            "Uso de super() para chamar o construtor da classe pai",
            "Sobrescrita de métodos"
        ],
        tecnologias: "JavaScript",
        destaque: "POO mudou minha forma de pensar código!"
    },
    promises: {
        titulo: "⏳ Carregamento com Promises",
        descricao: "Operações assíncronas e manipulação de dados.",
        aprendizado: [
            "Criação de Promises com resolve/reject",
            "Uso de setTimeout para simular atrasos",
            "Encadeamento com .then() e .catch()",
            "Async/await para código mais limpo",
            "Conversão de objetos para JSON e vice-versa"
        ],
        tecnologias: "JavaScript",
        destaque: "Entendi como trabalhar com dados que levam tempo!"
    },
    layouts: {
        titulo: "🎨 Layouts com Grid e Flexbox",
        descricao: "Sistemas de layout modernos e responsivos.",
        aprendizado: [
            "Grid Layout com grid-template-columns",
            "Flexbox para alinhamento flexível",
            "Propriedades flex-grow e flex-direction",
            "Gap para espaçamento",
            "Media queries para responsividade"
        ],
        tecnologias: "HTML, CSS",
        destaque: "Grid e Flexbox são essenciais para layouts modernos!"
    }
};

// Função para exibir detalhes do projeto no modal
function verDetalhes(projeto) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const detalhes = projetosDetalhes[projeto];

    if (!detalhes) {
        alert('Projeto não encontrado!');
        return;
    }

    modalBody.innerHTML = `
        <h3>${detalhes.titulo}</h3>
        <p><strong>Descrição:</strong> ${detalhes.descricao}</p>
        <p><strong>Tecnologias:</strong> ${detalhes.tecnologias}</p>
        <p><strong>O que aprendi:</strong></p>
        <ul>
            ${detalhes.aprendizado.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <p><strong>💡 Destaque:</strong> ${detalhes.destaque}</p>
    `;

    modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Função para enviar mensagem (simulação)
function enviarMensagem() {
    alert('Obrigado pelo interesse! Em breve você será redirecionado para o formulário de contato. 📧');
}

// Animação de scroll suave ao clicar nos links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Adiciona efeito de destaque nos cards de habilidade ao clicar
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });

    // Contador de projetos (easter egg)
    console.log('🚀 Portfólio carregado com sucesso!');
    console.log(`📊 Total de projetos: ${document.querySelectorAll('.project-card').length}`);
    console.log('💡 Dica: Clique em "Ver Detalhes" para saber mais sobre cada projeto!');
});

// Função para detectar scroll e adicionar classe aos elementos
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Inicializa as seções com opacidade baixa para animação
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});
