document.addEventListener('DOMContentLoaded', () => {
    // 1. Generate Visualizer Bars
    const generateVisualizer = (containerId, colorClass) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Clear previous bars
        container.innerHTML = '';
        
        // Generate 15 bars
        for (let i = 0; i < 15; i++) {
            const bar = document.createElement('div');
            bar.classList.add('vis-bar', colorClass);
            
            // Random initial height between 10% and 100%
            const height = Math.floor(Math.random() * 90) + 10;
            bar.style.height = `${height}%`;
            
            // Randomize height periodically for animation
            setInterval(() => {
                const newHeight = Math.floor(Math.random() * 90) + 10;
                bar.style.height = `${newHeight}%`;
            }, 100 + Math.random() * 200);
            
            container.appendChild(bar);
        }
    };

    generateVisualizer('vis-1', 'bg-primary');
    generateVisualizer('vis-2', 'bg-secondary');

    // 2. Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 3. Glitch Effect on Primary Buttons
    const primaryButtons = document.querySelectorAll('.btn-primary, .btn-submit, .btn-solid-primary');
    
    primaryButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px) skewX(-10deg)`;
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
        });
    });
});
