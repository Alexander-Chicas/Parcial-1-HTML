document.addEventListener("DOMContentLoaded", () => {
    const dengueImage = document.getElementById("dengueImage");

    // Evento para cambiar la imagen al pasar el mouse
    if (dengueImage) {
        dengueImage.addEventListener("mouseover", () => {
            dengueImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY4c9R_FrxfzvDEbTQxM5tF9HWoNWrUiqCg&s";  // Cambia la imagen al pasar el mouse
        });

        dengueImage.addEventListener("mouseout", () => {
            dengueImage.src = "https://fundacionio.com/wp-content/uploads/2020/11/Fundacion-io-viajarseguro-aedes-aegypti.png";  // Retorna a la imagen original
        });
    }
});
