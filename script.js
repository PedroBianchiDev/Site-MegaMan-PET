window.addEventListener("load", function() {
    const loader = document.getElementById("loading-screen");
    
    if (loader) {
        setTimeout(() => {
            loader.classList.add("loader-hidden");
        }, 1000); // 1 segundo para mostrar a animação
    }
});

// Força o fechamento após 5 segundos caso o evento 'load' falhe
setTimeout(() => {
    const loader = document.getElementById("loading-screen");
    if (loader && !loader.classList.contains("loader-hidden")) {
        loader.classList.add("loader-hidden");
    }
}, 5000);

// Efeito Parallax no Título
if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
        const title = document.querySelector('h1');
        if(title) {
            const x = (window.innerWidth / 2 - e.pageX) / 70;
            const y = (window.innerHeight / 2 - e.pageY) / 70;
            title.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
}