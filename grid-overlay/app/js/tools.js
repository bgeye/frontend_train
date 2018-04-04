

var mobileBtn = document.querySelector('.head__mobile');
mobileBtn.addEventListener('click',openMenu);

var closeBtn = document.querySelector('.mobile__close');
closeBtn.addEventListener('click',closeMenu);

function openMenu(e) {
    if(e.target && e.target.matches('button','.head__mobile')){
        var mobileWrap = document.querySelector('.mobile__wrapper');
        mobileWrap.classList.add('open');

    }
}

function closeMenu(e) {
    if(e.target && e.target.matches('button','.mobile__close')){
        var mobileWrap = document.querySelector('.mobile__wrapper');
        mobileWrap.classList.remove('open');
    }
}