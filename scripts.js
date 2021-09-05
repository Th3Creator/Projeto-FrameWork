const body = document.querySelector('body');
const header = document.querySelector('header');

body.addEventListener('mouseenter', function vizuHeader() {
    header.classList.remove('header');
        header.classList.add('headeron')
});


const btn = document.querySelector('.btn');
btn.addEventListener('click', function toggleMenu() {
    const container = document.querySelector('#container');
    container.classList.toggle('ativo');    
});