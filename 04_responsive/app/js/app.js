var App = (function(t,s){

/*
    solution to hide box when outside clicked
    https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
     - eventlistener on overlayer(if not available use window)
      -> if clicked hide box.
     - eventlistener on infobox div
      - if box clicked, check class and stop propagation -> click event goes not to overlayer eventlister where the
        the box hide function is behind
      - for close button separate if checker to close also, because it's in the infobox


*/

var challenge = document.querySelector('.challenge');
var mainOverlay = document.querySelector('.main__overlay');
var infoboxWrapper = document.querySelector('.infobox__wrapper');
var infoboxBtn = 'infobox__btn';

//init function
var init = function(){

    //show infobox
    challenge.addEventListener('click',t.delegate('.infobox__show',showInfobox));

    //hide infobox
    mainOverlay.addEventListener('click',hideInfobox);
    infoboxWrapper.addEventListener('click',avoidHideBox);


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
        infoboxBtn = document.querySelector('.infobox_btn');
    }

    function hideInfobox(e){
        var overlay = document.querySelector('.main__overlay');
        overlay.style.display = 'none';
    }

    function avoidHideBox(e){
        console.log(e.target.className);
        console.log(infoboxBtn);
        if(e.target.className == infoboxBtn){
            hideInfobox();
        }else{

            e.stopPropagation();
        }
    }


//    function hideOutside(e){
//        //console.log(e.target.className);
//        console.log(e.target.parentNode.parentNode);
//        console.log('e.target.className: '+e.target.className);
//        console.log('e.target.parentNode.parentNode.className: '+e.target.parentNode.parentNode.className);
//
//        var infoboxWrapper = document.querySelector('.infobox_wrapper')
//        if(e.currentTarget.className == infoboxWrapper){
//            e.stoppropagation();
//            hideInfobox();
//            challenge.removeEventListener('click',hideOutside);
//        }
//
//        //console.log(e.currentTarget);
////        if(e.target.className != 'infobox__wrapper' || e.target.parentNode.parentNode.className != 'infobox__wrapper'){
////
////
////        }else{
////        hideInfobox();
////        challenge.removeEventListener('click',hideOutside);
////        }
//    }

    return{
        init:init
    };

})(Tools);
App.init();