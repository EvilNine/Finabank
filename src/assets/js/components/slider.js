import {tns} from 'tiny-slider/src/tiny-slider.js';

const slider = (selector, options) => {
    const element = document.querySelectorAll(selector);
    if(element.length>0){
        tns(options);
    }
}


export default slider