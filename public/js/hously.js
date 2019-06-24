document.addEventListener('DOMContentLoaded',()=>{
    
    //navigation toggle
    document.querySelector('.navigation__toggler').addEventListener('click',(event)=>{
        event.target.classList.toggle('open');
        document.querySelector('.navigation__items').classList.toggle("open");
    })

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