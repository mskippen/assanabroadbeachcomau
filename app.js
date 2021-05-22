function init() {
  new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      const title = section.querySelector("article");
      const tl = new TimelineMax({ delay: 0.8 });
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    },

    lockAnchors: false,
    anchors: [
      "home",
      "immerse",
      "architecture",
      // "lobby",
      "interiors",
      // "features",
      "location",
      "goldCoast",
      "resort",
      "facilities",
      "lifestyle",
      "local",
      "team",
      "contact",
    ],
    navigationPosition: "right",
    navigationTooltips: [
      "home",
      "assana",
      "architecture",
      // "Lobby",
      "interiors",
      // "features",
      "location",
      "gold-coast",
      "resort",
      "facilities",
      "lifestyle",
      "local",
      "team",
      "contact",
    ],
    showActiveTooltip: true,
    slidesNavigation: false,
    slidesNavPosition: "bottom",

    //Scrolling
    css3: true,
    // autoScrolling: true,
    fitToSection: false,
    // fitToSectionDelay: 1000,
    scrollBar: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: false,
    loopTop: true,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: true,
    normalScrollElements: "#element1, .element2",
    scrollOverflow: true,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ["#ccc", "#fff"],
    // paddingTop: "3em",
    // paddingBottom: "10px",
    fixedElements: "#header, .footer",
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
    dropEffect: true,
    dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //Custom selectors
    sectionSelector: ".section",
    slideSelector: ".slide",

    lazyLoading: true,
  });
}

init();

const burgerMenu = document.querySelector("header nav .menu-icon span");
const dropdownWrapper = document.querySelector(".dropdownNav");
const dropdownLinks = document.querySelectorAll(".dropdownNav .wrapper a");
const mainPage = document.querySelector("main");
const sections = document.querySelectorAll("section");


document.querySelector("#fp-nav").addEventListener("click", () => {
  showPage()
})

burgerMenu.addEventListener("click", () => {
  dropdownWrapper.classList.toggle("dropMenu");
  sections.forEach((i) => i.classList.toggle("v-hidden"));
  mainPage.classList.toggle("v-hidden");
});

dropdownLinks.forEach((item) => {
  item.addEventListener("click", () => showPage());
})

const showPage = () => {
  dropdownWrapper.classList.remove("dropMenu");
  sections.forEach((i) => i.classList.remove("v-hidden"));
  mainPage.classList.remove("v-hidden");
}
