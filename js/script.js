const navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

var checkBox = document.querySelector('.checkbox');
var checkBoxLabel = document.querySelector('.checkbox-label');

checkBox.addEventListener('click', () => {
    checkBoxLabel.classList.toggle('active');
})