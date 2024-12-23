function autoSlide() {
    let currentSlide = 1;
    const totalSlides = 6;  // Total de rádios (radio1 a radio6)

    setInterval(() => {
        currentSlide = (currentSlide % totalSlides) + 1;  // Controla o ciclo entre os rádios de 1 a 6
        document.getElementById(`radio${currentSlide}`).checked = true;  // Marca o rádio correspondente
    }, 5000); // Intervalo de 5 segundos entre as trocas
}

window.onload = function() {
    autoSlide();  // Chama a função para iniciar o autoSlide assim que a página carregar
};
