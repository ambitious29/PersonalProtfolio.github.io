// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download resume functionality
const downloadButton = document.getElementById('downloadResume');
    const resumeLink = 'https://drive.google.com/file/d/10RLGcXeg2Xir1sAmbBPP3rFBF46KoDoM/view?usp=drive_link'; // Replace with your actual resume link

    downloadButton.addEventListener('click', () => {
        window.open(resumeLink, '_blank');
    });



const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

