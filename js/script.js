document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Menu Responsivo (Hamburger) e Sticky Header ---
    // DENTRO do document.addEventListener('DOMContentLoaded', () => { ... });
// Adicione esta função auxiliar:
function normalizarTexto(texto) {
    if (typeof texto !== 'string') return '';
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
    const hamburger = document.querySelector('.hamburger-menu'); 
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('.main-header');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) { 
                    navList.classList.remove('active');
                }
            });
        });
    }

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- NOVA LÓGICA DO CHATBOT CRISTÃO ---
    const chatbotWindow = document.getElementById('novoChatbotWindow');
    const closeChatbotButton = document.getElementById('novoChatbotCloseButton');
    const chatbotMessagesContainer = document.getElementById('novoChatbotMessages');
    const chatbotInput = document.getElementById('novoChatbotInput');
    const sendChatbotButton = document.getElementById('novoChatbotSendButton');

    // Botão principal da Hero Section para abrir o chat
    const openHeroChatbotButton = document.getElementById('openChatbotButton');

    // Botão flutuante (opcional, se você descomentou no HTML)
    // const toggleChatbotIcon = document.getElementById('novoChatbotToggleIcon');

    // Verifica se os elementos principais do chatbot existem para evitar erros
    if (chatbotWindow && openHeroChatbotButton && closeChatbotButton && chatbotMessagesContainer && chatbotInput && sendChatbotButton) {

        const abrirChat = () => {
            chatbotWindow.classList.add('open');
            chatbotInput.focus();
            rolarParaFundo();
        };

        const fecharChat = () => {
            chatbotWindow.classList.remove('open');
        };

        openHeroChatbotButton.addEventListener('click', abrirChat);
        closeChatbotButton.addEventListener('click', fecharChat);

        // Para o ícone flutuante (opcional)
        // if (toggleChatbotIcon) {
        //     toggleChatbotIcon.addEventListener('click', () => {
        //         chatbotWindow.classList.toggle('open');
        //         if (chatbotWindow.classList.contains('open')) {
        //             chatbotInput.focus();
        //             rolarParaFundo();
        //         }
        //     });
        // }

        const adicionarMensagem = (texto, tipo) => {
            const divMensagem = document.createElement('div');
            divMensagem.classList.add('novo-chatbot-message', tipo);
            divMensagem.innerHTML = texto; // Usamos innerHTML para permitir links nas respostas do bot
            chatbotMessagesContainer.appendChild(divMensagem);
            rolarParaFundo();
        };

        const rolarParaFundo = () => {
            chatbotMessagesContainer.scrollTop = chatbotMessagesContainer.scrollHeight;
        };

        const processarEnvioMensagem = () => {
            const mensagemUsuario = chatbotInput.value.trim();
            if (mensagemUsuario === '') return;

            adicionarMensagem(mensagemUsuario, 'user');
            chatbotInput.value = '';

            // Simula o bot "pensando"
            setTimeout(() => {
                const respostaBot = obterRespostaCrista(mensagemUsuario);
                adicionarMensagem(respostaBot, 'bot');
            }, 700);
        };

        sendChatbotButton.addEventListener('click', processarEnvioMensagem);
        chatbotInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                processarEnvioMensagem();
            }
        });

        // Função de Respostas do Bot com Temática Cristã
        function obterRespostaCrista(entradaUsuario) {
            const texto = entradaUsuario.toLowerCase();
            // const nomeIgreja = "Igreja Batista Nova Vida"; // Você pode ajustar se necessário

            if (texto.includes('ola') || texto.includes('oi') || texto.includes('paz')) {
                return "Graça e paz! Que a luz de Cristo ilumine seu caminho. Em que posso ser útil?";
            }
            if (texto.includes('horario') || texto.includes('culto') || texto.includes('reuniao')) {
                return `Nossos cultos são aos Domingos (08:00h e 18:00h) e Quintas (19:30h). Venha adorar conosco! "Alegrei-me quando me disseram: Vamos à casa do Senhor." (Salmos 122:1). Mais detalhes em nossa página <a href="events.html" target="_blank">Eventos</a>.`;
            }
            if (texto.includes('endereço') || texto.includes('localização') || texto.includes('onde fica')) {
                return `Estamos na Av. Porto Seguro, 903 - Jardim Carapina, Serra - ES. Que o Senhor te guie até nós! Veja o mapa em <a href="contact.html" target="_blank">Contato</a>.`;
            }
            if (texto.includes('dízimo') || texto.includes('oferta') || texto.includes('doar') || texto.includes('contribuir')) {
                return `Sua contribuição é uma bênção! "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." (2 Coríntios 9:7). Você pode ofertar em nossa página <a href="give.html" target="_blank">Dê Online</a>.`;
            }
            if (texto.includes('ministérios') || texto.includes('servir')) {
                return `Temos muitos ministérios onde você pode usar seus dons para a glória de Deus! Visite nossa página de <a href="ministries.html" target="_blank">Ministérios</a> para conhecer e se envolver.`;
            }
            if (texto.includes('pastor') || texto.includes('liderança')) {
                return `Nossos pastores estão a serviço do Reino, guiando o rebanho com amor e sabedoria. Conheça mais sobre eles em <a href="about.html" target="_blank">Sobre Nós</a>.`;
            }
            if (texto.includes('jesus') || texto.includes('deus') || texto.includes('salvação') || texto.includes('fé')) {
                return `Jesus é o nosso Salvador, o Caminho, a Verdade e a Vida! "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." (João 3:16). Se desejar conversar sobre fé, venha nos visitar!`;
            }
            if (texto.includes('bíblia') || texto.includes('palavra de deus')) {
                return `A Bíblia é a nossa regra de fé e prática, a Palavra viva de Deus! "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho." (Salmos 119:105).`;
            }
            if (texto.includes('oração') || texto.includes('orar')) {
                return `A oração é nossa conversa com Deus! "Orai sem cessar." (1 Tessalonicenses 5:17). Se precisar de oração, nossa equipe pastoral está à disposição.`;
            }
             if (texto.includes('páscoa') || texto.includes('ressurreição')) {
                return `A Páscoa celebra a vitória de Cristo sobre a morte! "Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores." (Romanos 5:8). Veja mais em nossa página de <a href="pascoa.html" target="_blank">Páscoa</a>.`;
            }
            if (texto.includes('obrigado') || texto.includes('obrigada') || texto.includes('agradeço')) {
                return "De nada! Que a graça do Senhor Jesus seja contigo. Estou aqui se precisar de mais algo!";
            }
            if (texto.includes('amém') || texto.includes('aleluia') || texto.includes('glória a deus')) {
                return "Amém! Toda honra e glória sejam dadas ao nosso Deus!";
            }
            // Resposta padrão
            return "Que a paz de Cristo esteja em seu coração. Se não encontrou o que busca, por favor, entre em <a href='contact.html' target='_blank'>contato</a> conosco. Estamos aqui para servir!";
        }
    } else {
        console.warn('Novo Chatbot: Elementos essenciais não foram encontrados no HTML. O chatbot não será inicializado.');
    }
    AOS.init();
    // --- FIM DA NOVA LÓGICA DO CHATBOT CRISTÃO ---
});
AOS.init();