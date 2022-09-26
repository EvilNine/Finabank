const btnScroll = (selector, containerHeight) => {
    const buttons = document.querySelectorAll(selector);
        
    buttons.forEach( (btn) =>{
        const id = document.getElementById(btn.dataset.target);
        let parentHeight = 0;
        
        if(containerHeight) {
            parentHeight = containerHeight;
        }
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: id.getBoundingClientRect().top + window.scrollY - parentHeight
            });
        });
    })

    
}

export default btnScroll;

