// Mobile menu toggle
const btn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('open'));
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('open'));
    });
}
