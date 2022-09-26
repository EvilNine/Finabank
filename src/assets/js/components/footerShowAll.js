const footerShowAll = (selector, items) => {

    const btn = document.getElementById(selector);
    const elements = document.querySelectorAll(items);
    let textShowHide = false;
    if(btn){
        btn.addEventListener('click', ()=>{
            btn.lastChild.previousSibling.innerText = textShowHide ? btn.dataset.textOpen : btn.dataset.textHide;
            textShowHide = !textShowHide;
            btn.classList.toggle('visible__items');
            elements.forEach((item)=>{
                item.classList.toggle('visible')
            })
        })
    }

    

}
export default footerShowAll;