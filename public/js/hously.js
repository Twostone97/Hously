document.addEventListener("DOMContentLoaded", () => {
    /**** LOGIN AND REGISTER MODALS *****/

    if (document.querySelector("#login__open")) {
        //login modal open
        document.querySelector("#login__open").addEventListener("click", () => {
            document.querySelector("body").classList.add("modal__open");
            document
                .querySelector(".auth__overlay")
                .classList.add("modal__open");
            document
                .querySelector(".modal__login")
                .classList.add("modal__open");
        });

        //login modal close
        document
            .querySelector("#login__close")
            .addEventListener("click", () => {
                document.querySelector("body").classList.remove("modal__open");
                document
                    .querySelector(".auth__overlay")
                    .classList.remove("modal__open");
                document
                    .querySelector(".modal__login")
                    .classList.remove("modal__open");
            });
    }
    //register modal open
    if (document.querySelector("#register__open")) {
        const openRegister = () => {
            document.querySelector("body").classList.add("modal__open");
            document
                .querySelector(".auth__overlay")
                .classList.add("modal__open");
            document
                .querySelector(".modal__register")
                .classList.add("modal__open");
        };
        document
            .querySelector("#register__open")
            .addEventListener("click", openRegister);
        if (document.querySelector("#register__open__onPage")) {
            document
                .querySelector("#register__open__onPage")
                .addEventListener("click", openRegister);
        }

        //register modal open
        document
            .querySelector("#register__close")
            .addEventListener("click", () => {
                document.querySelector("body").classList.remove("modal__open");
                document
                    .querySelector(".auth__overlay")
                    .classList.remove("modal__open");
                document
                    .querySelector(".modal__register")
                    .classList.remove("modal__open");
            });
    }

    //navigation hiding on scroll - FUNCTIONALITY DISABLED

    // let previousOffset = 0;
    // let screenWidth =
    //     document.documentElement.clientWidth ||
    //     document.body.clientWidth ||
    //     window.innerWidth;

    // window.addEventListener("scroll", () => {
    //     screenWidth =
    //         document.documentElement.clientWidth ||
    //         document.body.clientWidth ||
    //         window.innerWidth;
    //     if (window.pageYOffset > 200 && screenWidth >= 992) {
    //         if (window.pageYOffset > previousOffset) {
    //             document.querySelector("nav").classList.add("hideonscroll");
    //         } else {
    //             document.querySelector("nav").classList.remove("hideonscroll");
    //         }
    //     }
    //     previousOffset = window.pageYOffset;
    // });

    /***********  RANDOM QUOTES INIT  ********************/

    randomHouslyQuotes(quotesPool);
});

/***********  RANDOM QUOTES ON ABOUT PAGE    ********************/

const randomHouslyQuotes = quoteSrc => {
    let quotesDiv = document.createElement("div");
    quotesDiv.classList.add("hously-qoute");
    quotesDiv.innerHTML = `<h4>${quoteSrc[0]}</h4>`;
    document.querySelector(".quotes").appendChild(quotesDiv);
    let quoteIndex = 1;
    setInterval(() => {
        quotesDiv.innerHTML = `<h4>${quoteSrc[quoteIndex]}</h4>`;
        quoteIndex < 3 ? quoteIndex++ : (quoteIndex = 0);
    }, 4000);
};

/***********  RANDOM QUOTES ON ABOUT PAGE - QOUTES POOL   ********************/

quotesPool = [
    "Zveme všechny na nedělní brunch. Začínáme v 10:00 na zahradě.Tomáš a Marie",
    "Ahoj právě jsem se přistěhoval,rád bych poznal své sousedy",
    "Zatraceně, přestala téct voda. Jak to teď to mám řešit?",
    "Zdravím, mám byt k pronájmu. Potřebuji nájemníka od 1. září."
];

/********VEGAS library (jQuery) CONFIG*********/

$(".bg__vegas").vegas({
    slides: [
        { src: "../img/slide1.jpg" },
        { src: "../img/slide2.jpg" },
        { src: "../img/slide3.jpg" },
        { src: "../img/slide4.jpg" },
        { src: "../img/slide5.jpg" }
    ],
    overlay: "/vendor/vegas/overlays/01.png",
    transition: "blur",
    transitionDuration: 1500,
    delay: 5500,
    timer: false
});

/*********TOASTR LIBRARY (jQuery) CONFIG*******/

toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: false,
    positionClass: "toast-bottom-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};
