/* This JavaScript code snippet is setting up an Intersection Observer to add an entrance animation
effect when scrolling. Here's a breakdown of what it does: */
// Agregar animación de entrada al desplazarse
const productList = document.querySelectorAll('.product');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
            entry.target.classList.add('visible');
        }
    });
})
   

