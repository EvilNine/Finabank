const slideDownModal = (selector) => {
    const btn = document.querySelectorAll(selector);
    const body = document.body;
    const overlay = document.getElementById('backdrop');

    const closeModal = (element) => {
        element.classList.remove('show');
        body.classList.remove('modal-open');
    }
    
    if(btn.length>0){
        btn.forEach((item)=>{
            
            const target = item.dataset.target;
            const modal = document.getElementById(target);
            const close = modal.querySelector('[data-dismiss="modal"]');

            item.addEventListener('click', ()=>{
                modal.classList.add('show');
                body.classList.add('modal-open');
            });

            if(close) close.addEventListener('click', ()=> closeModal(modal));
            overlay.addEventListener('click', ()=> closeModal(modal));
        })
        
    }
}

export default slideDownModal;