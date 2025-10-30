document.addEventListener('DOMContentLoaded', function() {
    const randomBtn = document.getElementById('randomBtn');
    
    if (!randomBtn) return; // Exit if button doesn't exist
    
    randomBtn.addEventListener('click', function() {
        // Get the base URL (protocol + host + path to website root)
        const baseUrl = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
        
        // Check if we're in a subfolder by looking at the current file name
        const currentFile = window.location.pathname.split('/').pop();
        const isInProjectsFolder = window.location.pathname.includes('/projects/');
        
        // Define all possible destinations
        const pages = [
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
        
        // Select random page
        const randomIndex = Math.floor(Math.random() * pages.length);
        let randomPage = pages[randomIndex];
        
        // Construct the correct URL based on current location
        if (isInProjectsFolder) {
            // We're in projects folder, need to go up one level
            randomPage = '../' + randomPage;
        }
        
        // Navigate to the selected page
        window.location.href = randomPage;
    });
});
