var App = (function(t,s){

//var arrayJSON = [];/*'[{"tod":"Salat"},{"tod":"Milch"}]';*/ //only for testing

/*var listKey = 'yourKey'; //key for local storage
var url = 'http://localhost:3002/todos';//the server
var localData = t.checkLocalStorage(listKey);*/

var challenge = document.querySelector('.challenge');

//init function
var init = function(){


    challenge.addEventListener('click',t.delegate('.infobox__show',showInfobox));
    challenge.addEventListener('click',t.delegate('.infobox__btn',hideInfobox))


    window.addEventListener('scroll',headerScrolling);
};




    function headerScrolling(){
                 var pageYOffset = window.pageYOffset;
                 //console.log(pageYOffset);
                 if(pageYOffset > 0){
                     shrinkHeader();
                     if(pageYOffset < 2000){
                         setBigLogo();
                     }else{
                         console.log(pageYOffset);
                         setSmallLogo();
                     }


                 }else if(pageYOffset === 0){

                     increaseHeader();

                 }

    }


    function shrinkHeader(){
        var logoBig = document.querySelector('.logo__big');
        var mainContent = document.querySelector('.main');
        var header = document.querySelector('.head');
        header.classList.add('shrink');
    }

    function increaseHeader(){
        var header = document.querySelector('.head');
        header.classList.remove('shrink');
    }


    function setSmallLogo() {
        var logoBig = document.querySelector('.logo__big');
        var logoSmall = document.querySelector('.logo__small');
        logoBig.style.display = 'none';
        logoSmall.style.display = 'inline';
    }


    function setBigLogo() {
        var logoBig = document.querySelector('.logo__big');
        var logoSmall = document.querySelector('.logo__small');
        logoBig.style.display = 'inline';
        logoSmall.style.display = 'none';
    }

    function showInfobox(e){
        var overlay = document.querySelector('.main__overlay');
        overlay.style.display = 'block';
        challenge.addEventListener('click',hideOutside);
    }

    function hideInfobox(e){
        var overlay = document.querySelector('.main__overlay');
        overlay.style.display = 'none';
    }

    function hideOutside(e){
        console.log(e.target.className);
        if(e.target == '' || e.target.className != 'infobox__wrapper'){
            hideInfobox();
            challenge.removeEventListener('click',hideOutside);
        }
    }

    return{
        init:init
    };

})(Tools);
App.init();