document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('sermon-search');
    const speakerFilter = document.getElementById('sermon-speaker-filter');
    const sermonCards = document.querySelectorAll('.sermon-card');

    function filterSermons() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedSpeaker = speakerFilter.value;

        sermonCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const preacher = card.dataset.speaker;

            const matchesSearch = title.includes(searchTerm);
            const matchesSpeaker = selectedSpeaker === 'all' || preacher === selectedSpeaker;

            // Se todas as condições forem verdadeiras, exibe o card.
            if (matchesSearch && matchesSpeaker) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Adiciona "ouvintes de eventos" a cada filtro
    searchInput.addEventListener('input', filterSermons);
    speakerFilter.addEventListener('change', filterSermons);

    // Chama a função de filtro na carga da página para garantir que o estado inicial esteja correto
    filterSermons();
});