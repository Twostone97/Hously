document.addEventListener('DOMContentLoaded',()=>{
    
    console.log('DOM loaded');


    //login modal open
    document.querySelector('#login__open').addEventListener('click',()=>{
        document.querySelector('body').classList.add('modal__open');
        document.querySelector('.auth__overlay').classList.add('modal__open');
        document.querySelector('.modal__login').classList.add('modal__open');
    });

    //login modal close
    document.querySelector('#login__close').addEventListener('click',()=>{
        document.querySelector('body').classList.remove('modal__open');
        document.querySelector('.auth__overlay').classList.remove('modal__open');
        document.querySelector('.modal__login').classList.remove('modal__open');
    });

     //register modal open
     document.querySelector('#register__open').addEventListener('click',()=>{
        document.querySelector('body').classList.add('modal__open');
        document.querySelector('.auth__overlay').classList.add('modal__open');
        document.querySelector('.modal__register').classList.add('modal__open');
    });

    //register modal open
    document.querySelector('#register__close').addEventListener('click',()=>{
        document.querySelector('body').classList.remove('modal__open');
        document.querySelector('.auth__overlay').classList.remove('modal__open');
        document.querySelector('.modal__register').classList.remove('modal__open');
    });

    
})

//VEGAS library (jQuery)

$(".bg__vegas").vegas({
    slides: [
        { src: "../img/slide1.jpg" },
        { src: "../img/slide2.jpg" }
    ],
    overlay: '/vendor/vegas/overlays/06.png'
});