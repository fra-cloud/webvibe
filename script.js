document.addEventListener('DOMContentLoaded', function() {
    const randomBtn = document.getElementById('randomBtn');
    
    if (!randomBtn) return; // Exit if button doesn't exist
    
    randomBtn.addEventListener('click', function() {
        // Get current page path to determine base path
        const currentPath = window.location.pathname;
        const isInProjectsFolder = currentPath.includes('/projects/');
        
        // Define all possible destinations with absolute paths from root
        const allPages = [
            'projects/project1.html',
            'projects/project2.html',
            'projects/project3.html',
            'projects/project4.html',
            'links.html',
            'phd-details.html',
            'index.html#about',
            'index.html#outputs',
            'index.html#phd',
            'index.html#links',
            'index.html#ping'
        ];
        
        // Adjust paths based on current location
        const pages = allPages.map(page => {
            if (isInProjectsFolder) {
                return '../' + page;
            }
            return page;
        });
        
        // Select random page
        const randomIndex = Math.floor(Math.random() * pages.length);
        const randomPage = pages[randomIndex];
        
        // Navigate to the selected page
        window.location.href = randomPage;
    });
});
