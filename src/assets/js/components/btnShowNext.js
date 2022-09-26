import { nextAll } from "../helpers/nextAll.js";

const btnShowNext = (selector) => {
    const btn = document.querySelectorAll(selector);

    if (btn.length > 0) {
        btn.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const elements = nextAll(item);
                elements.forEach((i)=> {
                    i.style.display = ''
                })
                item.remove()
                //item.style.display = 'none';
                
            })
        })
    }

}
export default btnShowNext;