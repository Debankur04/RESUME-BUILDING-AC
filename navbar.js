
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent the default anchor behavior
        event.preventDefault();

        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');

        // Show the target section
        const targetId = this.getAttribute('href').substring(1);  // Get the href without '#'
        document.getElementById(targetId).style.display = 'block';
    });
});
