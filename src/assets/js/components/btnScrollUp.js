const btnScrollUp = (selector) => {
    const btn = document.getElementById(selector);
    if(btn){
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: 0
            });
        });
    }
}

export default btnScrollUp;