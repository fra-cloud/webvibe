document.addEventListener('DOMContentLoaded', function() {
    const randomBtn = document.getElementById('randomBtn');
    
    if (!randomBtn) return; // Exit if button doesn't exist
    
    // Determine if we're in a subfolder
    const isInSubfolder = window.location.pathname.includes('/projects/');
    const basePath = isInSubfolder ? '../' : '';
    
    // Array of all possible pages/sections
    const pages = [
        basePath + 'projects/project1.html',
        basePath + 'projects/project2.html',
        basePath + 'projects/project3.html',
        basePath + 'projects/project4.html',
        basePath + 'links.html',
        basePath + 'phd-details.html',
        basePath + 'index.html#ping',
        basePath + 'index.html#about',
        basePath + 'index.html#phd',
        basePath + 'index.html#outputs',
        basePath + 'index.html#links'
    ];
    
    randomBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * pages.length);
        const randomPage = pages[randomIndex];
        
        if (randomPage.includes('#') && !isInSubfolder) {
            // It's a section on the current page and we're on index
            const sectionId = randomPage.split('#')[1];
            const element = document.querySelector('#' + sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // It's a separate page or we need to navigate to index with section
            window.location.href = randomPage;
        }
    });
});
