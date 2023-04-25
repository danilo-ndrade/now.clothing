
const menuToggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#ul-menu');


menuToggleButton.addEventListener('click', () => {
    if(menu.style.display === 'none'){
        menu.style.display = 'flex';
        menuToggleButton.style.rotate = '180deg'
    }else {
        menu.style.display = 'none';
        menuToggleButton.style.rotate = '0deg'
    }
})
