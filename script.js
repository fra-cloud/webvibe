document.addEventListener('DOMContentLoaded', function() {
    const randomBtn = document.getElementById('randomBtn');
    
    // Array of all possible pages/sections
    const pages = [
        'project1.html',
        'project2.html',
        'project3.html',
        'project4.html',
        'links.html',
        'phd-details.html',
        '#ping',
        '#about',
        '#phd',
        '#outputs',
        '#links'
    ];
    
    randomBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * pages.length);
        const randomPage = pages[randomIndex];
        
        if (randomPage.startsWith('#')) {
            // It's a section on the current page
            document.querySelector(randomPage).scrollIntoView({ behavior: 'smooth' });
        } else {
            // It's a separate page
            window.location.href = randomPage;
        }
    });
});