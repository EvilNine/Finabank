const multipleSelect = (selector) => {
    const select = document.querySelectorAll(selector);
    select.forEach((item)=>{
        const btn = item.querySelector('button');
        const checkboxes = item.querySelectorAll(`${selector}__item-checkbox`)
        const counter = btn.querySelector(`${selector}__btn-count`)
        checkboxes.forEach((checkbox)=>{
            checkbox.addEventListener('change', ()=>{
                let count = item.querySelectorAll(`${selector}__item-checkbox:checked`).length;
                if(!count == 0) {
                    counter.classList.add('.selected')
                    counter.innerText = count;
                } else {
                    counter.classList.remove('.selected')
                    counter.innerText = '';
                }
            })
        });
    })
}

export default multipleSelect;