const navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

var checkBox = document.querySelector('.checkbox');
var checkBoxLabel = document.querySelector('.checkbox-label');

checkBox.addEventListener('click', () => {
    checkBoxLabel.classList.toggle('active');
})

function average(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum = sum + array[i];
        i++;
    }
    console.log(sum / array.length)
}

average([2, 2, 5, 8]);

function log() {
    console.log("Delete");
    for (let i = 0; i < 5; i++) {
        console.log("create");
    }
}

log();