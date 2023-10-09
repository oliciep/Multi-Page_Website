const navToggle = document.querySelector('.nav-toggle');
const toolbarLinks = document.querySelectorAll('.toolbar a');

navToggle.addEventListener('click', () => {
    toolbarLinks.forEach(link => {
        link.classList.toggle('show');
    });
});