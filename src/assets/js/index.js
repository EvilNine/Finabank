import themeSwitch from "./components/themeSwitch.js";
import slider from "./components/slider.js";
import select from "./components/select.js";
import { Collapse, Dropdown, Modal,  Popover,  Tab, Tooltip } from 'bootstrap';
import Range from "./components/range.js";
import slideDownModal from "./components/slideDownModal.js";
import mobileMenu from "./components/mobileMenu.js";
import showAllComments from "./components/showAllComments.js";
import comparePagination from "./components/comparePagination.js";
import btnShowNext from "./components/btnShowNext.js";
import btnScroll from "./components/btnScroll.js";
import btnShow from "./components/btnShow.js";
import pageNav from "./components/pageNav.js";
import calculator from "./components/calc/index.js";
import multipleSelect from "./components/multipleSelect.js";
import btnScrollUp from "./components/btnScrollUp.js";
import mobileHeader from "./components/mobileHeader.js";

// Theme swithcer
themeSwitch(); 

document.addEventListener('DOMContentLoaded', function() {
    
    // wellcome slider
    slider('.slider', {
        container: '.slider',
        prev: '.slider__button-prev',
        next: '.slider__button-next',
        pagination: '.slider__pagination',
        items: 1,
        autoplay: true,
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        mouseDrag: true,
        speed: 1000,
        nav: true,
        navPosition: 'bottom',
        controls: true,
        prevButton: '.slider__button-prev',
        nextButton: '.slider__button-next',
        responsive: {
            "1200": {
                center: true,
                edgePadding: 125,
                controls: true,
            }
        }
        
    })
    // experts slider
    slider('.expert__slider-container', {
        container: '.expert__slider-container ',
        items: 1,
        autoplay: true,
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        mouseDrag: true,
        speed: 1000,
        nav: false,
        mode: 'gallery',
        navPosition: 'bottom',
        controls: true,
        center: false,
        edgePadding: 0,
        prevButton: '.expert__slider-nav .prev',
        nextButton: '.expert__slider-nav .next'

    });
    
    // Select
    select('.styledSelect')
    
    // Range input slider
    Range('.range__input');
    
    // Slide down modal like search & region
    slideDownModal('.btn__modal-show');

    // Mobile menu
    mobileMenu();

    // Show all comments
    showAllComments();

    // Mobile compare pagination
    comparePagination();

    // Show more button
    btnShowNext('.btn__view-all');

    // Button scroll
    btnScroll('.btn-scroll')

    // Show hidden table
    btnShow('.btn__details', 'tr__hidden');

    // Page navigation
    pageNav('.btn-pageNav', 'pageNav');

    // Calculator
    calculator()

    multipleSelect('.multipleSelect');
    
    btnScrollUp('btnScrollUp');

    // Toggle Header Depending on Scrolling Direction
    mobileHeader();

    // Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
});
