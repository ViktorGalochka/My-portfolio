let aboutMeAnch = document.querySelector(".nav-about-me");
let aboutMeTarget = document.querySelector(".banner");

let portfolioAnch = document.querySelector(".nav-portfolio");
let portfolioTarget = document.querySelector(".banner-2");

let contactAnch = document.querySelector(".contacts");
let contactTarget = document.querySelector("footer");

let scrolled;
let target1 = aboutMeTarget.getBoundingClientRect().top;
let target2 = portfolioTarget.getBoundingClientRect().top;
let target3 = contactTarget.getBoundingClientRect().top;


aboutMeAnch.addEventListener("click", function() {
    scrolled = window.pageYOffset;
    scrollToAboutMe();
})
function scrollToAboutMe() {
    if(scrolled > target1) {
        window.scrollTo(0, scrolled);
        scrolled -= 15;
        requestAnimationFrame(scrollToAboutMe);
    }
    else {
        window.scrollTo(0, target1);
    }
}

portfolioAnch.addEventListener("click", function() {
    scrolled = window.pageYOffset;
    scrollToPortfolio();
})
function scrollToPortfolio() {
    if(scrolled < target2) {
        window.scrollTo(0, scrolled);
        scrolled += 15;
        requestAnimationFrame(scrollToPortfolio);
    }
    else {
        window.scrollTo(0, target2);
    }
}

contactAnch.addEventListener("click", function() {
    scrolled = window.pageYOffset;
    scrollToContact();
})
function scrollToContact() {
    if(scrolled < target3) {
        window.scrollTo(0, scrolled);
        scrolled += 20;
        requestAnimationFrame(scrollToContact);
    }
    else {
        window.scrollTo(0, target3);
    }
}


let language = document.querySelector(".language");

let isOn;

language.addEventListener("click", function() {
    let name = document.querySelector("h1");
    let aboutMyself = document.querySelector(".description");
    let myTools = document.querySelector(".about-me h2");
    let myWorks = document.querySelector(".border h2");
    let views = document.querySelectorAll(".information a");
    let work1 = document.querySelector(".works li:first-child .inner-iformation");
    let work2= document.querySelector(".works li:nth-child(2) .inner-iformation");
    let work3= document.querySelector(".works li:nth-child(3) .inner-iformation");
    let work4= document.querySelector(".works li:nth-child(4) .inner-iformation");
    isOn = !isOn;
    if(isOn === true) {
        language.textContent = "ENG";
        aboutMeAnch.textContent = "Обо мне";
        portfolioAnch.textContent = "Портфолио";
        contactAnch.textContent = "Контакты";
        name.textContent = "Виктор Галочка";
        aboutMyself.textContent = "Я Front End разработчик с 9 месяцами опыта в программировании + (1 месяц опыта
в коммерческих проектах)";
        myTools.textContent = "В ходе разработки использую";
        myWorks.textContent = "Мои работы";
        function translateViews() {
            return Array.prototype.map.call(views, function(t) { return t.textContent = "Просмотр"; });
        }
        work1.textContent = "Landing page, выполнен при помощи методологии BEM";
        work2.textContent = "Single page application для поиска фотографий (использование Pexels API). Выполнено при помощи Angular";
        work3.textContent = "Single page application для отображения актуальных новостей, а также возможность узнать погоду в любом городе мира (использование News API и OpenWeatherMap API). Выполнено при помощи Angular";
        work4.textContent = "Небольшой landing page, выполнен при помощи Bootstrap 4";
    } else {
        language.textContent = "RU";
        aboutMeAnch.textContent = "About me";
        portfolioAnch.textContent = "Portfolio";
        contactAnch.textContent = "Contact";
        name.textContent = "Viktor Galochka";
        aboutMyself.textContent = "I am a Front End developer with 9 months of experience in programming + (1 month of experience
in commercial projects)";
        myTools.textContent = "Use these tools";
        myWorks.textContent = "My works";
        function translateViews() {
            return Array.prototype.map.call(views, function(t) { return t.textContent = "View"; });
        }
        work1.textContent = "Landing page. Used the BEM methodology";
        work2.textContent = "Single page application for search photos (using Pexels API). Made with Angular";
        work3.textContent = "Single page application for display the latest news, as well you can check the weather in any city (using News API and OpenWeatherMap API). Made with Angular";
        work4.textContent = "Small landing page, made with Bootstrap 4";
    }
    translateViews();
})

let burger = document.querySelector(".burger");

burger.addEventListener("click", function() {
    document.querySelector(".collapse-nav").classList.toggle("show");
})

let masks = document.querySelectorAll(".tools .mask");
let informations = document.querySelectorAll(".information")

for(let i = 0; i < masks.length; i++) {
    masks[i].addEventListener("click", function() {
    this.classList.toggle("mask-fade");
    let information = this.nextElementSibling;
    information.classList.toggle("information-show");
   })
    
}

for(let i = 0; i < informations.length; i++) {
    informations[i].addEventListener("click", function() {
    this.classList.toggle("information-show");
    console.log(informations);
    let link = this.firstElementChild;
    link.classList.toggle("view-show");
   })
    
}
