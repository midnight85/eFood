window.addEventListener("load", function () {
   
    function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});;
    let iconMenu = document.querySelector(".icon-menu");
if (iconMenu) {
    let menuBody = document.querySelector(".header__menu");
    iconMenu.addEventListener("click", (e) => {
        document.body.classList.toggle("scroll--lock");
        iconMenu.classList.toggle("icon-menu--active");
        menuBody.classList.toggle("header__menu--active");
    });
};;
    //tabs
const tabNamesList = document.querySelectorAll("[data-tab-name]");
const tabBody = document.querySelectorAll(".tab__body");
const tabNamesWrapper = document.querySelector(".tab__names");

if (tabNamesWrapper) {
    tabNamesWrapper.addEventListener("click", function (e) {

        if (e.target.classList.contains("tab__name")) {
            tabNamesList.forEach((item) => {
                item.classList.remove("tab__name--active");
            });
            e.target.classList.add('tab__name--active');

            const tabBodyShow = document.querySelector("#" + e.target.dataset.tabName);
            console.log(tabBodyShow);
            if(tabBodyShow){
                tabBody.forEach((item) => {
                    item.classList.remove("tab__body--active");
                });
                tabBodyShow.classList.add('tab__body--active');
            }
        }
    });
}


//slider
const swiperCategory = new Swiper(".tab__slider", {
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
    watchOverflow = false,
    freeMode: true,
    // loop: true,

    slidesPerView: 1.5,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 1,
    spaceBetween: 26,
    // centeredSlides:true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
            slidesPerGroupSkip: 2,
        },
        768: {
            slidesPerView: 3.25,
            slidesPerGroup: 3,
            slidesPerGroupSkip: 3,
        },
        1024: {
            slidesPerView: 4.33,
            slidesPerGroup: 4,
            slidesPerGroupSkip: 4,
        },

        1440: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 1,
        },
    },
});
;
    //slider
const swiperFeedback = new Swiper(".swiper-feedback", {
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    // watchOverflow = false,
    // freeMode: true,
    // loop: true,

    // slidesPerView: 1,
    // slidesPerGroup: 1,
    // slidesPerGroupSkip: 1,
    // spaceBetween: 26,
    
    // centeredSlides:true,


    navigation: {
        nextEl: ".swiper-feedback-button-next",
        prevEl: ".swiper-feedback-button-prev",
    },
   
});
;
    if (window.innerWidth <= 576) arrowToggle();
window.addEventListener("resize", arrowToggle);
function arrowToggle() {
    let detailsTitles = document.querySelectorAll(".details__title");
    if (window.innerWidth <= 576) {
        detailsTitles.forEach((title) => {
            title.classList.add("_icon-chevron-down");
        });
    } else {
        detailsTitles.forEach((title) => {
            title.classList.remove("_icon-chevron-down");
        });
    }
}

let details = document.querySelector(".footer__top");
function toogleItem(detailsTitle) {
    let detailsBody = detailsTitle.nextElementSibling;
    if (detailsBody.classList.contains("details__body--open")) {
        jsHeightAnimation(detailsBody, true, function () {
            detailsBody.classList.remove("details__body--open");
        });
    } else {
        detailsBody.classList.add("details__body--open");
        jsHeightAnimation(detailsBody);
    }
}

details.addEventListener("click", function (e) {
    if (window.innerWidth <= 576) {
        if (e.target.classList.contains("details__title")) {
            toogleItem(e.target);
            e.target.classList.toggle("_icon-chevron-down--active");
        }
    }
});

function jsHeightAnimation(el, isReverse = false, onFinish = function () {}) {
    if (el.jsAnimated === true) {
        return;
    }

    el.jsAnimated = true;
    let animate = el.animate([{height: 0}, {height: el.clientHeight + "px"}], {
        duration: 300,
        direction: isReverse ? "reverse" : "normal",
    });

    animate.addEventListener("finish", function () {
        el.jsAnimated = false;
        onFinish();
    });
}
;
//  кнопка вверх
    let btnUp = document.querySelector(".btnUp");
    btnUp.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", scrollTop);
    function scrollTop() {
        let pos = window.pageYOffset;
        if (pos > window.innerHeight) {
            btnUp.classList.add("btnUp--visible");
        } else {
            btnUp.classList.remove("btnUp--visible");
        }
    }
//  форма поиска
    document.addEventListener('click', documentActions);
    function documentActions(e) {
        if (e.target.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('search-form--active');
        } else if (!e.target.closest('.search-form') && document.querySelector('.search-form--active')) {
            document.querySelector('.search-form').classList.remove('search-form--active');
        }
    }
    

});