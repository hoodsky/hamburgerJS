const navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const checkBox = document.querySelector('.checkbox');
const checkBoxLabel = document.querySelector('.checkbox-label');

checkBox.addEventListener('click', () => {
    checkBoxLabel.classList.toggle('active');
})