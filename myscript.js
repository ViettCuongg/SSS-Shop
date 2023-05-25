
function goBack_register() {
    var modal = document.getElementById("modal__register");
    modal.style.display = "none";
}

function goBack_login() {
    var modal = document.getElementById("modal__login");
    modal.style.display = "none";
}

function register_form() {
    var modal = document.getElementById("modal__register");
    modal.style.display = "flex";
}

function login_form() {
    var modal = document.getElementById("modal__login");
    modal.style.display = "flex";
}



const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

