const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
    console.log("Jack-in sequence initiated!");
});

// Efeito Parallax no Título (Desktop)
if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
        const title = document.querySelector('h1');
        if(title) {
            const x = (window.innerWidth / 2 - e.pageX) / 65;
            const y = (window.innerHeight / 2 - e.pageY) / 65;
            title.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
}