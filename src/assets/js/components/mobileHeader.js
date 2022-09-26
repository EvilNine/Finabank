const mobileHeader = () => {
    const body = document.body;
    const headerHeight = document.querySelector('.header').offsetHeight;
    let lastScroll = headerHeight;
    const width = window.innerWidth;
    if( width < 768 ) {
        winScroll();
    }

    window.addEventListener('resize', ()=> { window.innerWidth < 768 ? winScroll() : ''} )

    function winScroll(){
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove('scroll-up');
                return;
            }
            if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
                // down
                body.classList.remove('scroll-up');
                body.classList.add('scroll-down');
                
            } else if ( currentScroll < lastScroll  && body.classList.contains('scroll-down') ) {
                // up
                body.classList.remove('scroll-down');
                body.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        })
    }    
}


export default mobileHeader;