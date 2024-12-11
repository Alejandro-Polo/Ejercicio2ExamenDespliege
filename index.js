

const productList = document.querySelectorAll('.product');

/**
 * @param entries - Entradas
 * @param entry - Elementos de entries
 * @returns se hace visible
 * 
 * recorre un foreach y da una animacion
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
            entry.target.classList.add('visible');
        }
    });
})
   

