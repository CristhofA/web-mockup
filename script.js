document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in"); // Selecciona los elementos con la clase fade-in

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("show");
        }, index * 400); // Retraso de 500ms entre cada elemento
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Pricing Plans Page Loaded");
});
