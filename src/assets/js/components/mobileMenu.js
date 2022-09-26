const mobileMenu = () => {
    const burger = document.getElementById('btnMenu');
    const body = document.body;
    const links = document.querySelectorAll('.navigation__item-link');
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const btnBack = document.getElementById('btn__submenu-back')
    burger.addEventListener('click', () => {
        body.classList.toggle('is-show');
        if(body.classList.contains('sub-open')) {
            body.classList.remove('sub-open');
            document.querySelector('.sub-visible').classList.remove('sub-visible');
        }
    })
    if(links.length>0){
        links.forEach( (btn)=> {
            btn.addEventListener('click', (e)=>{
                if(width < 768) {
                    e.preventDefault()
                    const sub = e.target.nextElementSibling;
                    sub.classList.add('sub-visible');
                    body.classList.add('sub-open');
                }
            })
        });
    }
    if(btnBack){
        btnBack.addEventListener('click', ()=> {
            body.classList.remove('sub-open');
            document.querySelector('.sub-visible').classList.remove('sub-visible')
        })
    }

}

 export default mobileMenu;