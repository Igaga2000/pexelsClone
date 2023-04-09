const menu__icon = document.querySelector('.menu_icon');
const nav_cover = document.querySelector('.nav_cover');
const top_nav = document.querySelector('#top_nav');
// const li_items = document.querySelectorAll('.li_item');

menu__icon.addEventListener('click', toggle);
// li_item.addEventListener('click', toggle);

function toggle() {
    top_nav.classList.toggle('active');
    nav_cover.classList.toggle('active');

    if (top_nav.classList == 'active') {
        menu__icon.style.position = 'fixed';
        menu__icon.style.right = '1rem';
    } else {
        menu__icon.style.position = 'relative';
        menu__icon.style.right = '0';
    }
}


