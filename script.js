// Optional JavaScript code to enhance functionality

// Example: Smooth scroll to sections when clicking on navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Add a parallax scrolling effect to the sections
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    document.querySelectorAll('.scroll-content').forEach(section => {
        const speed = section.getAttribute('data-speed');
        section.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});
