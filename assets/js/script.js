const html = document.querySelector('html');
const checkbox = document.getElementById('switch');

html.classList.toggle('dark-mode');

checkbox.addEventListener('change', () => {
    html.classList.toggle('dark-mode');
})