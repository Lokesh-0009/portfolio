document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.querySelector('.hero-title');
    const words = heroTitle.innerText.split(' ');
    heroTitle.innerHTML = words.map((word, index) => `<span style="opacity: 0; animation: fadeIn 0.5s forwards ${index * 0.1}s;">${word}</span>`).join(' ');

    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title) => {
        title.style.opacity = 0;
        title.getBoundingClientRect(); // Trigger reflow
        title.style.transition = 'opacity 0.5s';
        title.style.opacity = 1;
    });

    window.addEventListener('scroll', () => {
        sectionTitles.forEach((title) => {
            const rect = title.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                title.style.opacity = 1;
            }
        });
    });
});

function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = `https://www.youtube.com/embed/${videoUrl}`;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = "";
    modal.style.display = "none";
}
