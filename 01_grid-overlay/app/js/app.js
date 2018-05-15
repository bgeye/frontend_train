var App = (function(t,s){

var mobileBtn = document.querySelector('.head__mobile');
var closeBtn = document.querySelector('.mobile__close');
var categoryBtn = document.querySelector('.mobile__inner');

//init function
var init = function(){
    mobileBtn.addEventListener('click',openMenu);
    closeBtn.addEventListener('click',closeMenu);
    categoryBtn.addEventListener('click',openCategory);
};


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


function openCategory(e) {
    if(e.target && e.target.matches('a','.mobile__title')){
        console.log(e.target.nextSibling.nextSibling);
        e.target.nextSibling.nextSibling.classList.toggle('open');
    }
}


    return{
        init:init
    };

})(Tools);
App.init();