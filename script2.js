document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todas as imagens que têm o atributo 'data_flashcard'
    const images = document.querySelectorAll('img[data_flashcard]');

    // Função para alternar entre a imagem frontal e a de verso
    function flipImage(event) {
        const img = event.target;

        // Obtém os valores de src e data_flashcard
        const currentSrc = img.src;
        const flipToSrc = img.getAttribute('data_flashcard');
        
        // Alterna entre src e data_flashcard
        img.src = flipToSrc;
        img.setAttribute('data_flashcard', currentSrc);
    }

    // Adicionar evento de clique em todas as imagens para realizar o flip
    images.forEach(function(image) {
        image.addEventListener('click', flipImage);
    });
});
