const navbar = document.querySelector(".nav-bottom");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});





const cards = document.querySelector(".cards");
const card = document.querySelector(".card");
const left = document.querySelector(".c-left");
const right = document.querySelector(".c-right");

let currentSlide = 0;
const maxSlide = 7;

function moveSlider(){

    const cardWidth = card.offsetWidth;
    const gap = 32;

    let moveAmount;

    if(window.innerWidth <= 768){
        moveAmount = (cardWidth / 2) + gap;
    } else{
        moveAmount = cardWidth + gap;
    }

    cards.style.transform = `translateX(-${currentSlide * moveAmount}px)`;
}

right.onclick = function () {
    if(currentSlide < maxSlide){
        currentSlide++;
        moveSlider();
    }
};

left.onclick = function () {
    if(currentSlide > 0){
        currentSlide--;
        moveSlider();
    }
};

window.addEventListener("resize", moveSlider);




const reviewCards = document.querySelector(".review-cards");
const reviewCard = document.querySelector(".review-card");
const revLeft = document.querySelector(".rev-left");
const revRight = document.querySelector(".rev-right");

let reviewSlide = 0;
const reviewMaxSlide = 4;

function moveReviewSlider(){
    const cardWidth = reviewCard.offsetWidth;
    const gap = 32;

    reviewCards.style.transform =
        `translateX(-${reviewSlide * (cardWidth + gap)}px)`;
}

revRight.onclick = function () {
    if(reviewSlide < reviewMaxSlide){
        reviewSlide++;
        moveReviewSlider();
    }
};

revLeft.onclick = function () {
    if(reviewSlide > 0){
        reviewSlide--;
        moveReviewSlider();
    }
};

window.addEventListener("resize", moveReviewSlider);





const sc8Cards = document.querySelector(".sc-8-cards");
const sc8Card = document.querySelector(".sc-8-card");
const sc8Left = document.querySelector(".sc-8-l");
const sc8Right = document.querySelector(".sc-8-r");

let sc8Slide = 0;
const sc8MaxSlide = 7;

function moveSc8Slider(){
    const cardWidth = sc8Card.offsetWidth;
    const gap = 32;

    sc8Cards.style.transform =
        `translateX(-${sc8Slide * (cardWidth + gap)}px)`;
}

sc8Right.onclick = function () {
    if(sc8Slide < sc8MaxSlide){
        sc8Slide++;
        moveSc8Slider();
    }
};

sc8Left.onclick = function () {
    if(sc8Slide > 0){
        sc8Slide--;
        moveSc8Slider();
    }
};

window.addEventListener("resize", moveSc8Slider);