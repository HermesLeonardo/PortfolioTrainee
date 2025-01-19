document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("#contact-section form input, #contact-section form textarea");
    const increaseFontBtn = document.getElementById("increase-font");
    const decreaseFontBtn = document.getElementById("decrease-font");

    // Define tamanhos mínimos e máximos
    const minFontSize = 12; 
    const maxFontSize = 24; 
    let currentFontSize = 16; // Tamanho inicial do texto

    // Função para atualizar o tamanho da fonte
    function updateFontSize(size) {
        inputs.forEach((input) => {
            input.style.fontSize = `${size}px`;
        });
    }

    increaseFontBtn.addEventListener("click", () => {
        console.log("Botão A+ clicado");
        if (currentFontSize < maxFontSize) {
            currentFontSize += 2;
            updateFontSize(currentFontSize);
        }
    });

    decreaseFontBtn.addEventListener("click", () => {
        console.log("Botão A- clicado");
        if (currentFontSize > minFontSize) {
            currentFontSize -= 2;
            updateFontSize(currentFontSize);
        }
    });


});
