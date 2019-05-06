// select carousel

const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

//  get carousel width

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// count total cards available

const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// define beginning and make carousel start from the beginning
let offset = 0;
// define when carousel should stop
const maxX =-((cardCount / 2) * carouselWidth +
                (cardMarginRight * (cardCount / 2)) -
                carouselWidth - cardMarginRight);

// click events
leftButton.addEventListener("click", function() {
    if (offset !== 0) {
        offset += carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})

rightButton.addEventListener("click", function() {
    if (offset !== maxX) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})
