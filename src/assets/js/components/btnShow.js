const btnShow = (selector, hiddenTrClass) => {
    const btn = document.querySelectorAll(selector);

    btn.forEach( (item)=> {
        const target = document.getElementById(item.dataset.target);
        const arrTr = target.querySelectorAll('tr');
        let hiddenTr = [];
        let textShowHide = false;

        // create array of hidden elements
        arrTr.forEach( (tr)=>{
            if(tr.classList.contains(hiddenTrClass)) {
                hiddenTr.push(tr)
            }
        });
        
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            // toggle text onClick
            item.lastChild.previousSibling.innerText = textShowHide ? item.dataset.textOpen : item.dataset.textHide;
            textShowHide = !textShowHide;
            
            // toggle class onClick
            item.classList.toggle('visible__items');
            
            // toggle visible elements
            if(hiddenTr.length>0) {
                hiddenTr.forEach((tr)=>{
                    tr.classList.toggle(hiddenTrClass)
                })
            }

        })

    })
}

export default btnShow;