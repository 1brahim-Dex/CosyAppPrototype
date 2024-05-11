const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function toggleButton(){
    const toggleBtn = document.querySelector(".toggle-btn");
    lockIcon = document.querySelector(".icon i");

    toggleBtn.classList.toggle("active");

    if(toggleBtn.classList.contains("active")){
        return lockIcon.classList.replace("bx-lock-open-alt", "bxs-lock-alt");
    }
    return lockIcon.classList.replace("bxs-lock-alt", "bx-lock-open-alt");
}

function toggleButtonSwitch(){
    const toggleBtnSwitch = document.querySelector(".toggle-btnSwitch");
    toggleBtnSwitch.classList.toggle("active");
}

function toggleSwitch(){
    const toggleSwitch = document.querySelector(".toggle-switch");
    toggleSwitch.classList.toggle("active");
}