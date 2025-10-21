document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = mobileMenuButton.querySelector('.material-symbols-outlined');

    const dropdownButton = document.getElementById('services-dropdown-button');
    const dropdownMenu = document.getElementById('services-dropdown-menu');
    const dropdownIcon = dropdownButton.querySelector('.dropdown-icon');

    mobileMenuButton.addEventListener('click', () => {
        const isNavActive = navLinks.classList.toggle('active');
        menuIcon.textContent = isNavActive ? 'close' : 'menu';

        if (!isNavActive) {
            dropdownMenu.classList.remove('show');
            dropdownButton.setAttribute('aria-expanded', 'false');
            dropdownIcon.classList.remove('rotated');
        }
    });

    dropdownButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const isDropdownActive = dropdownMenu.classList.toggle('show');
        dropdownButton.setAttribute('aria-expanded', isDropdownActive);
        dropdownIcon.classList.toggle('rotated');
    });

    window.addEventListener('click', (event) => {
        if (dropdownMenu.classList.contains('show') && !dropdownButton.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            dropdownButton.setAttribute('aria-expanded', 'false');
            dropdownIcon.classList.remove('rotated');
        }
    });

    $('.hero-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
});
