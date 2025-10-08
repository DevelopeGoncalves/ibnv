document.addEventListener('DOMContentLoaded', function() {
    const watchButtons = document.querySelectorAll('.sermon-grid .btn-watch');

    const featuredVideoIframe = document.querySelector('.featured-sermon .video-container iframe');
    const featuredSermonTitle = document.querySelector('.featured-sermon-title');
    const featuredSermonPreacher = document.querySelector('.featured-sermon-preacher');
    const featuredSermonDate = document.querySelector('.sermon-date');
    const featuredSermonDescription = document.querySelector('.sermon-description');

    watchButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const videoSrc = this.getAttribute('href');
            const sermonCard = this.closest('.sermon-card');
            
            // Puxa as informações do card do sermão, incluindo o nome completo do pregador.
            const title = sermonCard.querySelector('h3').textContent;
            const preacherName = sermonCard.getAttribute('data-fullname');
            const date = sermonCard.querySelector('.sermon-date').textContent;
            const description = sermonCard.querySelector('p:not(.sermon-date)').textContent;

            // Atualiza os elementos na seção em destaque.
            featuredVideoIframe.src = videoSrc;
            featuredSermonTitle.textContent = title;
            featuredSermonPreacher.textContent = `Por: ${preacherName}`;
            featuredSermonDate.textContent = date;
            featuredSermonDescription.textContent = description;

            // Rola a página suavemente para o topo.
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});